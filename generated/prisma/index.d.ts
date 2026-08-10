
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DoctorNote
 * 
 */
export type DoctorNote = $Result.DefaultSelection<Prisma.$DoctorNotePayload>
/**
 * Model HealtRecord
 * 
 */
export type HealtRecord = $Result.DefaultSelection<Prisma.$HealtRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Doctors
 * const doctors = await prisma.doctor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorNote`: Exposes CRUD operations for the **DoctorNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorNotes
    * const doctorNotes = await prisma.doctorNote.findMany()
    * ```
    */
  get doctorNote(): Prisma.DoctorNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healtRecord`: Exposes CRUD operations for the **HealtRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealtRecords
    * const healtRecords = await prisma.healtRecord.findMany()
    * ```
    */
  get healtRecord(): Prisma.HealtRecordDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Doctor: 'Doctor',
    User: 'User',
    DoctorNote: 'DoctorNote',
    HealtRecord: 'HealtRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "doctor" | "user" | "doctorNote" | "healtRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DoctorNote: {
        payload: Prisma.$DoctorNotePayload<ExtArgs>
        fields: Prisma.DoctorNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload>
          }
          findFirst: {
            args: Prisma.DoctorNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload>
          }
          findMany: {
            args: Prisma.DoctorNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload>[]
          }
          create: {
            args: Prisma.DoctorNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload>
          }
          createMany: {
            args: Prisma.DoctorNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload>
          }
          update: {
            args: Prisma.DoctorNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload>
          }
          deleteMany: {
            args: Prisma.DoctorNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorNotePayload>
          }
          aggregate: {
            args: Prisma.DoctorNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorNote>
          }
          groupBy: {
            args: Prisma.DoctorNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorNoteCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorNoteCountAggregateOutputType> | number
          }
        }
      }
      HealtRecord: {
        payload: Prisma.$HealtRecordPayload<ExtArgs>
        fields: Prisma.HealtRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealtRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealtRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload>
          }
          findFirst: {
            args: Prisma.HealtRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealtRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload>
          }
          findMany: {
            args: Prisma.HealtRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload>[]
          }
          create: {
            args: Prisma.HealtRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload>
          }
          createMany: {
            args: Prisma.HealtRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HealtRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload>
          }
          update: {
            args: Prisma.HealtRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload>
          }
          deleteMany: {
            args: Prisma.HealtRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealtRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HealtRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealtRecordPayload>
          }
          aggregate: {
            args: Prisma.HealtRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealtRecord>
          }
          groupBy: {
            args: Prisma.HealtRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealtRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealtRecordCountArgs<ExtArgs>
            result: $Utils.Optional<HealtRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    doctor?: DoctorOmit
    user?: UserOmit
    doctorNote?: DoctorNoteOmit
    healtRecord?: HealtRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    doctorNotes: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorNotes?: boolean | DoctorCountOutputTypeCountDoctorNotesArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorNoteWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    doctorNotes: number
    healtRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorNotes?: boolean | UserCountOutputTypeCountDoctorNotesArgs
    healtRecords?: boolean | UserCountOutputTypeCountHealtRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorNoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHealtRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealtRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    specialization: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    specialization: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    username: number
    password: number
    specialization: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    specialization?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    specialization?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    specialization?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    username: string
    password: string
    specialization: string
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    specialization?: boolean
    doctorNotes?: boolean | Doctor$doctorNotesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>



  export type DoctorSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    specialization?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "specialization", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorNotes?: boolean | Doctor$doctorNotesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      doctorNotes: Prisma.$DoctorNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      specialization: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorNotes<T extends Doctor$doctorNotesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly username: FieldRef<"Doctor", 'String'>
    readonly password: FieldRef<"Doctor", 'String'>
    readonly specialization: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.doctorNotes
   */
  export type Doctor$doctorNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    where?: DoctorNoteWhereInput
    orderBy?: DoctorNoteOrderByWithRelationInput | DoctorNoteOrderByWithRelationInput[]
    cursor?: DoctorNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorNoteScalarFieldEnum | DoctorNoteScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    doctorNotes?: boolean | User$doctorNotesArgs<ExtArgs>
    healtRecords?: boolean | User$healtRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorNotes?: boolean | User$doctorNotesArgs<ExtArgs>
    healtRecords?: boolean | User$healtRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      doctorNotes: Prisma.$DoctorNotePayload<ExtArgs>[]
      healtRecords: Prisma.$HealtRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorNotes<T extends User$doctorNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    healtRecords<T extends User$healtRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$healtRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.doctorNotes
   */
  export type User$doctorNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    where?: DoctorNoteWhereInput
    orderBy?: DoctorNoteOrderByWithRelationInput | DoctorNoteOrderByWithRelationInput[]
    cursor?: DoctorNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorNoteScalarFieldEnum | DoctorNoteScalarFieldEnum[]
  }

  /**
   * User.healtRecords
   */
  export type User$healtRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    where?: HealtRecordWhereInput
    orderBy?: HealtRecordOrderByWithRelationInput | HealtRecordOrderByWithRelationInput[]
    cursor?: HealtRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealtRecordScalarFieldEnum | HealtRecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DoctorNote
   */

  export type AggregateDoctorNote = {
    _count: DoctorNoteCountAggregateOutputType | null
    _avg: DoctorNoteAvgAggregateOutputType | null
    _sum: DoctorNoteSumAggregateOutputType | null
    _min: DoctorNoteMinAggregateOutputType | null
    _max: DoctorNoteMaxAggregateOutputType | null
  }

  export type DoctorNoteAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    userId: number | null
  }

  export type DoctorNoteSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    userId: number | null
  }

  export type DoctorNoteMinAggregateOutputType = {
    id: number | null
    note: string | null
    createdAt: Date | null
    doctorId: number | null
    userId: number | null
  }

  export type DoctorNoteMaxAggregateOutputType = {
    id: number | null
    note: string | null
    createdAt: Date | null
    doctorId: number | null
    userId: number | null
  }

  export type DoctorNoteCountAggregateOutputType = {
    id: number
    note: number
    createdAt: number
    doctorId: number
    userId: number
    _all: number
  }


  export type DoctorNoteAvgAggregateInputType = {
    id?: true
    doctorId?: true
    userId?: true
  }

  export type DoctorNoteSumAggregateInputType = {
    id?: true
    doctorId?: true
    userId?: true
  }

  export type DoctorNoteMinAggregateInputType = {
    id?: true
    note?: true
    createdAt?: true
    doctorId?: true
    userId?: true
  }

  export type DoctorNoteMaxAggregateInputType = {
    id?: true
    note?: true
    createdAt?: true
    doctorId?: true
    userId?: true
  }

  export type DoctorNoteCountAggregateInputType = {
    id?: true
    note?: true
    createdAt?: true
    doctorId?: true
    userId?: true
    _all?: true
  }

  export type DoctorNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorNote to aggregate.
     */
    where?: DoctorNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorNotes to fetch.
     */
    orderBy?: DoctorNoteOrderByWithRelationInput | DoctorNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorNotes
    **/
    _count?: true | DoctorNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorNoteMaxAggregateInputType
  }

  export type GetDoctorNoteAggregateType<T extends DoctorNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorNote[P]>
      : GetScalarType<T[P], AggregateDoctorNote[P]>
  }




  export type DoctorNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorNoteWhereInput
    orderBy?: DoctorNoteOrderByWithAggregationInput | DoctorNoteOrderByWithAggregationInput[]
    by: DoctorNoteScalarFieldEnum[] | DoctorNoteScalarFieldEnum
    having?: DoctorNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorNoteCountAggregateInputType | true
    _avg?: DoctorNoteAvgAggregateInputType
    _sum?: DoctorNoteSumAggregateInputType
    _min?: DoctorNoteMinAggregateInputType
    _max?: DoctorNoteMaxAggregateInputType
  }

  export type DoctorNoteGroupByOutputType = {
    id: number
    note: string
    createdAt: Date
    doctorId: number
    userId: number
    _count: DoctorNoteCountAggregateOutputType | null
    _avg: DoctorNoteAvgAggregateOutputType | null
    _sum: DoctorNoteSumAggregateOutputType | null
    _min: DoctorNoteMinAggregateOutputType | null
    _max: DoctorNoteMaxAggregateOutputType | null
  }

  type GetDoctorNoteGroupByPayload<T extends DoctorNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorNoteGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorNoteGroupByOutputType[P]>
        }
      >
    >


  export type DoctorNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    createdAt?: boolean
    doctorId?: boolean
    userId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorNote"]>



  export type DoctorNoteSelectScalar = {
    id?: boolean
    note?: boolean
    createdAt?: boolean
    doctorId?: boolean
    userId?: boolean
  }

  export type DoctorNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note" | "createdAt" | "doctorId" | "userId", ExtArgs["result"]["doctorNote"]>
  export type DoctorNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorNote"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note: string
      createdAt: Date
      doctorId: number
      userId: number
    }, ExtArgs["result"]["doctorNote"]>
    composites: {}
  }

  type DoctorNoteGetPayload<S extends boolean | null | undefined | DoctorNoteDefaultArgs> = $Result.GetResult<Prisma.$DoctorNotePayload, S>

  type DoctorNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorNoteCountAggregateInputType | true
    }

  export interface DoctorNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorNote'], meta: { name: 'DoctorNote' } }
    /**
     * Find zero or one DoctorNote that matches the filter.
     * @param {DoctorNoteFindUniqueArgs} args - Arguments to find a DoctorNote
     * @example
     * // Get one DoctorNote
     * const doctorNote = await prisma.doctorNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorNoteFindUniqueArgs>(args: SelectSubset<T, DoctorNoteFindUniqueArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorNoteFindUniqueOrThrowArgs} args - Arguments to find a DoctorNote
     * @example
     * // Get one DoctorNote
     * const doctorNote = await prisma.doctorNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorNoteFindFirstArgs} args - Arguments to find a DoctorNote
     * @example
     * // Get one DoctorNote
     * const doctorNote = await prisma.doctorNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorNoteFindFirstArgs>(args?: SelectSubset<T, DoctorNoteFindFirstArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorNoteFindFirstOrThrowArgs} args - Arguments to find a DoctorNote
     * @example
     * // Get one DoctorNote
     * const doctorNote = await prisma.doctorNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorNotes
     * const doctorNotes = await prisma.doctorNote.findMany()
     * 
     * // Get first 10 DoctorNotes
     * const doctorNotes = await prisma.doctorNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorNoteWithIdOnly = await prisma.doctorNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorNoteFindManyArgs>(args?: SelectSubset<T, DoctorNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorNote.
     * @param {DoctorNoteCreateArgs} args - Arguments to create a DoctorNote.
     * @example
     * // Create one DoctorNote
     * const DoctorNote = await prisma.doctorNote.create({
     *   data: {
     *     // ... data to create a DoctorNote
     *   }
     * })
     * 
     */
    create<T extends DoctorNoteCreateArgs>(args: SelectSubset<T, DoctorNoteCreateArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorNotes.
     * @param {DoctorNoteCreateManyArgs} args - Arguments to create many DoctorNotes.
     * @example
     * // Create many DoctorNotes
     * const doctorNote = await prisma.doctorNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorNoteCreateManyArgs>(args?: SelectSubset<T, DoctorNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorNote.
     * @param {DoctorNoteDeleteArgs} args - Arguments to delete one DoctorNote.
     * @example
     * // Delete one DoctorNote
     * const DoctorNote = await prisma.doctorNote.delete({
     *   where: {
     *     // ... filter to delete one DoctorNote
     *   }
     * })
     * 
     */
    delete<T extends DoctorNoteDeleteArgs>(args: SelectSubset<T, DoctorNoteDeleteArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorNote.
     * @param {DoctorNoteUpdateArgs} args - Arguments to update one DoctorNote.
     * @example
     * // Update one DoctorNote
     * const doctorNote = await prisma.doctorNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorNoteUpdateArgs>(args: SelectSubset<T, DoctorNoteUpdateArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorNotes.
     * @param {DoctorNoteDeleteManyArgs} args - Arguments to filter DoctorNotes to delete.
     * @example
     * // Delete a few DoctorNotes
     * const { count } = await prisma.doctorNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorNoteDeleteManyArgs>(args?: SelectSubset<T, DoctorNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorNotes
     * const doctorNote = await prisma.doctorNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorNoteUpdateManyArgs>(args: SelectSubset<T, DoctorNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorNote.
     * @param {DoctorNoteUpsertArgs} args - Arguments to update or create a DoctorNote.
     * @example
     * // Update or create a DoctorNote
     * const doctorNote = await prisma.doctorNote.upsert({
     *   create: {
     *     // ... data to create a DoctorNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorNote we want to update
     *   }
     * })
     */
    upsert<T extends DoctorNoteUpsertArgs>(args: SelectSubset<T, DoctorNoteUpsertArgs<ExtArgs>>): Prisma__DoctorNoteClient<$Result.GetResult<Prisma.$DoctorNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorNoteCountArgs} args - Arguments to filter DoctorNotes to count.
     * @example
     * // Count the number of DoctorNotes
     * const count = await prisma.doctorNote.count({
     *   where: {
     *     // ... the filter for the DoctorNotes we want to count
     *   }
     * })
    **/
    count<T extends DoctorNoteCountArgs>(
      args?: Subset<T, DoctorNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorNoteAggregateArgs>(args: Subset<T, DoctorNoteAggregateArgs>): Prisma.PrismaPromise<GetDoctorNoteAggregateType<T>>

    /**
     * Group by DoctorNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorNoteGroupByArgs} args - Group by arguments.
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
      T extends DoctorNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorNoteGroupByArgs['orderBy'] }
        : { orderBy?: DoctorNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorNote model
   */
  readonly fields: DoctorNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorNote model
   */
  interface DoctorNoteFieldRefs {
    readonly id: FieldRef<"DoctorNote", 'Int'>
    readonly note: FieldRef<"DoctorNote", 'String'>
    readonly createdAt: FieldRef<"DoctorNote", 'DateTime'>
    readonly doctorId: FieldRef<"DoctorNote", 'Int'>
    readonly userId: FieldRef<"DoctorNote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DoctorNote findUnique
   */
  export type DoctorNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * Filter, which DoctorNote to fetch.
     */
    where: DoctorNoteWhereUniqueInput
  }

  /**
   * DoctorNote findUniqueOrThrow
   */
  export type DoctorNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * Filter, which DoctorNote to fetch.
     */
    where: DoctorNoteWhereUniqueInput
  }

  /**
   * DoctorNote findFirst
   */
  export type DoctorNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * Filter, which DoctorNote to fetch.
     */
    where?: DoctorNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorNotes to fetch.
     */
    orderBy?: DoctorNoteOrderByWithRelationInput | DoctorNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorNotes.
     */
    cursor?: DoctorNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorNotes.
     */
    distinct?: DoctorNoteScalarFieldEnum | DoctorNoteScalarFieldEnum[]
  }

  /**
   * DoctorNote findFirstOrThrow
   */
  export type DoctorNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * Filter, which DoctorNote to fetch.
     */
    where?: DoctorNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorNotes to fetch.
     */
    orderBy?: DoctorNoteOrderByWithRelationInput | DoctorNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorNotes.
     */
    cursor?: DoctorNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorNotes.
     */
    distinct?: DoctorNoteScalarFieldEnum | DoctorNoteScalarFieldEnum[]
  }

  /**
   * DoctorNote findMany
   */
  export type DoctorNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * Filter, which DoctorNotes to fetch.
     */
    where?: DoctorNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorNotes to fetch.
     */
    orderBy?: DoctorNoteOrderByWithRelationInput | DoctorNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorNotes.
     */
    cursor?: DoctorNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorNotes.
     */
    distinct?: DoctorNoteScalarFieldEnum | DoctorNoteScalarFieldEnum[]
  }

  /**
   * DoctorNote create
   */
  export type DoctorNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorNote.
     */
    data: XOR<DoctorNoteCreateInput, DoctorNoteUncheckedCreateInput>
  }

  /**
   * DoctorNote createMany
   */
  export type DoctorNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorNotes.
     */
    data: DoctorNoteCreateManyInput | DoctorNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorNote update
   */
  export type DoctorNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorNote.
     */
    data: XOR<DoctorNoteUpdateInput, DoctorNoteUncheckedUpdateInput>
    /**
     * Choose, which DoctorNote to update.
     */
    where: DoctorNoteWhereUniqueInput
  }

  /**
   * DoctorNote updateMany
   */
  export type DoctorNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorNotes.
     */
    data: XOR<DoctorNoteUpdateManyMutationInput, DoctorNoteUncheckedUpdateManyInput>
    /**
     * Filter which DoctorNotes to update
     */
    where?: DoctorNoteWhereInput
    /**
     * Limit how many DoctorNotes to update.
     */
    limit?: number
  }

  /**
   * DoctorNote upsert
   */
  export type DoctorNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorNote to update in case it exists.
     */
    where: DoctorNoteWhereUniqueInput
    /**
     * In case the DoctorNote found by the `where` argument doesn't exist, create a new DoctorNote with this data.
     */
    create: XOR<DoctorNoteCreateInput, DoctorNoteUncheckedCreateInput>
    /**
     * In case the DoctorNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorNoteUpdateInput, DoctorNoteUncheckedUpdateInput>
  }

  /**
   * DoctorNote delete
   */
  export type DoctorNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
    /**
     * Filter which DoctorNote to delete.
     */
    where: DoctorNoteWhereUniqueInput
  }

  /**
   * DoctorNote deleteMany
   */
  export type DoctorNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorNotes to delete
     */
    where?: DoctorNoteWhereInput
    /**
     * Limit how many DoctorNotes to delete.
     */
    limit?: number
  }

  /**
   * DoctorNote without action
   */
  export type DoctorNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorNote
     */
    select?: DoctorNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorNote
     */
    omit?: DoctorNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorNoteInclude<ExtArgs> | null
  }


  /**
   * Model HealtRecord
   */

  export type AggregateHealtRecord = {
    _count: HealtRecordCountAggregateOutputType | null
    _avg: HealtRecordAvgAggregateOutputType | null
    _sum: HealtRecordSumAggregateOutputType | null
    _min: HealtRecordMinAggregateOutputType | null
    _max: HealtRecordMaxAggregateOutputType | null
  }

  export type HealtRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type HealtRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type HealtRecordMinAggregateOutputType = {
    id: number | null
    type: string | null
    value: string | null
    date: Date | null
    userId: number | null
  }

  export type HealtRecordMaxAggregateOutputType = {
    id: number | null
    type: string | null
    value: string | null
    date: Date | null
    userId: number | null
  }

  export type HealtRecordCountAggregateOutputType = {
    id: number
    type: number
    value: number
    date: number
    userId: number
    _all: number
  }


  export type HealtRecordAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type HealtRecordSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type HealtRecordMinAggregateInputType = {
    id?: true
    type?: true
    value?: true
    date?: true
    userId?: true
  }

  export type HealtRecordMaxAggregateInputType = {
    id?: true
    type?: true
    value?: true
    date?: true
    userId?: true
  }

  export type HealtRecordCountAggregateInputType = {
    id?: true
    type?: true
    value?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type HealtRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealtRecord to aggregate.
     */
    where?: HealtRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealtRecords to fetch.
     */
    orderBy?: HealtRecordOrderByWithRelationInput | HealtRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealtRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealtRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealtRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealtRecords
    **/
    _count?: true | HealtRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealtRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealtRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealtRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealtRecordMaxAggregateInputType
  }

  export type GetHealtRecordAggregateType<T extends HealtRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateHealtRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealtRecord[P]>
      : GetScalarType<T[P], AggregateHealtRecord[P]>
  }




  export type HealtRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealtRecordWhereInput
    orderBy?: HealtRecordOrderByWithAggregationInput | HealtRecordOrderByWithAggregationInput[]
    by: HealtRecordScalarFieldEnum[] | HealtRecordScalarFieldEnum
    having?: HealtRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealtRecordCountAggregateInputType | true
    _avg?: HealtRecordAvgAggregateInputType
    _sum?: HealtRecordSumAggregateInputType
    _min?: HealtRecordMinAggregateInputType
    _max?: HealtRecordMaxAggregateInputType
  }

  export type HealtRecordGroupByOutputType = {
    id: number
    type: string
    value: string
    date: Date
    userId: number
    _count: HealtRecordCountAggregateOutputType | null
    _avg: HealtRecordAvgAggregateOutputType | null
    _sum: HealtRecordSumAggregateOutputType | null
    _min: HealtRecordMinAggregateOutputType | null
    _max: HealtRecordMaxAggregateOutputType | null
  }

  type GetHealtRecordGroupByPayload<T extends HealtRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealtRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealtRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealtRecordGroupByOutputType[P]>
            : GetScalarType<T[P], HealtRecordGroupByOutputType[P]>
        }
      >
    >


  export type HealtRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healtRecord"]>



  export type HealtRecordSelectScalar = {
    id?: boolean
    type?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
  }

  export type HealtRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "value" | "date" | "userId", ExtArgs["result"]["healtRecord"]>
  export type HealtRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HealtRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealtRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      value: string
      date: Date
      userId: number
    }, ExtArgs["result"]["healtRecord"]>
    composites: {}
  }

  type HealtRecordGetPayload<S extends boolean | null | undefined | HealtRecordDefaultArgs> = $Result.GetResult<Prisma.$HealtRecordPayload, S>

  type HealtRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealtRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealtRecordCountAggregateInputType | true
    }

  export interface HealtRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealtRecord'], meta: { name: 'HealtRecord' } }
    /**
     * Find zero or one HealtRecord that matches the filter.
     * @param {HealtRecordFindUniqueArgs} args - Arguments to find a HealtRecord
     * @example
     * // Get one HealtRecord
     * const healtRecord = await prisma.healtRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealtRecordFindUniqueArgs>(args: SelectSubset<T, HealtRecordFindUniqueArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealtRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealtRecordFindUniqueOrThrowArgs} args - Arguments to find a HealtRecord
     * @example
     * // Get one HealtRecord
     * const healtRecord = await prisma.healtRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealtRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, HealtRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealtRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealtRecordFindFirstArgs} args - Arguments to find a HealtRecord
     * @example
     * // Get one HealtRecord
     * const healtRecord = await prisma.healtRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealtRecordFindFirstArgs>(args?: SelectSubset<T, HealtRecordFindFirstArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealtRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealtRecordFindFirstOrThrowArgs} args - Arguments to find a HealtRecord
     * @example
     * // Get one HealtRecord
     * const healtRecord = await prisma.healtRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealtRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, HealtRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealtRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealtRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealtRecords
     * const healtRecords = await prisma.healtRecord.findMany()
     * 
     * // Get first 10 HealtRecords
     * const healtRecords = await prisma.healtRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healtRecordWithIdOnly = await prisma.healtRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealtRecordFindManyArgs>(args?: SelectSubset<T, HealtRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealtRecord.
     * @param {HealtRecordCreateArgs} args - Arguments to create a HealtRecord.
     * @example
     * // Create one HealtRecord
     * const HealtRecord = await prisma.healtRecord.create({
     *   data: {
     *     // ... data to create a HealtRecord
     *   }
     * })
     * 
     */
    create<T extends HealtRecordCreateArgs>(args: SelectSubset<T, HealtRecordCreateArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealtRecords.
     * @param {HealtRecordCreateManyArgs} args - Arguments to create many HealtRecords.
     * @example
     * // Create many HealtRecords
     * const healtRecord = await prisma.healtRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealtRecordCreateManyArgs>(args?: SelectSubset<T, HealtRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HealtRecord.
     * @param {HealtRecordDeleteArgs} args - Arguments to delete one HealtRecord.
     * @example
     * // Delete one HealtRecord
     * const HealtRecord = await prisma.healtRecord.delete({
     *   where: {
     *     // ... filter to delete one HealtRecord
     *   }
     * })
     * 
     */
    delete<T extends HealtRecordDeleteArgs>(args: SelectSubset<T, HealtRecordDeleteArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealtRecord.
     * @param {HealtRecordUpdateArgs} args - Arguments to update one HealtRecord.
     * @example
     * // Update one HealtRecord
     * const healtRecord = await prisma.healtRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealtRecordUpdateArgs>(args: SelectSubset<T, HealtRecordUpdateArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealtRecords.
     * @param {HealtRecordDeleteManyArgs} args - Arguments to filter HealtRecords to delete.
     * @example
     * // Delete a few HealtRecords
     * const { count } = await prisma.healtRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealtRecordDeleteManyArgs>(args?: SelectSubset<T, HealtRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealtRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealtRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealtRecords
     * const healtRecord = await prisma.healtRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealtRecordUpdateManyArgs>(args: SelectSubset<T, HealtRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HealtRecord.
     * @param {HealtRecordUpsertArgs} args - Arguments to update or create a HealtRecord.
     * @example
     * // Update or create a HealtRecord
     * const healtRecord = await prisma.healtRecord.upsert({
     *   create: {
     *     // ... data to create a HealtRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealtRecord we want to update
     *   }
     * })
     */
    upsert<T extends HealtRecordUpsertArgs>(args: SelectSubset<T, HealtRecordUpsertArgs<ExtArgs>>): Prisma__HealtRecordClient<$Result.GetResult<Prisma.$HealtRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealtRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealtRecordCountArgs} args - Arguments to filter HealtRecords to count.
     * @example
     * // Count the number of HealtRecords
     * const count = await prisma.healtRecord.count({
     *   where: {
     *     // ... the filter for the HealtRecords we want to count
     *   }
     * })
    **/
    count<T extends HealtRecordCountArgs>(
      args?: Subset<T, HealtRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealtRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealtRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealtRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealtRecordAggregateArgs>(args: Subset<T, HealtRecordAggregateArgs>): Prisma.PrismaPromise<GetHealtRecordAggregateType<T>>

    /**
     * Group by HealtRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealtRecordGroupByArgs} args - Group by arguments.
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
      T extends HealtRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealtRecordGroupByArgs['orderBy'] }
        : { orderBy?: HealtRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealtRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealtRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealtRecord model
   */
  readonly fields: HealtRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealtRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealtRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HealtRecord model
   */
  interface HealtRecordFieldRefs {
    readonly id: FieldRef<"HealtRecord", 'Int'>
    readonly type: FieldRef<"HealtRecord", 'String'>
    readonly value: FieldRef<"HealtRecord", 'String'>
    readonly date: FieldRef<"HealtRecord", 'DateTime'>
    readonly userId: FieldRef<"HealtRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HealtRecord findUnique
   */
  export type HealtRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealtRecord to fetch.
     */
    where: HealtRecordWhereUniqueInput
  }

  /**
   * HealtRecord findUniqueOrThrow
   */
  export type HealtRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealtRecord to fetch.
     */
    where: HealtRecordWhereUniqueInput
  }

  /**
   * HealtRecord findFirst
   */
  export type HealtRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealtRecord to fetch.
     */
    where?: HealtRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealtRecords to fetch.
     */
    orderBy?: HealtRecordOrderByWithRelationInput | HealtRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealtRecords.
     */
    cursor?: HealtRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealtRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealtRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealtRecords.
     */
    distinct?: HealtRecordScalarFieldEnum | HealtRecordScalarFieldEnum[]
  }

  /**
   * HealtRecord findFirstOrThrow
   */
  export type HealtRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealtRecord to fetch.
     */
    where?: HealtRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealtRecords to fetch.
     */
    orderBy?: HealtRecordOrderByWithRelationInput | HealtRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealtRecords.
     */
    cursor?: HealtRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealtRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealtRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealtRecords.
     */
    distinct?: HealtRecordScalarFieldEnum | HealtRecordScalarFieldEnum[]
  }

  /**
   * HealtRecord findMany
   */
  export type HealtRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * Filter, which HealtRecords to fetch.
     */
    where?: HealtRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealtRecords to fetch.
     */
    orderBy?: HealtRecordOrderByWithRelationInput | HealtRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealtRecords.
     */
    cursor?: HealtRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealtRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealtRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealtRecords.
     */
    distinct?: HealtRecordScalarFieldEnum | HealtRecordScalarFieldEnum[]
  }

  /**
   * HealtRecord create
   */
  export type HealtRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a HealtRecord.
     */
    data: XOR<HealtRecordCreateInput, HealtRecordUncheckedCreateInput>
  }

  /**
   * HealtRecord createMany
   */
  export type HealtRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealtRecords.
     */
    data: HealtRecordCreateManyInput | HealtRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealtRecord update
   */
  export type HealtRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a HealtRecord.
     */
    data: XOR<HealtRecordUpdateInput, HealtRecordUncheckedUpdateInput>
    /**
     * Choose, which HealtRecord to update.
     */
    where: HealtRecordWhereUniqueInput
  }

  /**
   * HealtRecord updateMany
   */
  export type HealtRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealtRecords.
     */
    data: XOR<HealtRecordUpdateManyMutationInput, HealtRecordUncheckedUpdateManyInput>
    /**
     * Filter which HealtRecords to update
     */
    where?: HealtRecordWhereInput
    /**
     * Limit how many HealtRecords to update.
     */
    limit?: number
  }

  /**
   * HealtRecord upsert
   */
  export type HealtRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the HealtRecord to update in case it exists.
     */
    where: HealtRecordWhereUniqueInput
    /**
     * In case the HealtRecord found by the `where` argument doesn't exist, create a new HealtRecord with this data.
     */
    create: XOR<HealtRecordCreateInput, HealtRecordUncheckedCreateInput>
    /**
     * In case the HealtRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealtRecordUpdateInput, HealtRecordUncheckedUpdateInput>
  }

  /**
   * HealtRecord delete
   */
  export type HealtRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
    /**
     * Filter which HealtRecord to delete.
     */
    where: HealtRecordWhereUniqueInput
  }

  /**
   * HealtRecord deleteMany
   */
  export type HealtRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealtRecords to delete
     */
    where?: HealtRecordWhereInput
    /**
     * Limit how many HealtRecords to delete.
     */
    limit?: number
  }

  /**
   * HealtRecord without action
   */
  export type HealtRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealtRecord
     */
    select?: HealtRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealtRecord
     */
    omit?: HealtRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealtRecordInclude<ExtArgs> | null
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


  export const DoctorScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    specialization: 'specialization'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DoctorNoteScalarFieldEnum: {
    id: 'id',
    note: 'note',
    createdAt: 'createdAt',
    doctorId: 'doctorId',
    userId: 'userId'
  };

  export type DoctorNoteScalarFieldEnum = (typeof DoctorNoteScalarFieldEnum)[keyof typeof DoctorNoteScalarFieldEnum]


  export const HealtRecordScalarFieldEnum: {
    id: 'id',
    type: 'type',
    value: 'value',
    date: 'date',
    userId: 'userId'
  };

  export type HealtRecordScalarFieldEnum = (typeof HealtRecordScalarFieldEnum)[keyof typeof HealtRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const DoctorOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    specialization: 'specialization'
  };

  export type DoctorOrderByRelevanceFieldEnum = (typeof DoctorOrderByRelevanceFieldEnum)[keyof typeof DoctorOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const DoctorNoteOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type DoctorNoteOrderByRelevanceFieldEnum = (typeof DoctorNoteOrderByRelevanceFieldEnum)[keyof typeof DoctorNoteOrderByRelevanceFieldEnum]


  export const HealtRecordOrderByRelevanceFieldEnum: {
    type: 'type',
    value: 'value'
  };

  export type HealtRecordOrderByRelevanceFieldEnum = (typeof HealtRecordOrderByRelevanceFieldEnum)[keyof typeof HealtRecordOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    username?: StringFilter<"Doctor"> | string
    password?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    doctorNotes?: DoctorNoteListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
    doctorNotes?: DoctorNoteOrderByRelationAggregateInput
    _relevance?: DoctorOrderByRelevanceInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    password?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    doctorNotes?: DoctorNoteListRelationFilter
  }, "id" | "username">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    username?: StringWithAggregatesFilter<"Doctor"> | string
    password?: StringWithAggregatesFilter<"Doctor"> | string
    specialization?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    doctorNotes?: DoctorNoteListRelationFilter
    healtRecords?: HealtRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    doctorNotes?: DoctorNoteOrderByRelationAggregateInput
    healtRecords?: HealtRecordOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    doctorNotes?: DoctorNoteListRelationFilter
    healtRecords?: HealtRecordListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type DoctorNoteWhereInput = {
    AND?: DoctorNoteWhereInput | DoctorNoteWhereInput[]
    OR?: DoctorNoteWhereInput[]
    NOT?: DoctorNoteWhereInput | DoctorNoteWhereInput[]
    id?: IntFilter<"DoctorNote"> | number
    note?: StringFilter<"DoctorNote"> | string
    createdAt?: DateTimeFilter<"DoctorNote"> | Date | string
    doctorId?: IntFilter<"DoctorNote"> | number
    userId?: IntFilter<"DoctorNote"> | number
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DoctorNoteOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    doctorId?: SortOrder
    userId?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: DoctorNoteOrderByRelevanceInput
  }

  export type DoctorNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DoctorNoteWhereInput | DoctorNoteWhereInput[]
    OR?: DoctorNoteWhereInput[]
    NOT?: DoctorNoteWhereInput | DoctorNoteWhereInput[]
    note?: StringFilter<"DoctorNote"> | string
    createdAt?: DateTimeFilter<"DoctorNote"> | Date | string
    doctorId?: IntFilter<"DoctorNote"> | number
    userId?: IntFilter<"DoctorNote"> | number
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DoctorNoteOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    doctorId?: SortOrder
    userId?: SortOrder
    _count?: DoctorNoteCountOrderByAggregateInput
    _avg?: DoctorNoteAvgOrderByAggregateInput
    _max?: DoctorNoteMaxOrderByAggregateInput
    _min?: DoctorNoteMinOrderByAggregateInput
    _sum?: DoctorNoteSumOrderByAggregateInput
  }

  export type DoctorNoteScalarWhereWithAggregatesInput = {
    AND?: DoctorNoteScalarWhereWithAggregatesInput | DoctorNoteScalarWhereWithAggregatesInput[]
    OR?: DoctorNoteScalarWhereWithAggregatesInput[]
    NOT?: DoctorNoteScalarWhereWithAggregatesInput | DoctorNoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DoctorNote"> | number
    note?: StringWithAggregatesFilter<"DoctorNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DoctorNote"> | Date | string
    doctorId?: IntWithAggregatesFilter<"DoctorNote"> | number
    userId?: IntWithAggregatesFilter<"DoctorNote"> | number
  }

  export type HealtRecordWhereInput = {
    AND?: HealtRecordWhereInput | HealtRecordWhereInput[]
    OR?: HealtRecordWhereInput[]
    NOT?: HealtRecordWhereInput | HealtRecordWhereInput[]
    id?: IntFilter<"HealtRecord"> | number
    type?: StringFilter<"HealtRecord"> | string
    value?: StringFilter<"HealtRecord"> | string
    date?: DateTimeFilter<"HealtRecord"> | Date | string
    userId?: IntFilter<"HealtRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HealtRecordOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: HealtRecordOrderByRelevanceInput
  }

  export type HealtRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HealtRecordWhereInput | HealtRecordWhereInput[]
    OR?: HealtRecordWhereInput[]
    NOT?: HealtRecordWhereInput | HealtRecordWhereInput[]
    type?: StringFilter<"HealtRecord"> | string
    value?: StringFilter<"HealtRecord"> | string
    date?: DateTimeFilter<"HealtRecord"> | Date | string
    userId?: IntFilter<"HealtRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HealtRecordOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: HealtRecordCountOrderByAggregateInput
    _avg?: HealtRecordAvgOrderByAggregateInput
    _max?: HealtRecordMaxOrderByAggregateInput
    _min?: HealtRecordMinOrderByAggregateInput
    _sum?: HealtRecordSumOrderByAggregateInput
  }

  export type HealtRecordScalarWhereWithAggregatesInput = {
    AND?: HealtRecordScalarWhereWithAggregatesInput | HealtRecordScalarWhereWithAggregatesInput[]
    OR?: HealtRecordScalarWhereWithAggregatesInput[]
    NOT?: HealtRecordScalarWhereWithAggregatesInput | HealtRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HealtRecord"> | number
    type?: StringWithAggregatesFilter<"HealtRecord"> | string
    value?: StringWithAggregatesFilter<"HealtRecord"> | string
    date?: DateTimeWithAggregatesFilter<"HealtRecord"> | Date | string
    userId?: IntWithAggregatesFilter<"HealtRecord"> | number
  }

  export type DoctorCreateInput = {
    username: string
    password: string
    specialization: string
    doctorNotes?: DoctorNoteCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    specialization: string
    doctorNotes?: DoctorNoteUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    doctorNotes?: DoctorNoteUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    doctorNotes?: DoctorNoteUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    username: string
    password: string
    specialization: string
  }

  export type DoctorUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    doctorNotes?: DoctorNoteCreateNestedManyWithoutUserInput
    healtRecords?: HealtRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    doctorNotes?: DoctorNoteUncheckedCreateNestedManyWithoutUserInput
    healtRecords?: HealtRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    doctorNotes?: DoctorNoteUpdateManyWithoutUserNestedInput
    healtRecords?: HealtRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    doctorNotes?: DoctorNoteUncheckedUpdateManyWithoutUserNestedInput
    healtRecords?: HealtRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorNoteCreateInput = {
    note: string
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutDoctorNotesInput
    user: UserCreateNestedOneWithoutDoctorNotesInput
  }

  export type DoctorNoteUncheckedCreateInput = {
    id?: number
    note: string
    createdAt?: Date | string
    doctorId: number
    userId: number
  }

  export type DoctorNoteUpdateInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutDoctorNotesNestedInput
    user?: UserUpdateOneRequiredWithoutDoctorNotesNestedInput
  }

  export type DoctorNoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorNoteCreateManyInput = {
    id?: number
    note: string
    createdAt?: Date | string
    doctorId: number
    userId: number
  }

  export type DoctorNoteUpdateManyMutationInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorNoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HealtRecordCreateInput = {
    type: string
    value: string
    date?: Date | string
    user: UserCreateNestedOneWithoutHealtRecordsInput
  }

  export type HealtRecordUncheckedCreateInput = {
    id?: number
    type: string
    value: string
    date?: Date | string
    userId: number
  }

  export type HealtRecordUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHealtRecordsNestedInput
  }

  export type HealtRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HealtRecordCreateManyInput = {
    id?: number
    type: string
    value: string
    date?: Date | string
    userId: number
  }

  export type HealtRecordUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealtRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DoctorNoteListRelationFilter = {
    every?: DoctorNoteWhereInput
    some?: DoctorNoteWhereInput
    none?: DoctorNoteWhereInput
  }

  export type DoctorNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorOrderByRelevanceInput = {
    fields: DoctorOrderByRelevanceFieldEnum | DoctorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type HealtRecordListRelationFilter = {
    every?: HealtRecordWhereInput
    some?: HealtRecordWhereInput
    none?: HealtRecordWhereInput
  }

  export type HealtRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DoctorNoteOrderByRelevanceInput = {
    fields: DoctorNoteOrderByRelevanceFieldEnum | DoctorNoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorNoteCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    doctorId?: SortOrder
    userId?: SortOrder
  }

  export type DoctorNoteAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    userId?: SortOrder
  }

  export type DoctorNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    doctorId?: SortOrder
    userId?: SortOrder
  }

  export type DoctorNoteMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    doctorId?: SortOrder
    userId?: SortOrder
  }

  export type DoctorNoteSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HealtRecordOrderByRelevanceInput = {
    fields: HealtRecordOrderByRelevanceFieldEnum | HealtRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HealtRecordCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type HealtRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type HealtRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type HealtRecordMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type HealtRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DoctorNoteCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorNoteCreateWithoutDoctorInput, DoctorNoteUncheckedCreateWithoutDoctorInput> | DoctorNoteCreateWithoutDoctorInput[] | DoctorNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutDoctorInput | DoctorNoteCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorNoteCreateManyDoctorInputEnvelope
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
  }

  export type DoctorNoteUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorNoteCreateWithoutDoctorInput, DoctorNoteUncheckedCreateWithoutDoctorInput> | DoctorNoteCreateWithoutDoctorInput[] | DoctorNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutDoctorInput | DoctorNoteCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorNoteCreateManyDoctorInputEnvelope
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DoctorNoteUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorNoteCreateWithoutDoctorInput, DoctorNoteUncheckedCreateWithoutDoctorInput> | DoctorNoteCreateWithoutDoctorInput[] | DoctorNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutDoctorInput | DoctorNoteCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorNoteUpsertWithWhereUniqueWithoutDoctorInput | DoctorNoteUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorNoteCreateManyDoctorInputEnvelope
    set?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    disconnect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    delete?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    update?: DoctorNoteUpdateWithWhereUniqueWithoutDoctorInput | DoctorNoteUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorNoteUpdateManyWithWhereWithoutDoctorInput | DoctorNoteUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorNoteScalarWhereInput | DoctorNoteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoctorNoteUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorNoteCreateWithoutDoctorInput, DoctorNoteUncheckedCreateWithoutDoctorInput> | DoctorNoteCreateWithoutDoctorInput[] | DoctorNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutDoctorInput | DoctorNoteCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorNoteUpsertWithWhereUniqueWithoutDoctorInput | DoctorNoteUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorNoteCreateManyDoctorInputEnvelope
    set?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    disconnect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    delete?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    update?: DoctorNoteUpdateWithWhereUniqueWithoutDoctorInput | DoctorNoteUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorNoteUpdateManyWithWhereWithoutDoctorInput | DoctorNoteUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorNoteScalarWhereInput | DoctorNoteScalarWhereInput[]
  }

  export type DoctorNoteCreateNestedManyWithoutUserInput = {
    create?: XOR<DoctorNoteCreateWithoutUserInput, DoctorNoteUncheckedCreateWithoutUserInput> | DoctorNoteCreateWithoutUserInput[] | DoctorNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutUserInput | DoctorNoteCreateOrConnectWithoutUserInput[]
    createMany?: DoctorNoteCreateManyUserInputEnvelope
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
  }

  export type HealtRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<HealtRecordCreateWithoutUserInput, HealtRecordUncheckedCreateWithoutUserInput> | HealtRecordCreateWithoutUserInput[] | HealtRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealtRecordCreateOrConnectWithoutUserInput | HealtRecordCreateOrConnectWithoutUserInput[]
    createMany?: HealtRecordCreateManyUserInputEnvelope
    connect?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
  }

  export type DoctorNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DoctorNoteCreateWithoutUserInput, DoctorNoteUncheckedCreateWithoutUserInput> | DoctorNoteCreateWithoutUserInput[] | DoctorNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutUserInput | DoctorNoteCreateOrConnectWithoutUserInput[]
    createMany?: DoctorNoteCreateManyUserInputEnvelope
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
  }

  export type HealtRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HealtRecordCreateWithoutUserInput, HealtRecordUncheckedCreateWithoutUserInput> | HealtRecordCreateWithoutUserInput[] | HealtRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealtRecordCreateOrConnectWithoutUserInput | HealtRecordCreateOrConnectWithoutUserInput[]
    createMany?: HealtRecordCreateManyUserInputEnvelope
    connect?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
  }

  export type DoctorNoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoctorNoteCreateWithoutUserInput, DoctorNoteUncheckedCreateWithoutUserInput> | DoctorNoteCreateWithoutUserInput[] | DoctorNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutUserInput | DoctorNoteCreateOrConnectWithoutUserInput[]
    upsert?: DoctorNoteUpsertWithWhereUniqueWithoutUserInput | DoctorNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoctorNoteCreateManyUserInputEnvelope
    set?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    disconnect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    delete?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    update?: DoctorNoteUpdateWithWhereUniqueWithoutUserInput | DoctorNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoctorNoteUpdateManyWithWhereWithoutUserInput | DoctorNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoctorNoteScalarWhereInput | DoctorNoteScalarWhereInput[]
  }

  export type HealtRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealtRecordCreateWithoutUserInput, HealtRecordUncheckedCreateWithoutUserInput> | HealtRecordCreateWithoutUserInput[] | HealtRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealtRecordCreateOrConnectWithoutUserInput | HealtRecordCreateOrConnectWithoutUserInput[]
    upsert?: HealtRecordUpsertWithWhereUniqueWithoutUserInput | HealtRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealtRecordCreateManyUserInputEnvelope
    set?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    disconnect?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    delete?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    connect?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    update?: HealtRecordUpdateWithWhereUniqueWithoutUserInput | HealtRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealtRecordUpdateManyWithWhereWithoutUserInput | HealtRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealtRecordScalarWhereInput | HealtRecordScalarWhereInput[]
  }

  export type DoctorNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DoctorNoteCreateWithoutUserInput, DoctorNoteUncheckedCreateWithoutUserInput> | DoctorNoteCreateWithoutUserInput[] | DoctorNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DoctorNoteCreateOrConnectWithoutUserInput | DoctorNoteCreateOrConnectWithoutUserInput[]
    upsert?: DoctorNoteUpsertWithWhereUniqueWithoutUserInput | DoctorNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DoctorNoteCreateManyUserInputEnvelope
    set?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    disconnect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    delete?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    connect?: DoctorNoteWhereUniqueInput | DoctorNoteWhereUniqueInput[]
    update?: DoctorNoteUpdateWithWhereUniqueWithoutUserInput | DoctorNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DoctorNoteUpdateManyWithWhereWithoutUserInput | DoctorNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DoctorNoteScalarWhereInput | DoctorNoteScalarWhereInput[]
  }

  export type HealtRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealtRecordCreateWithoutUserInput, HealtRecordUncheckedCreateWithoutUserInput> | HealtRecordCreateWithoutUserInput[] | HealtRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealtRecordCreateOrConnectWithoutUserInput | HealtRecordCreateOrConnectWithoutUserInput[]
    upsert?: HealtRecordUpsertWithWhereUniqueWithoutUserInput | HealtRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealtRecordCreateManyUserInputEnvelope
    set?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    disconnect?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    delete?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    connect?: HealtRecordWhereUniqueInput | HealtRecordWhereUniqueInput[]
    update?: HealtRecordUpdateWithWhereUniqueWithoutUserInput | HealtRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealtRecordUpdateManyWithWhereWithoutUserInput | HealtRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealtRecordScalarWhereInput | HealtRecordScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutDoctorNotesInput = {
    create?: XOR<DoctorCreateWithoutDoctorNotesInput, DoctorUncheckedCreateWithoutDoctorNotesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorNotesInput
    connect?: DoctorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDoctorNotesInput = {
    create?: XOR<UserCreateWithoutDoctorNotesInput, UserUncheckedCreateWithoutDoctorNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorNotesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DoctorUpdateOneRequiredWithoutDoctorNotesNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorNotesInput, DoctorUncheckedCreateWithoutDoctorNotesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorNotesInput
    upsert?: DoctorUpsertWithoutDoctorNotesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorNotesInput, DoctorUpdateWithoutDoctorNotesInput>, DoctorUncheckedUpdateWithoutDoctorNotesInput>
  }

  export type UserUpdateOneRequiredWithoutDoctorNotesNestedInput = {
    create?: XOR<UserCreateWithoutDoctorNotesInput, UserUncheckedCreateWithoutDoctorNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorNotesInput
    upsert?: UserUpsertWithoutDoctorNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorNotesInput, UserUpdateWithoutDoctorNotesInput>, UserUncheckedUpdateWithoutDoctorNotesInput>
  }

  export type UserCreateNestedOneWithoutHealtRecordsInput = {
    create?: XOR<UserCreateWithoutHealtRecordsInput, UserUncheckedCreateWithoutHealtRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealtRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHealtRecordsNestedInput = {
    create?: XOR<UserCreateWithoutHealtRecordsInput, UserUncheckedCreateWithoutHealtRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealtRecordsInput
    upsert?: UserUpsertWithoutHealtRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHealtRecordsInput, UserUpdateWithoutHealtRecordsInput>, UserUncheckedUpdateWithoutHealtRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DoctorNoteCreateWithoutDoctorInput = {
    note: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorNotesInput
  }

  export type DoctorNoteUncheckedCreateWithoutDoctorInput = {
    id?: number
    note: string
    createdAt?: Date | string
    userId: number
  }

  export type DoctorNoteCreateOrConnectWithoutDoctorInput = {
    where: DoctorNoteWhereUniqueInput
    create: XOR<DoctorNoteCreateWithoutDoctorInput, DoctorNoteUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorNoteCreateManyDoctorInputEnvelope = {
    data: DoctorNoteCreateManyDoctorInput | DoctorNoteCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorNoteUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorNoteWhereUniqueInput
    update: XOR<DoctorNoteUpdateWithoutDoctorInput, DoctorNoteUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorNoteCreateWithoutDoctorInput, DoctorNoteUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorNoteUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorNoteWhereUniqueInput
    data: XOR<DoctorNoteUpdateWithoutDoctorInput, DoctorNoteUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorNoteUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorNoteScalarWhereInput
    data: XOR<DoctorNoteUpdateManyMutationInput, DoctorNoteUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorNoteScalarWhereInput = {
    AND?: DoctorNoteScalarWhereInput | DoctorNoteScalarWhereInput[]
    OR?: DoctorNoteScalarWhereInput[]
    NOT?: DoctorNoteScalarWhereInput | DoctorNoteScalarWhereInput[]
    id?: IntFilter<"DoctorNote"> | number
    note?: StringFilter<"DoctorNote"> | string
    createdAt?: DateTimeFilter<"DoctorNote"> | Date | string
    doctorId?: IntFilter<"DoctorNote"> | number
    userId?: IntFilter<"DoctorNote"> | number
  }

  export type DoctorNoteCreateWithoutUserInput = {
    note: string
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutDoctorNotesInput
  }

  export type DoctorNoteUncheckedCreateWithoutUserInput = {
    id?: number
    note: string
    createdAt?: Date | string
    doctorId: number
  }

  export type DoctorNoteCreateOrConnectWithoutUserInput = {
    where: DoctorNoteWhereUniqueInput
    create: XOR<DoctorNoteCreateWithoutUserInput, DoctorNoteUncheckedCreateWithoutUserInput>
  }

  export type DoctorNoteCreateManyUserInputEnvelope = {
    data: DoctorNoteCreateManyUserInput | DoctorNoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HealtRecordCreateWithoutUserInput = {
    type: string
    value: string
    date?: Date | string
  }

  export type HealtRecordUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    value: string
    date?: Date | string
  }

  export type HealtRecordCreateOrConnectWithoutUserInput = {
    where: HealtRecordWhereUniqueInput
    create: XOR<HealtRecordCreateWithoutUserInput, HealtRecordUncheckedCreateWithoutUserInput>
  }

  export type HealtRecordCreateManyUserInputEnvelope = {
    data: HealtRecordCreateManyUserInput | HealtRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DoctorNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: DoctorNoteWhereUniqueInput
    update: XOR<DoctorNoteUpdateWithoutUserInput, DoctorNoteUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorNoteCreateWithoutUserInput, DoctorNoteUncheckedCreateWithoutUserInput>
  }

  export type DoctorNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: DoctorNoteWhereUniqueInput
    data: XOR<DoctorNoteUpdateWithoutUserInput, DoctorNoteUncheckedUpdateWithoutUserInput>
  }

  export type DoctorNoteUpdateManyWithWhereWithoutUserInput = {
    where: DoctorNoteScalarWhereInput
    data: XOR<DoctorNoteUpdateManyMutationInput, DoctorNoteUncheckedUpdateManyWithoutUserInput>
  }

  export type HealtRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: HealtRecordWhereUniqueInput
    update: XOR<HealtRecordUpdateWithoutUserInput, HealtRecordUncheckedUpdateWithoutUserInput>
    create: XOR<HealtRecordCreateWithoutUserInput, HealtRecordUncheckedCreateWithoutUserInput>
  }

  export type HealtRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: HealtRecordWhereUniqueInput
    data: XOR<HealtRecordUpdateWithoutUserInput, HealtRecordUncheckedUpdateWithoutUserInput>
  }

  export type HealtRecordUpdateManyWithWhereWithoutUserInput = {
    where: HealtRecordScalarWhereInput
    data: XOR<HealtRecordUpdateManyMutationInput, HealtRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type HealtRecordScalarWhereInput = {
    AND?: HealtRecordScalarWhereInput | HealtRecordScalarWhereInput[]
    OR?: HealtRecordScalarWhereInput[]
    NOT?: HealtRecordScalarWhereInput | HealtRecordScalarWhereInput[]
    id?: IntFilter<"HealtRecord"> | number
    type?: StringFilter<"HealtRecord"> | string
    value?: StringFilter<"HealtRecord"> | string
    date?: DateTimeFilter<"HealtRecord"> | Date | string
    userId?: IntFilter<"HealtRecord"> | number
  }

  export type DoctorCreateWithoutDoctorNotesInput = {
    username: string
    password: string
    specialization: string
  }

  export type DoctorUncheckedCreateWithoutDoctorNotesInput = {
    id?: number
    username: string
    password: string
    specialization: string
  }

  export type DoctorCreateOrConnectWithoutDoctorNotesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorNotesInput, DoctorUncheckedCreateWithoutDoctorNotesInput>
  }

  export type UserCreateWithoutDoctorNotesInput = {
    username: string
    password: string
    healtRecords?: HealtRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorNotesInput = {
    id?: number
    username: string
    password: string
    healtRecords?: HealtRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorNotesInput, UserUncheckedCreateWithoutDoctorNotesInput>
  }

  export type DoctorUpsertWithoutDoctorNotesInput = {
    update: XOR<DoctorUpdateWithoutDoctorNotesInput, DoctorUncheckedUpdateWithoutDoctorNotesInput>
    create: XOR<DoctorCreateWithoutDoctorNotesInput, DoctorUncheckedCreateWithoutDoctorNotesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorNotesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorNotesInput, DoctorUncheckedUpdateWithoutDoctorNotesInput>
  }

  export type DoctorUpdateWithoutDoctorNotesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateWithoutDoctorNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutDoctorNotesInput = {
    update: XOR<UserUpdateWithoutDoctorNotesInput, UserUncheckedUpdateWithoutDoctorNotesInput>
    create: XOR<UserCreateWithoutDoctorNotesInput, UserUncheckedCreateWithoutDoctorNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorNotesInput, UserUncheckedUpdateWithoutDoctorNotesInput>
  }

  export type UserUpdateWithoutDoctorNotesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    healtRecords?: HealtRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    healtRecords?: HealtRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHealtRecordsInput = {
    username: string
    password: string
    doctorNotes?: DoctorNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHealtRecordsInput = {
    id?: number
    username: string
    password: string
    doctorNotes?: DoctorNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHealtRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHealtRecordsInput, UserUncheckedCreateWithoutHealtRecordsInput>
  }

  export type UserUpsertWithoutHealtRecordsInput = {
    update: XOR<UserUpdateWithoutHealtRecordsInput, UserUncheckedUpdateWithoutHealtRecordsInput>
    create: XOR<UserCreateWithoutHealtRecordsInput, UserUncheckedCreateWithoutHealtRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHealtRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHealtRecordsInput, UserUncheckedUpdateWithoutHealtRecordsInput>
  }

  export type UserUpdateWithoutHealtRecordsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    doctorNotes?: DoctorNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHealtRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    doctorNotes?: DoctorNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DoctorNoteCreateManyDoctorInput = {
    id?: number
    note: string
    createdAt?: Date | string
    userId: number
  }

  export type DoctorNoteUpdateWithoutDoctorInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNotesNestedInput
  }

  export type DoctorNoteUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorNoteUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorNoteCreateManyUserInput = {
    id?: number
    note: string
    createdAt?: Date | string
    doctorId: number
  }

  export type HealtRecordCreateManyUserInput = {
    id?: number
    type: string
    value: string
    date?: Date | string
  }

  export type DoctorNoteUpdateWithoutUserInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutDoctorNotesNestedInput
  }

  export type DoctorNoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorNoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type HealtRecordUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealtRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealtRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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