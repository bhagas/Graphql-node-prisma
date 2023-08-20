
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Fd_activitiesScalarFieldEnum = {
  id: 'id',
  status: 'status',
  priority: 'priority',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted',
  freshdesk_id: 'freshdesk_id'
};

exports.Prisma.Fd_agentsScalarFieldEnum = {
  id: 'id',
  available: 'available',
  ticket_scope: 'ticket_scope',
  type: 'type',
  active: 'active',
  email: 'email',
  name: 'name',
  phone: 'phone',
  last_active_at: 'last_active_at',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.Fd_escalationsScalarFieldEnum = {
  id: 'id',
  escalation_type: 'escalation_type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted',
  freshdesk_id: 'freshdesk_id'
};

exports.Prisma.Fd_groupScalarFieldEnum = {
  id: 'id',
  group_id: 'group_id',
  group_name: 'group_name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.Fd_priorityScalarFieldEnum = {
  id: 'id',
  priority_id: 'priority_id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.Fd_statusScalarFieldEnum = {
  id: 'id',
  status_id: 'status_id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.Fd_ticketsScalarFieldEnum = {
  id: 'id',
  json: 'json',
  ticket_id: 'ticket_id',
  cc_emails: 'cc_emails',
  fwd_emails: 'fwd_emails',
  reply_cc_emails: 'reply_cc_emails',
  ticket_cc_emails: 'ticket_cc_emails',
  tags: 'tags',
  email_config_id: 'email_config_id',
  group_id: 'group_id',
  priority: 'priority',
  requester_id: 'requester_id',
  requester_name: 'requester_name',
  requester_email: 'requester_email',
  responder_id: 'responder_id',
  source: 'source',
  status: 'status',
  subject: 'subject',
  company_id: 'company_id',
  type: 'type',
  to_emails: 'to_emails',
  product_id: 'product_id',
  fr_escalated: 'fr_escalated',
  spam: 'spam',
  urgent: 'urgent',
  is_escalated: 'is_escalated',
  fd_created_at: 'fd_created_at',
  fd_updated_at: 'fd_updated_at',
  due_by: 'due_by',
  fr_due_by: 'fr_due_by',
  nr_due_by: 'nr_due_by',
  nr_escalated: 'nr_escalated',
  json_custom_field: 'json_custom_field',
  cf_best_number_to_reach: 'cf_best_number_to_reach',
  cf_best_number_note: 'cf_best_number_note',
  cf_quotewekrs: 'cf_quotewekrs',
  cf_qbsalesorder: 'cf_qbsalesorder',
  cf_qbinv: 'cf_qbinv',
  cf_totalhours: 'cf_totalhours',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.Role_poolScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  userId: 'userId',
  roleId: 'roleId'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  role_name: 'role_name',
  code: 'code',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  confirmation_code: 'confirmation_code',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deleted: 'deleted'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.enum_users_status = exports.$Enums.enum_users_status = {
  pending: 'pending',
  active: 'active',
  inactive: 'inactive'
};

exports.Prisma.ModelName = {
  fd_activities: 'fd_activities',
  fd_agents: 'fd_agents',
  fd_escalations: 'fd_escalations',
  fd_group: 'fd_group',
  fd_priority: 'fd_priority',
  fd_status: 'fd_status',
  fd_tickets: 'fd_tickets',
  role_pool: 'role_pool',
  roles: 'roles',
  users: 'users'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
