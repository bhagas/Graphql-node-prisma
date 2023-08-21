
import {buildSubgraphSchema} from '@apollo/subgraph';
import { applyMiddleware } from 'graphql-middleware';
import permissions from '../helper/permission.js';
import gql from'graphql-tag';
import { rateLimitDirective } from 'graphql-rate-limit-directive';
const { rateLimitDirectiveTypeDefs, rateLimitDirectiveTransformer } = rateLimitDirective();
import {typeDefs as userTypedef, resolvers as userResolvers} from'../modules/user/graphql.js';
import {typeDefs as roleTypedef, resolvers as roleResolvers} from'../modules/role/graphql.js';
let typedefRatelimit = gql`${rateLimitDirectiveTypeDefs}`
let gabungan= [
  {typeDefs:userTypedef, resolvers: userResolvers},
  {typeDefs:roleTypedef, resolvers: roleResolvers},
  {typeDefs:typedefRatelimit, resolvers:{}}
]

let schemaWithMiddleware = applyMiddleware(buildSubgraphSchema(gabungan), permissions);
schemaWithMiddleware = rateLimitDirectiveTransformer(schemaWithMiddleware)
export default schemaWithMiddleware