
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model fd_activities
 * 
 */
export type fd_activities = $Result.DefaultSelection<Prisma.$fd_activitiesPayload>
/**
 * Model fd_agents
 * 
 */
export type fd_agents = $Result.DefaultSelection<Prisma.$fd_agentsPayload>
/**
 * Model fd_escalations
 * 
 */
export type fd_escalations = $Result.DefaultSelection<Prisma.$fd_escalationsPayload>
/**
 * Model fd_group
 * 
 */
export type fd_group = $Result.DefaultSelection<Prisma.$fd_groupPayload>
/**
 * Model fd_priority
 * 
 */
export type fd_priority = $Result.DefaultSelection<Prisma.$fd_priorityPayload>
/**
 * Model fd_status
 * 
 */
export type fd_status = $Result.DefaultSelection<Prisma.$fd_statusPayload>
/**
 * Model fd_tickets
 * 
 */
export type fd_tickets = $Result.DefaultSelection<Prisma.$fd_ticketsPayload>
/**
 * Model role_pool
 * 
 */
export type role_pool = $Result.DefaultSelection<Prisma.$role_poolPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const enum_users_status: {
  pending: 'pending',
  active: 'active',
  inactive: 'inactive'
};

export type enum_users_status = (typeof enum_users_status)[keyof typeof enum_users_status]

}

export type enum_users_status = $Enums.enum_users_status

