
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
 * // Fetch zero or more Role_pools
 * const role_pools = await prisma.role_pool.findMany()
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
   * // Fetch zero or more Role_pools
   * const role_pools = await prisma.role_pool.findMany()
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
      modelProps: 'role_pool' | 'roles' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'enum_users_status'
   */
  export type Enumenum_users_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_users_status'>
    


  /**
   * Reference to a field of type 'enum_users_status[]'
   */
  export type ListEnumenum_users_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_users_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


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

  export type role_poolCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roles?: rolesCreateNestedOneWithoutRole_poolInput
    users?: usersCreateNestedOneWithoutRole_poolInput
  }

  export type role_poolUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    role_name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    role_pool?: role_poolCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: string
    role_name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    role_name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
    role_pool?: role_poolCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type RolesNullableRelationFilter = {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type rolesCreateWithoutRole_poolInput = {
    id?: string
    role_name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type rolesUncheckedCreateWithoutRole_poolInput = {
    id?: string
    role_name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type rolesCreateOrConnectWithoutRole_poolInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutRole_poolInput, rolesUncheckedCreateWithoutRole_poolInput>
  }

  export type usersCreateWithoutRole_poolInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: Date | string | null
  }

  export type usersUncheckedCreateWithoutRole_poolInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    confirmation_code?: string | null
    status?: $Enums.enum_users_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: usersCreateNestedOneWithoutRole_poolInput
  }

  export type role_poolUncheckedCreateWithoutRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roles?: rolesCreateNestedOneWithoutRole_poolInput
  }

  export type role_poolUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type role_poolCreateManyRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
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