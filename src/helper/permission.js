import { chain,not,and, or, rule, shield } from"graphql-shield";
import { PrismaClient } from '../config/client/index.js';
const prisma = new PrismaClient()
import _ from "lodash";

const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => {

  if(ctx.user !== null){
  try {
    let user= await prisma.$queryRaw(`select * from users where email= ${ctx.user.email}`);
    // console.log(user, 'dd');
      if(user.length){
       user[0].roles= await prisma.$queryRaw(`select b.id, b.code, b.role_name from role_pool a join roles b on a."roleId" = b.id where a."userId"= ${user[0].id}`);
      }
      ctx.user = user[0];
 
      return true;
  } catch (error) {
    console.log(error);
    return new Error('Not Authenticated');
  }
     
  } else{
      return new Error('Not Authenticated');
  }
 
})


const isActive = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => {
  if(ctx.user.status === 'active'){
      return true;
  } else{
      return new Error('Not Authenticated');
  }
 
})

   
  const isSuperAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    
    return _.some(ctx.user.roles, ['code', 'A-1']);
  })
   
  const isSalesManager = rule({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    return _.some(ctx.user.roles, ['code', 'A-2']);
  })
   

  // Permissions
  const permissions = shield({
    Query: {
      // users: chain(isAuthenticated, isActive,isSuperAdmin),
      // user:chain(isAuthenticated, isActive,isSuperAdmin),
      // role:chain(isAuthenticated, isActive,isSuperAdmin),
      // roles:chain(isAuthenticated, isActive,isSuperAdmin)
    },
    Mutation:{
      // createRole:chain(isAuthenticated, isActive, isSuperAdmin),
      // createUser:chain(isAuthenticated, isActive, isSuperAdmin),
      // removeRole:chain(isAuthenticated, isActive,isSuperAdmin),
      // removeUser:chain(isAuthenticated, isActive,isSuperAdmin),
      // setRole:chain(isAuthenticated, isActive,isSuperAdmin),
      // updateRole:chain(isAuthenticated, isActive,isSuperAdmin),
      // updateUser:chain(isAuthenticated, isActive,isSuperAdmin)
    }
  })

export default permissions