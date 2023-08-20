import gql from'graphql-tag';
import { v4 as uuidv4 } from'uuid';
import jwt from'../../helper/jwt.js';
import bcrypt from'../../helper/bcrypt.js';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import db from '../../config/koneksi.js'


const typeDefs=
  gql`
#   enum CacheControlScope {
#   PUBLIC
#   PRIVATE
# }

# directive @cacheControl(
#   maxAge: Int
#   scope: CacheControlScope
#   inheritMaxAge: Boolean
# ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
  scalar Upload
  extend type Query {
    """
    Deskripsi untuk user
    berisi tentang profil user
    """
      users: usersResult
      "Query untuk user by id"
      user(id: ID!): User
  }
  extend type Mutation {
    createUser(input: UserInput): Output
    updateUser(idUser: ID!, input: UserInputEdit): Output
    login(input: LoginInput): OutputLogin
    activation(token:String!, password:String!): Output
    setRole(idUser:String!, roles:[inputRole]): Output
    removeUser(idUser:String!): Output
  }


type usersResult{
  data:[User],
  message:String,
  status:Int
}
  
  input UserInput {
    name: String,
    email: String!,
    status: String,
    password: String!
  }

  input UserInputEdit {
    name: String,
    email: String,
    status: String
  }
  input LoginInput {
    email: String!,
    password:String!
  }
  input inputRole{
    roleId:String
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type User {
     id: ID!,
     name: String,
     email: String,
     createdAt: String,
     updatedAt:String,
     roles:[Role],
     status:String
  }
  type OutputLogin{
    status:String,
    message:String,
    error:String,
    token:String,
    user:User
  }
  type Output{
    status:String,
    message:String,
    error:String
  }
  
`


const resolvers= {
  Upload: GraphQLUpload,
  Query: {
    users: async (obj, args, context, info) => {
      try {
        let dt = await db.$queryRaw('select * from users where deleted is null');
   
        for (let i = 0; i < dt.length; i++) {
          dt[i].roles= await db.$queryRaw(`select b.id, b.code, b.role_name from role_pool a join roles b on a."roleId" = b.id where a."userId"= ${dt[i].id}`);
        }
        // info.cacheControl.setCacheHint({ maxAge: 10 });
        return {data: dt, status:200, message:'Success'};
      } catch (error) {
        console.log(error);
      }
    
       
    },
    user: async (obj, args, context, info) =>
        {
           
          let dt = await db.$queryRaw(`select * from Users where id= ${args.id}`);
          //harus object return nya
          // info.cacheControl.setCacheHint({ maxAge: 0 });
            return dt[0];
        },
},
Mutation:{
  createUser: async (_, {input})=>{
    try {
    //  let file = await saveFile(await image);
   
      input.id=uuidv4()
      // input.password=await enkrip.hash(input.password)
      input.confirmation_code = await jwt.generate({id: input.id}, '1h');
      // let html =`<h1>Invitation</h1>
      // <h2>Hello ${input.name}</h2>
      // <p>Transition has invited you, You can login using this email as username and password: ${input.password}</p>
      // <a href=${process.env.FE_URI}> Click here</a>
      // </div>`
      // mail(input.email, "Transition has invited you", html)
      input.status='active';
     await db.users.create({data:input})
        return {
            status: '200',
            message: 'Berhasil Simpan'
        }
    } catch (error) {
      console.log(error);
      return {
        status: '500',
        message: 'gagal',
        error: JSON.stringify(error)
    }
    }
   
  },
  login: async (_, {input})=>{
    try {
      
      let dt = await db.$queryRaw(`select * from users where email= ${input.email} and deleted is null`);
     if(dt.length){
      let hasil = await bcrypt.compare(input.password, dt[0].password);
 
      if(hasil){
        dt[0].roles= await db.$queryRaw(`select b.id, b.code, b.role_name from role_pool a join roles b on a."roleId" = b.id where a."userId"= ${dt[0].id}`);
   
        let token = await jwt.generate({id: dt[0].id}, '24h')
            return {
                status: '200',
                message: 'Success',
                token,
                user: dt[0]
            }
      }else{
        
        return {
          status: '403',
          message: 'Wrong Password',
          }
        }
      }else{
        return {
            status: '403',
            message: 'Email is not registered',
        }
     }
     
    } catch (error) {
      console.log(error);
      return {
        status: '500',
        message: 'gagal',
        error
    }
    }
   
  },
  activation: async (_, {token, password})=>{
    try {
      let user=await jwt.verify(token);
      if(user){
        let dt = await db.$queryRaw(`select * from users where confirmation_code= ${token} and deleted is null`);
        
        if(dt.length){
         dt[0].roles= await db.$queryRaw(`select b.id, b.code, b.role_name from role_pool a join roles b on a."roleId" = b.id where a."userId"= ${dt[0].id}`);
       
         let pass = await bcrypt.gen(password);
     
         await db.users.update({
          data: {status:'active', password:pass},
           where: { id:dt[0].id }
         }
      
         )
           return {
               status: '200',
               message: 'Success',
               user: dt[0]
           }
        }else{
         return {
           status: '403',
           message: 'User is not registered',
       }
        }
      }else{
        return {
          status: '500',
          message: 'Token Expired',
      }
      }
   
     
    } catch (error) {
      console.log(error);
      return {
        status: '500',
        message: 'Internal Server Error',
        error
    }
    }
   
  },
  updateUser: async (_, {idUser, input})=>{
      // console.log(idUser, input);
      await db.users.update(
        
         {data:input, where: { id:idUser } }
       )
      return {
          status: '200',
          message: 'Updated'
      }
  },

  removeUser: async (_, {idUser})=>{
    // console.log(idUser, input);
    try {
      await db.users.delete(
        { where: { id:idUser } }
      )
     return {
         status: '200',
         message: 'Removed'
     }
    } catch (error) {
      return {
        status: '500',
        message: 'Internal Server Error',
        error:JSON.stringify(error)
    }
   } 
    },
    

  setRole: async (_, {idUser, roles})=>{
    try {
 
      const result = await db.$transaction(async (t) => {
        await t.role_pool.delete({
          where: {
            userId:idUser
          }
        });
        for (let i = 0; i < roles.length; i++) {
          roles[i].id = uuidv4();
          roles[i].userId = idUser;
          
        }
        // console.log(idUser, roles);
       await t.role_pool.createMany({data:roles})
          return {
            status: '200',
            message: 'Updated'
        }
      })

      return result
    } catch (error) {
      console.log(error);
      return {
        status: '500',
        message: 'Failed',
        error
    }
    }
   
}
}
}


export {typeDefs, resolvers}
