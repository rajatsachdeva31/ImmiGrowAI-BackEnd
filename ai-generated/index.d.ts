
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserCareerProfile
 * 
 */
export type UserCareerProfile = $Result.DefaultSelection<Prisma.$UserCareerProfilePayload>
/**
 * Model ResumeAnalysis
 * 
 */
export type ResumeAnalysis = $Result.DefaultSelection<Prisma.$ResumeAnalysisPayload>
/**
 * Model MentorProfile
 * 
 */
export type MentorProfile = $Result.DefaultSelection<Prisma.$MentorProfilePayload>
/**
 * Model MentorshipMatch
 * 
 */
export type MentorshipMatch = $Result.DefaultSelection<Prisma.$MentorshipMatchPayload>
/**
 * Model CoachingSession
 * 
 */
export type CoachingSession = $Result.DefaultSelection<Prisma.$CoachingSessionPayload>
/**
 * Model JobOpportunity
 * 
 */
export type JobOpportunity = $Result.DefaultSelection<Prisma.$JobOpportunityPayload>
/**
 * Model JobMatch
 * 
 */
export type JobMatch = $Result.DefaultSelection<Prisma.$JobMatchPayload>
/**
 * Model SkillGapAnalysis
 * 
 */
export type SkillGapAnalysis = $Result.DefaultSelection<Prisma.$SkillGapAnalysisPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.userCareerProfile`: Exposes CRUD operations for the **UserCareerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCareerProfiles
    * const userCareerProfiles = await prisma.userCareerProfile.findMany()
    * ```
    */
  get userCareerProfile(): Prisma.UserCareerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resumeAnalysis`: Exposes CRUD operations for the **ResumeAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeAnalyses
    * const resumeAnalyses = await prisma.resumeAnalysis.findMany()
    * ```
    */
  get resumeAnalysis(): Prisma.ResumeAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorProfile`: Exposes CRUD operations for the **MentorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorProfiles
    * const mentorProfiles = await prisma.mentorProfile.findMany()
    * ```
    */
  get mentorProfile(): Prisma.MentorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentorshipMatch`: Exposes CRUD operations for the **MentorshipMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentorshipMatches
    * const mentorshipMatches = await prisma.mentorshipMatch.findMany()
    * ```
    */
  get mentorshipMatch(): Prisma.MentorshipMatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachingSession`: Exposes CRUD operations for the **CoachingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachingSessions
    * const coachingSessions = await prisma.coachingSession.findMany()
    * ```
    */
  get coachingSession(): Prisma.CoachingSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobOpportunity`: Exposes CRUD operations for the **JobOpportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobOpportunities
    * const jobOpportunities = await prisma.jobOpportunity.findMany()
    * ```
    */
  get jobOpportunity(): Prisma.JobOpportunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobMatch`: Exposes CRUD operations for the **JobMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobMatches
    * const jobMatches = await prisma.jobMatch.findMany()
    * ```
    */
  get jobMatch(): Prisma.JobMatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillGapAnalysis`: Exposes CRUD operations for the **SkillGapAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillGapAnalyses
    * const skillGapAnalyses = await prisma.skillGapAnalysis.findMany()
    * ```
    */
  get skillGapAnalysis(): Prisma.SkillGapAnalysisDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    UserCareerProfile: 'UserCareerProfile',
    ResumeAnalysis: 'ResumeAnalysis',
    MentorProfile: 'MentorProfile',
    MentorshipMatch: 'MentorshipMatch',
    CoachingSession: 'CoachingSession',
    JobOpportunity: 'JobOpportunity',
    JobMatch: 'JobMatch',
    SkillGapAnalysis: 'SkillGapAnalysis'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userCareerProfile" | "resumeAnalysis" | "mentorProfile" | "mentorshipMatch" | "coachingSession" | "jobOpportunity" | "jobMatch" | "skillGapAnalysis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      UserCareerProfile: {
        payload: Prisma.$UserCareerProfilePayload<ExtArgs>
        fields: Prisma.UserCareerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCareerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCareerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>
          }
          findFirst: {
            args: Prisma.UserCareerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCareerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>
          }
          findMany: {
            args: Prisma.UserCareerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>[]
          }
          create: {
            args: Prisma.UserCareerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>
          }
          createMany: {
            args: Prisma.UserCareerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCareerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>[]
          }
          delete: {
            args: Prisma.UserCareerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>
          }
          update: {
            args: Prisma.UserCareerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserCareerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCareerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCareerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserCareerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProfilePayload>
          }
          aggregate: {
            args: Prisma.UserCareerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCareerProfile>
          }
          groupBy: {
            args: Prisma.UserCareerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCareerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCareerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserCareerProfileCountAggregateOutputType> | number
          }
        }
      }
      ResumeAnalysis: {
        payload: Prisma.$ResumeAnalysisPayload<ExtArgs>
        fields: Prisma.ResumeAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>
          }
          findFirst: {
            args: Prisma.ResumeAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>
          }
          findMany: {
            args: Prisma.ResumeAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>[]
          }
          create: {
            args: Prisma.ResumeAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>
          }
          createMany: {
            args: Prisma.ResumeAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>[]
          }
          delete: {
            args: Prisma.ResumeAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>
          }
          update: {
            args: Prisma.ResumeAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.ResumeAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.ResumeAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeAnalysisPayload>
          }
          aggregate: {
            args: Prisma.ResumeAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeAnalysis>
          }
          groupBy: {
            args: Prisma.ResumeAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeAnalysisCountAggregateOutputType> | number
          }
        }
      }
      MentorProfile: {
        payload: Prisma.$MentorProfilePayload<ExtArgs>
        fields: Prisma.MentorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          findFirst: {
            args: Prisma.MentorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          findMany: {
            args: Prisma.MentorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          create: {
            args: Prisma.MentorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          createMany: {
            args: Prisma.MentorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          delete: {
            args: Prisma.MentorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          update: {
            args: Prisma.MentorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          deleteMany: {
            args: Prisma.MentorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>[]
          }
          upsert: {
            args: Prisma.MentorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorProfilePayload>
          }
          aggregate: {
            args: Prisma.MentorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorProfile>
          }
          groupBy: {
            args: Prisma.MentorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MentorProfileCountAggregateOutputType> | number
          }
        }
      }
      MentorshipMatch: {
        payload: Prisma.$MentorshipMatchPayload<ExtArgs>
        fields: Prisma.MentorshipMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentorshipMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentorshipMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>
          }
          findFirst: {
            args: Prisma.MentorshipMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentorshipMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>
          }
          findMany: {
            args: Prisma.MentorshipMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>[]
          }
          create: {
            args: Prisma.MentorshipMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>
          }
          createMany: {
            args: Prisma.MentorshipMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentorshipMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>[]
          }
          delete: {
            args: Prisma.MentorshipMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>
          }
          update: {
            args: Prisma.MentorshipMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>
          }
          deleteMany: {
            args: Prisma.MentorshipMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentorshipMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentorshipMatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>[]
          }
          upsert: {
            args: Prisma.MentorshipMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentorshipMatchPayload>
          }
          aggregate: {
            args: Prisma.MentorshipMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentorshipMatch>
          }
          groupBy: {
            args: Prisma.MentorshipMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorshipMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentorshipMatchCountArgs<ExtArgs>
            result: $Utils.Optional<MentorshipMatchCountAggregateOutputType> | number
          }
        }
      }
      CoachingSession: {
        payload: Prisma.$CoachingSessionPayload<ExtArgs>
        fields: Prisma.CoachingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>
          }
          findFirst: {
            args: Prisma.CoachingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>
          }
          findMany: {
            args: Prisma.CoachingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>[]
          }
          create: {
            args: Prisma.CoachingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>
          }
          createMany: {
            args: Prisma.CoachingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>[]
          }
          delete: {
            args: Prisma.CoachingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>
          }
          update: {
            args: Prisma.CoachingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>
          }
          deleteMany: {
            args: Prisma.CoachingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>[]
          }
          upsert: {
            args: Prisma.CoachingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingSessionPayload>
          }
          aggregate: {
            args: Prisma.CoachingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachingSession>
          }
          groupBy: {
            args: Prisma.CoachingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<CoachingSessionCountAggregateOutputType> | number
          }
        }
      }
      JobOpportunity: {
        payload: Prisma.$JobOpportunityPayload<ExtArgs>
        fields: Prisma.JobOpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobOpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobOpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>
          }
          findFirst: {
            args: Prisma.JobOpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobOpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>
          }
          findMany: {
            args: Prisma.JobOpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>[]
          }
          create: {
            args: Prisma.JobOpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>
          }
          createMany: {
            args: Prisma.JobOpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobOpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>[]
          }
          delete: {
            args: Prisma.JobOpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>
          }
          update: {
            args: Prisma.JobOpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>
          }
          deleteMany: {
            args: Prisma.JobOpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobOpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobOpportunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>[]
          }
          upsert: {
            args: Prisma.JobOpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpportunityPayload>
          }
          aggregate: {
            args: Prisma.JobOpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobOpportunity>
          }
          groupBy: {
            args: Prisma.JobOpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobOpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobOpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<JobOpportunityCountAggregateOutputType> | number
          }
        }
      }
      JobMatch: {
        payload: Prisma.$JobMatchPayload<ExtArgs>
        fields: Prisma.JobMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          findFirst: {
            args: Prisma.JobMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          findMany: {
            args: Prisma.JobMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>[]
          }
          create: {
            args: Prisma.JobMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          createMany: {
            args: Prisma.JobMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>[]
          }
          delete: {
            args: Prisma.JobMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          update: {
            args: Prisma.JobMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          deleteMany: {
            args: Prisma.JobMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobMatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>[]
          }
          upsert: {
            args: Prisma.JobMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobMatchPayload>
          }
          aggregate: {
            args: Prisma.JobMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobMatch>
          }
          groupBy: {
            args: Prisma.JobMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobMatchCountArgs<ExtArgs>
            result: $Utils.Optional<JobMatchCountAggregateOutputType> | number
          }
        }
      }
      SkillGapAnalysis: {
        payload: Prisma.$SkillGapAnalysisPayload<ExtArgs>
        fields: Prisma.SkillGapAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillGapAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillGapAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          findFirst: {
            args: Prisma.SkillGapAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillGapAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          findMany: {
            args: Prisma.SkillGapAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>[]
          }
          create: {
            args: Prisma.SkillGapAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          createMany: {
            args: Prisma.SkillGapAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillGapAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>[]
          }
          delete: {
            args: Prisma.SkillGapAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          update: {
            args: Prisma.SkillGapAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.SkillGapAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillGapAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillGapAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.SkillGapAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          aggregate: {
            args: Prisma.SkillGapAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillGapAnalysis>
          }
          groupBy: {
            args: Prisma.SkillGapAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGapAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillGapAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<SkillGapAnalysisCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userCareerProfile?: UserCareerProfileOmit
    resumeAnalysis?: ResumeAnalysisOmit
    mentorProfile?: MentorProfileOmit
    mentorshipMatch?: MentorshipMatchOmit
    coachingSession?: CoachingSessionOmit
    jobOpportunity?: JobOpportunityOmit
    jobMatch?: JobMatchOmit
    skillGapAnalysis?: SkillGapAnalysisOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resumeAnalyses: number
    mentorshipMatches: number
    coachingSessions: number
    jobMatches: number
    skillGapAnalyses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumeAnalyses?: boolean | UserCountOutputTypeCountResumeAnalysesArgs
    mentorshipMatches?: boolean | UserCountOutputTypeCountMentorshipMatchesArgs
    coachingSessions?: boolean | UserCountOutputTypeCountCoachingSessionsArgs
    jobMatches?: boolean | UserCountOutputTypeCountJobMatchesArgs
    skillGapAnalyses?: boolean | UserCountOutputTypeCountSkillGapAnalysesArgs
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
  export type UserCountOutputTypeCountResumeAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentorshipMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorshipMatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillGapAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillGapAnalysisWhereInput
  }


  /**
   * Count Type MentorProfileCountOutputType
   */

  export type MentorProfileCountOutputType = {
    mentorshipMatches: number
  }

  export type MentorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentorshipMatches?: boolean | MentorProfileCountOutputTypeCountMentorshipMatchesArgs
  }

  // Custom InputTypes
  /**
   * MentorProfileCountOutputType without action
   */
  export type MentorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfileCountOutputType
     */
    select?: MentorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MentorProfileCountOutputType without action
   */
  export type MentorProfileCountOutputTypeCountMentorshipMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorshipMatchWhereInput
  }


  /**
   * Count Type JobOpportunityCountOutputType
   */

  export type JobOpportunityCountOutputType = {
    jobMatches: number
  }

  export type JobOpportunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobMatches?: boolean | JobOpportunityCountOutputTypeCountJobMatchesArgs
  }

  // Custom InputTypes
  /**
   * JobOpportunityCountOutputType without action
   */
  export type JobOpportunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunityCountOutputType
     */
    select?: JobOpportunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobOpportunityCountOutputType without action
   */
  export type JobOpportunityCountOutputTypeCountJobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMatchWhereInput
  }


  /**
   * Models
   */

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
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    firebaseUid: string | null
    fullName: string | null
    roleId: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    firebaseUid: string | null
    fullName: string | null
    roleId: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firebaseUid: number
    fullName: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firebaseUid?: true
    fullName?: true
    roleId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firebaseUid?: true
    fullName?: true
    roleId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firebaseUid?: true
    fullName?: true
    roleId?: true
    createdAt?: true
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
    email: string
    firebaseUid: string
    fullName: string
    roleId: number
    createdAt: Date
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
    email?: boolean
    firebaseUid?: boolean
    fullName?: boolean
    roleId?: boolean
    createdAt?: boolean
    careerProfile?: boolean | User$careerProfileArgs<ExtArgs>
    resumeAnalyses?: boolean | User$resumeAnalysesArgs<ExtArgs>
    mentorProfile?: boolean | User$mentorProfileArgs<ExtArgs>
    mentorshipMatches?: boolean | User$mentorshipMatchesArgs<ExtArgs>
    coachingSessions?: boolean | User$coachingSessionsArgs<ExtArgs>
    jobMatches?: boolean | User$jobMatchesArgs<ExtArgs>
    skillGapAnalyses?: boolean | User$skillGapAnalysesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firebaseUid?: boolean
    fullName?: boolean
    roleId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firebaseUid?: boolean
    fullName?: boolean
    roleId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firebaseUid?: boolean
    fullName?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firebaseUid" | "fullName" | "roleId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careerProfile?: boolean | User$careerProfileArgs<ExtArgs>
    resumeAnalyses?: boolean | User$resumeAnalysesArgs<ExtArgs>
    mentorProfile?: boolean | User$mentorProfileArgs<ExtArgs>
    mentorshipMatches?: boolean | User$mentorshipMatchesArgs<ExtArgs>
    coachingSessions?: boolean | User$coachingSessionsArgs<ExtArgs>
    jobMatches?: boolean | User$jobMatchesArgs<ExtArgs>
    skillGapAnalyses?: boolean | User$skillGapAnalysesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      careerProfile: Prisma.$UserCareerProfilePayload<ExtArgs> | null
      resumeAnalyses: Prisma.$ResumeAnalysisPayload<ExtArgs>[]
      mentorProfile: Prisma.$MentorProfilePayload<ExtArgs> | null
      mentorshipMatches: Prisma.$MentorshipMatchPayload<ExtArgs>[]
      coachingSessions: Prisma.$CoachingSessionPayload<ExtArgs>[]
      jobMatches: Prisma.$JobMatchPayload<ExtArgs>[]
      skillGapAnalyses: Prisma.$SkillGapAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      firebaseUid: string
      fullName: string
      roleId: number
      createdAt: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    careerProfile<T extends User$careerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$careerProfileArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resumeAnalyses<T extends User$resumeAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumeAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentorProfile<T extends User$mentorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorProfileArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentorshipMatches<T extends User$mentorshipMatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorshipMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachingSessions<T extends User$coachingSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$coachingSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobMatches<T extends User$jobMatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$jobMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillGapAnalyses<T extends User$skillGapAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, User$skillGapAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.careerProfile
   */
  export type User$careerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    where?: UserCareerProfileWhereInput
  }

  /**
   * User.resumeAnalyses
   */
  export type User$resumeAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    where?: ResumeAnalysisWhereInput
    orderBy?: ResumeAnalysisOrderByWithRelationInput | ResumeAnalysisOrderByWithRelationInput[]
    cursor?: ResumeAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeAnalysisScalarFieldEnum | ResumeAnalysisScalarFieldEnum[]
  }

  /**
   * User.mentorProfile
   */
  export type User$mentorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    where?: MentorProfileWhereInput
  }

  /**
   * User.mentorshipMatches
   */
  export type User$mentorshipMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    where?: MentorshipMatchWhereInput
    orderBy?: MentorshipMatchOrderByWithRelationInput | MentorshipMatchOrderByWithRelationInput[]
    cursor?: MentorshipMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorshipMatchScalarFieldEnum | MentorshipMatchScalarFieldEnum[]
  }

  /**
   * User.coachingSessions
   */
  export type User$coachingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    where?: CoachingSessionWhereInput
    orderBy?: CoachingSessionOrderByWithRelationInput | CoachingSessionOrderByWithRelationInput[]
    cursor?: CoachingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachingSessionScalarFieldEnum | CoachingSessionScalarFieldEnum[]
  }

  /**
   * User.jobMatches
   */
  export type User$jobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    where?: JobMatchWhereInput
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    cursor?: JobMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * User.skillGapAnalyses
   */
  export type User$skillGapAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    where?: SkillGapAnalysisWhereInput
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    cursor?: SkillGapAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
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
   * Model UserCareerProfile
   */

  export type AggregateUserCareerProfile = {
    _count: UserCareerProfileCountAggregateOutputType | null
    _avg: UserCareerProfileAvgAggregateOutputType | null
    _sum: UserCareerProfileSumAggregateOutputType | null
    _min: UserCareerProfileMinAggregateOutputType | null
    _max: UserCareerProfileMaxAggregateOutputType | null
  }

  export type UserCareerProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    marketAlignmentScore: number | null
  }

  export type UserCareerProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    marketAlignmentScore: number | null
  }

  export type UserCareerProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    professionalSummary: string | null
    skills: string | null
    targetIndustries: string | null
    careerObjectives: string | null
    marketAlignmentScore: number | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type UserCareerProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    professionalSummary: string | null
    skills: string | null
    targetIndustries: string | null
    careerObjectives: string | null
    marketAlignmentScore: number | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type UserCareerProfileCountAggregateOutputType = {
    id: number
    userId: number
    professionalSummary: number
    skills: number
    targetIndustries: number
    careerObjectives: number
    marketAlignmentScore: number
    lastUpdated: number
    createdAt: number
    _all: number
  }


  export type UserCareerProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    marketAlignmentScore?: true
  }

  export type UserCareerProfileSumAggregateInputType = {
    id?: true
    userId?: true
    marketAlignmentScore?: true
  }

  export type UserCareerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    professionalSummary?: true
    skills?: true
    targetIndustries?: true
    careerObjectives?: true
    marketAlignmentScore?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type UserCareerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    professionalSummary?: true
    skills?: true
    targetIndustries?: true
    careerObjectives?: true
    marketAlignmentScore?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type UserCareerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    professionalSummary?: true
    skills?: true
    targetIndustries?: true
    careerObjectives?: true
    marketAlignmentScore?: true
    lastUpdated?: true
    createdAt?: true
    _all?: true
  }

  export type UserCareerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCareerProfile to aggregate.
     */
    where?: UserCareerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProfiles to fetch.
     */
    orderBy?: UserCareerProfileOrderByWithRelationInput | UserCareerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCareerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCareerProfiles
    **/
    _count?: true | UserCareerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCareerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCareerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCareerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCareerProfileMaxAggregateInputType
  }

  export type GetUserCareerProfileAggregateType<T extends UserCareerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCareerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCareerProfile[P]>
      : GetScalarType<T[P], AggregateUserCareerProfile[P]>
  }




  export type UserCareerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCareerProfileWhereInput
    orderBy?: UserCareerProfileOrderByWithAggregationInput | UserCareerProfileOrderByWithAggregationInput[]
    by: UserCareerProfileScalarFieldEnum[] | UserCareerProfileScalarFieldEnum
    having?: UserCareerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCareerProfileCountAggregateInputType | true
    _avg?: UserCareerProfileAvgAggregateInputType
    _sum?: UserCareerProfileSumAggregateInputType
    _min?: UserCareerProfileMinAggregateInputType
    _max?: UserCareerProfileMaxAggregateInputType
  }

  export type UserCareerProfileGroupByOutputType = {
    id: number
    userId: number
    professionalSummary: string | null
    skills: string | null
    targetIndustries: string | null
    careerObjectives: string | null
    marketAlignmentScore: number | null
    lastUpdated: Date
    createdAt: Date
    _count: UserCareerProfileCountAggregateOutputType | null
    _avg: UserCareerProfileAvgAggregateOutputType | null
    _sum: UserCareerProfileSumAggregateOutputType | null
    _min: UserCareerProfileMinAggregateOutputType | null
    _max: UserCareerProfileMaxAggregateOutputType | null
  }

  type GetUserCareerProfileGroupByPayload<T extends UserCareerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCareerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCareerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCareerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserCareerProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserCareerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    professionalSummary?: boolean
    skills?: boolean
    targetIndustries?: boolean
    careerObjectives?: boolean
    marketAlignmentScore?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCareerProfile"]>

  export type UserCareerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    professionalSummary?: boolean
    skills?: boolean
    targetIndustries?: boolean
    careerObjectives?: boolean
    marketAlignmentScore?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCareerProfile"]>

  export type UserCareerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    professionalSummary?: boolean
    skills?: boolean
    targetIndustries?: boolean
    careerObjectives?: boolean
    marketAlignmentScore?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCareerProfile"]>

  export type UserCareerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    professionalSummary?: boolean
    skills?: boolean
    targetIndustries?: boolean
    careerObjectives?: boolean
    marketAlignmentScore?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
  }

  export type UserCareerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "professionalSummary" | "skills" | "targetIndustries" | "careerObjectives" | "marketAlignmentScore" | "lastUpdated" | "createdAt", ExtArgs["result"]["userCareerProfile"]>
  export type UserCareerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCareerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCareerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCareerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCareerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      professionalSummary: string | null
      skills: string | null
      targetIndustries: string | null
      careerObjectives: string | null
      marketAlignmentScore: number | null
      lastUpdated: Date
      createdAt: Date
    }, ExtArgs["result"]["userCareerProfile"]>
    composites: {}
  }

  type UserCareerProfileGetPayload<S extends boolean | null | undefined | UserCareerProfileDefaultArgs> = $Result.GetResult<Prisma.$UserCareerProfilePayload, S>

  type UserCareerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCareerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCareerProfileCountAggregateInputType | true
    }

  export interface UserCareerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCareerProfile'], meta: { name: 'UserCareerProfile' } }
    /**
     * Find zero or one UserCareerProfile that matches the filter.
     * @param {UserCareerProfileFindUniqueArgs} args - Arguments to find a UserCareerProfile
     * @example
     * // Get one UserCareerProfile
     * const userCareerProfile = await prisma.userCareerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCareerProfileFindUniqueArgs>(args: SelectSubset<T, UserCareerProfileFindUniqueArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCareerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCareerProfileFindUniqueOrThrowArgs} args - Arguments to find a UserCareerProfile
     * @example
     * // Get one UserCareerProfile
     * const userCareerProfile = await prisma.userCareerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCareerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCareerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCareerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProfileFindFirstArgs} args - Arguments to find a UserCareerProfile
     * @example
     * // Get one UserCareerProfile
     * const userCareerProfile = await prisma.userCareerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCareerProfileFindFirstArgs>(args?: SelectSubset<T, UserCareerProfileFindFirstArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCareerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProfileFindFirstOrThrowArgs} args - Arguments to find a UserCareerProfile
     * @example
     * // Get one UserCareerProfile
     * const userCareerProfile = await prisma.userCareerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCareerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCareerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCareerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCareerProfiles
     * const userCareerProfiles = await prisma.userCareerProfile.findMany()
     * 
     * // Get first 10 UserCareerProfiles
     * const userCareerProfiles = await prisma.userCareerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCareerProfileWithIdOnly = await prisma.userCareerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCareerProfileFindManyArgs>(args?: SelectSubset<T, UserCareerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCareerProfile.
     * @param {UserCareerProfileCreateArgs} args - Arguments to create a UserCareerProfile.
     * @example
     * // Create one UserCareerProfile
     * const UserCareerProfile = await prisma.userCareerProfile.create({
     *   data: {
     *     // ... data to create a UserCareerProfile
     *   }
     * })
     * 
     */
    create<T extends UserCareerProfileCreateArgs>(args: SelectSubset<T, UserCareerProfileCreateArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCareerProfiles.
     * @param {UserCareerProfileCreateManyArgs} args - Arguments to create many UserCareerProfiles.
     * @example
     * // Create many UserCareerProfiles
     * const userCareerProfile = await prisma.userCareerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCareerProfileCreateManyArgs>(args?: SelectSubset<T, UserCareerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCareerProfiles and returns the data saved in the database.
     * @param {UserCareerProfileCreateManyAndReturnArgs} args - Arguments to create many UserCareerProfiles.
     * @example
     * // Create many UserCareerProfiles
     * const userCareerProfile = await prisma.userCareerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCareerProfiles and only return the `id`
     * const userCareerProfileWithIdOnly = await prisma.userCareerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCareerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCareerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCareerProfile.
     * @param {UserCareerProfileDeleteArgs} args - Arguments to delete one UserCareerProfile.
     * @example
     * // Delete one UserCareerProfile
     * const UserCareerProfile = await prisma.userCareerProfile.delete({
     *   where: {
     *     // ... filter to delete one UserCareerProfile
     *   }
     * })
     * 
     */
    delete<T extends UserCareerProfileDeleteArgs>(args: SelectSubset<T, UserCareerProfileDeleteArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCareerProfile.
     * @param {UserCareerProfileUpdateArgs} args - Arguments to update one UserCareerProfile.
     * @example
     * // Update one UserCareerProfile
     * const userCareerProfile = await prisma.userCareerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCareerProfileUpdateArgs>(args: SelectSubset<T, UserCareerProfileUpdateArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCareerProfiles.
     * @param {UserCareerProfileDeleteManyArgs} args - Arguments to filter UserCareerProfiles to delete.
     * @example
     * // Delete a few UserCareerProfiles
     * const { count } = await prisma.userCareerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCareerProfileDeleteManyArgs>(args?: SelectSubset<T, UserCareerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCareerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCareerProfiles
     * const userCareerProfile = await prisma.userCareerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCareerProfileUpdateManyArgs>(args: SelectSubset<T, UserCareerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCareerProfiles and returns the data updated in the database.
     * @param {UserCareerProfileUpdateManyAndReturnArgs} args - Arguments to update many UserCareerProfiles.
     * @example
     * // Update many UserCareerProfiles
     * const userCareerProfile = await prisma.userCareerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCareerProfiles and only return the `id`
     * const userCareerProfileWithIdOnly = await prisma.userCareerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCareerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCareerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCareerProfile.
     * @param {UserCareerProfileUpsertArgs} args - Arguments to update or create a UserCareerProfile.
     * @example
     * // Update or create a UserCareerProfile
     * const userCareerProfile = await prisma.userCareerProfile.upsert({
     *   create: {
     *     // ... data to create a UserCareerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCareerProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserCareerProfileUpsertArgs>(args: SelectSubset<T, UserCareerProfileUpsertArgs<ExtArgs>>): Prisma__UserCareerProfileClient<$Result.GetResult<Prisma.$UserCareerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCareerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProfileCountArgs} args - Arguments to filter UserCareerProfiles to count.
     * @example
     * // Count the number of UserCareerProfiles
     * const count = await prisma.userCareerProfile.count({
     *   where: {
     *     // ... the filter for the UserCareerProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserCareerProfileCountArgs>(
      args?: Subset<T, UserCareerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCareerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCareerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCareerProfileAggregateArgs>(args: Subset<T, UserCareerProfileAggregateArgs>): Prisma.PrismaPromise<GetUserCareerProfileAggregateType<T>>

    /**
     * Group by UserCareerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProfileGroupByArgs} args - Group by arguments.
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
      T extends UserCareerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCareerProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserCareerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCareerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCareerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCareerProfile model
   */
  readonly fields: UserCareerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCareerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCareerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserCareerProfile model
   */ 
  interface UserCareerProfileFieldRefs {
    readonly id: FieldRef<"UserCareerProfile", 'Int'>
    readonly userId: FieldRef<"UserCareerProfile", 'Int'>
    readonly professionalSummary: FieldRef<"UserCareerProfile", 'String'>
    readonly skills: FieldRef<"UserCareerProfile", 'String'>
    readonly targetIndustries: FieldRef<"UserCareerProfile", 'String'>
    readonly careerObjectives: FieldRef<"UserCareerProfile", 'String'>
    readonly marketAlignmentScore: FieldRef<"UserCareerProfile", 'Float'>
    readonly lastUpdated: FieldRef<"UserCareerProfile", 'DateTime'>
    readonly createdAt: FieldRef<"UserCareerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCareerProfile findUnique
   */
  export type UserCareerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProfile to fetch.
     */
    where: UserCareerProfileWhereUniqueInput
  }

  /**
   * UserCareerProfile findUniqueOrThrow
   */
  export type UserCareerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProfile to fetch.
     */
    where: UserCareerProfileWhereUniqueInput
  }

  /**
   * UserCareerProfile findFirst
   */
  export type UserCareerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProfile to fetch.
     */
    where?: UserCareerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProfiles to fetch.
     */
    orderBy?: UserCareerProfileOrderByWithRelationInput | UserCareerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCareerProfiles.
     */
    cursor?: UserCareerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCareerProfiles.
     */
    distinct?: UserCareerProfileScalarFieldEnum | UserCareerProfileScalarFieldEnum[]
  }

  /**
   * UserCareerProfile findFirstOrThrow
   */
  export type UserCareerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProfile to fetch.
     */
    where?: UserCareerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProfiles to fetch.
     */
    orderBy?: UserCareerProfileOrderByWithRelationInput | UserCareerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCareerProfiles.
     */
    cursor?: UserCareerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCareerProfiles.
     */
    distinct?: UserCareerProfileScalarFieldEnum | UserCareerProfileScalarFieldEnum[]
  }

  /**
   * UserCareerProfile findMany
   */
  export type UserCareerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProfiles to fetch.
     */
    where?: UserCareerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProfiles to fetch.
     */
    orderBy?: UserCareerProfileOrderByWithRelationInput | UserCareerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCareerProfiles.
     */
    cursor?: UserCareerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProfiles.
     */
    skip?: number
    distinct?: UserCareerProfileScalarFieldEnum | UserCareerProfileScalarFieldEnum[]
  }

  /**
   * UserCareerProfile create
   */
  export type UserCareerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCareerProfile.
     */
    data: XOR<UserCareerProfileCreateInput, UserCareerProfileUncheckedCreateInput>
  }

  /**
   * UserCareerProfile createMany
   */
  export type UserCareerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCareerProfiles.
     */
    data: UserCareerProfileCreateManyInput | UserCareerProfileCreateManyInput[]
  }

  /**
   * UserCareerProfile createManyAndReturn
   */
  export type UserCareerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserCareerProfiles.
     */
    data: UserCareerProfileCreateManyInput | UserCareerProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCareerProfile update
   */
  export type UserCareerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCareerProfile.
     */
    data: XOR<UserCareerProfileUpdateInput, UserCareerProfileUncheckedUpdateInput>
    /**
     * Choose, which UserCareerProfile to update.
     */
    where: UserCareerProfileWhereUniqueInput
  }

  /**
   * UserCareerProfile updateMany
   */
  export type UserCareerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCareerProfiles.
     */
    data: XOR<UserCareerProfileUpdateManyMutationInput, UserCareerProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserCareerProfiles to update
     */
    where?: UserCareerProfileWhereInput
    /**
     * Limit how many UserCareerProfiles to update.
     */
    limit?: number
  }

  /**
   * UserCareerProfile updateManyAndReturn
   */
  export type UserCareerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserCareerProfiles.
     */
    data: XOR<UserCareerProfileUpdateManyMutationInput, UserCareerProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserCareerProfiles to update
     */
    where?: UserCareerProfileWhereInput
    /**
     * Limit how many UserCareerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCareerProfile upsert
   */
  export type UserCareerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCareerProfile to update in case it exists.
     */
    where: UserCareerProfileWhereUniqueInput
    /**
     * In case the UserCareerProfile found by the `where` argument doesn't exist, create a new UserCareerProfile with this data.
     */
    create: XOR<UserCareerProfileCreateInput, UserCareerProfileUncheckedCreateInput>
    /**
     * In case the UserCareerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCareerProfileUpdateInput, UserCareerProfileUncheckedUpdateInput>
  }

  /**
   * UserCareerProfile delete
   */
  export type UserCareerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
    /**
     * Filter which UserCareerProfile to delete.
     */
    where: UserCareerProfileWhereUniqueInput
  }

  /**
   * UserCareerProfile deleteMany
   */
  export type UserCareerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCareerProfiles to delete
     */
    where?: UserCareerProfileWhereInput
    /**
     * Limit how many UserCareerProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserCareerProfile without action
   */
  export type UserCareerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProfile
     */
    select?: UserCareerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProfile
     */
    omit?: UserCareerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProfileInclude<ExtArgs> | null
  }


  /**
   * Model ResumeAnalysis
   */

  export type AggregateResumeAnalysis = {
    _count: ResumeAnalysisCountAggregateOutputType | null
    _avg: ResumeAnalysisAvgAggregateOutputType | null
    _sum: ResumeAnalysisSumAggregateOutputType | null
    _min: ResumeAnalysisMinAggregateOutputType | null
    _max: ResumeAnalysisMaxAggregateOutputType | null
  }

  export type ResumeAnalysisAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    fileSize: number | null
  }

  export type ResumeAnalysisSumAggregateOutputType = {
    id: number | null
    userId: number | null
    fileSize: number | null
  }

  export type ResumeAnalysisMinAggregateOutputType = {
    id: number | null
    userId: number | null
    personalInfo: string | null
    skills: string | null
    workExperience: string | null
    education: string | null
    confidenceScores: string | null
    rawText: string | null
    originalFileName: string | null
    fileSize: number | null
    processingStatus: string | null
    createdAt: Date | null
  }

  export type ResumeAnalysisMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    personalInfo: string | null
    skills: string | null
    workExperience: string | null
    education: string | null
    confidenceScores: string | null
    rawText: string | null
    originalFileName: string | null
    fileSize: number | null
    processingStatus: string | null
    createdAt: Date | null
  }

  export type ResumeAnalysisCountAggregateOutputType = {
    id: number
    userId: number
    personalInfo: number
    skills: number
    workExperience: number
    education: number
    confidenceScores: number
    rawText: number
    originalFileName: number
    fileSize: number
    processingStatus: number
    createdAt: number
    _all: number
  }


  export type ResumeAnalysisAvgAggregateInputType = {
    id?: true
    userId?: true
    fileSize?: true
  }

  export type ResumeAnalysisSumAggregateInputType = {
    id?: true
    userId?: true
    fileSize?: true
  }

  export type ResumeAnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    personalInfo?: true
    skills?: true
    workExperience?: true
    education?: true
    confidenceScores?: true
    rawText?: true
    originalFileName?: true
    fileSize?: true
    processingStatus?: true
    createdAt?: true
  }

  export type ResumeAnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    personalInfo?: true
    skills?: true
    workExperience?: true
    education?: true
    confidenceScores?: true
    rawText?: true
    originalFileName?: true
    fileSize?: true
    processingStatus?: true
    createdAt?: true
  }

  export type ResumeAnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    personalInfo?: true
    skills?: true
    workExperience?: true
    education?: true
    confidenceScores?: true
    rawText?: true
    originalFileName?: true
    fileSize?: true
    processingStatus?: true
    createdAt?: true
    _all?: true
  }

  export type ResumeAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeAnalysis to aggregate.
     */
    where?: ResumeAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeAnalyses to fetch.
     */
    orderBy?: ResumeAnalysisOrderByWithRelationInput | ResumeAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeAnalyses
    **/
    _count?: true | ResumeAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeAnalysisMaxAggregateInputType
  }

  export type GetResumeAnalysisAggregateType<T extends ResumeAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeAnalysis[P]>
      : GetScalarType<T[P], AggregateResumeAnalysis[P]>
  }




  export type ResumeAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeAnalysisWhereInput
    orderBy?: ResumeAnalysisOrderByWithAggregationInput | ResumeAnalysisOrderByWithAggregationInput[]
    by: ResumeAnalysisScalarFieldEnum[] | ResumeAnalysisScalarFieldEnum
    having?: ResumeAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeAnalysisCountAggregateInputType | true
    _avg?: ResumeAnalysisAvgAggregateInputType
    _sum?: ResumeAnalysisSumAggregateInputType
    _min?: ResumeAnalysisMinAggregateInputType
    _max?: ResumeAnalysisMaxAggregateInputType
  }

  export type ResumeAnalysisGroupByOutputType = {
    id: number
    userId: number
    personalInfo: string | null
    skills: string | null
    workExperience: string | null
    education: string | null
    confidenceScores: string | null
    rawText: string | null
    originalFileName: string | null
    fileSize: number | null
    processingStatus: string
    createdAt: Date
    _count: ResumeAnalysisCountAggregateOutputType | null
    _avg: ResumeAnalysisAvgAggregateOutputType | null
    _sum: ResumeAnalysisSumAggregateOutputType | null
    _min: ResumeAnalysisMinAggregateOutputType | null
    _max: ResumeAnalysisMaxAggregateOutputType | null
  }

  type GetResumeAnalysisGroupByPayload<T extends ResumeAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type ResumeAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personalInfo?: boolean
    skills?: boolean
    workExperience?: boolean
    education?: boolean
    confidenceScores?: boolean
    rawText?: boolean
    originalFileName?: boolean
    fileSize?: boolean
    processingStatus?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeAnalysis"]>

  export type ResumeAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personalInfo?: boolean
    skills?: boolean
    workExperience?: boolean
    education?: boolean
    confidenceScores?: boolean
    rawText?: boolean
    originalFileName?: boolean
    fileSize?: boolean
    processingStatus?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeAnalysis"]>

  export type ResumeAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personalInfo?: boolean
    skills?: boolean
    workExperience?: boolean
    education?: boolean
    confidenceScores?: boolean
    rawText?: boolean
    originalFileName?: boolean
    fileSize?: boolean
    processingStatus?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeAnalysis"]>

  export type ResumeAnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    personalInfo?: boolean
    skills?: boolean
    workExperience?: boolean
    education?: boolean
    confidenceScores?: boolean
    rawText?: boolean
    originalFileName?: boolean
    fileSize?: boolean
    processingStatus?: boolean
    createdAt?: boolean
  }

  export type ResumeAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "personalInfo" | "skills" | "workExperience" | "education" | "confidenceScores" | "rawText" | "originalFileName" | "fileSize" | "processingStatus" | "createdAt", ExtArgs["result"]["resumeAnalysis"]>
  export type ResumeAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumeAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      personalInfo: string | null
      skills: string | null
      workExperience: string | null
      education: string | null
      confidenceScores: string | null
      rawText: string | null
      originalFileName: string | null
      fileSize: number | null
      processingStatus: string
      createdAt: Date
    }, ExtArgs["result"]["resumeAnalysis"]>
    composites: {}
  }

  type ResumeAnalysisGetPayload<S extends boolean | null | undefined | ResumeAnalysisDefaultArgs> = $Result.GetResult<Prisma.$ResumeAnalysisPayload, S>

  type ResumeAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeAnalysisCountAggregateInputType | true
    }

  export interface ResumeAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeAnalysis'], meta: { name: 'ResumeAnalysis' } }
    /**
     * Find zero or one ResumeAnalysis that matches the filter.
     * @param {ResumeAnalysisFindUniqueArgs} args - Arguments to find a ResumeAnalysis
     * @example
     * // Get one ResumeAnalysis
     * const resumeAnalysis = await prisma.resumeAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeAnalysisFindUniqueArgs>(args: SelectSubset<T, ResumeAnalysisFindUniqueArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResumeAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeAnalysisFindUniqueOrThrowArgs} args - Arguments to find a ResumeAnalysis
     * @example
     * // Get one ResumeAnalysis
     * const resumeAnalysis = await prisma.resumeAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAnalysisFindFirstArgs} args - Arguments to find a ResumeAnalysis
     * @example
     * // Get one ResumeAnalysis
     * const resumeAnalysis = await prisma.resumeAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeAnalysisFindFirstArgs>(args?: SelectSubset<T, ResumeAnalysisFindFirstArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAnalysisFindFirstOrThrowArgs} args - Arguments to find a ResumeAnalysis
     * @example
     * // Get one ResumeAnalysis
     * const resumeAnalysis = await prisma.resumeAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResumeAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeAnalyses
     * const resumeAnalyses = await prisma.resumeAnalysis.findMany()
     * 
     * // Get first 10 ResumeAnalyses
     * const resumeAnalyses = await prisma.resumeAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeAnalysisWithIdOnly = await prisma.resumeAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeAnalysisFindManyArgs>(args?: SelectSubset<T, ResumeAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResumeAnalysis.
     * @param {ResumeAnalysisCreateArgs} args - Arguments to create a ResumeAnalysis.
     * @example
     * // Create one ResumeAnalysis
     * const ResumeAnalysis = await prisma.resumeAnalysis.create({
     *   data: {
     *     // ... data to create a ResumeAnalysis
     *   }
     * })
     * 
     */
    create<T extends ResumeAnalysisCreateArgs>(args: SelectSubset<T, ResumeAnalysisCreateArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResumeAnalyses.
     * @param {ResumeAnalysisCreateManyArgs} args - Arguments to create many ResumeAnalyses.
     * @example
     * // Create many ResumeAnalyses
     * const resumeAnalysis = await prisma.resumeAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeAnalysisCreateManyArgs>(args?: SelectSubset<T, ResumeAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeAnalyses and returns the data saved in the database.
     * @param {ResumeAnalysisCreateManyAndReturnArgs} args - Arguments to create many ResumeAnalyses.
     * @example
     * // Create many ResumeAnalyses
     * const resumeAnalysis = await prisma.resumeAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeAnalyses and only return the `id`
     * const resumeAnalysisWithIdOnly = await prisma.resumeAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResumeAnalysis.
     * @param {ResumeAnalysisDeleteArgs} args - Arguments to delete one ResumeAnalysis.
     * @example
     * // Delete one ResumeAnalysis
     * const ResumeAnalysis = await prisma.resumeAnalysis.delete({
     *   where: {
     *     // ... filter to delete one ResumeAnalysis
     *   }
     * })
     * 
     */
    delete<T extends ResumeAnalysisDeleteArgs>(args: SelectSubset<T, ResumeAnalysisDeleteArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResumeAnalysis.
     * @param {ResumeAnalysisUpdateArgs} args - Arguments to update one ResumeAnalysis.
     * @example
     * // Update one ResumeAnalysis
     * const resumeAnalysis = await prisma.resumeAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeAnalysisUpdateArgs>(args: SelectSubset<T, ResumeAnalysisUpdateArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResumeAnalyses.
     * @param {ResumeAnalysisDeleteManyArgs} args - Arguments to filter ResumeAnalyses to delete.
     * @example
     * // Delete a few ResumeAnalyses
     * const { count } = await prisma.resumeAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeAnalysisDeleteManyArgs>(args?: SelectSubset<T, ResumeAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeAnalyses
     * const resumeAnalysis = await prisma.resumeAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeAnalysisUpdateManyArgs>(args: SelectSubset<T, ResumeAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeAnalyses and returns the data updated in the database.
     * @param {ResumeAnalysisUpdateManyAndReturnArgs} args - Arguments to update many ResumeAnalyses.
     * @example
     * // Update many ResumeAnalyses
     * const resumeAnalysis = await prisma.resumeAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResumeAnalyses and only return the `id`
     * const resumeAnalysisWithIdOnly = await prisma.resumeAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResumeAnalysis.
     * @param {ResumeAnalysisUpsertArgs} args - Arguments to update or create a ResumeAnalysis.
     * @example
     * // Update or create a ResumeAnalysis
     * const resumeAnalysis = await prisma.resumeAnalysis.upsert({
     *   create: {
     *     // ... data to create a ResumeAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends ResumeAnalysisUpsertArgs>(args: SelectSubset<T, ResumeAnalysisUpsertArgs<ExtArgs>>): Prisma__ResumeAnalysisClient<$Result.GetResult<Prisma.$ResumeAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResumeAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAnalysisCountArgs} args - Arguments to filter ResumeAnalyses to count.
     * @example
     * // Count the number of ResumeAnalyses
     * const count = await prisma.resumeAnalysis.count({
     *   where: {
     *     // ... the filter for the ResumeAnalyses we want to count
     *   }
     * })
    **/
    count<T extends ResumeAnalysisCountArgs>(
      args?: Subset<T, ResumeAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAnalysisAggregateArgs>(args: Subset<T, ResumeAnalysisAggregateArgs>): Prisma.PrismaPromise<GetResumeAnalysisAggregateType<T>>

    /**
     * Group by ResumeAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAnalysisGroupByArgs} args - Group by arguments.
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
      T extends ResumeAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: ResumeAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeAnalysis model
   */
  readonly fields: ResumeAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ResumeAnalysis model
   */ 
  interface ResumeAnalysisFieldRefs {
    readonly id: FieldRef<"ResumeAnalysis", 'Int'>
    readonly userId: FieldRef<"ResumeAnalysis", 'Int'>
    readonly personalInfo: FieldRef<"ResumeAnalysis", 'String'>
    readonly skills: FieldRef<"ResumeAnalysis", 'String'>
    readonly workExperience: FieldRef<"ResumeAnalysis", 'String'>
    readonly education: FieldRef<"ResumeAnalysis", 'String'>
    readonly confidenceScores: FieldRef<"ResumeAnalysis", 'String'>
    readonly rawText: FieldRef<"ResumeAnalysis", 'String'>
    readonly originalFileName: FieldRef<"ResumeAnalysis", 'String'>
    readonly fileSize: FieldRef<"ResumeAnalysis", 'Int'>
    readonly processingStatus: FieldRef<"ResumeAnalysis", 'String'>
    readonly createdAt: FieldRef<"ResumeAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResumeAnalysis findUnique
   */
  export type ResumeAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ResumeAnalysis to fetch.
     */
    where: ResumeAnalysisWhereUniqueInput
  }

  /**
   * ResumeAnalysis findUniqueOrThrow
   */
  export type ResumeAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ResumeAnalysis to fetch.
     */
    where: ResumeAnalysisWhereUniqueInput
  }

  /**
   * ResumeAnalysis findFirst
   */
  export type ResumeAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ResumeAnalysis to fetch.
     */
    where?: ResumeAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeAnalyses to fetch.
     */
    orderBy?: ResumeAnalysisOrderByWithRelationInput | ResumeAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeAnalyses.
     */
    cursor?: ResumeAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeAnalyses.
     */
    distinct?: ResumeAnalysisScalarFieldEnum | ResumeAnalysisScalarFieldEnum[]
  }

  /**
   * ResumeAnalysis findFirstOrThrow
   */
  export type ResumeAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ResumeAnalysis to fetch.
     */
    where?: ResumeAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeAnalyses to fetch.
     */
    orderBy?: ResumeAnalysisOrderByWithRelationInput | ResumeAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeAnalyses.
     */
    cursor?: ResumeAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeAnalyses.
     */
    distinct?: ResumeAnalysisScalarFieldEnum | ResumeAnalysisScalarFieldEnum[]
  }

  /**
   * ResumeAnalysis findMany
   */
  export type ResumeAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ResumeAnalyses to fetch.
     */
    where?: ResumeAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeAnalyses to fetch.
     */
    orderBy?: ResumeAnalysisOrderByWithRelationInput | ResumeAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeAnalyses.
     */
    cursor?: ResumeAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeAnalyses.
     */
    skip?: number
    distinct?: ResumeAnalysisScalarFieldEnum | ResumeAnalysisScalarFieldEnum[]
  }

  /**
   * ResumeAnalysis create
   */
  export type ResumeAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeAnalysis.
     */
    data: XOR<ResumeAnalysisCreateInput, ResumeAnalysisUncheckedCreateInput>
  }

  /**
   * ResumeAnalysis createMany
   */
  export type ResumeAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeAnalyses.
     */
    data: ResumeAnalysisCreateManyInput | ResumeAnalysisCreateManyInput[]
  }

  /**
   * ResumeAnalysis createManyAndReturn
   */
  export type ResumeAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many ResumeAnalyses.
     */
    data: ResumeAnalysisCreateManyInput | ResumeAnalysisCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeAnalysis update
   */
  export type ResumeAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeAnalysis.
     */
    data: XOR<ResumeAnalysisUpdateInput, ResumeAnalysisUncheckedUpdateInput>
    /**
     * Choose, which ResumeAnalysis to update.
     */
    where: ResumeAnalysisWhereUniqueInput
  }

  /**
   * ResumeAnalysis updateMany
   */
  export type ResumeAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeAnalyses.
     */
    data: XOR<ResumeAnalysisUpdateManyMutationInput, ResumeAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ResumeAnalyses to update
     */
    where?: ResumeAnalysisWhereInput
    /**
     * Limit how many ResumeAnalyses to update.
     */
    limit?: number
  }

  /**
   * ResumeAnalysis updateManyAndReturn
   */
  export type ResumeAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update ResumeAnalyses.
     */
    data: XOR<ResumeAnalysisUpdateManyMutationInput, ResumeAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ResumeAnalyses to update
     */
    where?: ResumeAnalysisWhereInput
    /**
     * Limit how many ResumeAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeAnalysis upsert
   */
  export type ResumeAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeAnalysis to update in case it exists.
     */
    where: ResumeAnalysisWhereUniqueInput
    /**
     * In case the ResumeAnalysis found by the `where` argument doesn't exist, create a new ResumeAnalysis with this data.
     */
    create: XOR<ResumeAnalysisCreateInput, ResumeAnalysisUncheckedCreateInput>
    /**
     * In case the ResumeAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeAnalysisUpdateInput, ResumeAnalysisUncheckedUpdateInput>
  }

  /**
   * ResumeAnalysis delete
   */
  export type ResumeAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
    /**
     * Filter which ResumeAnalysis to delete.
     */
    where: ResumeAnalysisWhereUniqueInput
  }

  /**
   * ResumeAnalysis deleteMany
   */
  export type ResumeAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeAnalyses to delete
     */
    where?: ResumeAnalysisWhereInput
    /**
     * Limit how many ResumeAnalyses to delete.
     */
    limit?: number
  }

  /**
   * ResumeAnalysis without action
   */
  export type ResumeAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeAnalysis
     */
    select?: ResumeAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeAnalysis
     */
    omit?: ResumeAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model MentorProfile
   */

  export type AggregateMentorProfile = {
    _count: MentorProfileCountAggregateOutputType | null
    _avg: MentorProfileAvgAggregateOutputType | null
    _sum: MentorProfileSumAggregateOutputType | null
    _min: MentorProfileMinAggregateOutputType | null
    _max: MentorProfileMaxAggregateOutputType | null
  }

  export type MentorProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    yearsOfExperience: number | null
  }

  export type MentorProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    yearsOfExperience: number | null
  }

  export type MentorProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    industry: string | null
    expertise: string | null
    yearsOfExperience: number | null
    availableHours: string | null
    bio: string | null
    linkedInProfile: string | null
    languages: string | null
    culturalBackground: string | null
    createdAt: Date | null
  }

  export type MentorProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    industry: string | null
    expertise: string | null
    yearsOfExperience: number | null
    availableHours: string | null
    bio: string | null
    linkedInProfile: string | null
    languages: string | null
    culturalBackground: string | null
    createdAt: Date | null
  }

  export type MentorProfileCountAggregateOutputType = {
    id: number
    userId: number
    industry: number
    expertise: number
    yearsOfExperience: number
    availableHours: number
    bio: number
    linkedInProfile: number
    languages: number
    culturalBackground: number
    createdAt: number
    _all: number
  }


  export type MentorProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    yearsOfExperience?: true
  }

  export type MentorProfileSumAggregateInputType = {
    id?: true
    userId?: true
    yearsOfExperience?: true
  }

  export type MentorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    industry?: true
    expertise?: true
    yearsOfExperience?: true
    availableHours?: true
    bio?: true
    linkedInProfile?: true
    languages?: true
    culturalBackground?: true
    createdAt?: true
  }

  export type MentorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    industry?: true
    expertise?: true
    yearsOfExperience?: true
    availableHours?: true
    bio?: true
    linkedInProfile?: true
    languages?: true
    culturalBackground?: true
    createdAt?: true
  }

  export type MentorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    industry?: true
    expertise?: true
    yearsOfExperience?: true
    availableHours?: true
    bio?: true
    linkedInProfile?: true
    languages?: true
    culturalBackground?: true
    createdAt?: true
    _all?: true
  }

  export type MentorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfile to aggregate.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorProfiles
    **/
    _count?: true | MentorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorProfileMaxAggregateInputType
  }

  export type GetMentorProfileAggregateType<T extends MentorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorProfile[P]>
      : GetScalarType<T[P], AggregateMentorProfile[P]>
  }




  export type MentorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorProfileWhereInput
    orderBy?: MentorProfileOrderByWithAggregationInput | MentorProfileOrderByWithAggregationInput[]
    by: MentorProfileScalarFieldEnum[] | MentorProfileScalarFieldEnum
    having?: MentorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorProfileCountAggregateInputType | true
    _avg?: MentorProfileAvgAggregateInputType
    _sum?: MentorProfileSumAggregateInputType
    _min?: MentorProfileMinAggregateInputType
    _max?: MentorProfileMaxAggregateInputType
  }

  export type MentorProfileGroupByOutputType = {
    id: number
    userId: number
    industry: string
    expertise: string | null
    yearsOfExperience: number
    availableHours: string | null
    bio: string | null
    linkedInProfile: string | null
    languages: string | null
    culturalBackground: string | null
    createdAt: Date
    _count: MentorProfileCountAggregateOutputType | null
    _avg: MentorProfileAvgAggregateOutputType | null
    _sum: MentorProfileSumAggregateOutputType | null
    _min: MentorProfileMinAggregateOutputType | null
    _max: MentorProfileMaxAggregateOutputType | null
  }

  type GetMentorProfileGroupByPayload<T extends MentorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MentorProfileGroupByOutputType[P]>
        }
      >
    >


  export type MentorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    industry?: boolean
    expertise?: boolean
    yearsOfExperience?: boolean
    availableHours?: boolean
    bio?: boolean
    linkedInProfile?: boolean
    languages?: boolean
    culturalBackground?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mentorshipMatches?: boolean | MentorProfile$mentorshipMatchesArgs<ExtArgs>
    _count?: boolean | MentorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    industry?: boolean
    expertise?: boolean
    yearsOfExperience?: boolean
    availableHours?: boolean
    bio?: boolean
    linkedInProfile?: boolean
    languages?: boolean
    culturalBackground?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    industry?: boolean
    expertise?: boolean
    yearsOfExperience?: boolean
    availableHours?: boolean
    bio?: boolean
    linkedInProfile?: boolean
    languages?: boolean
    culturalBackground?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorProfile"]>

  export type MentorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    industry?: boolean
    expertise?: boolean
    yearsOfExperience?: boolean
    availableHours?: boolean
    bio?: boolean
    linkedInProfile?: boolean
    languages?: boolean
    culturalBackground?: boolean
    createdAt?: boolean
  }

  export type MentorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "industry" | "expertise" | "yearsOfExperience" | "availableHours" | "bio" | "linkedInProfile" | "languages" | "culturalBackground" | "createdAt", ExtArgs["result"]["mentorProfile"]>
  export type MentorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mentorshipMatches?: boolean | MentorProfile$mentorshipMatchesArgs<ExtArgs>
    _count?: boolean | MentorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MentorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MentorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mentorshipMatches: Prisma.$MentorshipMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      industry: string
      expertise: string | null
      yearsOfExperience: number
      availableHours: string | null
      bio: string | null
      linkedInProfile: string | null
      languages: string | null
      culturalBackground: string | null
      createdAt: Date
    }, ExtArgs["result"]["mentorProfile"]>
    composites: {}
  }

  type MentorProfileGetPayload<S extends boolean | null | undefined | MentorProfileDefaultArgs> = $Result.GetResult<Prisma.$MentorProfilePayload, S>

  type MentorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorProfileCountAggregateInputType | true
    }

  export interface MentorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorProfile'], meta: { name: 'MentorProfile' } }
    /**
     * Find zero or one MentorProfile that matches the filter.
     * @param {MentorProfileFindUniqueArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorProfileFindUniqueArgs>(args: SelectSubset<T, MentorProfileFindUniqueArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorProfileFindUniqueOrThrowArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindFirstArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorProfileFindFirstArgs>(args?: SelectSubset<T, MentorProfileFindFirstArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindFirstOrThrowArgs} args - Arguments to find a MentorProfile
     * @example
     * // Get one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorProfiles
     * const mentorProfiles = await prisma.mentorProfile.findMany()
     * 
     * // Get first 10 MentorProfiles
     * const mentorProfiles = await prisma.mentorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorProfileFindManyArgs>(args?: SelectSubset<T, MentorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorProfile.
     * @param {MentorProfileCreateArgs} args - Arguments to create a MentorProfile.
     * @example
     * // Create one MentorProfile
     * const MentorProfile = await prisma.mentorProfile.create({
     *   data: {
     *     // ... data to create a MentorProfile
     *   }
     * })
     * 
     */
    create<T extends MentorProfileCreateArgs>(args: SelectSubset<T, MentorProfileCreateArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorProfiles.
     * @param {MentorProfileCreateManyArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorProfileCreateManyArgs>(args?: SelectSubset<T, MentorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentorProfiles and returns the data saved in the database.
     * @param {MentorProfileCreateManyAndReturnArgs} args - Arguments to create many MentorProfiles.
     * @example
     * // Create many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentorProfiles and only return the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentorProfile.
     * @param {MentorProfileDeleteArgs} args - Arguments to delete one MentorProfile.
     * @example
     * // Delete one MentorProfile
     * const MentorProfile = await prisma.mentorProfile.delete({
     *   where: {
     *     // ... filter to delete one MentorProfile
     *   }
     * })
     * 
     */
    delete<T extends MentorProfileDeleteArgs>(args: SelectSubset<T, MentorProfileDeleteArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorProfile.
     * @param {MentorProfileUpdateArgs} args - Arguments to update one MentorProfile.
     * @example
     * // Update one MentorProfile
     * const mentorProfile = await prisma.mentorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorProfileUpdateArgs>(args: SelectSubset<T, MentorProfileUpdateArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorProfiles.
     * @param {MentorProfileDeleteManyArgs} args - Arguments to filter MentorProfiles to delete.
     * @example
     * // Delete a few MentorProfiles
     * const { count } = await prisma.mentorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorProfileDeleteManyArgs>(args?: SelectSubset<T, MentorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorProfileUpdateManyArgs>(args: SelectSubset<T, MentorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorProfiles and returns the data updated in the database.
     * @param {MentorProfileUpdateManyAndReturnArgs} args - Arguments to update many MentorProfiles.
     * @example
     * // Update many MentorProfiles
     * const mentorProfile = await prisma.mentorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentorProfiles and only return the `id`
     * const mentorProfileWithIdOnly = await prisma.mentorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentorProfile.
     * @param {MentorProfileUpsertArgs} args - Arguments to update or create a MentorProfile.
     * @example
     * // Update or create a MentorProfile
     * const mentorProfile = await prisma.mentorProfile.upsert({
     *   create: {
     *     // ... data to create a MentorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorProfile we want to update
     *   }
     * })
     */
    upsert<T extends MentorProfileUpsertArgs>(args: SelectSubset<T, MentorProfileUpsertArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileCountArgs} args - Arguments to filter MentorProfiles to count.
     * @example
     * // Count the number of MentorProfiles
     * const count = await prisma.mentorProfile.count({
     *   where: {
     *     // ... the filter for the MentorProfiles we want to count
     *   }
     * })
    **/
    count<T extends MentorProfileCountArgs>(
      args?: Subset<T, MentorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentorProfileAggregateArgs>(args: Subset<T, MentorProfileAggregateArgs>): Prisma.PrismaPromise<GetMentorProfileAggregateType<T>>

    /**
     * Group by MentorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorProfileGroupByArgs} args - Group by arguments.
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
      T extends MentorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorProfileGroupByArgs['orderBy'] }
        : { orderBy?: MentorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MentorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorProfile model
   */
  readonly fields: MentorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentorshipMatches<T extends MentorProfile$mentorshipMatchesArgs<ExtArgs> = {}>(args?: Subset<T, MentorProfile$mentorshipMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MentorProfile model
   */ 
  interface MentorProfileFieldRefs {
    readonly id: FieldRef<"MentorProfile", 'Int'>
    readonly userId: FieldRef<"MentorProfile", 'Int'>
    readonly industry: FieldRef<"MentorProfile", 'String'>
    readonly expertise: FieldRef<"MentorProfile", 'String'>
    readonly yearsOfExperience: FieldRef<"MentorProfile", 'Int'>
    readonly availableHours: FieldRef<"MentorProfile", 'String'>
    readonly bio: FieldRef<"MentorProfile", 'String'>
    readonly linkedInProfile: FieldRef<"MentorProfile", 'String'>
    readonly languages: FieldRef<"MentorProfile", 'String'>
    readonly culturalBackground: FieldRef<"MentorProfile", 'String'>
    readonly createdAt: FieldRef<"MentorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MentorProfile findUnique
   */
  export type MentorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile findUniqueOrThrow
   */
  export type MentorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile findFirst
   */
  export type MentorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile findFirstOrThrow
   */
  export type MentorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfile to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorProfiles.
     */
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile findMany
   */
  export type MentorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentorProfiles to fetch.
     */
    where?: MentorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorProfiles to fetch.
     */
    orderBy?: MentorProfileOrderByWithRelationInput | MentorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorProfiles.
     */
    cursor?: MentorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorProfiles.
     */
    skip?: number
    distinct?: MentorProfileScalarFieldEnum | MentorProfileScalarFieldEnum[]
  }

  /**
   * MentorProfile create
   */
  export type MentorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorProfile.
     */
    data: XOR<MentorProfileCreateInput, MentorProfileUncheckedCreateInput>
  }

  /**
   * MentorProfile createMany
   */
  export type MentorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfileCreateManyInput | MentorProfileCreateManyInput[]
  }

  /**
   * MentorProfile createManyAndReturn
   */
  export type MentorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MentorProfiles.
     */
    data: MentorProfileCreateManyInput | MentorProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfile update
   */
  export type MentorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorProfile.
     */
    data: XOR<MentorProfileUpdateInput, MentorProfileUncheckedUpdateInput>
    /**
     * Choose, which MentorProfile to update.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile updateMany
   */
  export type MentorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfileUpdateManyMutationInput, MentorProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
  }

  /**
   * MentorProfile updateManyAndReturn
   */
  export type MentorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * The data used to update MentorProfiles.
     */
    data: XOR<MentorProfileUpdateManyMutationInput, MentorProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentorProfiles to update
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorProfile upsert
   */
  export type MentorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorProfile to update in case it exists.
     */
    where: MentorProfileWhereUniqueInput
    /**
     * In case the MentorProfile found by the `where` argument doesn't exist, create a new MentorProfile with this data.
     */
    create: XOR<MentorProfileCreateInput, MentorProfileUncheckedCreateInput>
    /**
     * In case the MentorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorProfileUpdateInput, MentorProfileUncheckedUpdateInput>
  }

  /**
   * MentorProfile delete
   */
  export type MentorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
    /**
     * Filter which MentorProfile to delete.
     */
    where: MentorProfileWhereUniqueInput
  }

  /**
   * MentorProfile deleteMany
   */
  export type MentorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorProfiles to delete
     */
    where?: MentorProfileWhereInput
    /**
     * Limit how many MentorProfiles to delete.
     */
    limit?: number
  }

  /**
   * MentorProfile.mentorshipMatches
   */
  export type MentorProfile$mentorshipMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    where?: MentorshipMatchWhereInput
    orderBy?: MentorshipMatchOrderByWithRelationInput | MentorshipMatchOrderByWithRelationInput[]
    cursor?: MentorshipMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorshipMatchScalarFieldEnum | MentorshipMatchScalarFieldEnum[]
  }

  /**
   * MentorProfile without action
   */
  export type MentorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorProfile
     */
    select?: MentorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorProfile
     */
    omit?: MentorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorProfileInclude<ExtArgs> | null
  }


  /**
   * Model MentorshipMatch
   */

  export type AggregateMentorshipMatch = {
    _count: MentorshipMatchCountAggregateOutputType | null
    _avg: MentorshipMatchAvgAggregateOutputType | null
    _sum: MentorshipMatchSumAggregateOutputType | null
    _min: MentorshipMatchMinAggregateOutputType | null
    _max: MentorshipMatchMaxAggregateOutputType | null
  }

  export type MentorshipMatchAvgAggregateOutputType = {
    id: number | null
    menteeId: number | null
    mentorId: number | null
    compatibilityScore: number | null
  }

  export type MentorshipMatchSumAggregateOutputType = {
    id: number | null
    menteeId: number | null
    mentorId: number | null
    compatibilityScore: number | null
  }

  export type MentorshipMatchMinAggregateOutputType = {
    id: number | null
    menteeId: number | null
    mentorId: number | null
    compatibilityScore: number | null
    status: string | null
    matchReason: string | null
    createdAt: Date | null
  }

  export type MentorshipMatchMaxAggregateOutputType = {
    id: number | null
    menteeId: number | null
    mentorId: number | null
    compatibilityScore: number | null
    status: string | null
    matchReason: string | null
    createdAt: Date | null
  }

  export type MentorshipMatchCountAggregateOutputType = {
    id: number
    menteeId: number
    mentorId: number
    compatibilityScore: number
    status: number
    matchReason: number
    createdAt: number
    _all: number
  }


  export type MentorshipMatchAvgAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    compatibilityScore?: true
  }

  export type MentorshipMatchSumAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    compatibilityScore?: true
  }

  export type MentorshipMatchMinAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    compatibilityScore?: true
    status?: true
    matchReason?: true
    createdAt?: true
  }

  export type MentorshipMatchMaxAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    compatibilityScore?: true
    status?: true
    matchReason?: true
    createdAt?: true
  }

  export type MentorshipMatchCountAggregateInputType = {
    id?: true
    menteeId?: true
    mentorId?: true
    compatibilityScore?: true
    status?: true
    matchReason?: true
    createdAt?: true
    _all?: true
  }

  export type MentorshipMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorshipMatch to aggregate.
     */
    where?: MentorshipMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipMatches to fetch.
     */
    orderBy?: MentorshipMatchOrderByWithRelationInput | MentorshipMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentorshipMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentorshipMatches
    **/
    _count?: true | MentorshipMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorshipMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorshipMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorshipMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorshipMatchMaxAggregateInputType
  }

  export type GetMentorshipMatchAggregateType<T extends MentorshipMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorshipMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorshipMatch[P]>
      : GetScalarType<T[P], AggregateMentorshipMatch[P]>
  }




  export type MentorshipMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentorshipMatchWhereInput
    orderBy?: MentorshipMatchOrderByWithAggregationInput | MentorshipMatchOrderByWithAggregationInput[]
    by: MentorshipMatchScalarFieldEnum[] | MentorshipMatchScalarFieldEnum
    having?: MentorshipMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorshipMatchCountAggregateInputType | true
    _avg?: MentorshipMatchAvgAggregateInputType
    _sum?: MentorshipMatchSumAggregateInputType
    _min?: MentorshipMatchMinAggregateInputType
    _max?: MentorshipMatchMaxAggregateInputType
  }

  export type MentorshipMatchGroupByOutputType = {
    id: number
    menteeId: number
    mentorId: number
    compatibilityScore: number
    status: string
    matchReason: string | null
    createdAt: Date
    _count: MentorshipMatchCountAggregateOutputType | null
    _avg: MentorshipMatchAvgAggregateOutputType | null
    _sum: MentorshipMatchSumAggregateOutputType | null
    _min: MentorshipMatchMinAggregateOutputType | null
    _max: MentorshipMatchMaxAggregateOutputType | null
  }

  type GetMentorshipMatchGroupByPayload<T extends MentorshipMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorshipMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorshipMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorshipMatchGroupByOutputType[P]>
            : GetScalarType<T[P], MentorshipMatchGroupByOutputType[P]>
        }
      >
    >


  export type MentorshipMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    compatibilityScore?: boolean
    status?: boolean
    matchReason?: boolean
    createdAt?: boolean
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorshipMatch"]>

  export type MentorshipMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    compatibilityScore?: boolean
    status?: boolean
    matchReason?: boolean
    createdAt?: boolean
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorshipMatch"]>

  export type MentorshipMatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    compatibilityScore?: boolean
    status?: boolean
    matchReason?: boolean
    createdAt?: boolean
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentorshipMatch"]>

  export type MentorshipMatchSelectScalar = {
    id?: boolean
    menteeId?: boolean
    mentorId?: boolean
    compatibilityScore?: boolean
    status?: boolean
    matchReason?: boolean
    createdAt?: boolean
  }

  export type MentorshipMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menteeId" | "mentorId" | "compatibilityScore" | "status" | "matchReason" | "createdAt", ExtArgs["result"]["mentorshipMatch"]>
  export type MentorshipMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }
  export type MentorshipMatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }
  export type MentorshipMatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentee?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | MentorProfileDefaultArgs<ExtArgs>
  }

  export type $MentorshipMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentorshipMatch"
    objects: {
      mentee: Prisma.$UserPayload<ExtArgs>
      mentor: Prisma.$MentorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menteeId: number
      mentorId: number
      compatibilityScore: number
      status: string
      matchReason: string | null
      createdAt: Date
    }, ExtArgs["result"]["mentorshipMatch"]>
    composites: {}
  }

  type MentorshipMatchGetPayload<S extends boolean | null | undefined | MentorshipMatchDefaultArgs> = $Result.GetResult<Prisma.$MentorshipMatchPayload, S>

  type MentorshipMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentorshipMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorshipMatchCountAggregateInputType | true
    }

  export interface MentorshipMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentorshipMatch'], meta: { name: 'MentorshipMatch' } }
    /**
     * Find zero or one MentorshipMatch that matches the filter.
     * @param {MentorshipMatchFindUniqueArgs} args - Arguments to find a MentorshipMatch
     * @example
     * // Get one MentorshipMatch
     * const mentorshipMatch = await prisma.mentorshipMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorshipMatchFindUniqueArgs>(args: SelectSubset<T, MentorshipMatchFindUniqueArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentorshipMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorshipMatchFindUniqueOrThrowArgs} args - Arguments to find a MentorshipMatch
     * @example
     * // Get one MentorshipMatch
     * const mentorshipMatch = await prisma.mentorshipMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorshipMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MentorshipMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorshipMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipMatchFindFirstArgs} args - Arguments to find a MentorshipMatch
     * @example
     * // Get one MentorshipMatch
     * const mentorshipMatch = await prisma.mentorshipMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorshipMatchFindFirstArgs>(args?: SelectSubset<T, MentorshipMatchFindFirstArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentorshipMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipMatchFindFirstOrThrowArgs} args - Arguments to find a MentorshipMatch
     * @example
     * // Get one MentorshipMatch
     * const mentorshipMatch = await prisma.mentorshipMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorshipMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MentorshipMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentorshipMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentorshipMatches
     * const mentorshipMatches = await prisma.mentorshipMatch.findMany()
     * 
     * // Get first 10 MentorshipMatches
     * const mentorshipMatches = await prisma.mentorshipMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorshipMatchWithIdOnly = await prisma.mentorshipMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentorshipMatchFindManyArgs>(args?: SelectSubset<T, MentorshipMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentorshipMatch.
     * @param {MentorshipMatchCreateArgs} args - Arguments to create a MentorshipMatch.
     * @example
     * // Create one MentorshipMatch
     * const MentorshipMatch = await prisma.mentorshipMatch.create({
     *   data: {
     *     // ... data to create a MentorshipMatch
     *   }
     * })
     * 
     */
    create<T extends MentorshipMatchCreateArgs>(args: SelectSubset<T, MentorshipMatchCreateArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentorshipMatches.
     * @param {MentorshipMatchCreateManyArgs} args - Arguments to create many MentorshipMatches.
     * @example
     * // Create many MentorshipMatches
     * const mentorshipMatch = await prisma.mentorshipMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentorshipMatchCreateManyArgs>(args?: SelectSubset<T, MentorshipMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentorshipMatches and returns the data saved in the database.
     * @param {MentorshipMatchCreateManyAndReturnArgs} args - Arguments to create many MentorshipMatches.
     * @example
     * // Create many MentorshipMatches
     * const mentorshipMatch = await prisma.mentorshipMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentorshipMatches and only return the `id`
     * const mentorshipMatchWithIdOnly = await prisma.mentorshipMatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentorshipMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MentorshipMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentorshipMatch.
     * @param {MentorshipMatchDeleteArgs} args - Arguments to delete one MentorshipMatch.
     * @example
     * // Delete one MentorshipMatch
     * const MentorshipMatch = await prisma.mentorshipMatch.delete({
     *   where: {
     *     // ... filter to delete one MentorshipMatch
     *   }
     * })
     * 
     */
    delete<T extends MentorshipMatchDeleteArgs>(args: SelectSubset<T, MentorshipMatchDeleteArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentorshipMatch.
     * @param {MentorshipMatchUpdateArgs} args - Arguments to update one MentorshipMatch.
     * @example
     * // Update one MentorshipMatch
     * const mentorshipMatch = await prisma.mentorshipMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentorshipMatchUpdateArgs>(args: SelectSubset<T, MentorshipMatchUpdateArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentorshipMatches.
     * @param {MentorshipMatchDeleteManyArgs} args - Arguments to filter MentorshipMatches to delete.
     * @example
     * // Delete a few MentorshipMatches
     * const { count } = await prisma.mentorshipMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentorshipMatchDeleteManyArgs>(args?: SelectSubset<T, MentorshipMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorshipMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentorshipMatches
     * const mentorshipMatch = await prisma.mentorshipMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentorshipMatchUpdateManyArgs>(args: SelectSubset<T, MentorshipMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentorshipMatches and returns the data updated in the database.
     * @param {MentorshipMatchUpdateManyAndReturnArgs} args - Arguments to update many MentorshipMatches.
     * @example
     * // Update many MentorshipMatches
     * const mentorshipMatch = await prisma.mentorshipMatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentorshipMatches and only return the `id`
     * const mentorshipMatchWithIdOnly = await prisma.mentorshipMatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentorshipMatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MentorshipMatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentorshipMatch.
     * @param {MentorshipMatchUpsertArgs} args - Arguments to update or create a MentorshipMatch.
     * @example
     * // Update or create a MentorshipMatch
     * const mentorshipMatch = await prisma.mentorshipMatch.upsert({
     *   create: {
     *     // ... data to create a MentorshipMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentorshipMatch we want to update
     *   }
     * })
     */
    upsert<T extends MentorshipMatchUpsertArgs>(args: SelectSubset<T, MentorshipMatchUpsertArgs<ExtArgs>>): Prisma__MentorshipMatchClient<$Result.GetResult<Prisma.$MentorshipMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentorshipMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipMatchCountArgs} args - Arguments to filter MentorshipMatches to count.
     * @example
     * // Count the number of MentorshipMatches
     * const count = await prisma.mentorshipMatch.count({
     *   where: {
     *     // ... the filter for the MentorshipMatches we want to count
     *   }
     * })
    **/
    count<T extends MentorshipMatchCountArgs>(
      args?: Subset<T, MentorshipMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorshipMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentorshipMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentorshipMatchAggregateArgs>(args: Subset<T, MentorshipMatchAggregateArgs>): Prisma.PrismaPromise<GetMentorshipMatchAggregateType<T>>

    /**
     * Group by MentorshipMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorshipMatchGroupByArgs} args - Group by arguments.
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
      T extends MentorshipMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorshipMatchGroupByArgs['orderBy'] }
        : { orderBy?: MentorshipMatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MentorshipMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorshipMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentorshipMatch model
   */
  readonly fields: MentorshipMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentorshipMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorshipMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends MentorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MentorProfileDefaultArgs<ExtArgs>>): Prisma__MentorProfileClient<$Result.GetResult<Prisma.$MentorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MentorshipMatch model
   */ 
  interface MentorshipMatchFieldRefs {
    readonly id: FieldRef<"MentorshipMatch", 'Int'>
    readonly menteeId: FieldRef<"MentorshipMatch", 'Int'>
    readonly mentorId: FieldRef<"MentorshipMatch", 'Int'>
    readonly compatibilityScore: FieldRef<"MentorshipMatch", 'Float'>
    readonly status: FieldRef<"MentorshipMatch", 'String'>
    readonly matchReason: FieldRef<"MentorshipMatch", 'String'>
    readonly createdAt: FieldRef<"MentorshipMatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MentorshipMatch findUnique
   */
  export type MentorshipMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipMatch to fetch.
     */
    where: MentorshipMatchWhereUniqueInput
  }

  /**
   * MentorshipMatch findUniqueOrThrow
   */
  export type MentorshipMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipMatch to fetch.
     */
    where: MentorshipMatchWhereUniqueInput
  }

  /**
   * MentorshipMatch findFirst
   */
  export type MentorshipMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipMatch to fetch.
     */
    where?: MentorshipMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipMatches to fetch.
     */
    orderBy?: MentorshipMatchOrderByWithRelationInput | MentorshipMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorshipMatches.
     */
    cursor?: MentorshipMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorshipMatches.
     */
    distinct?: MentorshipMatchScalarFieldEnum | MentorshipMatchScalarFieldEnum[]
  }

  /**
   * MentorshipMatch findFirstOrThrow
   */
  export type MentorshipMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipMatch to fetch.
     */
    where?: MentorshipMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipMatches to fetch.
     */
    orderBy?: MentorshipMatchOrderByWithRelationInput | MentorshipMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentorshipMatches.
     */
    cursor?: MentorshipMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentorshipMatches.
     */
    distinct?: MentorshipMatchScalarFieldEnum | MentorshipMatchScalarFieldEnum[]
  }

  /**
   * MentorshipMatch findMany
   */
  export type MentorshipMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * Filter, which MentorshipMatches to fetch.
     */
    where?: MentorshipMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentorshipMatches to fetch.
     */
    orderBy?: MentorshipMatchOrderByWithRelationInput | MentorshipMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentorshipMatches.
     */
    cursor?: MentorshipMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentorshipMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentorshipMatches.
     */
    skip?: number
    distinct?: MentorshipMatchScalarFieldEnum | MentorshipMatchScalarFieldEnum[]
  }

  /**
   * MentorshipMatch create
   */
  export type MentorshipMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a MentorshipMatch.
     */
    data: XOR<MentorshipMatchCreateInput, MentorshipMatchUncheckedCreateInput>
  }

  /**
   * MentorshipMatch createMany
   */
  export type MentorshipMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentorshipMatches.
     */
    data: MentorshipMatchCreateManyInput | MentorshipMatchCreateManyInput[]
  }

  /**
   * MentorshipMatch createManyAndReturn
   */
  export type MentorshipMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * The data used to create many MentorshipMatches.
     */
    data: MentorshipMatchCreateManyInput | MentorshipMatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorshipMatch update
   */
  export type MentorshipMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a MentorshipMatch.
     */
    data: XOR<MentorshipMatchUpdateInput, MentorshipMatchUncheckedUpdateInput>
    /**
     * Choose, which MentorshipMatch to update.
     */
    where: MentorshipMatchWhereUniqueInput
  }

  /**
   * MentorshipMatch updateMany
   */
  export type MentorshipMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentorshipMatches.
     */
    data: XOR<MentorshipMatchUpdateManyMutationInput, MentorshipMatchUncheckedUpdateManyInput>
    /**
     * Filter which MentorshipMatches to update
     */
    where?: MentorshipMatchWhereInput
    /**
     * Limit how many MentorshipMatches to update.
     */
    limit?: number
  }

  /**
   * MentorshipMatch updateManyAndReturn
   */
  export type MentorshipMatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * The data used to update MentorshipMatches.
     */
    data: XOR<MentorshipMatchUpdateManyMutationInput, MentorshipMatchUncheckedUpdateManyInput>
    /**
     * Filter which MentorshipMatches to update
     */
    where?: MentorshipMatchWhereInput
    /**
     * Limit how many MentorshipMatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentorshipMatch upsert
   */
  export type MentorshipMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the MentorshipMatch to update in case it exists.
     */
    where: MentorshipMatchWhereUniqueInput
    /**
     * In case the MentorshipMatch found by the `where` argument doesn't exist, create a new MentorshipMatch with this data.
     */
    create: XOR<MentorshipMatchCreateInput, MentorshipMatchUncheckedCreateInput>
    /**
     * In case the MentorshipMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentorshipMatchUpdateInput, MentorshipMatchUncheckedUpdateInput>
  }

  /**
   * MentorshipMatch delete
   */
  export type MentorshipMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
    /**
     * Filter which MentorshipMatch to delete.
     */
    where: MentorshipMatchWhereUniqueInput
  }

  /**
   * MentorshipMatch deleteMany
   */
  export type MentorshipMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentorshipMatches to delete
     */
    where?: MentorshipMatchWhereInput
    /**
     * Limit how many MentorshipMatches to delete.
     */
    limit?: number
  }

  /**
   * MentorshipMatch without action
   */
  export type MentorshipMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentorshipMatch
     */
    select?: MentorshipMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentorshipMatch
     */
    omit?: MentorshipMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorshipMatchInclude<ExtArgs> | null
  }


  /**
   * Model CoachingSession
   */

  export type AggregateCoachingSession = {
    _count: CoachingSessionCountAggregateOutputType | null
    _avg: CoachingSessionAvgAggregateOutputType | null
    _sum: CoachingSessionSumAggregateOutputType | null
    _min: CoachingSessionMinAggregateOutputType | null
    _max: CoachingSessionMaxAggregateOutputType | null
  }

  export type CoachingSessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CoachingSessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CoachingSessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionType: string | null
    conversationLog: string | null
    actionItems: string | null
    goals: string | null
    progress: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachingSessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionType: string | null
    conversationLog: string | null
    actionItems: string | null
    goals: string | null
    progress: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachingSessionCountAggregateOutputType = {
    id: number
    userId: number
    sessionType: number
    conversationLog: number
    actionItems: number
    goals: number
    progress: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoachingSessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CoachingSessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CoachingSessionMinAggregateInputType = {
    id?: true
    userId?: true
    sessionType?: true
    conversationLog?: true
    actionItems?: true
    goals?: true
    progress?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachingSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionType?: true
    conversationLog?: true
    actionItems?: true
    goals?: true
    progress?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachingSessionCountAggregateInputType = {
    id?: true
    userId?: true
    sessionType?: true
    conversationLog?: true
    actionItems?: true
    goals?: true
    progress?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoachingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingSession to aggregate.
     */
    where?: CoachingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingSessions to fetch.
     */
    orderBy?: CoachingSessionOrderByWithRelationInput | CoachingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachingSessions
    **/
    _count?: true | CoachingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachingSessionMaxAggregateInputType
  }

  export type GetCoachingSessionAggregateType<T extends CoachingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachingSession[P]>
      : GetScalarType<T[P], AggregateCoachingSession[P]>
  }




  export type CoachingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingSessionWhereInput
    orderBy?: CoachingSessionOrderByWithAggregationInput | CoachingSessionOrderByWithAggregationInput[]
    by: CoachingSessionScalarFieldEnum[] | CoachingSessionScalarFieldEnum
    having?: CoachingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachingSessionCountAggregateInputType | true
    _avg?: CoachingSessionAvgAggregateInputType
    _sum?: CoachingSessionSumAggregateInputType
    _min?: CoachingSessionMinAggregateInputType
    _max?: CoachingSessionMaxAggregateInputType
  }

  export type CoachingSessionGroupByOutputType = {
    id: number
    userId: number
    sessionType: string
    conversationLog: string | null
    actionItems: string | null
    goals: string | null
    progress: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CoachingSessionCountAggregateOutputType | null
    _avg: CoachingSessionAvgAggregateOutputType | null
    _sum: CoachingSessionSumAggregateOutputType | null
    _min: CoachingSessionMinAggregateOutputType | null
    _max: CoachingSessionMaxAggregateOutputType | null
  }

  type GetCoachingSessionGroupByPayload<T extends CoachingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], CoachingSessionGroupByOutputType[P]>
        }
      >
    >


  export type CoachingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionType?: boolean
    conversationLog?: boolean
    actionItems?: boolean
    goals?: boolean
    progress?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingSession"]>

  export type CoachingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionType?: boolean
    conversationLog?: boolean
    actionItems?: boolean
    goals?: boolean
    progress?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingSession"]>

  export type CoachingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionType?: boolean
    conversationLog?: boolean
    actionItems?: boolean
    goals?: boolean
    progress?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingSession"]>

  export type CoachingSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionType?: boolean
    conversationLog?: boolean
    actionItems?: boolean
    goals?: boolean
    progress?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoachingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionType" | "conversationLog" | "actionItems" | "goals" | "progress" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["coachingSession"]>
  export type CoachingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachingSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sessionType: string
      conversationLog: string | null
      actionItems: string | null
      goals: string | null
      progress: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coachingSession"]>
    composites: {}
  }

  type CoachingSessionGetPayload<S extends boolean | null | undefined | CoachingSessionDefaultArgs> = $Result.GetResult<Prisma.$CoachingSessionPayload, S>

  type CoachingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachingSessionCountAggregateInputType | true
    }

  export interface CoachingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachingSession'], meta: { name: 'CoachingSession' } }
    /**
     * Find zero or one CoachingSession that matches the filter.
     * @param {CoachingSessionFindUniqueArgs} args - Arguments to find a CoachingSession
     * @example
     * // Get one CoachingSession
     * const coachingSession = await prisma.coachingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachingSessionFindUniqueArgs>(args: SelectSubset<T, CoachingSessionFindUniqueArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachingSessionFindUniqueOrThrowArgs} args - Arguments to find a CoachingSession
     * @example
     * // Get one CoachingSession
     * const coachingSession = await prisma.coachingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingSessionFindFirstArgs} args - Arguments to find a CoachingSession
     * @example
     * // Get one CoachingSession
     * const coachingSession = await prisma.coachingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachingSessionFindFirstArgs>(args?: SelectSubset<T, CoachingSessionFindFirstArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingSessionFindFirstOrThrowArgs} args - Arguments to find a CoachingSession
     * @example
     * // Get one CoachingSession
     * const coachingSession = await prisma.coachingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachingSessions
     * const coachingSessions = await prisma.coachingSession.findMany()
     * 
     * // Get first 10 CoachingSessions
     * const coachingSessions = await prisma.coachingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachingSessionWithIdOnly = await prisma.coachingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachingSessionFindManyArgs>(args?: SelectSubset<T, CoachingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachingSession.
     * @param {CoachingSessionCreateArgs} args - Arguments to create a CoachingSession.
     * @example
     * // Create one CoachingSession
     * const CoachingSession = await prisma.coachingSession.create({
     *   data: {
     *     // ... data to create a CoachingSession
     *   }
     * })
     * 
     */
    create<T extends CoachingSessionCreateArgs>(args: SelectSubset<T, CoachingSessionCreateArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachingSessions.
     * @param {CoachingSessionCreateManyArgs} args - Arguments to create many CoachingSessions.
     * @example
     * // Create many CoachingSessions
     * const coachingSession = await prisma.coachingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachingSessionCreateManyArgs>(args?: SelectSubset<T, CoachingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachingSessions and returns the data saved in the database.
     * @param {CoachingSessionCreateManyAndReturnArgs} args - Arguments to create many CoachingSessions.
     * @example
     * // Create many CoachingSessions
     * const coachingSession = await prisma.coachingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachingSessions and only return the `id`
     * const coachingSessionWithIdOnly = await prisma.coachingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachingSession.
     * @param {CoachingSessionDeleteArgs} args - Arguments to delete one CoachingSession.
     * @example
     * // Delete one CoachingSession
     * const CoachingSession = await prisma.coachingSession.delete({
     *   where: {
     *     // ... filter to delete one CoachingSession
     *   }
     * })
     * 
     */
    delete<T extends CoachingSessionDeleteArgs>(args: SelectSubset<T, CoachingSessionDeleteArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachingSession.
     * @param {CoachingSessionUpdateArgs} args - Arguments to update one CoachingSession.
     * @example
     * // Update one CoachingSession
     * const coachingSession = await prisma.coachingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachingSessionUpdateArgs>(args: SelectSubset<T, CoachingSessionUpdateArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachingSessions.
     * @param {CoachingSessionDeleteManyArgs} args - Arguments to filter CoachingSessions to delete.
     * @example
     * // Delete a few CoachingSessions
     * const { count } = await prisma.coachingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachingSessionDeleteManyArgs>(args?: SelectSubset<T, CoachingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachingSessions
     * const coachingSession = await prisma.coachingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachingSessionUpdateManyArgs>(args: SelectSubset<T, CoachingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingSessions and returns the data updated in the database.
     * @param {CoachingSessionUpdateManyAndReturnArgs} args - Arguments to update many CoachingSessions.
     * @example
     * // Update many CoachingSessions
     * const coachingSession = await prisma.coachingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachingSessions and only return the `id`
     * const coachingSessionWithIdOnly = await prisma.coachingSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachingSession.
     * @param {CoachingSessionUpsertArgs} args - Arguments to update or create a CoachingSession.
     * @example
     * // Update or create a CoachingSession
     * const coachingSession = await prisma.coachingSession.upsert({
     *   create: {
     *     // ... data to create a CoachingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachingSession we want to update
     *   }
     * })
     */
    upsert<T extends CoachingSessionUpsertArgs>(args: SelectSubset<T, CoachingSessionUpsertArgs<ExtArgs>>): Prisma__CoachingSessionClient<$Result.GetResult<Prisma.$CoachingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingSessionCountArgs} args - Arguments to filter CoachingSessions to count.
     * @example
     * // Count the number of CoachingSessions
     * const count = await prisma.coachingSession.count({
     *   where: {
     *     // ... the filter for the CoachingSessions we want to count
     *   }
     * })
    **/
    count<T extends CoachingSessionCountArgs>(
      args?: Subset<T, CoachingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachingSessionAggregateArgs>(args: Subset<T, CoachingSessionAggregateArgs>): Prisma.PrismaPromise<GetCoachingSessionAggregateType<T>>

    /**
     * Group by CoachingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingSessionGroupByArgs} args - Group by arguments.
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
      T extends CoachingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachingSessionGroupByArgs['orderBy'] }
        : { orderBy?: CoachingSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachingSession model
   */
  readonly fields: CoachingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CoachingSession model
   */ 
  interface CoachingSessionFieldRefs {
    readonly id: FieldRef<"CoachingSession", 'Int'>
    readonly userId: FieldRef<"CoachingSession", 'Int'>
    readonly sessionType: FieldRef<"CoachingSession", 'String'>
    readonly conversationLog: FieldRef<"CoachingSession", 'String'>
    readonly actionItems: FieldRef<"CoachingSession", 'String'>
    readonly goals: FieldRef<"CoachingSession", 'String'>
    readonly progress: FieldRef<"CoachingSession", 'String'>
    readonly status: FieldRef<"CoachingSession", 'String'>
    readonly createdAt: FieldRef<"CoachingSession", 'DateTime'>
    readonly updatedAt: FieldRef<"CoachingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachingSession findUnique
   */
  export type CoachingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CoachingSession to fetch.
     */
    where: CoachingSessionWhereUniqueInput
  }

  /**
   * CoachingSession findUniqueOrThrow
   */
  export type CoachingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CoachingSession to fetch.
     */
    where: CoachingSessionWhereUniqueInput
  }

  /**
   * CoachingSession findFirst
   */
  export type CoachingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CoachingSession to fetch.
     */
    where?: CoachingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingSessions to fetch.
     */
    orderBy?: CoachingSessionOrderByWithRelationInput | CoachingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingSessions.
     */
    cursor?: CoachingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingSessions.
     */
    distinct?: CoachingSessionScalarFieldEnum | CoachingSessionScalarFieldEnum[]
  }

  /**
   * CoachingSession findFirstOrThrow
   */
  export type CoachingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CoachingSession to fetch.
     */
    where?: CoachingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingSessions to fetch.
     */
    orderBy?: CoachingSessionOrderByWithRelationInput | CoachingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingSessions.
     */
    cursor?: CoachingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingSessions.
     */
    distinct?: CoachingSessionScalarFieldEnum | CoachingSessionScalarFieldEnum[]
  }

  /**
   * CoachingSession findMany
   */
  export type CoachingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CoachingSessions to fetch.
     */
    where?: CoachingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingSessions to fetch.
     */
    orderBy?: CoachingSessionOrderByWithRelationInput | CoachingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachingSessions.
     */
    cursor?: CoachingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingSessions.
     */
    skip?: number
    distinct?: CoachingSessionScalarFieldEnum | CoachingSessionScalarFieldEnum[]
  }

  /**
   * CoachingSession create
   */
  export type CoachingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachingSession.
     */
    data: XOR<CoachingSessionCreateInput, CoachingSessionUncheckedCreateInput>
  }

  /**
   * CoachingSession createMany
   */
  export type CoachingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachingSessions.
     */
    data: CoachingSessionCreateManyInput | CoachingSessionCreateManyInput[]
  }

  /**
   * CoachingSession createManyAndReturn
   */
  export type CoachingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many CoachingSessions.
     */
    data: CoachingSessionCreateManyInput | CoachingSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingSession update
   */
  export type CoachingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachingSession.
     */
    data: XOR<CoachingSessionUpdateInput, CoachingSessionUncheckedUpdateInput>
    /**
     * Choose, which CoachingSession to update.
     */
    where: CoachingSessionWhereUniqueInput
  }

  /**
   * CoachingSession updateMany
   */
  export type CoachingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachingSessions.
     */
    data: XOR<CoachingSessionUpdateManyMutationInput, CoachingSessionUncheckedUpdateManyInput>
    /**
     * Filter which CoachingSessions to update
     */
    where?: CoachingSessionWhereInput
    /**
     * Limit how many CoachingSessions to update.
     */
    limit?: number
  }

  /**
   * CoachingSession updateManyAndReturn
   */
  export type CoachingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * The data used to update CoachingSessions.
     */
    data: XOR<CoachingSessionUpdateManyMutationInput, CoachingSessionUncheckedUpdateManyInput>
    /**
     * Filter which CoachingSessions to update
     */
    where?: CoachingSessionWhereInput
    /**
     * Limit how many CoachingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingSession upsert
   */
  export type CoachingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachingSession to update in case it exists.
     */
    where: CoachingSessionWhereUniqueInput
    /**
     * In case the CoachingSession found by the `where` argument doesn't exist, create a new CoachingSession with this data.
     */
    create: XOR<CoachingSessionCreateInput, CoachingSessionUncheckedCreateInput>
    /**
     * In case the CoachingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachingSessionUpdateInput, CoachingSessionUncheckedUpdateInput>
  }

  /**
   * CoachingSession delete
   */
  export type CoachingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
    /**
     * Filter which CoachingSession to delete.
     */
    where: CoachingSessionWhereUniqueInput
  }

  /**
   * CoachingSession deleteMany
   */
  export type CoachingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingSessions to delete
     */
    where?: CoachingSessionWhereInput
    /**
     * Limit how many CoachingSessions to delete.
     */
    limit?: number
  }

  /**
   * CoachingSession without action
   */
  export type CoachingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingSession
     */
    select?: CoachingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingSession
     */
    omit?: CoachingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingSessionInclude<ExtArgs> | null
  }


  /**
   * Model JobOpportunity
   */

  export type AggregateJobOpportunity = {
    _count: JobOpportunityCountAggregateOutputType | null
    _avg: JobOpportunityAvgAggregateOutputType | null
    _sum: JobOpportunitySumAggregateOutputType | null
    _min: JobOpportunityMinAggregateOutputType | null
    _max: JobOpportunityMaxAggregateOutputType | null
  }

  export type JobOpportunityAvgAggregateOutputType = {
    id: number | null
  }

  export type JobOpportunitySumAggregateOutputType = {
    id: number | null
  }

  export type JobOpportunityMinAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    location: string | null
    description: string | null
    requirements: string | null
    salary: string | null
    jobType: string | null
    industry: string | null
    sourceUrl: string | null
    postedDate: Date | null
    createdAt: Date | null
  }

  export type JobOpportunityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    location: string | null
    description: string | null
    requirements: string | null
    salary: string | null
    jobType: string | null
    industry: string | null
    sourceUrl: string | null
    postedDate: Date | null
    createdAt: Date | null
  }

  export type JobOpportunityCountAggregateOutputType = {
    id: number
    title: number
    company: number
    location: number
    description: number
    requirements: number
    salary: number
    jobType: number
    industry: number
    sourceUrl: number
    postedDate: number
    createdAt: number
    _all: number
  }


  export type JobOpportunityAvgAggregateInputType = {
    id?: true
  }

  export type JobOpportunitySumAggregateInputType = {
    id?: true
  }

  export type JobOpportunityMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    description?: true
    requirements?: true
    salary?: true
    jobType?: true
    industry?: true
    sourceUrl?: true
    postedDate?: true
    createdAt?: true
  }

  export type JobOpportunityMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    description?: true
    requirements?: true
    salary?: true
    jobType?: true
    industry?: true
    sourceUrl?: true
    postedDate?: true
    createdAt?: true
  }

  export type JobOpportunityCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    location?: true
    description?: true
    requirements?: true
    salary?: true
    jobType?: true
    industry?: true
    sourceUrl?: true
    postedDate?: true
    createdAt?: true
    _all?: true
  }

  export type JobOpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOpportunity to aggregate.
     */
    where?: JobOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpportunities to fetch.
     */
    orderBy?: JobOpportunityOrderByWithRelationInput | JobOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobOpportunities
    **/
    _count?: true | JobOpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobOpportunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobOpportunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobOpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobOpportunityMaxAggregateInputType
  }

  export type GetJobOpportunityAggregateType<T extends JobOpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateJobOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOpportunity[P]>
      : GetScalarType<T[P], AggregateJobOpportunity[P]>
  }




  export type JobOpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOpportunityWhereInput
    orderBy?: JobOpportunityOrderByWithAggregationInput | JobOpportunityOrderByWithAggregationInput[]
    by: JobOpportunityScalarFieldEnum[] | JobOpportunityScalarFieldEnum
    having?: JobOpportunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobOpportunityCountAggregateInputType | true
    _avg?: JobOpportunityAvgAggregateInputType
    _sum?: JobOpportunitySumAggregateInputType
    _min?: JobOpportunityMinAggregateInputType
    _max?: JobOpportunityMaxAggregateInputType
  }

  export type JobOpportunityGroupByOutputType = {
    id: number
    title: string
    company: string
    location: string
    description: string | null
    requirements: string | null
    salary: string | null
    jobType: string | null
    industry: string | null
    sourceUrl: string | null
    postedDate: Date | null
    createdAt: Date
    _count: JobOpportunityCountAggregateOutputType | null
    _avg: JobOpportunityAvgAggregateOutputType | null
    _sum: JobOpportunitySumAggregateOutputType | null
    _min: JobOpportunityMinAggregateOutputType | null
    _max: JobOpportunityMaxAggregateOutputType | null
  }

  type GetJobOpportunityGroupByPayload<T extends JobOpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobOpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobOpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], JobOpportunityGroupByOutputType[P]>
        }
      >
    >


  export type JobOpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobType?: boolean
    industry?: boolean
    sourceUrl?: boolean
    postedDate?: boolean
    createdAt?: boolean
    jobMatches?: boolean | JobOpportunity$jobMatchesArgs<ExtArgs>
    _count?: boolean | JobOpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOpportunity"]>

  export type JobOpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobType?: boolean
    industry?: boolean
    sourceUrl?: boolean
    postedDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jobOpportunity"]>

  export type JobOpportunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobType?: boolean
    industry?: boolean
    sourceUrl?: boolean
    postedDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jobOpportunity"]>

  export type JobOpportunitySelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    location?: boolean
    description?: boolean
    requirements?: boolean
    salary?: boolean
    jobType?: boolean
    industry?: boolean
    sourceUrl?: boolean
    postedDate?: boolean
    createdAt?: boolean
  }

  export type JobOpportunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "location" | "description" | "requirements" | "salary" | "jobType" | "industry" | "sourceUrl" | "postedDate" | "createdAt", ExtArgs["result"]["jobOpportunity"]>
  export type JobOpportunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobMatches?: boolean | JobOpportunity$jobMatchesArgs<ExtArgs>
    _count?: boolean | JobOpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobOpportunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobOpportunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobOpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobOpportunity"
    objects: {
      jobMatches: Prisma.$JobMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      company: string
      location: string
      description: string | null
      requirements: string | null
      salary: string | null
      jobType: string | null
      industry: string | null
      sourceUrl: string | null
      postedDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["jobOpportunity"]>
    composites: {}
  }

  type JobOpportunityGetPayload<S extends boolean | null | undefined | JobOpportunityDefaultArgs> = $Result.GetResult<Prisma.$JobOpportunityPayload, S>

  type JobOpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobOpportunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobOpportunityCountAggregateInputType | true
    }

  export interface JobOpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobOpportunity'], meta: { name: 'JobOpportunity' } }
    /**
     * Find zero or one JobOpportunity that matches the filter.
     * @param {JobOpportunityFindUniqueArgs} args - Arguments to find a JobOpportunity
     * @example
     * // Get one JobOpportunity
     * const jobOpportunity = await prisma.jobOpportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobOpportunityFindUniqueArgs>(args: SelectSubset<T, JobOpportunityFindUniqueArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobOpportunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobOpportunityFindUniqueOrThrowArgs} args - Arguments to find a JobOpportunity
     * @example
     * // Get one JobOpportunity
     * const jobOpportunity = await prisma.jobOpportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobOpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, JobOpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOpportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpportunityFindFirstArgs} args - Arguments to find a JobOpportunity
     * @example
     * // Get one JobOpportunity
     * const jobOpportunity = await prisma.jobOpportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobOpportunityFindFirstArgs>(args?: SelectSubset<T, JobOpportunityFindFirstArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOpportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpportunityFindFirstOrThrowArgs} args - Arguments to find a JobOpportunity
     * @example
     * // Get one JobOpportunity
     * const jobOpportunity = await prisma.jobOpportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobOpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, JobOpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobOpportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobOpportunities
     * const jobOpportunities = await prisma.jobOpportunity.findMany()
     * 
     * // Get first 10 JobOpportunities
     * const jobOpportunities = await prisma.jobOpportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobOpportunityWithIdOnly = await prisma.jobOpportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobOpportunityFindManyArgs>(args?: SelectSubset<T, JobOpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobOpportunity.
     * @param {JobOpportunityCreateArgs} args - Arguments to create a JobOpportunity.
     * @example
     * // Create one JobOpportunity
     * const JobOpportunity = await prisma.jobOpportunity.create({
     *   data: {
     *     // ... data to create a JobOpportunity
     *   }
     * })
     * 
     */
    create<T extends JobOpportunityCreateArgs>(args: SelectSubset<T, JobOpportunityCreateArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobOpportunities.
     * @param {JobOpportunityCreateManyArgs} args - Arguments to create many JobOpportunities.
     * @example
     * // Create many JobOpportunities
     * const jobOpportunity = await prisma.jobOpportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobOpportunityCreateManyArgs>(args?: SelectSubset<T, JobOpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobOpportunities and returns the data saved in the database.
     * @param {JobOpportunityCreateManyAndReturnArgs} args - Arguments to create many JobOpportunities.
     * @example
     * // Create many JobOpportunities
     * const jobOpportunity = await prisma.jobOpportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobOpportunities and only return the `id`
     * const jobOpportunityWithIdOnly = await prisma.jobOpportunity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobOpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, JobOpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobOpportunity.
     * @param {JobOpportunityDeleteArgs} args - Arguments to delete one JobOpportunity.
     * @example
     * // Delete one JobOpportunity
     * const JobOpportunity = await prisma.jobOpportunity.delete({
     *   where: {
     *     // ... filter to delete one JobOpportunity
     *   }
     * })
     * 
     */
    delete<T extends JobOpportunityDeleteArgs>(args: SelectSubset<T, JobOpportunityDeleteArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobOpportunity.
     * @param {JobOpportunityUpdateArgs} args - Arguments to update one JobOpportunity.
     * @example
     * // Update one JobOpportunity
     * const jobOpportunity = await prisma.jobOpportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobOpportunityUpdateArgs>(args: SelectSubset<T, JobOpportunityUpdateArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobOpportunities.
     * @param {JobOpportunityDeleteManyArgs} args - Arguments to filter JobOpportunities to delete.
     * @example
     * // Delete a few JobOpportunities
     * const { count } = await prisma.jobOpportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobOpportunityDeleteManyArgs>(args?: SelectSubset<T, JobOpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOpportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobOpportunities
     * const jobOpportunity = await prisma.jobOpportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobOpportunityUpdateManyArgs>(args: SelectSubset<T, JobOpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOpportunities and returns the data updated in the database.
     * @param {JobOpportunityUpdateManyAndReturnArgs} args - Arguments to update many JobOpportunities.
     * @example
     * // Update many JobOpportunities
     * const jobOpportunity = await prisma.jobOpportunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobOpportunities and only return the `id`
     * const jobOpportunityWithIdOnly = await prisma.jobOpportunity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobOpportunityUpdateManyAndReturnArgs>(args: SelectSubset<T, JobOpportunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobOpportunity.
     * @param {JobOpportunityUpsertArgs} args - Arguments to update or create a JobOpportunity.
     * @example
     * // Update or create a JobOpportunity
     * const jobOpportunity = await prisma.jobOpportunity.upsert({
     *   create: {
     *     // ... data to create a JobOpportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobOpportunity we want to update
     *   }
     * })
     */
    upsert<T extends JobOpportunityUpsertArgs>(args: SelectSubset<T, JobOpportunityUpsertArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobOpportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpportunityCountArgs} args - Arguments to filter JobOpportunities to count.
     * @example
     * // Count the number of JobOpportunities
     * const count = await prisma.jobOpportunity.count({
     *   where: {
     *     // ... the filter for the JobOpportunities we want to count
     *   }
     * })
    **/
    count<T extends JobOpportunityCountArgs>(
      args?: Subset<T, JobOpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobOpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobOpportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobOpportunityAggregateArgs>(args: Subset<T, JobOpportunityAggregateArgs>): Prisma.PrismaPromise<GetJobOpportunityAggregateType<T>>

    /**
     * Group by JobOpportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpportunityGroupByArgs} args - Group by arguments.
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
      T extends JobOpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobOpportunityGroupByArgs['orderBy'] }
        : { orderBy?: JobOpportunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobOpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobOpportunity model
   */
  readonly fields: JobOpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobOpportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobOpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobMatches<T extends JobOpportunity$jobMatchesArgs<ExtArgs> = {}>(args?: Subset<T, JobOpportunity$jobMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JobOpportunity model
   */ 
  interface JobOpportunityFieldRefs {
    readonly id: FieldRef<"JobOpportunity", 'Int'>
    readonly title: FieldRef<"JobOpportunity", 'String'>
    readonly company: FieldRef<"JobOpportunity", 'String'>
    readonly location: FieldRef<"JobOpportunity", 'String'>
    readonly description: FieldRef<"JobOpportunity", 'String'>
    readonly requirements: FieldRef<"JobOpportunity", 'String'>
    readonly salary: FieldRef<"JobOpportunity", 'String'>
    readonly jobType: FieldRef<"JobOpportunity", 'String'>
    readonly industry: FieldRef<"JobOpportunity", 'String'>
    readonly sourceUrl: FieldRef<"JobOpportunity", 'String'>
    readonly postedDate: FieldRef<"JobOpportunity", 'DateTime'>
    readonly createdAt: FieldRef<"JobOpportunity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobOpportunity findUnique
   */
  export type JobOpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * Filter, which JobOpportunity to fetch.
     */
    where: JobOpportunityWhereUniqueInput
  }

  /**
   * JobOpportunity findUniqueOrThrow
   */
  export type JobOpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * Filter, which JobOpportunity to fetch.
     */
    where: JobOpportunityWhereUniqueInput
  }

  /**
   * JobOpportunity findFirst
   */
  export type JobOpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * Filter, which JobOpportunity to fetch.
     */
    where?: JobOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpportunities to fetch.
     */
    orderBy?: JobOpportunityOrderByWithRelationInput | JobOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOpportunities.
     */
    cursor?: JobOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOpportunities.
     */
    distinct?: JobOpportunityScalarFieldEnum | JobOpportunityScalarFieldEnum[]
  }

  /**
   * JobOpportunity findFirstOrThrow
   */
  export type JobOpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * Filter, which JobOpportunity to fetch.
     */
    where?: JobOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpportunities to fetch.
     */
    orderBy?: JobOpportunityOrderByWithRelationInput | JobOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOpportunities.
     */
    cursor?: JobOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOpportunities.
     */
    distinct?: JobOpportunityScalarFieldEnum | JobOpportunityScalarFieldEnum[]
  }

  /**
   * JobOpportunity findMany
   */
  export type JobOpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * Filter, which JobOpportunities to fetch.
     */
    where?: JobOpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpportunities to fetch.
     */
    orderBy?: JobOpportunityOrderByWithRelationInput | JobOpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobOpportunities.
     */
    cursor?: JobOpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpportunities.
     */
    skip?: number
    distinct?: JobOpportunityScalarFieldEnum | JobOpportunityScalarFieldEnum[]
  }

  /**
   * JobOpportunity create
   */
  export type JobOpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * The data needed to create a JobOpportunity.
     */
    data: XOR<JobOpportunityCreateInput, JobOpportunityUncheckedCreateInput>
  }

  /**
   * JobOpportunity createMany
   */
  export type JobOpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobOpportunities.
     */
    data: JobOpportunityCreateManyInput | JobOpportunityCreateManyInput[]
  }

  /**
   * JobOpportunity createManyAndReturn
   */
  export type JobOpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * The data used to create many JobOpportunities.
     */
    data: JobOpportunityCreateManyInput | JobOpportunityCreateManyInput[]
  }

  /**
   * JobOpportunity update
   */
  export type JobOpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * The data needed to update a JobOpportunity.
     */
    data: XOR<JobOpportunityUpdateInput, JobOpportunityUncheckedUpdateInput>
    /**
     * Choose, which JobOpportunity to update.
     */
    where: JobOpportunityWhereUniqueInput
  }

  /**
   * JobOpportunity updateMany
   */
  export type JobOpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobOpportunities.
     */
    data: XOR<JobOpportunityUpdateManyMutationInput, JobOpportunityUncheckedUpdateManyInput>
    /**
     * Filter which JobOpportunities to update
     */
    where?: JobOpportunityWhereInput
    /**
     * Limit how many JobOpportunities to update.
     */
    limit?: number
  }

  /**
   * JobOpportunity updateManyAndReturn
   */
  export type JobOpportunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * The data used to update JobOpportunities.
     */
    data: XOR<JobOpportunityUpdateManyMutationInput, JobOpportunityUncheckedUpdateManyInput>
    /**
     * Filter which JobOpportunities to update
     */
    where?: JobOpportunityWhereInput
    /**
     * Limit how many JobOpportunities to update.
     */
    limit?: number
  }

  /**
   * JobOpportunity upsert
   */
  export type JobOpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * The filter to search for the JobOpportunity to update in case it exists.
     */
    where: JobOpportunityWhereUniqueInput
    /**
     * In case the JobOpportunity found by the `where` argument doesn't exist, create a new JobOpportunity with this data.
     */
    create: XOR<JobOpportunityCreateInput, JobOpportunityUncheckedCreateInput>
    /**
     * In case the JobOpportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOpportunityUpdateInput, JobOpportunityUncheckedUpdateInput>
  }

  /**
   * JobOpportunity delete
   */
  export type JobOpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
    /**
     * Filter which JobOpportunity to delete.
     */
    where: JobOpportunityWhereUniqueInput
  }

  /**
   * JobOpportunity deleteMany
   */
  export type JobOpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOpportunities to delete
     */
    where?: JobOpportunityWhereInput
    /**
     * Limit how many JobOpportunities to delete.
     */
    limit?: number
  }

  /**
   * JobOpportunity.jobMatches
   */
  export type JobOpportunity$jobMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    where?: JobMatchWhereInput
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    cursor?: JobMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobOpportunity without action
   */
  export type JobOpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpportunity
     */
    select?: JobOpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpportunity
     */
    omit?: JobOpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpportunityInclude<ExtArgs> | null
  }


  /**
   * Model JobMatch
   */

  export type AggregateJobMatch = {
    _count: JobMatchCountAggregateOutputType | null
    _avg: JobMatchAvgAggregateOutputType | null
    _sum: JobMatchSumAggregateOutputType | null
    _min: JobMatchMinAggregateOutputType | null
    _max: JobMatchMaxAggregateOutputType | null
  }

  export type JobMatchAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    jobOpportunityId: number | null
    relevanceScore: number | null
  }

  export type JobMatchSumAggregateOutputType = {
    id: number | null
    userId: number | null
    jobOpportunityId: number | null
    relevanceScore: number | null
  }

  export type JobMatchMinAggregateOutputType = {
    id: number | null
    userId: number | null
    jobOpportunityId: number | null
    relevanceScore: number | null
    matchReason: string | null
    applicationStatus: string | null
    savedAt: Date | null
    appliedAt: Date | null
    createdAt: Date | null
  }

  export type JobMatchMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    jobOpportunityId: number | null
    relevanceScore: number | null
    matchReason: string | null
    applicationStatus: string | null
    savedAt: Date | null
    appliedAt: Date | null
    createdAt: Date | null
  }

  export type JobMatchCountAggregateOutputType = {
    id: number
    userId: number
    jobOpportunityId: number
    relevanceScore: number
    matchReason: number
    applicationStatus: number
    savedAt: number
    appliedAt: number
    createdAt: number
    _all: number
  }


  export type JobMatchAvgAggregateInputType = {
    id?: true
    userId?: true
    jobOpportunityId?: true
    relevanceScore?: true
  }

  export type JobMatchSumAggregateInputType = {
    id?: true
    userId?: true
    jobOpportunityId?: true
    relevanceScore?: true
  }

  export type JobMatchMinAggregateInputType = {
    id?: true
    userId?: true
    jobOpportunityId?: true
    relevanceScore?: true
    matchReason?: true
    applicationStatus?: true
    savedAt?: true
    appliedAt?: true
    createdAt?: true
  }

  export type JobMatchMaxAggregateInputType = {
    id?: true
    userId?: true
    jobOpportunityId?: true
    relevanceScore?: true
    matchReason?: true
    applicationStatus?: true
    savedAt?: true
    appliedAt?: true
    createdAt?: true
  }

  export type JobMatchCountAggregateInputType = {
    id?: true
    userId?: true
    jobOpportunityId?: true
    relevanceScore?: true
    matchReason?: true
    applicationStatus?: true
    savedAt?: true
    appliedAt?: true
    createdAt?: true
    _all?: true
  }

  export type JobMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMatch to aggregate.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobMatches
    **/
    _count?: true | JobMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMatchMaxAggregateInputType
  }

  export type GetJobMatchAggregateType<T extends JobMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateJobMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobMatch[P]>
      : GetScalarType<T[P], AggregateJobMatch[P]>
  }




  export type JobMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobMatchWhereInput
    orderBy?: JobMatchOrderByWithAggregationInput | JobMatchOrderByWithAggregationInput[]
    by: JobMatchScalarFieldEnum[] | JobMatchScalarFieldEnum
    having?: JobMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobMatchCountAggregateInputType | true
    _avg?: JobMatchAvgAggregateInputType
    _sum?: JobMatchSumAggregateInputType
    _min?: JobMatchMinAggregateInputType
    _max?: JobMatchMaxAggregateInputType
  }

  export type JobMatchGroupByOutputType = {
    id: number
    userId: number
    jobOpportunityId: number
    relevanceScore: number
    matchReason: string | null
    applicationStatus: string
    savedAt: Date | null
    appliedAt: Date | null
    createdAt: Date
    _count: JobMatchCountAggregateOutputType | null
    _avg: JobMatchAvgAggregateOutputType | null
    _sum: JobMatchSumAggregateOutputType | null
    _min: JobMatchMinAggregateOutputType | null
    _max: JobMatchMaxAggregateOutputType | null
  }

  type GetJobMatchGroupByPayload<T extends JobMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobMatchGroupByOutputType[P]>
            : GetScalarType<T[P], JobMatchGroupByOutputType[P]>
        }
      >
    >


  export type JobMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobOpportunityId?: boolean
    relevanceScore?: boolean
    matchReason?: boolean
    applicationStatus?: boolean
    savedAt?: boolean
    appliedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobOpportunity?: boolean | JobOpportunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobMatch"]>

  export type JobMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobOpportunityId?: boolean
    relevanceScore?: boolean
    matchReason?: boolean
    applicationStatus?: boolean
    savedAt?: boolean
    appliedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobOpportunity?: boolean | JobOpportunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobMatch"]>

  export type JobMatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobOpportunityId?: boolean
    relevanceScore?: boolean
    matchReason?: boolean
    applicationStatus?: boolean
    savedAt?: boolean
    appliedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobOpportunity?: boolean | JobOpportunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobMatch"]>

  export type JobMatchSelectScalar = {
    id?: boolean
    userId?: boolean
    jobOpportunityId?: boolean
    relevanceScore?: boolean
    matchReason?: boolean
    applicationStatus?: boolean
    savedAt?: boolean
    appliedAt?: boolean
    createdAt?: boolean
  }

  export type JobMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "jobOpportunityId" | "relevanceScore" | "matchReason" | "applicationStatus" | "savedAt" | "appliedAt" | "createdAt", ExtArgs["result"]["jobMatch"]>
  export type JobMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobOpportunity?: boolean | JobOpportunityDefaultArgs<ExtArgs>
  }
  export type JobMatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobOpportunity?: boolean | JobOpportunityDefaultArgs<ExtArgs>
  }
  export type JobMatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobOpportunity?: boolean | JobOpportunityDefaultArgs<ExtArgs>
  }

  export type $JobMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobMatch"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobOpportunity: Prisma.$JobOpportunityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      jobOpportunityId: number
      relevanceScore: number
      matchReason: string | null
      applicationStatus: string
      savedAt: Date | null
      appliedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["jobMatch"]>
    composites: {}
  }

  type JobMatchGetPayload<S extends boolean | null | undefined | JobMatchDefaultArgs> = $Result.GetResult<Prisma.$JobMatchPayload, S>

  type JobMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobMatchCountAggregateInputType | true
    }

  export interface JobMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobMatch'], meta: { name: 'JobMatch' } }
    /**
     * Find zero or one JobMatch that matches the filter.
     * @param {JobMatchFindUniqueArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobMatchFindUniqueArgs>(args: SelectSubset<T, JobMatchFindUniqueArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobMatchFindUniqueOrThrowArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, JobMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchFindFirstArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobMatchFindFirstArgs>(args?: SelectSubset<T, JobMatchFindFirstArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchFindFirstOrThrowArgs} args - Arguments to find a JobMatch
     * @example
     * // Get one JobMatch
     * const jobMatch = await prisma.jobMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, JobMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobMatches
     * const jobMatches = await prisma.jobMatch.findMany()
     * 
     * // Get first 10 JobMatches
     * const jobMatches = await prisma.jobMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobMatchWithIdOnly = await prisma.jobMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobMatchFindManyArgs>(args?: SelectSubset<T, JobMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobMatch.
     * @param {JobMatchCreateArgs} args - Arguments to create a JobMatch.
     * @example
     * // Create one JobMatch
     * const JobMatch = await prisma.jobMatch.create({
     *   data: {
     *     // ... data to create a JobMatch
     *   }
     * })
     * 
     */
    create<T extends JobMatchCreateArgs>(args: SelectSubset<T, JobMatchCreateArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobMatches.
     * @param {JobMatchCreateManyArgs} args - Arguments to create many JobMatches.
     * @example
     * // Create many JobMatches
     * const jobMatch = await prisma.jobMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobMatchCreateManyArgs>(args?: SelectSubset<T, JobMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobMatches and returns the data saved in the database.
     * @param {JobMatchCreateManyAndReturnArgs} args - Arguments to create many JobMatches.
     * @example
     * // Create many JobMatches
     * const jobMatch = await prisma.jobMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobMatches and only return the `id`
     * const jobMatchWithIdOnly = await prisma.jobMatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, JobMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobMatch.
     * @param {JobMatchDeleteArgs} args - Arguments to delete one JobMatch.
     * @example
     * // Delete one JobMatch
     * const JobMatch = await prisma.jobMatch.delete({
     *   where: {
     *     // ... filter to delete one JobMatch
     *   }
     * })
     * 
     */
    delete<T extends JobMatchDeleteArgs>(args: SelectSubset<T, JobMatchDeleteArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobMatch.
     * @param {JobMatchUpdateArgs} args - Arguments to update one JobMatch.
     * @example
     * // Update one JobMatch
     * const jobMatch = await prisma.jobMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobMatchUpdateArgs>(args: SelectSubset<T, JobMatchUpdateArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobMatches.
     * @param {JobMatchDeleteManyArgs} args - Arguments to filter JobMatches to delete.
     * @example
     * // Delete a few JobMatches
     * const { count } = await prisma.jobMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobMatchDeleteManyArgs>(args?: SelectSubset<T, JobMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobMatches
     * const jobMatch = await prisma.jobMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobMatchUpdateManyArgs>(args: SelectSubset<T, JobMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobMatches and returns the data updated in the database.
     * @param {JobMatchUpdateManyAndReturnArgs} args - Arguments to update many JobMatches.
     * @example
     * // Update many JobMatches
     * const jobMatch = await prisma.jobMatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobMatches and only return the `id`
     * const jobMatchWithIdOnly = await prisma.jobMatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobMatchUpdateManyAndReturnArgs>(args: SelectSubset<T, JobMatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobMatch.
     * @param {JobMatchUpsertArgs} args - Arguments to update or create a JobMatch.
     * @example
     * // Update or create a JobMatch
     * const jobMatch = await prisma.jobMatch.upsert({
     *   create: {
     *     // ... data to create a JobMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobMatch we want to update
     *   }
     * })
     */
    upsert<T extends JobMatchUpsertArgs>(args: SelectSubset<T, JobMatchUpsertArgs<ExtArgs>>): Prisma__JobMatchClient<$Result.GetResult<Prisma.$JobMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchCountArgs} args - Arguments to filter JobMatches to count.
     * @example
     * // Count the number of JobMatches
     * const count = await prisma.jobMatch.count({
     *   where: {
     *     // ... the filter for the JobMatches we want to count
     *   }
     * })
    **/
    count<T extends JobMatchCountArgs>(
      args?: Subset<T, JobMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobMatchAggregateArgs>(args: Subset<T, JobMatchAggregateArgs>): Prisma.PrismaPromise<GetJobMatchAggregateType<T>>

    /**
     * Group by JobMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobMatchGroupByArgs} args - Group by arguments.
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
      T extends JobMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobMatchGroupByArgs['orderBy'] }
        : { orderBy?: JobMatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobMatch model
   */
  readonly fields: JobMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobOpportunity<T extends JobOpportunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOpportunityDefaultArgs<ExtArgs>>): Prisma__JobOpportunityClient<$Result.GetResult<Prisma.$JobOpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobMatch model
   */ 
  interface JobMatchFieldRefs {
    readonly id: FieldRef<"JobMatch", 'Int'>
    readonly userId: FieldRef<"JobMatch", 'Int'>
    readonly jobOpportunityId: FieldRef<"JobMatch", 'Int'>
    readonly relevanceScore: FieldRef<"JobMatch", 'Float'>
    readonly matchReason: FieldRef<"JobMatch", 'String'>
    readonly applicationStatus: FieldRef<"JobMatch", 'String'>
    readonly savedAt: FieldRef<"JobMatch", 'DateTime'>
    readonly appliedAt: FieldRef<"JobMatch", 'DateTime'>
    readonly createdAt: FieldRef<"JobMatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobMatch findUnique
   */
  export type JobMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch findUniqueOrThrow
   */
  export type JobMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch findFirst
   */
  export type JobMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMatches.
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMatches.
     */
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobMatch findFirstOrThrow
   */
  export type JobMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatch to fetch.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobMatches.
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobMatches.
     */
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobMatch findMany
   */
  export type JobMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter, which JobMatches to fetch.
     */
    where?: JobMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobMatches to fetch.
     */
    orderBy?: JobMatchOrderByWithRelationInput | JobMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobMatches.
     */
    cursor?: JobMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobMatches.
     */
    skip?: number
    distinct?: JobMatchScalarFieldEnum | JobMatchScalarFieldEnum[]
  }

  /**
   * JobMatch create
   */
  export type JobMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a JobMatch.
     */
    data: XOR<JobMatchCreateInput, JobMatchUncheckedCreateInput>
  }

  /**
   * JobMatch createMany
   */
  export type JobMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobMatches.
     */
    data: JobMatchCreateManyInput | JobMatchCreateManyInput[]
  }

  /**
   * JobMatch createManyAndReturn
   */
  export type JobMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * The data used to create many JobMatches.
     */
    data: JobMatchCreateManyInput | JobMatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobMatch update
   */
  export type JobMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a JobMatch.
     */
    data: XOR<JobMatchUpdateInput, JobMatchUncheckedUpdateInput>
    /**
     * Choose, which JobMatch to update.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch updateMany
   */
  export type JobMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobMatches.
     */
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyInput>
    /**
     * Filter which JobMatches to update
     */
    where?: JobMatchWhereInput
    /**
     * Limit how many JobMatches to update.
     */
    limit?: number
  }

  /**
   * JobMatch updateManyAndReturn
   */
  export type JobMatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * The data used to update JobMatches.
     */
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyInput>
    /**
     * Filter which JobMatches to update
     */
    where?: JobMatchWhereInput
    /**
     * Limit how many JobMatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobMatch upsert
   */
  export type JobMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the JobMatch to update in case it exists.
     */
    where: JobMatchWhereUniqueInput
    /**
     * In case the JobMatch found by the `where` argument doesn't exist, create a new JobMatch with this data.
     */
    create: XOR<JobMatchCreateInput, JobMatchUncheckedCreateInput>
    /**
     * In case the JobMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobMatchUpdateInput, JobMatchUncheckedUpdateInput>
  }

  /**
   * JobMatch delete
   */
  export type JobMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
    /**
     * Filter which JobMatch to delete.
     */
    where: JobMatchWhereUniqueInput
  }

  /**
   * JobMatch deleteMany
   */
  export type JobMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobMatches to delete
     */
    where?: JobMatchWhereInput
    /**
     * Limit how many JobMatches to delete.
     */
    limit?: number
  }

  /**
   * JobMatch without action
   */
  export type JobMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobMatch
     */
    select?: JobMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobMatch
     */
    omit?: JobMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobMatchInclude<ExtArgs> | null
  }


  /**
   * Model SkillGapAnalysis
   */

  export type AggregateSkillGapAnalysis = {
    _count: SkillGapAnalysisCountAggregateOutputType | null
    _avg: SkillGapAnalysisAvgAggregateOutputType | null
    _sum: SkillGapAnalysisSumAggregateOutputType | null
    _min: SkillGapAnalysisMinAggregateOutputType | null
    _max: SkillGapAnalysisMaxAggregateOutputType | null
  }

  export type SkillGapAnalysisAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SkillGapAnalysisSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SkillGapAnalysisMinAggregateOutputType = {
    id: number | null
    userId: number | null
    targetRole: string | null
    currentSkills: string | null
    requiredSkills: string | null
    skillGaps: string | null
    improvementRoadmap: string | null
    progressTracking: string | null
    industryBenchmark: string | null
    lastAssessmentDate: Date | null
    createdAt: Date | null
  }

  export type SkillGapAnalysisMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    targetRole: string | null
    currentSkills: string | null
    requiredSkills: string | null
    skillGaps: string | null
    improvementRoadmap: string | null
    progressTracking: string | null
    industryBenchmark: string | null
    lastAssessmentDate: Date | null
    createdAt: Date | null
  }

  export type SkillGapAnalysisCountAggregateOutputType = {
    id: number
    userId: number
    targetRole: number
    currentSkills: number
    requiredSkills: number
    skillGaps: number
    improvementRoadmap: number
    progressTracking: number
    industryBenchmark: number
    lastAssessmentDate: number
    createdAt: number
    _all: number
  }


  export type SkillGapAnalysisAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SkillGapAnalysisSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SkillGapAnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    targetRole?: true
    currentSkills?: true
    requiredSkills?: true
    skillGaps?: true
    improvementRoadmap?: true
    progressTracking?: true
    industryBenchmark?: true
    lastAssessmentDate?: true
    createdAt?: true
  }

  export type SkillGapAnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    targetRole?: true
    currentSkills?: true
    requiredSkills?: true
    skillGaps?: true
    improvementRoadmap?: true
    progressTracking?: true
    industryBenchmark?: true
    lastAssessmentDate?: true
    createdAt?: true
  }

  export type SkillGapAnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    targetRole?: true
    currentSkills?: true
    requiredSkills?: true
    skillGaps?: true
    improvementRoadmap?: true
    progressTracking?: true
    industryBenchmark?: true
    lastAssessmentDate?: true
    createdAt?: true
    _all?: true
  }

  export type SkillGapAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillGapAnalysis to aggregate.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillGapAnalyses
    **/
    _count?: true | SkillGapAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillGapAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillGapAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillGapAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillGapAnalysisMaxAggregateInputType
  }

  export type GetSkillGapAnalysisAggregateType<T extends SkillGapAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillGapAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillGapAnalysis[P]>
      : GetScalarType<T[P], AggregateSkillGapAnalysis[P]>
  }




  export type SkillGapAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillGapAnalysisWhereInput
    orderBy?: SkillGapAnalysisOrderByWithAggregationInput | SkillGapAnalysisOrderByWithAggregationInput[]
    by: SkillGapAnalysisScalarFieldEnum[] | SkillGapAnalysisScalarFieldEnum
    having?: SkillGapAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillGapAnalysisCountAggregateInputType | true
    _avg?: SkillGapAnalysisAvgAggregateInputType
    _sum?: SkillGapAnalysisSumAggregateInputType
    _min?: SkillGapAnalysisMinAggregateInputType
    _max?: SkillGapAnalysisMaxAggregateInputType
  }

  export type SkillGapAnalysisGroupByOutputType = {
    id: number
    userId: number
    targetRole: string
    currentSkills: string | null
    requiredSkills: string | null
    skillGaps: string | null
    improvementRoadmap: string | null
    progressTracking: string | null
    industryBenchmark: string | null
    lastAssessmentDate: Date
    createdAt: Date
    _count: SkillGapAnalysisCountAggregateOutputType | null
    _avg: SkillGapAnalysisAvgAggregateOutputType | null
    _sum: SkillGapAnalysisSumAggregateOutputType | null
    _min: SkillGapAnalysisMinAggregateOutputType | null
    _max: SkillGapAnalysisMaxAggregateOutputType | null
  }

  type GetSkillGapAnalysisGroupByPayload<T extends SkillGapAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGapAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGapAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGapAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGapAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type SkillGapAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetRole?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    skillGaps?: boolean
    improvementRoadmap?: boolean
    progressTracking?: boolean
    industryBenchmark?: boolean
    lastAssessmentDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGapAnalysis"]>

  export type SkillGapAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetRole?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    skillGaps?: boolean
    improvementRoadmap?: boolean
    progressTracking?: boolean
    industryBenchmark?: boolean
    lastAssessmentDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGapAnalysis"]>

  export type SkillGapAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetRole?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    skillGaps?: boolean
    improvementRoadmap?: boolean
    progressTracking?: boolean
    industryBenchmark?: boolean
    lastAssessmentDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGapAnalysis"]>

  export type SkillGapAnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    targetRole?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    skillGaps?: boolean
    improvementRoadmap?: boolean
    progressTracking?: boolean
    industryBenchmark?: boolean
    lastAssessmentDate?: boolean
    createdAt?: boolean
  }

  export type SkillGapAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "targetRole" | "currentSkills" | "requiredSkills" | "skillGaps" | "improvementRoadmap" | "progressTracking" | "industryBenchmark" | "lastAssessmentDate" | "createdAt", ExtArgs["result"]["skillGapAnalysis"]>
  export type SkillGapAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillGapAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillGapAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillGapAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillGapAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      targetRole: string
      currentSkills: string | null
      requiredSkills: string | null
      skillGaps: string | null
      improvementRoadmap: string | null
      progressTracking: string | null
      industryBenchmark: string | null
      lastAssessmentDate: Date
      createdAt: Date
    }, ExtArgs["result"]["skillGapAnalysis"]>
    composites: {}
  }

  type SkillGapAnalysisGetPayload<S extends boolean | null | undefined | SkillGapAnalysisDefaultArgs> = $Result.GetResult<Prisma.$SkillGapAnalysisPayload, S>

  type SkillGapAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillGapAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillGapAnalysisCountAggregateInputType | true
    }

  export interface SkillGapAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillGapAnalysis'], meta: { name: 'SkillGapAnalysis' } }
    /**
     * Find zero or one SkillGapAnalysis that matches the filter.
     * @param {SkillGapAnalysisFindUniqueArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillGapAnalysisFindUniqueArgs>(args: SelectSubset<T, SkillGapAnalysisFindUniqueArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillGapAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillGapAnalysisFindUniqueOrThrowArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillGapAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillGapAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillGapAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisFindFirstArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillGapAnalysisFindFirstArgs>(args?: SelectSubset<T, SkillGapAnalysisFindFirstArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillGapAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisFindFirstOrThrowArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillGapAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillGapAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillGapAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillGapAnalyses
     * const skillGapAnalyses = await prisma.skillGapAnalysis.findMany()
     * 
     * // Get first 10 SkillGapAnalyses
     * const skillGapAnalyses = await prisma.skillGapAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillGapAnalysisWithIdOnly = await prisma.skillGapAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillGapAnalysisFindManyArgs>(args?: SelectSubset<T, SkillGapAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillGapAnalysis.
     * @param {SkillGapAnalysisCreateArgs} args - Arguments to create a SkillGapAnalysis.
     * @example
     * // Create one SkillGapAnalysis
     * const SkillGapAnalysis = await prisma.skillGapAnalysis.create({
     *   data: {
     *     // ... data to create a SkillGapAnalysis
     *   }
     * })
     * 
     */
    create<T extends SkillGapAnalysisCreateArgs>(args: SelectSubset<T, SkillGapAnalysisCreateArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillGapAnalyses.
     * @param {SkillGapAnalysisCreateManyArgs} args - Arguments to create many SkillGapAnalyses.
     * @example
     * // Create many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillGapAnalysisCreateManyArgs>(args?: SelectSubset<T, SkillGapAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillGapAnalyses and returns the data saved in the database.
     * @param {SkillGapAnalysisCreateManyAndReturnArgs} args - Arguments to create many SkillGapAnalyses.
     * @example
     * // Create many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillGapAnalyses and only return the `id`
     * const skillGapAnalysisWithIdOnly = await prisma.skillGapAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillGapAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillGapAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillGapAnalysis.
     * @param {SkillGapAnalysisDeleteArgs} args - Arguments to delete one SkillGapAnalysis.
     * @example
     * // Delete one SkillGapAnalysis
     * const SkillGapAnalysis = await prisma.skillGapAnalysis.delete({
     *   where: {
     *     // ... filter to delete one SkillGapAnalysis
     *   }
     * })
     * 
     */
    delete<T extends SkillGapAnalysisDeleteArgs>(args: SelectSubset<T, SkillGapAnalysisDeleteArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillGapAnalysis.
     * @param {SkillGapAnalysisUpdateArgs} args - Arguments to update one SkillGapAnalysis.
     * @example
     * // Update one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillGapAnalysisUpdateArgs>(args: SelectSubset<T, SkillGapAnalysisUpdateArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillGapAnalyses.
     * @param {SkillGapAnalysisDeleteManyArgs} args - Arguments to filter SkillGapAnalyses to delete.
     * @example
     * // Delete a few SkillGapAnalyses
     * const { count } = await prisma.skillGapAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillGapAnalysisDeleteManyArgs>(args?: SelectSubset<T, SkillGapAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillGapAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillGapAnalysisUpdateManyArgs>(args: SelectSubset<T, SkillGapAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillGapAnalyses and returns the data updated in the database.
     * @param {SkillGapAnalysisUpdateManyAndReturnArgs} args - Arguments to update many SkillGapAnalyses.
     * @example
     * // Update many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillGapAnalyses and only return the `id`
     * const skillGapAnalysisWithIdOnly = await prisma.skillGapAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillGapAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillGapAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillGapAnalysis.
     * @param {SkillGapAnalysisUpsertArgs} args - Arguments to update or create a SkillGapAnalysis.
     * @example
     * // Update or create a SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.upsert({
     *   create: {
     *     // ... data to create a SkillGapAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillGapAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends SkillGapAnalysisUpsertArgs>(args: SelectSubset<T, SkillGapAnalysisUpsertArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillGapAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisCountArgs} args - Arguments to filter SkillGapAnalyses to count.
     * @example
     * // Count the number of SkillGapAnalyses
     * const count = await prisma.skillGapAnalysis.count({
     *   where: {
     *     // ... the filter for the SkillGapAnalyses we want to count
     *   }
     * })
    **/
    count<T extends SkillGapAnalysisCountArgs>(
      args?: Subset<T, SkillGapAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillGapAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillGapAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillGapAnalysisAggregateArgs>(args: Subset<T, SkillGapAnalysisAggregateArgs>): Prisma.PrismaPromise<GetSkillGapAnalysisAggregateType<T>>

    /**
     * Group by SkillGapAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisGroupByArgs} args - Group by arguments.
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
      T extends SkillGapAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGapAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: SkillGapAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGapAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGapAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillGapAnalysis model
   */
  readonly fields: SkillGapAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillGapAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillGapAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SkillGapAnalysis model
   */ 
  interface SkillGapAnalysisFieldRefs {
    readonly id: FieldRef<"SkillGapAnalysis", 'Int'>
    readonly userId: FieldRef<"SkillGapAnalysis", 'Int'>
    readonly targetRole: FieldRef<"SkillGapAnalysis", 'String'>
    readonly currentSkills: FieldRef<"SkillGapAnalysis", 'String'>
    readonly requiredSkills: FieldRef<"SkillGapAnalysis", 'String'>
    readonly skillGaps: FieldRef<"SkillGapAnalysis", 'String'>
    readonly improvementRoadmap: FieldRef<"SkillGapAnalysis", 'String'>
    readonly progressTracking: FieldRef<"SkillGapAnalysis", 'String'>
    readonly industryBenchmark: FieldRef<"SkillGapAnalysis", 'String'>
    readonly lastAssessmentDate: FieldRef<"SkillGapAnalysis", 'DateTime'>
    readonly createdAt: FieldRef<"SkillGapAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillGapAnalysis findUnique
   */
  export type SkillGapAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis findUniqueOrThrow
   */
  export type SkillGapAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis findFirst
   */
  export type SkillGapAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillGapAnalyses.
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillGapAnalyses.
     */
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
  }

  /**
   * SkillGapAnalysis findFirstOrThrow
   */
  export type SkillGapAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillGapAnalyses.
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillGapAnalyses.
     */
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
  }

  /**
   * SkillGapAnalysis findMany
   */
  export type SkillGapAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalyses to fetch.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillGapAnalyses.
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
  }

  /**
   * SkillGapAnalysis create
   */
  export type SkillGapAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillGapAnalysis.
     */
    data: XOR<SkillGapAnalysisCreateInput, SkillGapAnalysisUncheckedCreateInput>
  }

  /**
   * SkillGapAnalysis createMany
   */
  export type SkillGapAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillGapAnalyses.
     */
    data: SkillGapAnalysisCreateManyInput | SkillGapAnalysisCreateManyInput[]
  }

  /**
   * SkillGapAnalysis createManyAndReturn
   */
  export type SkillGapAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many SkillGapAnalyses.
     */
    data: SkillGapAnalysisCreateManyInput | SkillGapAnalysisCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillGapAnalysis update
   */
  export type SkillGapAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillGapAnalysis.
     */
    data: XOR<SkillGapAnalysisUpdateInput, SkillGapAnalysisUncheckedUpdateInput>
    /**
     * Choose, which SkillGapAnalysis to update.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis updateMany
   */
  export type SkillGapAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillGapAnalyses.
     */
    data: XOR<SkillGapAnalysisUpdateManyMutationInput, SkillGapAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SkillGapAnalyses to update
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * Limit how many SkillGapAnalyses to update.
     */
    limit?: number
  }

  /**
   * SkillGapAnalysis updateManyAndReturn
   */
  export type SkillGapAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update SkillGapAnalyses.
     */
    data: XOR<SkillGapAnalysisUpdateManyMutationInput, SkillGapAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SkillGapAnalyses to update
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * Limit how many SkillGapAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillGapAnalysis upsert
   */
  export type SkillGapAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillGapAnalysis to update in case it exists.
     */
    where: SkillGapAnalysisWhereUniqueInput
    /**
     * In case the SkillGapAnalysis found by the `where` argument doesn't exist, create a new SkillGapAnalysis with this data.
     */
    create: XOR<SkillGapAnalysisCreateInput, SkillGapAnalysisUncheckedCreateInput>
    /**
     * In case the SkillGapAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillGapAnalysisUpdateInput, SkillGapAnalysisUncheckedUpdateInput>
  }

  /**
   * SkillGapAnalysis delete
   */
  export type SkillGapAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter which SkillGapAnalysis to delete.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis deleteMany
   */
  export type SkillGapAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillGapAnalyses to delete
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * Limit how many SkillGapAnalyses to delete.
     */
    limit?: number
  }

  /**
   * SkillGapAnalysis without action
   */
  export type SkillGapAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firebaseUid: 'firebaseUid',
    fullName: 'fullName',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserCareerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    professionalSummary: 'professionalSummary',
    skills: 'skills',
    targetIndustries: 'targetIndustries',
    careerObjectives: 'careerObjectives',
    marketAlignmentScore: 'marketAlignmentScore',
    lastUpdated: 'lastUpdated',
    createdAt: 'createdAt'
  };

  export type UserCareerProfileScalarFieldEnum = (typeof UserCareerProfileScalarFieldEnum)[keyof typeof UserCareerProfileScalarFieldEnum]


  export const ResumeAnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    personalInfo: 'personalInfo',
    skills: 'skills',
    workExperience: 'workExperience',
    education: 'education',
    confidenceScores: 'confidenceScores',
    rawText: 'rawText',
    originalFileName: 'originalFileName',
    fileSize: 'fileSize',
    processingStatus: 'processingStatus',
    createdAt: 'createdAt'
  };

  export type ResumeAnalysisScalarFieldEnum = (typeof ResumeAnalysisScalarFieldEnum)[keyof typeof ResumeAnalysisScalarFieldEnum]


  export const MentorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    industry: 'industry',
    expertise: 'expertise',
    yearsOfExperience: 'yearsOfExperience',
    availableHours: 'availableHours',
    bio: 'bio',
    linkedInProfile: 'linkedInProfile',
    languages: 'languages',
    culturalBackground: 'culturalBackground',
    createdAt: 'createdAt'
  };

  export type MentorProfileScalarFieldEnum = (typeof MentorProfileScalarFieldEnum)[keyof typeof MentorProfileScalarFieldEnum]


  export const MentorshipMatchScalarFieldEnum: {
    id: 'id',
    menteeId: 'menteeId',
    mentorId: 'mentorId',
    compatibilityScore: 'compatibilityScore',
    status: 'status',
    matchReason: 'matchReason',
    createdAt: 'createdAt'
  };

  export type MentorshipMatchScalarFieldEnum = (typeof MentorshipMatchScalarFieldEnum)[keyof typeof MentorshipMatchScalarFieldEnum]


  export const CoachingSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionType: 'sessionType',
    conversationLog: 'conversationLog',
    actionItems: 'actionItems',
    goals: 'goals',
    progress: 'progress',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoachingSessionScalarFieldEnum = (typeof CoachingSessionScalarFieldEnum)[keyof typeof CoachingSessionScalarFieldEnum]


  export const JobOpportunityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    location: 'location',
    description: 'description',
    requirements: 'requirements',
    salary: 'salary',
    jobType: 'jobType',
    industry: 'industry',
    sourceUrl: 'sourceUrl',
    postedDate: 'postedDate',
    createdAt: 'createdAt'
  };

  export type JobOpportunityScalarFieldEnum = (typeof JobOpportunityScalarFieldEnum)[keyof typeof JobOpportunityScalarFieldEnum]


  export const JobMatchScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobOpportunityId: 'jobOpportunityId',
    relevanceScore: 'relevanceScore',
    matchReason: 'matchReason',
    applicationStatus: 'applicationStatus',
    savedAt: 'savedAt',
    appliedAt: 'appliedAt',
    createdAt: 'createdAt'
  };

  export type JobMatchScalarFieldEnum = (typeof JobMatchScalarFieldEnum)[keyof typeof JobMatchScalarFieldEnum]


  export const SkillGapAnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    targetRole: 'targetRole',
    currentSkills: 'currentSkills',
    requiredSkills: 'requiredSkills',
    skillGaps: 'skillGaps',
    improvementRoadmap: 'improvementRoadmap',
    progressTracking: 'progressTracking',
    industryBenchmark: 'industryBenchmark',
    lastAssessmentDate: 'lastAssessmentDate',
    createdAt: 'createdAt'
  };

  export type SkillGapAnalysisScalarFieldEnum = (typeof SkillGapAnalysisScalarFieldEnum)[keyof typeof SkillGapAnalysisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    firebaseUid?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    careerProfile?: XOR<UserCareerProfileNullableScalarRelationFilter, UserCareerProfileWhereInput> | null
    resumeAnalyses?: ResumeAnalysisListRelationFilter
    mentorProfile?: XOR<MentorProfileNullableScalarRelationFilter, MentorProfileWhereInput> | null
    mentorshipMatches?: MentorshipMatchListRelationFilter
    coachingSessions?: CoachingSessionListRelationFilter
    jobMatches?: JobMatchListRelationFilter
    skillGapAnalyses?: SkillGapAnalysisListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    careerProfile?: UserCareerProfileOrderByWithRelationInput
    resumeAnalyses?: ResumeAnalysisOrderByRelationAggregateInput
    mentorProfile?: MentorProfileOrderByWithRelationInput
    mentorshipMatches?: MentorshipMatchOrderByRelationAggregateInput
    coachingSessions?: CoachingSessionOrderByRelationAggregateInput
    jobMatches?: JobMatchOrderByRelationAggregateInput
    skillGapAnalyses?: SkillGapAnalysisOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    firebaseUid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    careerProfile?: XOR<UserCareerProfileNullableScalarRelationFilter, UserCareerProfileWhereInput> | null
    resumeAnalyses?: ResumeAnalysisListRelationFilter
    mentorProfile?: XOR<MentorProfileNullableScalarRelationFilter, MentorProfileWhereInput> | null
    mentorshipMatches?: MentorshipMatchListRelationFilter
    coachingSessions?: CoachingSessionListRelationFilter
    jobMatches?: JobMatchListRelationFilter
    skillGapAnalyses?: SkillGapAnalysisListRelationFilter
  }, "id" | "email" | "firebaseUid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    firebaseUid?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserCareerProfileWhereInput = {
    AND?: UserCareerProfileWhereInput | UserCareerProfileWhereInput[]
    OR?: UserCareerProfileWhereInput[]
    NOT?: UserCareerProfileWhereInput | UserCareerProfileWhereInput[]
    id?: IntFilter<"UserCareerProfile"> | number
    userId?: IntFilter<"UserCareerProfile"> | number
    professionalSummary?: StringNullableFilter<"UserCareerProfile"> | string | null
    skills?: StringNullableFilter<"UserCareerProfile"> | string | null
    targetIndustries?: StringNullableFilter<"UserCareerProfile"> | string | null
    careerObjectives?: StringNullableFilter<"UserCareerProfile"> | string | null
    marketAlignmentScore?: FloatNullableFilter<"UserCareerProfile"> | number | null
    lastUpdated?: DateTimeFilter<"UserCareerProfile"> | Date | string
    createdAt?: DateTimeFilter<"UserCareerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserCareerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    professionalSummary?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    targetIndustries?: SortOrderInput | SortOrder
    careerObjectives?: SortOrderInput | SortOrder
    marketAlignmentScore?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserCareerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserCareerProfileWhereInput | UserCareerProfileWhereInput[]
    OR?: UserCareerProfileWhereInput[]
    NOT?: UserCareerProfileWhereInput | UserCareerProfileWhereInput[]
    professionalSummary?: StringNullableFilter<"UserCareerProfile"> | string | null
    skills?: StringNullableFilter<"UserCareerProfile"> | string | null
    targetIndustries?: StringNullableFilter<"UserCareerProfile"> | string | null
    careerObjectives?: StringNullableFilter<"UserCareerProfile"> | string | null
    marketAlignmentScore?: FloatNullableFilter<"UserCareerProfile"> | number | null
    lastUpdated?: DateTimeFilter<"UserCareerProfile"> | Date | string
    createdAt?: DateTimeFilter<"UserCareerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserCareerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    professionalSummary?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    targetIndustries?: SortOrderInput | SortOrder
    careerObjectives?: SortOrderInput | SortOrder
    marketAlignmentScore?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    _count?: UserCareerProfileCountOrderByAggregateInput
    _avg?: UserCareerProfileAvgOrderByAggregateInput
    _max?: UserCareerProfileMaxOrderByAggregateInput
    _min?: UserCareerProfileMinOrderByAggregateInput
    _sum?: UserCareerProfileSumOrderByAggregateInput
  }

  export type UserCareerProfileScalarWhereWithAggregatesInput = {
    AND?: UserCareerProfileScalarWhereWithAggregatesInput | UserCareerProfileScalarWhereWithAggregatesInput[]
    OR?: UserCareerProfileScalarWhereWithAggregatesInput[]
    NOT?: UserCareerProfileScalarWhereWithAggregatesInput | UserCareerProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCareerProfile"> | number
    userId?: IntWithAggregatesFilter<"UserCareerProfile"> | number
    professionalSummary?: StringNullableWithAggregatesFilter<"UserCareerProfile"> | string | null
    skills?: StringNullableWithAggregatesFilter<"UserCareerProfile"> | string | null
    targetIndustries?: StringNullableWithAggregatesFilter<"UserCareerProfile"> | string | null
    careerObjectives?: StringNullableWithAggregatesFilter<"UserCareerProfile"> | string | null
    marketAlignmentScore?: FloatNullableWithAggregatesFilter<"UserCareerProfile"> | number | null
    lastUpdated?: DateTimeWithAggregatesFilter<"UserCareerProfile"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCareerProfile"> | Date | string
  }

  export type ResumeAnalysisWhereInput = {
    AND?: ResumeAnalysisWhereInput | ResumeAnalysisWhereInput[]
    OR?: ResumeAnalysisWhereInput[]
    NOT?: ResumeAnalysisWhereInput | ResumeAnalysisWhereInput[]
    id?: IntFilter<"ResumeAnalysis"> | number
    userId?: IntFilter<"ResumeAnalysis"> | number
    personalInfo?: StringNullableFilter<"ResumeAnalysis"> | string | null
    skills?: StringNullableFilter<"ResumeAnalysis"> | string | null
    workExperience?: StringNullableFilter<"ResumeAnalysis"> | string | null
    education?: StringNullableFilter<"ResumeAnalysis"> | string | null
    confidenceScores?: StringNullableFilter<"ResumeAnalysis"> | string | null
    rawText?: StringNullableFilter<"ResumeAnalysis"> | string | null
    originalFileName?: StringNullableFilter<"ResumeAnalysis"> | string | null
    fileSize?: IntNullableFilter<"ResumeAnalysis"> | number | null
    processingStatus?: StringFilter<"ResumeAnalysis"> | string
    createdAt?: DateTimeFilter<"ResumeAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResumeAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    personalInfo?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    workExperience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    confidenceScores?: SortOrderInput | SortOrder
    rawText?: SortOrderInput | SortOrder
    originalFileName?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    processingStatus?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResumeAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResumeAnalysisWhereInput | ResumeAnalysisWhereInput[]
    OR?: ResumeAnalysisWhereInput[]
    NOT?: ResumeAnalysisWhereInput | ResumeAnalysisWhereInput[]
    userId?: IntFilter<"ResumeAnalysis"> | number
    personalInfo?: StringNullableFilter<"ResumeAnalysis"> | string | null
    skills?: StringNullableFilter<"ResumeAnalysis"> | string | null
    workExperience?: StringNullableFilter<"ResumeAnalysis"> | string | null
    education?: StringNullableFilter<"ResumeAnalysis"> | string | null
    confidenceScores?: StringNullableFilter<"ResumeAnalysis"> | string | null
    rawText?: StringNullableFilter<"ResumeAnalysis"> | string | null
    originalFileName?: StringNullableFilter<"ResumeAnalysis"> | string | null
    fileSize?: IntNullableFilter<"ResumeAnalysis"> | number | null
    processingStatus?: StringFilter<"ResumeAnalysis"> | string
    createdAt?: DateTimeFilter<"ResumeAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResumeAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    personalInfo?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    workExperience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    confidenceScores?: SortOrderInput | SortOrder
    rawText?: SortOrderInput | SortOrder
    originalFileName?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    processingStatus?: SortOrder
    createdAt?: SortOrder
    _count?: ResumeAnalysisCountOrderByAggregateInput
    _avg?: ResumeAnalysisAvgOrderByAggregateInput
    _max?: ResumeAnalysisMaxOrderByAggregateInput
    _min?: ResumeAnalysisMinOrderByAggregateInput
    _sum?: ResumeAnalysisSumOrderByAggregateInput
  }

  export type ResumeAnalysisScalarWhereWithAggregatesInput = {
    AND?: ResumeAnalysisScalarWhereWithAggregatesInput | ResumeAnalysisScalarWhereWithAggregatesInput[]
    OR?: ResumeAnalysisScalarWhereWithAggregatesInput[]
    NOT?: ResumeAnalysisScalarWhereWithAggregatesInput | ResumeAnalysisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResumeAnalysis"> | number
    userId?: IntWithAggregatesFilter<"ResumeAnalysis"> | number
    personalInfo?: StringNullableWithAggregatesFilter<"ResumeAnalysis"> | string | null
    skills?: StringNullableWithAggregatesFilter<"ResumeAnalysis"> | string | null
    workExperience?: StringNullableWithAggregatesFilter<"ResumeAnalysis"> | string | null
    education?: StringNullableWithAggregatesFilter<"ResumeAnalysis"> | string | null
    confidenceScores?: StringNullableWithAggregatesFilter<"ResumeAnalysis"> | string | null
    rawText?: StringNullableWithAggregatesFilter<"ResumeAnalysis"> | string | null
    originalFileName?: StringNullableWithAggregatesFilter<"ResumeAnalysis"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"ResumeAnalysis"> | number | null
    processingStatus?: StringWithAggregatesFilter<"ResumeAnalysis"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResumeAnalysis"> | Date | string
  }

  export type MentorProfileWhereInput = {
    AND?: MentorProfileWhereInput | MentorProfileWhereInput[]
    OR?: MentorProfileWhereInput[]
    NOT?: MentorProfileWhereInput | MentorProfileWhereInput[]
    id?: IntFilter<"MentorProfile"> | number
    userId?: IntFilter<"MentorProfile"> | number
    industry?: StringFilter<"MentorProfile"> | string
    expertise?: StringNullableFilter<"MentorProfile"> | string | null
    yearsOfExperience?: IntFilter<"MentorProfile"> | number
    availableHours?: StringNullableFilter<"MentorProfile"> | string | null
    bio?: StringNullableFilter<"MentorProfile"> | string | null
    linkedInProfile?: StringNullableFilter<"MentorProfile"> | string | null
    languages?: StringNullableFilter<"MentorProfile"> | string | null
    culturalBackground?: StringNullableFilter<"MentorProfile"> | string | null
    createdAt?: DateTimeFilter<"MentorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentorshipMatches?: MentorshipMatchListRelationFilter
  }

  export type MentorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    expertise?: SortOrderInput | SortOrder
    yearsOfExperience?: SortOrder
    availableHours?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    linkedInProfile?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    culturalBackground?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    mentorshipMatches?: MentorshipMatchOrderByRelationAggregateInput
  }

  export type MentorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: MentorProfileWhereInput | MentorProfileWhereInput[]
    OR?: MentorProfileWhereInput[]
    NOT?: MentorProfileWhereInput | MentorProfileWhereInput[]
    industry?: StringFilter<"MentorProfile"> | string
    expertise?: StringNullableFilter<"MentorProfile"> | string | null
    yearsOfExperience?: IntFilter<"MentorProfile"> | number
    availableHours?: StringNullableFilter<"MentorProfile"> | string | null
    bio?: StringNullableFilter<"MentorProfile"> | string | null
    linkedInProfile?: StringNullableFilter<"MentorProfile"> | string | null
    languages?: StringNullableFilter<"MentorProfile"> | string | null
    culturalBackground?: StringNullableFilter<"MentorProfile"> | string | null
    createdAt?: DateTimeFilter<"MentorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentorshipMatches?: MentorshipMatchListRelationFilter
  }, "id" | "userId">

  export type MentorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    expertise?: SortOrderInput | SortOrder
    yearsOfExperience?: SortOrder
    availableHours?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    linkedInProfile?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    culturalBackground?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MentorProfileCountOrderByAggregateInput
    _avg?: MentorProfileAvgOrderByAggregateInput
    _max?: MentorProfileMaxOrderByAggregateInput
    _min?: MentorProfileMinOrderByAggregateInput
    _sum?: MentorProfileSumOrderByAggregateInput
  }

  export type MentorProfileScalarWhereWithAggregatesInput = {
    AND?: MentorProfileScalarWhereWithAggregatesInput | MentorProfileScalarWhereWithAggregatesInput[]
    OR?: MentorProfileScalarWhereWithAggregatesInput[]
    NOT?: MentorProfileScalarWhereWithAggregatesInput | MentorProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MentorProfile"> | number
    userId?: IntWithAggregatesFilter<"MentorProfile"> | number
    industry?: StringWithAggregatesFilter<"MentorProfile"> | string
    expertise?: StringNullableWithAggregatesFilter<"MentorProfile"> | string | null
    yearsOfExperience?: IntWithAggregatesFilter<"MentorProfile"> | number
    availableHours?: StringNullableWithAggregatesFilter<"MentorProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"MentorProfile"> | string | null
    linkedInProfile?: StringNullableWithAggregatesFilter<"MentorProfile"> | string | null
    languages?: StringNullableWithAggregatesFilter<"MentorProfile"> | string | null
    culturalBackground?: StringNullableWithAggregatesFilter<"MentorProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MentorProfile"> | Date | string
  }

  export type MentorshipMatchWhereInput = {
    AND?: MentorshipMatchWhereInput | MentorshipMatchWhereInput[]
    OR?: MentorshipMatchWhereInput[]
    NOT?: MentorshipMatchWhereInput | MentorshipMatchWhereInput[]
    id?: IntFilter<"MentorshipMatch"> | number
    menteeId?: IntFilter<"MentorshipMatch"> | number
    mentorId?: IntFilter<"MentorshipMatch"> | number
    compatibilityScore?: FloatFilter<"MentorshipMatch"> | number
    status?: StringFilter<"MentorshipMatch"> | string
    matchReason?: StringNullableFilter<"MentorshipMatch"> | string | null
    createdAt?: DateTimeFilter<"MentorshipMatch"> | Date | string
    mentee?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<MentorProfileScalarRelationFilter, MentorProfileWhereInput>
  }

  export type MentorshipMatchOrderByWithRelationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    compatibilityScore?: SortOrder
    status?: SortOrder
    matchReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mentee?: UserOrderByWithRelationInput
    mentor?: MentorProfileOrderByWithRelationInput
  }

  export type MentorshipMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MentorshipMatchWhereInput | MentorshipMatchWhereInput[]
    OR?: MentorshipMatchWhereInput[]
    NOT?: MentorshipMatchWhereInput | MentorshipMatchWhereInput[]
    menteeId?: IntFilter<"MentorshipMatch"> | number
    mentorId?: IntFilter<"MentorshipMatch"> | number
    compatibilityScore?: FloatFilter<"MentorshipMatch"> | number
    status?: StringFilter<"MentorshipMatch"> | string
    matchReason?: StringNullableFilter<"MentorshipMatch"> | string | null
    createdAt?: DateTimeFilter<"MentorshipMatch"> | Date | string
    mentee?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<MentorProfileScalarRelationFilter, MentorProfileWhereInput>
  }, "id">

  export type MentorshipMatchOrderByWithAggregationInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    compatibilityScore?: SortOrder
    status?: SortOrder
    matchReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MentorshipMatchCountOrderByAggregateInput
    _avg?: MentorshipMatchAvgOrderByAggregateInput
    _max?: MentorshipMatchMaxOrderByAggregateInput
    _min?: MentorshipMatchMinOrderByAggregateInput
    _sum?: MentorshipMatchSumOrderByAggregateInput
  }

  export type MentorshipMatchScalarWhereWithAggregatesInput = {
    AND?: MentorshipMatchScalarWhereWithAggregatesInput | MentorshipMatchScalarWhereWithAggregatesInput[]
    OR?: MentorshipMatchScalarWhereWithAggregatesInput[]
    NOT?: MentorshipMatchScalarWhereWithAggregatesInput | MentorshipMatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MentorshipMatch"> | number
    menteeId?: IntWithAggregatesFilter<"MentorshipMatch"> | number
    mentorId?: IntWithAggregatesFilter<"MentorshipMatch"> | number
    compatibilityScore?: FloatWithAggregatesFilter<"MentorshipMatch"> | number
    status?: StringWithAggregatesFilter<"MentorshipMatch"> | string
    matchReason?: StringNullableWithAggregatesFilter<"MentorshipMatch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MentorshipMatch"> | Date | string
  }

  export type CoachingSessionWhereInput = {
    AND?: CoachingSessionWhereInput | CoachingSessionWhereInput[]
    OR?: CoachingSessionWhereInput[]
    NOT?: CoachingSessionWhereInput | CoachingSessionWhereInput[]
    id?: IntFilter<"CoachingSession"> | number
    userId?: IntFilter<"CoachingSession"> | number
    sessionType?: StringFilter<"CoachingSession"> | string
    conversationLog?: StringNullableFilter<"CoachingSession"> | string | null
    actionItems?: StringNullableFilter<"CoachingSession"> | string | null
    goals?: StringNullableFilter<"CoachingSession"> | string | null
    progress?: StringNullableFilter<"CoachingSession"> | string | null
    status?: StringFilter<"CoachingSession"> | string
    createdAt?: DateTimeFilter<"CoachingSession"> | Date | string
    updatedAt?: DateTimeFilter<"CoachingSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoachingSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionType?: SortOrder
    conversationLog?: SortOrderInput | SortOrder
    actionItems?: SortOrderInput | SortOrder
    goals?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoachingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoachingSessionWhereInput | CoachingSessionWhereInput[]
    OR?: CoachingSessionWhereInput[]
    NOT?: CoachingSessionWhereInput | CoachingSessionWhereInput[]
    userId?: IntFilter<"CoachingSession"> | number
    sessionType?: StringFilter<"CoachingSession"> | string
    conversationLog?: StringNullableFilter<"CoachingSession"> | string | null
    actionItems?: StringNullableFilter<"CoachingSession"> | string | null
    goals?: StringNullableFilter<"CoachingSession"> | string | null
    progress?: StringNullableFilter<"CoachingSession"> | string | null
    status?: StringFilter<"CoachingSession"> | string
    createdAt?: DateTimeFilter<"CoachingSession"> | Date | string
    updatedAt?: DateTimeFilter<"CoachingSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CoachingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionType?: SortOrder
    conversationLog?: SortOrderInput | SortOrder
    actionItems?: SortOrderInput | SortOrder
    goals?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoachingSessionCountOrderByAggregateInput
    _avg?: CoachingSessionAvgOrderByAggregateInput
    _max?: CoachingSessionMaxOrderByAggregateInput
    _min?: CoachingSessionMinOrderByAggregateInput
    _sum?: CoachingSessionSumOrderByAggregateInput
  }

  export type CoachingSessionScalarWhereWithAggregatesInput = {
    AND?: CoachingSessionScalarWhereWithAggregatesInput | CoachingSessionScalarWhereWithAggregatesInput[]
    OR?: CoachingSessionScalarWhereWithAggregatesInput[]
    NOT?: CoachingSessionScalarWhereWithAggregatesInput | CoachingSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoachingSession"> | number
    userId?: IntWithAggregatesFilter<"CoachingSession"> | number
    sessionType?: StringWithAggregatesFilter<"CoachingSession"> | string
    conversationLog?: StringNullableWithAggregatesFilter<"CoachingSession"> | string | null
    actionItems?: StringNullableWithAggregatesFilter<"CoachingSession"> | string | null
    goals?: StringNullableWithAggregatesFilter<"CoachingSession"> | string | null
    progress?: StringNullableWithAggregatesFilter<"CoachingSession"> | string | null
    status?: StringWithAggregatesFilter<"CoachingSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoachingSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoachingSession"> | Date | string
  }

  export type JobOpportunityWhereInput = {
    AND?: JobOpportunityWhereInput | JobOpportunityWhereInput[]
    OR?: JobOpportunityWhereInput[]
    NOT?: JobOpportunityWhereInput | JobOpportunityWhereInput[]
    id?: IntFilter<"JobOpportunity"> | number
    title?: StringFilter<"JobOpportunity"> | string
    company?: StringFilter<"JobOpportunity"> | string
    location?: StringFilter<"JobOpportunity"> | string
    description?: StringNullableFilter<"JobOpportunity"> | string | null
    requirements?: StringNullableFilter<"JobOpportunity"> | string | null
    salary?: StringNullableFilter<"JobOpportunity"> | string | null
    jobType?: StringNullableFilter<"JobOpportunity"> | string | null
    industry?: StringNullableFilter<"JobOpportunity"> | string | null
    sourceUrl?: StringNullableFilter<"JobOpportunity"> | string | null
    postedDate?: DateTimeNullableFilter<"JobOpportunity"> | Date | string | null
    createdAt?: DateTimeFilter<"JobOpportunity"> | Date | string
    jobMatches?: JobMatchListRelationFilter
  }

  export type JobOpportunityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    postedDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    jobMatches?: JobMatchOrderByRelationAggregateInput
  }

  export type JobOpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobOpportunityWhereInput | JobOpportunityWhereInput[]
    OR?: JobOpportunityWhereInput[]
    NOT?: JobOpportunityWhereInput | JobOpportunityWhereInput[]
    title?: StringFilter<"JobOpportunity"> | string
    company?: StringFilter<"JobOpportunity"> | string
    location?: StringFilter<"JobOpportunity"> | string
    description?: StringNullableFilter<"JobOpportunity"> | string | null
    requirements?: StringNullableFilter<"JobOpportunity"> | string | null
    salary?: StringNullableFilter<"JobOpportunity"> | string | null
    jobType?: StringNullableFilter<"JobOpportunity"> | string | null
    industry?: StringNullableFilter<"JobOpportunity"> | string | null
    sourceUrl?: StringNullableFilter<"JobOpportunity"> | string | null
    postedDate?: DateTimeNullableFilter<"JobOpportunity"> | Date | string | null
    createdAt?: DateTimeFilter<"JobOpportunity"> | Date | string
    jobMatches?: JobMatchListRelationFilter
  }, "id">

  export type JobOpportunityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    postedDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JobOpportunityCountOrderByAggregateInput
    _avg?: JobOpportunityAvgOrderByAggregateInput
    _max?: JobOpportunityMaxOrderByAggregateInput
    _min?: JobOpportunityMinOrderByAggregateInput
    _sum?: JobOpportunitySumOrderByAggregateInput
  }

  export type JobOpportunityScalarWhereWithAggregatesInput = {
    AND?: JobOpportunityScalarWhereWithAggregatesInput | JobOpportunityScalarWhereWithAggregatesInput[]
    OR?: JobOpportunityScalarWhereWithAggregatesInput[]
    NOT?: JobOpportunityScalarWhereWithAggregatesInput | JobOpportunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobOpportunity"> | number
    title?: StringWithAggregatesFilter<"JobOpportunity"> | string
    company?: StringWithAggregatesFilter<"JobOpportunity"> | string
    location?: StringWithAggregatesFilter<"JobOpportunity"> | string
    description?: StringNullableWithAggregatesFilter<"JobOpportunity"> | string | null
    requirements?: StringNullableWithAggregatesFilter<"JobOpportunity"> | string | null
    salary?: StringNullableWithAggregatesFilter<"JobOpportunity"> | string | null
    jobType?: StringNullableWithAggregatesFilter<"JobOpportunity"> | string | null
    industry?: StringNullableWithAggregatesFilter<"JobOpportunity"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"JobOpportunity"> | string | null
    postedDate?: DateTimeNullableWithAggregatesFilter<"JobOpportunity"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobOpportunity"> | Date | string
  }

  export type JobMatchWhereInput = {
    AND?: JobMatchWhereInput | JobMatchWhereInput[]
    OR?: JobMatchWhereInput[]
    NOT?: JobMatchWhereInput | JobMatchWhereInput[]
    id?: IntFilter<"JobMatch"> | number
    userId?: IntFilter<"JobMatch"> | number
    jobOpportunityId?: IntFilter<"JobMatch"> | number
    relevanceScore?: FloatFilter<"JobMatch"> | number
    matchReason?: StringNullableFilter<"JobMatch"> | string | null
    applicationStatus?: StringFilter<"JobMatch"> | string
    savedAt?: DateTimeNullableFilter<"JobMatch"> | Date | string | null
    appliedAt?: DateTimeNullableFilter<"JobMatch"> | Date | string | null
    createdAt?: DateTimeFilter<"JobMatch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobOpportunity?: XOR<JobOpportunityScalarRelationFilter, JobOpportunityWhereInput>
  }

  export type JobMatchOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobOpportunityId?: SortOrder
    relevanceScore?: SortOrder
    matchReason?: SortOrderInput | SortOrder
    applicationStatus?: SortOrder
    savedAt?: SortOrderInput | SortOrder
    appliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobOpportunity?: JobOpportunityOrderByWithRelationInput
  }

  export type JobMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobMatchWhereInput | JobMatchWhereInput[]
    OR?: JobMatchWhereInput[]
    NOT?: JobMatchWhereInput | JobMatchWhereInput[]
    userId?: IntFilter<"JobMatch"> | number
    jobOpportunityId?: IntFilter<"JobMatch"> | number
    relevanceScore?: FloatFilter<"JobMatch"> | number
    matchReason?: StringNullableFilter<"JobMatch"> | string | null
    applicationStatus?: StringFilter<"JobMatch"> | string
    savedAt?: DateTimeNullableFilter<"JobMatch"> | Date | string | null
    appliedAt?: DateTimeNullableFilter<"JobMatch"> | Date | string | null
    createdAt?: DateTimeFilter<"JobMatch"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobOpportunity?: XOR<JobOpportunityScalarRelationFilter, JobOpportunityWhereInput>
  }, "id">

  export type JobMatchOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobOpportunityId?: SortOrder
    relevanceScore?: SortOrder
    matchReason?: SortOrderInput | SortOrder
    applicationStatus?: SortOrder
    savedAt?: SortOrderInput | SortOrder
    appliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JobMatchCountOrderByAggregateInput
    _avg?: JobMatchAvgOrderByAggregateInput
    _max?: JobMatchMaxOrderByAggregateInput
    _min?: JobMatchMinOrderByAggregateInput
    _sum?: JobMatchSumOrderByAggregateInput
  }

  export type JobMatchScalarWhereWithAggregatesInput = {
    AND?: JobMatchScalarWhereWithAggregatesInput | JobMatchScalarWhereWithAggregatesInput[]
    OR?: JobMatchScalarWhereWithAggregatesInput[]
    NOT?: JobMatchScalarWhereWithAggregatesInput | JobMatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobMatch"> | number
    userId?: IntWithAggregatesFilter<"JobMatch"> | number
    jobOpportunityId?: IntWithAggregatesFilter<"JobMatch"> | number
    relevanceScore?: FloatWithAggregatesFilter<"JobMatch"> | number
    matchReason?: StringNullableWithAggregatesFilter<"JobMatch"> | string | null
    applicationStatus?: StringWithAggregatesFilter<"JobMatch"> | string
    savedAt?: DateTimeNullableWithAggregatesFilter<"JobMatch"> | Date | string | null
    appliedAt?: DateTimeNullableWithAggregatesFilter<"JobMatch"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobMatch"> | Date | string
  }

  export type SkillGapAnalysisWhereInput = {
    AND?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    OR?: SkillGapAnalysisWhereInput[]
    NOT?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    id?: IntFilter<"SkillGapAnalysis"> | number
    userId?: IntFilter<"SkillGapAnalysis"> | number
    targetRole?: StringFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    requiredSkills?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    skillGaps?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    improvementRoadmap?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    progressTracking?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    industryBenchmark?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    lastAssessmentDate?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillGapAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetRole?: SortOrder
    currentSkills?: SortOrderInput | SortOrder
    requiredSkills?: SortOrderInput | SortOrder
    skillGaps?: SortOrderInput | SortOrder
    improvementRoadmap?: SortOrderInput | SortOrder
    progressTracking?: SortOrderInput | SortOrder
    industryBenchmark?: SortOrderInput | SortOrder
    lastAssessmentDate?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillGapAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    OR?: SkillGapAnalysisWhereInput[]
    NOT?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    userId?: IntFilter<"SkillGapAnalysis"> | number
    targetRole?: StringFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    requiredSkills?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    skillGaps?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    improvementRoadmap?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    progressTracking?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    industryBenchmark?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    lastAssessmentDate?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SkillGapAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetRole?: SortOrder
    currentSkills?: SortOrderInput | SortOrder
    requiredSkills?: SortOrderInput | SortOrder
    skillGaps?: SortOrderInput | SortOrder
    improvementRoadmap?: SortOrderInput | SortOrder
    progressTracking?: SortOrderInput | SortOrder
    industryBenchmark?: SortOrderInput | SortOrder
    lastAssessmentDate?: SortOrder
    createdAt?: SortOrder
    _count?: SkillGapAnalysisCountOrderByAggregateInput
    _avg?: SkillGapAnalysisAvgOrderByAggregateInput
    _max?: SkillGapAnalysisMaxOrderByAggregateInput
    _min?: SkillGapAnalysisMinOrderByAggregateInput
    _sum?: SkillGapAnalysisSumOrderByAggregateInput
  }

  export type SkillGapAnalysisScalarWhereWithAggregatesInput = {
    AND?: SkillGapAnalysisScalarWhereWithAggregatesInput | SkillGapAnalysisScalarWhereWithAggregatesInput[]
    OR?: SkillGapAnalysisScalarWhereWithAggregatesInput[]
    NOT?: SkillGapAnalysisScalarWhereWithAggregatesInput | SkillGapAnalysisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SkillGapAnalysis"> | number
    userId?: IntWithAggregatesFilter<"SkillGapAnalysis"> | number
    targetRole?: StringWithAggregatesFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableWithAggregatesFilter<"SkillGapAnalysis"> | string | null
    requiredSkills?: StringNullableWithAggregatesFilter<"SkillGapAnalysis"> | string | null
    skillGaps?: StringNullableWithAggregatesFilter<"SkillGapAnalysis"> | string | null
    improvementRoadmap?: StringNullableWithAggregatesFilter<"SkillGapAnalysis"> | string | null
    progressTracking?: StringNullableWithAggregatesFilter<"SkillGapAnalysis"> | string | null
    industryBenchmark?: StringNullableWithAggregatesFilter<"SkillGapAnalysis"> | string | null
    lastAssessmentDate?: DateTimeWithAggregatesFilter<"SkillGapAnalysis"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SkillGapAnalysis"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileUncheckedCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionUncheckedCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUncheckedUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProfileCreateInput = {
    professionalSummary?: string | null
    skills?: string | null
    targetIndustries?: string | null
    careerObjectives?: string | null
    marketAlignmentScore?: number | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCareerProfileInput
  }

  export type UserCareerProfileUncheckedCreateInput = {
    id?: number
    userId: number
    professionalSummary?: string | null
    skills?: string | null
    targetIndustries?: string | null
    careerObjectives?: string | null
    marketAlignmentScore?: number | null
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type UserCareerProfileUpdateInput = {
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustries?: NullableStringFieldUpdateOperationsInput | string | null
    careerObjectives?: NullableStringFieldUpdateOperationsInput | string | null
    marketAlignmentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCareerProfileNestedInput
  }

  export type UserCareerProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustries?: NullableStringFieldUpdateOperationsInput | string | null
    careerObjectives?: NullableStringFieldUpdateOperationsInput | string | null
    marketAlignmentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProfileCreateManyInput = {
    id?: number
    userId: number
    professionalSummary?: string | null
    skills?: string | null
    targetIndustries?: string | null
    careerObjectives?: string | null
    marketAlignmentScore?: number | null
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type UserCareerProfileUpdateManyMutationInput = {
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustries?: NullableStringFieldUpdateOperationsInput | string | null
    careerObjectives?: NullableStringFieldUpdateOperationsInput | string | null
    marketAlignmentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustries?: NullableStringFieldUpdateOperationsInput | string | null
    careerObjectives?: NullableStringFieldUpdateOperationsInput | string | null
    marketAlignmentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeAnalysisCreateInput = {
    personalInfo?: string | null
    skills?: string | null
    workExperience?: string | null
    education?: string | null
    confidenceScores?: string | null
    rawText?: string | null
    originalFileName?: string | null
    fileSize?: number | null
    processingStatus?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutResumeAnalysesInput
  }

  export type ResumeAnalysisUncheckedCreateInput = {
    id?: number
    userId: number
    personalInfo?: string | null
    skills?: string | null
    workExperience?: string | null
    education?: string | null
    confidenceScores?: string | null
    rawText?: string | null
    originalFileName?: string | null
    fileSize?: number | null
    processingStatus?: string
    createdAt?: Date | string
  }

  export type ResumeAnalysisUpdateInput = {
    personalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScores?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumeAnalysesNestedInput
  }

  export type ResumeAnalysisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    personalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScores?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeAnalysisCreateManyInput = {
    id?: number
    userId: number
    personalInfo?: string | null
    skills?: string | null
    workExperience?: string | null
    education?: string | null
    confidenceScores?: string | null
    rawText?: string | null
    originalFileName?: string | null
    fileSize?: number | null
    processingStatus?: string
    createdAt?: Date | string
  }

  export type ResumeAnalysisUpdateManyMutationInput = {
    personalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScores?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeAnalysisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    personalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScores?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorProfileCreateInput = {
    industry: string
    expertise?: string | null
    yearsOfExperience: number
    availableHours?: string | null
    bio?: string | null
    linkedInProfile?: string | null
    languages?: string | null
    culturalBackground?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMentorProfileInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileUncheckedCreateInput = {
    id?: number
    userId: number
    industry: string
    expertise?: string | null
    yearsOfExperience: number
    availableHours?: string | null
    bio?: string | null
    linkedInProfile?: string | null
    languages?: string | null
    culturalBackground?: string | null
    createdAt?: Date | string
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileUpdateInput = {
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentorProfileNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfileCreateManyInput = {
    id?: number
    userId: number
    industry: string
    expertise?: string | null
    yearsOfExperience: number
    availableHours?: string | null
    bio?: string | null
    linkedInProfile?: string | null
    languages?: string | null
    culturalBackground?: string | null
    createdAt?: Date | string
  }

  export type MentorProfileUpdateManyMutationInput = {
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorshipMatchCreateInput = {
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
    mentee: UserCreateNestedOneWithoutMentorshipMatchesInput
    mentor: MentorProfileCreateNestedOneWithoutMentorshipMatchesInput
  }

  export type MentorshipMatchUncheckedCreateInput = {
    id?: number
    menteeId: number
    mentorId: number
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
  }

  export type MentorshipMatchUpdateInput = {
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentee?: UserUpdateOneRequiredWithoutMentorshipMatchesNestedInput
    mentor?: MentorProfileUpdateOneRequiredWithoutMentorshipMatchesNestedInput
  }

  export type MentorshipMatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorshipMatchCreateManyInput = {
    id?: number
    menteeId: number
    mentorId: number
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
  }

  export type MentorshipMatchUpdateManyMutationInput = {
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorshipMatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingSessionCreateInput = {
    sessionType: string
    conversationLog?: string | null
    actionItems?: string | null
    goals?: string | null
    progress?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachingSessionsInput
  }

  export type CoachingSessionUncheckedCreateInput = {
    id?: number
    userId: number
    sessionType: string
    conversationLog?: string | null
    actionItems?: string | null
    goals?: string | null
    progress?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingSessionUpdateInput = {
    sessionType?: StringFieldUpdateOperationsInput | string
    conversationLog?: NullableStringFieldUpdateOperationsInput | string | null
    actionItems?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachingSessionsNestedInput
  }

  export type CoachingSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionType?: StringFieldUpdateOperationsInput | string
    conversationLog?: NullableStringFieldUpdateOperationsInput | string | null
    actionItems?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingSessionCreateManyInput = {
    id?: number
    userId: number
    sessionType: string
    conversationLog?: string | null
    actionItems?: string | null
    goals?: string | null
    progress?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingSessionUpdateManyMutationInput = {
    sessionType?: StringFieldUpdateOperationsInput | string
    conversationLog?: NullableStringFieldUpdateOperationsInput | string | null
    actionItems?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionType?: StringFieldUpdateOperationsInput | string
    conversationLog?: NullableStringFieldUpdateOperationsInput | string | null
    actionItems?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpportunityCreateInput = {
    title: string
    company: string
    location: string
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobType?: string | null
    industry?: string | null
    sourceUrl?: string | null
    postedDate?: Date | string | null
    createdAt?: Date | string
    jobMatches?: JobMatchCreateNestedManyWithoutJobOpportunityInput
  }

  export type JobOpportunityUncheckedCreateInput = {
    id?: number
    title: string
    company: string
    location: string
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobType?: string | null
    industry?: string | null
    sourceUrl?: string | null
    postedDate?: Date | string | null
    createdAt?: Date | string
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutJobOpportunityInput
  }

  export type JobOpportunityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobMatches?: JobMatchUpdateManyWithoutJobOpportunityNestedInput
  }

  export type JobOpportunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobMatches?: JobMatchUncheckedUpdateManyWithoutJobOpportunityNestedInput
  }

  export type JobOpportunityCreateManyInput = {
    id?: number
    title: string
    company: string
    location: string
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobType?: string | null
    industry?: string | null
    sourceUrl?: string | null
    postedDate?: Date | string | null
    createdAt?: Date | string
  }

  export type JobOpportunityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpportunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchCreateInput = {
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJobMatchesInput
    jobOpportunity: JobOpportunityCreateNestedOneWithoutJobMatchesInput
  }

  export type JobMatchUncheckedCreateInput = {
    id?: number
    userId: number
    jobOpportunityId: number
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type JobMatchUpdateInput = {
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobMatchesNestedInput
    jobOpportunity?: JobOpportunityUpdateOneRequiredWithoutJobMatchesNestedInput
  }

  export type JobMatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jobOpportunityId?: IntFieldUpdateOperationsInput | number
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchCreateManyInput = {
    id?: number
    userId: number
    jobOpportunityId: number
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type JobMatchUpdateManyMutationInput = {
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jobOpportunityId?: IntFieldUpdateOperationsInput | number
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisCreateInput = {
    targetRole: string
    currentSkills?: string | null
    requiredSkills?: string | null
    skillGaps?: string | null
    improvementRoadmap?: string | null
    progressTracking?: string | null
    industryBenchmark?: string | null
    lastAssessmentDate?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSkillGapAnalysesInput
  }

  export type SkillGapAnalysisUncheckedCreateInput = {
    id?: number
    userId: number
    targetRole: string
    currentSkills?: string | null
    requiredSkills?: string | null
    skillGaps?: string | null
    improvementRoadmap?: string | null
    progressTracking?: string | null
    industryBenchmark?: string | null
    lastAssessmentDate?: Date | string
    createdAt?: Date | string
  }

  export type SkillGapAnalysisUpdateInput = {
    targetRole?: StringFieldUpdateOperationsInput | string
    currentSkills?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    skillGaps?: NullableStringFieldUpdateOperationsInput | string | null
    improvementRoadmap?: NullableStringFieldUpdateOperationsInput | string | null
    progressTracking?: NullableStringFieldUpdateOperationsInput | string | null
    industryBenchmark?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssessmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillGapAnalysesNestedInput
  }

  export type SkillGapAnalysisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    targetRole?: StringFieldUpdateOperationsInput | string
    currentSkills?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    skillGaps?: NullableStringFieldUpdateOperationsInput | string | null
    improvementRoadmap?: NullableStringFieldUpdateOperationsInput | string | null
    progressTracking?: NullableStringFieldUpdateOperationsInput | string | null
    industryBenchmark?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssessmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisCreateManyInput = {
    id?: number
    userId: number
    targetRole: string
    currentSkills?: string | null
    requiredSkills?: string | null
    skillGaps?: string | null
    improvementRoadmap?: string | null
    progressTracking?: string | null
    industryBenchmark?: string | null
    lastAssessmentDate?: Date | string
    createdAt?: Date | string
  }

  export type SkillGapAnalysisUpdateManyMutationInput = {
    targetRole?: StringFieldUpdateOperationsInput | string
    currentSkills?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    skillGaps?: NullableStringFieldUpdateOperationsInput | string | null
    improvementRoadmap?: NullableStringFieldUpdateOperationsInput | string | null
    progressTracking?: NullableStringFieldUpdateOperationsInput | string | null
    industryBenchmark?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssessmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    targetRole?: StringFieldUpdateOperationsInput | string
    currentSkills?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    skillGaps?: NullableStringFieldUpdateOperationsInput | string | null
    improvementRoadmap?: NullableStringFieldUpdateOperationsInput | string | null
    progressTracking?: NullableStringFieldUpdateOperationsInput | string | null
    industryBenchmark?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssessmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type UserCareerProfileNullableScalarRelationFilter = {
    is?: UserCareerProfileWhereInput | null
    isNot?: UserCareerProfileWhereInput | null
  }

  export type ResumeAnalysisListRelationFilter = {
    every?: ResumeAnalysisWhereInput
    some?: ResumeAnalysisWhereInput
    none?: ResumeAnalysisWhereInput
  }

  export type MentorProfileNullableScalarRelationFilter = {
    is?: MentorProfileWhereInput | null
    isNot?: MentorProfileWhereInput | null
  }

  export type MentorshipMatchListRelationFilter = {
    every?: MentorshipMatchWhereInput
    some?: MentorshipMatchWhereInput
    none?: MentorshipMatchWhereInput
  }

  export type CoachingSessionListRelationFilter = {
    every?: CoachingSessionWhereInput
    some?: CoachingSessionWhereInput
    none?: CoachingSessionWhereInput
  }

  export type JobMatchListRelationFilter = {
    every?: JobMatchWhereInput
    some?: JobMatchWhereInput
    none?: JobMatchWhereInput
  }

  export type SkillGapAnalysisListRelationFilter = {
    every?: SkillGapAnalysisWhereInput
    some?: SkillGapAnalysisWhereInput
    none?: SkillGapAnalysisWhereInput
  }

  export type ResumeAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MentorshipMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillGapAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCareerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    professionalSummary?: SortOrder
    skills?: SortOrder
    targetIndustries?: SortOrder
    careerObjectives?: SortOrder
    marketAlignmentScore?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCareerProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marketAlignmentScore?: SortOrder
  }

  export type UserCareerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    professionalSummary?: SortOrder
    skills?: SortOrder
    targetIndustries?: SortOrder
    careerObjectives?: SortOrder
    marketAlignmentScore?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCareerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    professionalSummary?: SortOrder
    skills?: SortOrder
    targetIndustries?: SortOrder
    careerObjectives?: SortOrder
    marketAlignmentScore?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCareerProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marketAlignmentScore?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ResumeAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personalInfo?: SortOrder
    skills?: SortOrder
    workExperience?: SortOrder
    education?: SortOrder
    confidenceScores?: SortOrder
    rawText?: SortOrder
    originalFileName?: SortOrder
    fileSize?: SortOrder
    processingStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeAnalysisAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileSize?: SortOrder
  }

  export type ResumeAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personalInfo?: SortOrder
    skills?: SortOrder
    workExperience?: SortOrder
    education?: SortOrder
    confidenceScores?: SortOrder
    rawText?: SortOrder
    originalFileName?: SortOrder
    fileSize?: SortOrder
    processingStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personalInfo?: SortOrder
    skills?: SortOrder
    workExperience?: SortOrder
    education?: SortOrder
    confidenceScores?: SortOrder
    rawText?: SortOrder
    originalFileName?: SortOrder
    fileSize?: SortOrder
    processingStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeAnalysisSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileSize?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type MentorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    expertise?: SortOrder
    yearsOfExperience?: SortOrder
    availableHours?: SortOrder
    bio?: SortOrder
    linkedInProfile?: SortOrder
    languages?: SortOrder
    culturalBackground?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    yearsOfExperience?: SortOrder
  }

  export type MentorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    expertise?: SortOrder
    yearsOfExperience?: SortOrder
    availableHours?: SortOrder
    bio?: SortOrder
    linkedInProfile?: SortOrder
    languages?: SortOrder
    culturalBackground?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    expertise?: SortOrder
    yearsOfExperience?: SortOrder
    availableHours?: SortOrder
    bio?: SortOrder
    linkedInProfile?: SortOrder
    languages?: SortOrder
    culturalBackground?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    yearsOfExperience?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MentorProfileScalarRelationFilter = {
    is?: MentorProfileWhereInput
    isNot?: MentorProfileWhereInput
  }

  export type MentorshipMatchCountOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    compatibilityScore?: SortOrder
    status?: SortOrder
    matchReason?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorshipMatchAvgOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    compatibilityScore?: SortOrder
  }

  export type MentorshipMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    compatibilityScore?: SortOrder
    status?: SortOrder
    matchReason?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorshipMatchMinOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    compatibilityScore?: SortOrder
    status?: SortOrder
    matchReason?: SortOrder
    createdAt?: SortOrder
  }

  export type MentorshipMatchSumOrderByAggregateInput = {
    id?: SortOrder
    menteeId?: SortOrder
    mentorId?: SortOrder
    compatibilityScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CoachingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionType?: SortOrder
    conversationLog?: SortOrder
    actionItems?: SortOrder
    goals?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachingSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CoachingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionType?: SortOrder
    conversationLog?: SortOrder
    actionItems?: SortOrder
    goals?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionType?: SortOrder
    conversationLog?: SortOrder
    actionItems?: SortOrder
    goals?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachingSessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type JobOpportunityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    industry?: SortOrder
    sourceUrl?: SortOrder
    postedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type JobOpportunityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobOpportunityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    industry?: SortOrder
    sourceUrl?: SortOrder
    postedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type JobOpportunityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    location?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    salary?: SortOrder
    jobType?: SortOrder
    industry?: SortOrder
    sourceUrl?: SortOrder
    postedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type JobOpportunitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type JobOpportunityScalarRelationFilter = {
    is?: JobOpportunityWhereInput
    isNot?: JobOpportunityWhereInput
  }

  export type JobMatchCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobOpportunityId?: SortOrder
    relevanceScore?: SortOrder
    matchReason?: SortOrder
    applicationStatus?: SortOrder
    savedAt?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMatchAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobOpportunityId?: SortOrder
    relevanceScore?: SortOrder
  }

  export type JobMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobOpportunityId?: SortOrder
    relevanceScore?: SortOrder
    matchReason?: SortOrder
    applicationStatus?: SortOrder
    savedAt?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMatchMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobOpportunityId?: SortOrder
    relevanceScore?: SortOrder
    matchReason?: SortOrder
    applicationStatus?: SortOrder
    savedAt?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMatchSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobOpportunityId?: SortOrder
    relevanceScore?: SortOrder
  }

  export type SkillGapAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetRole?: SortOrder
    currentSkills?: SortOrder
    requiredSkills?: SortOrder
    skillGaps?: SortOrder
    improvementRoadmap?: SortOrder
    progressTracking?: SortOrder
    industryBenchmark?: SortOrder
    lastAssessmentDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillGapAnalysisAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SkillGapAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetRole?: SortOrder
    currentSkills?: SortOrder
    requiredSkills?: SortOrder
    skillGaps?: SortOrder
    improvementRoadmap?: SortOrder
    progressTracking?: SortOrder
    industryBenchmark?: SortOrder
    lastAssessmentDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillGapAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetRole?: SortOrder
    currentSkills?: SortOrder
    requiredSkills?: SortOrder
    skillGaps?: SortOrder
    improvementRoadmap?: SortOrder
    progressTracking?: SortOrder
    industryBenchmark?: SortOrder
    lastAssessmentDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillGapAnalysisSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserCareerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCareerProfileCreateWithoutUserInput, UserCareerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCareerProfileCreateOrConnectWithoutUserInput
    connect?: UserCareerProfileWhereUniqueInput
  }

  export type ResumeAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeAnalysisCreateWithoutUserInput, ResumeAnalysisUncheckedCreateWithoutUserInput> | ResumeAnalysisCreateWithoutUserInput[] | ResumeAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeAnalysisCreateOrConnectWithoutUserInput | ResumeAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: ResumeAnalysisCreateManyUserInputEnvelope
    connect?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
  }

  export type MentorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type MentorshipMatchCreateNestedManyWithoutMenteeInput = {
    create?: XOR<MentorshipMatchCreateWithoutMenteeInput, MentorshipMatchUncheckedCreateWithoutMenteeInput> | MentorshipMatchCreateWithoutMenteeInput[] | MentorshipMatchUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMenteeInput | MentorshipMatchCreateOrConnectWithoutMenteeInput[]
    createMany?: MentorshipMatchCreateManyMenteeInputEnvelope
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
  }

  export type CoachingSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingSessionCreateWithoutUserInput, CoachingSessionUncheckedCreateWithoutUserInput> | CoachingSessionCreateWithoutUserInput[] | CoachingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingSessionCreateOrConnectWithoutUserInput | CoachingSessionCreateOrConnectWithoutUserInput[]
    createMany?: CoachingSessionCreateManyUserInputEnvelope
    connect?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
  }

  export type JobMatchCreateNestedManyWithoutUserInput = {
    create?: XOR<JobMatchCreateWithoutUserInput, JobMatchUncheckedCreateWithoutUserInput> | JobMatchCreateWithoutUserInput[] | JobMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserInput | JobMatchCreateOrConnectWithoutUserInput[]
    createMany?: JobMatchCreateManyUserInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
  }

  export type SkillGapAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
  }

  export type UserCareerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCareerProfileCreateWithoutUserInput, UserCareerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCareerProfileCreateOrConnectWithoutUserInput
    connect?: UserCareerProfileWhereUniqueInput
  }

  export type ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeAnalysisCreateWithoutUserInput, ResumeAnalysisUncheckedCreateWithoutUserInput> | ResumeAnalysisCreateWithoutUserInput[] | ResumeAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeAnalysisCreateOrConnectWithoutUserInput | ResumeAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: ResumeAnalysisCreateManyUserInputEnvelope
    connect?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
  }

  export type MentorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput = {
    create?: XOR<MentorshipMatchCreateWithoutMenteeInput, MentorshipMatchUncheckedCreateWithoutMenteeInput> | MentorshipMatchCreateWithoutMenteeInput[] | MentorshipMatchUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMenteeInput | MentorshipMatchCreateOrConnectWithoutMenteeInput[]
    createMany?: MentorshipMatchCreateManyMenteeInputEnvelope
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
  }

  export type CoachingSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingSessionCreateWithoutUserInput, CoachingSessionUncheckedCreateWithoutUserInput> | CoachingSessionCreateWithoutUserInput[] | CoachingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingSessionCreateOrConnectWithoutUserInput | CoachingSessionCreateOrConnectWithoutUserInput[]
    createMany?: CoachingSessionCreateManyUserInputEnvelope
    connect?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
  }

  export type JobMatchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobMatchCreateWithoutUserInput, JobMatchUncheckedCreateWithoutUserInput> | JobMatchCreateWithoutUserInput[] | JobMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserInput | JobMatchCreateOrConnectWithoutUserInput[]
    createMany?: JobMatchCreateManyUserInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
  }

  export type SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCareerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCareerProfileCreateWithoutUserInput, UserCareerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCareerProfileCreateOrConnectWithoutUserInput
    upsert?: UserCareerProfileUpsertWithoutUserInput
    disconnect?: UserCareerProfileWhereInput | boolean
    delete?: UserCareerProfileWhereInput | boolean
    connect?: UserCareerProfileWhereUniqueInput
    update?: XOR<XOR<UserCareerProfileUpdateToOneWithWhereWithoutUserInput, UserCareerProfileUpdateWithoutUserInput>, UserCareerProfileUncheckedUpdateWithoutUserInput>
  }

  export type ResumeAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeAnalysisCreateWithoutUserInput, ResumeAnalysisUncheckedCreateWithoutUserInput> | ResumeAnalysisCreateWithoutUserInput[] | ResumeAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeAnalysisCreateOrConnectWithoutUserInput | ResumeAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: ResumeAnalysisUpsertWithWhereUniqueWithoutUserInput | ResumeAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeAnalysisCreateManyUserInputEnvelope
    set?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    disconnect?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    delete?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    connect?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    update?: ResumeAnalysisUpdateWithWhereUniqueWithoutUserInput | ResumeAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeAnalysisUpdateManyWithWhereWithoutUserInput | ResumeAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeAnalysisScalarWhereInput | ResumeAnalysisScalarWhereInput[]
  }

  export type MentorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    upsert?: MentorProfileUpsertWithoutUserInput
    disconnect?: MentorProfileWhereInput | boolean
    delete?: MentorProfileWhereInput | boolean
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutUserInput, MentorProfileUpdateWithoutUserInput>, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MentorshipMatchUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<MentorshipMatchCreateWithoutMenteeInput, MentorshipMatchUncheckedCreateWithoutMenteeInput> | MentorshipMatchCreateWithoutMenteeInput[] | MentorshipMatchUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMenteeInput | MentorshipMatchCreateOrConnectWithoutMenteeInput[]
    upsert?: MentorshipMatchUpsertWithWhereUniqueWithoutMenteeInput | MentorshipMatchUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: MentorshipMatchCreateManyMenteeInputEnvelope
    set?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    disconnect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    delete?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    update?: MentorshipMatchUpdateWithWhereUniqueWithoutMenteeInput | MentorshipMatchUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: MentorshipMatchUpdateManyWithWhereWithoutMenteeInput | MentorshipMatchUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: MentorshipMatchScalarWhereInput | MentorshipMatchScalarWhereInput[]
  }

  export type CoachingSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingSessionCreateWithoutUserInput, CoachingSessionUncheckedCreateWithoutUserInput> | CoachingSessionCreateWithoutUserInput[] | CoachingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingSessionCreateOrConnectWithoutUserInput | CoachingSessionCreateOrConnectWithoutUserInput[]
    upsert?: CoachingSessionUpsertWithWhereUniqueWithoutUserInput | CoachingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingSessionCreateManyUserInputEnvelope
    set?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    disconnect?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    delete?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    connect?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    update?: CoachingSessionUpdateWithWhereUniqueWithoutUserInput | CoachingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingSessionUpdateManyWithWhereWithoutUserInput | CoachingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingSessionScalarWhereInput | CoachingSessionScalarWhereInput[]
  }

  export type JobMatchUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobMatchCreateWithoutUserInput, JobMatchUncheckedCreateWithoutUserInput> | JobMatchCreateWithoutUserInput[] | JobMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserInput | JobMatchCreateOrConnectWithoutUserInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutUserInput | JobMatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobMatchCreateManyUserInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutUserInput | JobMatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutUserInput | JobMatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type SkillGapAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    set?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    disconnect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    delete?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    update?: SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillGapAnalysisUpdateManyWithWhereWithoutUserInput | SkillGapAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
  }

  export type UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCareerProfileCreateWithoutUserInput, UserCareerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCareerProfileCreateOrConnectWithoutUserInput
    upsert?: UserCareerProfileUpsertWithoutUserInput
    disconnect?: UserCareerProfileWhereInput | boolean
    delete?: UserCareerProfileWhereInput | boolean
    connect?: UserCareerProfileWhereUniqueInput
    update?: XOR<XOR<UserCareerProfileUpdateToOneWithWhereWithoutUserInput, UserCareerProfileUpdateWithoutUserInput>, UserCareerProfileUncheckedUpdateWithoutUserInput>
  }

  export type ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeAnalysisCreateWithoutUserInput, ResumeAnalysisUncheckedCreateWithoutUserInput> | ResumeAnalysisCreateWithoutUserInput[] | ResumeAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeAnalysisCreateOrConnectWithoutUserInput | ResumeAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: ResumeAnalysisUpsertWithWhereUniqueWithoutUserInput | ResumeAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeAnalysisCreateManyUserInputEnvelope
    set?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    disconnect?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    delete?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    connect?: ResumeAnalysisWhereUniqueInput | ResumeAnalysisWhereUniqueInput[]
    update?: ResumeAnalysisUpdateWithWhereUniqueWithoutUserInput | ResumeAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeAnalysisUpdateManyWithWhereWithoutUserInput | ResumeAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeAnalysisScalarWhereInput | ResumeAnalysisScalarWhereInput[]
  }

  export type MentorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutUserInput
    upsert?: MentorProfileUpsertWithoutUserInput
    disconnect?: MentorProfileWhereInput | boolean
    delete?: MentorProfileWhereInput | boolean
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutUserInput, MentorProfileUpdateWithoutUserInput>, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput = {
    create?: XOR<MentorshipMatchCreateWithoutMenteeInput, MentorshipMatchUncheckedCreateWithoutMenteeInput> | MentorshipMatchCreateWithoutMenteeInput[] | MentorshipMatchUncheckedCreateWithoutMenteeInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMenteeInput | MentorshipMatchCreateOrConnectWithoutMenteeInput[]
    upsert?: MentorshipMatchUpsertWithWhereUniqueWithoutMenteeInput | MentorshipMatchUpsertWithWhereUniqueWithoutMenteeInput[]
    createMany?: MentorshipMatchCreateManyMenteeInputEnvelope
    set?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    disconnect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    delete?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    update?: MentorshipMatchUpdateWithWhereUniqueWithoutMenteeInput | MentorshipMatchUpdateWithWhereUniqueWithoutMenteeInput[]
    updateMany?: MentorshipMatchUpdateManyWithWhereWithoutMenteeInput | MentorshipMatchUpdateManyWithWhereWithoutMenteeInput[]
    deleteMany?: MentorshipMatchScalarWhereInput | MentorshipMatchScalarWhereInput[]
  }

  export type CoachingSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingSessionCreateWithoutUserInput, CoachingSessionUncheckedCreateWithoutUserInput> | CoachingSessionCreateWithoutUserInput[] | CoachingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingSessionCreateOrConnectWithoutUserInput | CoachingSessionCreateOrConnectWithoutUserInput[]
    upsert?: CoachingSessionUpsertWithWhereUniqueWithoutUserInput | CoachingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingSessionCreateManyUserInputEnvelope
    set?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    disconnect?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    delete?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    connect?: CoachingSessionWhereUniqueInput | CoachingSessionWhereUniqueInput[]
    update?: CoachingSessionUpdateWithWhereUniqueWithoutUserInput | CoachingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingSessionUpdateManyWithWhereWithoutUserInput | CoachingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingSessionScalarWhereInput | CoachingSessionScalarWhereInput[]
  }

  export type JobMatchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobMatchCreateWithoutUserInput, JobMatchUncheckedCreateWithoutUserInput> | JobMatchCreateWithoutUserInput[] | JobMatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutUserInput | JobMatchCreateOrConnectWithoutUserInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutUserInput | JobMatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobMatchCreateManyUserInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutUserInput | JobMatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutUserInput | JobMatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    set?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    disconnect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    delete?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    update?: SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillGapAnalysisUpdateManyWithWhereWithoutUserInput | SkillGapAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCareerProfileInput = {
    create?: XOR<UserCreateWithoutCareerProfileInput, UserUncheckedCreateWithoutCareerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCareerProfileNestedInput = {
    create?: XOR<UserCreateWithoutCareerProfileInput, UserUncheckedCreateWithoutCareerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareerProfileInput
    upsert?: UserUpsertWithoutCareerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCareerProfileInput, UserUpdateWithoutCareerProfileInput>, UserUncheckedUpdateWithoutCareerProfileInput>
  }

  export type UserCreateNestedOneWithoutResumeAnalysesInput = {
    create?: XOR<UserCreateWithoutResumeAnalysesInput, UserUncheckedCreateWithoutResumeAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutResumeAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutResumeAnalysesInput, UserUncheckedCreateWithoutResumeAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeAnalysesInput
    upsert?: UserUpsertWithoutResumeAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumeAnalysesInput, UserUpdateWithoutResumeAnalysesInput>, UserUncheckedUpdateWithoutResumeAnalysesInput>
  }

  export type UserCreateNestedOneWithoutMentorProfileInput = {
    create?: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type MentorshipMatchCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorshipMatchCreateWithoutMentorInput, MentorshipMatchUncheckedCreateWithoutMentorInput> | MentorshipMatchCreateWithoutMentorInput[] | MentorshipMatchUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMentorInput | MentorshipMatchCreateOrConnectWithoutMentorInput[]
    createMany?: MentorshipMatchCreateManyMentorInputEnvelope
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
  }

  export type MentorshipMatchUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<MentorshipMatchCreateWithoutMentorInput, MentorshipMatchUncheckedCreateWithoutMentorInput> | MentorshipMatchCreateWithoutMentorInput[] | MentorshipMatchUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMentorInput | MentorshipMatchCreateOrConnectWithoutMentorInput[]
    createMany?: MentorshipMatchCreateManyMentorInputEnvelope
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMentorProfileNestedInput = {
    create?: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorProfileInput
    upsert?: UserUpsertWithoutMentorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorProfileInput, UserUpdateWithoutMentorProfileInput>, UserUncheckedUpdateWithoutMentorProfileInput>
  }

  export type MentorshipMatchUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorshipMatchCreateWithoutMentorInput, MentorshipMatchUncheckedCreateWithoutMentorInput> | MentorshipMatchCreateWithoutMentorInput[] | MentorshipMatchUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMentorInput | MentorshipMatchCreateOrConnectWithoutMentorInput[]
    upsert?: MentorshipMatchUpsertWithWhereUniqueWithoutMentorInput | MentorshipMatchUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorshipMatchCreateManyMentorInputEnvelope
    set?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    disconnect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    delete?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    update?: MentorshipMatchUpdateWithWhereUniqueWithoutMentorInput | MentorshipMatchUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorshipMatchUpdateManyWithWhereWithoutMentorInput | MentorshipMatchUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorshipMatchScalarWhereInput | MentorshipMatchScalarWhereInput[]
  }

  export type MentorshipMatchUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<MentorshipMatchCreateWithoutMentorInput, MentorshipMatchUncheckedCreateWithoutMentorInput> | MentorshipMatchCreateWithoutMentorInput[] | MentorshipMatchUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: MentorshipMatchCreateOrConnectWithoutMentorInput | MentorshipMatchCreateOrConnectWithoutMentorInput[]
    upsert?: MentorshipMatchUpsertWithWhereUniqueWithoutMentorInput | MentorshipMatchUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: MentorshipMatchCreateManyMentorInputEnvelope
    set?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    disconnect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    delete?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    connect?: MentorshipMatchWhereUniqueInput | MentorshipMatchWhereUniqueInput[]
    update?: MentorshipMatchUpdateWithWhereUniqueWithoutMentorInput | MentorshipMatchUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: MentorshipMatchUpdateManyWithWhereWithoutMentorInput | MentorshipMatchUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: MentorshipMatchScalarWhereInput | MentorshipMatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMentorshipMatchesInput = {
    create?: XOR<UserCreateWithoutMentorshipMatchesInput, UserUncheckedCreateWithoutMentorshipMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorshipMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type MentorProfileCreateNestedOneWithoutMentorshipMatchesInput = {
    create?: XOR<MentorProfileCreateWithoutMentorshipMatchesInput, MentorProfileUncheckedCreateWithoutMentorshipMatchesInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutMentorshipMatchesInput
    connect?: MentorProfileWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMentorshipMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMentorshipMatchesInput, UserUncheckedCreateWithoutMentorshipMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorshipMatchesInput
    upsert?: UserUpsertWithoutMentorshipMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorshipMatchesInput, UserUpdateWithoutMentorshipMatchesInput>, UserUncheckedUpdateWithoutMentorshipMatchesInput>
  }

  export type MentorProfileUpdateOneRequiredWithoutMentorshipMatchesNestedInput = {
    create?: XOR<MentorProfileCreateWithoutMentorshipMatchesInput, MentorProfileUncheckedCreateWithoutMentorshipMatchesInput>
    connectOrCreate?: MentorProfileCreateOrConnectWithoutMentorshipMatchesInput
    upsert?: MentorProfileUpsertWithoutMentorshipMatchesInput
    connect?: MentorProfileWhereUniqueInput
    update?: XOR<XOR<MentorProfileUpdateToOneWithWhereWithoutMentorshipMatchesInput, MentorProfileUpdateWithoutMentorshipMatchesInput>, MentorProfileUncheckedUpdateWithoutMentorshipMatchesInput>
  }

  export type UserCreateNestedOneWithoutCoachingSessionsInput = {
    create?: XOR<UserCreateWithoutCoachingSessionsInput, UserUncheckedCreateWithoutCoachingSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoachingSessionsNestedInput = {
    create?: XOR<UserCreateWithoutCoachingSessionsInput, UserUncheckedCreateWithoutCoachingSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingSessionsInput
    upsert?: UserUpsertWithoutCoachingSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachingSessionsInput, UserUpdateWithoutCoachingSessionsInput>, UserUncheckedUpdateWithoutCoachingSessionsInput>
  }

  export type JobMatchCreateNestedManyWithoutJobOpportunityInput = {
    create?: XOR<JobMatchCreateWithoutJobOpportunityInput, JobMatchUncheckedCreateWithoutJobOpportunityInput> | JobMatchCreateWithoutJobOpportunityInput[] | JobMatchUncheckedCreateWithoutJobOpportunityInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOpportunityInput | JobMatchCreateOrConnectWithoutJobOpportunityInput[]
    createMany?: JobMatchCreateManyJobOpportunityInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
  }

  export type JobMatchUncheckedCreateNestedManyWithoutJobOpportunityInput = {
    create?: XOR<JobMatchCreateWithoutJobOpportunityInput, JobMatchUncheckedCreateWithoutJobOpportunityInput> | JobMatchCreateWithoutJobOpportunityInput[] | JobMatchUncheckedCreateWithoutJobOpportunityInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOpportunityInput | JobMatchCreateOrConnectWithoutJobOpportunityInput[]
    createMany?: JobMatchCreateManyJobOpportunityInputEnvelope
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type JobMatchUpdateManyWithoutJobOpportunityNestedInput = {
    create?: XOR<JobMatchCreateWithoutJobOpportunityInput, JobMatchUncheckedCreateWithoutJobOpportunityInput> | JobMatchCreateWithoutJobOpportunityInput[] | JobMatchUncheckedCreateWithoutJobOpportunityInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOpportunityInput | JobMatchCreateOrConnectWithoutJobOpportunityInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutJobOpportunityInput | JobMatchUpsertWithWhereUniqueWithoutJobOpportunityInput[]
    createMany?: JobMatchCreateManyJobOpportunityInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutJobOpportunityInput | JobMatchUpdateWithWhereUniqueWithoutJobOpportunityInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutJobOpportunityInput | JobMatchUpdateManyWithWhereWithoutJobOpportunityInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type JobMatchUncheckedUpdateManyWithoutJobOpportunityNestedInput = {
    create?: XOR<JobMatchCreateWithoutJobOpportunityInput, JobMatchUncheckedCreateWithoutJobOpportunityInput> | JobMatchCreateWithoutJobOpportunityInput[] | JobMatchUncheckedCreateWithoutJobOpportunityInput[]
    connectOrCreate?: JobMatchCreateOrConnectWithoutJobOpportunityInput | JobMatchCreateOrConnectWithoutJobOpportunityInput[]
    upsert?: JobMatchUpsertWithWhereUniqueWithoutJobOpportunityInput | JobMatchUpsertWithWhereUniqueWithoutJobOpportunityInput[]
    createMany?: JobMatchCreateManyJobOpportunityInputEnvelope
    set?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    disconnect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    delete?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    connect?: JobMatchWhereUniqueInput | JobMatchWhereUniqueInput[]
    update?: JobMatchUpdateWithWhereUniqueWithoutJobOpportunityInput | JobMatchUpdateWithWhereUniqueWithoutJobOpportunityInput[]
    updateMany?: JobMatchUpdateManyWithWhereWithoutJobOpportunityInput | JobMatchUpdateManyWithWhereWithoutJobOpportunityInput[]
    deleteMany?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJobMatchesInput = {
    create?: XOR<UserCreateWithoutJobMatchesInput, UserUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type JobOpportunityCreateNestedOneWithoutJobMatchesInput = {
    create?: XOR<JobOpportunityCreateWithoutJobMatchesInput, JobOpportunityUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: JobOpportunityCreateOrConnectWithoutJobMatchesInput
    connect?: JobOpportunityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJobMatchesNestedInput = {
    create?: XOR<UserCreateWithoutJobMatchesInput, UserUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobMatchesInput
    upsert?: UserUpsertWithoutJobMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobMatchesInput, UserUpdateWithoutJobMatchesInput>, UserUncheckedUpdateWithoutJobMatchesInput>
  }

  export type JobOpportunityUpdateOneRequiredWithoutJobMatchesNestedInput = {
    create?: XOR<JobOpportunityCreateWithoutJobMatchesInput, JobOpportunityUncheckedCreateWithoutJobMatchesInput>
    connectOrCreate?: JobOpportunityCreateOrConnectWithoutJobMatchesInput
    upsert?: JobOpportunityUpsertWithoutJobMatchesInput
    connect?: JobOpportunityWhereUniqueInput
    update?: XOR<XOR<JobOpportunityUpdateToOneWithWhereWithoutJobMatchesInput, JobOpportunityUpdateWithoutJobMatchesInput>, JobOpportunityUncheckedUpdateWithoutJobMatchesInput>
  }

  export type UserCreateNestedOneWithoutSkillGapAnalysesInput = {
    create?: XOR<UserCreateWithoutSkillGapAnalysesInput, UserUncheckedCreateWithoutSkillGapAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillGapAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSkillGapAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutSkillGapAnalysesInput, UserUncheckedCreateWithoutSkillGapAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillGapAnalysesInput
    upsert?: UserUpsertWithoutSkillGapAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillGapAnalysesInput, UserUpdateWithoutSkillGapAnalysesInput>, UserUncheckedUpdateWithoutSkillGapAnalysesInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCareerProfileCreateWithoutUserInput = {
    professionalSummary?: string | null
    skills?: string | null
    targetIndustries?: string | null
    careerObjectives?: string | null
    marketAlignmentScore?: number | null
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type UserCareerProfileUncheckedCreateWithoutUserInput = {
    id?: number
    professionalSummary?: string | null
    skills?: string | null
    targetIndustries?: string | null
    careerObjectives?: string | null
    marketAlignmentScore?: number | null
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type UserCareerProfileCreateOrConnectWithoutUserInput = {
    where: UserCareerProfileWhereUniqueInput
    create: XOR<UserCareerProfileCreateWithoutUserInput, UserCareerProfileUncheckedCreateWithoutUserInput>
  }

  export type ResumeAnalysisCreateWithoutUserInput = {
    personalInfo?: string | null
    skills?: string | null
    workExperience?: string | null
    education?: string | null
    confidenceScores?: string | null
    rawText?: string | null
    originalFileName?: string | null
    fileSize?: number | null
    processingStatus?: string
    createdAt?: Date | string
  }

  export type ResumeAnalysisUncheckedCreateWithoutUserInput = {
    id?: number
    personalInfo?: string | null
    skills?: string | null
    workExperience?: string | null
    education?: string | null
    confidenceScores?: string | null
    rawText?: string | null
    originalFileName?: string | null
    fileSize?: number | null
    processingStatus?: string
    createdAt?: Date | string
  }

  export type ResumeAnalysisCreateOrConnectWithoutUserInput = {
    where: ResumeAnalysisWhereUniqueInput
    create: XOR<ResumeAnalysisCreateWithoutUserInput, ResumeAnalysisUncheckedCreateWithoutUserInput>
  }

  export type ResumeAnalysisCreateManyUserInputEnvelope = {
    data: ResumeAnalysisCreateManyUserInput | ResumeAnalysisCreateManyUserInput[]
  }

  export type MentorProfileCreateWithoutUserInput = {
    industry: string
    expertise?: string | null
    yearsOfExperience: number
    availableHours?: string | null
    bio?: string | null
    linkedInProfile?: string | null
    languages?: string | null
    culturalBackground?: string | null
    createdAt?: Date | string
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileUncheckedCreateWithoutUserInput = {
    id?: number
    industry: string
    expertise?: string | null
    yearsOfExperience: number
    availableHours?: string | null
    bio?: string | null
    linkedInProfile?: string | null
    languages?: string | null
    culturalBackground?: string | null
    createdAt?: Date | string
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMentorInput
  }

  export type MentorProfileCreateOrConnectWithoutUserInput = {
    where: MentorProfileWhereUniqueInput
    create: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
  }

  export type MentorshipMatchCreateWithoutMenteeInput = {
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
    mentor: MentorProfileCreateNestedOneWithoutMentorshipMatchesInput
  }

  export type MentorshipMatchUncheckedCreateWithoutMenteeInput = {
    id?: number
    mentorId: number
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
  }

  export type MentorshipMatchCreateOrConnectWithoutMenteeInput = {
    where: MentorshipMatchWhereUniqueInput
    create: XOR<MentorshipMatchCreateWithoutMenteeInput, MentorshipMatchUncheckedCreateWithoutMenteeInput>
  }

  export type MentorshipMatchCreateManyMenteeInputEnvelope = {
    data: MentorshipMatchCreateManyMenteeInput | MentorshipMatchCreateManyMenteeInput[]
  }

  export type CoachingSessionCreateWithoutUserInput = {
    sessionType: string
    conversationLog?: string | null
    actionItems?: string | null
    goals?: string | null
    progress?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingSessionUncheckedCreateWithoutUserInput = {
    id?: number
    sessionType: string
    conversationLog?: string | null
    actionItems?: string | null
    goals?: string | null
    progress?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingSessionCreateOrConnectWithoutUserInput = {
    where: CoachingSessionWhereUniqueInput
    create: XOR<CoachingSessionCreateWithoutUserInput, CoachingSessionUncheckedCreateWithoutUserInput>
  }

  export type CoachingSessionCreateManyUserInputEnvelope = {
    data: CoachingSessionCreateManyUserInput | CoachingSessionCreateManyUserInput[]
  }

  export type JobMatchCreateWithoutUserInput = {
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
    jobOpportunity: JobOpportunityCreateNestedOneWithoutJobMatchesInput
  }

  export type JobMatchUncheckedCreateWithoutUserInput = {
    id?: number
    jobOpportunityId: number
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type JobMatchCreateOrConnectWithoutUserInput = {
    where: JobMatchWhereUniqueInput
    create: XOR<JobMatchCreateWithoutUserInput, JobMatchUncheckedCreateWithoutUserInput>
  }

  export type JobMatchCreateManyUserInputEnvelope = {
    data: JobMatchCreateManyUserInput | JobMatchCreateManyUserInput[]
  }

  export type SkillGapAnalysisCreateWithoutUserInput = {
    targetRole: string
    currentSkills?: string | null
    requiredSkills?: string | null
    skillGaps?: string | null
    improvementRoadmap?: string | null
    progressTracking?: string | null
    industryBenchmark?: string | null
    lastAssessmentDate?: Date | string
    createdAt?: Date | string
  }

  export type SkillGapAnalysisUncheckedCreateWithoutUserInput = {
    id?: number
    targetRole: string
    currentSkills?: string | null
    requiredSkills?: string | null
    skillGaps?: string | null
    improvementRoadmap?: string | null
    progressTracking?: string | null
    industryBenchmark?: string | null
    lastAssessmentDate?: Date | string
    createdAt?: Date | string
  }

  export type SkillGapAnalysisCreateOrConnectWithoutUserInput = {
    where: SkillGapAnalysisWhereUniqueInput
    create: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput>
  }

  export type SkillGapAnalysisCreateManyUserInputEnvelope = {
    data: SkillGapAnalysisCreateManyUserInput | SkillGapAnalysisCreateManyUserInput[]
  }

  export type UserCareerProfileUpsertWithoutUserInput = {
    update: XOR<UserCareerProfileUpdateWithoutUserInput, UserCareerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserCareerProfileCreateWithoutUserInput, UserCareerProfileUncheckedCreateWithoutUserInput>
    where?: UserCareerProfileWhereInput
  }

  export type UserCareerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserCareerProfileWhereInput
    data: XOR<UserCareerProfileUpdateWithoutUserInput, UserCareerProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCareerProfileUpdateWithoutUserInput = {
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustries?: NullableStringFieldUpdateOperationsInput | string | null
    careerObjectives?: NullableStringFieldUpdateOperationsInput | string | null
    marketAlignmentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustries?: NullableStringFieldUpdateOperationsInput | string | null
    careerObjectives?: NullableStringFieldUpdateOperationsInput | string | null
    marketAlignmentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeAnalysisWhereUniqueInput
    update: XOR<ResumeAnalysisUpdateWithoutUserInput, ResumeAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeAnalysisCreateWithoutUserInput, ResumeAnalysisUncheckedCreateWithoutUserInput>
  }

  export type ResumeAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeAnalysisWhereUniqueInput
    data: XOR<ResumeAnalysisUpdateWithoutUserInput, ResumeAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type ResumeAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: ResumeAnalysisScalarWhereInput
    data: XOR<ResumeAnalysisUpdateManyMutationInput, ResumeAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeAnalysisScalarWhereInput = {
    AND?: ResumeAnalysisScalarWhereInput | ResumeAnalysisScalarWhereInput[]
    OR?: ResumeAnalysisScalarWhereInput[]
    NOT?: ResumeAnalysisScalarWhereInput | ResumeAnalysisScalarWhereInput[]
    id?: IntFilter<"ResumeAnalysis"> | number
    userId?: IntFilter<"ResumeAnalysis"> | number
    personalInfo?: StringNullableFilter<"ResumeAnalysis"> | string | null
    skills?: StringNullableFilter<"ResumeAnalysis"> | string | null
    workExperience?: StringNullableFilter<"ResumeAnalysis"> | string | null
    education?: StringNullableFilter<"ResumeAnalysis"> | string | null
    confidenceScores?: StringNullableFilter<"ResumeAnalysis"> | string | null
    rawText?: StringNullableFilter<"ResumeAnalysis"> | string | null
    originalFileName?: StringNullableFilter<"ResumeAnalysis"> | string | null
    fileSize?: IntNullableFilter<"ResumeAnalysis"> | number | null
    processingStatus?: StringFilter<"ResumeAnalysis"> | string
    createdAt?: DateTimeFilter<"ResumeAnalysis"> | Date | string
  }

  export type MentorProfileUpsertWithoutUserInput = {
    update: XOR<MentorProfileUpdateWithoutUserInput, MentorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MentorProfileCreateWithoutUserInput, MentorProfileUncheckedCreateWithoutUserInput>
    where?: MentorProfileWhereInput
  }

  export type MentorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MentorProfileWhereInput
    data: XOR<MentorProfileUpdateWithoutUserInput, MentorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MentorProfileUpdateWithoutUserInput = {
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMentorNestedInput
  }

  export type MentorProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type MentorshipMatchUpsertWithWhereUniqueWithoutMenteeInput = {
    where: MentorshipMatchWhereUniqueInput
    update: XOR<MentorshipMatchUpdateWithoutMenteeInput, MentorshipMatchUncheckedUpdateWithoutMenteeInput>
    create: XOR<MentorshipMatchCreateWithoutMenteeInput, MentorshipMatchUncheckedCreateWithoutMenteeInput>
  }

  export type MentorshipMatchUpdateWithWhereUniqueWithoutMenteeInput = {
    where: MentorshipMatchWhereUniqueInput
    data: XOR<MentorshipMatchUpdateWithoutMenteeInput, MentorshipMatchUncheckedUpdateWithoutMenteeInput>
  }

  export type MentorshipMatchUpdateManyWithWhereWithoutMenteeInput = {
    where: MentorshipMatchScalarWhereInput
    data: XOR<MentorshipMatchUpdateManyMutationInput, MentorshipMatchUncheckedUpdateManyWithoutMenteeInput>
  }

  export type MentorshipMatchScalarWhereInput = {
    AND?: MentorshipMatchScalarWhereInput | MentorshipMatchScalarWhereInput[]
    OR?: MentorshipMatchScalarWhereInput[]
    NOT?: MentorshipMatchScalarWhereInput | MentorshipMatchScalarWhereInput[]
    id?: IntFilter<"MentorshipMatch"> | number
    menteeId?: IntFilter<"MentorshipMatch"> | number
    mentorId?: IntFilter<"MentorshipMatch"> | number
    compatibilityScore?: FloatFilter<"MentorshipMatch"> | number
    status?: StringFilter<"MentorshipMatch"> | string
    matchReason?: StringNullableFilter<"MentorshipMatch"> | string | null
    createdAt?: DateTimeFilter<"MentorshipMatch"> | Date | string
  }

  export type CoachingSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: CoachingSessionWhereUniqueInput
    update: XOR<CoachingSessionUpdateWithoutUserInput, CoachingSessionUncheckedUpdateWithoutUserInput>
    create: XOR<CoachingSessionCreateWithoutUserInput, CoachingSessionUncheckedCreateWithoutUserInput>
  }

  export type CoachingSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: CoachingSessionWhereUniqueInput
    data: XOR<CoachingSessionUpdateWithoutUserInput, CoachingSessionUncheckedUpdateWithoutUserInput>
  }

  export type CoachingSessionUpdateManyWithWhereWithoutUserInput = {
    where: CoachingSessionScalarWhereInput
    data: XOR<CoachingSessionUpdateManyMutationInput, CoachingSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type CoachingSessionScalarWhereInput = {
    AND?: CoachingSessionScalarWhereInput | CoachingSessionScalarWhereInput[]
    OR?: CoachingSessionScalarWhereInput[]
    NOT?: CoachingSessionScalarWhereInput | CoachingSessionScalarWhereInput[]
    id?: IntFilter<"CoachingSession"> | number
    userId?: IntFilter<"CoachingSession"> | number
    sessionType?: StringFilter<"CoachingSession"> | string
    conversationLog?: StringNullableFilter<"CoachingSession"> | string | null
    actionItems?: StringNullableFilter<"CoachingSession"> | string | null
    goals?: StringNullableFilter<"CoachingSession"> | string | null
    progress?: StringNullableFilter<"CoachingSession"> | string | null
    status?: StringFilter<"CoachingSession"> | string
    createdAt?: DateTimeFilter<"CoachingSession"> | Date | string
    updatedAt?: DateTimeFilter<"CoachingSession"> | Date | string
  }

  export type JobMatchUpsertWithWhereUniqueWithoutUserInput = {
    where: JobMatchWhereUniqueInput
    update: XOR<JobMatchUpdateWithoutUserInput, JobMatchUncheckedUpdateWithoutUserInput>
    create: XOR<JobMatchCreateWithoutUserInput, JobMatchUncheckedCreateWithoutUserInput>
  }

  export type JobMatchUpdateWithWhereUniqueWithoutUserInput = {
    where: JobMatchWhereUniqueInput
    data: XOR<JobMatchUpdateWithoutUserInput, JobMatchUncheckedUpdateWithoutUserInput>
  }

  export type JobMatchUpdateManyWithWhereWithoutUserInput = {
    where: JobMatchScalarWhereInput
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyWithoutUserInput>
  }

  export type JobMatchScalarWhereInput = {
    AND?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
    OR?: JobMatchScalarWhereInput[]
    NOT?: JobMatchScalarWhereInput | JobMatchScalarWhereInput[]
    id?: IntFilter<"JobMatch"> | number
    userId?: IntFilter<"JobMatch"> | number
    jobOpportunityId?: IntFilter<"JobMatch"> | number
    relevanceScore?: FloatFilter<"JobMatch"> | number
    matchReason?: StringNullableFilter<"JobMatch"> | string | null
    applicationStatus?: StringFilter<"JobMatch"> | string
    savedAt?: DateTimeNullableFilter<"JobMatch"> | Date | string | null
    appliedAt?: DateTimeNullableFilter<"JobMatch"> | Date | string | null
    createdAt?: DateTimeFilter<"JobMatch"> | Date | string
  }

  export type SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillGapAnalysisWhereUniqueInput
    update: XOR<SkillGapAnalysisUpdateWithoutUserInput, SkillGapAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput>
  }

  export type SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillGapAnalysisWhereUniqueInput
    data: XOR<SkillGapAnalysisUpdateWithoutUserInput, SkillGapAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type SkillGapAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: SkillGapAnalysisScalarWhereInput
    data: XOR<SkillGapAnalysisUpdateManyMutationInput, SkillGapAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillGapAnalysisScalarWhereInput = {
    AND?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
    OR?: SkillGapAnalysisScalarWhereInput[]
    NOT?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
    id?: IntFilter<"SkillGapAnalysis"> | number
    userId?: IntFilter<"SkillGapAnalysis"> | number
    targetRole?: StringFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    requiredSkills?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    skillGaps?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    improvementRoadmap?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    progressTracking?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    industryBenchmark?: StringNullableFilter<"SkillGapAnalysis"> | string | null
    lastAssessmentDate?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
  }

  export type UserCreateWithoutCareerProfileInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    resumeAnalyses?: ResumeAnalysisCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCareerProfileInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    resumeAnalyses?: ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionUncheckedCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCareerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCareerProfileInput, UserUncheckedCreateWithoutCareerProfileInput>
  }

  export type UserUpsertWithoutCareerProfileInput = {
    update: XOR<UserUpdateWithoutCareerProfileInput, UserUncheckedUpdateWithoutCareerProfileInput>
    create: XOR<UserCreateWithoutCareerProfileInput, UserUncheckedCreateWithoutCareerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCareerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCareerProfileInput, UserUncheckedUpdateWithoutCareerProfileInput>
  }

  export type UserUpdateWithoutCareerProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeAnalyses?: ResumeAnalysisUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCareerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeAnalyses?: ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUncheckedUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResumeAnalysesInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumeAnalysesInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileUncheckedCreateNestedOneWithoutUserInput
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionUncheckedCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumeAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumeAnalysesInput, UserUncheckedCreateWithoutResumeAnalysesInput>
  }

  export type UserUpsertWithoutResumeAnalysesInput = {
    update: XOR<UserUpdateWithoutResumeAnalysesInput, UserUncheckedUpdateWithoutResumeAnalysesInput>
    create: XOR<UserCreateWithoutResumeAnalysesInput, UserUncheckedCreateWithoutResumeAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumeAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumeAnalysesInput, UserUncheckedUpdateWithoutResumeAnalysesInput>
  }

  export type UserUpdateWithoutResumeAnalysesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumeAnalysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUncheckedUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMentorProfileInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisCreateNestedManyWithoutUserInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMentorProfileInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileUncheckedCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionUncheckedCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMentorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
  }

  export type MentorshipMatchCreateWithoutMentorInput = {
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
    mentee: UserCreateNestedOneWithoutMentorshipMatchesInput
  }

  export type MentorshipMatchUncheckedCreateWithoutMentorInput = {
    id?: number
    menteeId: number
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
  }

  export type MentorshipMatchCreateOrConnectWithoutMentorInput = {
    where: MentorshipMatchWhereUniqueInput
    create: XOR<MentorshipMatchCreateWithoutMentorInput, MentorshipMatchUncheckedCreateWithoutMentorInput>
  }

  export type MentorshipMatchCreateManyMentorInputEnvelope = {
    data: MentorshipMatchCreateManyMentorInput | MentorshipMatchCreateManyMentorInput[]
  }

  export type UserUpsertWithoutMentorProfileInput = {
    update: XOR<UserUpdateWithoutMentorProfileInput, UserUncheckedUpdateWithoutMentorProfileInput>
    create: XOR<UserCreateWithoutMentorProfileInput, UserUncheckedCreateWithoutMentorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorProfileInput, UserUncheckedUpdateWithoutMentorProfileInput>
  }

  export type UserUpdateWithoutMentorProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUpdateManyWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUncheckedUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MentorshipMatchUpsertWithWhereUniqueWithoutMentorInput = {
    where: MentorshipMatchWhereUniqueInput
    update: XOR<MentorshipMatchUpdateWithoutMentorInput, MentorshipMatchUncheckedUpdateWithoutMentorInput>
    create: XOR<MentorshipMatchCreateWithoutMentorInput, MentorshipMatchUncheckedCreateWithoutMentorInput>
  }

  export type MentorshipMatchUpdateWithWhereUniqueWithoutMentorInput = {
    where: MentorshipMatchWhereUniqueInput
    data: XOR<MentorshipMatchUpdateWithoutMentorInput, MentorshipMatchUncheckedUpdateWithoutMentorInput>
  }

  export type MentorshipMatchUpdateManyWithWhereWithoutMentorInput = {
    where: MentorshipMatchScalarWhereInput
    data: XOR<MentorshipMatchUpdateManyMutationInput, MentorshipMatchUncheckedUpdateManyWithoutMentorInput>
  }

  export type UserCreateWithoutMentorshipMatchesInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    coachingSessions?: CoachingSessionCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMentorshipMatchesInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileUncheckedCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    coachingSessions?: CoachingSessionUncheckedCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMentorshipMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorshipMatchesInput, UserUncheckedCreateWithoutMentorshipMatchesInput>
  }

  export type MentorProfileCreateWithoutMentorshipMatchesInput = {
    industry: string
    expertise?: string | null
    yearsOfExperience: number
    availableHours?: string | null
    bio?: string | null
    linkedInProfile?: string | null
    languages?: string | null
    culturalBackground?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMentorProfileInput
  }

  export type MentorProfileUncheckedCreateWithoutMentorshipMatchesInput = {
    id?: number
    userId: number
    industry: string
    expertise?: string | null
    yearsOfExperience: number
    availableHours?: string | null
    bio?: string | null
    linkedInProfile?: string | null
    languages?: string | null
    culturalBackground?: string | null
    createdAt?: Date | string
  }

  export type MentorProfileCreateOrConnectWithoutMentorshipMatchesInput = {
    where: MentorProfileWhereUniqueInput
    create: XOR<MentorProfileCreateWithoutMentorshipMatchesInput, MentorProfileUncheckedCreateWithoutMentorshipMatchesInput>
  }

  export type UserUpsertWithoutMentorshipMatchesInput = {
    update: XOR<UserUpdateWithoutMentorshipMatchesInput, UserUncheckedUpdateWithoutMentorshipMatchesInput>
    create: XOR<UserCreateWithoutMentorshipMatchesInput, UserUncheckedCreateWithoutMentorshipMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorshipMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorshipMatchesInput, UserUncheckedUpdateWithoutMentorshipMatchesInput>
  }

  export type UserUpdateWithoutMentorshipMatchesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    coachingSessions?: CoachingSessionUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorshipMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingSessions?: CoachingSessionUncheckedUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MentorProfileUpsertWithoutMentorshipMatchesInput = {
    update: XOR<MentorProfileUpdateWithoutMentorshipMatchesInput, MentorProfileUncheckedUpdateWithoutMentorshipMatchesInput>
    create: XOR<MentorProfileCreateWithoutMentorshipMatchesInput, MentorProfileUncheckedCreateWithoutMentorshipMatchesInput>
    where?: MentorProfileWhereInput
  }

  export type MentorProfileUpdateToOneWithWhereWithoutMentorshipMatchesInput = {
    where?: MentorProfileWhereInput
    data: XOR<MentorProfileUpdateWithoutMentorshipMatchesInput, MentorProfileUncheckedUpdateWithoutMentorshipMatchesInput>
  }

  export type MentorProfileUpdateWithoutMentorshipMatchesInput = {
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentorProfileNestedInput
  }

  export type MentorProfileUncheckedUpdateWithoutMentorshipMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    industry?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    yearsOfExperience?: IntFieldUpdateOperationsInput | number
    availableHours?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInProfile?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    culturalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCoachingSessionsInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMenteeInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoachingSessionsInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileUncheckedCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoachingSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachingSessionsInput, UserUncheckedCreateWithoutCoachingSessionsInput>
  }

  export type UserUpsertWithoutCoachingSessionsInput = {
    update: XOR<UserUpdateWithoutCoachingSessionsInput, UserUncheckedUpdateWithoutCoachingSessionsInput>
    create: XOR<UserCreateWithoutCoachingSessionsInput, UserUncheckedCreateWithoutCoachingSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachingSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachingSessionsInput, UserUncheckedUpdateWithoutCoachingSessionsInput>
  }

  export type UserUpdateWithoutCoachingSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMenteeNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachingSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobMatchCreateWithoutJobOpportunityInput = {
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJobMatchesInput
  }

  export type JobMatchUncheckedCreateWithoutJobOpportunityInput = {
    id?: number
    userId: number
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type JobMatchCreateOrConnectWithoutJobOpportunityInput = {
    where: JobMatchWhereUniqueInput
    create: XOR<JobMatchCreateWithoutJobOpportunityInput, JobMatchUncheckedCreateWithoutJobOpportunityInput>
  }

  export type JobMatchCreateManyJobOpportunityInputEnvelope = {
    data: JobMatchCreateManyJobOpportunityInput | JobMatchCreateManyJobOpportunityInput[]
  }

  export type JobMatchUpsertWithWhereUniqueWithoutJobOpportunityInput = {
    where: JobMatchWhereUniqueInput
    update: XOR<JobMatchUpdateWithoutJobOpportunityInput, JobMatchUncheckedUpdateWithoutJobOpportunityInput>
    create: XOR<JobMatchCreateWithoutJobOpportunityInput, JobMatchUncheckedCreateWithoutJobOpportunityInput>
  }

  export type JobMatchUpdateWithWhereUniqueWithoutJobOpportunityInput = {
    where: JobMatchWhereUniqueInput
    data: XOR<JobMatchUpdateWithoutJobOpportunityInput, JobMatchUncheckedUpdateWithoutJobOpportunityInput>
  }

  export type JobMatchUpdateManyWithWhereWithoutJobOpportunityInput = {
    where: JobMatchScalarWhereInput
    data: XOR<JobMatchUpdateManyMutationInput, JobMatchUncheckedUpdateManyWithoutJobOpportunityInput>
  }

  export type UserCreateWithoutJobMatchesInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobMatchesInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileUncheckedCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionUncheckedCreateNestedManyWithoutUserInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobMatchesInput, UserUncheckedCreateWithoutJobMatchesInput>
  }

  export type JobOpportunityCreateWithoutJobMatchesInput = {
    title: string
    company: string
    location: string
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobType?: string | null
    industry?: string | null
    sourceUrl?: string | null
    postedDate?: Date | string | null
    createdAt?: Date | string
  }

  export type JobOpportunityUncheckedCreateWithoutJobMatchesInput = {
    id?: number
    title: string
    company: string
    location: string
    description?: string | null
    requirements?: string | null
    salary?: string | null
    jobType?: string | null
    industry?: string | null
    sourceUrl?: string | null
    postedDate?: Date | string | null
    createdAt?: Date | string
  }

  export type JobOpportunityCreateOrConnectWithoutJobMatchesInput = {
    where: JobOpportunityWhereUniqueInput
    create: XOR<JobOpportunityCreateWithoutJobMatchesInput, JobOpportunityUncheckedCreateWithoutJobMatchesInput>
  }

  export type UserUpsertWithoutJobMatchesInput = {
    update: XOR<UserUpdateWithoutJobMatchesInput, UserUncheckedUpdateWithoutJobMatchesInput>
    create: XOR<UserCreateWithoutJobMatchesInput, UserUncheckedCreateWithoutJobMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobMatchesInput, UserUncheckedUpdateWithoutJobMatchesInput>
  }

  export type UserUpdateWithoutJobMatchesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUncheckedUpdateManyWithoutUserNestedInput
    skillGapAnalyses?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobOpportunityUpsertWithoutJobMatchesInput = {
    update: XOR<JobOpportunityUpdateWithoutJobMatchesInput, JobOpportunityUncheckedUpdateWithoutJobMatchesInput>
    create: XOR<JobOpportunityCreateWithoutJobMatchesInput, JobOpportunityUncheckedCreateWithoutJobMatchesInput>
    where?: JobOpportunityWhereInput
  }

  export type JobOpportunityUpdateToOneWithWhereWithoutJobMatchesInput = {
    where?: JobOpportunityWhereInput
    data: XOR<JobOpportunityUpdateWithoutJobMatchesInput, JobOpportunityUncheckedUpdateWithoutJobMatchesInput>
  }

  export type JobOpportunityUpdateWithoutJobMatchesInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpportunityUncheckedUpdateWithoutJobMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSkillGapAnalysesInput = {
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillGapAnalysesInput = {
    id?: number
    email: string
    firebaseUid: string
    fullName: string
    roleId?: number
    createdAt?: Date | string
    careerProfile?: UserCareerProfileUncheckedCreateNestedOneWithoutUserInput
    resumeAnalyses?: ResumeAnalysisUncheckedCreateNestedManyWithoutUserInput
    mentorProfile?: MentorProfileUncheckedCreateNestedOneWithoutUserInput
    mentorshipMatches?: MentorshipMatchUncheckedCreateNestedManyWithoutMenteeInput
    coachingSessions?: CoachingSessionUncheckedCreateNestedManyWithoutUserInput
    jobMatches?: JobMatchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillGapAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillGapAnalysesInput, UserUncheckedCreateWithoutSkillGapAnalysesInput>
  }

  export type UserUpsertWithoutSkillGapAnalysesInput = {
    update: XOR<UserUpdateWithoutSkillGapAnalysesInput, UserUncheckedUpdateWithoutSkillGapAnalysesInput>
    create: XOR<UserCreateWithoutSkillGapAnalysesInput, UserUncheckedCreateWithoutSkillGapAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillGapAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillGapAnalysesInput, UserUncheckedUpdateWithoutSkillGapAnalysesInput>
  }

  export type UserUpdateWithoutSkillGapAnalysesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillGapAnalysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerProfile?: UserCareerProfileUncheckedUpdateOneWithoutUserNestedInput
    resumeAnalyses?: ResumeAnalysisUncheckedUpdateManyWithoutUserNestedInput
    mentorProfile?: MentorProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorshipMatches?: MentorshipMatchUncheckedUpdateManyWithoutMenteeNestedInput
    coachingSessions?: CoachingSessionUncheckedUpdateManyWithoutUserNestedInput
    jobMatches?: JobMatchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeAnalysisCreateManyUserInput = {
    id?: number
    personalInfo?: string | null
    skills?: string | null
    workExperience?: string | null
    education?: string | null
    confidenceScores?: string | null
    rawText?: string | null
    originalFileName?: string | null
    fileSize?: number | null
    processingStatus?: string
    createdAt?: Date | string
  }

  export type MentorshipMatchCreateManyMenteeInput = {
    id?: number
    mentorId: number
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
  }

  export type CoachingSessionCreateManyUserInput = {
    id?: number
    sessionType: string
    conversationLog?: string | null
    actionItems?: string | null
    goals?: string | null
    progress?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobMatchCreateManyUserInput = {
    id?: number
    jobOpportunityId: number
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SkillGapAnalysisCreateManyUserInput = {
    id?: number
    targetRole: string
    currentSkills?: string | null
    requiredSkills?: string | null
    skillGaps?: string | null
    improvementRoadmap?: string | null
    progressTracking?: string | null
    industryBenchmark?: string | null
    lastAssessmentDate?: Date | string
    createdAt?: Date | string
  }

  export type ResumeAnalysisUpdateWithoutUserInput = {
    personalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScores?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeAnalysisUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    personalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScores?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    personalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    workExperience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScores?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    processingStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorshipMatchUpdateWithoutMenteeInput = {
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: MentorProfileUpdateOneRequiredWithoutMentorshipMatchesNestedInput
  }

  export type MentorshipMatchUncheckedUpdateWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorshipMatchUncheckedUpdateManyWithoutMenteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    mentorId?: IntFieldUpdateOperationsInput | number
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingSessionUpdateWithoutUserInput = {
    sessionType?: StringFieldUpdateOperationsInput | string
    conversationLog?: NullableStringFieldUpdateOperationsInput | string | null
    actionItems?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionType?: StringFieldUpdateOperationsInput | string
    conversationLog?: NullableStringFieldUpdateOperationsInput | string | null
    actionItems?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionType?: StringFieldUpdateOperationsInput | string
    conversationLog?: NullableStringFieldUpdateOperationsInput | string | null
    actionItems?: NullableStringFieldUpdateOperationsInput | string | null
    goals?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchUpdateWithoutUserInput = {
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOpportunity?: JobOpportunityUpdateOneRequiredWithoutJobMatchesNestedInput
  }

  export type JobMatchUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOpportunityId?: IntFieldUpdateOperationsInput | number
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOpportunityId?: IntFieldUpdateOperationsInput | number
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUpdateWithoutUserInput = {
    targetRole?: StringFieldUpdateOperationsInput | string
    currentSkills?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    skillGaps?: NullableStringFieldUpdateOperationsInput | string | null
    improvementRoadmap?: NullableStringFieldUpdateOperationsInput | string | null
    progressTracking?: NullableStringFieldUpdateOperationsInput | string | null
    industryBenchmark?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssessmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetRole?: StringFieldUpdateOperationsInput | string
    currentSkills?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    skillGaps?: NullableStringFieldUpdateOperationsInput | string | null
    improvementRoadmap?: NullableStringFieldUpdateOperationsInput | string | null
    progressTracking?: NullableStringFieldUpdateOperationsInput | string | null
    industryBenchmark?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssessmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetRole?: StringFieldUpdateOperationsInput | string
    currentSkills?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    skillGaps?: NullableStringFieldUpdateOperationsInput | string | null
    improvementRoadmap?: NullableStringFieldUpdateOperationsInput | string | null
    progressTracking?: NullableStringFieldUpdateOperationsInput | string | null
    industryBenchmark?: NullableStringFieldUpdateOperationsInput | string | null
    lastAssessmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorshipMatchCreateManyMentorInput = {
    id?: number
    menteeId: number
    compatibilityScore: number
    status?: string
    matchReason?: string | null
    createdAt?: Date | string
  }

  export type MentorshipMatchUpdateWithoutMentorInput = {
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentee?: UserUpdateOneRequiredWithoutMentorshipMatchesNestedInput
  }

  export type MentorshipMatchUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: IntFieldUpdateOperationsInput | number
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentorshipMatchUncheckedUpdateManyWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number
    menteeId?: IntFieldUpdateOperationsInput | number
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchCreateManyJobOpportunityInput = {
    id?: number
    userId: number
    relevanceScore: number
    matchReason?: string | null
    applicationStatus?: string
    savedAt?: Date | string | null
    appliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type JobMatchUpdateWithoutJobOpportunityInput = {
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobMatchesNestedInput
  }

  export type JobMatchUncheckedUpdateWithoutJobOpportunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobMatchUncheckedUpdateManyWithoutJobOpportunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    relevanceScore?: FloatFieldUpdateOperationsInput | number
    matchReason?: NullableStringFieldUpdateOperationsInput | string | null
    applicationStatus?: StringFieldUpdateOperationsInput | string
    savedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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