export const enum_users_status: typeof $Enums.enum_users_status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fd_activities
 * const fd_activities = await prisma.fd_activities.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Fd_activities
   * const fd_activities = await prisma.fd_activities.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.fd_activities`: Exposes CRUD operations for the **fd_activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fd_activities
    * const fd_activities = await prisma.fd_activities.findMany()
    * ```
    */
  get fd_activities(): Prisma.fd_activitiesDelegate<ExtArgs>;

  /**
   * `prisma.fd_agents`: Exposes CRUD operations for the **fd_agents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fd_agents
    * const fd_agents = await prisma.fd_agents.findMany()
    * ```
    */
  get fd_agents(): Prisma.fd_agentsDelegate<ExtArgs>;

  /**
   * `prisma.fd_escalations`: Exposes CRUD operations for the **fd_escalations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fd_escalations
    * const fd_escalations = await prisma.fd_escalations.findMany()
    * ```
    */
  get fd_escalations(): Prisma.fd_escalationsDelegate<ExtArgs>;

  /**
   * `prisma.fd_group`: Exposes CRUD operations for the **fd_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fd_groups
    * const fd_groups = await prisma.fd_group.findMany()
    * ```
    */
  get fd_group(): Prisma.fd_groupDelegate<ExtArgs>;

  /**
   * `prisma.fd_priority`: Exposes CRUD operations for the **fd_priority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fd_priorities
    * const fd_priorities = await prisma.fd_priority.findMany()
    * ```
    */
  get fd_priority(): Prisma.fd_priorityDelegate<ExtArgs>;

  /**
   * `prisma.fd_status`: Exposes CRUD operations for the **fd_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fd_statuses
    * const fd_statuses = await prisma.fd_status.findMany()
    * ```
    */
  get fd_status(): Prisma.fd_statusDelegate<ExtArgs>;

  /**
   * `prisma.fd_tickets`: Exposes CRUD operations for the **fd_tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fd_tickets
    * const fd_tickets = await prisma.fd_tickets.findMany()
    * ```
    */
  get fd_tickets(): Prisma.fd_ticketsDelegate<ExtArgs>;

  /**
   * `prisma.role_pool`: Exposes CRUD operations for the **role_pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_pools
    * const role_pools = await prisma.role_pool.findMany()
    * ```
    */
  get role_pool(): Prisma.role_poolDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'fd_activities' | 'fd_agents' | 'fd_escalations' | 'fd_group' | 'fd_priority' | 'fd_status' | 'fd_tickets' | 'role_pool' | 'roles' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      fd_activities: {
        payload: Prisma.$fd_activitiesPayload<ExtArgs>
        fields: Prisma.fd_activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fd_activitiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fd_activitiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload>
          }
          findFirst: {
            args: Prisma.fd_activitiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fd_activitiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload>
          }
          findMany: {
            args: Prisma.fd_activitiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload>[]
          }
          create: {
            args: Prisma.fd_activitiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload>
          }
          createMany: {
            args: Prisma.fd_activitiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fd_activitiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload>
          }
          update: {
            args: Prisma.fd_activitiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload>
          }
          deleteMany: {
            args: Prisma.fd_activitiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fd_activitiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fd_activitiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_activitiesPayload>
          }
          aggregate: {
            args: Prisma.Fd_activitiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFd_activities>
          }
          groupBy: {
            args: Prisma.fd_activitiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fd_activitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.fd_activitiesCountArgs<ExtArgs>,
            result: $Utils.Optional<Fd_activitiesCountAggregateOutputType> | number
          }
        }
      }
      fd_agents: {
        payload: Prisma.$fd_agentsPayload<ExtArgs>
        fields: Prisma.fd_agentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fd_agentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fd_agentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload>
          }
          findFirst: {
            args: Prisma.fd_agentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fd_agentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload>
          }
          findMany: {
            args: Prisma.fd_agentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload>[]
          }
          create: {
            args: Prisma.fd_agentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload>
          }
          createMany: {
            args: Prisma.fd_agentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fd_agentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload>
          }
          update: {
            args: Prisma.fd_agentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload>
          }
          deleteMany: {
            args: Prisma.fd_agentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fd_agentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fd_agentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_agentsPayload>
          }
          aggregate: {
            args: Prisma.Fd_agentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFd_agents>
          }
          groupBy: {
            args: Prisma.fd_agentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fd_agentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fd_agentsCountArgs<ExtArgs>,
            result: $Utils.Optional<Fd_agentsCountAggregateOutputType> | number
          }
        }
      }
      fd_escalations: {
        payload: Prisma.$fd_escalationsPayload<ExtArgs>
        fields: Prisma.fd_escalationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fd_escalationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fd_escalationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload>
          }
          findFirst: {
            args: Prisma.fd_escalationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fd_escalationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload>
          }
          findMany: {
            args: Prisma.fd_escalationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload>[]
          }
          create: {
            args: Prisma.fd_escalationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload>
          }
          createMany: {
            args: Prisma.fd_escalationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fd_escalationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload>
          }
          update: {
            args: Prisma.fd_escalationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload>
          }
          deleteMany: {
            args: Prisma.fd_escalationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fd_escalationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fd_escalationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_escalationsPayload>
          }
          aggregate: {
            args: Prisma.Fd_escalationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFd_escalations>
          }
          groupBy: {
            args: Prisma.fd_escalationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fd_escalationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fd_escalationsCountArgs<ExtArgs>,
            result: $Utils.Optional<Fd_escalationsCountAggregateOutputType> | number
          }
        }
      }
      fd_group: {
        payload: Prisma.$fd_groupPayload<ExtArgs>
        fields: Prisma.fd_groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fd_groupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fd_groupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload>
          }
          findFirst: {
            args: Prisma.fd_groupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fd_groupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload>
          }
          findMany: {
            args: Prisma.fd_groupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload>[]
          }
          create: {
            args: Prisma.fd_groupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload>
          }
          createMany: {
            args: Prisma.fd_groupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fd_groupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload>
          }
          update: {
            args: Prisma.fd_groupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload>
          }
          deleteMany: {
            args: Prisma.fd_groupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fd_groupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fd_groupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_groupPayload>
          }
          aggregate: {
            args: Prisma.Fd_groupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFd_group>
          }
          groupBy: {
            args: Prisma.fd_groupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fd_groupGroupByOutputType>[]
          }
          count: {
            args: Prisma.fd_groupCountArgs<ExtArgs>,
            result: $Utils.Optional<Fd_groupCountAggregateOutputType> | number
          }
        }
      }
      fd_priority: {
        payload: Prisma.$fd_priorityPayload<ExtArgs>
        fields: Prisma.fd_priorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fd_priorityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fd_priorityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload>
          }
          findFirst: {
            args: Prisma.fd_priorityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fd_priorityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload>
          }
          findMany: {
            args: Prisma.fd_priorityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload>[]
          }
          create: {
            args: Prisma.fd_priorityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload>
          }
          createMany: {
            args: Prisma.fd_priorityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fd_priorityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload>
          }
          update: {
            args: Prisma.fd_priorityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload>
          }
          deleteMany: {
            args: Prisma.fd_priorityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fd_priorityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fd_priorityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_priorityPayload>
          }
          aggregate: {
            args: Prisma.Fd_priorityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFd_priority>
          }
          groupBy: {
            args: Prisma.fd_priorityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fd_priorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.fd_priorityCountArgs<ExtArgs>,
            result: $Utils.Optional<Fd_priorityCountAggregateOutputType> | number
          }
        }
      }
      fd_status: {
        payload: Prisma.$fd_statusPayload<ExtArgs>
        fields: Prisma.fd_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fd_statusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fd_statusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload>
          }
          findFirst: {
            args: Prisma.fd_statusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fd_statusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload>
          }
          findMany: {
            args: Prisma.fd_statusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload>[]
          }
          create: {
            args: Prisma.fd_statusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload>
          }
          createMany: {
            args: Prisma.fd_statusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fd_statusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload>
          }
          update: {
            args: Prisma.fd_statusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload>
          }
          deleteMany: {
            args: Prisma.fd_statusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fd_statusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fd_statusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_statusPayload>
          }
          aggregate: {
            args: Prisma.Fd_statusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFd_status>
          }
          groupBy: {
            args: Prisma.fd_statusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fd_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.fd_statusCountArgs<ExtArgs>,
            result: $Utils.Optional<Fd_statusCountAggregateOutputType> | number
          }
        }
      }
      fd_tickets: {
        payload: Prisma.$fd_ticketsPayload<ExtArgs>
        fields: Prisma.fd_ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fd_ticketsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fd_ticketsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload>
          }
          findFirst: {
            args: Prisma.fd_ticketsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fd_ticketsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload>
          }
          findMany: {
            args: Prisma.fd_ticketsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload>[]
          }
          create: {
            args: Prisma.fd_ticketsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload>
          }
          createMany: {
            args: Prisma.fd_ticketsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fd_ticketsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload>
          }
          update: {
            args: Prisma.fd_ticketsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload>
          }
          deleteMany: {
            args: Prisma.fd_ticketsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fd_ticketsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fd_ticketsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fd_ticketsPayload>
          }
          aggregate: {
            args: Prisma.Fd_ticketsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFd_tickets>
          }
          groupBy: {
            args: Prisma.fd_ticketsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Fd_ticketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fd_ticketsCountArgs<ExtArgs>,
            result: $Utils.Optional<Fd_ticketsCountAggregateOutputType> | number
          }
        }
      }
      role_pool: {
        payload: Prisma.$role_poolPayload<ExtArgs>
        fields: Prisma.role_poolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.role_poolFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.role_poolFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload>
          }
          findFirst: {
            args: Prisma.role_poolFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.role_poolFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload>
          }
          findMany: {
            args: Prisma.role_poolFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload>[]
          }
          create: {
            args: Prisma.role_poolCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload>
          }
          createMany: {
            args: Prisma.role_poolCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.role_poolDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload>
          }
          update: {
            args: Prisma.role_poolUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload>
          }
          deleteMany: {
            args: Prisma.role_poolDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.role_poolUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.role_poolUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$role_poolPayload>
          }
          aggregate: {
            args: Prisma.Role_poolAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole_pool>
          }
          groupBy: {
            args: Prisma.role_poolGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Role_poolGroupByOutputType>[]
          }
          count: {
            args: Prisma.role_poolCountArgs<ExtArgs>,
            result: $Utils.Optional<Role_poolCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Fd_ticketsCountOutputType
   */

  export type Fd_ticketsCountOutputType = {
    fd_activities: number
    fd_escalations: number
  }

  export type Fd_ticketsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fd_activities?: boolean | Fd_ticketsCountOutputTypeCountFd_activitiesArgs
    fd_escalations?: boolean | Fd_ticketsCountOutputTypeCountFd_escalationsArgs
  }

  // Custom InputTypes

  /**
   * Fd_ticketsCountOutputType without action
   */
  export type Fd_ticketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fd_ticketsCountOutputType
     */
    select?: Fd_ticketsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Fd_ticketsCountOutputType without action
   */
  export type Fd_ticketsCountOutputTypeCountFd_activitiesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_activitiesWhereInput
  }


  /**
   * Fd_ticketsCountOutputType without action
   */
  export type Fd_ticketsCountOutputTypeCountFd_escalationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_escalationsWhereInput
  }



  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    role_pool: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    role_pool?: boolean | RolesCountOutputTypeCountRole_poolArgs
  }

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountRole_poolArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: role_poolWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    role_pool: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    role_pool?: boolean | UsersCountOutputTypeCountRole_poolArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRole_poolArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: role_poolWhereInput
  }



  /**
   * Models
   */

  /**
   * Model fd_activities
   */

  export type AggregateFd_activities = {
    _count: Fd_activitiesCountAggregateOutputType | null
    _avg: Fd_activitiesAvgAggregateOutputType | null
    _sum: Fd_activitiesSumAggregateOutputType | null
    _min: Fd_activitiesMinAggregateOutputType | null
    _max: Fd_activitiesMaxAggregateOutputType | null
  }

  export type Fd_activitiesAvgAggregateOutputType = {
    status: number | null
  }

  export type Fd_activitiesSumAggregateOutputType = {
    status: number | null
  }

  export type Fd_activitiesMinAggregateOutputType = {
    id: string | null
    status: number | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
    freshdesk_id: string | null
  }

  export type Fd_activitiesMaxAggregateOutputType = {
    id: string | null
    status: number | null
    priority: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
    freshdesk_id: string | null
  }

  export type Fd_activitiesCountAggregateOutputType = {
    id: number
    status: number
    priority: number
    createdAt: number
    updatedAt: number
    deleted: number
    freshdesk_id: number
    _all: number
  }


  export type Fd_activitiesAvgAggregateInputType = {
    status?: true
  }

  export type Fd_activitiesSumAggregateInputType = {
    status?: true
  }

  export type Fd_activitiesMinAggregateInputType = {
    id?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    freshdesk_id?: true
  }

  export type Fd_activitiesMaxAggregateInputType = {
    id?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    freshdesk_id?: true
  }

  export type Fd_activitiesCountAggregateInputType = {
    id?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    freshdesk_id?: true
    _all?: true
  }

  export type Fd_activitiesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_activities to aggregate.
     */
    where?: fd_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_activities to fetch.
     */
    orderBy?: fd_activitiesOrderByWithRelationInput | fd_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fd_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fd_activities
    **/
    _count?: true | Fd_activitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fd_activitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fd_activitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fd_activitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fd_activitiesMaxAggregateInputType
  }

  export type GetFd_activitiesAggregateType<T extends Fd_activitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateFd_activities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFd_activities[P]>
      : GetScalarType<T[P], AggregateFd_activities[P]>
  }




  export type fd_activitiesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_activitiesWhereInput
    orderBy?: fd_activitiesOrderByWithAggregationInput | fd_activitiesOrderByWithAggregationInput[]
    by: Fd_activitiesScalarFieldEnum[] | Fd_activitiesScalarFieldEnum
    having?: fd_activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fd_activitiesCountAggregateInputType | true
    _avg?: Fd_activitiesAvgAggregateInputType
    _sum?: Fd_activitiesSumAggregateInputType
    _min?: Fd_activitiesMinAggregateInputType
    _max?: Fd_activitiesMaxAggregateInputType
  }

  export type Fd_activitiesGroupByOutputType = {
    id: string
    status: number | null
    priority: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    freshdesk_id: string | null
    _count: Fd_activitiesCountAggregateOutputType | null
    _avg: Fd_activitiesAvgAggregateOutputType | null
    _sum: Fd_activitiesSumAggregateOutputType | null
    _min: Fd_activitiesMinAggregateOutputType | null
    _max: Fd_activitiesMaxAggregateOutputType | null
  }

  type GetFd_activitiesGroupByPayload<T extends fd_activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fd_activitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fd_activitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fd_activitiesGroupByOutputType[P]>
            : GetScalarType<T[P], Fd_activitiesGroupByOutputType[P]>
        }
      >
    >


  export type fd_activitiesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    freshdesk_id?: boolean
    fd_tickets?: boolean | fd_activities$fd_ticketsArgs<ExtArgs>
  }, ExtArgs["result"]["fd_activities"]>

  export type fd_activitiesSelectScalar = {
    id?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    freshdesk_id?: boolean
  }

  export type fd_activitiesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fd_tickets?: boolean | fd_activities$fd_ticketsArgs<ExtArgs>
  }


  export type $fd_activitiesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fd_activities"
    objects: {
      fd_tickets: Prisma.$fd_ticketsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      status: number | null
      priority: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
      freshdesk_id: string | null
    }, ExtArgs["result"]["fd_activities"]>
    composites: {}
  }


  type fd_activitiesGetPayload<S extends boolean | null | undefined | fd_activitiesDefaultArgs> = $Result.GetResult<Prisma.$fd_activitiesPayload, S>

  type fd_activitiesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fd_activitiesFindManyArgs, 'select' | 'include'> & {
      select?: Fd_activitiesCountAggregateInputType | true
    }

  export interface fd_activitiesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fd_activities'], meta: { name: 'fd_activities' } }
    /**
     * Find zero or one Fd_activities that matches the filter.
     * @param {fd_activitiesFindUniqueArgs} args - Arguments to find a Fd_activities
     * @example
     * // Get one Fd_activities
     * const fd_activities = await prisma.fd_activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fd_activitiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fd_activitiesFindUniqueArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fd_activities that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fd_activitiesFindUniqueOrThrowArgs} args - Arguments to find a Fd_activities
     * @example
     * // Get one Fd_activities
     * const fd_activities = await prisma.fd_activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fd_activitiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_activitiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fd_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_activitiesFindFirstArgs} args - Arguments to find a Fd_activities
     * @example
     * // Get one Fd_activities
     * const fd_activities = await prisma.fd_activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fd_activitiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_activitiesFindFirstArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fd_activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_activitiesFindFirstOrThrowArgs} args - Arguments to find a Fd_activities
     * @example
     * // Get one Fd_activities
     * const fd_activities = await prisma.fd_activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fd_activitiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_activitiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fd_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_activitiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fd_activities
     * const fd_activities = await prisma.fd_activities.findMany()
     * 
     * // Get first 10 Fd_activities
     * const fd_activities = await prisma.fd_activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fd_activitiesWithIdOnly = await prisma.fd_activities.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fd_activitiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_activitiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fd_activities.
     * @param {fd_activitiesCreateArgs} args - Arguments to create a Fd_activities.
     * @example
     * // Create one Fd_activities
     * const Fd_activities = await prisma.fd_activities.create({
     *   data: {
     *     // ... data to create a Fd_activities
     *   }
     * })
     * 
    **/
    create<T extends fd_activitiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_activitiesCreateArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fd_activities.
     *     @param {fd_activitiesCreateManyArgs} args - Arguments to create many Fd_activities.
     *     @example
     *     // Create many Fd_activities
     *     const fd_activities = await prisma.fd_activities.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fd_activitiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_activitiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fd_activities.
     * @param {fd_activitiesDeleteArgs} args - Arguments to delete one Fd_activities.
     * @example
     * // Delete one Fd_activities
     * const Fd_activities = await prisma.fd_activities.delete({
     *   where: {
     *     // ... filter to delete one Fd_activities
     *   }
     * })
     * 
    **/
    delete<T extends fd_activitiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fd_activitiesDeleteArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fd_activities.
     * @param {fd_activitiesUpdateArgs} args - Arguments to update one Fd_activities.
     * @example
     * // Update one Fd_activities
     * const fd_activities = await prisma.fd_activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fd_activitiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_activitiesUpdateArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fd_activities.
     * @param {fd_activitiesDeleteManyArgs} args - Arguments to filter Fd_activities to delete.
     * @example
     * // Delete a few Fd_activities
     * const { count } = await prisma.fd_activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fd_activitiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_activitiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fd_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fd_activities
     * const fd_activities = await prisma.fd_activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fd_activitiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fd_activitiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fd_activities.
     * @param {fd_activitiesUpsertArgs} args - Arguments to update or create a Fd_activities.
     * @example
     * // Update or create a Fd_activities
     * const fd_activities = await prisma.fd_activities.upsert({
     *   create: {
     *     // ... data to create a Fd_activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fd_activities we want to update
     *   }
     * })
    **/
    upsert<T extends fd_activitiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fd_activitiesUpsertArgs<ExtArgs>>
    ): Prisma__fd_activitiesClient<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fd_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_activitiesCountArgs} args - Arguments to filter Fd_activities to count.
     * @example
     * // Count the number of Fd_activities
     * const count = await prisma.fd_activities.count({
     *   where: {
     *     // ... the filter for the Fd_activities we want to count
     *   }
     * })
    **/
    count<T extends fd_activitiesCountArgs>(
      args?: Subset<T, fd_activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fd_activitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fd_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fd_activitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fd_activitiesAggregateArgs>(args: Subset<T, Fd_activitiesAggregateArgs>): Prisma.PrismaPromise<GetFd_activitiesAggregateType<T>>

    /**
     * Group by Fd_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_activitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fd_activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fd_activitiesGroupByArgs['orderBy'] }
        : { orderBy?: fd_activitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fd_activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFd_activitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fd_activities model
   */
  readonly fields: fd_activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fd_activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fd_activitiesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fd_tickets<T extends fd_activities$fd_ticketsArgs<ExtArgs> = {}>(args?: Subset<T, fd_activities$fd_ticketsArgs<ExtArgs>>): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fd_activities model
   */ 
  interface fd_activitiesFieldRefs {
    readonly id: FieldRef<"fd_activities", 'String'>
    readonly status: FieldRef<"fd_activities", 'Int'>
    readonly priority: FieldRef<"fd_activities", 'String'>
    readonly createdAt: FieldRef<"fd_activities", 'DateTime'>
    readonly updatedAt: FieldRef<"fd_activities", 'DateTime'>
    readonly deleted: FieldRef<"fd_activities", 'DateTime'>
    readonly freshdesk_id: FieldRef<"fd_activities", 'String'>
  }
    

  // Custom InputTypes

  /**
   * fd_activities findUnique
   */
  export type fd_activitiesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which fd_activities to fetch.
     */
    where: fd_activitiesWhereUniqueInput
  }


  /**
   * fd_activities findUniqueOrThrow
   */
  export type fd_activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which fd_activities to fetch.
     */
    where: fd_activitiesWhereUniqueInput
  }


  /**
   * fd_activities findFirst
   */
  export type fd_activitiesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which fd_activities to fetch.
     */
    where?: fd_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_activities to fetch.
     */
    orderBy?: fd_activitiesOrderByWithRelationInput | fd_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_activities.
     */
    cursor?: fd_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_activities.
     */
    distinct?: Fd_activitiesScalarFieldEnum | Fd_activitiesScalarFieldEnum[]
  }


  /**
   * fd_activities findFirstOrThrow
   */
  export type fd_activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which fd_activities to fetch.
     */
    where?: fd_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_activities to fetch.
     */
    orderBy?: fd_activitiesOrderByWithRelationInput | fd_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_activities.
     */
    cursor?: fd_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_activities.
     */
    distinct?: Fd_activitiesScalarFieldEnum | Fd_activitiesScalarFieldEnum[]
  }


  /**
   * fd_activities findMany
   */
  export type fd_activitiesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which fd_activities to fetch.
     */
    where?: fd_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_activities to fetch.
     */
    orderBy?: fd_activitiesOrderByWithRelationInput | fd_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fd_activities.
     */
    cursor?: fd_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_activities.
     */
    skip?: number
    distinct?: Fd_activitiesScalarFieldEnum | Fd_activitiesScalarFieldEnum[]
  }


  /**
   * fd_activities create
   */
  export type fd_activitiesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a fd_activities.
     */
    data: XOR<fd_activitiesCreateInput, fd_activitiesUncheckedCreateInput>
  }


  /**
   * fd_activities createMany
   */
  export type fd_activitiesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fd_activities.
     */
    data: fd_activitiesCreateManyInput | fd_activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fd_activities update
   */
  export type fd_activitiesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a fd_activities.
     */
    data: XOR<fd_activitiesUpdateInput, fd_activitiesUncheckedUpdateInput>
    /**
     * Choose, which fd_activities to update.
     */
    where: fd_activitiesWhereUniqueInput
  }


  /**
   * fd_activities updateMany
   */
  export type fd_activitiesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fd_activities.
     */
    data: XOR<fd_activitiesUpdateManyMutationInput, fd_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which fd_activities to update
     */
    where?: fd_activitiesWhereInput
  }


  /**
   * fd_activities upsert
   */
  export type fd_activitiesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the fd_activities to update in case it exists.
     */
    where: fd_activitiesWhereUniqueInput
    /**
     * In case the fd_activities found by the `where` argument doesn't exist, create a new fd_activities with this data.
     */
    create: XOR<fd_activitiesCreateInput, fd_activitiesUncheckedCreateInput>
    /**
     * In case the fd_activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fd_activitiesUpdateInput, fd_activitiesUncheckedUpdateInput>
  }


  /**
   * fd_activities delete
   */
  export type fd_activitiesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    /**
     * Filter which fd_activities to delete.
     */
    where: fd_activitiesWhereUniqueInput
  }


  /**
   * fd_activities deleteMany
   */
  export type fd_activitiesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_activities to delete
     */
    where?: fd_activitiesWhereInput
  }


  /**
   * fd_activities.fd_tickets
   */
  export type fd_activities$fd_ticketsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    where?: fd_ticketsWhereInput
  }


  /**
   * fd_activities without action
   */
  export type fd_activitiesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
  }



  /**
   * Model fd_agents
   */

  export type AggregateFd_agents = {
    _count: Fd_agentsCountAggregateOutputType | null
    _avg: Fd_agentsAvgAggregateOutputType | null
    _sum: Fd_agentsSumAggregateOutputType | null
    _min: Fd_agentsMinAggregateOutputType | null
    _max: Fd_agentsMaxAggregateOutputType | null
  }

  export type Fd_agentsAvgAggregateOutputType = {
    ticket_scope: number | null
  }

  export type Fd_agentsSumAggregateOutputType = {
    ticket_scope: number | null
  }

  export type Fd_agentsMinAggregateOutputType = {
    id: string | null
    available: string | null
    ticket_scope: number | null
    type: string | null
    active: string | null
    email: string | null
    name: string | null
    phone: string | null
    last_active_at: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_agentsMaxAggregateOutputType = {
    id: string | null
    available: string | null
    ticket_scope: number | null
    type: string | null
    active: string | null
    email: string | null
    name: string | null
    phone: string | null
    last_active_at: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_agentsCountAggregateOutputType = {
    id: number
    available: number
    ticket_scope: number
    type: number
    active: number
    email: number
    name: number
    phone: number
    last_active_at: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type Fd_agentsAvgAggregateInputType = {
    ticket_scope?: true
  }

  export type Fd_agentsSumAggregateInputType = {
    ticket_scope?: true
  }

  export type Fd_agentsMinAggregateInputType = {
    id?: true
    available?: true
    ticket_scope?: true
    type?: true
    active?: true
    email?: true
    name?: true
    phone?: true
    last_active_at?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_agentsMaxAggregateInputType = {
    id?: true
    available?: true
    ticket_scope?: true
    type?: true
    active?: true
    email?: true
    name?: true
    phone?: true
    last_active_at?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_agentsCountAggregateInputType = {
    id?: true
    available?: true
    ticket_scope?: true
    type?: true
    active?: true
    email?: true
    name?: true
    phone?: true
    last_active_at?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type Fd_agentsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_agents to aggregate.
     */
    where?: fd_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_agents to fetch.
     */
    orderBy?: fd_agentsOrderByWithRelationInput | fd_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fd_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fd_agents
    **/
    _count?: true | Fd_agentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fd_agentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fd_agentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fd_agentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fd_agentsMaxAggregateInputType
  }

  export type GetFd_agentsAggregateType<T extends Fd_agentsAggregateArgs> = {
        [P in keyof T & keyof AggregateFd_agents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFd_agents[P]>
      : GetScalarType<T[P], AggregateFd_agents[P]>
  }




  export type fd_agentsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_agentsWhereInput
    orderBy?: fd_agentsOrderByWithAggregationInput | fd_agentsOrderByWithAggregationInput[]
    by: Fd_agentsScalarFieldEnum[] | Fd_agentsScalarFieldEnum
    having?: fd_agentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fd_agentsCountAggregateInputType | true
    _avg?: Fd_agentsAvgAggregateInputType
    _sum?: Fd_agentsSumAggregateInputType
    _min?: Fd_agentsMinAggregateInputType
    _max?: Fd_agentsMaxAggregateInputType
  }

  export type Fd_agentsGroupByOutputType = {
    id: string
    available: string | null
    ticket_scope: number | null
    type: string | null
    active: string | null
    email: string | null
    name: string | null
    phone: string | null
    last_active_at: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: Fd_agentsCountAggregateOutputType | null
    _avg: Fd_agentsAvgAggregateOutputType | null
    _sum: Fd_agentsSumAggregateOutputType | null
    _min: Fd_agentsMinAggregateOutputType | null
    _max: Fd_agentsMaxAggregateOutputType | null
  }

  type GetFd_agentsGroupByPayload<T extends fd_agentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fd_agentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fd_agentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fd_agentsGroupByOutputType[P]>
            : GetScalarType<T[P], Fd_agentsGroupByOutputType[P]>
        }
      >
    >


  export type fd_agentsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    available?: boolean
    ticket_scope?: boolean
    type?: boolean
    active?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    last_active_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["fd_agents"]>

  export type fd_agentsSelectScalar = {
    id?: boolean
    available?: boolean
    ticket_scope?: boolean
    type?: boolean
    active?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    last_active_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }


  export type $fd_agentsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fd_agents"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      available: string | null
      ticket_scope: number | null
      type: string | null
      active: string | null
      email: string | null
      name: string | null
      phone: string | null
      last_active_at: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["fd_agents"]>
    composites: {}
  }


  type fd_agentsGetPayload<S extends boolean | null | undefined | fd_agentsDefaultArgs> = $Result.GetResult<Prisma.$fd_agentsPayload, S>

  type fd_agentsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fd_agentsFindManyArgs, 'select' | 'include'> & {
      select?: Fd_agentsCountAggregateInputType | true
    }

  export interface fd_agentsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fd_agents'], meta: { name: 'fd_agents' } }
    /**
     * Find zero or one Fd_agents that matches the filter.
     * @param {fd_agentsFindUniqueArgs} args - Arguments to find a Fd_agents
     * @example
     * // Get one Fd_agents
     * const fd_agents = await prisma.fd_agents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fd_agentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fd_agentsFindUniqueArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fd_agents that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fd_agentsFindUniqueOrThrowArgs} args - Arguments to find a Fd_agents
     * @example
     * // Get one Fd_agents
     * const fd_agents = await prisma.fd_agents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fd_agentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_agentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fd_agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_agentsFindFirstArgs} args - Arguments to find a Fd_agents
     * @example
     * // Get one Fd_agents
     * const fd_agents = await prisma.fd_agents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fd_agentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_agentsFindFirstArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fd_agents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_agentsFindFirstOrThrowArgs} args - Arguments to find a Fd_agents
     * @example
     * // Get one Fd_agents
     * const fd_agents = await prisma.fd_agents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fd_agentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_agentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fd_agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_agentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fd_agents
     * const fd_agents = await prisma.fd_agents.findMany()
     * 
     * // Get first 10 Fd_agents
     * const fd_agents = await prisma.fd_agents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fd_agentsWithIdOnly = await prisma.fd_agents.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fd_agentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_agentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fd_agents.
     * @param {fd_agentsCreateArgs} args - Arguments to create a Fd_agents.
     * @example
     * // Create one Fd_agents
     * const Fd_agents = await prisma.fd_agents.create({
     *   data: {
     *     // ... data to create a Fd_agents
     *   }
     * })
     * 
    **/
    create<T extends fd_agentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_agentsCreateArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fd_agents.
     *     @param {fd_agentsCreateManyArgs} args - Arguments to create many Fd_agents.
     *     @example
     *     // Create many Fd_agents
     *     const fd_agents = await prisma.fd_agents.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fd_agentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_agentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fd_agents.
     * @param {fd_agentsDeleteArgs} args - Arguments to delete one Fd_agents.
     * @example
     * // Delete one Fd_agents
     * const Fd_agents = await prisma.fd_agents.delete({
     *   where: {
     *     // ... filter to delete one Fd_agents
     *   }
     * })
     * 
    **/
    delete<T extends fd_agentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fd_agentsDeleteArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fd_agents.
     * @param {fd_agentsUpdateArgs} args - Arguments to update one Fd_agents.
     * @example
     * // Update one Fd_agents
     * const fd_agents = await prisma.fd_agents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fd_agentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_agentsUpdateArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fd_agents.
     * @param {fd_agentsDeleteManyArgs} args - Arguments to filter Fd_agents to delete.
     * @example
     * // Delete a few Fd_agents
     * const { count } = await prisma.fd_agents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fd_agentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_agentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fd_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_agentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fd_agents
     * const fd_agents = await prisma.fd_agents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fd_agentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fd_agentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fd_agents.
     * @param {fd_agentsUpsertArgs} args - Arguments to update or create a Fd_agents.
     * @example
     * // Update or create a Fd_agents
     * const fd_agents = await prisma.fd_agents.upsert({
     *   create: {
     *     // ... data to create a Fd_agents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fd_agents we want to update
     *   }
     * })
    **/
    upsert<T extends fd_agentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fd_agentsUpsertArgs<ExtArgs>>
    ): Prisma__fd_agentsClient<$Result.GetResult<Prisma.$fd_agentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fd_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_agentsCountArgs} args - Arguments to filter Fd_agents to count.
     * @example
     * // Count the number of Fd_agents
     * const count = await prisma.fd_agents.count({
     *   where: {
     *     // ... the filter for the Fd_agents we want to count
     *   }
     * })
    **/
    count<T extends fd_agentsCountArgs>(
      args?: Subset<T, fd_agentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fd_agentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fd_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fd_agentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fd_agentsAggregateArgs>(args: Subset<T, Fd_agentsAggregateArgs>): Prisma.PrismaPromise<GetFd_agentsAggregateType<T>>

    /**
     * Group by Fd_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_agentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fd_agentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fd_agentsGroupByArgs['orderBy'] }
        : { orderBy?: fd_agentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fd_agentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFd_agentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fd_agents model
   */
  readonly fields: fd_agentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fd_agents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fd_agentsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fd_agents model
   */ 
  interface fd_agentsFieldRefs {
    readonly id: FieldRef<"fd_agents", 'String'>
    readonly available: FieldRef<"fd_agents", 'String'>
    readonly ticket_scope: FieldRef<"fd_agents", 'Int'>
    readonly type: FieldRef<"fd_agents", 'String'>
    readonly active: FieldRef<"fd_agents", 'String'>
    readonly email: FieldRef<"fd_agents", 'String'>
    readonly name: FieldRef<"fd_agents", 'String'>
    readonly phone: FieldRef<"fd_agents", 'String'>
    readonly last_active_at: FieldRef<"fd_agents", 'String'>
    readonly createdAt: FieldRef<"fd_agents", 'DateTime'>
    readonly updatedAt: FieldRef<"fd_agents", 'DateTime'>
    readonly deleted: FieldRef<"fd_agents", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * fd_agents findUnique
   */
  export type fd_agentsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * Filter, which fd_agents to fetch.
     */
    where: fd_agentsWhereUniqueInput
  }


  /**
   * fd_agents findUniqueOrThrow
   */
  export type fd_agentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * Filter, which fd_agents to fetch.
     */
    where: fd_agentsWhereUniqueInput
  }


  /**
   * fd_agents findFirst
   */
  export type fd_agentsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * Filter, which fd_agents to fetch.
     */
    where?: fd_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_agents to fetch.
     */
    orderBy?: fd_agentsOrderByWithRelationInput | fd_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_agents.
     */
    cursor?: fd_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_agents.
     */
    distinct?: Fd_agentsScalarFieldEnum | Fd_agentsScalarFieldEnum[]
  }


  /**
   * fd_agents findFirstOrThrow
   */
  export type fd_agentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * Filter, which fd_agents to fetch.
     */
    where?: fd_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_agents to fetch.
     */
    orderBy?: fd_agentsOrderByWithRelationInput | fd_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_agents.
     */
    cursor?: fd_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_agents.
     */
    distinct?: Fd_agentsScalarFieldEnum | Fd_agentsScalarFieldEnum[]
  }


  /**
   * fd_agents findMany
   */
  export type fd_agentsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * Filter, which fd_agents to fetch.
     */
    where?: fd_agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_agents to fetch.
     */
    orderBy?: fd_agentsOrderByWithRelationInput | fd_agentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fd_agents.
     */
    cursor?: fd_agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_agents.
     */
    skip?: number
    distinct?: Fd_agentsScalarFieldEnum | Fd_agentsScalarFieldEnum[]
  }


  /**
   * fd_agents create
   */
  export type fd_agentsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * The data needed to create a fd_agents.
     */
    data: XOR<fd_agentsCreateInput, fd_agentsUncheckedCreateInput>
  }


  /**
   * fd_agents createMany
   */
  export type fd_agentsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fd_agents.
     */
    data: fd_agentsCreateManyInput | fd_agentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fd_agents update
   */
  export type fd_agentsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * The data needed to update a fd_agents.
     */
    data: XOR<fd_agentsUpdateInput, fd_agentsUncheckedUpdateInput>
    /**
     * Choose, which fd_agents to update.
     */
    where: fd_agentsWhereUniqueInput
  }


  /**
   * fd_agents updateMany
   */
  export type fd_agentsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fd_agents.
     */
    data: XOR<fd_agentsUpdateManyMutationInput, fd_agentsUncheckedUpdateManyInput>
    /**
     * Filter which fd_agents to update
     */
    where?: fd_agentsWhereInput
  }


  /**
   * fd_agents upsert
   */
  export type fd_agentsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * The filter to search for the fd_agents to update in case it exists.
     */
    where: fd_agentsWhereUniqueInput
    /**
     * In case the fd_agents found by the `where` argument doesn't exist, create a new fd_agents with this data.
     */
    create: XOR<fd_agentsCreateInput, fd_agentsUncheckedCreateInput>
    /**
     * In case the fd_agents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fd_agentsUpdateInput, fd_agentsUncheckedUpdateInput>
  }


  /**
   * fd_agents delete
   */
  export type fd_agentsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
    /**
     * Filter which fd_agents to delete.
     */
    where: fd_agentsWhereUniqueInput
  }


  /**
   * fd_agents deleteMany
   */
  export type fd_agentsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_agents to delete
     */
    where?: fd_agentsWhereInput
  }


  /**
   * fd_agents without action
   */
  export type fd_agentsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_agents
     */
    select?: fd_agentsSelect<ExtArgs> | null
  }



  /**
   * Model fd_escalations
   */

  export type AggregateFd_escalations = {
    _count: Fd_escalationsCountAggregateOutputType | null
    _min: Fd_escalationsMinAggregateOutputType | null
    _max: Fd_escalationsMaxAggregateOutputType | null
  }

  export type Fd_escalationsMinAggregateOutputType = {
    id: string | null
    escalation_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
    freshdesk_id: string | null
  }

  export type Fd_escalationsMaxAggregateOutputType = {
    id: string | null
    escalation_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
    freshdesk_id: string | null
  }

  export type Fd_escalationsCountAggregateOutputType = {
    id: number
    escalation_type: number
    createdAt: number
    updatedAt: number
    deleted: number
    freshdesk_id: number
    _all: number
  }


  export type Fd_escalationsMinAggregateInputType = {
    id?: true
    escalation_type?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    freshdesk_id?: true
  }

  export type Fd_escalationsMaxAggregateInputType = {
    id?: true
    escalation_type?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    freshdesk_id?: true
  }

  export type Fd_escalationsCountAggregateInputType = {
    id?: true
    escalation_type?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    freshdesk_id?: true
    _all?: true
  }

  export type Fd_escalationsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_escalations to aggregate.
     */
    where?: fd_escalationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_escalations to fetch.
     */
    orderBy?: fd_escalationsOrderByWithRelationInput | fd_escalationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fd_escalationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_escalations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fd_escalations
    **/
    _count?: true | Fd_escalationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fd_escalationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fd_escalationsMaxAggregateInputType
  }

  export type GetFd_escalationsAggregateType<T extends Fd_escalationsAggregateArgs> = {
        [P in keyof T & keyof AggregateFd_escalations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFd_escalations[P]>
      : GetScalarType<T[P], AggregateFd_escalations[P]>
  }




  export type fd_escalationsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_escalationsWhereInput
    orderBy?: fd_escalationsOrderByWithAggregationInput | fd_escalationsOrderByWithAggregationInput[]
    by: Fd_escalationsScalarFieldEnum[] | Fd_escalationsScalarFieldEnum
    having?: fd_escalationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fd_escalationsCountAggregateInputType | true
    _min?: Fd_escalationsMinAggregateInputType
    _max?: Fd_escalationsMaxAggregateInputType
  }

  export type Fd_escalationsGroupByOutputType = {
    id: string
    escalation_type: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    freshdesk_id: string | null
    _count: Fd_escalationsCountAggregateOutputType | null
    _min: Fd_escalationsMinAggregateOutputType | null
    _max: Fd_escalationsMaxAggregateOutputType | null
  }

  type GetFd_escalationsGroupByPayload<T extends fd_escalationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fd_escalationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fd_escalationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fd_escalationsGroupByOutputType[P]>
            : GetScalarType<T[P], Fd_escalationsGroupByOutputType[P]>
        }
      >
    >


  export type fd_escalationsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    escalation_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    freshdesk_id?: boolean
    fd_tickets?: boolean | fd_escalations$fd_ticketsArgs<ExtArgs>
  }, ExtArgs["result"]["fd_escalations"]>

  export type fd_escalationsSelectScalar = {
    id?: boolean
    escalation_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    freshdesk_id?: boolean
  }

  export type fd_escalationsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fd_tickets?: boolean | fd_escalations$fd_ticketsArgs<ExtArgs>
  }


  export type $fd_escalationsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fd_escalations"
    objects: {
      fd_tickets: Prisma.$fd_ticketsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      escalation_type: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
      freshdesk_id: string | null
    }, ExtArgs["result"]["fd_escalations"]>
    composites: {}
  }


  type fd_escalationsGetPayload<S extends boolean | null | undefined | fd_escalationsDefaultArgs> = $Result.GetResult<Prisma.$fd_escalationsPayload, S>

  type fd_escalationsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fd_escalationsFindManyArgs, 'select' | 'include'> & {
      select?: Fd_escalationsCountAggregateInputType | true
    }

  export interface fd_escalationsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fd_escalations'], meta: { name: 'fd_escalations' } }
    /**
     * Find zero or one Fd_escalations that matches the filter.
     * @param {fd_escalationsFindUniqueArgs} args - Arguments to find a Fd_escalations
     * @example
     * // Get one Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fd_escalationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fd_escalationsFindUniqueArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fd_escalations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fd_escalationsFindUniqueOrThrowArgs} args - Arguments to find a Fd_escalations
     * @example
     * // Get one Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fd_escalationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_escalationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fd_escalations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_escalationsFindFirstArgs} args - Arguments to find a Fd_escalations
     * @example
     * // Get one Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fd_escalationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_escalationsFindFirstArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fd_escalations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_escalationsFindFirstOrThrowArgs} args - Arguments to find a Fd_escalations
     * @example
     * // Get one Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fd_escalationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_escalationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fd_escalations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_escalationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.findMany()
     * 
     * // Get first 10 Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fd_escalationsWithIdOnly = await prisma.fd_escalations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fd_escalationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_escalationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fd_escalations.
     * @param {fd_escalationsCreateArgs} args - Arguments to create a Fd_escalations.
     * @example
     * // Create one Fd_escalations
     * const Fd_escalations = await prisma.fd_escalations.create({
     *   data: {
     *     // ... data to create a Fd_escalations
     *   }
     * })
     * 
    **/
    create<T extends fd_escalationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_escalationsCreateArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fd_escalations.
     *     @param {fd_escalationsCreateManyArgs} args - Arguments to create many Fd_escalations.
     *     @example
     *     // Create many Fd_escalations
     *     const fd_escalations = await prisma.fd_escalations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fd_escalationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_escalationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fd_escalations.
     * @param {fd_escalationsDeleteArgs} args - Arguments to delete one Fd_escalations.
     * @example
     * // Delete one Fd_escalations
     * const Fd_escalations = await prisma.fd_escalations.delete({
     *   where: {
     *     // ... filter to delete one Fd_escalations
     *   }
     * })
     * 
    **/
    delete<T extends fd_escalationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fd_escalationsDeleteArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fd_escalations.
     * @param {fd_escalationsUpdateArgs} args - Arguments to update one Fd_escalations.
     * @example
     * // Update one Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fd_escalationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_escalationsUpdateArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fd_escalations.
     * @param {fd_escalationsDeleteManyArgs} args - Arguments to filter Fd_escalations to delete.
     * @example
     * // Delete a few Fd_escalations
     * const { count } = await prisma.fd_escalations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fd_escalationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_escalationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fd_escalations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_escalationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fd_escalationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fd_escalationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fd_escalations.
     * @param {fd_escalationsUpsertArgs} args - Arguments to update or create a Fd_escalations.
     * @example
     * // Update or create a Fd_escalations
     * const fd_escalations = await prisma.fd_escalations.upsert({
     *   create: {
     *     // ... data to create a Fd_escalations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fd_escalations we want to update
     *   }
     * })
    **/
    upsert<T extends fd_escalationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fd_escalationsUpsertArgs<ExtArgs>>
    ): Prisma__fd_escalationsClient<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fd_escalations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_escalationsCountArgs} args - Arguments to filter Fd_escalations to count.
     * @example
     * // Count the number of Fd_escalations
     * const count = await prisma.fd_escalations.count({
     *   where: {
     *     // ... the filter for the Fd_escalations we want to count
     *   }
     * })
    **/
    count<T extends fd_escalationsCountArgs>(
      args?: Subset<T, fd_escalationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fd_escalationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fd_escalations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fd_escalationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fd_escalationsAggregateArgs>(args: Subset<T, Fd_escalationsAggregateArgs>): Prisma.PrismaPromise<GetFd_escalationsAggregateType<T>>

    /**
     * Group by Fd_escalations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_escalationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fd_escalationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fd_escalationsGroupByArgs['orderBy'] }
        : { orderBy?: fd_escalationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fd_escalationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFd_escalationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fd_escalations model
   */
  readonly fields: fd_escalationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fd_escalations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fd_escalationsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fd_tickets<T extends fd_escalations$fd_ticketsArgs<ExtArgs> = {}>(args?: Subset<T, fd_escalations$fd_ticketsArgs<ExtArgs>>): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fd_escalations model
   */ 
  interface fd_escalationsFieldRefs {
    readonly id: FieldRef<"fd_escalations", 'String'>
    readonly escalation_type: FieldRef<"fd_escalations", 'String'>
    readonly createdAt: FieldRef<"fd_escalations", 'DateTime'>
    readonly updatedAt: FieldRef<"fd_escalations", 'DateTime'>
    readonly deleted: FieldRef<"fd_escalations", 'DateTime'>
    readonly freshdesk_id: FieldRef<"fd_escalations", 'String'>
  }
    

  // Custom InputTypes

  /**
   * fd_escalations findUnique
   */
  export type fd_escalationsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * Filter, which fd_escalations to fetch.
     */
    where: fd_escalationsWhereUniqueInput
  }


  /**
   * fd_escalations findUniqueOrThrow
   */
  export type fd_escalationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * Filter, which fd_escalations to fetch.
     */
    where: fd_escalationsWhereUniqueInput
  }


  /**
   * fd_escalations findFirst
   */
  export type fd_escalationsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * Filter, which fd_escalations to fetch.
     */
    where?: fd_escalationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_escalations to fetch.
     */
    orderBy?: fd_escalationsOrderByWithRelationInput | fd_escalationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_escalations.
     */
    cursor?: fd_escalationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_escalations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_escalations.
     */
    distinct?: Fd_escalationsScalarFieldEnum | Fd_escalationsScalarFieldEnum[]
  }


  /**
   * fd_escalations findFirstOrThrow
   */
  export type fd_escalationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * Filter, which fd_escalations to fetch.
     */
    where?: fd_escalationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_escalations to fetch.
     */
    orderBy?: fd_escalationsOrderByWithRelationInput | fd_escalationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_escalations.
     */
    cursor?: fd_escalationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_escalations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_escalations.
     */
    distinct?: Fd_escalationsScalarFieldEnum | Fd_escalationsScalarFieldEnum[]
  }


  /**
   * fd_escalations findMany
   */
  export type fd_escalationsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * Filter, which fd_escalations to fetch.
     */
    where?: fd_escalationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_escalations to fetch.
     */
    orderBy?: fd_escalationsOrderByWithRelationInput | fd_escalationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fd_escalations.
     */
    cursor?: fd_escalationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_escalations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_escalations.
     */
    skip?: number
    distinct?: Fd_escalationsScalarFieldEnum | Fd_escalationsScalarFieldEnum[]
  }


  /**
   * fd_escalations create
   */
  export type fd_escalationsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * The data needed to create a fd_escalations.
     */
    data: XOR<fd_escalationsCreateInput, fd_escalationsUncheckedCreateInput>
  }


  /**
   * fd_escalations createMany
   */
  export type fd_escalationsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fd_escalations.
     */
    data: fd_escalationsCreateManyInput | fd_escalationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fd_escalations update
   */
  export type fd_escalationsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * The data needed to update a fd_escalations.
     */
    data: XOR<fd_escalationsUpdateInput, fd_escalationsUncheckedUpdateInput>
    /**
     * Choose, which fd_escalations to update.
     */
    where: fd_escalationsWhereUniqueInput
  }


  /**
   * fd_escalations updateMany
   */
  export type fd_escalationsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fd_escalations.
     */
    data: XOR<fd_escalationsUpdateManyMutationInput, fd_escalationsUncheckedUpdateManyInput>
    /**
     * Filter which fd_escalations to update
     */
    where?: fd_escalationsWhereInput
  }


  /**
   * fd_escalations upsert
   */
  export type fd_escalationsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * The filter to search for the fd_escalations to update in case it exists.
     */
    where: fd_escalationsWhereUniqueInput
    /**
     * In case the fd_escalations found by the `where` argument doesn't exist, create a new fd_escalations with this data.
     */
    create: XOR<fd_escalationsCreateInput, fd_escalationsUncheckedCreateInput>
    /**
     * In case the fd_escalations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fd_escalationsUpdateInput, fd_escalationsUncheckedUpdateInput>
  }


  /**
   * fd_escalations delete
   */
  export type fd_escalationsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    /**
     * Filter which fd_escalations to delete.
     */
    where: fd_escalationsWhereUniqueInput
  }


  /**
   * fd_escalations deleteMany
   */
  export type fd_escalationsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_escalations to delete
     */
    where?: fd_escalationsWhereInput
  }


  /**
   * fd_escalations.fd_tickets
   */
  export type fd_escalations$fd_ticketsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    where?: fd_ticketsWhereInput
  }


  /**
   * fd_escalations without action
   */
  export type fd_escalationsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
  }



  /**
   * Model fd_group
   */

  export type AggregateFd_group = {
    _count: Fd_groupCountAggregateOutputType | null
    _min: Fd_groupMinAggregateOutputType | null
    _max: Fd_groupMaxAggregateOutputType | null
  }

  export type Fd_groupMinAggregateOutputType = {
    id: string | null
    group_id: string | null
    group_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_groupMaxAggregateOutputType = {
    id: string | null
    group_id: string | null
    group_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_groupCountAggregateOutputType = {
    id: number
    group_id: number
    group_name: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type Fd_groupMinAggregateInputType = {
    id?: true
    group_id?: true
    group_name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_groupMaxAggregateInputType = {
    id?: true
    group_id?: true
    group_name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_groupCountAggregateInputType = {
    id?: true
    group_id?: true
    group_name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type Fd_groupAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_group to aggregate.
     */
    where?: fd_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_groups to fetch.
     */
    orderBy?: fd_groupOrderByWithRelationInput | fd_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fd_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fd_groups
    **/
    _count?: true | Fd_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fd_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fd_groupMaxAggregateInputType
  }

  export type GetFd_groupAggregateType<T extends Fd_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateFd_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFd_group[P]>
      : GetScalarType<T[P], AggregateFd_group[P]>
  }




  export type fd_groupGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_groupWhereInput
    orderBy?: fd_groupOrderByWithAggregationInput | fd_groupOrderByWithAggregationInput[]
    by: Fd_groupScalarFieldEnum[] | Fd_groupScalarFieldEnum
    having?: fd_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fd_groupCountAggregateInputType | true
    _min?: Fd_groupMinAggregateInputType
    _max?: Fd_groupMaxAggregateInputType
  }

  export type Fd_groupGroupByOutputType = {
    id: string
    group_id: string | null
    group_name: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: Fd_groupCountAggregateOutputType | null
    _min: Fd_groupMinAggregateOutputType | null
    _max: Fd_groupMaxAggregateOutputType | null
  }

  type GetFd_groupGroupByPayload<T extends fd_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fd_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fd_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fd_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Fd_groupGroupByOutputType[P]>
        }
      >
    >


  export type fd_groupSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    group_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["fd_group"]>

  export type fd_groupSelectScalar = {
    id?: boolean
    group_id?: boolean
    group_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }


  export type $fd_groupPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fd_group"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      group_id: string | null
      group_name: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["fd_group"]>
    composites: {}
  }


  type fd_groupGetPayload<S extends boolean | null | undefined | fd_groupDefaultArgs> = $Result.GetResult<Prisma.$fd_groupPayload, S>

  type fd_groupCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fd_groupFindManyArgs, 'select' | 'include'> & {
      select?: Fd_groupCountAggregateInputType | true
    }

  export interface fd_groupDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fd_group'], meta: { name: 'fd_group' } }
    /**
     * Find zero or one Fd_group that matches the filter.
     * @param {fd_groupFindUniqueArgs} args - Arguments to find a Fd_group
     * @example
     * // Get one Fd_group
     * const fd_group = await prisma.fd_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fd_groupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fd_groupFindUniqueArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fd_group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fd_groupFindUniqueOrThrowArgs} args - Arguments to find a Fd_group
     * @example
     * // Get one Fd_group
     * const fd_group = await prisma.fd_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fd_groupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_groupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fd_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_groupFindFirstArgs} args - Arguments to find a Fd_group
     * @example
     * // Get one Fd_group
     * const fd_group = await prisma.fd_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fd_groupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_groupFindFirstArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fd_group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_groupFindFirstOrThrowArgs} args - Arguments to find a Fd_group
     * @example
     * // Get one Fd_group
     * const fd_group = await prisma.fd_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fd_groupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_groupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fd_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_groupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fd_groups
     * const fd_groups = await prisma.fd_group.findMany()
     * 
     * // Get first 10 Fd_groups
     * const fd_groups = await prisma.fd_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fd_groupWithIdOnly = await prisma.fd_group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fd_groupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_groupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fd_group.
     * @param {fd_groupCreateArgs} args - Arguments to create a Fd_group.
     * @example
     * // Create one Fd_group
     * const Fd_group = await prisma.fd_group.create({
     *   data: {
     *     // ... data to create a Fd_group
     *   }
     * })
     * 
    **/
    create<T extends fd_groupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_groupCreateArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fd_groups.
     *     @param {fd_groupCreateManyArgs} args - Arguments to create many Fd_groups.
     *     @example
     *     // Create many Fd_groups
     *     const fd_group = await prisma.fd_group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fd_groupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_groupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fd_group.
     * @param {fd_groupDeleteArgs} args - Arguments to delete one Fd_group.
     * @example
     * // Delete one Fd_group
     * const Fd_group = await prisma.fd_group.delete({
     *   where: {
     *     // ... filter to delete one Fd_group
     *   }
     * })
     * 
    **/
    delete<T extends fd_groupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fd_groupDeleteArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fd_group.
     * @param {fd_groupUpdateArgs} args - Arguments to update one Fd_group.
     * @example
     * // Update one Fd_group
     * const fd_group = await prisma.fd_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fd_groupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_groupUpdateArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fd_groups.
     * @param {fd_groupDeleteManyArgs} args - Arguments to filter Fd_groups to delete.
     * @example
     * // Delete a few Fd_groups
     * const { count } = await prisma.fd_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fd_groupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_groupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fd_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fd_groups
     * const fd_group = await prisma.fd_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fd_groupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fd_groupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fd_group.
     * @param {fd_groupUpsertArgs} args - Arguments to update or create a Fd_group.
     * @example
     * // Update or create a Fd_group
     * const fd_group = await prisma.fd_group.upsert({
     *   create: {
     *     // ... data to create a Fd_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fd_group we want to update
     *   }
     * })
    **/
    upsert<T extends fd_groupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fd_groupUpsertArgs<ExtArgs>>
    ): Prisma__fd_groupClient<$Result.GetResult<Prisma.$fd_groupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fd_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_groupCountArgs} args - Arguments to filter Fd_groups to count.
     * @example
     * // Count the number of Fd_groups
     * const count = await prisma.fd_group.count({
     *   where: {
     *     // ... the filter for the Fd_groups we want to count
     *   }
     * })
    **/
    count<T extends fd_groupCountArgs>(
      args?: Subset<T, fd_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fd_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fd_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fd_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fd_groupAggregateArgs>(args: Subset<T, Fd_groupAggregateArgs>): Prisma.PrismaPromise<GetFd_groupAggregateType<T>>

    /**
     * Group by Fd_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_groupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fd_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fd_groupGroupByArgs['orderBy'] }
        : { orderBy?: fd_groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fd_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFd_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fd_group model
   */
  readonly fields: fd_groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fd_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fd_groupClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fd_group model
   */ 
  interface fd_groupFieldRefs {
    readonly id: FieldRef<"fd_group", 'String'>
    readonly group_id: FieldRef<"fd_group", 'String'>
    readonly group_name: FieldRef<"fd_group", 'String'>
    readonly createdAt: FieldRef<"fd_group", 'DateTime'>
    readonly updatedAt: FieldRef<"fd_group", 'DateTime'>
    readonly deleted: FieldRef<"fd_group", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * fd_group findUnique
   */
  export type fd_groupFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * Filter, which fd_group to fetch.
     */
    where: fd_groupWhereUniqueInput
  }


  /**
   * fd_group findUniqueOrThrow
   */
  export type fd_groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * Filter, which fd_group to fetch.
     */
    where: fd_groupWhereUniqueInput
  }


  /**
   * fd_group findFirst
   */
  export type fd_groupFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * Filter, which fd_group to fetch.
     */
    where?: fd_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_groups to fetch.
     */
    orderBy?: fd_groupOrderByWithRelationInput | fd_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_groups.
     */
    cursor?: fd_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_groups.
     */
    distinct?: Fd_groupScalarFieldEnum | Fd_groupScalarFieldEnum[]
  }


  /**
   * fd_group findFirstOrThrow
   */
  export type fd_groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * Filter, which fd_group to fetch.
     */
    where?: fd_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_groups to fetch.
     */
    orderBy?: fd_groupOrderByWithRelationInput | fd_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_groups.
     */
    cursor?: fd_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_groups.
     */
    distinct?: Fd_groupScalarFieldEnum | Fd_groupScalarFieldEnum[]
  }


  /**
   * fd_group findMany
   */
  export type fd_groupFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * Filter, which fd_groups to fetch.
     */
    where?: fd_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_groups to fetch.
     */
    orderBy?: fd_groupOrderByWithRelationInput | fd_groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fd_groups.
     */
    cursor?: fd_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_groups.
     */
    skip?: number
    distinct?: Fd_groupScalarFieldEnum | Fd_groupScalarFieldEnum[]
  }


  /**
   * fd_group create
   */
  export type fd_groupCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * The data needed to create a fd_group.
     */
    data: XOR<fd_groupCreateInput, fd_groupUncheckedCreateInput>
  }


  /**
   * fd_group createMany
   */
  export type fd_groupCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fd_groups.
     */
    data: fd_groupCreateManyInput | fd_groupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fd_group update
   */
  export type fd_groupUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * The data needed to update a fd_group.
     */
    data: XOR<fd_groupUpdateInput, fd_groupUncheckedUpdateInput>
    /**
     * Choose, which fd_group to update.
     */
    where: fd_groupWhereUniqueInput
  }


  /**
   * fd_group updateMany
   */
  export type fd_groupUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fd_groups.
     */
    data: XOR<fd_groupUpdateManyMutationInput, fd_groupUncheckedUpdateManyInput>
    /**
     * Filter which fd_groups to update
     */
    where?: fd_groupWhereInput
  }


  /**
   * fd_group upsert
   */
  export type fd_groupUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * The filter to search for the fd_group to update in case it exists.
     */
    where: fd_groupWhereUniqueInput
    /**
     * In case the fd_group found by the `where` argument doesn't exist, create a new fd_group with this data.
     */
    create: XOR<fd_groupCreateInput, fd_groupUncheckedCreateInput>
    /**
     * In case the fd_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fd_groupUpdateInput, fd_groupUncheckedUpdateInput>
  }


  /**
   * fd_group delete
   */
  export type fd_groupDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
    /**
     * Filter which fd_group to delete.
     */
    where: fd_groupWhereUniqueInput
  }


  /**
   * fd_group deleteMany
   */
  export type fd_groupDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_groups to delete
     */
    where?: fd_groupWhereInput
  }


  /**
   * fd_group without action
   */
  export type fd_groupDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_group
     */
    select?: fd_groupSelect<ExtArgs> | null
  }



  /**
   * Model fd_priority
   */

  export type AggregateFd_priority = {
    _count: Fd_priorityCountAggregateOutputType | null
    _min: Fd_priorityMinAggregateOutputType | null
    _max: Fd_priorityMaxAggregateOutputType | null
  }

  export type Fd_priorityMinAggregateOutputType = {
    id: string | null
    priority_id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_priorityMaxAggregateOutputType = {
    id: string | null
    priority_id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_priorityCountAggregateOutputType = {
    id: number
    priority_id: number
    name: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type Fd_priorityMinAggregateInputType = {
    id?: true
    priority_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_priorityMaxAggregateInputType = {
    id?: true
    priority_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_priorityCountAggregateInputType = {
    id?: true
    priority_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type Fd_priorityAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_priority to aggregate.
     */
    where?: fd_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_priorities to fetch.
     */
    orderBy?: fd_priorityOrderByWithRelationInput | fd_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fd_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fd_priorities
    **/
    _count?: true | Fd_priorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fd_priorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fd_priorityMaxAggregateInputType
  }

  export type GetFd_priorityAggregateType<T extends Fd_priorityAggregateArgs> = {
        [P in keyof T & keyof AggregateFd_priority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFd_priority[P]>
      : GetScalarType<T[P], AggregateFd_priority[P]>
  }




  export type fd_priorityGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_priorityWhereInput
    orderBy?: fd_priorityOrderByWithAggregationInput | fd_priorityOrderByWithAggregationInput[]
    by: Fd_priorityScalarFieldEnum[] | Fd_priorityScalarFieldEnum
    having?: fd_priorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fd_priorityCountAggregateInputType | true
    _min?: Fd_priorityMinAggregateInputType
    _max?: Fd_priorityMaxAggregateInputType
  }

  export type Fd_priorityGroupByOutputType = {
    id: string
    priority_id: string | null
    name: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: Fd_priorityCountAggregateOutputType | null
    _min: Fd_priorityMinAggregateOutputType | null
    _max: Fd_priorityMaxAggregateOutputType | null
  }

  type GetFd_priorityGroupByPayload<T extends fd_priorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fd_priorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fd_priorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fd_priorityGroupByOutputType[P]>
            : GetScalarType<T[P], Fd_priorityGroupByOutputType[P]>
        }
      >
    >


  export type fd_prioritySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["fd_priority"]>

  export type fd_prioritySelectScalar = {
    id?: boolean
    priority_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }


  export type $fd_priorityPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fd_priority"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      priority_id: string | null
      name: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["fd_priority"]>
    composites: {}
  }


  type fd_priorityGetPayload<S extends boolean | null | undefined | fd_priorityDefaultArgs> = $Result.GetResult<Prisma.$fd_priorityPayload, S>

  type fd_priorityCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fd_priorityFindManyArgs, 'select' | 'include'> & {
      select?: Fd_priorityCountAggregateInputType | true
    }

  export interface fd_priorityDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fd_priority'], meta: { name: 'fd_priority' } }
    /**
     * Find zero or one Fd_priority that matches the filter.
     * @param {fd_priorityFindUniqueArgs} args - Arguments to find a Fd_priority
     * @example
     * // Get one Fd_priority
     * const fd_priority = await prisma.fd_priority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fd_priorityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fd_priorityFindUniqueArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fd_priority that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fd_priorityFindUniqueOrThrowArgs} args - Arguments to find a Fd_priority
     * @example
     * // Get one Fd_priority
     * const fd_priority = await prisma.fd_priority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fd_priorityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_priorityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fd_priority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_priorityFindFirstArgs} args - Arguments to find a Fd_priority
     * @example
     * // Get one Fd_priority
     * const fd_priority = await prisma.fd_priority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fd_priorityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_priorityFindFirstArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fd_priority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_priorityFindFirstOrThrowArgs} args - Arguments to find a Fd_priority
     * @example
     * // Get one Fd_priority
     * const fd_priority = await prisma.fd_priority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fd_priorityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_priorityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fd_priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_priorityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fd_priorities
     * const fd_priorities = await prisma.fd_priority.findMany()
     * 
     * // Get first 10 Fd_priorities
     * const fd_priorities = await prisma.fd_priority.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fd_priorityWithIdOnly = await prisma.fd_priority.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fd_priorityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_priorityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fd_priority.
     * @param {fd_priorityCreateArgs} args - Arguments to create a Fd_priority.
     * @example
     * // Create one Fd_priority
     * const Fd_priority = await prisma.fd_priority.create({
     *   data: {
     *     // ... data to create a Fd_priority
     *   }
     * })
     * 
    **/
    create<T extends fd_priorityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_priorityCreateArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fd_priorities.
     *     @param {fd_priorityCreateManyArgs} args - Arguments to create many Fd_priorities.
     *     @example
     *     // Create many Fd_priorities
     *     const fd_priority = await prisma.fd_priority.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fd_priorityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_priorityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fd_priority.
     * @param {fd_priorityDeleteArgs} args - Arguments to delete one Fd_priority.
     * @example
     * // Delete one Fd_priority
     * const Fd_priority = await prisma.fd_priority.delete({
     *   where: {
     *     // ... filter to delete one Fd_priority
     *   }
     * })
     * 
    **/
    delete<T extends fd_priorityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fd_priorityDeleteArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fd_priority.
     * @param {fd_priorityUpdateArgs} args - Arguments to update one Fd_priority.
     * @example
     * // Update one Fd_priority
     * const fd_priority = await prisma.fd_priority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fd_priorityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_priorityUpdateArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fd_priorities.
     * @param {fd_priorityDeleteManyArgs} args - Arguments to filter Fd_priorities to delete.
     * @example
     * // Delete a few Fd_priorities
     * const { count } = await prisma.fd_priority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fd_priorityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_priorityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fd_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_priorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fd_priorities
     * const fd_priority = await prisma.fd_priority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fd_priorityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fd_priorityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fd_priority.
     * @param {fd_priorityUpsertArgs} args - Arguments to update or create a Fd_priority.
     * @example
     * // Update or create a Fd_priority
     * const fd_priority = await prisma.fd_priority.upsert({
     *   create: {
     *     // ... data to create a Fd_priority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fd_priority we want to update
     *   }
     * })
    **/
    upsert<T extends fd_priorityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fd_priorityUpsertArgs<ExtArgs>>
    ): Prisma__fd_priorityClient<$Result.GetResult<Prisma.$fd_priorityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fd_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_priorityCountArgs} args - Arguments to filter Fd_priorities to count.
     * @example
     * // Count the number of Fd_priorities
     * const count = await prisma.fd_priority.count({
     *   where: {
     *     // ... the filter for the Fd_priorities we want to count
     *   }
     * })
    **/
    count<T extends fd_priorityCountArgs>(
      args?: Subset<T, fd_priorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fd_priorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fd_priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fd_priorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fd_priorityAggregateArgs>(args: Subset<T, Fd_priorityAggregateArgs>): Prisma.PrismaPromise<GetFd_priorityAggregateType<T>>

    /**
     * Group by Fd_priority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_priorityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fd_priorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fd_priorityGroupByArgs['orderBy'] }
        : { orderBy?: fd_priorityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fd_priorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFd_priorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fd_priority model
   */
  readonly fields: fd_priorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fd_priority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fd_priorityClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fd_priority model
   */ 
  interface fd_priorityFieldRefs {
    readonly id: FieldRef<"fd_priority", 'String'>
    readonly priority_id: FieldRef<"fd_priority", 'String'>
    readonly name: FieldRef<"fd_priority", 'String'>
    readonly createdAt: FieldRef<"fd_priority", 'DateTime'>
    readonly updatedAt: FieldRef<"fd_priority", 'DateTime'>
    readonly deleted: FieldRef<"fd_priority", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * fd_priority findUnique
   */
  export type fd_priorityFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * Filter, which fd_priority to fetch.
     */
    where: fd_priorityWhereUniqueInput
  }


  /**
   * fd_priority findUniqueOrThrow
   */
  export type fd_priorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * Filter, which fd_priority to fetch.
     */
    where: fd_priorityWhereUniqueInput
  }


  /**
   * fd_priority findFirst
   */
  export type fd_priorityFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * Filter, which fd_priority to fetch.
     */
    where?: fd_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_priorities to fetch.
     */
    orderBy?: fd_priorityOrderByWithRelationInput | fd_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_priorities.
     */
    cursor?: fd_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_priorities.
     */
    distinct?: Fd_priorityScalarFieldEnum | Fd_priorityScalarFieldEnum[]
  }


  /**
   * fd_priority findFirstOrThrow
   */
  export type fd_priorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * Filter, which fd_priority to fetch.
     */
    where?: fd_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_priorities to fetch.
     */
    orderBy?: fd_priorityOrderByWithRelationInput | fd_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_priorities.
     */
    cursor?: fd_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_priorities.
     */
    distinct?: Fd_priorityScalarFieldEnum | Fd_priorityScalarFieldEnum[]
  }


  /**
   * fd_priority findMany
   */
  export type fd_priorityFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * Filter, which fd_priorities to fetch.
     */
    where?: fd_priorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_priorities to fetch.
     */
    orderBy?: fd_priorityOrderByWithRelationInput | fd_priorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fd_priorities.
     */
    cursor?: fd_priorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_priorities.
     */
    skip?: number
    distinct?: Fd_priorityScalarFieldEnum | Fd_priorityScalarFieldEnum[]
  }


  /**
   * fd_priority create
   */
  export type fd_priorityCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * The data needed to create a fd_priority.
     */
    data: XOR<fd_priorityCreateInput, fd_priorityUncheckedCreateInput>
  }


  /**
   * fd_priority createMany
   */
  export type fd_priorityCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fd_priorities.
     */
    data: fd_priorityCreateManyInput | fd_priorityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fd_priority update
   */
  export type fd_priorityUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * The data needed to update a fd_priority.
     */
    data: XOR<fd_priorityUpdateInput, fd_priorityUncheckedUpdateInput>
    /**
     * Choose, which fd_priority to update.
     */
    where: fd_priorityWhereUniqueInput
  }


  /**
   * fd_priority updateMany
   */
  export type fd_priorityUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fd_priorities.
     */
    data: XOR<fd_priorityUpdateManyMutationInput, fd_priorityUncheckedUpdateManyInput>
    /**
     * Filter which fd_priorities to update
     */
    where?: fd_priorityWhereInput
  }


  /**
   * fd_priority upsert
   */
  export type fd_priorityUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * The filter to search for the fd_priority to update in case it exists.
     */
    where: fd_priorityWhereUniqueInput
    /**
     * In case the fd_priority found by the `where` argument doesn't exist, create a new fd_priority with this data.
     */
    create: XOR<fd_priorityCreateInput, fd_priorityUncheckedCreateInput>
    /**
     * In case the fd_priority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fd_priorityUpdateInput, fd_priorityUncheckedUpdateInput>
  }


  /**
   * fd_priority delete
   */
  export type fd_priorityDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
    /**
     * Filter which fd_priority to delete.
     */
    where: fd_priorityWhereUniqueInput
  }


  /**
   * fd_priority deleteMany
   */
  export type fd_priorityDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_priorities to delete
     */
    where?: fd_priorityWhereInput
  }


  /**
   * fd_priority without action
   */
  export type fd_priorityDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_priority
     */
    select?: fd_prioritySelect<ExtArgs> | null
  }



  /**
   * Model fd_status
   */

  export type AggregateFd_status = {
    _count: Fd_statusCountAggregateOutputType | null
    _min: Fd_statusMinAggregateOutputType | null
    _max: Fd_statusMaxAggregateOutputType | null
  }

  export type Fd_statusMinAggregateOutputType = {
    id: string | null
    status_id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_statusMaxAggregateOutputType = {
    id: string | null
    status_id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_statusCountAggregateOutputType = {
    id: number
    status_id: number
    name: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type Fd_statusMinAggregateInputType = {
    id?: true
    status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_statusMaxAggregateInputType = {
    id?: true
    status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_statusCountAggregateInputType = {
    id?: true
    status_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type Fd_statusAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_status to aggregate.
     */
    where?: fd_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_statuses to fetch.
     */
    orderBy?: fd_statusOrderByWithRelationInput | fd_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fd_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fd_statuses
    **/
    _count?: true | Fd_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fd_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fd_statusMaxAggregateInputType
  }

  export type GetFd_statusAggregateType<T extends Fd_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateFd_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFd_status[P]>
      : GetScalarType<T[P], AggregateFd_status[P]>
  }




  export type fd_statusGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_statusWhereInput
    orderBy?: fd_statusOrderByWithAggregationInput | fd_statusOrderByWithAggregationInput[]
    by: Fd_statusScalarFieldEnum[] | Fd_statusScalarFieldEnum
    having?: fd_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fd_statusCountAggregateInputType | true
    _min?: Fd_statusMinAggregateInputType
    _max?: Fd_statusMaxAggregateInputType
  }

  export type Fd_statusGroupByOutputType = {
    id: string
    status_id: string | null
    name: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: Fd_statusCountAggregateOutputType | null
    _min: Fd_statusMinAggregateOutputType | null
    _max: Fd_statusMaxAggregateOutputType | null
  }

  type GetFd_statusGroupByPayload<T extends fd_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fd_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fd_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fd_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Fd_statusGroupByOutputType[P]>
        }
      >
    >


  export type fd_statusSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["fd_status"]>

  export type fd_statusSelectScalar = {
    id?: boolean
    status_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }


  export type $fd_statusPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fd_status"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      status_id: string | null
      name: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["fd_status"]>
    composites: {}
  }


  type fd_statusGetPayload<S extends boolean | null | undefined | fd_statusDefaultArgs> = $Result.GetResult<Prisma.$fd_statusPayload, S>

  type fd_statusCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fd_statusFindManyArgs, 'select' | 'include'> & {
      select?: Fd_statusCountAggregateInputType | true
    }

  export interface fd_statusDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fd_status'], meta: { name: 'fd_status' } }
    /**
     * Find zero or one Fd_status that matches the filter.
     * @param {fd_statusFindUniqueArgs} args - Arguments to find a Fd_status
     * @example
     * // Get one Fd_status
     * const fd_status = await prisma.fd_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fd_statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fd_statusFindUniqueArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fd_status that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fd_statusFindUniqueOrThrowArgs} args - Arguments to find a Fd_status
     * @example
     * // Get one Fd_status
     * const fd_status = await prisma.fd_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fd_statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_statusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fd_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_statusFindFirstArgs} args - Arguments to find a Fd_status
     * @example
     * // Get one Fd_status
     * const fd_status = await prisma.fd_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fd_statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_statusFindFirstArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fd_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_statusFindFirstOrThrowArgs} args - Arguments to find a Fd_status
     * @example
     * // Get one Fd_status
     * const fd_status = await prisma.fd_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fd_statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_statusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fd_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fd_statuses
     * const fd_statuses = await prisma.fd_status.findMany()
     * 
     * // Get first 10 Fd_statuses
     * const fd_statuses = await prisma.fd_status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fd_statusWithIdOnly = await prisma.fd_status.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fd_statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_statusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fd_status.
     * @param {fd_statusCreateArgs} args - Arguments to create a Fd_status.
     * @example
     * // Create one Fd_status
     * const Fd_status = await prisma.fd_status.create({
     *   data: {
     *     // ... data to create a Fd_status
     *   }
     * })
     * 
    **/
    create<T extends fd_statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_statusCreateArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fd_statuses.
     *     @param {fd_statusCreateManyArgs} args - Arguments to create many Fd_statuses.
     *     @example
     *     // Create many Fd_statuses
     *     const fd_status = await prisma.fd_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fd_statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_statusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fd_status.
     * @param {fd_statusDeleteArgs} args - Arguments to delete one Fd_status.
     * @example
     * // Delete one Fd_status
     * const Fd_status = await prisma.fd_status.delete({
     *   where: {
     *     // ... filter to delete one Fd_status
     *   }
     * })
     * 
    **/
    delete<T extends fd_statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fd_statusDeleteArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fd_status.
     * @param {fd_statusUpdateArgs} args - Arguments to update one Fd_status.
     * @example
     * // Update one Fd_status
     * const fd_status = await prisma.fd_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fd_statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_statusUpdateArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fd_statuses.
     * @param {fd_statusDeleteManyArgs} args - Arguments to filter Fd_statuses to delete.
     * @example
     * // Delete a few Fd_statuses
     * const { count } = await prisma.fd_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fd_statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_statusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fd_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fd_statuses
     * const fd_status = await prisma.fd_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fd_statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fd_statusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fd_status.
     * @param {fd_statusUpsertArgs} args - Arguments to update or create a Fd_status.
     * @example
     * // Update or create a Fd_status
     * const fd_status = await prisma.fd_status.upsert({
     *   create: {
     *     // ... data to create a Fd_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fd_status we want to update
     *   }
     * })
    **/
    upsert<T extends fd_statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fd_statusUpsertArgs<ExtArgs>>
    ): Prisma__fd_statusClient<$Result.GetResult<Prisma.$fd_statusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fd_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_statusCountArgs} args - Arguments to filter Fd_statuses to count.
     * @example
     * // Count the number of Fd_statuses
     * const count = await prisma.fd_status.count({
     *   where: {
     *     // ... the filter for the Fd_statuses we want to count
     *   }
     * })
    **/
    count<T extends fd_statusCountArgs>(
      args?: Subset<T, fd_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fd_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fd_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fd_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fd_statusAggregateArgs>(args: Subset<T, Fd_statusAggregateArgs>): Prisma.PrismaPromise<GetFd_statusAggregateType<T>>

    /**
     * Group by Fd_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fd_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fd_statusGroupByArgs['orderBy'] }
        : { orderBy?: fd_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fd_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFd_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fd_status model
   */
  readonly fields: fd_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fd_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fd_statusClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fd_status model
   */ 
  interface fd_statusFieldRefs {
    readonly id: FieldRef<"fd_status", 'String'>
    readonly status_id: FieldRef<"fd_status", 'String'>
    readonly name: FieldRef<"fd_status", 'String'>
    readonly createdAt: FieldRef<"fd_status", 'DateTime'>
    readonly updatedAt: FieldRef<"fd_status", 'DateTime'>
    readonly deleted: FieldRef<"fd_status", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * fd_status findUnique
   */
  export type fd_statusFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * Filter, which fd_status to fetch.
     */
    where: fd_statusWhereUniqueInput
  }


  /**
   * fd_status findUniqueOrThrow
   */
  export type fd_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * Filter, which fd_status to fetch.
     */
    where: fd_statusWhereUniqueInput
  }


  /**
   * fd_status findFirst
   */
  export type fd_statusFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * Filter, which fd_status to fetch.
     */
    where?: fd_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_statuses to fetch.
     */
    orderBy?: fd_statusOrderByWithRelationInput | fd_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_statuses.
     */
    cursor?: fd_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_statuses.
     */
    distinct?: Fd_statusScalarFieldEnum | Fd_statusScalarFieldEnum[]
  }


  /**
   * fd_status findFirstOrThrow
   */
  export type fd_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * Filter, which fd_status to fetch.
     */
    where?: fd_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_statuses to fetch.
     */
    orderBy?: fd_statusOrderByWithRelationInput | fd_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_statuses.
     */
    cursor?: fd_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_statuses.
     */
    distinct?: Fd_statusScalarFieldEnum | Fd_statusScalarFieldEnum[]
  }


  /**
   * fd_status findMany
   */
  export type fd_statusFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * Filter, which fd_statuses to fetch.
     */
    where?: fd_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_statuses to fetch.
     */
    orderBy?: fd_statusOrderByWithRelationInput | fd_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fd_statuses.
     */
    cursor?: fd_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_statuses.
     */
    skip?: number
    distinct?: Fd_statusScalarFieldEnum | Fd_statusScalarFieldEnum[]
  }


  /**
   * fd_status create
   */
  export type fd_statusCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * The data needed to create a fd_status.
     */
    data: XOR<fd_statusCreateInput, fd_statusUncheckedCreateInput>
  }


  /**
   * fd_status createMany
   */
  export type fd_statusCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fd_statuses.
     */
    data: fd_statusCreateManyInput | fd_statusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fd_status update
   */
  export type fd_statusUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * The data needed to update a fd_status.
     */
    data: XOR<fd_statusUpdateInput, fd_statusUncheckedUpdateInput>
    /**
     * Choose, which fd_status to update.
     */
    where: fd_statusWhereUniqueInput
  }


  /**
   * fd_status updateMany
   */
  export type fd_statusUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fd_statuses.
     */
    data: XOR<fd_statusUpdateManyMutationInput, fd_statusUncheckedUpdateManyInput>
    /**
     * Filter which fd_statuses to update
     */
    where?: fd_statusWhereInput
  }


  /**
   * fd_status upsert
   */
  export type fd_statusUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * The filter to search for the fd_status to update in case it exists.
     */
    where: fd_statusWhereUniqueInput
    /**
     * In case the fd_status found by the `where` argument doesn't exist, create a new fd_status with this data.
     */
    create: XOR<fd_statusCreateInput, fd_statusUncheckedCreateInput>
    /**
     * In case the fd_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fd_statusUpdateInput, fd_statusUncheckedUpdateInput>
  }


  /**
   * fd_status delete
   */
  export type fd_statusDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
    /**
     * Filter which fd_status to delete.
     */
    where: fd_statusWhereUniqueInput
  }


  /**
   * fd_status deleteMany
   */
  export type fd_statusDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_statuses to delete
     */
    where?: fd_statusWhereInput
  }


  /**
   * fd_status without action
   */
  export type fd_statusDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_status
     */
    select?: fd_statusSelect<ExtArgs> | null
  }



  /**
   * Model fd_tickets
   */

  export type AggregateFd_tickets = {
    _count: Fd_ticketsCountAggregateOutputType | null
    _avg: Fd_ticketsAvgAggregateOutputType | null
    _sum: Fd_ticketsSumAggregateOutputType | null
    _min: Fd_ticketsMinAggregateOutputType | null
    _max: Fd_ticketsMaxAggregateOutputType | null
  }

  export type Fd_ticketsAvgAggregateOutputType = {
    ticket_id: number | null
    email_config_id: number | null
    group_id: number | null
    priority: number | null
    requester_id: number | null
    responder_id: number | null
    source: number | null
    status: number | null
    company_id: number | null
    product_id: number | null
  }

  export type Fd_ticketsSumAggregateOutputType = {
    ticket_id: bigint | null
    email_config_id: bigint | null
    group_id: bigint | null
    priority: number | null
    requester_id: bigint | null
    responder_id: bigint | null
    source: number | null
    status: number | null
    company_id: bigint | null
    product_id: bigint | null
  }

  export type Fd_ticketsMinAggregateOutputType = {
    id: string | null
    ticket_id: bigint | null
    email_config_id: bigint | null
    group_id: bigint | null
    priority: number | null
    requester_id: bigint | null
    requester_name: string | null
    requester_email: string | null
    responder_id: bigint | null
    source: number | null
    status: number | null
    subject: string | null
    company_id: bigint | null
    type: string | null
    to_emails: string | null
    product_id: bigint | null
    fr_escalated: boolean | null
    spam: boolean | null
    urgent: boolean | null
    is_escalated: boolean | null
    fd_created_at: Date | null
    fd_updated_at: Date | null
    due_by: Date | null
    fr_due_by: Date | null
    nr_due_by: Date | null
    nr_escalated: boolean | null
    cf_best_number_to_reach: string | null
    cf_best_number_note: string | null
    cf_quotewekrs: string | null
    cf_qbsalesorder: string | null
    cf_qbinv: string | null
    cf_totalhours: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_ticketsMaxAggregateOutputType = {
    id: string | null
    ticket_id: bigint | null
    email_config_id: bigint | null
    group_id: bigint | null
    priority: number | null
    requester_id: bigint | null
    requester_name: string | null
    requester_email: string | null
    responder_id: bigint | null
    source: number | null
    status: number | null
    subject: string | null
    company_id: bigint | null
    type: string | null
    to_emails: string | null
    product_id: bigint | null
    fr_escalated: boolean | null
    spam: boolean | null
    urgent: boolean | null
    is_escalated: boolean | null
    fd_created_at: Date | null
    fd_updated_at: Date | null
    due_by: Date | null
    fr_due_by: Date | null
    nr_due_by: Date | null
    nr_escalated: boolean | null
    cf_best_number_to_reach: string | null
    cf_best_number_note: string | null
    cf_quotewekrs: string | null
    cf_qbsalesorder: string | null
    cf_qbinv: string | null
    cf_totalhours: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type Fd_ticketsCountAggregateOutputType = {
    id: number
    json: number
    ticket_id: number
    cc_emails: number
    fwd_emails: number
    reply_cc_emails: number
    ticket_cc_emails: number
    tags: number
    email_config_id: number
    group_id: number
    priority: number
    requester_id: number
    requester_name: number
    requester_email: number
    responder_id: number
    source: number
    status: number
    subject: number
    company_id: number
    type: number
    to_emails: number
    product_id: number
    fr_escalated: number
    spam: number
    urgent: number
    is_escalated: number
    fd_created_at: number
    fd_updated_at: number
    due_by: number
    fr_due_by: number
    nr_due_by: number
    nr_escalated: number
    json_custom_field: number
    cf_best_number_to_reach: number
    cf_best_number_note: number
    cf_quotewekrs: number
    cf_qbsalesorder: number
    cf_qbinv: number
    cf_totalhours: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type Fd_ticketsAvgAggregateInputType = {
    ticket_id?: true
    email_config_id?: true
    group_id?: true
    priority?: true
    requester_id?: true
    responder_id?: true
    source?: true
    status?: true
    company_id?: true
    product_id?: true
  }

  export type Fd_ticketsSumAggregateInputType = {
    ticket_id?: true
    email_config_id?: true
    group_id?: true
    priority?: true
    requester_id?: true
    responder_id?: true
    source?: true
    status?: true
    company_id?: true
    product_id?: true
  }

  export type Fd_ticketsMinAggregateInputType = {
    id?: true
    ticket_id?: true
    email_config_id?: true
    group_id?: true
    priority?: true
    requester_id?: true
    requester_name?: true
    requester_email?: true
    responder_id?: true
    source?: true
    status?: true
    subject?: true
    company_id?: true
    type?: true
    to_emails?: true
    product_id?: true
    fr_escalated?: true
    spam?: true
    urgent?: true
    is_escalated?: true
    fd_created_at?: true
    fd_updated_at?: true
    due_by?: true
    fr_due_by?: true
    nr_due_by?: true
    nr_escalated?: true
    cf_best_number_to_reach?: true
    cf_best_number_note?: true
    cf_quotewekrs?: true
    cf_qbsalesorder?: true
    cf_qbinv?: true
    cf_totalhours?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_ticketsMaxAggregateInputType = {
    id?: true
    ticket_id?: true
    email_config_id?: true
    group_id?: true
    priority?: true
    requester_id?: true
    requester_name?: true
    requester_email?: true
    responder_id?: true
    source?: true
    status?: true
    subject?: true
    company_id?: true
    type?: true
    to_emails?: true
    product_id?: true
    fr_escalated?: true
    spam?: true
    urgent?: true
    is_escalated?: true
    fd_created_at?: true
    fd_updated_at?: true
    due_by?: true
    fr_due_by?: true
    nr_due_by?: true
    nr_escalated?: true
    cf_best_number_to_reach?: true
    cf_best_number_note?: true
    cf_quotewekrs?: true
    cf_qbsalesorder?: true
    cf_qbinv?: true
    cf_totalhours?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type Fd_ticketsCountAggregateInputType = {
    id?: true
    json?: true
    ticket_id?: true
    cc_emails?: true
    fwd_emails?: true
    reply_cc_emails?: true
    ticket_cc_emails?: true
    tags?: true
    email_config_id?: true
    group_id?: true
    priority?: true
    requester_id?: true
    requester_name?: true
    requester_email?: true
    responder_id?: true
    source?: true
    status?: true
    subject?: true
    company_id?: true
    type?: true
    to_emails?: true
    product_id?: true
    fr_escalated?: true
    spam?: true
    urgent?: true
    is_escalated?: true
    fd_created_at?: true
    fd_updated_at?: true
    due_by?: true
    fr_due_by?: true
    nr_due_by?: true
    nr_escalated?: true
    json_custom_field?: true
    cf_best_number_to_reach?: true
    cf_best_number_note?: true
    cf_quotewekrs?: true
    cf_qbsalesorder?: true
    cf_qbinv?: true
    cf_totalhours?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type Fd_ticketsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_tickets to aggregate.
     */
    where?: fd_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_tickets to fetch.
     */
    orderBy?: fd_ticketsOrderByWithRelationInput | fd_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fd_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fd_tickets
    **/
    _count?: true | Fd_ticketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fd_ticketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fd_ticketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fd_ticketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fd_ticketsMaxAggregateInputType
  }

  export type GetFd_ticketsAggregateType<T extends Fd_ticketsAggregateArgs> = {
        [P in keyof T & keyof AggregateFd_tickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFd_tickets[P]>
      : GetScalarType<T[P], AggregateFd_tickets[P]>
  }




  export type fd_ticketsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fd_ticketsWhereInput
    orderBy?: fd_ticketsOrderByWithAggregationInput | fd_ticketsOrderByWithAggregationInput[]
    by: Fd_ticketsScalarFieldEnum[] | Fd_ticketsScalarFieldEnum
    having?: fd_ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fd_ticketsCountAggregateInputType | true
    _avg?: Fd_ticketsAvgAggregateInputType
    _sum?: Fd_ticketsSumAggregateInputType
    _min?: Fd_ticketsMinAggregateInputType
    _max?: Fd_ticketsMaxAggregateInputType
  }

  export type Fd_ticketsGroupByOutputType = {
    id: string
    json: JsonValue | null
    ticket_id: bigint | null
    cc_emails: JsonValue | null
    fwd_emails: JsonValue | null
    reply_cc_emails: JsonValue | null
    ticket_cc_emails: JsonValue | null
    tags: JsonValue | null
    email_config_id: bigint | null
    group_id: bigint | null
    priority: number | null
    requester_id: bigint | null
    requester_name: string | null
    requester_email: string | null
    responder_id: bigint | null
    source: number | null
    status: number | null
    subject: string | null
    company_id: bigint | null
    type: string | null
    to_emails: string | null
    product_id: bigint | null
    fr_escalated: boolean | null
    spam: boolean | null
    urgent: boolean | null
    is_escalated: boolean | null
    fd_created_at: Date | null
    fd_updated_at: Date | null
    due_by: Date | null
    fr_due_by: Date | null
    nr_due_by: Date | null
    nr_escalated: boolean | null
    json_custom_field: JsonValue | null
    cf_best_number_to_reach: string | null
    cf_best_number_note: string | null
    cf_quotewekrs: string | null
    cf_qbsalesorder: string | null
    cf_qbinv: string | null
    cf_totalhours: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: Fd_ticketsCountAggregateOutputType | null
    _avg: Fd_ticketsAvgAggregateOutputType | null
    _sum: Fd_ticketsSumAggregateOutputType | null
    _min: Fd_ticketsMinAggregateOutputType | null
    _max: Fd_ticketsMaxAggregateOutputType | null
  }

  type GetFd_ticketsGroupByPayload<T extends fd_ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fd_ticketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fd_ticketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fd_ticketsGroupByOutputType[P]>
            : GetScalarType<T[P], Fd_ticketsGroupByOutputType[P]>
        }
      >
    >


  export type fd_ticketsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    json?: boolean
    ticket_id?: boolean
    cc_emails?: boolean
    fwd_emails?: boolean
    reply_cc_emails?: boolean
    ticket_cc_emails?: boolean
    tags?: boolean
    email_config_id?: boolean
    group_id?: boolean
    priority?: boolean
    requester_id?: boolean
    requester_name?: boolean
    requester_email?: boolean
    responder_id?: boolean
    source?: boolean
    status?: boolean
    subject?: boolean
    company_id?: boolean
    type?: boolean
    to_emails?: boolean
    product_id?: boolean
    fr_escalated?: boolean
    spam?: boolean
    urgent?: boolean
    is_escalated?: boolean
    fd_created_at?: boolean
    fd_updated_at?: boolean
    due_by?: boolean
    fr_due_by?: boolean
    nr_due_by?: boolean
    nr_escalated?: boolean
    json_custom_field?: boolean
    cf_best_number_to_reach?: boolean
    cf_best_number_note?: boolean
    cf_quotewekrs?: boolean
    cf_qbsalesorder?: boolean
    cf_qbinv?: boolean
    cf_totalhours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    fd_activities?: boolean | fd_tickets$fd_activitiesArgs<ExtArgs>
    fd_escalations?: boolean | fd_tickets$fd_escalationsArgs<ExtArgs>
    _count?: boolean | Fd_ticketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fd_tickets"]>

  export type fd_ticketsSelectScalar = {
    id?: boolean
    json?: boolean
    ticket_id?: boolean
    cc_emails?: boolean
    fwd_emails?: boolean
    reply_cc_emails?: boolean
    ticket_cc_emails?: boolean
    tags?: boolean
    email_config_id?: boolean
    group_id?: boolean
    priority?: boolean
    requester_id?: boolean
    requester_name?: boolean
    requester_email?: boolean
    responder_id?: boolean
    source?: boolean
    status?: boolean
    subject?: boolean
    company_id?: boolean
    type?: boolean
    to_emails?: boolean
    product_id?: boolean
    fr_escalated?: boolean
    spam?: boolean
    urgent?: boolean
    is_escalated?: boolean
    fd_created_at?: boolean
    fd_updated_at?: boolean
    due_by?: boolean
    fr_due_by?: boolean
    nr_due_by?: boolean
    nr_escalated?: boolean
    json_custom_field?: boolean
    cf_best_number_to_reach?: boolean
    cf_best_number_note?: boolean
    cf_quotewekrs?: boolean
    cf_qbsalesorder?: boolean
    cf_qbinv?: boolean
    cf_totalhours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type fd_ticketsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fd_activities?: boolean | fd_tickets$fd_activitiesArgs<ExtArgs>
    fd_escalations?: boolean | fd_tickets$fd_escalationsArgs<ExtArgs>
    _count?: boolean | Fd_ticketsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $fd_ticketsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fd_tickets"
    objects: {
      fd_activities: Prisma.$fd_activitiesPayload<ExtArgs>[]
      fd_escalations: Prisma.$fd_escalationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      json: Prisma.JsonValue | null
      ticket_id: bigint | null
      cc_emails: Prisma.JsonValue | null
      fwd_emails: Prisma.JsonValue | null
      reply_cc_emails: Prisma.JsonValue | null
      ticket_cc_emails: Prisma.JsonValue | null
      tags: Prisma.JsonValue | null
      email_config_id: bigint | null
      group_id: bigint | null
      priority: number | null
      requester_id: bigint | null
      requester_name: string | null
      requester_email: string | null
      responder_id: bigint | null
      source: number | null
      status: number | null
      subject: string | null
      company_id: bigint | null
      type: string | null
      to_emails: string | null
      product_id: bigint | null
      fr_escalated: boolean | null
      spam: boolean | null
      urgent: boolean | null
      is_escalated: boolean | null
      fd_created_at: Date | null
      fd_updated_at: Date | null
      due_by: Date | null
      fr_due_by: Date | null
      nr_due_by: Date | null
      nr_escalated: boolean | null
      json_custom_field: Prisma.JsonValue | null
      cf_best_number_to_reach: string | null
      cf_best_number_note: string | null
      cf_quotewekrs: string | null
      cf_qbsalesorder: string | null
      cf_qbinv: string | null
      cf_totalhours: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["fd_tickets"]>
    composites: {}
  }


  type fd_ticketsGetPayload<S extends boolean | null | undefined | fd_ticketsDefaultArgs> = $Result.GetResult<Prisma.$fd_ticketsPayload, S>

  type fd_ticketsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fd_ticketsFindManyArgs, 'select' | 'include'> & {
      select?: Fd_ticketsCountAggregateInputType | true
    }

  export interface fd_ticketsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fd_tickets'], meta: { name: 'fd_tickets' } }
    /**
     * Find zero or one Fd_tickets that matches the filter.
     * @param {fd_ticketsFindUniqueArgs} args - Arguments to find a Fd_tickets
     * @example
     * // Get one Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fd_ticketsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fd_ticketsFindUniqueArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fd_tickets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fd_ticketsFindUniqueOrThrowArgs} args - Arguments to find a Fd_tickets
     * @example
     * // Get one Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fd_ticketsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_ticketsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fd_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_ticketsFindFirstArgs} args - Arguments to find a Fd_tickets
     * @example
     * // Get one Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fd_ticketsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_ticketsFindFirstArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fd_tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_ticketsFindFirstOrThrowArgs} args - Arguments to find a Fd_tickets
     * @example
     * // Get one Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fd_ticketsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_ticketsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fd_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_ticketsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.findMany()
     * 
     * // Get first 10 Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fd_ticketsWithIdOnly = await prisma.fd_tickets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fd_ticketsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_ticketsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fd_tickets.
     * @param {fd_ticketsCreateArgs} args - Arguments to create a Fd_tickets.
     * @example
     * // Create one Fd_tickets
     * const Fd_tickets = await prisma.fd_tickets.create({
     *   data: {
     *     // ... data to create a Fd_tickets
     *   }
     * })
     * 
    **/
    create<T extends fd_ticketsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_ticketsCreateArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fd_tickets.
     *     @param {fd_ticketsCreateManyArgs} args - Arguments to create many Fd_tickets.
     *     @example
     *     // Create many Fd_tickets
     *     const fd_tickets = await prisma.fd_tickets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fd_ticketsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_ticketsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fd_tickets.
     * @param {fd_ticketsDeleteArgs} args - Arguments to delete one Fd_tickets.
     * @example
     * // Delete one Fd_tickets
     * const Fd_tickets = await prisma.fd_tickets.delete({
     *   where: {
     *     // ... filter to delete one Fd_tickets
     *   }
     * })
     * 
    **/
    delete<T extends fd_ticketsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fd_ticketsDeleteArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fd_tickets.
     * @param {fd_ticketsUpdateArgs} args - Arguments to update one Fd_tickets.
     * @example
     * // Update one Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fd_ticketsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fd_ticketsUpdateArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fd_tickets.
     * @param {fd_ticketsDeleteManyArgs} args - Arguments to filter Fd_tickets to delete.
     * @example
     * // Delete a few Fd_tickets
     * const { count } = await prisma.fd_tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fd_ticketsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fd_ticketsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fd_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fd_ticketsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fd_ticketsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fd_tickets.
     * @param {fd_ticketsUpsertArgs} args - Arguments to update or create a Fd_tickets.
     * @example
     * // Update or create a Fd_tickets
     * const fd_tickets = await prisma.fd_tickets.upsert({
     *   create: {
     *     // ... data to create a Fd_tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fd_tickets we want to update
     *   }
     * })
    **/
    upsert<T extends fd_ticketsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fd_ticketsUpsertArgs<ExtArgs>>
    ): Prisma__fd_ticketsClient<$Result.GetResult<Prisma.$fd_ticketsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fd_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_ticketsCountArgs} args - Arguments to filter Fd_tickets to count.
     * @example
     * // Count the number of Fd_tickets
     * const count = await prisma.fd_tickets.count({
     *   where: {
     *     // ... the filter for the Fd_tickets we want to count
     *   }
     * })
    **/
    count<T extends fd_ticketsCountArgs>(
      args?: Subset<T, fd_ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fd_ticketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fd_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fd_ticketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fd_ticketsAggregateArgs>(args: Subset<T, Fd_ticketsAggregateArgs>): Prisma.PrismaPromise<GetFd_ticketsAggregateType<T>>

    /**
     * Group by Fd_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fd_ticketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fd_ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fd_ticketsGroupByArgs['orderBy'] }
        : { orderBy?: fd_ticketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fd_ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFd_ticketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fd_tickets model
   */
  readonly fields: fd_ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fd_tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fd_ticketsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fd_activities<T extends fd_tickets$fd_activitiesArgs<ExtArgs> = {}>(args?: Subset<T, fd_tickets$fd_activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_activitiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    fd_escalations<T extends fd_tickets$fd_escalationsArgs<ExtArgs> = {}>(args?: Subset<T, fd_tickets$fd_escalationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fd_escalationsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fd_tickets model
   */ 
  interface fd_ticketsFieldRefs {
    readonly id: FieldRef<"fd_tickets", 'String'>
    readonly json: FieldRef<"fd_tickets", 'Json'>
    readonly ticket_id: FieldRef<"fd_tickets", 'BigInt'>
    readonly cc_emails: FieldRef<"fd_tickets", 'Json'>
    readonly fwd_emails: FieldRef<"fd_tickets", 'Json'>
    readonly reply_cc_emails: FieldRef<"fd_tickets", 'Json'>
    readonly ticket_cc_emails: FieldRef<"fd_tickets", 'Json'>
    readonly tags: FieldRef<"fd_tickets", 'Json'>
    readonly email_config_id: FieldRef<"fd_tickets", 'BigInt'>
    readonly group_id: FieldRef<"fd_tickets", 'BigInt'>
    readonly priority: FieldRef<"fd_tickets", 'Int'>
    readonly requester_id: FieldRef<"fd_tickets", 'BigInt'>
    readonly requester_name: FieldRef<"fd_tickets", 'String'>
    readonly requester_email: FieldRef<"fd_tickets", 'String'>
    readonly responder_id: FieldRef<"fd_tickets", 'BigInt'>
    readonly source: FieldRef<"fd_tickets", 'Int'>
    readonly status: FieldRef<"fd_tickets", 'Int'>
    readonly subject: FieldRef<"fd_tickets", 'String'>
    readonly company_id: FieldRef<"fd_tickets", 'BigInt'>
    readonly type: FieldRef<"fd_tickets", 'String'>
    readonly to_emails: FieldRef<"fd_tickets", 'String'>
    readonly product_id: FieldRef<"fd_tickets", 'BigInt'>
    readonly fr_escalated: FieldRef<"fd_tickets", 'Boolean'>
    readonly spam: FieldRef<"fd_tickets", 'Boolean'>
    readonly urgent: FieldRef<"fd_tickets", 'Boolean'>
    readonly is_escalated: FieldRef<"fd_tickets", 'Boolean'>
    readonly fd_created_at: FieldRef<"fd_tickets", 'DateTime'>
    readonly fd_updated_at: FieldRef<"fd_tickets", 'DateTime'>
    readonly due_by: FieldRef<"fd_tickets", 'DateTime'>
    readonly fr_due_by: FieldRef<"fd_tickets", 'DateTime'>
    readonly nr_due_by: FieldRef<"fd_tickets", 'DateTime'>
    readonly nr_escalated: FieldRef<"fd_tickets", 'Boolean'>
    readonly json_custom_field: FieldRef<"fd_tickets", 'Json'>
    readonly cf_best_number_to_reach: FieldRef<"fd_tickets", 'String'>
    readonly cf_best_number_note: FieldRef<"fd_tickets", 'String'>
    readonly cf_quotewekrs: FieldRef<"fd_tickets", 'String'>
    readonly cf_qbsalesorder: FieldRef<"fd_tickets", 'String'>
    readonly cf_qbinv: FieldRef<"fd_tickets", 'String'>
    readonly cf_totalhours: FieldRef<"fd_tickets", 'String'>
    readonly createdAt: FieldRef<"fd_tickets", 'DateTime'>
    readonly updatedAt: FieldRef<"fd_tickets", 'DateTime'>
    readonly deleted: FieldRef<"fd_tickets", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * fd_tickets findUnique
   */
  export type fd_ticketsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which fd_tickets to fetch.
     */
    where: fd_ticketsWhereUniqueInput
  }


  /**
   * fd_tickets findUniqueOrThrow
   */
  export type fd_ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which fd_tickets to fetch.
     */
    where: fd_ticketsWhereUniqueInput
  }


  /**
   * fd_tickets findFirst
   */
  export type fd_ticketsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which fd_tickets to fetch.
     */
    where?: fd_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_tickets to fetch.
     */
    orderBy?: fd_ticketsOrderByWithRelationInput | fd_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_tickets.
     */
    cursor?: fd_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_tickets.
     */
    distinct?: Fd_ticketsScalarFieldEnum | Fd_ticketsScalarFieldEnum[]
  }


  /**
   * fd_tickets findFirstOrThrow
   */
  export type fd_ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which fd_tickets to fetch.
     */
    where?: fd_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_tickets to fetch.
     */
    orderBy?: fd_ticketsOrderByWithRelationInput | fd_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fd_tickets.
     */
    cursor?: fd_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fd_tickets.
     */
    distinct?: Fd_ticketsScalarFieldEnum | Fd_ticketsScalarFieldEnum[]
  }


  /**
   * fd_tickets findMany
   */
  export type fd_ticketsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which fd_tickets to fetch.
     */
    where?: fd_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fd_tickets to fetch.
     */
    orderBy?: fd_ticketsOrderByWithRelationInput | fd_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fd_tickets.
     */
    cursor?: fd_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fd_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fd_tickets.
     */
    skip?: number
    distinct?: Fd_ticketsScalarFieldEnum | Fd_ticketsScalarFieldEnum[]
  }


  /**
   * fd_tickets create
   */
  export type fd_ticketsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a fd_tickets.
     */
    data: XOR<fd_ticketsCreateInput, fd_ticketsUncheckedCreateInput>
  }


  /**
   * fd_tickets createMany
   */
  export type fd_ticketsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fd_tickets.
     */
    data: fd_ticketsCreateManyInput | fd_ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fd_tickets update
   */
  export type fd_ticketsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a fd_tickets.
     */
    data: XOR<fd_ticketsUpdateInput, fd_ticketsUncheckedUpdateInput>
    /**
     * Choose, which fd_tickets to update.
     */
    where: fd_ticketsWhereUniqueInput
  }


  /**
   * fd_tickets updateMany
   */
  export type fd_ticketsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fd_tickets.
     */
    data: XOR<fd_ticketsUpdateManyMutationInput, fd_ticketsUncheckedUpdateManyInput>
    /**
     * Filter which fd_tickets to update
     */
    where?: fd_ticketsWhereInput
  }


  /**
   * fd_tickets upsert
   */
  export type fd_ticketsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the fd_tickets to update in case it exists.
     */
    where: fd_ticketsWhereUniqueInput
    /**
     * In case the fd_tickets found by the `where` argument doesn't exist, create a new fd_tickets with this data.
     */
    create: XOR<fd_ticketsCreateInput, fd_ticketsUncheckedCreateInput>
    /**
     * In case the fd_tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fd_ticketsUpdateInput, fd_ticketsUncheckedUpdateInput>
  }


  /**
   * fd_tickets delete
   */
  export type fd_ticketsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
    /**
     * Filter which fd_tickets to delete.
     */
    where: fd_ticketsWhereUniqueInput
  }


  /**
   * fd_tickets deleteMany
   */
  export type fd_ticketsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fd_tickets to delete
     */
    where?: fd_ticketsWhereInput
  }


  /**
   * fd_tickets.fd_activities
   */
  export type fd_tickets$fd_activitiesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_activities
     */
    select?: fd_activitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_activitiesInclude<ExtArgs> | null
    where?: fd_activitiesWhereInput
    orderBy?: fd_activitiesOrderByWithRelationInput | fd_activitiesOrderByWithRelationInput[]
    cursor?: fd_activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fd_activitiesScalarFieldEnum | Fd_activitiesScalarFieldEnum[]
  }


  /**
   * fd_tickets.fd_escalations
   */
  export type fd_tickets$fd_escalationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_escalations
     */
    select?: fd_escalationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_escalationsInclude<ExtArgs> | null
    where?: fd_escalationsWhereInput
    orderBy?: fd_escalationsOrderByWithRelationInput | fd_escalationsOrderByWithRelationInput[]
    cursor?: fd_escalationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fd_escalationsScalarFieldEnum | Fd_escalationsScalarFieldEnum[]
  }


  /**
   * fd_tickets without action
   */
  export type fd_ticketsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fd_tickets
     */
    select?: fd_ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fd_ticketsInclude<ExtArgs> | null
  }



  /**
   * Model role_pool
   */

  export type AggregateRole_pool = {
    _count: Role_poolCountAggregateOutputType | null
    _min: Role_poolMinAggregateOutputType | null
    _max: Role_poolMaxAggregateOutputType | null
  }

  export type Role_poolMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    roleId: string | null
  }

  export type Role_poolMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    roleId: string | null
  }

  export type Role_poolCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    roleId: number
    _all: number
  }


  export type Role_poolMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    roleId?: true
  }

  export type Role_poolMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    roleId?: true
  }

  export type Role_poolCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    roleId?: true
    _all?: true
  }

  export type Role_poolAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_pool to aggregate.
     */
    where?: role_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_pools to fetch.
     */
    orderBy?: role_poolOrderByWithRelationInput | role_poolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_pools
    **/
    _count?: true | Role_poolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_poolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_poolMaxAggregateInputType
  }

  export type GetRole_poolAggregateType<T extends Role_poolAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_pool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_pool[P]>
      : GetScalarType<T[P], AggregateRole_pool[P]>
  }




  export type role_poolGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: role_poolWhereInput
    orderBy?: role_poolOrderByWithAggregationInput | role_poolOrderByWithAggregationInput[]
    by: Role_poolScalarFieldEnum[] | Role_poolScalarFieldEnum
    having?: role_poolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_poolCountAggregateInputType | true
    _min?: Role_poolMinAggregateInputType
    _max?: Role_poolMaxAggregateInputType
  }

  export type Role_poolGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: string | null
    roleId: string | null
    _count: Role_poolCountAggregateOutputType | null
    _min: Role_poolMinAggregateOutputType | null
    _max: Role_poolMaxAggregateOutputType | null
  }

  type GetRole_poolGroupByPayload<T extends role_poolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_poolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_poolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_poolGroupByOutputType[P]>
            : GetScalarType<T[P], Role_poolGroupByOutputType[P]>
        }
      >
    >


  export type role_poolSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    roleId?: boolean
    roles?: boolean | role_pool$rolesArgs<ExtArgs>
    users?: boolean | role_pool$usersArgs<ExtArgs>
  }, ExtArgs["result"]["role_pool"]>

  export type role_poolSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    roleId?: boolean
  }

  export type role_poolInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    roles?: boolean | role_pool$rolesArgs<ExtArgs>
    users?: boolean | role_pool$usersArgs<ExtArgs>
  }


  export type $role_poolPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "role_pool"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: string | null
      roleId: string | null
    }, ExtArgs["result"]["role_pool"]>
    composites: {}
  }


  type role_poolGetPayload<S extends boolean | null | undefined | role_poolDefaultArgs> = $Result.GetResult<Prisma.$role_poolPayload, S>

  type role_poolCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<role_poolFindManyArgs, 'select' | 'include'> & {
      select?: Role_poolCountAggregateInputType | true
    }

  export interface role_poolDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role_pool'], meta: { name: 'role_pool' } }
    /**
     * Find zero or one Role_pool that matches the filter.
     * @param {role_poolFindUniqueArgs} args - Arguments to find a Role_pool
     * @example
     * // Get one Role_pool
     * const role_pool = await prisma.role_pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends role_poolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, role_poolFindUniqueArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role_pool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {role_poolFindUniqueOrThrowArgs} args - Arguments to find a Role_pool
     * @example
     * // Get one Role_pool
     * const role_pool = await prisma.role_pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends role_poolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, role_poolFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role_pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_poolFindFirstArgs} args - Arguments to find a Role_pool
     * @example
     * // Get one Role_pool
     * const role_pool = await prisma.role_pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends role_poolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, role_poolFindFirstArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role_pool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_poolFindFirstOrThrowArgs} args - Arguments to find a Role_pool
     * @example
     * // Get one Role_pool
     * const role_pool = await prisma.role_pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends role_poolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, role_poolFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Role_pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_poolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_pools
     * const role_pools = await prisma.role_pool.findMany()
     * 
     * // Get first 10 Role_pools
     * const role_pools = await prisma.role_pool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const role_poolWithIdOnly = await prisma.role_pool.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends role_poolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, role_poolFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role_pool.
     * @param {role_poolCreateArgs} args - Arguments to create a Role_pool.
     * @example
     * // Create one Role_pool
     * const Role_pool = await prisma.role_pool.create({
     *   data: {
     *     // ... data to create a Role_pool
     *   }
     * })
     * 
    **/
    create<T extends role_poolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, role_poolCreateArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Role_pools.
     *     @param {role_poolCreateManyArgs} args - Arguments to create many Role_pools.
     *     @example
     *     // Create many Role_pools
     *     const role_pool = await prisma.role_pool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends role_poolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, role_poolCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role_pool.
     * @param {role_poolDeleteArgs} args - Arguments to delete one Role_pool.
     * @example
     * // Delete one Role_pool
     * const Role_pool = await prisma.role_pool.delete({
     *   where: {
     *     // ... filter to delete one Role_pool
     *   }
     * })
     * 
    **/
    delete<T extends role_poolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, role_poolDeleteArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role_pool.
     * @param {role_poolUpdateArgs} args - Arguments to update one Role_pool.
     * @example
     * // Update one Role_pool
     * const role_pool = await prisma.role_pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends role_poolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, role_poolUpdateArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Role_pools.
     * @param {role_poolDeleteManyArgs} args - Arguments to filter Role_pools to delete.
     * @example
     * // Delete a few Role_pools
     * const { count } = await prisma.role_pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends role_poolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, role_poolDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_poolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_pools
     * const role_pool = await prisma.role_pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends role_poolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, role_poolUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_pool.
     * @param {role_poolUpsertArgs} args - Arguments to update or create a Role_pool.
     * @example
     * // Update or create a Role_pool
     * const role_pool = await prisma.role_pool.upsert({
     *   create: {
     *     // ... data to create a Role_pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_pool we want to update
     *   }
     * })
    **/
    upsert<T extends role_poolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, role_poolUpsertArgs<ExtArgs>>
    ): Prisma__role_poolClient<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Role_pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_poolCountArgs} args - Arguments to filter Role_pools to count.
     * @example
     * // Count the number of Role_pools
     * const count = await prisma.role_pool.count({
     *   where: {
     *     // ... the filter for the Role_pools we want to count
     *   }
     * })
    **/
    count<T extends role_poolCountArgs>(
      args?: Subset<T, role_poolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_poolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_poolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_poolAggregateArgs>(args: Subset<T, Role_poolAggregateArgs>): Prisma.PrismaPromise<GetRole_poolAggregateType<T>>

    /**
     * Group by Role_pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_poolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends role_poolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: role_poolGroupByArgs['orderBy'] }
        : { orderBy?: role_poolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, role_poolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_poolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role_pool model
   */
  readonly fields: role_poolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role_pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__role_poolClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends role_pool$rolesArgs<ExtArgs> = {}>(args?: Subset<T, role_pool$rolesArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends role_pool$usersArgs<ExtArgs> = {}>(args?: Subset<T, role_pool$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the role_pool model
   */ 
  interface role_poolFieldRefs {
    readonly id: FieldRef<"role_pool", 'String'>
    readonly createdAt: FieldRef<"role_pool", 'DateTime'>
    readonly updatedAt: FieldRef<"role_pool", 'DateTime'>
    readonly deletedAt: FieldRef<"role_pool", 'DateTime'>
    readonly userId: FieldRef<"role_pool", 'String'>
    readonly roleId: FieldRef<"role_pool", 'String'>
  }
    

  // Custom InputTypes

  /**
   * role_pool findUnique
   */
  export type role_poolFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * Filter, which role_pool to fetch.
     */
    where: role_poolWhereUniqueInput
  }


  /**
   * role_pool findUniqueOrThrow
   */
  export type role_poolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * Filter, which role_pool to fetch.
     */
    where: role_poolWhereUniqueInput
  }


  /**
   * role_pool findFirst
   */
  export type role_poolFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * Filter, which role_pool to fetch.
     */
    where?: role_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_pools to fetch.
     */
    orderBy?: role_poolOrderByWithRelationInput | role_poolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_pools.
     */
    cursor?: role_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_pools.
     */
    distinct?: Role_poolScalarFieldEnum | Role_poolScalarFieldEnum[]
  }


  /**
   * role_pool findFirstOrThrow
   */
  export type role_poolFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * Filter, which role_pool to fetch.
     */
    where?: role_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_pools to fetch.
     */
    orderBy?: role_poolOrderByWithRelationInput | role_poolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_pools.
     */
    cursor?: role_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_pools.
     */
    distinct?: Role_poolScalarFieldEnum | Role_poolScalarFieldEnum[]
  }


  /**
   * role_pool findMany
   */
  export type role_poolFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * Filter, which role_pools to fetch.
     */
    where?: role_poolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_pools to fetch.
     */
    orderBy?: role_poolOrderByWithRelationInput | role_poolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_pools.
     */
    cursor?: role_poolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_pools.
     */
    skip?: number
    distinct?: Role_poolScalarFieldEnum | Role_poolScalarFieldEnum[]
  }


  /**
   * role_pool create
   */
  export type role_poolCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * The data needed to create a role_pool.
     */
    data: XOR<role_poolCreateInput, role_poolUncheckedCreateInput>
  }


  /**
   * role_pool createMany
   */
  export type role_poolCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many role_pools.
     */
    data: role_poolCreateManyInput | role_poolCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * role_pool update
   */
  export type role_poolUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * The data needed to update a role_pool.
     */
    data: XOR<role_poolUpdateInput, role_poolUncheckedUpdateInput>
    /**
     * Choose, which role_pool to update.
     */
    where: role_poolWhereUniqueInput
  }


  /**
   * role_pool updateMany
   */
  export type role_poolUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update role_pools.
     */
    data: XOR<role_poolUpdateManyMutationInput, role_poolUncheckedUpdateManyInput>
    /**
     * Filter which role_pools to update
     */
    where?: role_poolWhereInput
  }


  /**
   * role_pool upsert
   */
  export type role_poolUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * The filter to search for the role_pool to update in case it exists.
     */
    where: role_poolWhereUniqueInput
    /**
     * In case the role_pool found by the `where` argument doesn't exist, create a new role_pool with this data.
     */
    create: XOR<role_poolCreateInput, role_poolUncheckedCreateInput>
    /**
     * In case the role_pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_poolUpdateInput, role_poolUncheckedUpdateInput>
  }


  /**
   * role_pool delete
   */
  export type role_poolDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    /**
     * Filter which role_pool to delete.
     */
    where: role_poolWhereUniqueInput
  }


  /**
   * role_pool deleteMany
   */
  export type role_poolDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_pools to delete
     */
    where?: role_poolWhereInput
  }


  /**
   * role_pool.roles
   */
  export type role_pool$rolesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
  }


  /**
   * role_pool.users
   */
  export type role_pool$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * role_pool without action
   */
  export type role_poolDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
  }



  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    role_name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    role_name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    role_name: number
    code: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    role_name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    role_name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    role_name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    role_name: string
    code: string | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    role_pool?: boolean | roles$role_poolArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    role_name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type rolesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    role_pool?: boolean | roles$role_poolArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $rolesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      role_pool: Prisma.$role_poolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      role_name: string
      code: string | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<rolesFindManyArgs, 'select' | 'include'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesCreateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role_pool<T extends roles$role_poolArgs<ExtArgs> = {}>(args?: Subset<T, roles$role_poolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'String'>
    readonly role_name: FieldRef<"roles", 'String'>
    readonly code: FieldRef<"roles", 'String'>
    readonly createdAt: FieldRef<"roles", 'DateTime'>
    readonly updatedAt: FieldRef<"roles", 'DateTime'>
    readonly deleted: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }


  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }


  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }


  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }


  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }


  /**
   * roles.role_pool
   */
  export type roles$role_poolArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    where?: role_poolWhereInput
    orderBy?: role_poolOrderByWithRelationInput | role_poolOrderByWithRelationInput[]
    cursor?: role_poolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_poolScalarFieldEnum | Role_poolScalarFieldEnum[]
  }


  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rolesInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    confirmation_code: string | null
    status: $Enums.enum_users_status | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    confirmation_code: string | null
    status: $Enums.enum_users_status | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    confirmation_code: number
    status: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    confirmation_code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    confirmation_code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    confirmation_code?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    confirmation_code: string | null
    status: $Enums.enum_users_status | null
    createdAt: Date
    updatedAt: Date
    deleted: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    confirmation_code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    role_pool?: boolean | users$role_poolArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    confirmation_code?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    role_pool?: boolean | users$role_poolArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      role_pool: Prisma.$role_poolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      confirmation_code: string | null
      status: $Enums.enum_users_status | null
      createdAt: Date
      updatedAt: Date
      deleted: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role_pool<T extends users$role_poolArgs<ExtArgs> = {}>(args?: Subset<T, users$role_poolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_poolPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly confirmation_code: FieldRef<"users", 'String'>
    readonly status: FieldRef<"users", 'enum_users_status'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
    readonly deleted: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.role_pool
   */
  export type users$role_poolArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_pool
     */
    select?: role_poolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_poolInclude<ExtArgs> | null
    where?: role_poolWhereInput
    orderBy?: role_poolOrderByWithRelationInput | role_poolOrderByWithRelationInput[]
    cursor?: role_poolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_poolScalarFieldEnum | Role_poolScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Fd_activitiesScalarFieldEnum: {
    id: 'id',
    status: 'status',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted',
    freshdesk_id: 'freshdesk_id'
  };

  export type Fd_activitiesScalarFieldEnum = (typeof Fd_activitiesScalarFieldEnum)[keyof typeof Fd_activitiesScalarFieldEnum]


  export const Fd_agentsScalarFieldEnum: {
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

  export type Fd_agentsScalarFieldEnum = (typeof Fd_agentsScalarFieldEnum)[keyof typeof Fd_agentsScalarFieldEnum]


  export const Fd_escalationsScalarFieldEnum: {
    id: 'id',
    escalation_type: 'escalation_type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted',
    freshdesk_id: 'freshdesk_id'
  };

  export type Fd_escalationsScalarFieldEnum = (typeof Fd_escalationsScalarFieldEnum)[keyof typeof Fd_escalationsScalarFieldEnum]


  export const Fd_groupScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    group_name: 'group_name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type Fd_groupScalarFieldEnum = (typeof Fd_groupScalarFieldEnum)[keyof typeof Fd_groupScalarFieldEnum]


  export const Fd_priorityScalarFieldEnum: {
    id: 'id',
    priority_id: 'priority_id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type Fd_priorityScalarFieldEnum = (typeof Fd_priorityScalarFieldEnum)[keyof typeof Fd_priorityScalarFieldEnum]


  export const Fd_statusScalarFieldEnum: {
    id: 'id',
    status_id: 'status_id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type Fd_statusScalarFieldEnum = (typeof Fd_statusScalarFieldEnum)[keyof typeof Fd_statusScalarFieldEnum]


  export const Fd_ticketsScalarFieldEnum: {
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

  export type Fd_ticketsScalarFieldEnum = (typeof Fd_ticketsScalarFieldEnum)[keyof typeof Fd_ticketsScalarFieldEnum]


  export const Role_poolScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    roleId: 'roleId'
  };

  export type Role_poolScalarFieldEnum = (typeof Role_poolScalarFieldEnum)[keyof typeof Role_poolScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'enum_users_status'
   */
  export type Enumenum_users_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_users_status'>
    


  /**
   * Reference to a field of type 'enum_users_status[]'
   */
  export type ListEnumenum_users_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_users_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type fd_activitiesWhereInput = {
    AND?: fd_activitiesWhereInput | fd_activitiesWhereInput[]
    OR?: fd_activitiesWhereInput[]
    NOT?: fd_activitiesWhereInput | fd_activitiesWhereInput[]
    id?: StringFilter<"fd_activities"> | string
    status?: IntNullableFilter<"fd_activities"> | number | null
    priority?: StringNullableFilter<"fd_activities"> | string | null
    createdAt?: DateTimeFilter<"fd_activities"> | Date | string
    updatedAt?: DateTimeFilter<"fd_activities"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_activities"> | Date | string | null
    freshdesk_id?: StringNullableFilter<"fd_activities"> | string | null
    fd_tickets?: XOR<Fd_ticketsNullableRelationFilter, fd_ticketsWhereInput> | null
  }

  export type fd_activitiesOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    freshdesk_id?: SortOrderInput | SortOrder
    fd_tickets?: fd_ticketsOrderByWithRelationInput
  }

  export type fd_activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fd_activitiesWhereInput | fd_activitiesWhereInput[]
    OR?: fd_activitiesWhereInput[]
    NOT?: fd_activitiesWhereInput | fd_activitiesWhereInput[]
    status?: IntNullableFilter<"fd_activities"> | number | null
    priority?: StringNullableFilter<"fd_activities"> | string | null
    createdAt?: DateTimeFilter<"fd_activities"> | Date | string
    updatedAt?: DateTimeFilter<"fd_activities"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_activities"> | Date | string | null
    freshdesk_id?: StringNullableFilter<"fd_activities"> | string | null
    fd_tickets?: XOR<Fd_ticketsNullableRelationFilter, fd_ticketsWhereInput> | null
  }, "id">

  export type fd_activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    freshdesk_id?: SortOrderInput | SortOrder
    _count?: fd_activitiesCountOrderByAggregateInput
    _avg?: fd_activitiesAvgOrderByAggregateInput
    _max?: fd_activitiesMaxOrderByAggregateInput
    _min?: fd_activitiesMinOrderByAggregateInput
    _sum?: fd_activitiesSumOrderByAggregateInput
  }

  export type fd_activitiesScalarWhereWithAggregatesInput = {
    AND?: fd_activitiesScalarWhereWithAggregatesInput | fd_activitiesScalarWhereWithAggregatesInput[]
    OR?: fd_activitiesScalarWhereWithAggregatesInput[]
    NOT?: fd_activitiesScalarWhereWithAggregatesInput | fd_activitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fd_activities"> | string
    status?: IntNullableWithAggregatesFilter<"fd_activities"> | number | null
    priority?: StringNullableWithAggregatesFilter<"fd_activities"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fd_activities"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fd_activities"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"fd_activities"> | Date | string | null
    freshdesk_id?: StringNullableWithAggregatesFilter<"fd_activities"> | string | null
  }

  export type fd_agentsWhereInput = {
    AND?: fd_agentsWhereInput | fd_agentsWhereInput[]
    OR?: fd_agentsWhereInput[]
    NOT?: fd_agentsWhereInput | fd_agentsWhereInput[]
    id?: StringFilter<"fd_agents"> | string
    available?: StringNullableFilter<"fd_agents"> | string | null
    ticket_scope?: IntNullableFilter<"fd_agents"> | number | null
    type?: StringNullableFilter<"fd_agents"> | string | null
    active?: StringNullableFilter<"fd_agents"> | string | null
    email?: StringNullableFilter<"fd_agents"> | string | null
    name?: StringNullableFilter<"fd_agents"> | string | null
    phone?: StringNullableFilter<"fd_agents"> | string | null
    last_active_at?: StringNullableFilter<"fd_agents"> | string | null
    createdAt?: DateTimeFilter<"fd_agents"> | Date | string
    updatedAt?: DateTimeFilter<"fd_agents"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_agents"> | Date | string | null
  }

  export type fd_agentsOrderByWithRelationInput = {
    id?: SortOrder
    available?: SortOrderInput | SortOrder
    ticket_scope?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    last_active_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
  }

  export type fd_agentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fd_agentsWhereInput | fd_agentsWhereInput[]
    OR?: fd_agentsWhereInput[]
    NOT?: fd_agentsWhereInput | fd_agentsWhereInput[]
    available?: StringNullableFilter<"fd_agents"> | string | null
    ticket_scope?: IntNullableFilter<"fd_agents"> | number | null
    type?: StringNullableFilter<"fd_agents"> | string | null
    active?: StringNullableFilter<"fd_agents"> | string | null
    email?: StringNullableFilter<"fd_agents"> | string | null
    name?: StringNullableFilter<"fd_agents"> | string | null
    phone?: StringNullableFilter<"fd_agents"> | string | null
    last_active_at?: StringNullableFilter<"fd_agents"> | string | null
    createdAt?: DateTimeFilter<"fd_agents"> | Date | string
    updatedAt?: DateTimeFilter<"fd_agents"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_agents"> | Date | string | null
  }, "id">

  export type fd_agentsOrderByWithAggregationInput = {
    id?: SortOrder
    available?: SortOrderInput | SortOrder
    ticket_scope?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    last_active_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: fd_agentsCountOrderByAggregateInput
    _avg?: fd_agentsAvgOrderByAggregateInput
    _max?: fd_agentsMaxOrderByAggregateInput
    _min?: fd_agentsMinOrderByAggregateInput
    _sum?: fd_agentsSumOrderByAggregateInput
  }

  export type fd_agentsScalarWhereWithAggregatesInput = {
    AND?: fd_agentsScalarWhereWithAggregatesInput | fd_agentsScalarWhereWithAggregatesInput[]
    OR?: fd_agentsScalarWhereWithAggregatesInput[]
    NOT?: fd_agentsScalarWhereWithAggregatesInput | fd_agentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fd_agents"> | string
    available?: StringNullableWithAggregatesFilter<"fd_agents"> | string | null
    ticket_scope?: IntNullableWithAggregatesFilter<"fd_agents"> | number | null
    type?: StringNullableWithAggregatesFilter<"fd_agents"> | string | null
    active?: StringNullableWithAggregatesFilter<"fd_agents"> | string | null
    email?: StringNullableWithAggregatesFilter<"fd_agents"> | string | null
    name?: StringNullableWithAggregatesFilter<"fd_agents"> | string | null
    phone?: StringNullableWithAggregatesFilter<"fd_agents"> | string | null
    last_active_at?: StringNullableWithAggregatesFilter<"fd_agents"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fd_agents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fd_agents"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"fd_agents"> | Date | string | null
  }

  export type fd_escalationsWhereInput = {
    AND?: fd_escalationsWhereInput | fd_escalationsWhereInput[]
    OR?: fd_escalationsWhereInput[]
    NOT?: fd_escalationsWhereInput | fd_escalationsWhereInput[]
    id?: StringFilter<"fd_escalations"> | string
    escalation_type?: StringNullableFilter<"fd_escalations"> | string | null
    createdAt?: DateTimeFilter<"fd_escalations"> | Date | string
    updatedAt?: DateTimeFilter<"fd_escalations"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_escalations"> | Date | string | null
    freshdesk_id?: StringNullableFilter<"fd_escalations"> | string | null
    fd_tickets?: XOR<Fd_ticketsNullableRelationFilter, fd_ticketsWhereInput> | null
  }

  export type fd_escalationsOrderByWithRelationInput = {
    id?: SortOrder
    escalation_type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    freshdesk_id?: SortOrderInput | SortOrder
    fd_tickets?: fd_ticketsOrderByWithRelationInput
  }

  export type fd_escalationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fd_escalationsWhereInput | fd_escalationsWhereInput[]
    OR?: fd_escalationsWhereInput[]
    NOT?: fd_escalationsWhereInput | fd_escalationsWhereInput[]
    escalation_type?: StringNullableFilter<"fd_escalations"> | string | null
    createdAt?: DateTimeFilter<"fd_escalations"> | Date | string
    updatedAt?: DateTimeFilter<"fd_escalations"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_escalations"> | Date | string | null
    freshdesk_id?: StringNullableFilter<"fd_escalations"> | string | null
    fd_tickets?: XOR<Fd_ticketsNullableRelationFilter, fd_ticketsWhereInput> | null
  }, "id">

  export type fd_escalationsOrderByWithAggregationInput = {
    id?: SortOrder
    escalation_type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    freshdesk_id?: SortOrderInput | SortOrder
    _count?: fd_escalationsCountOrderByAggregateInput
    _max?: fd_escalationsMaxOrderByAggregateInput
    _min?: fd_escalationsMinOrderByAggregateInput
  }

  export type fd_escalationsScalarWhereWithAggregatesInput = {
    AND?: fd_escalationsScalarWhereWithAggregatesInput | fd_escalationsScalarWhereWithAggregatesInput[]
    OR?: fd_escalationsScalarWhereWithAggregatesInput[]
    NOT?: fd_escalationsScalarWhereWithAggregatesInput | fd_escalationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fd_escalations"> | string
    escalation_type?: StringNullableWithAggregatesFilter<"fd_escalations"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fd_escalations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fd_escalations"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"fd_escalations"> | Date | string | null
    freshdesk_id?: StringNullableWithAggregatesFilter<"fd_escalations"> | string | null
  }

  export type fd_groupWhereInput = {
    AND?: fd_groupWhereInput | fd_groupWhereInput[]
    OR?: fd_groupWhereInput[]
    NOT?: fd_groupWhereInput | fd_groupWhereInput[]
    id?: StringFilter<"fd_group"> | string
    group_id?: StringNullableFilter<"fd_group"> | string | null
    group_name?: StringNullableFilter<"fd_group"> | string | null
    createdAt?: DateTimeFilter<"fd_group"> | Date | string
    updatedAt?: DateTimeFilter<"fd_group"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_group"> | Date | string | null
  }

  export type fd_groupOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    group_name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
  }

  export type fd_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fd_groupWhereInput | fd_groupWhereInput[]
    OR?: fd_groupWhereInput[]
    NOT?: fd_groupWhereInput | fd_groupWhereInput[]
    group_id?: StringNullableFilter<"fd_group"> | string | null
    group_name?: StringNullableFilter<"fd_group"> | string | null
    createdAt?: DateTimeFilter<"fd_group"> | Date | string
    updatedAt?: DateTimeFilter<"fd_group"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_group"> | Date | string | null
  }, "id">

  export type fd_groupOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrderInput | SortOrder
    group_name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: fd_groupCountOrderByAggregateInput
    _max?: fd_groupMaxOrderByAggregateInput
    _min?: fd_groupMinOrderByAggregateInput
  }

  export type fd_groupScalarWhereWithAggregatesInput = {
    AND?: fd_groupScalarWhereWithAggregatesInput | fd_groupScalarWhereWithAggregatesInput[]
    OR?: fd_groupScalarWhereWithAggregatesInput[]
    NOT?: fd_groupScalarWhereWithAggregatesInput | fd_groupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fd_group"> | string
    group_id?: StringNullableWithAggregatesFilter<"fd_group"> | string | null
    group_name?: StringNullableWithAggregatesFilter<"fd_group"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fd_group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fd_group"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"fd_group"> | Date | string | null
  }

  export type fd_priorityWhereInput = {
    AND?: fd_priorityWhereInput | fd_priorityWhereInput[]
    OR?: fd_priorityWhereInput[]
    NOT?: fd_priorityWhereInput | fd_priorityWhereInput[]
    id?: StringFilter<"fd_priority"> | string
    priority_id?: StringNullableFilter<"fd_priority"> | string | null
    name?: StringNullableFilter<"fd_priority"> | string | null
    createdAt?: DateTimeFilter<"fd_priority"> | Date | string
    updatedAt?: DateTimeFilter<"fd_priority"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_priority"> | Date | string | null
  }

  export type fd_priorityOrderByWithRelationInput = {
    id?: SortOrder
    priority_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
  }

  export type fd_priorityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fd_priorityWhereInput | fd_priorityWhereInput[]
    OR?: fd_priorityWhereInput[]
    NOT?: fd_priorityWhereInput | fd_priorityWhereInput[]
    priority_id?: StringNullableFilter<"fd_priority"> | string | null
    name?: StringNullableFilter<"fd_priority"> | string | null
    createdAt?: DateTimeFilter<"fd_priority"> | Date | string
    updatedAt?: DateTimeFilter<"fd_priority"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_priority"> | Date | string | null
  }, "id">

  export type fd_priorityOrderByWithAggregationInput = {
    id?: SortOrder
    priority_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: fd_priorityCountOrderByAggregateInput
    _max?: fd_priorityMaxOrderByAggregateInput
    _min?: fd_priorityMinOrderByAggregateInput
  }

  export type fd_priorityScalarWhereWithAggregatesInput = {
    AND?: fd_priorityScalarWhereWithAggregatesInput | fd_priorityScalarWhereWithAggregatesInput[]
    OR?: fd_priorityScalarWhereWithAggregatesInput[]
    NOT?: fd_priorityScalarWhereWithAggregatesInput | fd_priorityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fd_priority"> | string
    priority_id?: StringNullableWithAggregatesFilter<"fd_priority"> | string | null
    name?: StringNullableWithAggregatesFilter<"fd_priority"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fd_priority"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fd_priority"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"fd_priority"> | Date | string | null
  }

  export type fd_statusWhereInput = {
    AND?: fd_statusWhereInput | fd_statusWhereInput[]
    OR?: fd_statusWhereInput[]
    NOT?: fd_statusWhereInput | fd_statusWhereInput[]
    id?: StringFilter<"fd_status"> | string
    status_id?: StringNullableFilter<"fd_status"> | string | null
    name?: StringNullableFilter<"fd_status"> | string | null
    createdAt?: DateTimeFilter<"fd_status"> | Date | string
    updatedAt?: DateTimeFilter<"fd_status"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_status"> | Date | string | null
  }

  export type fd_statusOrderByWithRelationInput = {
    id?: SortOrder
    status_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
  }

  export type fd_statusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fd_statusWhereInput | fd_statusWhereInput[]
    OR?: fd_statusWhereInput[]
    NOT?: fd_statusWhereInput | fd_statusWhereInput[]
    status_id?: StringNullableFilter<"fd_status"> | string | null
    name?: StringNullableFilter<"fd_status"> | string | null
    createdAt?: DateTimeFilter<"fd_status"> | Date | string
    updatedAt?: DateTimeFilter<"fd_status"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_status"> | Date | string | null
  }, "id">

  export type fd_statusOrderByWithAggregationInput = {
    id?: SortOrder
    status_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: fd_statusCountOrderByAggregateInput
    _max?: fd_statusMaxOrderByAggregateInput
    _min?: fd_statusMinOrderByAggregateInput
  }

  export type fd_statusScalarWhereWithAggregatesInput = {
    AND?: fd_statusScalarWhereWithAggregatesInput | fd_statusScalarWhereWithAggregatesInput[]
    OR?: fd_statusScalarWhereWithAggregatesInput[]
    NOT?: fd_statusScalarWhereWithAggregatesInput | fd_statusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fd_status"> | string
    status_id?: StringNullableWithAggregatesFilter<"fd_status"> | string | null
    name?: StringNullableWithAggregatesFilter<"fd_status"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fd_status"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fd_status"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"fd_status"> | Date | string | null
  }

  export type fd_ticketsWhereInput = {
    AND?: fd_ticketsWhereInput | fd_ticketsWhereInput[]
    OR?: fd_ticketsWhereInput[]
    NOT?: fd_ticketsWhereInput | fd_ticketsWhereInput[]
    id?: StringFilter<"fd_tickets"> | string
    json?: JsonNullableFilter<"fd_tickets">
    ticket_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    cc_emails?: JsonNullableFilter<"fd_tickets">
    fwd_emails?: JsonNullableFilter<"fd_tickets">
    reply_cc_emails?: JsonNullableFilter<"fd_tickets">
    ticket_cc_emails?: JsonNullableFilter<"fd_tickets">
    tags?: JsonNullableFilter<"fd_tickets">
    email_config_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    group_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    priority?: IntNullableFilter<"fd_tickets"> | number | null
    requester_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    requester_name?: StringNullableFilter<"fd_tickets"> | string | null
    requester_email?: StringNullableFilter<"fd_tickets"> | string | null
    responder_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    source?: IntNullableFilter<"fd_tickets"> | number | null
    status?: IntNullableFilter<"fd_tickets"> | number | null
    subject?: StringNullableFilter<"fd_tickets"> | string | null
    company_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    type?: StringNullableFilter<"fd_tickets"> | string | null
    to_emails?: StringNullableFilter<"fd_tickets"> | string | null
    product_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    fr_escalated?: BoolNullableFilter<"fd_tickets"> | boolean | null
    spam?: BoolNullableFilter<"fd_tickets"> | boolean | null
    urgent?: BoolNullableFilter<"fd_tickets"> | boolean | null
    is_escalated?: BoolNullableFilter<"fd_tickets"> | boolean | null
    fd_created_at?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    fd_updated_at?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    due_by?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    fr_due_by?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    nr_due_by?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    nr_escalated?: BoolNullableFilter<"fd_tickets"> | boolean | null
    json_custom_field?: JsonNullableFilter<"fd_tickets">
    cf_best_number_to_reach?: StringNullableFilter<"fd_tickets"> | string | null
    cf_best_number_note?: StringNullableFilter<"fd_tickets"> | string | null
    cf_quotewekrs?: StringNullableFilter<"fd_tickets"> | string | null
    cf_qbsalesorder?: StringNullableFilter<"fd_tickets"> | string | null
    cf_qbinv?: StringNullableFilter<"fd_tickets"> | string | null
    cf_totalhours?: StringNullableFilter<"fd_tickets"> | string | null
    createdAt?: DateTimeFilter<"fd_tickets"> | Date | string
    updatedAt?: DateTimeFilter<"fd_tickets"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    fd_activities?: Fd_activitiesListRelationFilter
    fd_escalations?: Fd_escalationsListRelationFilter
  }

  export type fd_ticketsOrderByWithRelationInput = {
    id?: SortOrder
    json?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    cc_emails?: SortOrderInput | SortOrder
    fwd_emails?: SortOrderInput | SortOrder
    reply_cc_emails?: SortOrderInput | SortOrder
    ticket_cc_emails?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    email_config_id?: SortOrderInput | SortOrder
    group_id?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    requester_id?: SortOrderInput | SortOrder
    requester_name?: SortOrderInput | SortOrder
    requester_email?: SortOrderInput | SortOrder
    responder_id?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    to_emails?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    fr_escalated?: SortOrderInput | SortOrder
    spam?: SortOrderInput | SortOrder
    urgent?: SortOrderInput | SortOrder
    is_escalated?: SortOrderInput | SortOrder
    fd_created_at?: SortOrderInput | SortOrder
    fd_updated_at?: SortOrderInput | SortOrder
    due_by?: SortOrderInput | SortOrder
    fr_due_by?: SortOrderInput | SortOrder
    nr_due_by?: SortOrderInput | SortOrder
    nr_escalated?: SortOrderInput | SortOrder
    json_custom_field?: SortOrderInput | SortOrder
    cf_best_number_to_reach?: SortOrderInput | SortOrder
    cf_best_number_note?: SortOrderInput | SortOrder
    cf_quotewekrs?: SortOrderInput | SortOrder
    cf_qbsalesorder?: SortOrderInput | SortOrder
    cf_qbinv?: SortOrderInput | SortOrder
    cf_totalhours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    fd_activities?: fd_activitiesOrderByRelationAggregateInput
    fd_escalations?: fd_escalationsOrderByRelationAggregateInput
  }

  export type fd_ticketsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticket_id?: bigint | number
    AND?: fd_ticketsWhereInput | fd_ticketsWhereInput[]
    OR?: fd_ticketsWhereInput[]
    NOT?: fd_ticketsWhereInput | fd_ticketsWhereInput[]
    json?: JsonNullableFilter<"fd_tickets">
    cc_emails?: JsonNullableFilter<"fd_tickets">
    fwd_emails?: JsonNullableFilter<"fd_tickets">
    reply_cc_emails?: JsonNullableFilter<"fd_tickets">
    ticket_cc_emails?: JsonNullableFilter<"fd_tickets">
    tags?: JsonNullableFilter<"fd_tickets">
    email_config_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    group_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    priority?: IntNullableFilter<"fd_tickets"> | number | null
    requester_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    requester_name?: StringNullableFilter<"fd_tickets"> | string | null
    requester_email?: StringNullableFilter<"fd_tickets"> | string | null
    responder_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    source?: IntNullableFilter<"fd_tickets"> | number | null
    status?: IntNullableFilter<"fd_tickets"> | number | null
    subject?: StringNullableFilter<"fd_tickets"> | string | null
    company_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    type?: StringNullableFilter<"fd_tickets"> | string | null
    to_emails?: StringNullableFilter<"fd_tickets"> | string | null
    product_id?: BigIntNullableFilter<"fd_tickets"> | bigint | number | null
    fr_escalated?: BoolNullableFilter<"fd_tickets"> | boolean | null
    spam?: BoolNullableFilter<"fd_tickets"> | boolean | null
    urgent?: BoolNullableFilter<"fd_tickets"> | boolean | null
    is_escalated?: BoolNullableFilter<"fd_tickets"> | boolean | null
    fd_created_at?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    fd_updated_at?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    due_by?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    fr_due_by?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    nr_due_by?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    nr_escalated?: BoolNullableFilter<"fd_tickets"> | boolean | null
    json_custom_field?: JsonNullableFilter<"fd_tickets">
    cf_best_number_to_reach?: StringNullableFilter<"fd_tickets"> | string | null
    cf_best_number_note?: StringNullableFilter<"fd_tickets"> | string | null
    cf_quotewekrs?: StringNullableFilter<"fd_tickets"> | string | null
    cf_qbsalesorder?: StringNullableFilter<"fd_tickets"> | string | null
    cf_qbinv?: StringNullableFilter<"fd_tickets"> | string | null
    cf_totalhours?: StringNullableFilter<"fd_tickets"> | string | null
    createdAt?: DateTimeFilter<"fd_tickets"> | Date | string
    updatedAt?: DateTimeFilter<"fd_tickets"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_tickets"> | Date | string | null
    fd_activities?: Fd_activitiesListRelationFilter
    fd_escalations?: Fd_escalationsListRelationFilter
  }, "id" | "ticket_id">

  export type fd_ticketsOrderByWithAggregationInput = {
    id?: SortOrder
    json?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    cc_emails?: SortOrderInput | SortOrder
    fwd_emails?: SortOrderInput | SortOrder
    reply_cc_emails?: SortOrderInput | SortOrder
    ticket_cc_emails?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    email_config_id?: SortOrderInput | SortOrder
    group_id?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    requester_id?: SortOrderInput | SortOrder
    requester_name?: SortOrderInput | SortOrder
    requester_email?: SortOrderInput | SortOrder
    responder_id?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    to_emails?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    fr_escalated?: SortOrderInput | SortOrder
    spam?: SortOrderInput | SortOrder
    urgent?: SortOrderInput | SortOrder
    is_escalated?: SortOrderInput | SortOrder
    fd_created_at?: SortOrderInput | SortOrder
    fd_updated_at?: SortOrderInput | SortOrder
    due_by?: SortOrderInput | SortOrder
    fr_due_by?: SortOrderInput | SortOrder
    nr_due_by?: SortOrderInput | SortOrder
    nr_escalated?: SortOrderInput | SortOrder
    json_custom_field?: SortOrderInput | SortOrder
    cf_best_number_to_reach?: SortOrderInput | SortOrder
    cf_best_number_note?: SortOrderInput | SortOrder
    cf_quotewekrs?: SortOrderInput | SortOrder
    cf_qbsalesorder?: SortOrderInput | SortOrder
    cf_qbinv?: SortOrderInput | SortOrder
    cf_totalhours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: fd_ticketsCountOrderByAggregateInput
    _avg?: fd_ticketsAvgOrderByAggregateInput
    _max?: fd_ticketsMaxOrderByAggregateInput
    _min?: fd_ticketsMinOrderByAggregateInput
    _sum?: fd_ticketsSumOrderByAggregateInput
  }

  export type fd_ticketsScalarWhereWithAggregatesInput = {
    AND?: fd_ticketsScalarWhereWithAggregatesInput | fd_ticketsScalarWhereWithAggregatesInput[]
    OR?: fd_ticketsScalarWhereWithAggregatesInput[]
    NOT?: fd_ticketsScalarWhereWithAggregatesInput | fd_ticketsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fd_tickets"> | string
    json?: JsonNullableWithAggregatesFilter<"fd_tickets">
    ticket_id?: BigIntNullableWithAggregatesFilter<"fd_tickets"> | bigint | number | null
    cc_emails?: JsonNullableWithAggregatesFilter<"fd_tickets">
    fwd_emails?: JsonNullableWithAggregatesFilter<"fd_tickets">
    reply_cc_emails?: JsonNullableWithAggregatesFilter<"fd_tickets">
    ticket_cc_emails?: JsonNullableWithAggregatesFilter<"fd_tickets">
    tags?: JsonNullableWithAggregatesFilter<"fd_tickets">
    email_config_id?: BigIntNullableWithAggregatesFilter<"fd_tickets"> | bigint | number | null
    group_id?: BigIntNullableWithAggregatesFilter<"fd_tickets"> | bigint | number | null
    priority?: IntNullableWithAggregatesFilter<"fd_tickets"> | number | null
    requester_id?: BigIntNullableWithAggregatesFilter<"fd_tickets"> | bigint | number | null
    requester_name?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    requester_email?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    responder_id?: BigIntNullableWithAggregatesFilter<"fd_tickets"> | bigint | number | null
    source?: IntNullableWithAggregatesFilter<"fd_tickets"> | number | null
    status?: IntNullableWithAggregatesFilter<"fd_tickets"> | number | null
    subject?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    company_id?: BigIntNullableWithAggregatesFilter<"fd_tickets"> | bigint | number | null
    type?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    to_emails?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    product_id?: BigIntNullableWithAggregatesFilter<"fd_tickets"> | bigint | number | null
    fr_escalated?: BoolNullableWithAggregatesFilter<"fd_tickets"> | boolean | null
    spam?: BoolNullableWithAggregatesFilter<"fd_tickets"> | boolean | null
    urgent?: BoolNullableWithAggregatesFilter<"fd_tickets"> | boolean | null
    is_escalated?: BoolNullableWithAggregatesFilter<"fd_tickets"> | boolean | null
    fd_created_at?: DateTimeNullableWithAggregatesFilter<"fd_tickets"> | Date | string | null
    fd_updated_at?: DateTimeNullableWithAggregatesFilter<"fd_tickets"> | Date | string | null
    due_by?: DateTimeNullableWithAggregatesFilter<"fd_tickets"> | Date | string | null
    fr_due_by?: DateTimeNullableWithAggregatesFilter<"fd_tickets"> | Date | string | null
    nr_due_by?: DateTimeNullableWithAggregatesFilter<"fd_tickets"> | Date | string | null
    nr_escalated?: BoolNullableWithAggregatesFilter<"fd_tickets"> | boolean | null
    json_custom_field?: JsonNullableWithAggregatesFilter<"fd_tickets">
    cf_best_number_to_reach?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    cf_best_number_note?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    cf_quotewekrs?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    cf_qbsalesorder?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    cf_qbinv?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    cf_totalhours?: StringNullableWithAggregatesFilter<"fd_tickets"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"fd_tickets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fd_tickets"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"fd_tickets"> | Date | string | null
  }

  export type role_poolWhereInput = {
    AND?: role_poolWhereInput | role_poolWhereInput[]
    OR?: role_poolWhereInput[]
    NOT?: role_poolWhereInput | role_poolWhereInput[]
    id?: StringFilter<"role_pool"> | string
    createdAt?: DateTimeFilter<"role_pool"> | Date | string
    updatedAt?: DateTimeFilter<"role_pool"> | Date | string
    deletedAt?: DateTimeNullableFilter<"role_pool"> | Date | string | null
    userId?: StringNullableFilter<"role_pool"> | string | null
    roleId?: StringNullableFilter<"role_pool"> | string | null
    roles?: XOR<RolesNullableRelationFilter, rolesWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type role_poolOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    roles?: rolesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type role_poolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: role_poolWhereInput | role_poolWhereInput[]
    OR?: role_poolWhereInput[]
    NOT?: role_poolWhereInput | role_poolWhereInput[]
    createdAt?: DateTimeFilter<"role_pool"> | Date | string
    updatedAt?: DateTimeFilter<"role_pool"> | Date | string
    deletedAt?: DateTimeNullableFilter<"role_pool"> | Date | string | null
    userId?: StringNullableFilter<"role_pool"> | string | null
    roleId?: StringNullableFilter<"role_pool"> | string | null
    roles?: XOR<RolesNullableRelationFilter, rolesWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id">

  export type role_poolOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    _count?: role_poolCountOrderByAggregateInput
    _max?: role_poolMaxOrderByAggregateInput
    _min?: role_poolMinOrderByAggregateInput
  }

  export type role_poolScalarWhereWithAggregatesInput = {
    AND?: role_poolScalarWhereWithAggregatesInput | role_poolScalarWhereWithAggregatesInput[]
    OR?: role_poolScalarWhereWithAggregatesInput[]
    NOT?: role_poolScalarWhereWithAggregatesInput | role_poolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"role_pool"> | string
    createdAt?: DateTimeWithAggregatesFilter<"role_pool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"role_pool"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"role_pool"> | Date | string | null
    userId?: StringNullableWithAggregatesFilter<"role_pool"> | string | null
    roleId?: StringNullableWithAggregatesFilter<"role_pool"> | string | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: StringFilter<"roles"> | string
    role_name?: StringFilter<"roles"> | string
    code?: StringNullableFilter<"roles"> | string | null
    createdAt?: DateTimeFilter<"roles"> | Date | string
    updatedAt?: DateTimeFilter<"roles"> | Date | string
    deleted?: DateTimeNullableFilter<"roles"> | Date | string | null
    role_pool?: Role_poolListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    role_pool?: role_poolOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    role_name?: StringFilter<"roles"> | string
    code?: StringNullableFilter<"roles"> | string | null
    createdAt?: DateTimeFilter<"roles"> | Date | string
    updatedAt?: DateTimeFilter<"roles"> | Date | string
    deleted?: DateTimeNullableFilter<"roles"> | Date | string | null
    role_pool?: Role_poolListRelationFilter
  }, "id">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"roles"> | string
    role_name?: StringWithAggregatesFilter<"roles"> | string
    code?: StringNullableWithAggregatesFilter<"roles"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    confirmation_code?: StringNullableFilter<"users"> | string | null
    status?: Enumenum_users_statusNullableFilter<"users"> | $Enums.enum_users_status | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    deleted?: DateTimeNullableFilter<"users"> | Date | string | null
    role_pool?: Role_poolListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    confirmation_code?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    role_pool?: role_poolOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    confirmation_code?: StringNullableFilter<"users"> | string | null
    status?: Enumenum_users_statusNullableFilter<"users"> | $Enums.enum_users_status | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    deleted?: DateTimeNullableFilter<"users"> | Date | string | null
    role_pool?: Role_poolListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    confirmation_code?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    confirmation_code?: StringNullableWithAggregatesFilter<"users"> | string | null
    status?: Enumenum_users_statusNullableWithAggregatesFilter<"users"> | $Enums.enum_users_status | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    deleted?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type fd_activitiesCreateInput = {
    id: string
    status?: number | null
    priority?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_tickets?: fd_ticketsCreateNestedOneWithoutFd_activitiesInput
  }

  export type fd_activitiesUncheckedCreateInput = {
    id: string
    status?: number | null
    priority?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    freshdesk_id?: string | null
  }

  export type fd_activitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_tickets?: fd_ticketsUpdateOneWithoutFd_activitiesNestedInput
  }

  export type fd_activitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freshdesk_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fd_activitiesCreateManyInput = {
    id: string
    status?: number | null
    priority?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    freshdesk_id?: string | null
  }

  export type fd_activitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_activitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freshdesk_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fd_agentsCreateInput = {
    id: string
    available?: string | null
    ticket_scope?: number | null
    type?: string | null
    active?: string | null
    email?: string | null
    name?: string | null
    phone?: string | null
    last_active_at?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_agentsUncheckedCreateInput = {
    id: string
    available?: string | null
    ticket_scope?: number | null
    type?: string | null
    active?: string | null
    email?: string | null
    name?: string | null
    phone?: string | null
    last_active_at?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_agentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_scope?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_active_at?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_agentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_scope?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_active_at?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_agentsCreateManyInput = {
    id: string
    available?: string | null
    ticket_scope?: number | null
    type?: string | null
    active?: string | null
    email?: string | null
    name?: string | null
    phone?: string | null
    last_active_at?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_agentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_scope?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_active_at?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_agentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_scope?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    last_active_at?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_escalationsCreateInput = {
    id: string
    escalation_type?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_tickets?: fd_ticketsCreateNestedOneWithoutFd_escalationsInput
  }

  export type fd_escalationsUncheckedCreateInput = {
    id: string
    escalation_type?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    freshdesk_id?: string | null
  }

  export type fd_escalationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    escalation_type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_tickets?: fd_ticketsUpdateOneWithoutFd_escalationsNestedInput
  }

  export type fd_escalationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    escalation_type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freshdesk_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fd_escalationsCreateManyInput = {
    id: string
    escalation_type?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    freshdesk_id?: string | null
  }

  export type fd_escalationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    escalation_type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_escalationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    escalation_type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freshdesk_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fd_groupCreateInput = {
    id: string
    group_id?: string | null
    group_name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_groupUncheckedCreateInput = {
    id: string
    group_id?: string | null
    group_name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_groupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_groupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_groupCreateManyInput = {
    id: string
    group_id?: string | null
    group_name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_groupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_groupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    group_name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_priorityCreateInput = {
    id: string
    priority_id?: string | null
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_priorityUncheckedCreateInput = {
    id: string
    priority_id?: string | null
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_priorityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_priorityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_priorityCreateManyInput = {
    id: string
    priority_id?: string | null
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_priorityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_priorityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    priority_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_statusCreateInput = {
    id: string
    status_id?: string | null
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_statusUncheckedCreateInput = {
    id: string
    status_id?: string | null
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_statusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_statusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_statusCreateManyInput = {
    id: string
    status_id?: string | null
    name?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_statusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_statusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_ticketsCreateInput = {
    id: string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: bigint | number | null
    group_id?: bigint | number | null
    priority?: number | null
    requester_id?: bigint | number | null
    requester_name?: string | null
    requester_email?: string | null
    responder_id?: bigint | number | null
    source?: number | null
    status?: number | null
    subject?: string | null
    company_id?: bigint | number | null
    type?: string | null
    to_emails?: string | null
    product_id?: bigint | number | null
    fr_escalated?: boolean | null
    spam?: boolean | null
    urgent?: boolean | null
    is_escalated?: boolean | null
    fd_created_at?: Date | string | null
    fd_updated_at?: Date | string | null
    due_by?: Date | string | null
    fr_due_by?: Date | string | null
    nr_due_by?: Date | string | null
    nr_escalated?: boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: string | null
    cf_best_number_note?: string | null
    cf_quotewekrs?: string | null
    cf_qbsalesorder?: string | null
    cf_qbinv?: string | null
    cf_totalhours?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_activities?: fd_activitiesCreateNestedManyWithoutFd_ticketsInput
    fd_escalations?: fd_escalationsCreateNestedManyWithoutFd_ticketsInput
  }

  export type fd_ticketsUncheckedCreateInput = {
    id: string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: bigint | number | null
    group_id?: bigint | number | null
    priority?: number | null
    requester_id?: bigint | number | null
    requester_name?: string | null
    requester_email?: string | null
    responder_id?: bigint | number | null
    source?: number | null
    status?: number | null
    subject?: string | null
    company_id?: bigint | number | null
    type?: string | null
    to_emails?: string | null
    product_id?: bigint | number | null
    fr_escalated?: boolean | null
    spam?: boolean | null
    urgent?: boolean | null
    is_escalated?: boolean | null
    fd_created_at?: Date | string | null
    fd_updated_at?: Date | string | null
    due_by?: Date | string | null
    fr_due_by?: Date | string | null
    nr_due_by?: Date | string | null
    nr_escalated?: boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: string | null
    cf_best_number_note?: string | null
    cf_quotewekrs?: string | null
    cf_qbsalesorder?: string | null
    cf_qbinv?: string | null
    cf_totalhours?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_activities?: fd_activitiesUncheckedCreateNestedManyWithoutFd_ticketsInput
    fd_escalations?: fd_escalationsUncheckedCreateNestedManyWithoutFd_ticketsInput
  }

  export type fd_ticketsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_activities?: fd_activitiesUpdateManyWithoutFd_ticketsNestedInput
    fd_escalations?: fd_escalationsUpdateManyWithoutFd_ticketsNestedInput
  }

  export type fd_ticketsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_activities?: fd_activitiesUncheckedUpdateManyWithoutFd_ticketsNestedInput
    fd_escalations?: fd_escalationsUncheckedUpdateManyWithoutFd_ticketsNestedInput
  }

  export type fd_ticketsCreateManyInput = {
    id: string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: bigint | number | null
    group_id?: bigint | number | null
    priority?: number | null
    requester_id?: bigint | number | null
    requester_name?: string | null
    requester_email?: string | null
    responder_id?: bigint | number | null
    source?: number | null
    status?: number | null
    subject?: string | null
    company_id?: bigint | number | null
    type?: string | null
    to_emails?: string | null
    product_id?: bigint | number | null
    fr_escalated?: boolean | null
    spam?: boolean | null
    urgent?: boolean | null
    is_escalated?: boolean | null
    fd_created_at?: Date | string | null
    fd_updated_at?: Date | string | null
    due_by?: Date | string | null
    fr_due_by?: Date | string | null
    nr_due_by?: Date | string | null
    nr_escalated?: boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: string | null
    cf_best_number_note?: string | null
    cf_quotewekrs?: string | null
    cf_qbsalesorder?: string | null
    cf_qbinv?: string | null
    cf_totalhours?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_ticketsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_ticketsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_poolCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    roles?: rolesCreateNestedOneWithoutRole_poolInput
    users?: usersCreateNestedOneWithoutRole_poolInput
  }

  export type role_poolUncheckedCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
    roleId?: string | null
  }

  export type role_poolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: rolesUpdateOneWithoutRole_poolNestedInput
    users?: usersUpdateOneWithoutRole_poolNestedInput
  }

  export type role_poolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type role_poolCreateManyInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
    roleId?: string | null
  }

  export type role_poolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_poolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesCreateInput = {
    id: string
    role_name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    role_pool?: role_poolCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id: string
    role_name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    role_pool?: role_poolUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_pool?: role_poolUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_pool?: role_poolUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id: string
    role_name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type rolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    role_pool?: role_poolCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    role_pool?: role_poolUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumenum_users_statusFieldUpdateOperationsInput | $Enums.enum_users_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_pool?: role_poolUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumenum_users_statusFieldUpdateOperationsInput | $Enums.enum_users_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_pool?: role_poolUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumenum_users_statusFieldUpdateOperationsInput | $Enums.enum_users_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumenum_users_statusFieldUpdateOperationsInput | $Enums.enum_users_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Fd_ticketsNullableRelationFilter = {
    is?: fd_ticketsWhereInput | null
    isNot?: fd_ticketsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type fd_activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    freshdesk_id?: SortOrder
  }

  export type fd_activitiesAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type fd_activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    freshdesk_id?: SortOrder
  }

  export type fd_activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    freshdesk_id?: SortOrder
  }

  export type fd_activitiesSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type fd_agentsCountOrderByAggregateInput = {
    id?: SortOrder
    available?: SortOrder
    ticket_scope?: SortOrder
    type?: SortOrder
    active?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_agentsAvgOrderByAggregateInput = {
    ticket_scope?: SortOrder
  }

  export type fd_agentsMaxOrderByAggregateInput = {
    id?: SortOrder
    available?: SortOrder
    ticket_scope?: SortOrder
    type?: SortOrder
    active?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_agentsMinOrderByAggregateInput = {
    id?: SortOrder
    available?: SortOrder
    ticket_scope?: SortOrder
    type?: SortOrder
    active?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_agentsSumOrderByAggregateInput = {
    ticket_scope?: SortOrder
  }

  export type fd_escalationsCountOrderByAggregateInput = {
    id?: SortOrder
    escalation_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    freshdesk_id?: SortOrder
  }

  export type fd_escalationsMaxOrderByAggregateInput = {
    id?: SortOrder
    escalation_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    freshdesk_id?: SortOrder
  }

  export type fd_escalationsMinOrderByAggregateInput = {
    id?: SortOrder
    escalation_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    freshdesk_id?: SortOrder
  }

  export type fd_groupCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    group_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    group_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_groupMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    group_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_priorityCountOrderByAggregateInput = {
    id?: SortOrder
    priority_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_priorityMaxOrderByAggregateInput = {
    id?: SortOrder
    priority_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_priorityMinOrderByAggregateInput = {
    id?: SortOrder
    priority_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_statusCountOrderByAggregateInput = {
    id?: SortOrder
    status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_statusMaxOrderByAggregateInput = {
    id?: SortOrder
    status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_statusMinOrderByAggregateInput = {
    id?: SortOrder
    status_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Fd_activitiesListRelationFilter = {
    every?: fd_activitiesWhereInput
    some?: fd_activitiesWhereInput
    none?: fd_activitiesWhereInput
  }

  export type Fd_escalationsListRelationFilter = {
    every?: fd_escalationsWhereInput
    some?: fd_escalationsWhereInput
    none?: fd_escalationsWhereInput
  }

  export type fd_activitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fd_escalationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fd_ticketsCountOrderByAggregateInput = {
    id?: SortOrder
    json?: SortOrder
    ticket_id?: SortOrder
    cc_emails?: SortOrder
    fwd_emails?: SortOrder
    reply_cc_emails?: SortOrder
    ticket_cc_emails?: SortOrder
    tags?: SortOrder
    email_config_id?: SortOrder
    group_id?: SortOrder
    priority?: SortOrder
    requester_id?: SortOrder
    requester_name?: SortOrder
    requester_email?: SortOrder
    responder_id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    company_id?: SortOrder
    type?: SortOrder
    to_emails?: SortOrder
    product_id?: SortOrder
    fr_escalated?: SortOrder
    spam?: SortOrder
    urgent?: SortOrder
    is_escalated?: SortOrder
    fd_created_at?: SortOrder
    fd_updated_at?: SortOrder
    due_by?: SortOrder
    fr_due_by?: SortOrder
    nr_due_by?: SortOrder
    nr_escalated?: SortOrder
    json_custom_field?: SortOrder
    cf_best_number_to_reach?: SortOrder
    cf_best_number_note?: SortOrder
    cf_quotewekrs?: SortOrder
    cf_qbsalesorder?: SortOrder
    cf_qbinv?: SortOrder
    cf_totalhours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_ticketsAvgOrderByAggregateInput = {
    ticket_id?: SortOrder
    email_config_id?: SortOrder
    group_id?: SortOrder
    priority?: SortOrder
    requester_id?: SortOrder
    responder_id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    company_id?: SortOrder
    product_id?: SortOrder
  }

  export type fd_ticketsMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    email_config_id?: SortOrder
    group_id?: SortOrder
    priority?: SortOrder
    requester_id?: SortOrder
    requester_name?: SortOrder
    requester_email?: SortOrder
    responder_id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    company_id?: SortOrder
    type?: SortOrder
    to_emails?: SortOrder
    product_id?: SortOrder
    fr_escalated?: SortOrder
    spam?: SortOrder
    urgent?: SortOrder
    is_escalated?: SortOrder
    fd_created_at?: SortOrder
    fd_updated_at?: SortOrder
    due_by?: SortOrder
    fr_due_by?: SortOrder
    nr_due_by?: SortOrder
    nr_escalated?: SortOrder
    cf_best_number_to_reach?: SortOrder
    cf_best_number_note?: SortOrder
    cf_quotewekrs?: SortOrder
    cf_qbsalesorder?: SortOrder
    cf_qbinv?: SortOrder
    cf_totalhours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_ticketsMinOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    email_config_id?: SortOrder
    group_id?: SortOrder
    priority?: SortOrder
    requester_id?: SortOrder
    requester_name?: SortOrder
    requester_email?: SortOrder
    responder_id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    company_id?: SortOrder
    type?: SortOrder
    to_emails?: SortOrder
    product_id?: SortOrder
    fr_escalated?: SortOrder
    spam?: SortOrder
    urgent?: SortOrder
    is_escalated?: SortOrder
    fd_created_at?: SortOrder
    fd_updated_at?: SortOrder
    due_by?: SortOrder
    fr_due_by?: SortOrder
    nr_due_by?: SortOrder
    nr_escalated?: SortOrder
    cf_best_number_to_reach?: SortOrder
    cf_best_number_note?: SortOrder
    cf_quotewekrs?: SortOrder
    cf_qbsalesorder?: SortOrder
    cf_qbinv?: SortOrder
    cf_totalhours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type fd_ticketsSumOrderByAggregateInput = {
    ticket_id?: SortOrder
    email_config_id?: SortOrder
    group_id?: SortOrder
    priority?: SortOrder
    requester_id?: SortOrder
    responder_id?: SortOrder
    source?: SortOrder
    status?: SortOrder
    company_id?: SortOrder
    product_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RolesNullableRelationFilter = {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type role_poolCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type role_poolMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type role_poolMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type Role_poolListRelationFilter = {
    every?: role_poolWhereInput
    some?: role_poolWhereInput
    none?: role_poolWhereInput
  }

  export type role_poolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type Enumenum_users_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_users_status | Enumenum_users_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumenum_users_statusNullableFilter<$PrismaModel> | $Enums.enum_users_status | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    confirmation_code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    confirmation_code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    confirmation_code?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type Enumenum_users_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_users_status | Enumenum_users_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumenum_users_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.enum_users_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumenum_users_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumenum_users_statusNullableFilter<$PrismaModel>
  }

  export type fd_ticketsCreateNestedOneWithoutFd_activitiesInput = {
    create?: XOR<fd_ticketsCreateWithoutFd_activitiesInput, fd_ticketsUncheckedCreateWithoutFd_activitiesInput>
    connectOrCreate?: fd_ticketsCreateOrConnectWithoutFd_activitiesInput
    connect?: fd_ticketsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type fd_ticketsUpdateOneWithoutFd_activitiesNestedInput = {
    create?: XOR<fd_ticketsCreateWithoutFd_activitiesInput, fd_ticketsUncheckedCreateWithoutFd_activitiesInput>
    connectOrCreate?: fd_ticketsCreateOrConnectWithoutFd_activitiesInput
    upsert?: fd_ticketsUpsertWithoutFd_activitiesInput
    disconnect?: fd_ticketsWhereInput | boolean
    delete?: fd_ticketsWhereInput | boolean
    connect?: fd_ticketsWhereUniqueInput
    update?: XOR<XOR<fd_ticketsUpdateToOneWithWhereWithoutFd_activitiesInput, fd_ticketsUpdateWithoutFd_activitiesInput>, fd_ticketsUncheckedUpdateWithoutFd_activitiesInput>
  }

  export type fd_ticketsCreateNestedOneWithoutFd_escalationsInput = {
    create?: XOR<fd_ticketsCreateWithoutFd_escalationsInput, fd_ticketsUncheckedCreateWithoutFd_escalationsInput>
    connectOrCreate?: fd_ticketsCreateOrConnectWithoutFd_escalationsInput
    connect?: fd_ticketsWhereUniqueInput
  }

  export type fd_ticketsUpdateOneWithoutFd_escalationsNestedInput = {
    create?: XOR<fd_ticketsCreateWithoutFd_escalationsInput, fd_ticketsUncheckedCreateWithoutFd_escalationsInput>
    connectOrCreate?: fd_ticketsCreateOrConnectWithoutFd_escalationsInput
    upsert?: fd_ticketsUpsertWithoutFd_escalationsInput
    disconnect?: fd_ticketsWhereInput | boolean
    delete?: fd_ticketsWhereInput | boolean
    connect?: fd_ticketsWhereUniqueInput
    update?: XOR<XOR<fd_ticketsUpdateToOneWithWhereWithoutFd_escalationsInput, fd_ticketsUpdateWithoutFd_escalationsInput>, fd_ticketsUncheckedUpdateWithoutFd_escalationsInput>
  }

  export type fd_activitiesCreateNestedManyWithoutFd_ticketsInput = {
    create?: XOR<fd_activitiesCreateWithoutFd_ticketsInput, fd_activitiesUncheckedCreateWithoutFd_ticketsInput> | fd_activitiesCreateWithoutFd_ticketsInput[] | fd_activitiesUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_activitiesCreateOrConnectWithoutFd_ticketsInput | fd_activitiesCreateOrConnectWithoutFd_ticketsInput[]
    createMany?: fd_activitiesCreateManyFd_ticketsInputEnvelope
    connect?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
  }

  export type fd_escalationsCreateNestedManyWithoutFd_ticketsInput = {
    create?: XOR<fd_escalationsCreateWithoutFd_ticketsInput, fd_escalationsUncheckedCreateWithoutFd_ticketsInput> | fd_escalationsCreateWithoutFd_ticketsInput[] | fd_escalationsUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_escalationsCreateOrConnectWithoutFd_ticketsInput | fd_escalationsCreateOrConnectWithoutFd_ticketsInput[]
    createMany?: fd_escalationsCreateManyFd_ticketsInputEnvelope
    connect?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
  }

  export type fd_activitiesUncheckedCreateNestedManyWithoutFd_ticketsInput = {
    create?: XOR<fd_activitiesCreateWithoutFd_ticketsInput, fd_activitiesUncheckedCreateWithoutFd_ticketsInput> | fd_activitiesCreateWithoutFd_ticketsInput[] | fd_activitiesUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_activitiesCreateOrConnectWithoutFd_ticketsInput | fd_activitiesCreateOrConnectWithoutFd_ticketsInput[]
    createMany?: fd_activitiesCreateManyFd_ticketsInputEnvelope
    connect?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
  }

  export type fd_escalationsUncheckedCreateNestedManyWithoutFd_ticketsInput = {
    create?: XOR<fd_escalationsCreateWithoutFd_ticketsInput, fd_escalationsUncheckedCreateWithoutFd_ticketsInput> | fd_escalationsCreateWithoutFd_ticketsInput[] | fd_escalationsUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_escalationsCreateOrConnectWithoutFd_ticketsInput | fd_escalationsCreateOrConnectWithoutFd_ticketsInput[]
    createMany?: fd_escalationsCreateManyFd_ticketsInputEnvelope
    connect?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type fd_activitiesUpdateManyWithoutFd_ticketsNestedInput = {
    create?: XOR<fd_activitiesCreateWithoutFd_ticketsInput, fd_activitiesUncheckedCreateWithoutFd_ticketsInput> | fd_activitiesCreateWithoutFd_ticketsInput[] | fd_activitiesUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_activitiesCreateOrConnectWithoutFd_ticketsInput | fd_activitiesCreateOrConnectWithoutFd_ticketsInput[]
    upsert?: fd_activitiesUpsertWithWhereUniqueWithoutFd_ticketsInput | fd_activitiesUpsertWithWhereUniqueWithoutFd_ticketsInput[]
    createMany?: fd_activitiesCreateManyFd_ticketsInputEnvelope
    set?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    disconnect?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    delete?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    connect?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    update?: fd_activitiesUpdateWithWhereUniqueWithoutFd_ticketsInput | fd_activitiesUpdateWithWhereUniqueWithoutFd_ticketsInput[]
    updateMany?: fd_activitiesUpdateManyWithWhereWithoutFd_ticketsInput | fd_activitiesUpdateManyWithWhereWithoutFd_ticketsInput[]
    deleteMany?: fd_activitiesScalarWhereInput | fd_activitiesScalarWhereInput[]
  }

  export type fd_escalationsUpdateManyWithoutFd_ticketsNestedInput = {
    create?: XOR<fd_escalationsCreateWithoutFd_ticketsInput, fd_escalationsUncheckedCreateWithoutFd_ticketsInput> | fd_escalationsCreateWithoutFd_ticketsInput[] | fd_escalationsUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_escalationsCreateOrConnectWithoutFd_ticketsInput | fd_escalationsCreateOrConnectWithoutFd_ticketsInput[]
    upsert?: fd_escalationsUpsertWithWhereUniqueWithoutFd_ticketsInput | fd_escalationsUpsertWithWhereUniqueWithoutFd_ticketsInput[]
    createMany?: fd_escalationsCreateManyFd_ticketsInputEnvelope
    set?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    disconnect?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    delete?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    connect?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    update?: fd_escalationsUpdateWithWhereUniqueWithoutFd_ticketsInput | fd_escalationsUpdateWithWhereUniqueWithoutFd_ticketsInput[]
    updateMany?: fd_escalationsUpdateManyWithWhereWithoutFd_ticketsInput | fd_escalationsUpdateManyWithWhereWithoutFd_ticketsInput[]
    deleteMany?: fd_escalationsScalarWhereInput | fd_escalationsScalarWhereInput[]
  }

  export type fd_activitiesUncheckedUpdateManyWithoutFd_ticketsNestedInput = {
    create?: XOR<fd_activitiesCreateWithoutFd_ticketsInput, fd_activitiesUncheckedCreateWithoutFd_ticketsInput> | fd_activitiesCreateWithoutFd_ticketsInput[] | fd_activitiesUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_activitiesCreateOrConnectWithoutFd_ticketsInput | fd_activitiesCreateOrConnectWithoutFd_ticketsInput[]
    upsert?: fd_activitiesUpsertWithWhereUniqueWithoutFd_ticketsInput | fd_activitiesUpsertWithWhereUniqueWithoutFd_ticketsInput[]
    createMany?: fd_activitiesCreateManyFd_ticketsInputEnvelope
    set?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    disconnect?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    delete?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    connect?: fd_activitiesWhereUniqueInput | fd_activitiesWhereUniqueInput[]
    update?: fd_activitiesUpdateWithWhereUniqueWithoutFd_ticketsInput | fd_activitiesUpdateWithWhereUniqueWithoutFd_ticketsInput[]
    updateMany?: fd_activitiesUpdateManyWithWhereWithoutFd_ticketsInput | fd_activitiesUpdateManyWithWhereWithoutFd_ticketsInput[]
    deleteMany?: fd_activitiesScalarWhereInput | fd_activitiesScalarWhereInput[]
  }

  export type fd_escalationsUncheckedUpdateManyWithoutFd_ticketsNestedInput = {
    create?: XOR<fd_escalationsCreateWithoutFd_ticketsInput, fd_escalationsUncheckedCreateWithoutFd_ticketsInput> | fd_escalationsCreateWithoutFd_ticketsInput[] | fd_escalationsUncheckedCreateWithoutFd_ticketsInput[]
    connectOrCreate?: fd_escalationsCreateOrConnectWithoutFd_ticketsInput | fd_escalationsCreateOrConnectWithoutFd_ticketsInput[]
    upsert?: fd_escalationsUpsertWithWhereUniqueWithoutFd_ticketsInput | fd_escalationsUpsertWithWhereUniqueWithoutFd_ticketsInput[]
    createMany?: fd_escalationsCreateManyFd_ticketsInputEnvelope
    set?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    disconnect?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    delete?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    connect?: fd_escalationsWhereUniqueInput | fd_escalationsWhereUniqueInput[]
    update?: fd_escalationsUpdateWithWhereUniqueWithoutFd_ticketsInput | fd_escalationsUpdateWithWhereUniqueWithoutFd_ticketsInput[]
    updateMany?: fd_escalationsUpdateManyWithWhereWithoutFd_ticketsInput | fd_escalationsUpdateManyWithWhereWithoutFd_ticketsInput[]
    deleteMany?: fd_escalationsScalarWhereInput | fd_escalationsScalarWhereInput[]
  }

  export type rolesCreateNestedOneWithoutRole_poolInput = {
    create?: XOR<rolesCreateWithoutRole_poolInput, rolesUncheckedCreateWithoutRole_poolInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_poolInput
    connect?: rolesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRole_poolInput = {
    create?: XOR<usersCreateWithoutRole_poolInput, usersUncheckedCreateWithoutRole_poolInput>
    connectOrCreate?: usersCreateOrConnectWithoutRole_poolInput
    connect?: usersWhereUniqueInput
  }

  export type rolesUpdateOneWithoutRole_poolNestedInput = {
    create?: XOR<rolesCreateWithoutRole_poolInput, rolesUncheckedCreateWithoutRole_poolInput>
    connectOrCreate?: rolesCreateOrConnectWithoutRole_poolInput
    upsert?: rolesUpsertWithoutRole_poolInput
    disconnect?: rolesWhereInput | boolean
    delete?: rolesWhereInput | boolean
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutRole_poolInput, rolesUpdateWithoutRole_poolInput>, rolesUncheckedUpdateWithoutRole_poolInput>
  }

  export type usersUpdateOneWithoutRole_poolNestedInput = {
    create?: XOR<usersCreateWithoutRole_poolInput, usersUncheckedCreateWithoutRole_poolInput>
    connectOrCreate?: usersCreateOrConnectWithoutRole_poolInput
    upsert?: usersUpsertWithoutRole_poolInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRole_poolInput, usersUpdateWithoutRole_poolInput>, usersUncheckedUpdateWithoutRole_poolInput>
  }

  export type role_poolCreateNestedManyWithoutRolesInput = {
    create?: XOR<role_poolCreateWithoutRolesInput, role_poolUncheckedCreateWithoutRolesInput> | role_poolCreateWithoutRolesInput[] | role_poolUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutRolesInput | role_poolCreateOrConnectWithoutRolesInput[]
    createMany?: role_poolCreateManyRolesInputEnvelope
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
  }

  export type role_poolUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<role_poolCreateWithoutRolesInput, role_poolUncheckedCreateWithoutRolesInput> | role_poolCreateWithoutRolesInput[] | role_poolUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutRolesInput | role_poolCreateOrConnectWithoutRolesInput[]
    createMany?: role_poolCreateManyRolesInputEnvelope
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
  }

  export type role_poolUpdateManyWithoutRolesNestedInput = {
    create?: XOR<role_poolCreateWithoutRolesInput, role_poolUncheckedCreateWithoutRolesInput> | role_poolCreateWithoutRolesInput[] | role_poolUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutRolesInput | role_poolCreateOrConnectWithoutRolesInput[]
    upsert?: role_poolUpsertWithWhereUniqueWithoutRolesInput | role_poolUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: role_poolCreateManyRolesInputEnvelope
    set?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    disconnect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    delete?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    update?: role_poolUpdateWithWhereUniqueWithoutRolesInput | role_poolUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: role_poolUpdateManyWithWhereWithoutRolesInput | role_poolUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: role_poolScalarWhereInput | role_poolScalarWhereInput[]
  }

  export type role_poolUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<role_poolCreateWithoutRolesInput, role_poolUncheckedCreateWithoutRolesInput> | role_poolCreateWithoutRolesInput[] | role_poolUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutRolesInput | role_poolCreateOrConnectWithoutRolesInput[]
    upsert?: role_poolUpsertWithWhereUniqueWithoutRolesInput | role_poolUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: role_poolCreateManyRolesInputEnvelope
    set?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    disconnect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    delete?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    update?: role_poolUpdateWithWhereUniqueWithoutRolesInput | role_poolUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: role_poolUpdateManyWithWhereWithoutRolesInput | role_poolUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: role_poolScalarWhereInput | role_poolScalarWhereInput[]
  }

  export type role_poolCreateNestedManyWithoutUsersInput = {
    create?: XOR<role_poolCreateWithoutUsersInput, role_poolUncheckedCreateWithoutUsersInput> | role_poolCreateWithoutUsersInput[] | role_poolUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutUsersInput | role_poolCreateOrConnectWithoutUsersInput[]
    createMany?: role_poolCreateManyUsersInputEnvelope
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
  }

  export type role_poolUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<role_poolCreateWithoutUsersInput, role_poolUncheckedCreateWithoutUsersInput> | role_poolCreateWithoutUsersInput[] | role_poolUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutUsersInput | role_poolCreateOrConnectWithoutUsersInput[]
    createMany?: role_poolCreateManyUsersInputEnvelope
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
  }

  export type NullableEnumenum_users_statusFieldUpdateOperationsInput = {
    set?: $Enums.enum_users_status | null
  }

  export type role_poolUpdateManyWithoutUsersNestedInput = {
    create?: XOR<role_poolCreateWithoutUsersInput, role_poolUncheckedCreateWithoutUsersInput> | role_poolCreateWithoutUsersInput[] | role_poolUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutUsersInput | role_poolCreateOrConnectWithoutUsersInput[]
    upsert?: role_poolUpsertWithWhereUniqueWithoutUsersInput | role_poolUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: role_poolCreateManyUsersInputEnvelope
    set?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    disconnect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    delete?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    update?: role_poolUpdateWithWhereUniqueWithoutUsersInput | role_poolUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: role_poolUpdateManyWithWhereWithoutUsersInput | role_poolUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: role_poolScalarWhereInput | role_poolScalarWhereInput[]
  }

  export type role_poolUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<role_poolCreateWithoutUsersInput, role_poolUncheckedCreateWithoutUsersInput> | role_poolCreateWithoutUsersInput[] | role_poolUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: role_poolCreateOrConnectWithoutUsersInput | role_poolCreateOrConnectWithoutUsersInput[]
    upsert?: role_poolUpsertWithWhereUniqueWithoutUsersInput | role_poolUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: role_poolCreateManyUsersInputEnvelope
    set?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    disconnect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    delete?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    connect?: role_poolWhereUniqueInput | role_poolWhereUniqueInput[]
    update?: role_poolUpdateWithWhereUniqueWithoutUsersInput | role_poolUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: role_poolUpdateManyWithWhereWithoutUsersInput | role_poolUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: role_poolScalarWhereInput | role_poolScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumenum_users_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_users_status | Enumenum_users_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumenum_users_statusNullableFilter<$PrismaModel> | $Enums.enum_users_status | null
  }

  export type NestedEnumenum_users_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_users_status | Enumenum_users_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.enum_users_status[] | ListEnumenum_users_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumenum_users_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.enum_users_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumenum_users_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumenum_users_statusNullableFilter<$PrismaModel>
  }

  export type fd_ticketsCreateWithoutFd_activitiesInput = {
    id: string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: bigint | number | null
    group_id?: bigint | number | null
    priority?: number | null
    requester_id?: bigint | number | null
    requester_name?: string | null
    requester_email?: string | null
    responder_id?: bigint | number | null
    source?: number | null
    status?: number | null
    subject?: string | null
    company_id?: bigint | number | null
    type?: string | null
    to_emails?: string | null
    product_id?: bigint | number | null
    fr_escalated?: boolean | null
    spam?: boolean | null
    urgent?: boolean | null
    is_escalated?: boolean | null
    fd_created_at?: Date | string | null
    fd_updated_at?: Date | string | null
    due_by?: Date | string | null
    fr_due_by?: Date | string | null
    nr_due_by?: Date | string | null
    nr_escalated?: boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: string | null
    cf_best_number_note?: string | null
    cf_quotewekrs?: string | null
    cf_qbsalesorder?: string | null
    cf_qbinv?: string | null
    cf_totalhours?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_escalations?: fd_escalationsCreateNestedManyWithoutFd_ticketsInput
  }

  export type fd_ticketsUncheckedCreateWithoutFd_activitiesInput = {
    id: string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: bigint | number | null
    group_id?: bigint | number | null
    priority?: number | null
    requester_id?: bigint | number | null
    requester_name?: string | null
    requester_email?: string | null
    responder_id?: bigint | number | null
    source?: number | null
    status?: number | null
    subject?: string | null
    company_id?: bigint | number | null
    type?: string | null
    to_emails?: string | null
    product_id?: bigint | number | null
    fr_escalated?: boolean | null
    spam?: boolean | null
    urgent?: boolean | null
    is_escalated?: boolean | null
    fd_created_at?: Date | string | null
    fd_updated_at?: Date | string | null
    due_by?: Date | string | null
    fr_due_by?: Date | string | null
    nr_due_by?: Date | string | null
    nr_escalated?: boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: string | null
    cf_best_number_note?: string | null
    cf_quotewekrs?: string | null
    cf_qbsalesorder?: string | null
    cf_qbinv?: string | null
    cf_totalhours?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_escalations?: fd_escalationsUncheckedCreateNestedManyWithoutFd_ticketsInput
  }

  export type fd_ticketsCreateOrConnectWithoutFd_activitiesInput = {
    where: fd_ticketsWhereUniqueInput
    create: XOR<fd_ticketsCreateWithoutFd_activitiesInput, fd_ticketsUncheckedCreateWithoutFd_activitiesInput>
  }

  export type fd_ticketsUpsertWithoutFd_activitiesInput = {
    update: XOR<fd_ticketsUpdateWithoutFd_activitiesInput, fd_ticketsUncheckedUpdateWithoutFd_activitiesInput>
    create: XOR<fd_ticketsCreateWithoutFd_activitiesInput, fd_ticketsUncheckedCreateWithoutFd_activitiesInput>
    where?: fd_ticketsWhereInput
  }

  export type fd_ticketsUpdateToOneWithWhereWithoutFd_activitiesInput = {
    where?: fd_ticketsWhereInput
    data: XOR<fd_ticketsUpdateWithoutFd_activitiesInput, fd_ticketsUncheckedUpdateWithoutFd_activitiesInput>
  }

  export type fd_ticketsUpdateWithoutFd_activitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_escalations?: fd_escalationsUpdateManyWithoutFd_ticketsNestedInput
  }

  export type fd_ticketsUncheckedUpdateWithoutFd_activitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_escalations?: fd_escalationsUncheckedUpdateManyWithoutFd_ticketsNestedInput
  }

  export type fd_ticketsCreateWithoutFd_escalationsInput = {
    id: string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: bigint | number | null
    group_id?: bigint | number | null
    priority?: number | null
    requester_id?: bigint | number | null
    requester_name?: string | null
    requester_email?: string | null
    responder_id?: bigint | number | null
    source?: number | null
    status?: number | null
    subject?: string | null
    company_id?: bigint | number | null
    type?: string | null
    to_emails?: string | null
    product_id?: bigint | number | null
    fr_escalated?: boolean | null
    spam?: boolean | null
    urgent?: boolean | null
    is_escalated?: boolean | null
    fd_created_at?: Date | string | null
    fd_updated_at?: Date | string | null
    due_by?: Date | string | null
    fr_due_by?: Date | string | null
    nr_due_by?: Date | string | null
    nr_escalated?: boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: string | null
    cf_best_number_note?: string | null
    cf_quotewekrs?: string | null
    cf_qbsalesorder?: string | null
    cf_qbinv?: string | null
    cf_totalhours?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_activities?: fd_activitiesCreateNestedManyWithoutFd_ticketsInput
  }

  export type fd_ticketsUncheckedCreateWithoutFd_escalationsInput = {
    id: string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: bigint | number | null
    group_id?: bigint | number | null
    priority?: number | null
    requester_id?: bigint | number | null
    requester_name?: string | null
    requester_email?: string | null
    responder_id?: bigint | number | null
    source?: number | null
    status?: number | null
    subject?: string | null
    company_id?: bigint | number | null
    type?: string | null
    to_emails?: string | null
    product_id?: bigint | number | null
    fr_escalated?: boolean | null
    spam?: boolean | null
    urgent?: boolean | null
    is_escalated?: boolean | null
    fd_created_at?: Date | string | null
    fd_updated_at?: Date | string | null
    due_by?: Date | string | null
    fr_due_by?: Date | string | null
    nr_due_by?: Date | string | null
    nr_escalated?: boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: string | null
    cf_best_number_note?: string | null
    cf_quotewekrs?: string | null
    cf_qbsalesorder?: string | null
    cf_qbinv?: string | null
    cf_totalhours?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
    fd_activities?: fd_activitiesUncheckedCreateNestedManyWithoutFd_ticketsInput
  }

  export type fd_ticketsCreateOrConnectWithoutFd_escalationsInput = {
    where: fd_ticketsWhereUniqueInput
    create: XOR<fd_ticketsCreateWithoutFd_escalationsInput, fd_ticketsUncheckedCreateWithoutFd_escalationsInput>
  }

  export type fd_ticketsUpsertWithoutFd_escalationsInput = {
    update: XOR<fd_ticketsUpdateWithoutFd_escalationsInput, fd_ticketsUncheckedUpdateWithoutFd_escalationsInput>
    create: XOR<fd_ticketsCreateWithoutFd_escalationsInput, fd_ticketsUncheckedCreateWithoutFd_escalationsInput>
    where?: fd_ticketsWhereInput
  }

  export type fd_ticketsUpdateToOneWithWhereWithoutFd_escalationsInput = {
    where?: fd_ticketsWhereInput
    data: XOR<fd_ticketsUpdateWithoutFd_escalationsInput, fd_ticketsUncheckedUpdateWithoutFd_escalationsInput>
  }

  export type fd_ticketsUpdateWithoutFd_escalationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_activities?: fd_activitiesUpdateManyWithoutFd_ticketsNestedInput
  }

  export type fd_ticketsUncheckedUpdateWithoutFd_escalationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    json?: NullableJsonNullValueInput | InputJsonValue
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cc_emails?: NullableJsonNullValueInput | InputJsonValue
    fwd_emails?: NullableJsonNullValueInput | InputJsonValue
    reply_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    ticket_cc_emails?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    email_config_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    group_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    requester_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requester_name?: NullableStringFieldUpdateOperationsInput | string | null
    requester_email?: NullableStringFieldUpdateOperationsInput | string | null
    responder_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    source?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    to_emails?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urgent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fd_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_due_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nr_escalated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    json_custom_field?: NullableJsonNullValueInput | InputJsonValue
    cf_best_number_to_reach?: NullableStringFieldUpdateOperationsInput | string | null
    cf_best_number_note?: NullableStringFieldUpdateOperationsInput | string | null
    cf_quotewekrs?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbsalesorder?: NullableStringFieldUpdateOperationsInput | string | null
    cf_qbinv?: NullableStringFieldUpdateOperationsInput | string | null
    cf_totalhours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fd_activities?: fd_activitiesUncheckedUpdateManyWithoutFd_ticketsNestedInput
  }

  export type fd_activitiesCreateWithoutFd_ticketsInput = {
    id: string
    status?: number | null
    priority?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_activitiesUncheckedCreateWithoutFd_ticketsInput = {
    id: string
    status?: number | null
    priority?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_activitiesCreateOrConnectWithoutFd_ticketsInput = {
    where: fd_activitiesWhereUniqueInput
    create: XOR<fd_activitiesCreateWithoutFd_ticketsInput, fd_activitiesUncheckedCreateWithoutFd_ticketsInput>
  }

  export type fd_activitiesCreateManyFd_ticketsInputEnvelope = {
    data: fd_activitiesCreateManyFd_ticketsInput | fd_activitiesCreateManyFd_ticketsInput[]
    skipDuplicates?: boolean
  }

  export type fd_escalationsCreateWithoutFd_ticketsInput = {
    id: string
    escalation_type?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_escalationsUncheckedCreateWithoutFd_ticketsInput = {
    id: string
    escalation_type?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_escalationsCreateOrConnectWithoutFd_ticketsInput = {
    where: fd_escalationsWhereUniqueInput
    create: XOR<fd_escalationsCreateWithoutFd_ticketsInput, fd_escalationsUncheckedCreateWithoutFd_ticketsInput>
  }

  export type fd_escalationsCreateManyFd_ticketsInputEnvelope = {
    data: fd_escalationsCreateManyFd_ticketsInput | fd_escalationsCreateManyFd_ticketsInput[]
    skipDuplicates?: boolean
  }

  export type fd_activitiesUpsertWithWhereUniqueWithoutFd_ticketsInput = {
    where: fd_activitiesWhereUniqueInput
    update: XOR<fd_activitiesUpdateWithoutFd_ticketsInput, fd_activitiesUncheckedUpdateWithoutFd_ticketsInput>
    create: XOR<fd_activitiesCreateWithoutFd_ticketsInput, fd_activitiesUncheckedCreateWithoutFd_ticketsInput>
  }

  export type fd_activitiesUpdateWithWhereUniqueWithoutFd_ticketsInput = {
    where: fd_activitiesWhereUniqueInput
    data: XOR<fd_activitiesUpdateWithoutFd_ticketsInput, fd_activitiesUncheckedUpdateWithoutFd_ticketsInput>
  }

  export type fd_activitiesUpdateManyWithWhereWithoutFd_ticketsInput = {
    where: fd_activitiesScalarWhereInput
    data: XOR<fd_activitiesUpdateManyMutationInput, fd_activitiesUncheckedUpdateManyWithoutFd_ticketsInput>
  }

  export type fd_activitiesScalarWhereInput = {
    AND?: fd_activitiesScalarWhereInput | fd_activitiesScalarWhereInput[]
    OR?: fd_activitiesScalarWhereInput[]
    NOT?: fd_activitiesScalarWhereInput | fd_activitiesScalarWhereInput[]
    id?: StringFilter<"fd_activities"> | string
    status?: IntNullableFilter<"fd_activities"> | number | null
    priority?: StringNullableFilter<"fd_activities"> | string | null
    createdAt?: DateTimeFilter<"fd_activities"> | Date | string
    updatedAt?: DateTimeFilter<"fd_activities"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_activities"> | Date | string | null
    freshdesk_id?: StringNullableFilter<"fd_activities"> | string | null
  }

  export type fd_escalationsUpsertWithWhereUniqueWithoutFd_ticketsInput = {
    where: fd_escalationsWhereUniqueInput
    update: XOR<fd_escalationsUpdateWithoutFd_ticketsInput, fd_escalationsUncheckedUpdateWithoutFd_ticketsInput>
    create: XOR<fd_escalationsCreateWithoutFd_ticketsInput, fd_escalationsUncheckedCreateWithoutFd_ticketsInput>
  }

  export type fd_escalationsUpdateWithWhereUniqueWithoutFd_ticketsInput = {
    where: fd_escalationsWhereUniqueInput
    data: XOR<fd_escalationsUpdateWithoutFd_ticketsInput, fd_escalationsUncheckedUpdateWithoutFd_ticketsInput>
  }

  export type fd_escalationsUpdateManyWithWhereWithoutFd_ticketsInput = {
    where: fd_escalationsScalarWhereInput
    data: XOR<fd_escalationsUpdateManyMutationInput, fd_escalationsUncheckedUpdateManyWithoutFd_ticketsInput>
  }

  export type fd_escalationsScalarWhereInput = {
    AND?: fd_escalationsScalarWhereInput | fd_escalationsScalarWhereInput[]
    OR?: fd_escalationsScalarWhereInput[]
    NOT?: fd_escalationsScalarWhereInput | fd_escalationsScalarWhereInput[]
    id?: StringFilter<"fd_escalations"> | string
    escalation_type?: StringNullableFilter<"fd_escalations"> | string | null
    createdAt?: DateTimeFilter<"fd_escalations"> | Date | string
    updatedAt?: DateTimeFilter<"fd_escalations"> | Date | string
    deleted?: DateTimeNullableFilter<"fd_escalations"> | Date | string | null
    freshdesk_id?: StringNullableFilter<"fd_escalations"> | string | null
  }

  export type rolesCreateWithoutRole_poolInput = {
    id: string
    role_name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type rolesUncheckedCreateWithoutRole_poolInput = {
    id: string
    role_name: string
    code?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type rolesCreateOrConnectWithoutRole_poolInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutRole_poolInput, rolesUncheckedCreateWithoutRole_poolInput>
  }

  export type usersCreateWithoutRole_poolInput = {
    id: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type usersUncheckedCreateWithoutRole_poolInput = {
    id: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type usersCreateOrConnectWithoutRole_poolInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRole_poolInput, usersUncheckedCreateWithoutRole_poolInput>
  }

  export type rolesUpsertWithoutRole_poolInput = {
    update: XOR<rolesUpdateWithoutRole_poolInput, rolesUncheckedUpdateWithoutRole_poolInput>
    create: XOR<rolesCreateWithoutRole_poolInput, rolesUncheckedCreateWithoutRole_poolInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutRole_poolInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutRole_poolInput, rolesUncheckedUpdateWithoutRole_poolInput>
  }

  export type rolesUpdateWithoutRole_poolInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateWithoutRole_poolInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutRole_poolInput = {
    update: XOR<usersUpdateWithoutRole_poolInput, usersUncheckedUpdateWithoutRole_poolInput>
    create: XOR<usersCreateWithoutRole_poolInput, usersUncheckedCreateWithoutRole_poolInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRole_poolInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRole_poolInput, usersUncheckedUpdateWithoutRole_poolInput>
  }

  export type usersUpdateWithoutRole_poolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumenum_users_statusFieldUpdateOperationsInput | $Enums.enum_users_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutRole_poolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    confirmation_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumenum_users_statusFieldUpdateOperationsInput | $Enums.enum_users_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_poolCreateWithoutRolesInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    users?: usersCreateNestedOneWithoutRole_poolInput
  }

  export type role_poolUncheckedCreateWithoutRolesInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
  }

  export type role_poolCreateOrConnectWithoutRolesInput = {
    where: role_poolWhereUniqueInput
    create: XOR<role_poolCreateWithoutRolesInput, role_poolUncheckedCreateWithoutRolesInput>
  }

  export type role_poolCreateManyRolesInputEnvelope = {
    data: role_poolCreateManyRolesInput | role_poolCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type role_poolUpsertWithWhereUniqueWithoutRolesInput = {
    where: role_poolWhereUniqueInput
    update: XOR<role_poolUpdateWithoutRolesInput, role_poolUncheckedUpdateWithoutRolesInput>
    create: XOR<role_poolCreateWithoutRolesInput, role_poolUncheckedCreateWithoutRolesInput>
  }

  export type role_poolUpdateWithWhereUniqueWithoutRolesInput = {
    where: role_poolWhereUniqueInput
    data: XOR<role_poolUpdateWithoutRolesInput, role_poolUncheckedUpdateWithoutRolesInput>
  }

  export type role_poolUpdateManyWithWhereWithoutRolesInput = {
    where: role_poolScalarWhereInput
    data: XOR<role_poolUpdateManyMutationInput, role_poolUncheckedUpdateManyWithoutRolesInput>
  }

  export type role_poolScalarWhereInput = {
    AND?: role_poolScalarWhereInput | role_poolScalarWhereInput[]
    OR?: role_poolScalarWhereInput[]
    NOT?: role_poolScalarWhereInput | role_poolScalarWhereInput[]
    id?: StringFilter<"role_pool"> | string
    createdAt?: DateTimeFilter<"role_pool"> | Date | string
    updatedAt?: DateTimeFilter<"role_pool"> | Date | string
    deletedAt?: DateTimeNullableFilter<"role_pool"> | Date | string | null
    userId?: StringNullableFilter<"role_pool"> | string | null
    roleId?: StringNullableFilter<"role_pool"> | string | null
  }

  export type role_poolCreateWithoutUsersInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    roles?: rolesCreateNestedOneWithoutRole_poolInput
  }

  export type role_poolUncheckedCreateWithoutUsersInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    roleId?: string | null
  }

  export type role_poolCreateOrConnectWithoutUsersInput = {
    where: role_poolWhereUniqueInput
    create: XOR<role_poolCreateWithoutUsersInput, role_poolUncheckedCreateWithoutUsersInput>
  }

  export type role_poolCreateManyUsersInputEnvelope = {
    data: role_poolCreateManyUsersInput | role_poolCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type role_poolUpsertWithWhereUniqueWithoutUsersInput = {
    where: role_poolWhereUniqueInput
    update: XOR<role_poolUpdateWithoutUsersInput, role_poolUncheckedUpdateWithoutUsersInput>
    create: XOR<role_poolCreateWithoutUsersInput, role_poolUncheckedCreateWithoutUsersInput>
  }

  export type role_poolUpdateWithWhereUniqueWithoutUsersInput = {
    where: role_poolWhereUniqueInput
    data: XOR<role_poolUpdateWithoutUsersInput, role_poolUncheckedUpdateWithoutUsersInput>
  }

  export type role_poolUpdateManyWithWhereWithoutUsersInput = {
    where: role_poolScalarWhereInput
    data: XOR<role_poolUpdateManyMutationInput, role_poolUncheckedUpdateManyWithoutUsersInput>
  }

  export type fd_activitiesCreateManyFd_ticketsInput = {
    id: string
    status?: number | null
    priority?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_escalationsCreateManyFd_ticketsInput = {
    id: string
    escalation_type?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deleted?: Date | string | null
  }

  export type fd_activitiesUpdateWithoutFd_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_activitiesUncheckedUpdateWithoutFd_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_activitiesUncheckedUpdateManyWithoutFd_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_escalationsUpdateWithoutFd_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    escalation_type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_escalationsUncheckedUpdateWithoutFd_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    escalation_type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fd_escalationsUncheckedUpdateManyWithoutFd_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    escalation_type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type role_poolCreateManyRolesInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
  }

  export type role_poolUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutRole_poolNestedInput
  }

  export type role_poolUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type role_poolUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type role_poolCreateManyUsersInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    deletedAt?: Date | string | null
    roleId?: string | null
  }

  export type role_poolUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: rolesUpdateOneWithoutRole_poolNestedInput
  }

  export type role_poolUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type role_poolUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use fd_activitiesDefaultArgs instead
     */
    export type fd_activitiesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fd_activitiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fd_agentsDefaultArgs instead
     */
    export type fd_agentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fd_agentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fd_escalationsDefaultArgs instead
     */
    export type fd_escalationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fd_escalationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fd_groupDefaultArgs instead
     */
    export type fd_groupArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fd_groupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fd_priorityDefaultArgs instead
     */
    export type fd_priorityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fd_priorityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fd_statusDefaultArgs instead
     */
    export type fd_statusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fd_statusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fd_ticketsDefaultArgs instead
     */
    export type fd_ticketsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fd_ticketsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use role_poolDefaultArgs instead
     */
    export type role_poolArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = role_poolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolesDefaultArgs instead
     */
    export type rolesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}