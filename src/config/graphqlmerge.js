
import {buildSubgraphSchema} from '@apollo/subgraph';
import { applyMiddleware } from 'graphql-middleware';
import permissions from '../helper/permission.js';
import {typeDefs as userTypedef, resolvers as userResolvers} from'../modules/user/graphql.js';
import {typeDefs as roleTypedef, resolvers as roleResolvers} from'../modules/role/graphql.js';
let gabungan= [
  {typeDefs:userTypedef, resolvers: userResolvers},
  {typeDefs:roleTypedef, resolvers: roleResolvers},
]

const schemaWithMiddleware = applyMiddleware(buildSubgraphSchema(gabungan), permissions);
export default schemaWithMiddleware