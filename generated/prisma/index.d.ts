
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
 * Model admin_users
 * 
 */
export type admin_users = $Result.DefaultSelection<Prisma.$admin_usersPayload>
/**
 * Model booking
 * 
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>
/**
 * Model homestay
 * 
 */
export type homestay = $Result.DefaultSelection<Prisma.$homestayPayload>
/**
 * Model homestayImages
 * 
 */
export type homestayImages = $Result.DefaultSelection<Prisma.$homestayImagesPayload>
/**
 * Model homestayRoom
 * 
 */
export type homestayRoom = $Result.DefaultSelection<Prisma.$homestayRoomPayload>
/**
 * Model landing_page_user
 * 
 */
export type landing_page_user = $Result.DefaultSelection<Prisma.$landing_page_userPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model relation_feature_room
 * 
 */
export type relation_feature_room = $Result.DefaultSelection<Prisma.$relation_feature_roomPayload>
/**
 * Model reviews
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model room_features
 * 
 */
export type room_features = $Result.DefaultSelection<Prisma.$room_featuresPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const booking_status: {
  pending: 'pending',
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  completed: 'completed'
};

export type booking_status = (typeof booking_status)[keyof typeof booking_status]


export const feature_category: {
  bedroom: 'bedroom',
  bathroom: 'bathroom',
  kitchen: 'kitchen',
  entertainment: 'entertainment',
  comfort: 'comfort',
  safety: 'safety',
  accessibility: 'accessibility',
  outdoor: 'outdoor',
  service: 'service',
  storage: 'storage',
  view: 'view',
  dining: 'dining',
  business: 'business',
  wellness: 'wellness',
  transportation: 'transportation'
};

export type feature_category = (typeof feature_category)[keyof typeof feature_category]


export const homestay_status: {
  active: 'active',
  inactive: 'inactive',
  suspended: 'suspended'
};

export type homestay_status = (typeof homestay_status)[keyof typeof homestay_status]


export const room_status: {
  available: 'available',
  occupied: 'occupied',
  maintenance: 'maintenance'
};

export type room_status = (typeof room_status)[keyof typeof room_status]


export const user_role: {
  homestay_owner: 'homestay_owner',
  super_admin: 'super_admin',
  activity_manager: 'activity_manager'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const user_type: {
  user: 'user',
  guest: 'guest'
};

export type user_type = (typeof user_type)[keyof typeof user_type]

}

export type booking_status = $Enums.booking_status

export const booking_status: typeof $Enums.booking_status

export type feature_category = $Enums.feature_category

export const feature_category: typeof $Enums.feature_category

export type homestay_status = $Enums.homestay_status

export const homestay_status: typeof $Enums.homestay_status

export type room_status = $Enums.room_status

export const room_status: typeof $Enums.room_status

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type user_type = $Enums.user_type

export const user_type: typeof $Enums.user_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admin_users
 * const admin_users = await prisma.admin_users.findMany()
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
   * // Fetch zero or more Admin_users
   * const admin_users = await prisma.admin_users.findMany()
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
   * `prisma.admin_users`: Exposes CRUD operations for the **admin_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_users
    * const admin_users = await prisma.admin_users.findMany()
    * ```
    */
  get admin_users(): Prisma.admin_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homestay`: Exposes CRUD operations for the **homestay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homestays
    * const homestays = await prisma.homestay.findMany()
    * ```
    */
  get homestay(): Prisma.homestayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homestayImages`: Exposes CRUD operations for the **homestayImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomestayImages
    * const homestayImages = await prisma.homestayImages.findMany()
    * ```
    */
  get homestayImages(): Prisma.homestayImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homestayRoom`: Exposes CRUD operations for the **homestayRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomestayRooms
    * const homestayRooms = await prisma.homestayRoom.findMany()
    * ```
    */
  get homestayRoom(): Prisma.homestayRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landing_page_user`: Exposes CRUD operations for the **landing_page_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Landing_page_users
    * const landing_page_users = await prisma.landing_page_user.findMany()
    * ```
    */
  get landing_page_user(): Prisma.landing_page_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relation_feature_room`: Exposes CRUD operations for the **relation_feature_room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relation_feature_rooms
    * const relation_feature_rooms = await prisma.relation_feature_room.findMany()
    * ```
    */
  get relation_feature_room(): Prisma.relation_feature_roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room_features`: Exposes CRUD operations for the **room_features** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Room_features
    * const room_features = await prisma.room_features.findMany()
    * ```
    */
  get room_features(): Prisma.room_featuresDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    admin_users: 'admin_users',
    booking: 'booking',
    homestay: 'homestay',
    homestayImages: 'homestayImages',
    homestayRoom: 'homestayRoom',
    landing_page_user: 'landing_page_user',
    notifications: 'notifications',
    payments: 'payments',
    relation_feature_room: 'relation_feature_room',
    reviews: 'reviews',
    room_features: 'room_features'
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
      modelProps: "admin_users" | "booking" | "homestay" | "homestayImages" | "homestayRoom" | "landing_page_user" | "notifications" | "payments" | "relation_feature_room" | "reviews" | "room_features"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin_users: {
        payload: Prisma.$admin_usersPayload<ExtArgs>
        fields: Prisma.admin_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          findFirst: {
            args: Prisma.admin_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          findMany: {
            args: Prisma.admin_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>[]
          }
          create: {
            args: Prisma.admin_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          createMany: {
            args: Prisma.admin_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.admin_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>[]
          }
          delete: {
            args: Prisma.admin_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          update: {
            args: Prisma.admin_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          deleteMany: {
            args: Prisma.admin_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.admin_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>[]
          }
          upsert: {
            args: Prisma.admin_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          aggregate: {
            args: Prisma.Admin_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_users>
          }
          groupBy: {
            args: Prisma.admin_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_usersCountAggregateOutputType> | number
          }
        }
      }
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>
        fields: Prisma.bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      homestay: {
        payload: Prisma.$homestayPayload<ExtArgs>
        fields: Prisma.homestayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.homestayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.homestayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>
          }
          findFirst: {
            args: Prisma.homestayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.homestayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>
          }
          findMany: {
            args: Prisma.homestayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>[]
          }
          create: {
            args: Prisma.homestayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>
          }
          createMany: {
            args: Prisma.homestayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.homestayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>[]
          }
          delete: {
            args: Prisma.homestayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>
          }
          update: {
            args: Prisma.homestayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>
          }
          deleteMany: {
            args: Prisma.homestayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.homestayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.homestayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>[]
          }
          upsert: {
            args: Prisma.homestayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayPayload>
          }
          aggregate: {
            args: Prisma.HomestayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomestay>
          }
          groupBy: {
            args: Prisma.homestayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomestayGroupByOutputType>[]
          }
          count: {
            args: Prisma.homestayCountArgs<ExtArgs>
            result: $Utils.Optional<HomestayCountAggregateOutputType> | number
          }
        }
      }
      homestayImages: {
        payload: Prisma.$homestayImagesPayload<ExtArgs>
        fields: Prisma.homestayImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.homestayImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.homestayImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>
          }
          findFirst: {
            args: Prisma.homestayImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.homestayImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>
          }
          findMany: {
            args: Prisma.homestayImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>[]
          }
          create: {
            args: Prisma.homestayImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>
          }
          createMany: {
            args: Prisma.homestayImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.homestayImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>[]
          }
          delete: {
            args: Prisma.homestayImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>
          }
          update: {
            args: Prisma.homestayImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>
          }
          deleteMany: {
            args: Prisma.homestayImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.homestayImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.homestayImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>[]
          }
          upsert: {
            args: Prisma.homestayImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayImagesPayload>
          }
          aggregate: {
            args: Prisma.HomestayImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomestayImages>
          }
          groupBy: {
            args: Prisma.homestayImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomestayImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.homestayImagesCountArgs<ExtArgs>
            result: $Utils.Optional<HomestayImagesCountAggregateOutputType> | number
          }
        }
      }
      homestayRoom: {
        payload: Prisma.$homestayRoomPayload<ExtArgs>
        fields: Prisma.homestayRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.homestayRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.homestayRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>
          }
          findFirst: {
            args: Prisma.homestayRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.homestayRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>
          }
          findMany: {
            args: Prisma.homestayRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>[]
          }
          create: {
            args: Prisma.homestayRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>
          }
          createMany: {
            args: Prisma.homestayRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.homestayRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>[]
          }
          delete: {
            args: Prisma.homestayRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>
          }
          update: {
            args: Prisma.homestayRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>
          }
          deleteMany: {
            args: Prisma.homestayRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.homestayRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.homestayRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>[]
          }
          upsert: {
            args: Prisma.homestayRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homestayRoomPayload>
          }
          aggregate: {
            args: Prisma.HomestayRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomestayRoom>
          }
          groupBy: {
            args: Prisma.homestayRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomestayRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.homestayRoomCountArgs<ExtArgs>
            result: $Utils.Optional<HomestayRoomCountAggregateOutputType> | number
          }
        }
      }
      landing_page_user: {
        payload: Prisma.$landing_page_userPayload<ExtArgs>
        fields: Prisma.landing_page_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.landing_page_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.landing_page_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>
          }
          findFirst: {
            args: Prisma.landing_page_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.landing_page_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>
          }
          findMany: {
            args: Prisma.landing_page_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>[]
          }
          create: {
            args: Prisma.landing_page_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>
          }
          createMany: {
            args: Prisma.landing_page_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.landing_page_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>[]
          }
          delete: {
            args: Prisma.landing_page_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>
          }
          update: {
            args: Prisma.landing_page_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>
          }
          deleteMany: {
            args: Prisma.landing_page_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.landing_page_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.landing_page_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>[]
          }
          upsert: {
            args: Prisma.landing_page_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landing_page_userPayload>
          }
          aggregate: {
            args: Prisma.Landing_page_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanding_page_user>
          }
          groupBy: {
            args: Prisma.landing_page_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Landing_page_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.landing_page_userCountArgs<ExtArgs>
            result: $Utils.Optional<Landing_page_userCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      relation_feature_room: {
        payload: Prisma.$relation_feature_roomPayload<ExtArgs>
        fields: Prisma.relation_feature_roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.relation_feature_roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.relation_feature_roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>
          }
          findFirst: {
            args: Prisma.relation_feature_roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.relation_feature_roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>
          }
          findMany: {
            args: Prisma.relation_feature_roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>[]
          }
          create: {
            args: Prisma.relation_feature_roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>
          }
          createMany: {
            args: Prisma.relation_feature_roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.relation_feature_roomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>[]
          }
          delete: {
            args: Prisma.relation_feature_roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>
          }
          update: {
            args: Prisma.relation_feature_roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>
          }
          deleteMany: {
            args: Prisma.relation_feature_roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.relation_feature_roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.relation_feature_roomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>[]
          }
          upsert: {
            args: Prisma.relation_feature_roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$relation_feature_roomPayload>
          }
          aggregate: {
            args: Prisma.Relation_feature_roomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelation_feature_room>
          }
          groupBy: {
            args: Prisma.relation_feature_roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<Relation_feature_roomGroupByOutputType>[]
          }
          count: {
            args: Prisma.relation_feature_roomCountArgs<ExtArgs>
            result: $Utils.Optional<Relation_feature_roomCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      room_features: {
        payload: Prisma.$room_featuresPayload<ExtArgs>
        fields: Prisma.room_featuresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.room_featuresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.room_featuresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>
          }
          findFirst: {
            args: Prisma.room_featuresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.room_featuresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>
          }
          findMany: {
            args: Prisma.room_featuresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>[]
          }
          create: {
            args: Prisma.room_featuresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>
          }
          createMany: {
            args: Prisma.room_featuresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.room_featuresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>[]
          }
          delete: {
            args: Prisma.room_featuresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>
          }
          update: {
            args: Prisma.room_featuresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>
          }
          deleteMany: {
            args: Prisma.room_featuresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.room_featuresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.room_featuresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>[]
          }
          upsert: {
            args: Prisma.room_featuresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_featuresPayload>
          }
          aggregate: {
            args: Prisma.Room_featuresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom_features>
          }
          groupBy: {
            args: Prisma.room_featuresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Room_featuresGroupByOutputType>[]
          }
          count: {
            args: Prisma.room_featuresCountArgs<ExtArgs>
            result: $Utils.Optional<Room_featuresCountAggregateOutputType> | number
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
    admin_users?: admin_usersOmit
    booking?: bookingOmit
    homestay?: homestayOmit
    homestayImages?: homestayImagesOmit
    homestayRoom?: homestayRoomOmit
    landing_page_user?: landing_page_userOmit
    notifications?: notificationsOmit
    payments?: paymentsOmit
    relation_feature_room?: relation_feature_roomOmit
    reviews?: reviewsOmit
    room_features?: room_featuresOmit
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
   * Count Type Admin_usersCountOutputType
   */

  export type Admin_usersCountOutputType = {
    homestay: number
    notifications: number
  }

  export type Admin_usersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | Admin_usersCountOutputTypeCountHomestayArgs
    notifications?: boolean | Admin_usersCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * Admin_usersCountOutputType without action
   */
  export type Admin_usersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_usersCountOutputType
     */
    select?: Admin_usersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Admin_usersCountOutputType without action
   */
  export type Admin_usersCountOutputTypeCountHomestayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homestayWhereInput
  }

  /**
   * Admin_usersCountOutputType without action
   */
  export type Admin_usersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payments: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Count Type HomestayCountOutputType
   */

  export type HomestayCountOutputType = {
    homestayImages: number
    homestayRoom: number
    reviews: number
  }

  export type HomestayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestayImages?: boolean | HomestayCountOutputTypeCountHomestayImagesArgs
    homestayRoom?: boolean | HomestayCountOutputTypeCountHomestayRoomArgs
    reviews?: boolean | HomestayCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * HomestayCountOutputType without action
   */
  export type HomestayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomestayCountOutputType
     */
    select?: HomestayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomestayCountOutputType without action
   */
  export type HomestayCountOutputTypeCountHomestayImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homestayImagesWhereInput
  }

  /**
   * HomestayCountOutputType without action
   */
  export type HomestayCountOutputTypeCountHomestayRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homestayRoomWhereInput
  }

  /**
   * HomestayCountOutputType without action
   */
  export type HomestayCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }


  /**
   * Count Type HomestayRoomCountOutputType
   */

  export type HomestayRoomCountOutputType = {
    booking: number
    relation_feature_room: number
    reviews: number
  }

  export type HomestayRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | HomestayRoomCountOutputTypeCountBookingArgs
    relation_feature_room?: boolean | HomestayRoomCountOutputTypeCountRelation_feature_roomArgs
    reviews?: boolean | HomestayRoomCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * HomestayRoomCountOutputType without action
   */
  export type HomestayRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomestayRoomCountOutputType
     */
    select?: HomestayRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomestayRoomCountOutputType without action
   */
  export type HomestayRoomCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * HomestayRoomCountOutputType without action
   */
  export type HomestayRoomCountOutputTypeCountRelation_feature_roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: relation_feature_roomWhereInput
  }

  /**
   * HomestayRoomCountOutputType without action
   */
  export type HomestayRoomCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }


  /**
   * Count Type Landing_page_userCountOutputType
   */

  export type Landing_page_userCountOutputType = {
    booking: number
    notifications: number
    reviews: number
  }

  export type Landing_page_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Landing_page_userCountOutputTypeCountBookingArgs
    notifications?: boolean | Landing_page_userCountOutputTypeCountNotificationsArgs
    reviews?: boolean | Landing_page_userCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * Landing_page_userCountOutputType without action
   */
  export type Landing_page_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing_page_userCountOutputType
     */
    select?: Landing_page_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Landing_page_userCountOutputType without action
   */
  export type Landing_page_userCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * Landing_page_userCountOutputType without action
   */
  export type Landing_page_userCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * Landing_page_userCountOutputType without action
   */
  export type Landing_page_userCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }


  /**
   * Count Type Room_featuresCountOutputType
   */

  export type Room_featuresCountOutputType = {
    relation_feature_room: number
  }

  export type Room_featuresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation_feature_room?: boolean | Room_featuresCountOutputTypeCountRelation_feature_roomArgs
  }

  // Custom InputTypes
  /**
   * Room_featuresCountOutputType without action
   */
  export type Room_featuresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room_featuresCountOutputType
     */
    select?: Room_featuresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Room_featuresCountOutputType without action
   */
  export type Room_featuresCountOutputTypeCountRelation_feature_roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: relation_feature_roomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin_users
   */

  export type AggregateAdmin_users = {
    _count: Admin_usersCountAggregateOutputType | null
    _avg: Admin_usersAvgAggregateOutputType | null
    _sum: Admin_usersSumAggregateOutputType | null
    _min: Admin_usersMinAggregateOutputType | null
    _max: Admin_usersMaxAggregateOutputType | null
  }

  export type Admin_usersAvgAggregateOutputType = {
    id: number | null
  }

  export type Admin_usersSumAggregateOutputType = {
    id: number | null
  }

  export type Admin_usersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    name: string | null
    role: $Enums.user_role | null
    is_active: boolean | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Admin_usersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    name: string | null
    role: $Enums.user_role | null
    is_active: boolean | null
    last_login: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Admin_usersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    name: number
    role: number
    is_active: number
    last_login: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Admin_usersAvgAggregateInputType = {
    id?: true
  }

  export type Admin_usersSumAggregateInputType = {
    id?: true
  }

  export type Admin_usersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    name?: true
    role?: true
    is_active?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type Admin_usersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    name?: true
    role?: true
    is_active?: true
    last_login?: true
    created_at?: true
    updated_at?: true
  }

  export type Admin_usersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    name?: true
    role?: true
    is_active?: true
    last_login?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Admin_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_users to aggregate.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_users
    **/
    _count?: true | Admin_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_usersMaxAggregateInputType
  }

  export type GetAdmin_usersAggregateType<T extends Admin_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_users[P]>
      : GetScalarType<T[P], AggregateAdmin_users[P]>
  }




  export type admin_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_usersWhereInput
    orderBy?: admin_usersOrderByWithAggregationInput | admin_usersOrderByWithAggregationInput[]
    by: Admin_usersScalarFieldEnum[] | Admin_usersScalarFieldEnum
    having?: admin_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_usersCountAggregateInputType | true
    _avg?: Admin_usersAvgAggregateInputType
    _sum?: Admin_usersSumAggregateInputType
    _min?: Admin_usersMinAggregateInputType
    _max?: Admin_usersMaxAggregateInputType
  }

  export type Admin_usersGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    name: string
    role: $Enums.user_role
    is_active: boolean
    last_login: Date | null
    created_at: Date
    updated_at: Date
    _count: Admin_usersCountAggregateOutputType | null
    _avg: Admin_usersAvgAggregateOutputType | null
    _sum: Admin_usersSumAggregateOutputType | null
    _min: Admin_usersMinAggregateOutputType | null
    _max: Admin_usersMaxAggregateOutputType | null
  }

  type GetAdmin_usersGroupByPayload<T extends admin_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_usersGroupByOutputType[P]>
        }
      >
    >


  export type admin_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | admin_users$homestayArgs<ExtArgs>
    notifications?: boolean | admin_users$notificationsArgs<ExtArgs>
    _count?: boolean | Admin_usersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin_users"]>

  export type admin_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin_users"]>

  export type admin_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["admin_users"]>

  export type admin_usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    is_active?: boolean
    last_login?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type admin_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "name" | "role" | "is_active" | "last_login" | "created_at" | "updated_at", ExtArgs["result"]["admin_users"]>
  export type admin_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | admin_users$homestayArgs<ExtArgs>
    notifications?: boolean | admin_users$notificationsArgs<ExtArgs>
    _count?: boolean | Admin_usersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type admin_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type admin_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $admin_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_users"
    objects: {
      homestay: Prisma.$homestayPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      name: string
      role: $Enums.user_role
      is_active: boolean
      last_login: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["admin_users"]>
    composites: {}
  }

  type admin_usersGetPayload<S extends boolean | null | undefined | admin_usersDefaultArgs> = $Result.GetResult<Prisma.$admin_usersPayload, S>

  type admin_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_usersCountAggregateInputType | true
    }

  export interface admin_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_users'], meta: { name: 'admin_users' } }
    /**
     * Find zero or one Admin_users that matches the filter.
     * @param {admin_usersFindUniqueArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_usersFindUniqueArgs>(args: SelectSubset<T, admin_usersFindUniqueArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_usersFindUniqueOrThrowArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersFindFirstArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_usersFindFirstArgs>(args?: SelectSubset<T, admin_usersFindFirstArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersFindFirstOrThrowArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_users
     * const admin_users = await prisma.admin_users.findMany()
     * 
     * // Get first 10 Admin_users
     * const admin_users = await prisma.admin_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_usersWithIdOnly = await prisma.admin_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends admin_usersFindManyArgs>(args?: SelectSubset<T, admin_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_users.
     * @param {admin_usersCreateArgs} args - Arguments to create a Admin_users.
     * @example
     * // Create one Admin_users
     * const Admin_users = await prisma.admin_users.create({
     *   data: {
     *     // ... data to create a Admin_users
     *   }
     * })
     * 
     */
    create<T extends admin_usersCreateArgs>(args: SelectSubset<T, admin_usersCreateArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_users.
     * @param {admin_usersCreateManyArgs} args - Arguments to create many Admin_users.
     * @example
     * // Create many Admin_users
     * const admin_users = await prisma.admin_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_usersCreateManyArgs>(args?: SelectSubset<T, admin_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admin_users and returns the data saved in the database.
     * @param {admin_usersCreateManyAndReturnArgs} args - Arguments to create many Admin_users.
     * @example
     * // Create many Admin_users
     * const admin_users = await prisma.admin_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admin_users and only return the `id`
     * const admin_usersWithIdOnly = await prisma.admin_users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends admin_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, admin_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin_users.
     * @param {admin_usersDeleteArgs} args - Arguments to delete one Admin_users.
     * @example
     * // Delete one Admin_users
     * const Admin_users = await prisma.admin_users.delete({
     *   where: {
     *     // ... filter to delete one Admin_users
     *   }
     * })
     * 
     */
    delete<T extends admin_usersDeleteArgs>(args: SelectSubset<T, admin_usersDeleteArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_users.
     * @param {admin_usersUpdateArgs} args - Arguments to update one Admin_users.
     * @example
     * // Update one Admin_users
     * const admin_users = await prisma.admin_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_usersUpdateArgs>(args: SelectSubset<T, admin_usersUpdateArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_users.
     * @param {admin_usersDeleteManyArgs} args - Arguments to filter Admin_users to delete.
     * @example
     * // Delete a few Admin_users
     * const { count } = await prisma.admin_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_usersDeleteManyArgs>(args?: SelectSubset<T, admin_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_users
     * const admin_users = await prisma.admin_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_usersUpdateManyArgs>(args: SelectSubset<T, admin_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_users and returns the data updated in the database.
     * @param {admin_usersUpdateManyAndReturnArgs} args - Arguments to update many Admin_users.
     * @example
     * // Update many Admin_users
     * const admin_users = await prisma.admin_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admin_users and only return the `id`
     * const admin_usersWithIdOnly = await prisma.admin_users.updateManyAndReturn({
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
    updateManyAndReturn<T extends admin_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, admin_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin_users.
     * @param {admin_usersUpsertArgs} args - Arguments to update or create a Admin_users.
     * @example
     * // Update or create a Admin_users
     * const admin_users = await prisma.admin_users.upsert({
     *   create: {
     *     // ... data to create a Admin_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_users we want to update
     *   }
     * })
     */
    upsert<T extends admin_usersUpsertArgs>(args: SelectSubset<T, admin_usersUpsertArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersCountArgs} args - Arguments to filter Admin_users to count.
     * @example
     * // Count the number of Admin_users
     * const count = await prisma.admin_users.count({
     *   where: {
     *     // ... the filter for the Admin_users we want to count
     *   }
     * })
    **/
    count<T extends admin_usersCountArgs>(
      args?: Subset<T, admin_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_usersAggregateArgs>(args: Subset<T, Admin_usersAggregateArgs>): Prisma.PrismaPromise<GetAdmin_usersAggregateType<T>>

    /**
     * Group by Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersGroupByArgs} args - Group by arguments.
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
      T extends admin_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_usersGroupByArgs['orderBy'] }
        : { orderBy?: admin_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, admin_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_users model
   */
  readonly fields: admin_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homestay<T extends admin_users$homestayArgs<ExtArgs> = {}>(args?: Subset<T, admin_users$homestayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends admin_users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, admin_users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the admin_users model
   */
  interface admin_usersFieldRefs {
    readonly id: FieldRef<"admin_users", 'Int'>
    readonly username: FieldRef<"admin_users", 'String'>
    readonly password: FieldRef<"admin_users", 'String'>
    readonly email: FieldRef<"admin_users", 'String'>
    readonly name: FieldRef<"admin_users", 'String'>
    readonly role: FieldRef<"admin_users", 'user_role'>
    readonly is_active: FieldRef<"admin_users", 'Boolean'>
    readonly last_login: FieldRef<"admin_users", 'DateTime'>
    readonly created_at: FieldRef<"admin_users", 'DateTime'>
    readonly updated_at: FieldRef<"admin_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin_users findUnique
   */
  export type admin_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users findUniqueOrThrow
   */
  export type admin_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users findFirst
   */
  export type admin_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Admin_usersScalarFieldEnum | Admin_usersScalarFieldEnum[]
  }

  /**
   * admin_users findFirstOrThrow
   */
  export type admin_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Admin_usersScalarFieldEnum | Admin_usersScalarFieldEnum[]
  }

  /**
   * admin_users findMany
   */
  export type admin_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_users.
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    distinct?: Admin_usersScalarFieldEnum | Admin_usersScalarFieldEnum[]
  }

  /**
   * admin_users create
   */
  export type admin_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a admin_users.
     */
    data: XOR<admin_usersCreateInput, admin_usersUncheckedCreateInput>
  }

  /**
   * admin_users createMany
   */
  export type admin_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_users.
     */
    data: admin_usersCreateManyInput | admin_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_users createManyAndReturn
   */
  export type admin_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * The data used to create many admin_users.
     */
    data: admin_usersCreateManyInput | admin_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_users update
   */
  export type admin_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a admin_users.
     */
    data: XOR<admin_usersUpdateInput, admin_usersUncheckedUpdateInput>
    /**
     * Choose, which admin_users to update.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users updateMany
   */
  export type admin_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_users.
     */
    data: XOR<admin_usersUpdateManyMutationInput, admin_usersUncheckedUpdateManyInput>
    /**
     * Filter which admin_users to update
     */
    where?: admin_usersWhereInput
    /**
     * Limit how many admin_users to update.
     */
    limit?: number
  }

  /**
   * admin_users updateManyAndReturn
   */
  export type admin_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * The data used to update admin_users.
     */
    data: XOR<admin_usersUpdateManyMutationInput, admin_usersUncheckedUpdateManyInput>
    /**
     * Filter which admin_users to update
     */
    where?: admin_usersWhereInput
    /**
     * Limit how many admin_users to update.
     */
    limit?: number
  }

  /**
   * admin_users upsert
   */
  export type admin_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the admin_users to update in case it exists.
     */
    where: admin_usersWhereUniqueInput
    /**
     * In case the admin_users found by the `where` argument doesn't exist, create a new admin_users with this data.
     */
    create: XOR<admin_usersCreateInput, admin_usersUncheckedCreateInput>
    /**
     * In case the admin_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_usersUpdateInput, admin_usersUncheckedUpdateInput>
  }

  /**
   * admin_users delete
   */
  export type admin_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    /**
     * Filter which admin_users to delete.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users deleteMany
   */
  export type admin_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_users to delete
     */
    where?: admin_usersWhereInput
    /**
     * Limit how many admin_users to delete.
     */
    limit?: number
  }

  /**
   * admin_users.homestay
   */
  export type admin_users$homestayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    where?: homestayWhereInput
    orderBy?: homestayOrderByWithRelationInput | homestayOrderByWithRelationInput[]
    cursor?: homestayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomestayScalarFieldEnum | HomestayScalarFieldEnum[]
  }

  /**
   * admin_users.notifications
   */
  export type admin_users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * admin_users without action
   */
  export type admin_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
  }


  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    room_id: number | null
    user_id: number | null
    total_price: Decimal | null
    number_of_guests: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    room_id: number | null
    user_id: number | null
    total_price: Decimal | null
    number_of_guests: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    start_date: Date | null
    end_date: Date | null
    room_id: number | null
    status: $Enums.booking_status | null
    is_paid: boolean | null
    user_id: number | null
    booking_number: string | null
    total_price: Decimal | null
    payment_method: string | null
    check_in_time: Date | null
    check_out_time: Date | null
    number_of_guests: number | null
    notes: string | null
    special_requests: string | null
    cancellation_reason: string | null
    cancelled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    start_date: Date | null
    end_date: Date | null
    room_id: number | null
    status: $Enums.booking_status | null
    is_paid: boolean | null
    user_id: number | null
    booking_number: string | null
    total_price: Decimal | null
    payment_method: string | null
    check_in_time: Date | null
    check_out_time: Date | null
    number_of_guests: number | null
    notes: string | null
    special_requests: string | null
    cancellation_reason: string | null
    cancelled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    start_date: number
    end_date: number
    room_id: number
    status: number
    is_paid: number
    user_id: number
    booking_number: number
    total_price: number
    payment_method: number
    check_in_time: number
    check_out_time: number
    number_of_guests: number
    notes: number
    special_requests: number
    cancellation_reason: number
    cancelled_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    total_price?: true
    number_of_guests?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    total_price?: true
    number_of_guests?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    room_id?: true
    status?: true
    is_paid?: true
    user_id?: true
    booking_number?: true
    total_price?: true
    payment_method?: true
    check_in_time?: true
    check_out_time?: true
    number_of_guests?: true
    notes?: true
    special_requests?: true
    cancellation_reason?: true
    cancelled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    room_id?: true
    status?: true
    is_paid?: true
    user_id?: true
    booking_number?: true
    total_price?: true
    payment_method?: true
    check_in_time?: true
    check_out_time?: true
    number_of_guests?: true
    notes?: true
    special_requests?: true
    cancellation_reason?: true
    cancelled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    room_id?: true
    status?: true
    is_paid?: true
    user_id?: true
    booking_number?: true
    total_price?: true
    payment_method?: true
    check_in_time?: true
    check_out_time?: true
    number_of_guests?: true
    notes?: true
    special_requests?: true
    cancellation_reason?: true
    cancelled_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    start_date: Date
    end_date: Date
    room_id: number
    status: $Enums.booking_status
    is_paid: boolean
    user_id: number | null
    booking_number: string
    total_price: Decimal
    payment_method: string | null
    check_in_time: Date | null
    check_out_time: Date | null
    number_of_guests: number
    notes: string | null
    special_requests: string | null
    cancellation_reason: string | null
    cancelled_at: Date | null
    created_at: Date
    updated_at: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_id?: boolean
    status?: boolean
    is_paid?: boolean
    user_id?: boolean
    booking_number?: boolean
    total_price?: boolean
    payment_method?: boolean
    check_in_time?: boolean
    check_out_time?: boolean
    number_of_guests?: boolean
    notes?: boolean
    special_requests?: boolean
    cancellation_reason?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
    landing_page_user?: boolean | booking$landing_page_userArgs<ExtArgs>
    payments?: boolean | booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_id?: boolean
    status?: boolean
    is_paid?: boolean
    user_id?: boolean
    booking_number?: boolean
    total_price?: boolean
    payment_method?: boolean
    check_in_time?: boolean
    check_out_time?: boolean
    number_of_guests?: boolean
    notes?: boolean
    special_requests?: boolean
    cancellation_reason?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
    landing_page_user?: boolean | booking$landing_page_userArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_id?: boolean
    status?: boolean
    is_paid?: boolean
    user_id?: boolean
    booking_number?: boolean
    total_price?: boolean
    payment_method?: boolean
    check_in_time?: boolean
    check_out_time?: boolean
    number_of_guests?: boolean
    notes?: boolean
    special_requests?: boolean
    cancellation_reason?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
    landing_page_user?: boolean | booking$landing_page_userArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectScalar = {
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_id?: boolean
    status?: boolean
    is_paid?: boolean
    user_id?: boolean
    booking_number?: boolean
    total_price?: boolean
    payment_method?: boolean
    check_in_time?: boolean
    check_out_time?: boolean
    number_of_guests?: boolean
    notes?: boolean
    special_requests?: boolean
    cancellation_reason?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start_date" | "end_date" | "room_id" | "status" | "is_paid" | "user_id" | "booking_number" | "total_price" | "payment_method" | "check_in_time" | "check_out_time" | "number_of_guests" | "notes" | "special_requests" | "cancellation_reason" | "cancelled_at" | "created_at" | "updated_at", ExtArgs["result"]["booking"]>
  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
    landing_page_user?: boolean | booking$landing_page_userArgs<ExtArgs>
    payments?: boolean | booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
    landing_page_user?: boolean | booking$landing_page_userArgs<ExtArgs>
  }
  export type bookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
    landing_page_user?: boolean | booking$landing_page_userArgs<ExtArgs>
  }

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking"
    objects: {
      homestayRoom: Prisma.$homestayRoomPayload<ExtArgs>
      landing_page_user: Prisma.$landing_page_userPayload<ExtArgs> | null
      payments: Prisma.$paymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_date: Date
      end_date: Date
      room_id: number
      status: $Enums.booking_status
      is_paid: boolean
      user_id: number | null
      booking_number: string
      total_price: Prisma.Decimal
      payment_method: string | null
      check_in_time: Date | null
      check_out_time: Date | null
      number_of_guests: number
      notes: string | null
      special_requests: string | null
      cancellation_reason: string | null
      cancelled_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<Prisma.$bookingPayload, S>

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking'], meta: { name: 'booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingFindUniqueArgs>(args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingFindFirstArgs>(args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingFindManyArgs>(args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends bookingCreateArgs>(args: SelectSubset<T, bookingCreateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingCreateManyArgs>(args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends bookingDeleteArgs>(args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingUpdateArgs>(args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingDeleteManyArgs>(args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingUpdateManyArgs>(args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends bookingUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends bookingUpsertArgs>(args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
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
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking model
   */
  readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homestayRoom<T extends homestayRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, homestayRoomDefaultArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    landing_page_user<T extends booking$landing_page_userArgs<ExtArgs> = {}>(args?: Subset<T, booking$landing_page_userArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends booking$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, booking$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<"booking", 'Int'>
    readonly start_date: FieldRef<"booking", 'DateTime'>
    readonly end_date: FieldRef<"booking", 'DateTime'>
    readonly room_id: FieldRef<"booking", 'Int'>
    readonly status: FieldRef<"booking", 'booking_status'>
    readonly is_paid: FieldRef<"booking", 'Boolean'>
    readonly user_id: FieldRef<"booking", 'Int'>
    readonly booking_number: FieldRef<"booking", 'String'>
    readonly total_price: FieldRef<"booking", 'Decimal'>
    readonly payment_method: FieldRef<"booking", 'String'>
    readonly check_in_time: FieldRef<"booking", 'DateTime'>
    readonly check_out_time: FieldRef<"booking", 'DateTime'>
    readonly number_of_guests: FieldRef<"booking", 'Int'>
    readonly notes: FieldRef<"booking", 'String'>
    readonly special_requests: FieldRef<"booking", 'String'>
    readonly cancellation_reason: FieldRef<"booking", 'String'>
    readonly cancelled_at: FieldRef<"booking", 'DateTime'>
    readonly created_at: FieldRef<"booking", 'DateTime'>
    readonly updated_at: FieldRef<"booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking createManyAndReturn
   */
  export type bookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * booking updateManyAndReturn
   */
  export type bookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * booking.landing_page_user
   */
  export type booking$landing_page_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    where?: landing_page_userWhereInput
  }

  /**
   * booking.payments
   */
  export type booking$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
  }


  /**
   * Model homestay
   */

  export type AggregateHomestay = {
    _count: HomestayCountAggregateOutputType | null
    _avg: HomestayAvgAggregateOutputType | null
    _sum: HomestaySumAggregateOutputType | null
    _min: HomestayMinAggregateOutputType | null
    _max: HomestayMaxAggregateOutputType | null
  }

  export type HomestayAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    base_price: Decimal | null
    max_guests: number | null
  }

  export type HomestaySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    base_price: Decimal | null
    max_guests: number | null
  }

  export type HomestayMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    user_id: number | null
    status: $Enums.homestay_status | null
    has_rooms: boolean | null
    location: string | null
    address: string | null
    base_price: Decimal | null
    max_guests: number | null
    contact_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HomestayMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    user_id: number | null
    status: $Enums.homestay_status | null
    has_rooms: boolean | null
    location: string | null
    address: string | null
    base_price: Decimal | null
    max_guests: number | null
    contact_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HomestayCountAggregateOutputType = {
    id: number
    title: number
    description: number
    user_id: number
    status: number
    has_rooms: number
    location: number
    address: number
    base_price: number
    max_guests: number
    contact_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HomestayAvgAggregateInputType = {
    id?: true
    user_id?: true
    base_price?: true
    max_guests?: true
  }

  export type HomestaySumAggregateInputType = {
    id?: true
    user_id?: true
    base_price?: true
    max_guests?: true
  }

  export type HomestayMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    user_id?: true
    status?: true
    has_rooms?: true
    location?: true
    address?: true
    base_price?: true
    max_guests?: true
    contact_number?: true
    created_at?: true
    updated_at?: true
  }

  export type HomestayMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    user_id?: true
    status?: true
    has_rooms?: true
    location?: true
    address?: true
    base_price?: true
    max_guests?: true
    contact_number?: true
    created_at?: true
    updated_at?: true
  }

  export type HomestayCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    user_id?: true
    status?: true
    has_rooms?: true
    location?: true
    address?: true
    base_price?: true
    max_guests?: true
    contact_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HomestayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homestay to aggregate.
     */
    where?: homestayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestays to fetch.
     */
    orderBy?: homestayOrderByWithRelationInput | homestayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: homestayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned homestays
    **/
    _count?: true | HomestayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomestayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomestaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomestayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomestayMaxAggregateInputType
  }

  export type GetHomestayAggregateType<T extends HomestayAggregateArgs> = {
        [P in keyof T & keyof AggregateHomestay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomestay[P]>
      : GetScalarType<T[P], AggregateHomestay[P]>
  }




  export type homestayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homestayWhereInput
    orderBy?: homestayOrderByWithAggregationInput | homestayOrderByWithAggregationInput[]
    by: HomestayScalarFieldEnum[] | HomestayScalarFieldEnum
    having?: homestayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomestayCountAggregateInputType | true
    _avg?: HomestayAvgAggregateInputType
    _sum?: HomestaySumAggregateInputType
    _min?: HomestayMinAggregateInputType
    _max?: HomestayMaxAggregateInputType
  }

  export type HomestayGroupByOutputType = {
    id: number
    title: string
    description: string | null
    user_id: number
    status: $Enums.homestay_status
    has_rooms: boolean
    location: string
    address: string
    base_price: Decimal | null
    max_guests: number | null
    contact_number: string | null
    created_at: Date
    updated_at: Date
    _count: HomestayCountAggregateOutputType | null
    _avg: HomestayAvgAggregateOutputType | null
    _sum: HomestaySumAggregateOutputType | null
    _min: HomestayMinAggregateOutputType | null
    _max: HomestayMaxAggregateOutputType | null
  }

  type GetHomestayGroupByPayload<T extends homestayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomestayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomestayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomestayGroupByOutputType[P]>
            : GetScalarType<T[P], HomestayGroupByOutputType[P]>
        }
      >
    >


  export type homestaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    user_id?: boolean
    status?: boolean
    has_rooms?: boolean
    location?: boolean
    address?: boolean
    base_price?: boolean
    max_guests?: boolean
    contact_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    admin_users?: boolean | admin_usersDefaultArgs<ExtArgs>
    homestayImages?: boolean | homestay$homestayImagesArgs<ExtArgs>
    homestayRoom?: boolean | homestay$homestayRoomArgs<ExtArgs>
    reviews?: boolean | homestay$reviewsArgs<ExtArgs>
    _count?: boolean | HomestayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestay"]>

  export type homestaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    user_id?: boolean
    status?: boolean
    has_rooms?: boolean
    location?: boolean
    address?: boolean
    base_price?: boolean
    max_guests?: boolean
    contact_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    admin_users?: boolean | admin_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestay"]>

  export type homestaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    user_id?: boolean
    status?: boolean
    has_rooms?: boolean
    location?: boolean
    address?: boolean
    base_price?: boolean
    max_guests?: boolean
    contact_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    admin_users?: boolean | admin_usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestay"]>

  export type homestaySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    user_id?: boolean
    status?: boolean
    has_rooms?: boolean
    location?: boolean
    address?: boolean
    base_price?: boolean
    max_guests?: boolean
    contact_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type homestayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "user_id" | "status" | "has_rooms" | "location" | "address" | "base_price" | "max_guests" | "contact_number" | "created_at" | "updated_at", ExtArgs["result"]["homestay"]>
  export type homestayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_users?: boolean | admin_usersDefaultArgs<ExtArgs>
    homestayImages?: boolean | homestay$homestayImagesArgs<ExtArgs>
    homestayRoom?: boolean | homestay$homestayRoomArgs<ExtArgs>
    reviews?: boolean | homestay$reviewsArgs<ExtArgs>
    _count?: boolean | HomestayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type homestayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_users?: boolean | admin_usersDefaultArgs<ExtArgs>
  }
  export type homestayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_users?: boolean | admin_usersDefaultArgs<ExtArgs>
  }

  export type $homestayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "homestay"
    objects: {
      admin_users: Prisma.$admin_usersPayload<ExtArgs>
      homestayImages: Prisma.$homestayImagesPayload<ExtArgs>[]
      homestayRoom: Prisma.$homestayRoomPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      user_id: number
      status: $Enums.homestay_status
      has_rooms: boolean
      location: string
      address: string
      base_price: Prisma.Decimal | null
      max_guests: number | null
      contact_number: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["homestay"]>
    composites: {}
  }

  type homestayGetPayload<S extends boolean | null | undefined | homestayDefaultArgs> = $Result.GetResult<Prisma.$homestayPayload, S>

  type homestayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<homestayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomestayCountAggregateInputType | true
    }

  export interface homestayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['homestay'], meta: { name: 'homestay' } }
    /**
     * Find zero or one Homestay that matches the filter.
     * @param {homestayFindUniqueArgs} args - Arguments to find a Homestay
     * @example
     * // Get one Homestay
     * const homestay = await prisma.homestay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends homestayFindUniqueArgs>(args: SelectSubset<T, homestayFindUniqueArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Homestay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {homestayFindUniqueOrThrowArgs} args - Arguments to find a Homestay
     * @example
     * // Get one Homestay
     * const homestay = await prisma.homestay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends homestayFindUniqueOrThrowArgs>(args: SelectSubset<T, homestayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homestay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayFindFirstArgs} args - Arguments to find a Homestay
     * @example
     * // Get one Homestay
     * const homestay = await prisma.homestay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends homestayFindFirstArgs>(args?: SelectSubset<T, homestayFindFirstArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homestay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayFindFirstOrThrowArgs} args - Arguments to find a Homestay
     * @example
     * // Get one Homestay
     * const homestay = await prisma.homestay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends homestayFindFirstOrThrowArgs>(args?: SelectSubset<T, homestayFindFirstOrThrowArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Homestays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homestays
     * const homestays = await prisma.homestay.findMany()
     * 
     * // Get first 10 Homestays
     * const homestays = await prisma.homestay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homestayWithIdOnly = await prisma.homestay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends homestayFindManyArgs>(args?: SelectSubset<T, homestayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Homestay.
     * @param {homestayCreateArgs} args - Arguments to create a Homestay.
     * @example
     * // Create one Homestay
     * const Homestay = await prisma.homestay.create({
     *   data: {
     *     // ... data to create a Homestay
     *   }
     * })
     * 
     */
    create<T extends homestayCreateArgs>(args: SelectSubset<T, homestayCreateArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Homestays.
     * @param {homestayCreateManyArgs} args - Arguments to create many Homestays.
     * @example
     * // Create many Homestays
     * const homestay = await prisma.homestay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends homestayCreateManyArgs>(args?: SelectSubset<T, homestayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Homestays and returns the data saved in the database.
     * @param {homestayCreateManyAndReturnArgs} args - Arguments to create many Homestays.
     * @example
     * // Create many Homestays
     * const homestay = await prisma.homestay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Homestays and only return the `id`
     * const homestayWithIdOnly = await prisma.homestay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends homestayCreateManyAndReturnArgs>(args?: SelectSubset<T, homestayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Homestay.
     * @param {homestayDeleteArgs} args - Arguments to delete one Homestay.
     * @example
     * // Delete one Homestay
     * const Homestay = await prisma.homestay.delete({
     *   where: {
     *     // ... filter to delete one Homestay
     *   }
     * })
     * 
     */
    delete<T extends homestayDeleteArgs>(args: SelectSubset<T, homestayDeleteArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Homestay.
     * @param {homestayUpdateArgs} args - Arguments to update one Homestay.
     * @example
     * // Update one Homestay
     * const homestay = await prisma.homestay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends homestayUpdateArgs>(args: SelectSubset<T, homestayUpdateArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Homestays.
     * @param {homestayDeleteManyArgs} args - Arguments to filter Homestays to delete.
     * @example
     * // Delete a few Homestays
     * const { count } = await prisma.homestay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends homestayDeleteManyArgs>(args?: SelectSubset<T, homestayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homestays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homestays
     * const homestay = await prisma.homestay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends homestayUpdateManyArgs>(args: SelectSubset<T, homestayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homestays and returns the data updated in the database.
     * @param {homestayUpdateManyAndReturnArgs} args - Arguments to update many Homestays.
     * @example
     * // Update many Homestays
     * const homestay = await prisma.homestay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Homestays and only return the `id`
     * const homestayWithIdOnly = await prisma.homestay.updateManyAndReturn({
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
    updateManyAndReturn<T extends homestayUpdateManyAndReturnArgs>(args: SelectSubset<T, homestayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Homestay.
     * @param {homestayUpsertArgs} args - Arguments to update or create a Homestay.
     * @example
     * // Update or create a Homestay
     * const homestay = await prisma.homestay.upsert({
     *   create: {
     *     // ... data to create a Homestay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Homestay we want to update
     *   }
     * })
     */
    upsert<T extends homestayUpsertArgs>(args: SelectSubset<T, homestayUpsertArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Homestays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayCountArgs} args - Arguments to filter Homestays to count.
     * @example
     * // Count the number of Homestays
     * const count = await prisma.homestay.count({
     *   where: {
     *     // ... the filter for the Homestays we want to count
     *   }
     * })
    **/
    count<T extends homestayCountArgs>(
      args?: Subset<T, homestayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomestayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Homestay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomestayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomestayAggregateArgs>(args: Subset<T, HomestayAggregateArgs>): Prisma.PrismaPromise<GetHomestayAggregateType<T>>

    /**
     * Group by Homestay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayGroupByArgs} args - Group by arguments.
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
      T extends homestayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: homestayGroupByArgs['orderBy'] }
        : { orderBy?: homestayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, homestayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomestayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the homestay model
   */
  readonly fields: homestayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for homestay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__homestayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin_users<T extends admin_usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, admin_usersDefaultArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    homestayImages<T extends homestay$homestayImagesArgs<ExtArgs> = {}>(args?: Subset<T, homestay$homestayImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homestayRoom<T extends homestay$homestayRoomArgs<ExtArgs> = {}>(args?: Subset<T, homestay$homestayRoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends homestay$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, homestay$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the homestay model
   */
  interface homestayFieldRefs {
    readonly id: FieldRef<"homestay", 'Int'>
    readonly title: FieldRef<"homestay", 'String'>
    readonly description: FieldRef<"homestay", 'String'>
    readonly user_id: FieldRef<"homestay", 'Int'>
    readonly status: FieldRef<"homestay", 'homestay_status'>
    readonly has_rooms: FieldRef<"homestay", 'Boolean'>
    readonly location: FieldRef<"homestay", 'String'>
    readonly address: FieldRef<"homestay", 'String'>
    readonly base_price: FieldRef<"homestay", 'Decimal'>
    readonly max_guests: FieldRef<"homestay", 'Int'>
    readonly contact_number: FieldRef<"homestay", 'String'>
    readonly created_at: FieldRef<"homestay", 'DateTime'>
    readonly updated_at: FieldRef<"homestay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * homestay findUnique
   */
  export type homestayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * Filter, which homestay to fetch.
     */
    where: homestayWhereUniqueInput
  }

  /**
   * homestay findUniqueOrThrow
   */
  export type homestayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * Filter, which homestay to fetch.
     */
    where: homestayWhereUniqueInput
  }

  /**
   * homestay findFirst
   */
  export type homestayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * Filter, which homestay to fetch.
     */
    where?: homestayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestays to fetch.
     */
    orderBy?: homestayOrderByWithRelationInput | homestayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homestays.
     */
    cursor?: homestayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homestays.
     */
    distinct?: HomestayScalarFieldEnum | HomestayScalarFieldEnum[]
  }

  /**
   * homestay findFirstOrThrow
   */
  export type homestayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * Filter, which homestay to fetch.
     */
    where?: homestayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestays to fetch.
     */
    orderBy?: homestayOrderByWithRelationInput | homestayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homestays.
     */
    cursor?: homestayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homestays.
     */
    distinct?: HomestayScalarFieldEnum | HomestayScalarFieldEnum[]
  }

  /**
   * homestay findMany
   */
  export type homestayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * Filter, which homestays to fetch.
     */
    where?: homestayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestays to fetch.
     */
    orderBy?: homestayOrderByWithRelationInput | homestayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing homestays.
     */
    cursor?: homestayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestays.
     */
    skip?: number
    distinct?: HomestayScalarFieldEnum | HomestayScalarFieldEnum[]
  }

  /**
   * homestay create
   */
  export type homestayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * The data needed to create a homestay.
     */
    data: XOR<homestayCreateInput, homestayUncheckedCreateInput>
  }

  /**
   * homestay createMany
   */
  export type homestayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many homestays.
     */
    data: homestayCreateManyInput | homestayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * homestay createManyAndReturn
   */
  export type homestayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * The data used to create many homestays.
     */
    data: homestayCreateManyInput | homestayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * homestay update
   */
  export type homestayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * The data needed to update a homestay.
     */
    data: XOR<homestayUpdateInput, homestayUncheckedUpdateInput>
    /**
     * Choose, which homestay to update.
     */
    where: homestayWhereUniqueInput
  }

  /**
   * homestay updateMany
   */
  export type homestayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update homestays.
     */
    data: XOR<homestayUpdateManyMutationInput, homestayUncheckedUpdateManyInput>
    /**
     * Filter which homestays to update
     */
    where?: homestayWhereInput
    /**
     * Limit how many homestays to update.
     */
    limit?: number
  }

  /**
   * homestay updateManyAndReturn
   */
  export type homestayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * The data used to update homestays.
     */
    data: XOR<homestayUpdateManyMutationInput, homestayUncheckedUpdateManyInput>
    /**
     * Filter which homestays to update
     */
    where?: homestayWhereInput
    /**
     * Limit how many homestays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * homestay upsert
   */
  export type homestayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * The filter to search for the homestay to update in case it exists.
     */
    where: homestayWhereUniqueInput
    /**
     * In case the homestay found by the `where` argument doesn't exist, create a new homestay with this data.
     */
    create: XOR<homestayCreateInput, homestayUncheckedCreateInput>
    /**
     * In case the homestay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<homestayUpdateInput, homestayUncheckedUpdateInput>
  }

  /**
   * homestay delete
   */
  export type homestayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
    /**
     * Filter which homestay to delete.
     */
    where: homestayWhereUniqueInput
  }

  /**
   * homestay deleteMany
   */
  export type homestayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homestays to delete
     */
    where?: homestayWhereInput
    /**
     * Limit how many homestays to delete.
     */
    limit?: number
  }

  /**
   * homestay.homestayImages
   */
  export type homestay$homestayImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    where?: homestayImagesWhereInput
    orderBy?: homestayImagesOrderByWithRelationInput | homestayImagesOrderByWithRelationInput[]
    cursor?: homestayImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomestayImagesScalarFieldEnum | HomestayImagesScalarFieldEnum[]
  }

  /**
   * homestay.homestayRoom
   */
  export type homestay$homestayRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    where?: homestayRoomWhereInput
    orderBy?: homestayRoomOrderByWithRelationInput | homestayRoomOrderByWithRelationInput[]
    cursor?: homestayRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomestayRoomScalarFieldEnum | HomestayRoomScalarFieldEnum[]
  }

  /**
   * homestay.reviews
   */
  export type homestay$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * homestay without action
   */
  export type homestayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestay
     */
    select?: homestaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestay
     */
    omit?: homestayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayInclude<ExtArgs> | null
  }


  /**
   * Model homestayImages
   */

  export type AggregateHomestayImages = {
    _count: HomestayImagesCountAggregateOutputType | null
    _avg: HomestayImagesAvgAggregateOutputType | null
    _sum: HomestayImagesSumAggregateOutputType | null
    _min: HomestayImagesMinAggregateOutputType | null
    _max: HomestayImagesMaxAggregateOutputType | null
  }

  export type HomestayImagesAvgAggregateOutputType = {
    id: number | null
    homestay_id: number | null
    order: number | null
  }

  export type HomestayImagesSumAggregateOutputType = {
    id: number | null
    homestay_id: number | null
    order: number | null
  }

  export type HomestayImagesMinAggregateOutputType = {
    id: number | null
    img_url: string | null
    homestay_id: number | null
    is_primary: boolean | null
    order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HomestayImagesMaxAggregateOutputType = {
    id: number | null
    img_url: string | null
    homestay_id: number | null
    is_primary: boolean | null
    order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HomestayImagesCountAggregateOutputType = {
    id: number
    img_url: number
    homestay_id: number
    is_primary: number
    order: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HomestayImagesAvgAggregateInputType = {
    id?: true
    homestay_id?: true
    order?: true
  }

  export type HomestayImagesSumAggregateInputType = {
    id?: true
    homestay_id?: true
    order?: true
  }

  export type HomestayImagesMinAggregateInputType = {
    id?: true
    img_url?: true
    homestay_id?: true
    is_primary?: true
    order?: true
    created_at?: true
    updated_at?: true
  }

  export type HomestayImagesMaxAggregateInputType = {
    id?: true
    img_url?: true
    homestay_id?: true
    is_primary?: true
    order?: true
    created_at?: true
    updated_at?: true
  }

  export type HomestayImagesCountAggregateInputType = {
    id?: true
    img_url?: true
    homestay_id?: true
    is_primary?: true
    order?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HomestayImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homestayImages to aggregate.
     */
    where?: homestayImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayImages to fetch.
     */
    orderBy?: homestayImagesOrderByWithRelationInput | homestayImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: homestayImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned homestayImages
    **/
    _count?: true | HomestayImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomestayImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomestayImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomestayImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomestayImagesMaxAggregateInputType
  }

  export type GetHomestayImagesAggregateType<T extends HomestayImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateHomestayImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomestayImages[P]>
      : GetScalarType<T[P], AggregateHomestayImages[P]>
  }




  export type homestayImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homestayImagesWhereInput
    orderBy?: homestayImagesOrderByWithAggregationInput | homestayImagesOrderByWithAggregationInput[]
    by: HomestayImagesScalarFieldEnum[] | HomestayImagesScalarFieldEnum
    having?: homestayImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomestayImagesCountAggregateInputType | true
    _avg?: HomestayImagesAvgAggregateInputType
    _sum?: HomestayImagesSumAggregateInputType
    _min?: HomestayImagesMinAggregateInputType
    _max?: HomestayImagesMaxAggregateInputType
  }

  export type HomestayImagesGroupByOutputType = {
    id: number
    img_url: string
    homestay_id: number
    is_primary: boolean
    order: number
    created_at: Date
    updated_at: Date
    _count: HomestayImagesCountAggregateOutputType | null
    _avg: HomestayImagesAvgAggregateOutputType | null
    _sum: HomestayImagesSumAggregateOutputType | null
    _min: HomestayImagesMinAggregateOutputType | null
    _max: HomestayImagesMaxAggregateOutputType | null
  }

  type GetHomestayImagesGroupByPayload<T extends homestayImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomestayImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomestayImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomestayImagesGroupByOutputType[P]>
            : GetScalarType<T[P], HomestayImagesGroupByOutputType[P]>
        }
      >
    >


  export type homestayImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img_url?: boolean
    homestay_id?: boolean
    is_primary?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestayImages"]>

  export type homestayImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img_url?: boolean
    homestay_id?: boolean
    is_primary?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestayImages"]>

  export type homestayImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img_url?: boolean
    homestay_id?: boolean
    is_primary?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestayImages"]>

  export type homestayImagesSelectScalar = {
    id?: boolean
    img_url?: boolean
    homestay_id?: boolean
    is_primary?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type homestayImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "img_url" | "homestay_id" | "is_primary" | "order" | "created_at" | "updated_at", ExtArgs["result"]["homestayImages"]>
  export type homestayImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }
  export type homestayImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }
  export type homestayImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }

  export type $homestayImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "homestayImages"
    objects: {
      homestay: Prisma.$homestayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      img_url: string
      homestay_id: number
      is_primary: boolean
      order: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["homestayImages"]>
    composites: {}
  }

  type homestayImagesGetPayload<S extends boolean | null | undefined | homestayImagesDefaultArgs> = $Result.GetResult<Prisma.$homestayImagesPayload, S>

  type homestayImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<homestayImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomestayImagesCountAggregateInputType | true
    }

  export interface homestayImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['homestayImages'], meta: { name: 'homestayImages' } }
    /**
     * Find zero or one HomestayImages that matches the filter.
     * @param {homestayImagesFindUniqueArgs} args - Arguments to find a HomestayImages
     * @example
     * // Get one HomestayImages
     * const homestayImages = await prisma.homestayImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends homestayImagesFindUniqueArgs>(args: SelectSubset<T, homestayImagesFindUniqueArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomestayImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {homestayImagesFindUniqueOrThrowArgs} args - Arguments to find a HomestayImages
     * @example
     * // Get one HomestayImages
     * const homestayImages = await prisma.homestayImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends homestayImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, homestayImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomestayImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayImagesFindFirstArgs} args - Arguments to find a HomestayImages
     * @example
     * // Get one HomestayImages
     * const homestayImages = await prisma.homestayImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends homestayImagesFindFirstArgs>(args?: SelectSubset<T, homestayImagesFindFirstArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomestayImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayImagesFindFirstOrThrowArgs} args - Arguments to find a HomestayImages
     * @example
     * // Get one HomestayImages
     * const homestayImages = await prisma.homestayImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends homestayImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, homestayImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomestayImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomestayImages
     * const homestayImages = await prisma.homestayImages.findMany()
     * 
     * // Get first 10 HomestayImages
     * const homestayImages = await prisma.homestayImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homestayImagesWithIdOnly = await prisma.homestayImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends homestayImagesFindManyArgs>(args?: SelectSubset<T, homestayImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomestayImages.
     * @param {homestayImagesCreateArgs} args - Arguments to create a HomestayImages.
     * @example
     * // Create one HomestayImages
     * const HomestayImages = await prisma.homestayImages.create({
     *   data: {
     *     // ... data to create a HomestayImages
     *   }
     * })
     * 
     */
    create<T extends homestayImagesCreateArgs>(args: SelectSubset<T, homestayImagesCreateArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomestayImages.
     * @param {homestayImagesCreateManyArgs} args - Arguments to create many HomestayImages.
     * @example
     * // Create many HomestayImages
     * const homestayImages = await prisma.homestayImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends homestayImagesCreateManyArgs>(args?: SelectSubset<T, homestayImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomestayImages and returns the data saved in the database.
     * @param {homestayImagesCreateManyAndReturnArgs} args - Arguments to create many HomestayImages.
     * @example
     * // Create many HomestayImages
     * const homestayImages = await prisma.homestayImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomestayImages and only return the `id`
     * const homestayImagesWithIdOnly = await prisma.homestayImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends homestayImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, homestayImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomestayImages.
     * @param {homestayImagesDeleteArgs} args - Arguments to delete one HomestayImages.
     * @example
     * // Delete one HomestayImages
     * const HomestayImages = await prisma.homestayImages.delete({
     *   where: {
     *     // ... filter to delete one HomestayImages
     *   }
     * })
     * 
     */
    delete<T extends homestayImagesDeleteArgs>(args: SelectSubset<T, homestayImagesDeleteArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomestayImages.
     * @param {homestayImagesUpdateArgs} args - Arguments to update one HomestayImages.
     * @example
     * // Update one HomestayImages
     * const homestayImages = await prisma.homestayImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends homestayImagesUpdateArgs>(args: SelectSubset<T, homestayImagesUpdateArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomestayImages.
     * @param {homestayImagesDeleteManyArgs} args - Arguments to filter HomestayImages to delete.
     * @example
     * // Delete a few HomestayImages
     * const { count } = await prisma.homestayImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends homestayImagesDeleteManyArgs>(args?: SelectSubset<T, homestayImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomestayImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomestayImages
     * const homestayImages = await prisma.homestayImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends homestayImagesUpdateManyArgs>(args: SelectSubset<T, homestayImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomestayImages and returns the data updated in the database.
     * @param {homestayImagesUpdateManyAndReturnArgs} args - Arguments to update many HomestayImages.
     * @example
     * // Update many HomestayImages
     * const homestayImages = await prisma.homestayImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomestayImages and only return the `id`
     * const homestayImagesWithIdOnly = await prisma.homestayImages.updateManyAndReturn({
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
    updateManyAndReturn<T extends homestayImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, homestayImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomestayImages.
     * @param {homestayImagesUpsertArgs} args - Arguments to update or create a HomestayImages.
     * @example
     * // Update or create a HomestayImages
     * const homestayImages = await prisma.homestayImages.upsert({
     *   create: {
     *     // ... data to create a HomestayImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomestayImages we want to update
     *   }
     * })
     */
    upsert<T extends homestayImagesUpsertArgs>(args: SelectSubset<T, homestayImagesUpsertArgs<ExtArgs>>): Prisma__homestayImagesClient<$Result.GetResult<Prisma.$homestayImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomestayImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayImagesCountArgs} args - Arguments to filter HomestayImages to count.
     * @example
     * // Count the number of HomestayImages
     * const count = await prisma.homestayImages.count({
     *   where: {
     *     // ... the filter for the HomestayImages we want to count
     *   }
     * })
    **/
    count<T extends homestayImagesCountArgs>(
      args?: Subset<T, homestayImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomestayImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomestayImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomestayImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomestayImagesAggregateArgs>(args: Subset<T, HomestayImagesAggregateArgs>): Prisma.PrismaPromise<GetHomestayImagesAggregateType<T>>

    /**
     * Group by HomestayImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayImagesGroupByArgs} args - Group by arguments.
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
      T extends homestayImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: homestayImagesGroupByArgs['orderBy'] }
        : { orderBy?: homestayImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, homestayImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomestayImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the homestayImages model
   */
  readonly fields: homestayImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for homestayImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__homestayImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homestay<T extends homestayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, homestayDefaultArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the homestayImages model
   */
  interface homestayImagesFieldRefs {
    readonly id: FieldRef<"homestayImages", 'Int'>
    readonly img_url: FieldRef<"homestayImages", 'String'>
    readonly homestay_id: FieldRef<"homestayImages", 'Int'>
    readonly is_primary: FieldRef<"homestayImages", 'Boolean'>
    readonly order: FieldRef<"homestayImages", 'Int'>
    readonly created_at: FieldRef<"homestayImages", 'DateTime'>
    readonly updated_at: FieldRef<"homestayImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * homestayImages findUnique
   */
  export type homestayImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * Filter, which homestayImages to fetch.
     */
    where: homestayImagesWhereUniqueInput
  }

  /**
   * homestayImages findUniqueOrThrow
   */
  export type homestayImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * Filter, which homestayImages to fetch.
     */
    where: homestayImagesWhereUniqueInput
  }

  /**
   * homestayImages findFirst
   */
  export type homestayImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * Filter, which homestayImages to fetch.
     */
    where?: homestayImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayImages to fetch.
     */
    orderBy?: homestayImagesOrderByWithRelationInput | homestayImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homestayImages.
     */
    cursor?: homestayImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homestayImages.
     */
    distinct?: HomestayImagesScalarFieldEnum | HomestayImagesScalarFieldEnum[]
  }

  /**
   * homestayImages findFirstOrThrow
   */
  export type homestayImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * Filter, which homestayImages to fetch.
     */
    where?: homestayImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayImages to fetch.
     */
    orderBy?: homestayImagesOrderByWithRelationInput | homestayImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homestayImages.
     */
    cursor?: homestayImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homestayImages.
     */
    distinct?: HomestayImagesScalarFieldEnum | HomestayImagesScalarFieldEnum[]
  }

  /**
   * homestayImages findMany
   */
  export type homestayImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * Filter, which homestayImages to fetch.
     */
    where?: homestayImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayImages to fetch.
     */
    orderBy?: homestayImagesOrderByWithRelationInput | homestayImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing homestayImages.
     */
    cursor?: homestayImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayImages.
     */
    skip?: number
    distinct?: HomestayImagesScalarFieldEnum | HomestayImagesScalarFieldEnum[]
  }

  /**
   * homestayImages create
   */
  export type homestayImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a homestayImages.
     */
    data: XOR<homestayImagesCreateInput, homestayImagesUncheckedCreateInput>
  }

  /**
   * homestayImages createMany
   */
  export type homestayImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many homestayImages.
     */
    data: homestayImagesCreateManyInput | homestayImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * homestayImages createManyAndReturn
   */
  export type homestayImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * The data used to create many homestayImages.
     */
    data: homestayImagesCreateManyInput | homestayImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * homestayImages update
   */
  export type homestayImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a homestayImages.
     */
    data: XOR<homestayImagesUpdateInput, homestayImagesUncheckedUpdateInput>
    /**
     * Choose, which homestayImages to update.
     */
    where: homestayImagesWhereUniqueInput
  }

  /**
   * homestayImages updateMany
   */
  export type homestayImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update homestayImages.
     */
    data: XOR<homestayImagesUpdateManyMutationInput, homestayImagesUncheckedUpdateManyInput>
    /**
     * Filter which homestayImages to update
     */
    where?: homestayImagesWhereInput
    /**
     * Limit how many homestayImages to update.
     */
    limit?: number
  }

  /**
   * homestayImages updateManyAndReturn
   */
  export type homestayImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * The data used to update homestayImages.
     */
    data: XOR<homestayImagesUpdateManyMutationInput, homestayImagesUncheckedUpdateManyInput>
    /**
     * Filter which homestayImages to update
     */
    where?: homestayImagesWhereInput
    /**
     * Limit how many homestayImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * homestayImages upsert
   */
  export type homestayImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the homestayImages to update in case it exists.
     */
    where: homestayImagesWhereUniqueInput
    /**
     * In case the homestayImages found by the `where` argument doesn't exist, create a new homestayImages with this data.
     */
    create: XOR<homestayImagesCreateInput, homestayImagesUncheckedCreateInput>
    /**
     * In case the homestayImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<homestayImagesUpdateInput, homestayImagesUncheckedUpdateInput>
  }

  /**
   * homestayImages delete
   */
  export type homestayImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
    /**
     * Filter which homestayImages to delete.
     */
    where: homestayImagesWhereUniqueInput
  }

  /**
   * homestayImages deleteMany
   */
  export type homestayImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homestayImages to delete
     */
    where?: homestayImagesWhereInput
    /**
     * Limit how many homestayImages to delete.
     */
    limit?: number
  }

  /**
   * homestayImages without action
   */
  export type homestayImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayImages
     */
    select?: homestayImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayImages
     */
    omit?: homestayImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayImagesInclude<ExtArgs> | null
  }


  /**
   * Model homestayRoom
   */

  export type AggregateHomestayRoom = {
    _count: HomestayRoomCountAggregateOutputType | null
    _avg: HomestayRoomAvgAggregateOutputType | null
    _sum: HomestayRoomSumAggregateOutputType | null
    _min: HomestayRoomMinAggregateOutputType | null
    _max: HomestayRoomMaxAggregateOutputType | null
  }

  export type HomestayRoomAvgAggregateOutputType = {
    id: number | null
    homestay_id: number | null
    number_people: number | null
    max_occupancy: number | null
    price: Decimal | null
  }

  export type HomestayRoomSumAggregateOutputType = {
    id: number | null
    homestay_id: number | null
    number_people: number | null
    max_occupancy: number | null
    price: Decimal | null
  }

  export type HomestayRoomMinAggregateOutputType = {
    id: number | null
    homestay_id: number | null
    title: string | null
    description: string | null
    status: $Enums.room_status | null
    room_number: string | null
    number_people: number | null
    max_occupancy: number | null
    price: Decimal | null
    currency: string | null
    size: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HomestayRoomMaxAggregateOutputType = {
    id: number | null
    homestay_id: number | null
    title: string | null
    description: string | null
    status: $Enums.room_status | null
    room_number: string | null
    number_people: number | null
    max_occupancy: number | null
    price: Decimal | null
    currency: string | null
    size: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HomestayRoomCountAggregateOutputType = {
    id: number
    homestay_id: number
    title: number
    description: number
    status: number
    room_number: number
    number_people: number
    max_occupancy: number
    price: number
    currency: number
    size: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HomestayRoomAvgAggregateInputType = {
    id?: true
    homestay_id?: true
    number_people?: true
    max_occupancy?: true
    price?: true
  }

  export type HomestayRoomSumAggregateInputType = {
    id?: true
    homestay_id?: true
    number_people?: true
    max_occupancy?: true
    price?: true
  }

  export type HomestayRoomMinAggregateInputType = {
    id?: true
    homestay_id?: true
    title?: true
    description?: true
    status?: true
    room_number?: true
    number_people?: true
    max_occupancy?: true
    price?: true
    currency?: true
    size?: true
    created_at?: true
    updated_at?: true
  }

  export type HomestayRoomMaxAggregateInputType = {
    id?: true
    homestay_id?: true
    title?: true
    description?: true
    status?: true
    room_number?: true
    number_people?: true
    max_occupancy?: true
    price?: true
    currency?: true
    size?: true
    created_at?: true
    updated_at?: true
  }

  export type HomestayRoomCountAggregateInputType = {
    id?: true
    homestay_id?: true
    title?: true
    description?: true
    status?: true
    room_number?: true
    number_people?: true
    max_occupancy?: true
    price?: true
    currency?: true
    size?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HomestayRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homestayRoom to aggregate.
     */
    where?: homestayRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayRooms to fetch.
     */
    orderBy?: homestayRoomOrderByWithRelationInput | homestayRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: homestayRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned homestayRooms
    **/
    _count?: true | HomestayRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomestayRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomestayRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomestayRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomestayRoomMaxAggregateInputType
  }

  export type GetHomestayRoomAggregateType<T extends HomestayRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateHomestayRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomestayRoom[P]>
      : GetScalarType<T[P], AggregateHomestayRoom[P]>
  }




  export type homestayRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homestayRoomWhereInput
    orderBy?: homestayRoomOrderByWithAggregationInput | homestayRoomOrderByWithAggregationInput[]
    by: HomestayRoomScalarFieldEnum[] | HomestayRoomScalarFieldEnum
    having?: homestayRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomestayRoomCountAggregateInputType | true
    _avg?: HomestayRoomAvgAggregateInputType
    _sum?: HomestayRoomSumAggregateInputType
    _min?: HomestayRoomMinAggregateInputType
    _max?: HomestayRoomMaxAggregateInputType
  }

  export type HomestayRoomGroupByOutputType = {
    id: number
    homestay_id: number
    title: string
    description: string | null
    status: $Enums.room_status
    room_number: string | null
    number_people: number
    max_occupancy: number
    price: Decimal
    currency: string
    size: string | null
    created_at: Date
    updated_at: Date
    _count: HomestayRoomCountAggregateOutputType | null
    _avg: HomestayRoomAvgAggregateOutputType | null
    _sum: HomestayRoomSumAggregateOutputType | null
    _min: HomestayRoomMinAggregateOutputType | null
    _max: HomestayRoomMaxAggregateOutputType | null
  }

  type GetHomestayRoomGroupByPayload<T extends homestayRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomestayRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomestayRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomestayRoomGroupByOutputType[P]>
            : GetScalarType<T[P], HomestayRoomGroupByOutputType[P]>
        }
      >
    >


  export type homestayRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    homestay_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    room_number?: boolean
    number_people?: boolean
    max_occupancy?: boolean
    price?: boolean
    currency?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | homestayRoom$bookingArgs<ExtArgs>
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    relation_feature_room?: boolean | homestayRoom$relation_feature_roomArgs<ExtArgs>
    reviews?: boolean | homestayRoom$reviewsArgs<ExtArgs>
    _count?: boolean | HomestayRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestayRoom"]>

  export type homestayRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    homestay_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    room_number?: boolean
    number_people?: boolean
    max_occupancy?: boolean
    price?: boolean
    currency?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestayRoom"]>

  export type homestayRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    homestay_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    room_number?: boolean
    number_people?: boolean
    max_occupancy?: boolean
    price?: boolean
    currency?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homestayRoom"]>

  export type homestayRoomSelectScalar = {
    id?: boolean
    homestay_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    room_number?: boolean
    number_people?: boolean
    max_occupancy?: boolean
    price?: boolean
    currency?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type homestayRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "homestay_id" | "title" | "description" | "status" | "room_number" | "number_people" | "max_occupancy" | "price" | "currency" | "size" | "created_at" | "updated_at", ExtArgs["result"]["homestayRoom"]>
  export type homestayRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | homestayRoom$bookingArgs<ExtArgs>
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    relation_feature_room?: boolean | homestayRoom$relation_feature_roomArgs<ExtArgs>
    reviews?: boolean | homestayRoom$reviewsArgs<ExtArgs>
    _count?: boolean | HomestayRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type homestayRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }
  export type homestayRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
  }

  export type $homestayRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "homestayRoom"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
      homestay: Prisma.$homestayPayload<ExtArgs>
      relation_feature_room: Prisma.$relation_feature_roomPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      homestay_id: number
      title: string
      description: string | null
      status: $Enums.room_status
      room_number: string | null
      number_people: number
      max_occupancy: number
      price: Prisma.Decimal
      currency: string
      size: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["homestayRoom"]>
    composites: {}
  }

  type homestayRoomGetPayload<S extends boolean | null | undefined | homestayRoomDefaultArgs> = $Result.GetResult<Prisma.$homestayRoomPayload, S>

  type homestayRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<homestayRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomestayRoomCountAggregateInputType | true
    }

  export interface homestayRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['homestayRoom'], meta: { name: 'homestayRoom' } }
    /**
     * Find zero or one HomestayRoom that matches the filter.
     * @param {homestayRoomFindUniqueArgs} args - Arguments to find a HomestayRoom
     * @example
     * // Get one HomestayRoom
     * const homestayRoom = await prisma.homestayRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends homestayRoomFindUniqueArgs>(args: SelectSubset<T, homestayRoomFindUniqueArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomestayRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {homestayRoomFindUniqueOrThrowArgs} args - Arguments to find a HomestayRoom
     * @example
     * // Get one HomestayRoom
     * const homestayRoom = await prisma.homestayRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends homestayRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, homestayRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomestayRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayRoomFindFirstArgs} args - Arguments to find a HomestayRoom
     * @example
     * // Get one HomestayRoom
     * const homestayRoom = await prisma.homestayRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends homestayRoomFindFirstArgs>(args?: SelectSubset<T, homestayRoomFindFirstArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomestayRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayRoomFindFirstOrThrowArgs} args - Arguments to find a HomestayRoom
     * @example
     * // Get one HomestayRoom
     * const homestayRoom = await prisma.homestayRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends homestayRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, homestayRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomestayRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomestayRooms
     * const homestayRooms = await prisma.homestayRoom.findMany()
     * 
     * // Get first 10 HomestayRooms
     * const homestayRooms = await prisma.homestayRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homestayRoomWithIdOnly = await prisma.homestayRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends homestayRoomFindManyArgs>(args?: SelectSubset<T, homestayRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomestayRoom.
     * @param {homestayRoomCreateArgs} args - Arguments to create a HomestayRoom.
     * @example
     * // Create one HomestayRoom
     * const HomestayRoom = await prisma.homestayRoom.create({
     *   data: {
     *     // ... data to create a HomestayRoom
     *   }
     * })
     * 
     */
    create<T extends homestayRoomCreateArgs>(args: SelectSubset<T, homestayRoomCreateArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomestayRooms.
     * @param {homestayRoomCreateManyArgs} args - Arguments to create many HomestayRooms.
     * @example
     * // Create many HomestayRooms
     * const homestayRoom = await prisma.homestayRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends homestayRoomCreateManyArgs>(args?: SelectSubset<T, homestayRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomestayRooms and returns the data saved in the database.
     * @param {homestayRoomCreateManyAndReturnArgs} args - Arguments to create many HomestayRooms.
     * @example
     * // Create many HomestayRooms
     * const homestayRoom = await prisma.homestayRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomestayRooms and only return the `id`
     * const homestayRoomWithIdOnly = await prisma.homestayRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends homestayRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, homestayRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomestayRoom.
     * @param {homestayRoomDeleteArgs} args - Arguments to delete one HomestayRoom.
     * @example
     * // Delete one HomestayRoom
     * const HomestayRoom = await prisma.homestayRoom.delete({
     *   where: {
     *     // ... filter to delete one HomestayRoom
     *   }
     * })
     * 
     */
    delete<T extends homestayRoomDeleteArgs>(args: SelectSubset<T, homestayRoomDeleteArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomestayRoom.
     * @param {homestayRoomUpdateArgs} args - Arguments to update one HomestayRoom.
     * @example
     * // Update one HomestayRoom
     * const homestayRoom = await prisma.homestayRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends homestayRoomUpdateArgs>(args: SelectSubset<T, homestayRoomUpdateArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomestayRooms.
     * @param {homestayRoomDeleteManyArgs} args - Arguments to filter HomestayRooms to delete.
     * @example
     * // Delete a few HomestayRooms
     * const { count } = await prisma.homestayRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends homestayRoomDeleteManyArgs>(args?: SelectSubset<T, homestayRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomestayRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomestayRooms
     * const homestayRoom = await prisma.homestayRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends homestayRoomUpdateManyArgs>(args: SelectSubset<T, homestayRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomestayRooms and returns the data updated in the database.
     * @param {homestayRoomUpdateManyAndReturnArgs} args - Arguments to update many HomestayRooms.
     * @example
     * // Update many HomestayRooms
     * const homestayRoom = await prisma.homestayRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomestayRooms and only return the `id`
     * const homestayRoomWithIdOnly = await prisma.homestayRoom.updateManyAndReturn({
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
    updateManyAndReturn<T extends homestayRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, homestayRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomestayRoom.
     * @param {homestayRoomUpsertArgs} args - Arguments to update or create a HomestayRoom.
     * @example
     * // Update or create a HomestayRoom
     * const homestayRoom = await prisma.homestayRoom.upsert({
     *   create: {
     *     // ... data to create a HomestayRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomestayRoom we want to update
     *   }
     * })
     */
    upsert<T extends homestayRoomUpsertArgs>(args: SelectSubset<T, homestayRoomUpsertArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomestayRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayRoomCountArgs} args - Arguments to filter HomestayRooms to count.
     * @example
     * // Count the number of HomestayRooms
     * const count = await prisma.homestayRoom.count({
     *   where: {
     *     // ... the filter for the HomestayRooms we want to count
     *   }
     * })
    **/
    count<T extends homestayRoomCountArgs>(
      args?: Subset<T, homestayRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomestayRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomestayRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomestayRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomestayRoomAggregateArgs>(args: Subset<T, HomestayRoomAggregateArgs>): Prisma.PrismaPromise<GetHomestayRoomAggregateType<T>>

    /**
     * Group by HomestayRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homestayRoomGroupByArgs} args - Group by arguments.
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
      T extends homestayRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: homestayRoomGroupByArgs['orderBy'] }
        : { orderBy?: homestayRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, homestayRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomestayRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the homestayRoom model
   */
  readonly fields: homestayRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for homestayRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__homestayRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends homestayRoom$bookingArgs<ExtArgs> = {}>(args?: Subset<T, homestayRoom$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homestay<T extends homestayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, homestayDefaultArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relation_feature_room<T extends homestayRoom$relation_feature_roomArgs<ExtArgs> = {}>(args?: Subset<T, homestayRoom$relation_feature_roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends homestayRoom$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, homestayRoom$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the homestayRoom model
   */
  interface homestayRoomFieldRefs {
    readonly id: FieldRef<"homestayRoom", 'Int'>
    readonly homestay_id: FieldRef<"homestayRoom", 'Int'>
    readonly title: FieldRef<"homestayRoom", 'String'>
    readonly description: FieldRef<"homestayRoom", 'String'>
    readonly status: FieldRef<"homestayRoom", 'room_status'>
    readonly room_number: FieldRef<"homestayRoom", 'String'>
    readonly number_people: FieldRef<"homestayRoom", 'Int'>
    readonly max_occupancy: FieldRef<"homestayRoom", 'Int'>
    readonly price: FieldRef<"homestayRoom", 'Decimal'>
    readonly currency: FieldRef<"homestayRoom", 'String'>
    readonly size: FieldRef<"homestayRoom", 'String'>
    readonly created_at: FieldRef<"homestayRoom", 'DateTime'>
    readonly updated_at: FieldRef<"homestayRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * homestayRoom findUnique
   */
  export type homestayRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * Filter, which homestayRoom to fetch.
     */
    where: homestayRoomWhereUniqueInput
  }

  /**
   * homestayRoom findUniqueOrThrow
   */
  export type homestayRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * Filter, which homestayRoom to fetch.
     */
    where: homestayRoomWhereUniqueInput
  }

  /**
   * homestayRoom findFirst
   */
  export type homestayRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * Filter, which homestayRoom to fetch.
     */
    where?: homestayRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayRooms to fetch.
     */
    orderBy?: homestayRoomOrderByWithRelationInput | homestayRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homestayRooms.
     */
    cursor?: homestayRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homestayRooms.
     */
    distinct?: HomestayRoomScalarFieldEnum | HomestayRoomScalarFieldEnum[]
  }

  /**
   * homestayRoom findFirstOrThrow
   */
  export type homestayRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * Filter, which homestayRoom to fetch.
     */
    where?: homestayRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayRooms to fetch.
     */
    orderBy?: homestayRoomOrderByWithRelationInput | homestayRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homestayRooms.
     */
    cursor?: homestayRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homestayRooms.
     */
    distinct?: HomestayRoomScalarFieldEnum | HomestayRoomScalarFieldEnum[]
  }

  /**
   * homestayRoom findMany
   */
  export type homestayRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * Filter, which homestayRooms to fetch.
     */
    where?: homestayRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homestayRooms to fetch.
     */
    orderBy?: homestayRoomOrderByWithRelationInput | homestayRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing homestayRooms.
     */
    cursor?: homestayRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homestayRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homestayRooms.
     */
    skip?: number
    distinct?: HomestayRoomScalarFieldEnum | HomestayRoomScalarFieldEnum[]
  }

  /**
   * homestayRoom create
   */
  export type homestayRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a homestayRoom.
     */
    data: XOR<homestayRoomCreateInput, homestayRoomUncheckedCreateInput>
  }

  /**
   * homestayRoom createMany
   */
  export type homestayRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many homestayRooms.
     */
    data: homestayRoomCreateManyInput | homestayRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * homestayRoom createManyAndReturn
   */
  export type homestayRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * The data used to create many homestayRooms.
     */
    data: homestayRoomCreateManyInput | homestayRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * homestayRoom update
   */
  export type homestayRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a homestayRoom.
     */
    data: XOR<homestayRoomUpdateInput, homestayRoomUncheckedUpdateInput>
    /**
     * Choose, which homestayRoom to update.
     */
    where: homestayRoomWhereUniqueInput
  }

  /**
   * homestayRoom updateMany
   */
  export type homestayRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update homestayRooms.
     */
    data: XOR<homestayRoomUpdateManyMutationInput, homestayRoomUncheckedUpdateManyInput>
    /**
     * Filter which homestayRooms to update
     */
    where?: homestayRoomWhereInput
    /**
     * Limit how many homestayRooms to update.
     */
    limit?: number
  }

  /**
   * homestayRoom updateManyAndReturn
   */
  export type homestayRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * The data used to update homestayRooms.
     */
    data: XOR<homestayRoomUpdateManyMutationInput, homestayRoomUncheckedUpdateManyInput>
    /**
     * Filter which homestayRooms to update
     */
    where?: homestayRoomWhereInput
    /**
     * Limit how many homestayRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * homestayRoom upsert
   */
  export type homestayRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the homestayRoom to update in case it exists.
     */
    where: homestayRoomWhereUniqueInput
    /**
     * In case the homestayRoom found by the `where` argument doesn't exist, create a new homestayRoom with this data.
     */
    create: XOR<homestayRoomCreateInput, homestayRoomUncheckedCreateInput>
    /**
     * In case the homestayRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<homestayRoomUpdateInput, homestayRoomUncheckedUpdateInput>
  }

  /**
   * homestayRoom delete
   */
  export type homestayRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    /**
     * Filter which homestayRoom to delete.
     */
    where: homestayRoomWhereUniqueInput
  }

  /**
   * homestayRoom deleteMany
   */
  export type homestayRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homestayRooms to delete
     */
    where?: homestayRoomWhereInput
    /**
     * Limit how many homestayRooms to delete.
     */
    limit?: number
  }

  /**
   * homestayRoom.booking
   */
  export type homestayRoom$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * homestayRoom.relation_feature_room
   */
  export type homestayRoom$relation_feature_roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    where?: relation_feature_roomWhereInput
    orderBy?: relation_feature_roomOrderByWithRelationInput | relation_feature_roomOrderByWithRelationInput[]
    cursor?: relation_feature_roomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Relation_feature_roomScalarFieldEnum | Relation_feature_roomScalarFieldEnum[]
  }

  /**
   * homestayRoom.reviews
   */
  export type homestayRoom$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * homestayRoom without action
   */
  export type homestayRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
  }


  /**
   * Model landing_page_user
   */

  export type AggregateLanding_page_user = {
    _count: Landing_page_userCountAggregateOutputType | null
    _avg: Landing_page_userAvgAggregateOutputType | null
    _sum: Landing_page_userSumAggregateOutputType | null
    _min: Landing_page_userMinAggregateOutputType | null
    _max: Landing_page_userMaxAggregateOutputType | null
  }

  export type Landing_page_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Landing_page_userSumAggregateOutputType = {
    id: number | null
  }

  export type Landing_page_userMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    last_name: string | null
    passport: string | null
    phone_number: string | null
    type: $Enums.user_type | null
    country: string | null
    address: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Landing_page_userMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    last_name: string | null
    passport: string | null
    phone_number: string | null
    type: $Enums.user_type | null
    country: string | null
    address: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Landing_page_userCountAggregateOutputType = {
    id: number
    email: number
    name: number
    last_name: number
    passport: number
    phone_number: number
    type: number
    country: number
    address: number
    is_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Landing_page_userAvgAggregateInputType = {
    id?: true
  }

  export type Landing_page_userSumAggregateInputType = {
    id?: true
  }

  export type Landing_page_userMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    last_name?: true
    passport?: true
    phone_number?: true
    type?: true
    country?: true
    address?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type Landing_page_userMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    last_name?: true
    passport?: true
    phone_number?: true
    type?: true
    country?: true
    address?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type Landing_page_userCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    last_name?: true
    passport?: true
    phone_number?: true
    type?: true
    country?: true
    address?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Landing_page_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which landing_page_user to aggregate.
     */
    where?: landing_page_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landing_page_users to fetch.
     */
    orderBy?: landing_page_userOrderByWithRelationInput | landing_page_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: landing_page_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landing_page_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landing_page_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned landing_page_users
    **/
    _count?: true | Landing_page_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Landing_page_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Landing_page_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Landing_page_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Landing_page_userMaxAggregateInputType
  }

  export type GetLanding_page_userAggregateType<T extends Landing_page_userAggregateArgs> = {
        [P in keyof T & keyof AggregateLanding_page_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanding_page_user[P]>
      : GetScalarType<T[P], AggregateLanding_page_user[P]>
  }




  export type landing_page_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: landing_page_userWhereInput
    orderBy?: landing_page_userOrderByWithAggregationInput | landing_page_userOrderByWithAggregationInput[]
    by: Landing_page_userScalarFieldEnum[] | Landing_page_userScalarFieldEnum
    having?: landing_page_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Landing_page_userCountAggregateInputType | true
    _avg?: Landing_page_userAvgAggregateInputType
    _sum?: Landing_page_userSumAggregateInputType
    _min?: Landing_page_userMinAggregateInputType
    _max?: Landing_page_userMaxAggregateInputType
  }

  export type Landing_page_userGroupByOutputType = {
    id: number
    email: string
    name: string
    last_name: string
    passport: string | null
    phone_number: string
    type: $Enums.user_type
    country: string | null
    address: string | null
    is_verified: boolean
    created_at: Date
    updated_at: Date
    _count: Landing_page_userCountAggregateOutputType | null
    _avg: Landing_page_userAvgAggregateOutputType | null
    _sum: Landing_page_userSumAggregateOutputType | null
    _min: Landing_page_userMinAggregateOutputType | null
    _max: Landing_page_userMaxAggregateOutputType | null
  }

  type GetLanding_page_userGroupByPayload<T extends landing_page_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Landing_page_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Landing_page_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Landing_page_userGroupByOutputType[P]>
            : GetScalarType<T[P], Landing_page_userGroupByOutputType[P]>
        }
      >
    >


  export type landing_page_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    last_name?: boolean
    passport?: boolean
    phone_number?: boolean
    type?: boolean
    country?: boolean
    address?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | landing_page_user$bookingArgs<ExtArgs>
    notifications?: boolean | landing_page_user$notificationsArgs<ExtArgs>
    reviews?: boolean | landing_page_user$reviewsArgs<ExtArgs>
    _count?: boolean | Landing_page_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landing_page_user"]>

  export type landing_page_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    last_name?: boolean
    passport?: boolean
    phone_number?: boolean
    type?: boolean
    country?: boolean
    address?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["landing_page_user"]>

  export type landing_page_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    last_name?: boolean
    passport?: boolean
    phone_number?: boolean
    type?: boolean
    country?: boolean
    address?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["landing_page_user"]>

  export type landing_page_userSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    last_name?: boolean
    passport?: boolean
    phone_number?: boolean
    type?: boolean
    country?: boolean
    address?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type landing_page_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "last_name" | "passport" | "phone_number" | "type" | "country" | "address" | "is_verified" | "created_at" | "updated_at", ExtArgs["result"]["landing_page_user"]>
  export type landing_page_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | landing_page_user$bookingArgs<ExtArgs>
    notifications?: boolean | landing_page_user$notificationsArgs<ExtArgs>
    reviews?: boolean | landing_page_user$reviewsArgs<ExtArgs>
    _count?: boolean | Landing_page_userCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type landing_page_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type landing_page_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $landing_page_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "landing_page_user"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      last_name: string
      passport: string | null
      phone_number: string
      type: $Enums.user_type
      country: string | null
      address: string | null
      is_verified: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["landing_page_user"]>
    composites: {}
  }

  type landing_page_userGetPayload<S extends boolean | null | undefined | landing_page_userDefaultArgs> = $Result.GetResult<Prisma.$landing_page_userPayload, S>

  type landing_page_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<landing_page_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Landing_page_userCountAggregateInputType | true
    }

  export interface landing_page_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['landing_page_user'], meta: { name: 'landing_page_user' } }
    /**
     * Find zero or one Landing_page_user that matches the filter.
     * @param {landing_page_userFindUniqueArgs} args - Arguments to find a Landing_page_user
     * @example
     * // Get one Landing_page_user
     * const landing_page_user = await prisma.landing_page_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends landing_page_userFindUniqueArgs>(args: SelectSubset<T, landing_page_userFindUniqueArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Landing_page_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {landing_page_userFindUniqueOrThrowArgs} args - Arguments to find a Landing_page_user
     * @example
     * // Get one Landing_page_user
     * const landing_page_user = await prisma.landing_page_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends landing_page_userFindUniqueOrThrowArgs>(args: SelectSubset<T, landing_page_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landing_page_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landing_page_userFindFirstArgs} args - Arguments to find a Landing_page_user
     * @example
     * // Get one Landing_page_user
     * const landing_page_user = await prisma.landing_page_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends landing_page_userFindFirstArgs>(args?: SelectSubset<T, landing_page_userFindFirstArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landing_page_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landing_page_userFindFirstOrThrowArgs} args - Arguments to find a Landing_page_user
     * @example
     * // Get one Landing_page_user
     * const landing_page_user = await prisma.landing_page_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends landing_page_userFindFirstOrThrowArgs>(args?: SelectSubset<T, landing_page_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Landing_page_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landing_page_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landing_page_users
     * const landing_page_users = await prisma.landing_page_user.findMany()
     * 
     * // Get first 10 Landing_page_users
     * const landing_page_users = await prisma.landing_page_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landing_page_userWithIdOnly = await prisma.landing_page_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends landing_page_userFindManyArgs>(args?: SelectSubset<T, landing_page_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Landing_page_user.
     * @param {landing_page_userCreateArgs} args - Arguments to create a Landing_page_user.
     * @example
     * // Create one Landing_page_user
     * const Landing_page_user = await prisma.landing_page_user.create({
     *   data: {
     *     // ... data to create a Landing_page_user
     *   }
     * })
     * 
     */
    create<T extends landing_page_userCreateArgs>(args: SelectSubset<T, landing_page_userCreateArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Landing_page_users.
     * @param {landing_page_userCreateManyArgs} args - Arguments to create many Landing_page_users.
     * @example
     * // Create many Landing_page_users
     * const landing_page_user = await prisma.landing_page_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends landing_page_userCreateManyArgs>(args?: SelectSubset<T, landing_page_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Landing_page_users and returns the data saved in the database.
     * @param {landing_page_userCreateManyAndReturnArgs} args - Arguments to create many Landing_page_users.
     * @example
     * // Create many Landing_page_users
     * const landing_page_user = await prisma.landing_page_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Landing_page_users and only return the `id`
     * const landing_page_userWithIdOnly = await prisma.landing_page_user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends landing_page_userCreateManyAndReturnArgs>(args?: SelectSubset<T, landing_page_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Landing_page_user.
     * @param {landing_page_userDeleteArgs} args - Arguments to delete one Landing_page_user.
     * @example
     * // Delete one Landing_page_user
     * const Landing_page_user = await prisma.landing_page_user.delete({
     *   where: {
     *     // ... filter to delete one Landing_page_user
     *   }
     * })
     * 
     */
    delete<T extends landing_page_userDeleteArgs>(args: SelectSubset<T, landing_page_userDeleteArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Landing_page_user.
     * @param {landing_page_userUpdateArgs} args - Arguments to update one Landing_page_user.
     * @example
     * // Update one Landing_page_user
     * const landing_page_user = await prisma.landing_page_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends landing_page_userUpdateArgs>(args: SelectSubset<T, landing_page_userUpdateArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Landing_page_users.
     * @param {landing_page_userDeleteManyArgs} args - Arguments to filter Landing_page_users to delete.
     * @example
     * // Delete a few Landing_page_users
     * const { count } = await prisma.landing_page_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends landing_page_userDeleteManyArgs>(args?: SelectSubset<T, landing_page_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landing_page_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landing_page_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landing_page_users
     * const landing_page_user = await prisma.landing_page_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends landing_page_userUpdateManyArgs>(args: SelectSubset<T, landing_page_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landing_page_users and returns the data updated in the database.
     * @param {landing_page_userUpdateManyAndReturnArgs} args - Arguments to update many Landing_page_users.
     * @example
     * // Update many Landing_page_users
     * const landing_page_user = await prisma.landing_page_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Landing_page_users and only return the `id`
     * const landing_page_userWithIdOnly = await prisma.landing_page_user.updateManyAndReturn({
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
    updateManyAndReturn<T extends landing_page_userUpdateManyAndReturnArgs>(args: SelectSubset<T, landing_page_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Landing_page_user.
     * @param {landing_page_userUpsertArgs} args - Arguments to update or create a Landing_page_user.
     * @example
     * // Update or create a Landing_page_user
     * const landing_page_user = await prisma.landing_page_user.upsert({
     *   create: {
     *     // ... data to create a Landing_page_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landing_page_user we want to update
     *   }
     * })
     */
    upsert<T extends landing_page_userUpsertArgs>(args: SelectSubset<T, landing_page_userUpsertArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Landing_page_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landing_page_userCountArgs} args - Arguments to filter Landing_page_users to count.
     * @example
     * // Count the number of Landing_page_users
     * const count = await prisma.landing_page_user.count({
     *   where: {
     *     // ... the filter for the Landing_page_users we want to count
     *   }
     * })
    **/
    count<T extends landing_page_userCountArgs>(
      args?: Subset<T, landing_page_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Landing_page_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landing_page_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Landing_page_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Landing_page_userAggregateArgs>(args: Subset<T, Landing_page_userAggregateArgs>): Prisma.PrismaPromise<GetLanding_page_userAggregateType<T>>

    /**
     * Group by Landing_page_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landing_page_userGroupByArgs} args - Group by arguments.
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
      T extends landing_page_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: landing_page_userGroupByArgs['orderBy'] }
        : { orderBy?: landing_page_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, landing_page_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanding_page_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the landing_page_user model
   */
  readonly fields: landing_page_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for landing_page_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__landing_page_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends landing_page_user$bookingArgs<ExtArgs> = {}>(args?: Subset<T, landing_page_user$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends landing_page_user$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, landing_page_user$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends landing_page_user$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, landing_page_user$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the landing_page_user model
   */
  interface landing_page_userFieldRefs {
    readonly id: FieldRef<"landing_page_user", 'Int'>
    readonly email: FieldRef<"landing_page_user", 'String'>
    readonly name: FieldRef<"landing_page_user", 'String'>
    readonly last_name: FieldRef<"landing_page_user", 'String'>
    readonly passport: FieldRef<"landing_page_user", 'String'>
    readonly phone_number: FieldRef<"landing_page_user", 'String'>
    readonly type: FieldRef<"landing_page_user", 'user_type'>
    readonly country: FieldRef<"landing_page_user", 'String'>
    readonly address: FieldRef<"landing_page_user", 'String'>
    readonly is_verified: FieldRef<"landing_page_user", 'Boolean'>
    readonly created_at: FieldRef<"landing_page_user", 'DateTime'>
    readonly updated_at: FieldRef<"landing_page_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * landing_page_user findUnique
   */
  export type landing_page_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * Filter, which landing_page_user to fetch.
     */
    where: landing_page_userWhereUniqueInput
  }

  /**
   * landing_page_user findUniqueOrThrow
   */
  export type landing_page_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * Filter, which landing_page_user to fetch.
     */
    where: landing_page_userWhereUniqueInput
  }

  /**
   * landing_page_user findFirst
   */
  export type landing_page_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * Filter, which landing_page_user to fetch.
     */
    where?: landing_page_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landing_page_users to fetch.
     */
    orderBy?: landing_page_userOrderByWithRelationInput | landing_page_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for landing_page_users.
     */
    cursor?: landing_page_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landing_page_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landing_page_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of landing_page_users.
     */
    distinct?: Landing_page_userScalarFieldEnum | Landing_page_userScalarFieldEnum[]
  }

  /**
   * landing_page_user findFirstOrThrow
   */
  export type landing_page_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * Filter, which landing_page_user to fetch.
     */
    where?: landing_page_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landing_page_users to fetch.
     */
    orderBy?: landing_page_userOrderByWithRelationInput | landing_page_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for landing_page_users.
     */
    cursor?: landing_page_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landing_page_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landing_page_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of landing_page_users.
     */
    distinct?: Landing_page_userScalarFieldEnum | Landing_page_userScalarFieldEnum[]
  }

  /**
   * landing_page_user findMany
   */
  export type landing_page_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * Filter, which landing_page_users to fetch.
     */
    where?: landing_page_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landing_page_users to fetch.
     */
    orderBy?: landing_page_userOrderByWithRelationInput | landing_page_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing landing_page_users.
     */
    cursor?: landing_page_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landing_page_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landing_page_users.
     */
    skip?: number
    distinct?: Landing_page_userScalarFieldEnum | Landing_page_userScalarFieldEnum[]
  }

  /**
   * landing_page_user create
   */
  export type landing_page_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * The data needed to create a landing_page_user.
     */
    data: XOR<landing_page_userCreateInput, landing_page_userUncheckedCreateInput>
  }

  /**
   * landing_page_user createMany
   */
  export type landing_page_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many landing_page_users.
     */
    data: landing_page_userCreateManyInput | landing_page_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * landing_page_user createManyAndReturn
   */
  export type landing_page_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * The data used to create many landing_page_users.
     */
    data: landing_page_userCreateManyInput | landing_page_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * landing_page_user update
   */
  export type landing_page_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * The data needed to update a landing_page_user.
     */
    data: XOR<landing_page_userUpdateInput, landing_page_userUncheckedUpdateInput>
    /**
     * Choose, which landing_page_user to update.
     */
    where: landing_page_userWhereUniqueInput
  }

  /**
   * landing_page_user updateMany
   */
  export type landing_page_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update landing_page_users.
     */
    data: XOR<landing_page_userUpdateManyMutationInput, landing_page_userUncheckedUpdateManyInput>
    /**
     * Filter which landing_page_users to update
     */
    where?: landing_page_userWhereInput
    /**
     * Limit how many landing_page_users to update.
     */
    limit?: number
  }

  /**
   * landing_page_user updateManyAndReturn
   */
  export type landing_page_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * The data used to update landing_page_users.
     */
    data: XOR<landing_page_userUpdateManyMutationInput, landing_page_userUncheckedUpdateManyInput>
    /**
     * Filter which landing_page_users to update
     */
    where?: landing_page_userWhereInput
    /**
     * Limit how many landing_page_users to update.
     */
    limit?: number
  }

  /**
   * landing_page_user upsert
   */
  export type landing_page_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * The filter to search for the landing_page_user to update in case it exists.
     */
    where: landing_page_userWhereUniqueInput
    /**
     * In case the landing_page_user found by the `where` argument doesn't exist, create a new landing_page_user with this data.
     */
    create: XOR<landing_page_userCreateInput, landing_page_userUncheckedCreateInput>
    /**
     * In case the landing_page_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<landing_page_userUpdateInput, landing_page_userUncheckedUpdateInput>
  }

  /**
   * landing_page_user delete
   */
  export type landing_page_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    /**
     * Filter which landing_page_user to delete.
     */
    where: landing_page_userWhereUniqueInput
  }

  /**
   * landing_page_user deleteMany
   */
  export type landing_page_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which landing_page_users to delete
     */
    where?: landing_page_userWhereInput
    /**
     * Limit how many landing_page_users to delete.
     */
    limit?: number
  }

  /**
   * landing_page_user.booking
   */
  export type landing_page_user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * landing_page_user.notifications
   */
  export type landing_page_user$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * landing_page_user.reviews
   */
  export type landing_page_user$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * landing_page_user without action
   */
  export type landing_page_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    admin_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    admin_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    admin_id: number | null
    title: string | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    admin_id: number | null
    title: string | null
    message: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    admin_id: number
    title: number
    message: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    admin_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
    admin_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    admin_id?: true
    title?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    admin_id?: true
    title?: true
    message?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    admin_id?: true
    title?: true
    message?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number | null
    admin_id: number | null
    title: string
    message: string
    is_read: boolean
    created_at: Date
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    admin_id?: boolean
    title?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
    admin_users?: boolean | notifications$admin_usersArgs<ExtArgs>
    landing_page_user?: boolean | notifications$landing_page_userArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    admin_id?: boolean
    title?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
    admin_users?: boolean | notifications$admin_usersArgs<ExtArgs>
    landing_page_user?: boolean | notifications$landing_page_userArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    admin_id?: boolean
    title?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
    admin_users?: boolean | notifications$admin_usersArgs<ExtArgs>
    landing_page_user?: boolean | notifications$landing_page_userArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    admin_id?: boolean
    title?: boolean
    message?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "admin_id" | "title" | "message" | "is_read" | "created_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_users?: boolean | notifications$admin_usersArgs<ExtArgs>
    landing_page_user?: boolean | notifications$landing_page_userArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_users?: boolean | notifications$admin_usersArgs<ExtArgs>
    landing_page_user?: boolean | notifications$landing_page_userArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin_users?: boolean | notifications$admin_usersArgs<ExtArgs>
    landing_page_user?: boolean | notifications$landing_page_userArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      admin_users: Prisma.$admin_usersPayload<ExtArgs> | null
      landing_page_user: Prisma.$landing_page_userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      admin_id: number | null
      title: string
      message: string
      is_read: boolean
      created_at: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin_users<T extends notifications$admin_usersArgs<ExtArgs> = {}>(args?: Subset<T, notifications$admin_usersArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    landing_page_user<T extends notifications$landing_page_userArgs<ExtArgs> = {}>(args?: Subset<T, notifications$landing_page_userArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly user_id: FieldRef<"notifications", 'Int'>
    readonly admin_id: FieldRef<"notifications", 'Int'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly is_read: FieldRef<"notifications", 'Boolean'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications.admin_users
   */
  export type notifications$admin_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: admin_usersInclude<ExtArgs> | null
    where?: admin_usersWhereInput
  }

  /**
   * notifications.landing_page_user
   */
  export type notifications$landing_page_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landing_page_user
     */
    select?: landing_page_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the landing_page_user
     */
    omit?: landing_page_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landing_page_userInclude<ExtArgs> | null
    where?: landing_page_userWhereInput
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
    currency: string | null
    payment_method: string | null
    payment_status: string | null
    transaction_id: string | null
    payment_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    booking_id: number | null
    amount: Decimal | null
    currency: string | null
    payment_method: string | null
    payment_status: string | null
    transaction_id: string | null
    payment_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    booking_id: number
    amount: number
    currency: number
    payment_method: number
    payment_status: number
    transaction_id: number
    payment_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
    currency?: true
    payment_method?: true
    payment_status?: true
    transaction_id?: true
    payment_date?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
    currency?: true
    payment_method?: true
    payment_status?: true
    transaction_id?: true
    payment_date?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    booking_id?: true
    amount?: true
    currency?: true
    payment_method?: true
    payment_status?: true
    transaction_id?: true
    payment_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    booking_id: number
    amount: Decimal
    currency: string
    payment_method: string
    payment_status: string
    transaction_id: string | null
    payment_date: Date
    created_at: Date
    updated_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_id?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_id?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_id?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    booking_id?: boolean
    amount?: boolean
    currency?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_id?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "amount" | "currency" | "payment_method" | "payment_status" | "transaction_id" | "payment_date" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      booking_id: number
      amount: Prisma.Decimal
      currency: string
      payment_method: string
      payment_status: string
      transaction_id: string | null
      payment_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends bookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingDefaultArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly booking_id: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly currency: FieldRef<"payments", 'String'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly payment_status: FieldRef<"payments", 'String'>
    readonly transaction_id: FieldRef<"payments", 'String'>
    readonly payment_date: FieldRef<"payments", 'DateTime'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
    readonly updated_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model relation_feature_room
   */

  export type AggregateRelation_feature_room = {
    _count: Relation_feature_roomCountAggregateOutputType | null
    _avg: Relation_feature_roomAvgAggregateOutputType | null
    _sum: Relation_feature_roomSumAggregateOutputType | null
    _min: Relation_feature_roomMinAggregateOutputType | null
    _max: Relation_feature_roomMaxAggregateOutputType | null
  }

  export type Relation_feature_roomAvgAggregateOutputType = {
    id: number | null
    room_feature_id: number | null
    homestay_id: number | null
  }

  export type Relation_feature_roomSumAggregateOutputType = {
    id: number | null
    room_feature_id: number | null
    homestay_id: number | null
  }

  export type Relation_feature_roomMinAggregateOutputType = {
    id: number | null
    room_feature_id: number | null
    homestay_id: number | null
    is_available: boolean | null
    created_at: Date | null
  }

  export type Relation_feature_roomMaxAggregateOutputType = {
    id: number | null
    room_feature_id: number | null
    homestay_id: number | null
    is_available: boolean | null
    created_at: Date | null
  }

  export type Relation_feature_roomCountAggregateOutputType = {
    id: number
    room_feature_id: number
    homestay_id: number
    is_available: number
    created_at: number
    _all: number
  }


  export type Relation_feature_roomAvgAggregateInputType = {
    id?: true
    room_feature_id?: true
    homestay_id?: true
  }

  export type Relation_feature_roomSumAggregateInputType = {
    id?: true
    room_feature_id?: true
    homestay_id?: true
  }

  export type Relation_feature_roomMinAggregateInputType = {
    id?: true
    room_feature_id?: true
    homestay_id?: true
    is_available?: true
    created_at?: true
  }

  export type Relation_feature_roomMaxAggregateInputType = {
    id?: true
    room_feature_id?: true
    homestay_id?: true
    is_available?: true
    created_at?: true
  }

  export type Relation_feature_roomCountAggregateInputType = {
    id?: true
    room_feature_id?: true
    homestay_id?: true
    is_available?: true
    created_at?: true
    _all?: true
  }

  export type Relation_feature_roomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which relation_feature_room to aggregate.
     */
    where?: relation_feature_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_feature_rooms to fetch.
     */
    orderBy?: relation_feature_roomOrderByWithRelationInput | relation_feature_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: relation_feature_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_feature_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_feature_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned relation_feature_rooms
    **/
    _count?: true | Relation_feature_roomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Relation_feature_roomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Relation_feature_roomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Relation_feature_roomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Relation_feature_roomMaxAggregateInputType
  }

  export type GetRelation_feature_roomAggregateType<T extends Relation_feature_roomAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation_feature_room]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation_feature_room[P]>
      : GetScalarType<T[P], AggregateRelation_feature_room[P]>
  }




  export type relation_feature_roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: relation_feature_roomWhereInput
    orderBy?: relation_feature_roomOrderByWithAggregationInput | relation_feature_roomOrderByWithAggregationInput[]
    by: Relation_feature_roomScalarFieldEnum[] | Relation_feature_roomScalarFieldEnum
    having?: relation_feature_roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Relation_feature_roomCountAggregateInputType | true
    _avg?: Relation_feature_roomAvgAggregateInputType
    _sum?: Relation_feature_roomSumAggregateInputType
    _min?: Relation_feature_roomMinAggregateInputType
    _max?: Relation_feature_roomMaxAggregateInputType
  }

  export type Relation_feature_roomGroupByOutputType = {
    id: number
    room_feature_id: number
    homestay_id: number
    is_available: boolean
    created_at: Date
    _count: Relation_feature_roomCountAggregateOutputType | null
    _avg: Relation_feature_roomAvgAggregateOutputType | null
    _sum: Relation_feature_roomSumAggregateOutputType | null
    _min: Relation_feature_roomMinAggregateOutputType | null
    _max: Relation_feature_roomMaxAggregateOutputType | null
  }

  type GetRelation_feature_roomGroupByPayload<T extends relation_feature_roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Relation_feature_roomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Relation_feature_roomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Relation_feature_roomGroupByOutputType[P]>
            : GetScalarType<T[P], Relation_feature_roomGroupByOutputType[P]>
        }
      >
    >


  export type relation_feature_roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_feature_id?: boolean
    homestay_id?: boolean
    is_available?: boolean
    created_at?: boolean
    room_features?: boolean | room_featuresDefaultArgs<ExtArgs>
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation_feature_room"]>

  export type relation_feature_roomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_feature_id?: boolean
    homestay_id?: boolean
    is_available?: boolean
    created_at?: boolean
    room_features?: boolean | room_featuresDefaultArgs<ExtArgs>
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation_feature_room"]>

  export type relation_feature_roomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_feature_id?: boolean
    homestay_id?: boolean
    is_available?: boolean
    created_at?: boolean
    room_features?: boolean | room_featuresDefaultArgs<ExtArgs>
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation_feature_room"]>

  export type relation_feature_roomSelectScalar = {
    id?: boolean
    room_feature_id?: boolean
    homestay_id?: boolean
    is_available?: boolean
    created_at?: boolean
  }

  export type relation_feature_roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_feature_id" | "homestay_id" | "is_available" | "created_at", ExtArgs["result"]["relation_feature_room"]>
  export type relation_feature_roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_features?: boolean | room_featuresDefaultArgs<ExtArgs>
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
  }
  export type relation_feature_roomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_features?: boolean | room_featuresDefaultArgs<ExtArgs>
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
  }
  export type relation_feature_roomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_features?: boolean | room_featuresDefaultArgs<ExtArgs>
    homestayRoom?: boolean | homestayRoomDefaultArgs<ExtArgs>
  }

  export type $relation_feature_roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "relation_feature_room"
    objects: {
      room_features: Prisma.$room_featuresPayload<ExtArgs>
      homestayRoom: Prisma.$homestayRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      room_feature_id: number
      homestay_id: number
      is_available: boolean
      created_at: Date
    }, ExtArgs["result"]["relation_feature_room"]>
    composites: {}
  }

  type relation_feature_roomGetPayload<S extends boolean | null | undefined | relation_feature_roomDefaultArgs> = $Result.GetResult<Prisma.$relation_feature_roomPayload, S>

  type relation_feature_roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<relation_feature_roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Relation_feature_roomCountAggregateInputType | true
    }

  export interface relation_feature_roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['relation_feature_room'], meta: { name: 'relation_feature_room' } }
    /**
     * Find zero or one Relation_feature_room that matches the filter.
     * @param {relation_feature_roomFindUniqueArgs} args - Arguments to find a Relation_feature_room
     * @example
     * // Get one Relation_feature_room
     * const relation_feature_room = await prisma.relation_feature_room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends relation_feature_roomFindUniqueArgs>(args: SelectSubset<T, relation_feature_roomFindUniqueArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relation_feature_room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {relation_feature_roomFindUniqueOrThrowArgs} args - Arguments to find a Relation_feature_room
     * @example
     * // Get one Relation_feature_room
     * const relation_feature_room = await prisma.relation_feature_room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends relation_feature_roomFindUniqueOrThrowArgs>(args: SelectSubset<T, relation_feature_roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation_feature_room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_feature_roomFindFirstArgs} args - Arguments to find a Relation_feature_room
     * @example
     * // Get one Relation_feature_room
     * const relation_feature_room = await prisma.relation_feature_room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends relation_feature_roomFindFirstArgs>(args?: SelectSubset<T, relation_feature_roomFindFirstArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation_feature_room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_feature_roomFindFirstOrThrowArgs} args - Arguments to find a Relation_feature_room
     * @example
     * // Get one Relation_feature_room
     * const relation_feature_room = await prisma.relation_feature_room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends relation_feature_roomFindFirstOrThrowArgs>(args?: SelectSubset<T, relation_feature_roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relation_feature_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_feature_roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relation_feature_rooms
     * const relation_feature_rooms = await prisma.relation_feature_room.findMany()
     * 
     * // Get first 10 Relation_feature_rooms
     * const relation_feature_rooms = await prisma.relation_feature_room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relation_feature_roomWithIdOnly = await prisma.relation_feature_room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends relation_feature_roomFindManyArgs>(args?: SelectSubset<T, relation_feature_roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relation_feature_room.
     * @param {relation_feature_roomCreateArgs} args - Arguments to create a Relation_feature_room.
     * @example
     * // Create one Relation_feature_room
     * const Relation_feature_room = await prisma.relation_feature_room.create({
     *   data: {
     *     // ... data to create a Relation_feature_room
     *   }
     * })
     * 
     */
    create<T extends relation_feature_roomCreateArgs>(args: SelectSubset<T, relation_feature_roomCreateArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relation_feature_rooms.
     * @param {relation_feature_roomCreateManyArgs} args - Arguments to create many Relation_feature_rooms.
     * @example
     * // Create many Relation_feature_rooms
     * const relation_feature_room = await prisma.relation_feature_room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends relation_feature_roomCreateManyArgs>(args?: SelectSubset<T, relation_feature_roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relation_feature_rooms and returns the data saved in the database.
     * @param {relation_feature_roomCreateManyAndReturnArgs} args - Arguments to create many Relation_feature_rooms.
     * @example
     * // Create many Relation_feature_rooms
     * const relation_feature_room = await prisma.relation_feature_room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relation_feature_rooms and only return the `id`
     * const relation_feature_roomWithIdOnly = await prisma.relation_feature_room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends relation_feature_roomCreateManyAndReturnArgs>(args?: SelectSubset<T, relation_feature_roomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relation_feature_room.
     * @param {relation_feature_roomDeleteArgs} args - Arguments to delete one Relation_feature_room.
     * @example
     * // Delete one Relation_feature_room
     * const Relation_feature_room = await prisma.relation_feature_room.delete({
     *   where: {
     *     // ... filter to delete one Relation_feature_room
     *   }
     * })
     * 
     */
    delete<T extends relation_feature_roomDeleteArgs>(args: SelectSubset<T, relation_feature_roomDeleteArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relation_feature_room.
     * @param {relation_feature_roomUpdateArgs} args - Arguments to update one Relation_feature_room.
     * @example
     * // Update one Relation_feature_room
     * const relation_feature_room = await prisma.relation_feature_room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends relation_feature_roomUpdateArgs>(args: SelectSubset<T, relation_feature_roomUpdateArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relation_feature_rooms.
     * @param {relation_feature_roomDeleteManyArgs} args - Arguments to filter Relation_feature_rooms to delete.
     * @example
     * // Delete a few Relation_feature_rooms
     * const { count } = await prisma.relation_feature_room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends relation_feature_roomDeleteManyArgs>(args?: SelectSubset<T, relation_feature_roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relation_feature_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_feature_roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relation_feature_rooms
     * const relation_feature_room = await prisma.relation_feature_room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends relation_feature_roomUpdateManyArgs>(args: SelectSubset<T, relation_feature_roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relation_feature_rooms and returns the data updated in the database.
     * @param {relation_feature_roomUpdateManyAndReturnArgs} args - Arguments to update many Relation_feature_rooms.
     * @example
     * // Update many Relation_feature_rooms
     * const relation_feature_room = await prisma.relation_feature_room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relation_feature_rooms and only return the `id`
     * const relation_feature_roomWithIdOnly = await prisma.relation_feature_room.updateManyAndReturn({
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
    updateManyAndReturn<T extends relation_feature_roomUpdateManyAndReturnArgs>(args: SelectSubset<T, relation_feature_roomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relation_feature_room.
     * @param {relation_feature_roomUpsertArgs} args - Arguments to update or create a Relation_feature_room.
     * @example
     * // Update or create a Relation_feature_room
     * const relation_feature_room = await prisma.relation_feature_room.upsert({
     *   create: {
     *     // ... data to create a Relation_feature_room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation_feature_room we want to update
     *   }
     * })
     */
    upsert<T extends relation_feature_roomUpsertArgs>(args: SelectSubset<T, relation_feature_roomUpsertArgs<ExtArgs>>): Prisma__relation_feature_roomClient<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relation_feature_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_feature_roomCountArgs} args - Arguments to filter Relation_feature_rooms to count.
     * @example
     * // Count the number of Relation_feature_rooms
     * const count = await prisma.relation_feature_room.count({
     *   where: {
     *     // ... the filter for the Relation_feature_rooms we want to count
     *   }
     * })
    **/
    count<T extends relation_feature_roomCountArgs>(
      args?: Subset<T, relation_feature_roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Relation_feature_roomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation_feature_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relation_feature_roomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Relation_feature_roomAggregateArgs>(args: Subset<T, Relation_feature_roomAggregateArgs>): Prisma.PrismaPromise<GetRelation_feature_roomAggregateType<T>>

    /**
     * Group by Relation_feature_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_feature_roomGroupByArgs} args - Group by arguments.
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
      T extends relation_feature_roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: relation_feature_roomGroupByArgs['orderBy'] }
        : { orderBy?: relation_feature_roomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, relation_feature_roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelation_feature_roomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the relation_feature_room model
   */
  readonly fields: relation_feature_roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for relation_feature_room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__relation_feature_roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room_features<T extends room_featuresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, room_featuresDefaultArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    homestayRoom<T extends homestayRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, homestayRoomDefaultArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the relation_feature_room model
   */
  interface relation_feature_roomFieldRefs {
    readonly id: FieldRef<"relation_feature_room", 'Int'>
    readonly room_feature_id: FieldRef<"relation_feature_room", 'Int'>
    readonly homestay_id: FieldRef<"relation_feature_room", 'Int'>
    readonly is_available: FieldRef<"relation_feature_room", 'Boolean'>
    readonly created_at: FieldRef<"relation_feature_room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * relation_feature_room findUnique
   */
  export type relation_feature_roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * Filter, which relation_feature_room to fetch.
     */
    where: relation_feature_roomWhereUniqueInput
  }

  /**
   * relation_feature_room findUniqueOrThrow
   */
  export type relation_feature_roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * Filter, which relation_feature_room to fetch.
     */
    where: relation_feature_roomWhereUniqueInput
  }

  /**
   * relation_feature_room findFirst
   */
  export type relation_feature_roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * Filter, which relation_feature_room to fetch.
     */
    where?: relation_feature_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_feature_rooms to fetch.
     */
    orderBy?: relation_feature_roomOrderByWithRelationInput | relation_feature_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relation_feature_rooms.
     */
    cursor?: relation_feature_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_feature_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_feature_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relation_feature_rooms.
     */
    distinct?: Relation_feature_roomScalarFieldEnum | Relation_feature_roomScalarFieldEnum[]
  }

  /**
   * relation_feature_room findFirstOrThrow
   */
  export type relation_feature_roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * Filter, which relation_feature_room to fetch.
     */
    where?: relation_feature_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_feature_rooms to fetch.
     */
    orderBy?: relation_feature_roomOrderByWithRelationInput | relation_feature_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relation_feature_rooms.
     */
    cursor?: relation_feature_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_feature_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_feature_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relation_feature_rooms.
     */
    distinct?: Relation_feature_roomScalarFieldEnum | Relation_feature_roomScalarFieldEnum[]
  }

  /**
   * relation_feature_room findMany
   */
  export type relation_feature_roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * Filter, which relation_feature_rooms to fetch.
     */
    where?: relation_feature_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_feature_rooms to fetch.
     */
    orderBy?: relation_feature_roomOrderByWithRelationInput | relation_feature_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing relation_feature_rooms.
     */
    cursor?: relation_feature_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_feature_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_feature_rooms.
     */
    skip?: number
    distinct?: Relation_feature_roomScalarFieldEnum | Relation_feature_roomScalarFieldEnum[]
  }

  /**
   * relation_feature_room create
   */
  export type relation_feature_roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * The data needed to create a relation_feature_room.
     */
    data: XOR<relation_feature_roomCreateInput, relation_feature_roomUncheckedCreateInput>
  }

  /**
   * relation_feature_room createMany
   */
  export type relation_feature_roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many relation_feature_rooms.
     */
    data: relation_feature_roomCreateManyInput | relation_feature_roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * relation_feature_room createManyAndReturn
   */
  export type relation_feature_roomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * The data used to create many relation_feature_rooms.
     */
    data: relation_feature_roomCreateManyInput | relation_feature_roomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * relation_feature_room update
   */
  export type relation_feature_roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * The data needed to update a relation_feature_room.
     */
    data: XOR<relation_feature_roomUpdateInput, relation_feature_roomUncheckedUpdateInput>
    /**
     * Choose, which relation_feature_room to update.
     */
    where: relation_feature_roomWhereUniqueInput
  }

  /**
   * relation_feature_room updateMany
   */
  export type relation_feature_roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update relation_feature_rooms.
     */
    data: XOR<relation_feature_roomUpdateManyMutationInput, relation_feature_roomUncheckedUpdateManyInput>
    /**
     * Filter which relation_feature_rooms to update
     */
    where?: relation_feature_roomWhereInput
    /**
     * Limit how many relation_feature_rooms to update.
     */
    limit?: number
  }

  /**
   * relation_feature_room updateManyAndReturn
   */
  export type relation_feature_roomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * The data used to update relation_feature_rooms.
     */
    data: XOR<relation_feature_roomUpdateManyMutationInput, relation_feature_roomUncheckedUpdateManyInput>
    /**
     * Filter which relation_feature_rooms to update
     */
    where?: relation_feature_roomWhereInput
    /**
     * Limit how many relation_feature_rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * relation_feature_room upsert
   */
  export type relation_feature_roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * The filter to search for the relation_feature_room to update in case it exists.
     */
    where: relation_feature_roomWhereUniqueInput
    /**
     * In case the relation_feature_room found by the `where` argument doesn't exist, create a new relation_feature_room with this data.
     */
    create: XOR<relation_feature_roomCreateInput, relation_feature_roomUncheckedCreateInput>
    /**
     * In case the relation_feature_room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<relation_feature_roomUpdateInput, relation_feature_roomUncheckedUpdateInput>
  }

  /**
   * relation_feature_room delete
   */
  export type relation_feature_roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    /**
     * Filter which relation_feature_room to delete.
     */
    where: relation_feature_roomWhereUniqueInput
  }

  /**
   * relation_feature_room deleteMany
   */
  export type relation_feature_roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which relation_feature_rooms to delete
     */
    where?: relation_feature_roomWhereInput
    /**
     * Limit how many relation_feature_rooms to delete.
     */
    limit?: number
  }

  /**
   * relation_feature_room without action
   */
  export type relation_feature_roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    homestay_id: number | null
    room_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    homestay_id: number | null
    room_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    homestay_id: number | null
    room_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    homestay_id: number | null
    room_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    user_id: number
    homestay_id: number
    room_id: number
    rating: number
    comment: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    user_id?: true
    homestay_id?: true
    room_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    user_id?: true
    homestay_id?: true
    room_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    user_id?: true
    homestay_id?: true
    room_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    user_id?: true
    homestay_id?: true
    room_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    user_id?: true
    homestay_id?: true
    room_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    user_id: number
    homestay_id: number
    room_id: number | null
    rating: number
    comment: string | null
    created_at: Date
    updated_at: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    homestay_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    homestayRoom?: boolean | reviews$homestayRoomArgs<ExtArgs>
    landing_page_user?: boolean | landing_page_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    homestay_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    homestayRoom?: boolean | reviews$homestayRoomArgs<ExtArgs>
    landing_page_user?: boolean | landing_page_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    homestay_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    homestayRoom?: boolean | reviews$homestayRoomArgs<ExtArgs>
    landing_page_user?: boolean | landing_page_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    id?: boolean
    user_id?: boolean
    homestay_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "homestay_id" | "room_id" | "rating" | "comment" | "created_at" | "updated_at", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    homestayRoom?: boolean | reviews$homestayRoomArgs<ExtArgs>
    landing_page_user?: boolean | landing_page_userDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    homestayRoom?: boolean | reviews$homestayRoomArgs<ExtArgs>
    landing_page_user?: boolean | landing_page_userDefaultArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homestay?: boolean | homestayDefaultArgs<ExtArgs>
    homestayRoom?: boolean | reviews$homestayRoomArgs<ExtArgs>
    landing_page_user?: boolean | landing_page_userDefaultArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      homestay: Prisma.$homestayPayload<ExtArgs>
      homestayRoom: Prisma.$homestayRoomPayload<ExtArgs> | null
      landing_page_user: Prisma.$landing_page_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      homestay_id: number
      room_id: number | null
      rating: number
      comment: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
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
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homestay<T extends homestayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, homestayDefaultArgs<ExtArgs>>): Prisma__homestayClient<$Result.GetResult<Prisma.$homestayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    homestayRoom<T extends reviews$homestayRoomArgs<ExtArgs> = {}>(args?: Subset<T, reviews$homestayRoomArgs<ExtArgs>>): Prisma__homestayRoomClient<$Result.GetResult<Prisma.$homestayRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    landing_page_user<T extends landing_page_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, landing_page_userDefaultArgs<ExtArgs>>): Prisma__landing_page_userClient<$Result.GetResult<Prisma.$landing_page_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly id: FieldRef<"reviews", 'Int'>
    readonly user_id: FieldRef<"reviews", 'Int'>
    readonly homestay_id: FieldRef<"reviews", 'Int'>
    readonly room_id: FieldRef<"reviews", 'Int'>
    readonly rating: FieldRef<"reviews", 'Int'>
    readonly comment: FieldRef<"reviews", 'String'>
    readonly created_at: FieldRef<"reviews", 'DateTime'>
    readonly updated_at: FieldRef<"reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews.homestayRoom
   */
  export type reviews$homestayRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homestayRoom
     */
    select?: homestayRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the homestayRoom
     */
    omit?: homestayRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homestayRoomInclude<ExtArgs> | null
    where?: homestayRoomWhereInput
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model room_features
   */

  export type AggregateRoom_features = {
    _count: Room_featuresCountAggregateOutputType | null
    _avg: Room_featuresAvgAggregateOutputType | null
    _sum: Room_featuresSumAggregateOutputType | null
    _min: Room_featuresMinAggregateOutputType | null
    _max: Room_featuresMaxAggregateOutputType | null
  }

  export type Room_featuresAvgAggregateOutputType = {
    id: number | null
  }

  export type Room_featuresSumAggregateOutputType = {
    id: number | null
  }

  export type Room_featuresMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    symbol: string | null
    category: $Enums.feature_category | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Room_featuresMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    symbol: string | null
    category: $Enums.feature_category | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Room_featuresCountAggregateOutputType = {
    id: number
    title: number
    description: number
    symbol: number
    category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Room_featuresAvgAggregateInputType = {
    id?: true
  }

  export type Room_featuresSumAggregateInputType = {
    id?: true
  }

  export type Room_featuresMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    symbol?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type Room_featuresMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    symbol?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type Room_featuresCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    symbol?: true
    category?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Room_featuresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_features to aggregate.
     */
    where?: room_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_features to fetch.
     */
    orderBy?: room_featuresOrderByWithRelationInput | room_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: room_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned room_features
    **/
    _count?: true | Room_featuresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Room_featuresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Room_featuresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Room_featuresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Room_featuresMaxAggregateInputType
  }

  export type GetRoom_featuresAggregateType<T extends Room_featuresAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom_features]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom_features[P]>
      : GetScalarType<T[P], AggregateRoom_features[P]>
  }




  export type room_featuresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_featuresWhereInput
    orderBy?: room_featuresOrderByWithAggregationInput | room_featuresOrderByWithAggregationInput[]
    by: Room_featuresScalarFieldEnum[] | Room_featuresScalarFieldEnum
    having?: room_featuresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Room_featuresCountAggregateInputType | true
    _avg?: Room_featuresAvgAggregateInputType
    _sum?: Room_featuresSumAggregateInputType
    _min?: Room_featuresMinAggregateInputType
    _max?: Room_featuresMaxAggregateInputType
  }

  export type Room_featuresGroupByOutputType = {
    id: number
    title: string
    description: string | null
    symbol: string | null
    category: $Enums.feature_category
    created_at: Date
    updated_at: Date
    _count: Room_featuresCountAggregateOutputType | null
    _avg: Room_featuresAvgAggregateOutputType | null
    _sum: Room_featuresSumAggregateOutputType | null
    _min: Room_featuresMinAggregateOutputType | null
    _max: Room_featuresMaxAggregateOutputType | null
  }

  type GetRoom_featuresGroupByPayload<T extends room_featuresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Room_featuresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Room_featuresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Room_featuresGroupByOutputType[P]>
            : GetScalarType<T[P], Room_featuresGroupByOutputType[P]>
        }
      >
    >


  export type room_featuresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    symbol?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    relation_feature_room?: boolean | room_features$relation_feature_roomArgs<ExtArgs>
    _count?: boolean | Room_featuresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_features"]>

  export type room_featuresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    symbol?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["room_features"]>

  export type room_featuresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    symbol?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["room_features"]>

  export type room_featuresSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    symbol?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type room_featuresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "symbol" | "category" | "created_at" | "updated_at", ExtArgs["result"]["room_features"]>
  export type room_featuresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relation_feature_room?: boolean | room_features$relation_feature_roomArgs<ExtArgs>
    _count?: boolean | Room_featuresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type room_featuresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type room_featuresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $room_featuresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room_features"
    objects: {
      relation_feature_room: Prisma.$relation_feature_roomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      symbol: string | null
      category: $Enums.feature_category
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["room_features"]>
    composites: {}
  }

  type room_featuresGetPayload<S extends boolean | null | undefined | room_featuresDefaultArgs> = $Result.GetResult<Prisma.$room_featuresPayload, S>

  type room_featuresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<room_featuresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Room_featuresCountAggregateInputType | true
    }

  export interface room_featuresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room_features'], meta: { name: 'room_features' } }
    /**
     * Find zero or one Room_features that matches the filter.
     * @param {room_featuresFindUniqueArgs} args - Arguments to find a Room_features
     * @example
     * // Get one Room_features
     * const room_features = await prisma.room_features.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends room_featuresFindUniqueArgs>(args: SelectSubset<T, room_featuresFindUniqueArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room_features that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {room_featuresFindUniqueOrThrowArgs} args - Arguments to find a Room_features
     * @example
     * // Get one Room_features
     * const room_features = await prisma.room_features.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends room_featuresFindUniqueOrThrowArgs>(args: SelectSubset<T, room_featuresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_featuresFindFirstArgs} args - Arguments to find a Room_features
     * @example
     * // Get one Room_features
     * const room_features = await prisma.room_features.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends room_featuresFindFirstArgs>(args?: SelectSubset<T, room_featuresFindFirstArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_features that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_featuresFindFirstOrThrowArgs} args - Arguments to find a Room_features
     * @example
     * // Get one Room_features
     * const room_features = await prisma.room_features.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends room_featuresFindFirstOrThrowArgs>(args?: SelectSubset<T, room_featuresFindFirstOrThrowArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Room_features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_featuresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_features
     * const room_features = await prisma.room_features.findMany()
     * 
     * // Get first 10 Room_features
     * const room_features = await prisma.room_features.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const room_featuresWithIdOnly = await prisma.room_features.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends room_featuresFindManyArgs>(args?: SelectSubset<T, room_featuresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room_features.
     * @param {room_featuresCreateArgs} args - Arguments to create a Room_features.
     * @example
     * // Create one Room_features
     * const Room_features = await prisma.room_features.create({
     *   data: {
     *     // ... data to create a Room_features
     *   }
     * })
     * 
     */
    create<T extends room_featuresCreateArgs>(args: SelectSubset<T, room_featuresCreateArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Room_features.
     * @param {room_featuresCreateManyArgs} args - Arguments to create many Room_features.
     * @example
     * // Create many Room_features
     * const room_features = await prisma.room_features.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends room_featuresCreateManyArgs>(args?: SelectSubset<T, room_featuresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Room_features and returns the data saved in the database.
     * @param {room_featuresCreateManyAndReturnArgs} args - Arguments to create many Room_features.
     * @example
     * // Create many Room_features
     * const room_features = await prisma.room_features.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Room_features and only return the `id`
     * const room_featuresWithIdOnly = await prisma.room_features.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends room_featuresCreateManyAndReturnArgs>(args?: SelectSubset<T, room_featuresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room_features.
     * @param {room_featuresDeleteArgs} args - Arguments to delete one Room_features.
     * @example
     * // Delete one Room_features
     * const Room_features = await prisma.room_features.delete({
     *   where: {
     *     // ... filter to delete one Room_features
     *   }
     * })
     * 
     */
    delete<T extends room_featuresDeleteArgs>(args: SelectSubset<T, room_featuresDeleteArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room_features.
     * @param {room_featuresUpdateArgs} args - Arguments to update one Room_features.
     * @example
     * // Update one Room_features
     * const room_features = await prisma.room_features.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends room_featuresUpdateArgs>(args: SelectSubset<T, room_featuresUpdateArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Room_features.
     * @param {room_featuresDeleteManyArgs} args - Arguments to filter Room_features to delete.
     * @example
     * // Delete a few Room_features
     * const { count } = await prisma.room_features.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends room_featuresDeleteManyArgs>(args?: SelectSubset<T, room_featuresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_featuresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_features
     * const room_features = await prisma.room_features.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends room_featuresUpdateManyArgs>(args: SelectSubset<T, room_featuresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_features and returns the data updated in the database.
     * @param {room_featuresUpdateManyAndReturnArgs} args - Arguments to update many Room_features.
     * @example
     * // Update many Room_features
     * const room_features = await prisma.room_features.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Room_features and only return the `id`
     * const room_featuresWithIdOnly = await prisma.room_features.updateManyAndReturn({
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
    updateManyAndReturn<T extends room_featuresUpdateManyAndReturnArgs>(args: SelectSubset<T, room_featuresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room_features.
     * @param {room_featuresUpsertArgs} args - Arguments to update or create a Room_features.
     * @example
     * // Update or create a Room_features
     * const room_features = await prisma.room_features.upsert({
     *   create: {
     *     // ... data to create a Room_features
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_features we want to update
     *   }
     * })
     */
    upsert<T extends room_featuresUpsertArgs>(args: SelectSubset<T, room_featuresUpsertArgs<ExtArgs>>): Prisma__room_featuresClient<$Result.GetResult<Prisma.$room_featuresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Room_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_featuresCountArgs} args - Arguments to filter Room_features to count.
     * @example
     * // Count the number of Room_features
     * const count = await prisma.room_features.count({
     *   where: {
     *     // ... the filter for the Room_features we want to count
     *   }
     * })
    **/
    count<T extends room_featuresCountArgs>(
      args?: Subset<T, room_featuresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Room_featuresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_featuresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Room_featuresAggregateArgs>(args: Subset<T, Room_featuresAggregateArgs>): Prisma.PrismaPromise<GetRoom_featuresAggregateType<T>>

    /**
     * Group by Room_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_featuresGroupByArgs} args - Group by arguments.
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
      T extends room_featuresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: room_featuresGroupByArgs['orderBy'] }
        : { orderBy?: room_featuresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, room_featuresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_featuresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room_features model
   */
  readonly fields: room_featuresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room_features.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__room_featuresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relation_feature_room<T extends room_features$relation_feature_roomArgs<ExtArgs> = {}>(args?: Subset<T, room_features$relation_feature_roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$relation_feature_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the room_features model
   */
  interface room_featuresFieldRefs {
    readonly id: FieldRef<"room_features", 'Int'>
    readonly title: FieldRef<"room_features", 'String'>
    readonly description: FieldRef<"room_features", 'String'>
    readonly symbol: FieldRef<"room_features", 'String'>
    readonly category: FieldRef<"room_features", 'feature_category'>
    readonly created_at: FieldRef<"room_features", 'DateTime'>
    readonly updated_at: FieldRef<"room_features", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * room_features findUnique
   */
  export type room_featuresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * Filter, which room_features to fetch.
     */
    where: room_featuresWhereUniqueInput
  }

  /**
   * room_features findUniqueOrThrow
   */
  export type room_featuresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * Filter, which room_features to fetch.
     */
    where: room_featuresWhereUniqueInput
  }

  /**
   * room_features findFirst
   */
  export type room_featuresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * Filter, which room_features to fetch.
     */
    where?: room_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_features to fetch.
     */
    orderBy?: room_featuresOrderByWithRelationInput | room_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_features.
     */
    cursor?: room_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_features.
     */
    distinct?: Room_featuresScalarFieldEnum | Room_featuresScalarFieldEnum[]
  }

  /**
   * room_features findFirstOrThrow
   */
  export type room_featuresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * Filter, which room_features to fetch.
     */
    where?: room_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_features to fetch.
     */
    orderBy?: room_featuresOrderByWithRelationInput | room_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_features.
     */
    cursor?: room_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_features.
     */
    distinct?: Room_featuresScalarFieldEnum | Room_featuresScalarFieldEnum[]
  }

  /**
   * room_features findMany
   */
  export type room_featuresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * Filter, which room_features to fetch.
     */
    where?: room_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_features to fetch.
     */
    orderBy?: room_featuresOrderByWithRelationInput | room_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing room_features.
     */
    cursor?: room_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_features.
     */
    skip?: number
    distinct?: Room_featuresScalarFieldEnum | Room_featuresScalarFieldEnum[]
  }

  /**
   * room_features create
   */
  export type room_featuresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * The data needed to create a room_features.
     */
    data: XOR<room_featuresCreateInput, room_featuresUncheckedCreateInput>
  }

  /**
   * room_features createMany
   */
  export type room_featuresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many room_features.
     */
    data: room_featuresCreateManyInput | room_featuresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_features createManyAndReturn
   */
  export type room_featuresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * The data used to create many room_features.
     */
    data: room_featuresCreateManyInput | room_featuresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_features update
   */
  export type room_featuresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * The data needed to update a room_features.
     */
    data: XOR<room_featuresUpdateInput, room_featuresUncheckedUpdateInput>
    /**
     * Choose, which room_features to update.
     */
    where: room_featuresWhereUniqueInput
  }

  /**
   * room_features updateMany
   */
  export type room_featuresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update room_features.
     */
    data: XOR<room_featuresUpdateManyMutationInput, room_featuresUncheckedUpdateManyInput>
    /**
     * Filter which room_features to update
     */
    where?: room_featuresWhereInput
    /**
     * Limit how many room_features to update.
     */
    limit?: number
  }

  /**
   * room_features updateManyAndReturn
   */
  export type room_featuresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * The data used to update room_features.
     */
    data: XOR<room_featuresUpdateManyMutationInput, room_featuresUncheckedUpdateManyInput>
    /**
     * Filter which room_features to update
     */
    where?: room_featuresWhereInput
    /**
     * Limit how many room_features to update.
     */
    limit?: number
  }

  /**
   * room_features upsert
   */
  export type room_featuresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * The filter to search for the room_features to update in case it exists.
     */
    where: room_featuresWhereUniqueInput
    /**
     * In case the room_features found by the `where` argument doesn't exist, create a new room_features with this data.
     */
    create: XOR<room_featuresCreateInput, room_featuresUncheckedCreateInput>
    /**
     * In case the room_features was found with the provided `where` argument, update it with this data.
     */
    update: XOR<room_featuresUpdateInput, room_featuresUncheckedUpdateInput>
  }

  /**
   * room_features delete
   */
  export type room_featuresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
    /**
     * Filter which room_features to delete.
     */
    where: room_featuresWhereUniqueInput
  }

  /**
   * room_features deleteMany
   */
  export type room_featuresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_features to delete
     */
    where?: room_featuresWhereInput
    /**
     * Limit how many room_features to delete.
     */
    limit?: number
  }

  /**
   * room_features.relation_feature_room
   */
  export type room_features$relation_feature_roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_feature_room
     */
    select?: relation_feature_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the relation_feature_room
     */
    omit?: relation_feature_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: relation_feature_roomInclude<ExtArgs> | null
    where?: relation_feature_roomWhereInput
    orderBy?: relation_feature_roomOrderByWithRelationInput | relation_feature_roomOrderByWithRelationInput[]
    cursor?: relation_feature_roomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Relation_feature_roomScalarFieldEnum | Relation_feature_roomScalarFieldEnum[]
  }

  /**
   * room_features without action
   */
  export type room_featuresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_features
     */
    select?: room_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_features
     */
    omit?: room_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_featuresInclude<ExtArgs> | null
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


  export const Admin_usersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    name: 'name',
    role: 'role',
    is_active: 'is_active',
    last_login: 'last_login',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Admin_usersScalarFieldEnum = (typeof Admin_usersScalarFieldEnum)[keyof typeof Admin_usersScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    start_date: 'start_date',
    end_date: 'end_date',
    room_id: 'room_id',
    status: 'status',
    is_paid: 'is_paid',
    user_id: 'user_id',
    booking_number: 'booking_number',
    total_price: 'total_price',
    payment_method: 'payment_method',
    check_in_time: 'check_in_time',
    check_out_time: 'check_out_time',
    number_of_guests: 'number_of_guests',
    notes: 'notes',
    special_requests: 'special_requests',
    cancellation_reason: 'cancellation_reason',
    cancelled_at: 'cancelled_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const HomestayScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    user_id: 'user_id',
    status: 'status',
    has_rooms: 'has_rooms',
    location: 'location',
    address: 'address',
    base_price: 'base_price',
    max_guests: 'max_guests',
    contact_number: 'contact_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HomestayScalarFieldEnum = (typeof HomestayScalarFieldEnum)[keyof typeof HomestayScalarFieldEnum]


  export const HomestayImagesScalarFieldEnum: {
    id: 'id',
    img_url: 'img_url',
    homestay_id: 'homestay_id',
    is_primary: 'is_primary',
    order: 'order',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HomestayImagesScalarFieldEnum = (typeof HomestayImagesScalarFieldEnum)[keyof typeof HomestayImagesScalarFieldEnum]


  export const HomestayRoomScalarFieldEnum: {
    id: 'id',
    homestay_id: 'homestay_id',
    title: 'title',
    description: 'description',
    status: 'status',
    room_number: 'room_number',
    number_people: 'number_people',
    max_occupancy: 'max_occupancy',
    price: 'price',
    currency: 'currency',
    size: 'size',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HomestayRoomScalarFieldEnum = (typeof HomestayRoomScalarFieldEnum)[keyof typeof HomestayRoomScalarFieldEnum]


  export const Landing_page_userScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    last_name: 'last_name',
    passport: 'passport',
    phone_number: 'phone_number',
    type: 'type',
    country: 'country',
    address: 'address',
    is_verified: 'is_verified',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Landing_page_userScalarFieldEnum = (typeof Landing_page_userScalarFieldEnum)[keyof typeof Landing_page_userScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    admin_id: 'admin_id',
    title: 'title',
    message: 'message',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    amount: 'amount',
    currency: 'currency',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    transaction_id: 'transaction_id',
    payment_date: 'payment_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const Relation_feature_roomScalarFieldEnum: {
    id: 'id',
    room_feature_id: 'room_feature_id',
    homestay_id: 'homestay_id',
    is_available: 'is_available',
    created_at: 'created_at'
  };

  export type Relation_feature_roomScalarFieldEnum = (typeof Relation_feature_roomScalarFieldEnum)[keyof typeof Relation_feature_roomScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    homestay_id: 'homestay_id',
    room_id: 'room_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const Room_featuresScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    symbol: 'symbol',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Room_featuresScalarFieldEnum = (typeof Room_featuresScalarFieldEnum)[keyof typeof Room_featuresScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'booking_status'
   */
  export type Enumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status'>
    


  /**
   * Reference to a field of type 'booking_status[]'
   */
  export type ListEnumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'homestay_status'
   */
  export type Enumhomestay_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'homestay_status'>
    


  /**
   * Reference to a field of type 'homestay_status[]'
   */
  export type ListEnumhomestay_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'homestay_status[]'>
    


  /**
   * Reference to a field of type 'room_status'
   */
  export type Enumroom_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_status'>
    


  /**
   * Reference to a field of type 'room_status[]'
   */
  export type ListEnumroom_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_status[]'>
    


  /**
   * Reference to a field of type 'user_type'
   */
  export type Enumuser_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_type'>
    


  /**
   * Reference to a field of type 'user_type[]'
   */
  export type ListEnumuser_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_type[]'>
    


  /**
   * Reference to a field of type 'feature_category'
   */
  export type Enumfeature_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'feature_category'>
    


  /**
   * Reference to a field of type 'feature_category[]'
   */
  export type ListEnumfeature_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'feature_category[]'>
    


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


  export type admin_usersWhereInput = {
    AND?: admin_usersWhereInput | admin_usersWhereInput[]
    OR?: admin_usersWhereInput[]
    NOT?: admin_usersWhereInput | admin_usersWhereInput[]
    id?: IntFilter<"admin_users"> | number
    username?: StringFilter<"admin_users"> | string
    password?: StringFilter<"admin_users"> | string
    email?: StringFilter<"admin_users"> | string
    name?: StringFilter<"admin_users"> | string
    role?: Enumuser_roleFilter<"admin_users"> | $Enums.user_role
    is_active?: BoolFilter<"admin_users"> | boolean
    last_login?: DateTimeNullableFilter<"admin_users"> | Date | string | null
    created_at?: DateTimeFilter<"admin_users"> | Date | string
    updated_at?: DateTimeFilter<"admin_users"> | Date | string
    homestay?: HomestayListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type admin_usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    homestay?: homestayOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
  }

  export type admin_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: admin_usersWhereInput | admin_usersWhereInput[]
    OR?: admin_usersWhereInput[]
    NOT?: admin_usersWhereInput | admin_usersWhereInput[]
    password?: StringFilter<"admin_users"> | string
    name?: StringFilter<"admin_users"> | string
    role?: Enumuser_roleFilter<"admin_users"> | $Enums.user_role
    is_active?: BoolFilter<"admin_users"> | boolean
    last_login?: DateTimeNullableFilter<"admin_users"> | Date | string | null
    created_at?: DateTimeFilter<"admin_users"> | Date | string
    updated_at?: DateTimeFilter<"admin_users"> | Date | string
    homestay?: HomestayListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "id" | "username" | "email">

  export type admin_usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: admin_usersCountOrderByAggregateInput
    _avg?: admin_usersAvgOrderByAggregateInput
    _max?: admin_usersMaxOrderByAggregateInput
    _min?: admin_usersMinOrderByAggregateInput
    _sum?: admin_usersSumOrderByAggregateInput
  }

  export type admin_usersScalarWhereWithAggregatesInput = {
    AND?: admin_usersScalarWhereWithAggregatesInput | admin_usersScalarWhereWithAggregatesInput[]
    OR?: admin_usersScalarWhereWithAggregatesInput[]
    NOT?: admin_usersScalarWhereWithAggregatesInput | admin_usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin_users"> | number
    username?: StringWithAggregatesFilter<"admin_users"> | string
    password?: StringWithAggregatesFilter<"admin_users"> | string
    email?: StringWithAggregatesFilter<"admin_users"> | string
    name?: StringWithAggregatesFilter<"admin_users"> | string
    role?: Enumuser_roleWithAggregatesFilter<"admin_users"> | $Enums.user_role
    is_active?: BoolWithAggregatesFilter<"admin_users"> | boolean
    last_login?: DateTimeNullableWithAggregatesFilter<"admin_users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"admin_users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"admin_users"> | Date | string
  }

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    id?: IntFilter<"booking"> | number
    start_date?: DateTimeFilter<"booking"> | Date | string
    end_date?: DateTimeFilter<"booking"> | Date | string
    room_id?: IntFilter<"booking"> | number
    status?: Enumbooking_statusFilter<"booking"> | $Enums.booking_status
    is_paid?: BoolFilter<"booking"> | boolean
    user_id?: IntNullableFilter<"booking"> | number | null
    booking_number?: StringFilter<"booking"> | string
    total_price?: DecimalFilter<"booking"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"booking"> | string | null
    check_in_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    check_out_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    number_of_guests?: IntFilter<"booking"> | number
    notes?: StringNullableFilter<"booking"> | string | null
    special_requests?: StringNullableFilter<"booking"> | string | null
    cancellation_reason?: StringNullableFilter<"booking"> | string | null
    cancelled_at?: DateTimeNullableFilter<"booking"> | Date | string | null
    created_at?: DateTimeFilter<"booking"> | Date | string
    updated_at?: DateTimeFilter<"booking"> | Date | string
    homestayRoom?: XOR<HomestayRoomScalarRelationFilter, homestayRoomWhereInput>
    landing_page_user?: XOR<Landing_page_userNullableScalarRelationFilter, landing_page_userWhereInput> | null
    payments?: PaymentsListRelationFilter
  }

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_id?: SortOrder
    status?: SortOrder
    is_paid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    booking_number?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    check_in_time?: SortOrderInput | SortOrder
    check_out_time?: SortOrderInput | SortOrder
    number_of_guests?: SortOrder
    notes?: SortOrderInput | SortOrder
    special_requests?: SortOrderInput | SortOrder
    cancellation_reason?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    homestayRoom?: homestayRoomOrderByWithRelationInput
    landing_page_user?: landing_page_userOrderByWithRelationInput
    payments?: paymentsOrderByRelationAggregateInput
  }

  export type bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    booking_number?: string
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    start_date?: DateTimeFilter<"booking"> | Date | string
    end_date?: DateTimeFilter<"booking"> | Date | string
    room_id?: IntFilter<"booking"> | number
    status?: Enumbooking_statusFilter<"booking"> | $Enums.booking_status
    is_paid?: BoolFilter<"booking"> | boolean
    user_id?: IntNullableFilter<"booking"> | number | null
    total_price?: DecimalFilter<"booking"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"booking"> | string | null
    check_in_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    check_out_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    number_of_guests?: IntFilter<"booking"> | number
    notes?: StringNullableFilter<"booking"> | string | null
    special_requests?: StringNullableFilter<"booking"> | string | null
    cancellation_reason?: StringNullableFilter<"booking"> | string | null
    cancelled_at?: DateTimeNullableFilter<"booking"> | Date | string | null
    created_at?: DateTimeFilter<"booking"> | Date | string
    updated_at?: DateTimeFilter<"booking"> | Date | string
    homestayRoom?: XOR<HomestayRoomScalarRelationFilter, homestayRoomWhereInput>
    landing_page_user?: XOR<Landing_page_userNullableScalarRelationFilter, landing_page_userWhereInput> | null
    payments?: PaymentsListRelationFilter
  }, "id" | "booking_number">

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_id?: SortOrder
    status?: SortOrder
    is_paid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    booking_number?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    check_in_time?: SortOrderInput | SortOrder
    check_out_time?: SortOrderInput | SortOrder
    number_of_guests?: SortOrder
    notes?: SortOrderInput | SortOrder
    special_requests?: SortOrderInput | SortOrder
    cancellation_reason?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: bookingCountOrderByAggregateInput
    _avg?: bookingAvgOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
    _sum?: bookingSumOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    OR?: bookingScalarWhereWithAggregatesInput[]
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"booking"> | number
    start_date?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    room_id?: IntWithAggregatesFilter<"booking"> | number
    status?: Enumbooking_statusWithAggregatesFilter<"booking"> | $Enums.booking_status
    is_paid?: BoolWithAggregatesFilter<"booking"> | boolean
    user_id?: IntNullableWithAggregatesFilter<"booking"> | number | null
    booking_number?: StringWithAggregatesFilter<"booking"> | string
    total_price?: DecimalWithAggregatesFilter<"booking"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableWithAggregatesFilter<"booking"> | string | null
    check_in_time?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
    check_out_time?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
    number_of_guests?: IntWithAggregatesFilter<"booking"> | number
    notes?: StringNullableWithAggregatesFilter<"booking"> | string | null
    special_requests?: StringNullableWithAggregatesFilter<"booking"> | string | null
    cancellation_reason?: StringNullableWithAggregatesFilter<"booking"> | string | null
    cancelled_at?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"booking"> | Date | string
  }

  export type homestayWhereInput = {
    AND?: homestayWhereInput | homestayWhereInput[]
    OR?: homestayWhereInput[]
    NOT?: homestayWhereInput | homestayWhereInput[]
    id?: IntFilter<"homestay"> | number
    title?: StringFilter<"homestay"> | string
    description?: StringNullableFilter<"homestay"> | string | null
    user_id?: IntFilter<"homestay"> | number
    status?: Enumhomestay_statusFilter<"homestay"> | $Enums.homestay_status
    has_rooms?: BoolFilter<"homestay"> | boolean
    location?: StringFilter<"homestay"> | string
    address?: StringFilter<"homestay"> | string
    base_price?: DecimalNullableFilter<"homestay"> | Decimal | DecimalJsLike | number | string | null
    max_guests?: IntNullableFilter<"homestay"> | number | null
    contact_number?: StringNullableFilter<"homestay"> | string | null
    created_at?: DateTimeFilter<"homestay"> | Date | string
    updated_at?: DateTimeFilter<"homestay"> | Date | string
    admin_users?: XOR<Admin_usersScalarRelationFilter, admin_usersWhereInput>
    homestayImages?: HomestayImagesListRelationFilter
    homestayRoom?: HomestayRoomListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type homestayOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    status?: SortOrder
    has_rooms?: SortOrder
    location?: SortOrder
    address?: SortOrder
    base_price?: SortOrderInput | SortOrder
    max_guests?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    admin_users?: admin_usersOrderByWithRelationInput
    homestayImages?: homestayImagesOrderByRelationAggregateInput
    homestayRoom?: homestayRoomOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
  }

  export type homestayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: homestayWhereInput | homestayWhereInput[]
    OR?: homestayWhereInput[]
    NOT?: homestayWhereInput | homestayWhereInput[]
    title?: StringFilter<"homestay"> | string
    description?: StringNullableFilter<"homestay"> | string | null
    user_id?: IntFilter<"homestay"> | number
    status?: Enumhomestay_statusFilter<"homestay"> | $Enums.homestay_status
    has_rooms?: BoolFilter<"homestay"> | boolean
    location?: StringFilter<"homestay"> | string
    address?: StringFilter<"homestay"> | string
    base_price?: DecimalNullableFilter<"homestay"> | Decimal | DecimalJsLike | number | string | null
    max_guests?: IntNullableFilter<"homestay"> | number | null
    contact_number?: StringNullableFilter<"homestay"> | string | null
    created_at?: DateTimeFilter<"homestay"> | Date | string
    updated_at?: DateTimeFilter<"homestay"> | Date | string
    admin_users?: XOR<Admin_usersScalarRelationFilter, admin_usersWhereInput>
    homestayImages?: HomestayImagesListRelationFilter
    homestayRoom?: HomestayRoomListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "id">

  export type homestayOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    status?: SortOrder
    has_rooms?: SortOrder
    location?: SortOrder
    address?: SortOrder
    base_price?: SortOrderInput | SortOrder
    max_guests?: SortOrderInput | SortOrder
    contact_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: homestayCountOrderByAggregateInput
    _avg?: homestayAvgOrderByAggregateInput
    _max?: homestayMaxOrderByAggregateInput
    _min?: homestayMinOrderByAggregateInput
    _sum?: homestaySumOrderByAggregateInput
  }

  export type homestayScalarWhereWithAggregatesInput = {
    AND?: homestayScalarWhereWithAggregatesInput | homestayScalarWhereWithAggregatesInput[]
    OR?: homestayScalarWhereWithAggregatesInput[]
    NOT?: homestayScalarWhereWithAggregatesInput | homestayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"homestay"> | number
    title?: StringWithAggregatesFilter<"homestay"> | string
    description?: StringNullableWithAggregatesFilter<"homestay"> | string | null
    user_id?: IntWithAggregatesFilter<"homestay"> | number
    status?: Enumhomestay_statusWithAggregatesFilter<"homestay"> | $Enums.homestay_status
    has_rooms?: BoolWithAggregatesFilter<"homestay"> | boolean
    location?: StringWithAggregatesFilter<"homestay"> | string
    address?: StringWithAggregatesFilter<"homestay"> | string
    base_price?: DecimalNullableWithAggregatesFilter<"homestay"> | Decimal | DecimalJsLike | number | string | null
    max_guests?: IntNullableWithAggregatesFilter<"homestay"> | number | null
    contact_number?: StringNullableWithAggregatesFilter<"homestay"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"homestay"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"homestay"> | Date | string
  }

  export type homestayImagesWhereInput = {
    AND?: homestayImagesWhereInput | homestayImagesWhereInput[]
    OR?: homestayImagesWhereInput[]
    NOT?: homestayImagesWhereInput | homestayImagesWhereInput[]
    id?: IntFilter<"homestayImages"> | number
    img_url?: StringFilter<"homestayImages"> | string
    homestay_id?: IntFilter<"homestayImages"> | number
    is_primary?: BoolFilter<"homestayImages"> | boolean
    order?: IntFilter<"homestayImages"> | number
    created_at?: DateTimeFilter<"homestayImages"> | Date | string
    updated_at?: DateTimeFilter<"homestayImages"> | Date | string
    homestay?: XOR<HomestayScalarRelationFilter, homestayWhereInput>
  }

  export type homestayImagesOrderByWithRelationInput = {
    id?: SortOrder
    img_url?: SortOrder
    homestay_id?: SortOrder
    is_primary?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    homestay?: homestayOrderByWithRelationInput
  }

  export type homestayImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: homestayImagesWhereInput | homestayImagesWhereInput[]
    OR?: homestayImagesWhereInput[]
    NOT?: homestayImagesWhereInput | homestayImagesWhereInput[]
    img_url?: StringFilter<"homestayImages"> | string
    homestay_id?: IntFilter<"homestayImages"> | number
    is_primary?: BoolFilter<"homestayImages"> | boolean
    order?: IntFilter<"homestayImages"> | number
    created_at?: DateTimeFilter<"homestayImages"> | Date | string
    updated_at?: DateTimeFilter<"homestayImages"> | Date | string
    homestay?: XOR<HomestayScalarRelationFilter, homestayWhereInput>
  }, "id">

  export type homestayImagesOrderByWithAggregationInput = {
    id?: SortOrder
    img_url?: SortOrder
    homestay_id?: SortOrder
    is_primary?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: homestayImagesCountOrderByAggregateInput
    _avg?: homestayImagesAvgOrderByAggregateInput
    _max?: homestayImagesMaxOrderByAggregateInput
    _min?: homestayImagesMinOrderByAggregateInput
    _sum?: homestayImagesSumOrderByAggregateInput
  }

  export type homestayImagesScalarWhereWithAggregatesInput = {
    AND?: homestayImagesScalarWhereWithAggregatesInput | homestayImagesScalarWhereWithAggregatesInput[]
    OR?: homestayImagesScalarWhereWithAggregatesInput[]
    NOT?: homestayImagesScalarWhereWithAggregatesInput | homestayImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"homestayImages"> | number
    img_url?: StringWithAggregatesFilter<"homestayImages"> | string
    homestay_id?: IntWithAggregatesFilter<"homestayImages"> | number
    is_primary?: BoolWithAggregatesFilter<"homestayImages"> | boolean
    order?: IntWithAggregatesFilter<"homestayImages"> | number
    created_at?: DateTimeWithAggregatesFilter<"homestayImages"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"homestayImages"> | Date | string
  }

  export type homestayRoomWhereInput = {
    AND?: homestayRoomWhereInput | homestayRoomWhereInput[]
    OR?: homestayRoomWhereInput[]
    NOT?: homestayRoomWhereInput | homestayRoomWhereInput[]
    id?: IntFilter<"homestayRoom"> | number
    homestay_id?: IntFilter<"homestayRoom"> | number
    title?: StringFilter<"homestayRoom"> | string
    description?: StringNullableFilter<"homestayRoom"> | string | null
    status?: Enumroom_statusFilter<"homestayRoom"> | $Enums.room_status
    room_number?: StringNullableFilter<"homestayRoom"> | string | null
    number_people?: IntFilter<"homestayRoom"> | number
    max_occupancy?: IntFilter<"homestayRoom"> | number
    price?: DecimalFilter<"homestayRoom"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"homestayRoom"> | string
    size?: StringNullableFilter<"homestayRoom"> | string | null
    created_at?: DateTimeFilter<"homestayRoom"> | Date | string
    updated_at?: DateTimeFilter<"homestayRoom"> | Date | string
    booking?: BookingListRelationFilter
    homestay?: XOR<HomestayScalarRelationFilter, homestayWhereInput>
    relation_feature_room?: Relation_feature_roomListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type homestayRoomOrderByWithRelationInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    room_number?: SortOrderInput | SortOrder
    number_people?: SortOrder
    max_occupancy?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    size?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    booking?: bookingOrderByRelationAggregateInput
    homestay?: homestayOrderByWithRelationInput
    relation_feature_room?: relation_feature_roomOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
  }

  export type homestayRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: homestayRoomWhereInput | homestayRoomWhereInput[]
    OR?: homestayRoomWhereInput[]
    NOT?: homestayRoomWhereInput | homestayRoomWhereInput[]
    homestay_id?: IntFilter<"homestayRoom"> | number
    title?: StringFilter<"homestayRoom"> | string
    description?: StringNullableFilter<"homestayRoom"> | string | null
    status?: Enumroom_statusFilter<"homestayRoom"> | $Enums.room_status
    room_number?: StringNullableFilter<"homestayRoom"> | string | null
    number_people?: IntFilter<"homestayRoom"> | number
    max_occupancy?: IntFilter<"homestayRoom"> | number
    price?: DecimalFilter<"homestayRoom"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"homestayRoom"> | string
    size?: StringNullableFilter<"homestayRoom"> | string | null
    created_at?: DateTimeFilter<"homestayRoom"> | Date | string
    updated_at?: DateTimeFilter<"homestayRoom"> | Date | string
    booking?: BookingListRelationFilter
    homestay?: XOR<HomestayScalarRelationFilter, homestayWhereInput>
    relation_feature_room?: Relation_feature_roomListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "id">

  export type homestayRoomOrderByWithAggregationInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    room_number?: SortOrderInput | SortOrder
    number_people?: SortOrder
    max_occupancy?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    size?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: homestayRoomCountOrderByAggregateInput
    _avg?: homestayRoomAvgOrderByAggregateInput
    _max?: homestayRoomMaxOrderByAggregateInput
    _min?: homestayRoomMinOrderByAggregateInput
    _sum?: homestayRoomSumOrderByAggregateInput
  }

  export type homestayRoomScalarWhereWithAggregatesInput = {
    AND?: homestayRoomScalarWhereWithAggregatesInput | homestayRoomScalarWhereWithAggregatesInput[]
    OR?: homestayRoomScalarWhereWithAggregatesInput[]
    NOT?: homestayRoomScalarWhereWithAggregatesInput | homestayRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"homestayRoom"> | number
    homestay_id?: IntWithAggregatesFilter<"homestayRoom"> | number
    title?: StringWithAggregatesFilter<"homestayRoom"> | string
    description?: StringNullableWithAggregatesFilter<"homestayRoom"> | string | null
    status?: Enumroom_statusWithAggregatesFilter<"homestayRoom"> | $Enums.room_status
    room_number?: StringNullableWithAggregatesFilter<"homestayRoom"> | string | null
    number_people?: IntWithAggregatesFilter<"homestayRoom"> | number
    max_occupancy?: IntWithAggregatesFilter<"homestayRoom"> | number
    price?: DecimalWithAggregatesFilter<"homestayRoom"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"homestayRoom"> | string
    size?: StringNullableWithAggregatesFilter<"homestayRoom"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"homestayRoom"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"homestayRoom"> | Date | string
  }

  export type landing_page_userWhereInput = {
    AND?: landing_page_userWhereInput | landing_page_userWhereInput[]
    OR?: landing_page_userWhereInput[]
    NOT?: landing_page_userWhereInput | landing_page_userWhereInput[]
    id?: IntFilter<"landing_page_user"> | number
    email?: StringFilter<"landing_page_user"> | string
    name?: StringFilter<"landing_page_user"> | string
    last_name?: StringFilter<"landing_page_user"> | string
    passport?: StringNullableFilter<"landing_page_user"> | string | null
    phone_number?: StringFilter<"landing_page_user"> | string
    type?: Enumuser_typeFilter<"landing_page_user"> | $Enums.user_type
    country?: StringNullableFilter<"landing_page_user"> | string | null
    address?: StringNullableFilter<"landing_page_user"> | string | null
    is_verified?: BoolFilter<"landing_page_user"> | boolean
    created_at?: DateTimeFilter<"landing_page_user"> | Date | string
    updated_at?: DateTimeFilter<"landing_page_user"> | Date | string
    booking?: BookingListRelationFilter
    notifications?: NotificationsListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type landing_page_userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    passport?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    country?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    booking?: bookingOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
  }

  export type landing_page_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: landing_page_userWhereInput | landing_page_userWhereInput[]
    OR?: landing_page_userWhereInput[]
    NOT?: landing_page_userWhereInput | landing_page_userWhereInput[]
    name?: StringFilter<"landing_page_user"> | string
    last_name?: StringFilter<"landing_page_user"> | string
    passport?: StringNullableFilter<"landing_page_user"> | string | null
    phone_number?: StringFilter<"landing_page_user"> | string
    type?: Enumuser_typeFilter<"landing_page_user"> | $Enums.user_type
    country?: StringNullableFilter<"landing_page_user"> | string | null
    address?: StringNullableFilter<"landing_page_user"> | string | null
    is_verified?: BoolFilter<"landing_page_user"> | boolean
    created_at?: DateTimeFilter<"landing_page_user"> | Date | string
    updated_at?: DateTimeFilter<"landing_page_user"> | Date | string
    booking?: BookingListRelationFilter
    notifications?: NotificationsListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "id" | "email">

  export type landing_page_userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    passport?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    country?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: landing_page_userCountOrderByAggregateInput
    _avg?: landing_page_userAvgOrderByAggregateInput
    _max?: landing_page_userMaxOrderByAggregateInput
    _min?: landing_page_userMinOrderByAggregateInput
    _sum?: landing_page_userSumOrderByAggregateInput
  }

  export type landing_page_userScalarWhereWithAggregatesInput = {
    AND?: landing_page_userScalarWhereWithAggregatesInput | landing_page_userScalarWhereWithAggregatesInput[]
    OR?: landing_page_userScalarWhereWithAggregatesInput[]
    NOT?: landing_page_userScalarWhereWithAggregatesInput | landing_page_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"landing_page_user"> | number
    email?: StringWithAggregatesFilter<"landing_page_user"> | string
    name?: StringWithAggregatesFilter<"landing_page_user"> | string
    last_name?: StringWithAggregatesFilter<"landing_page_user"> | string
    passport?: StringNullableWithAggregatesFilter<"landing_page_user"> | string | null
    phone_number?: StringWithAggregatesFilter<"landing_page_user"> | string
    type?: Enumuser_typeWithAggregatesFilter<"landing_page_user"> | $Enums.user_type
    country?: StringNullableWithAggregatesFilter<"landing_page_user"> | string | null
    address?: StringNullableWithAggregatesFilter<"landing_page_user"> | string | null
    is_verified?: BoolWithAggregatesFilter<"landing_page_user"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"landing_page_user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"landing_page_user"> | Date | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntNullableFilter<"notifications"> | number | null
    admin_id?: IntNullableFilter<"notifications"> | number | null
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    is_read?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeFilter<"notifications"> | Date | string
    admin_users?: XOR<Admin_usersNullableScalarRelationFilter, admin_usersWhereInput> | null
    landing_page_user?: XOR<Landing_page_userNullableScalarRelationFilter, landing_page_userWhereInput> | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    admin_id?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    admin_users?: admin_usersOrderByWithRelationInput
    landing_page_user?: landing_page_userOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: IntNullableFilter<"notifications"> | number | null
    admin_id?: IntNullableFilter<"notifications"> | number | null
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    is_read?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeFilter<"notifications"> | Date | string
    admin_users?: XOR<Admin_usersNullableScalarRelationFilter, admin_usersWhereInput> | null
    landing_page_user?: XOR<Landing_page_userNullableScalarRelationFilter, landing_page_userWhereInput> | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    admin_id?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    user_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    admin_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    title?: StringWithAggregatesFilter<"notifications"> | string
    message?: StringWithAggregatesFilter<"notifications"> | string
    is_read?: BoolWithAggregatesFilter<"notifications"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    booking_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payments"> | string
    payment_method?: StringFilter<"payments"> | string
    payment_status?: StringFilter<"payments"> | string
    transaction_id?: StringNullableFilter<"payments"> | string | null
    payment_date?: DateTimeFilter<"payments"> | Date | string
    created_at?: DateTimeFilter<"payments"> | Date | string
    updated_at?: DateTimeFilter<"payments"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, bookingWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    booking?: bookingOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    booking_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payments"> | string
    payment_method?: StringFilter<"payments"> | string
    payment_status?: StringFilter<"payments"> | string
    transaction_id?: StringNullableFilter<"payments"> | string | null
    payment_date?: DateTimeFilter<"payments"> | Date | string
    created_at?: DateTimeFilter<"payments"> | Date | string
    updated_at?: DateTimeFilter<"payments"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, bookingWhereInput>
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    booking_id?: IntWithAggregatesFilter<"payments"> | number
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"payments"> | string
    payment_method?: StringWithAggregatesFilter<"payments"> | string
    payment_status?: StringWithAggregatesFilter<"payments"> | string
    transaction_id?: StringNullableWithAggregatesFilter<"payments"> | string | null
    payment_date?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type relation_feature_roomWhereInput = {
    AND?: relation_feature_roomWhereInput | relation_feature_roomWhereInput[]
    OR?: relation_feature_roomWhereInput[]
    NOT?: relation_feature_roomWhereInput | relation_feature_roomWhereInput[]
    id?: IntFilter<"relation_feature_room"> | number
    room_feature_id?: IntFilter<"relation_feature_room"> | number
    homestay_id?: IntFilter<"relation_feature_room"> | number
    is_available?: BoolFilter<"relation_feature_room"> | boolean
    created_at?: DateTimeFilter<"relation_feature_room"> | Date | string
    room_features?: XOR<Room_featuresScalarRelationFilter, room_featuresWhereInput>
    homestayRoom?: XOR<HomestayRoomScalarRelationFilter, homestayRoomWhereInput>
  }

  export type relation_feature_roomOrderByWithRelationInput = {
    id?: SortOrder
    room_feature_id?: SortOrder
    homestay_id?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    room_features?: room_featuresOrderByWithRelationInput
    homestayRoom?: homestayRoomOrderByWithRelationInput
  }

  export type relation_feature_roomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: relation_feature_roomWhereInput | relation_feature_roomWhereInput[]
    OR?: relation_feature_roomWhereInput[]
    NOT?: relation_feature_roomWhereInput | relation_feature_roomWhereInput[]
    room_feature_id?: IntFilter<"relation_feature_room"> | number
    homestay_id?: IntFilter<"relation_feature_room"> | number
    is_available?: BoolFilter<"relation_feature_room"> | boolean
    created_at?: DateTimeFilter<"relation_feature_room"> | Date | string
    room_features?: XOR<Room_featuresScalarRelationFilter, room_featuresWhereInput>
    homestayRoom?: XOR<HomestayRoomScalarRelationFilter, homestayRoomWhereInput>
  }, "id">

  export type relation_feature_roomOrderByWithAggregationInput = {
    id?: SortOrder
    room_feature_id?: SortOrder
    homestay_id?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    _count?: relation_feature_roomCountOrderByAggregateInput
    _avg?: relation_feature_roomAvgOrderByAggregateInput
    _max?: relation_feature_roomMaxOrderByAggregateInput
    _min?: relation_feature_roomMinOrderByAggregateInput
    _sum?: relation_feature_roomSumOrderByAggregateInput
  }

  export type relation_feature_roomScalarWhereWithAggregatesInput = {
    AND?: relation_feature_roomScalarWhereWithAggregatesInput | relation_feature_roomScalarWhereWithAggregatesInput[]
    OR?: relation_feature_roomScalarWhereWithAggregatesInput[]
    NOT?: relation_feature_roomScalarWhereWithAggregatesInput | relation_feature_roomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"relation_feature_room"> | number
    room_feature_id?: IntWithAggregatesFilter<"relation_feature_room"> | number
    homestay_id?: IntWithAggregatesFilter<"relation_feature_room"> | number
    is_available?: BoolWithAggregatesFilter<"relation_feature_room"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"relation_feature_room"> | Date | string
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    homestay_id?: IntFilter<"reviews"> | number
    room_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeFilter<"reviews"> | Date | string
    updated_at?: DateTimeFilter<"reviews"> | Date | string
    homestay?: XOR<HomestayScalarRelationFilter, homestayWhereInput>
    homestayRoom?: XOR<HomestayRoomNullableScalarRelationFilter, homestayRoomWhereInput> | null
    landing_page_user?: XOR<Landing_page_userScalarRelationFilter, landing_page_userWhereInput>
  }

  export type reviewsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    homestay_id?: SortOrder
    room_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    homestay?: homestayOrderByWithRelationInput
    homestayRoom?: homestayRoomOrderByWithRelationInput
    landing_page_user?: landing_page_userOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    user_id?: IntFilter<"reviews"> | number
    homestay_id?: IntFilter<"reviews"> | number
    room_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeFilter<"reviews"> | Date | string
    updated_at?: DateTimeFilter<"reviews"> | Date | string
    homestay?: XOR<HomestayScalarRelationFilter, homestayWhereInput>
    homestayRoom?: XOR<HomestayRoomNullableScalarRelationFilter, homestayRoomWhereInput> | null
    landing_page_user?: XOR<Landing_page_userScalarRelationFilter, landing_page_userWhereInput>
  }, "id">

  export type reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    homestay_id?: SortOrder
    room_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reviews"> | number
    user_id?: IntWithAggregatesFilter<"reviews"> | number
    homestay_id?: IntWithAggregatesFilter<"reviews"> | number
    room_id?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    rating?: IntWithAggregatesFilter<"reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"reviews"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"reviews"> | Date | string
  }

  export type room_featuresWhereInput = {
    AND?: room_featuresWhereInput | room_featuresWhereInput[]
    OR?: room_featuresWhereInput[]
    NOT?: room_featuresWhereInput | room_featuresWhereInput[]
    id?: IntFilter<"room_features"> | number
    title?: StringFilter<"room_features"> | string
    description?: StringNullableFilter<"room_features"> | string | null
    symbol?: StringNullableFilter<"room_features"> | string | null
    category?: Enumfeature_categoryFilter<"room_features"> | $Enums.feature_category
    created_at?: DateTimeFilter<"room_features"> | Date | string
    updated_at?: DateTimeFilter<"room_features"> | Date | string
    relation_feature_room?: Relation_feature_roomListRelationFilter
  }

  export type room_featuresOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    relation_feature_room?: relation_feature_roomOrderByRelationAggregateInput
  }

  export type room_featuresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: room_featuresWhereInput | room_featuresWhereInput[]
    OR?: room_featuresWhereInput[]
    NOT?: room_featuresWhereInput | room_featuresWhereInput[]
    title?: StringFilter<"room_features"> | string
    description?: StringNullableFilter<"room_features"> | string | null
    symbol?: StringNullableFilter<"room_features"> | string | null
    category?: Enumfeature_categoryFilter<"room_features"> | $Enums.feature_category
    created_at?: DateTimeFilter<"room_features"> | Date | string
    updated_at?: DateTimeFilter<"room_features"> | Date | string
    relation_feature_room?: Relation_feature_roomListRelationFilter
  }, "id">

  export type room_featuresOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: room_featuresCountOrderByAggregateInput
    _avg?: room_featuresAvgOrderByAggregateInput
    _max?: room_featuresMaxOrderByAggregateInput
    _min?: room_featuresMinOrderByAggregateInput
    _sum?: room_featuresSumOrderByAggregateInput
  }

  export type room_featuresScalarWhereWithAggregatesInput = {
    AND?: room_featuresScalarWhereWithAggregatesInput | room_featuresScalarWhereWithAggregatesInput[]
    OR?: room_featuresScalarWhereWithAggregatesInput[]
    NOT?: room_featuresScalarWhereWithAggregatesInput | room_featuresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"room_features"> | number
    title?: StringWithAggregatesFilter<"room_features"> | string
    description?: StringNullableWithAggregatesFilter<"room_features"> | string | null
    symbol?: StringNullableWithAggregatesFilter<"room_features"> | string | null
    category?: Enumfeature_categoryWithAggregatesFilter<"room_features"> | $Enums.feature_category
    created_at?: DateTimeWithAggregatesFilter<"room_features"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"room_features"> | Date | string
  }

  export type admin_usersCreateInput = {
    username: string
    password: string
    email: string
    name: string
    role?: $Enums.user_role
    is_active?: boolean
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay?: homestayCreateNestedManyWithoutAdmin_usersInput
    notifications?: notificationsCreateNestedManyWithoutAdmin_usersInput
  }

  export type admin_usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    name: string
    role?: $Enums.user_role
    is_active?: boolean
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay?: homestayUncheckedCreateNestedManyWithoutAdmin_usersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutAdmin_usersInput
  }

  export type admin_usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUpdateManyWithoutAdmin_usersNestedInput
    notifications?: notificationsUpdateManyWithoutAdmin_usersNestedInput
  }

  export type admin_usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUncheckedUpdateManyWithoutAdmin_usersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutAdmin_usersNestedInput
  }

  export type admin_usersCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    name: string
    role?: $Enums.user_role
    is_active?: boolean
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type admin_usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateInput = {
    start_date: Date | string
    end_date: Date | string
    status?: $Enums.booking_status
    is_paid?: boolean
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayRoom: homestayRoomCreateNestedOneWithoutBookingInput
    landing_page_user?: landing_page_userCreateNestedOneWithoutBookingInput
    payments?: paymentsCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    room_id: number
    status?: $Enums.booking_status
    is_paid?: boolean
    user_id?: number | null
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingUpdateInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayRoom?: homestayRoomUpdateOneRequiredWithoutBookingNestedInput
    landing_page_user?: landing_page_userUpdateOneWithoutBookingNestedInput
    payments?: paymentsUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    room_id?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingCreateManyInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    room_id: number
    status?: $Enums.booking_status
    is_paid?: boolean
    user_id?: number | null
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type bookingUpdateManyMutationInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    room_id?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admin_users: admin_usersCreateNestedOneWithoutHomestayInput
    homestayImages?: homestayImagesCreateNestedManyWithoutHomestayInput
    homestayRoom?: homestayRoomCreateNestedManyWithoutHomestayInput
    reviews?: reviewsCreateNestedManyWithoutHomestayInput
  }

  export type homestayUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    user_id: number
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayImages?: homestayImagesUncheckedCreateNestedManyWithoutHomestayInput
    homestayRoom?: homestayRoomUncheckedCreateNestedManyWithoutHomestayInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayInput
  }

  export type homestayUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin_users?: admin_usersUpdateOneRequiredWithoutHomestayNestedInput
    homestayImages?: homestayImagesUpdateManyWithoutHomestayNestedInput
    homestayRoom?: homestayRoomUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayNestedInput
  }

  export type homestayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayImages?: homestayImagesUncheckedUpdateManyWithoutHomestayNestedInput
    homestayRoom?: homestayRoomUncheckedUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayNestedInput
  }

  export type homestayCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    user_id: number
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayImagesCreateInput = {
    img_url: string
    is_primary?: boolean
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
    homestay: homestayCreateNestedOneWithoutHomestayImagesInput
  }

  export type homestayImagesUncheckedCreateInput = {
    id?: number
    img_url: string
    homestay_id: number
    is_primary?: boolean
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayImagesUpdateInput = {
    img_url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUpdateOneRequiredWithoutHomestayImagesNestedInput
  }

  export type homestayImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    homestay_id?: IntFieldUpdateOperationsInput | number
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayImagesCreateManyInput = {
    id?: number
    img_url: string
    homestay_id: number
    is_primary?: boolean
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayImagesUpdateManyMutationInput = {
    img_url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    homestay_id?: IntFieldUpdateOperationsInput | number
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayRoomCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingCreateNestedManyWithoutHomestayRoomInput
    homestay: homestayCreateNestedOneWithoutHomestayRoomInput
    relation_feature_room?: relation_feature_roomCreateNestedManyWithoutHomestayRoomInput
    reviews?: reviewsCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomUncheckedCreateInput = {
    id?: number
    homestay_id: number
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutHomestayRoomInput
    relation_feature_room?: relation_feature_roomUncheckedCreateNestedManyWithoutHomestayRoomInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutHomestayRoomNestedInput
    homestay?: homestayUpdateOneRequiredWithoutHomestayRoomNestedInput
    relation_feature_room?: relation_feature_roomUpdateManyWithoutHomestayRoomNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutHomestayRoomNestedInput
    relation_feature_room?: relation_feature_roomUncheckedUpdateManyWithoutHomestayRoomNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayRoomCreateManyInput = {
    id?: number
    homestay_id: number
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayRoomUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type landing_page_userCreateInput = {
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingCreateNestedManyWithoutLanding_page_userInput
    notifications?: notificationsCreateNestedManyWithoutLanding_page_userInput
    reviews?: reviewsCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutLanding_page_userInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutLanding_page_userInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutLanding_page_userNestedInput
    notifications?: notificationsUpdateManyWithoutLanding_page_userNestedInput
    reviews?: reviewsUpdateManyWithoutLanding_page_userNestedInput
  }

  export type landing_page_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutLanding_page_userNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutLanding_page_userNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutLanding_page_userNestedInput
  }

  export type landing_page_userCreateManyInput = {
    id?: number
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type landing_page_userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type landing_page_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateInput = {
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
    admin_users?: admin_usersCreateNestedOneWithoutNotificationsInput
    landing_page_user?: landing_page_userCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    admin_id?: number | null
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
  }

  export type notificationsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin_users?: admin_usersUpdateOneWithoutNotificationsNestedInput
    landing_page_user?: landing_page_userUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateManyInput = {
    id?: number
    user_id?: number | null
    admin_id?: number | null
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
  }

  export type notificationsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    payment_method: string
    payment_status: string
    transaction_id?: string | null
    payment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    booking: bookingCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    booking_id: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    payment_method: string
    payment_status: string
    transaction_id?: string | null
    payment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyInput = {
    id?: number
    booking_id: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    payment_method: string
    payment_status: string
    transaction_id?: string | null
    payment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relation_feature_roomCreateInput = {
    is_available?: boolean
    created_at?: Date | string
    room_features: room_featuresCreateNestedOneWithoutRelation_feature_roomInput
    homestayRoom: homestayRoomCreateNestedOneWithoutRelation_feature_roomInput
  }

  export type relation_feature_roomUncheckedCreateInput = {
    id?: number
    room_feature_id: number
    homestay_id: number
    is_available?: boolean
    created_at?: Date | string
  }

  export type relation_feature_roomUpdateInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room_features?: room_featuresUpdateOneRequiredWithoutRelation_feature_roomNestedInput
    homestayRoom?: homestayRoomUpdateOneRequiredWithoutRelation_feature_roomNestedInput
  }

  export type relation_feature_roomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_feature_id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relation_feature_roomCreateManyInput = {
    id?: number
    room_feature_id: number
    homestay_id: number
    is_available?: boolean
    created_at?: Date | string
  }

  export type relation_feature_roomUpdateManyMutationInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relation_feature_roomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_feature_id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay: homestayCreateNestedOneWithoutReviewsInput
    homestayRoom?: homestayRoomCreateNestedOneWithoutReviewsInput
    landing_page_user: landing_page_userCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    id?: number
    user_id: number
    homestay_id: number
    room_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUpdateOneRequiredWithoutReviewsNestedInput
    homestayRoom?: homestayRoomUpdateOneWithoutReviewsNestedInput
    landing_page_user?: landing_page_userUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsCreateManyInput = {
    id?: number
    user_id: number
    homestay_id: number
    room_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_featuresCreateInput = {
    title: string
    description?: string | null
    symbol?: string | null
    category: $Enums.feature_category
    created_at?: Date | string
    updated_at?: Date | string
    relation_feature_room?: relation_feature_roomCreateNestedManyWithoutRoom_featuresInput
  }

  export type room_featuresUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    symbol?: string | null
    category: $Enums.feature_category
    created_at?: Date | string
    updated_at?: Date | string
    relation_feature_room?: relation_feature_roomUncheckedCreateNestedManyWithoutRoom_featuresInput
  }

  export type room_featuresUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumfeature_categoryFieldUpdateOperationsInput | $Enums.feature_category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation_feature_room?: relation_feature_roomUpdateManyWithoutRoom_featuresNestedInput
  }

  export type room_featuresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumfeature_categoryFieldUpdateOperationsInput | $Enums.feature_category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation_feature_room?: relation_feature_roomUncheckedUpdateManyWithoutRoom_featuresNestedInput
  }

  export type room_featuresCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    symbol?: string | null
    category: $Enums.feature_category
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type room_featuresUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumfeature_categoryFieldUpdateOperationsInput | $Enums.feature_category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_featuresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumfeature_categoryFieldUpdateOperationsInput | $Enums.feature_category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type HomestayListRelationFilter = {
    every?: homestayWhereInput
    some?: homestayWhereInput
    none?: homestayWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type homestayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type admin_usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type admin_usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type admin_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type admin_usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type admin_usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type Enumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type HomestayRoomScalarRelationFilter = {
    is?: homestayRoomWhereInput
    isNot?: homestayRoomWhereInput
  }

  export type Landing_page_userNullableScalarRelationFilter = {
    is?: landing_page_userWhereInput | null
    isNot?: landing_page_userWhereInput | null
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_id?: SortOrder
    status?: SortOrder
    is_paid?: SortOrder
    user_id?: SortOrder
    booking_number?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrder
    check_in_time?: SortOrder
    check_out_time?: SortOrder
    number_of_guests?: SortOrder
    notes?: SortOrder
    special_requests?: SortOrder
    cancellation_reason?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingAvgOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    number_of_guests?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_id?: SortOrder
    status?: SortOrder
    is_paid?: SortOrder
    user_id?: SortOrder
    booking_number?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrder
    check_in_time?: SortOrder
    check_out_time?: SortOrder
    number_of_guests?: SortOrder
    notes?: SortOrder
    special_requests?: SortOrder
    cancellation_reason?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_id?: SortOrder
    status?: SortOrder
    is_paid?: SortOrder
    user_id?: SortOrder
    booking_number?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrder
    check_in_time?: SortOrder
    check_out_time?: SortOrder
    number_of_guests?: SortOrder
    notes?: SortOrder
    special_requests?: SortOrder
    cancellation_reason?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type bookingSumOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    number_of_guests?: SortOrder
  }

  export type Enumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type Enumhomestay_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.homestay_status | Enumhomestay_statusFieldRefInput<$PrismaModel>
    in?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhomestay_statusFilter<$PrismaModel> | $Enums.homestay_status
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Admin_usersScalarRelationFilter = {
    is?: admin_usersWhereInput
    isNot?: admin_usersWhereInput
  }

  export type HomestayImagesListRelationFilter = {
    every?: homestayImagesWhereInput
    some?: homestayImagesWhereInput
    none?: homestayImagesWhereInput
  }

  export type HomestayRoomListRelationFilter = {
    every?: homestayRoomWhereInput
    some?: homestayRoomWhereInput
    none?: homestayRoomWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type homestayImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type homestayRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type homestayCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    has_rooms?: SortOrder
    location?: SortOrder
    address?: SortOrder
    base_price?: SortOrder
    max_guests?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    base_price?: SortOrder
    max_guests?: SortOrder
  }

  export type homestayMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    has_rooms?: SortOrder
    location?: SortOrder
    address?: SortOrder
    base_price?: SortOrder
    max_guests?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    has_rooms?: SortOrder
    location?: SortOrder
    address?: SortOrder
    base_price?: SortOrder
    max_guests?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestaySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    base_price?: SortOrder
    max_guests?: SortOrder
  }

  export type Enumhomestay_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.homestay_status | Enumhomestay_statusFieldRefInput<$PrismaModel>
    in?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhomestay_statusWithAggregatesFilter<$PrismaModel> | $Enums.homestay_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhomestay_statusFilter<$PrismaModel>
    _max?: NestedEnumhomestay_statusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type HomestayScalarRelationFilter = {
    is?: homestayWhereInput
    isNot?: homestayWhereInput
  }

  export type homestayImagesCountOrderByAggregateInput = {
    id?: SortOrder
    img_url?: SortOrder
    homestay_id?: SortOrder
    is_primary?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    order?: SortOrder
  }

  export type homestayImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    img_url?: SortOrder
    homestay_id?: SortOrder
    is_primary?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayImagesMinOrderByAggregateInput = {
    id?: SortOrder
    img_url?: SortOrder
    homestay_id?: SortOrder
    is_primary?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayImagesSumOrderByAggregateInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    order?: SortOrder
  }

  export type Enumroom_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusFilter<$PrismaModel> | $Enums.room_status
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type Relation_feature_roomListRelationFilter = {
    every?: relation_feature_roomWhereInput
    some?: relation_feature_roomWhereInput
    none?: relation_feature_roomWhereInput
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type relation_feature_roomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type homestayRoomCountOrderByAggregateInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    room_number?: SortOrder
    number_people?: SortOrder
    max_occupancy?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    number_people?: SortOrder
    max_occupancy?: SortOrder
    price?: SortOrder
  }

  export type homestayRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    room_number?: SortOrder
    number_people?: SortOrder
    max_occupancy?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayRoomMinOrderByAggregateInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    room_number?: SortOrder
    number_people?: SortOrder
    max_occupancy?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type homestayRoomSumOrderByAggregateInput = {
    id?: SortOrder
    homestay_id?: SortOrder
    number_people?: SortOrder
    max_occupancy?: SortOrder
    price?: SortOrder
  }

  export type Enumroom_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusWithAggregatesFilter<$PrismaModel> | $Enums.room_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_statusFilter<$PrismaModel>
    _max?: NestedEnumroom_statusFilter<$PrismaModel>
  }

  export type Enumuser_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_typeFilter<$PrismaModel> | $Enums.user_type
  }

  export type landing_page_userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    passport?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    country?: SortOrder
    address?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type landing_page_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type landing_page_userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    passport?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    country?: SortOrder
    address?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type landing_page_userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    passport?: SortOrder
    phone_number?: SortOrder
    type?: SortOrder
    country?: SortOrder
    address?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type landing_page_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumuser_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_typeFilter<$PrismaModel>
  }

  export type Admin_usersNullableScalarRelationFilter = {
    is?: admin_usersWhereInput | null
    isNot?: admin_usersWhereInput | null
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    admin_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    admin_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    admin_id?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: bookingWhereInput
    isNot?: bookingWhereInput
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_id?: SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_id?: SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_id?: SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type Room_featuresScalarRelationFilter = {
    is?: room_featuresWhereInput
    isNot?: room_featuresWhereInput
  }

  export type relation_feature_roomCountOrderByAggregateInput = {
    id?: SortOrder
    room_feature_id?: SortOrder
    homestay_id?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
  }

  export type relation_feature_roomAvgOrderByAggregateInput = {
    id?: SortOrder
    room_feature_id?: SortOrder
    homestay_id?: SortOrder
  }

  export type relation_feature_roomMaxOrderByAggregateInput = {
    id?: SortOrder
    room_feature_id?: SortOrder
    homestay_id?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
  }

  export type relation_feature_roomMinOrderByAggregateInput = {
    id?: SortOrder
    room_feature_id?: SortOrder
    homestay_id?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
  }

  export type relation_feature_roomSumOrderByAggregateInput = {
    id?: SortOrder
    room_feature_id?: SortOrder
    homestay_id?: SortOrder
  }

  export type HomestayRoomNullableScalarRelationFilter = {
    is?: homestayRoomWhereInput | null
    isNot?: homestayRoomWhereInput | null
  }

  export type Landing_page_userScalarRelationFilter = {
    is?: landing_page_userWhereInput
    isNot?: landing_page_userWhereInput
  }

  export type reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    homestay_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    homestay_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    homestay_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    homestay_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    homestay_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
  }

  export type Enumfeature_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.feature_category | Enumfeature_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumfeature_categoryFilter<$PrismaModel> | $Enums.feature_category
  }

  export type room_featuresCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    symbol?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type room_featuresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type room_featuresMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    symbol?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type room_featuresMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    symbol?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type room_featuresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumfeature_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.feature_category | Enumfeature_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumfeature_categoryWithAggregatesFilter<$PrismaModel> | $Enums.feature_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfeature_categoryFilter<$PrismaModel>
    _max?: NestedEnumfeature_categoryFilter<$PrismaModel>
  }

  export type homestayCreateNestedManyWithoutAdmin_usersInput = {
    create?: XOR<homestayCreateWithoutAdmin_usersInput, homestayUncheckedCreateWithoutAdmin_usersInput> | homestayCreateWithoutAdmin_usersInput[] | homestayUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: homestayCreateOrConnectWithoutAdmin_usersInput | homestayCreateOrConnectWithoutAdmin_usersInput[]
    createMany?: homestayCreateManyAdmin_usersInputEnvelope
    connect?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutAdmin_usersInput = {
    create?: XOR<notificationsCreateWithoutAdmin_usersInput, notificationsUncheckedCreateWithoutAdmin_usersInput> | notificationsCreateWithoutAdmin_usersInput[] | notificationsUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutAdmin_usersInput | notificationsCreateOrConnectWithoutAdmin_usersInput[]
    createMany?: notificationsCreateManyAdmin_usersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type homestayUncheckedCreateNestedManyWithoutAdmin_usersInput = {
    create?: XOR<homestayCreateWithoutAdmin_usersInput, homestayUncheckedCreateWithoutAdmin_usersInput> | homestayCreateWithoutAdmin_usersInput[] | homestayUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: homestayCreateOrConnectWithoutAdmin_usersInput | homestayCreateOrConnectWithoutAdmin_usersInput[]
    createMany?: homestayCreateManyAdmin_usersInputEnvelope
    connect?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutAdmin_usersInput = {
    create?: XOR<notificationsCreateWithoutAdmin_usersInput, notificationsUncheckedCreateWithoutAdmin_usersInput> | notificationsCreateWithoutAdmin_usersInput[] | notificationsUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutAdmin_usersInput | notificationsCreateOrConnectWithoutAdmin_usersInput[]
    createMany?: notificationsCreateManyAdmin_usersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type homestayUpdateManyWithoutAdmin_usersNestedInput = {
    create?: XOR<homestayCreateWithoutAdmin_usersInput, homestayUncheckedCreateWithoutAdmin_usersInput> | homestayCreateWithoutAdmin_usersInput[] | homestayUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: homestayCreateOrConnectWithoutAdmin_usersInput | homestayCreateOrConnectWithoutAdmin_usersInput[]
    upsert?: homestayUpsertWithWhereUniqueWithoutAdmin_usersInput | homestayUpsertWithWhereUniqueWithoutAdmin_usersInput[]
    createMany?: homestayCreateManyAdmin_usersInputEnvelope
    set?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    disconnect?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    delete?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    connect?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    update?: homestayUpdateWithWhereUniqueWithoutAdmin_usersInput | homestayUpdateWithWhereUniqueWithoutAdmin_usersInput[]
    updateMany?: homestayUpdateManyWithWhereWithoutAdmin_usersInput | homestayUpdateManyWithWhereWithoutAdmin_usersInput[]
    deleteMany?: homestayScalarWhereInput | homestayScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutAdmin_usersNestedInput = {
    create?: XOR<notificationsCreateWithoutAdmin_usersInput, notificationsUncheckedCreateWithoutAdmin_usersInput> | notificationsCreateWithoutAdmin_usersInput[] | notificationsUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutAdmin_usersInput | notificationsCreateOrConnectWithoutAdmin_usersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutAdmin_usersInput | notificationsUpsertWithWhereUniqueWithoutAdmin_usersInput[]
    createMany?: notificationsCreateManyAdmin_usersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutAdmin_usersInput | notificationsUpdateWithWhereUniqueWithoutAdmin_usersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutAdmin_usersInput | notificationsUpdateManyWithWhereWithoutAdmin_usersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type homestayUncheckedUpdateManyWithoutAdmin_usersNestedInput = {
    create?: XOR<homestayCreateWithoutAdmin_usersInput, homestayUncheckedCreateWithoutAdmin_usersInput> | homestayCreateWithoutAdmin_usersInput[] | homestayUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: homestayCreateOrConnectWithoutAdmin_usersInput | homestayCreateOrConnectWithoutAdmin_usersInput[]
    upsert?: homestayUpsertWithWhereUniqueWithoutAdmin_usersInput | homestayUpsertWithWhereUniqueWithoutAdmin_usersInput[]
    createMany?: homestayCreateManyAdmin_usersInputEnvelope
    set?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    disconnect?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    delete?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    connect?: homestayWhereUniqueInput | homestayWhereUniqueInput[]
    update?: homestayUpdateWithWhereUniqueWithoutAdmin_usersInput | homestayUpdateWithWhereUniqueWithoutAdmin_usersInput[]
    updateMany?: homestayUpdateManyWithWhereWithoutAdmin_usersInput | homestayUpdateManyWithWhereWithoutAdmin_usersInput[]
    deleteMany?: homestayScalarWhereInput | homestayScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutAdmin_usersNestedInput = {
    create?: XOR<notificationsCreateWithoutAdmin_usersInput, notificationsUncheckedCreateWithoutAdmin_usersInput> | notificationsCreateWithoutAdmin_usersInput[] | notificationsUncheckedCreateWithoutAdmin_usersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutAdmin_usersInput | notificationsCreateOrConnectWithoutAdmin_usersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutAdmin_usersInput | notificationsUpsertWithWhereUniqueWithoutAdmin_usersInput[]
    createMany?: notificationsCreateManyAdmin_usersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutAdmin_usersInput | notificationsUpdateWithWhereUniqueWithoutAdmin_usersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutAdmin_usersInput | notificationsUpdateManyWithWhereWithoutAdmin_usersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type homestayRoomCreateNestedOneWithoutBookingInput = {
    create?: XOR<homestayRoomCreateWithoutBookingInput, homestayRoomUncheckedCreateWithoutBookingInput>
    connectOrCreate?: homestayRoomCreateOrConnectWithoutBookingInput
    connect?: homestayRoomWhereUniqueInput
  }

  export type landing_page_userCreateNestedOneWithoutBookingInput = {
    create?: XOR<landing_page_userCreateWithoutBookingInput, landing_page_userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: landing_page_userCreateOrConnectWithoutBookingInput
    connect?: landing_page_userWhereUniqueInput
  }

  export type paymentsCreateNestedManyWithoutBookingInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type Enumbooking_statusFieldUpdateOperationsInput = {
    set?: $Enums.booking_status
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type homestayRoomUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<homestayRoomCreateWithoutBookingInput, homestayRoomUncheckedCreateWithoutBookingInput>
    connectOrCreate?: homestayRoomCreateOrConnectWithoutBookingInput
    upsert?: homestayRoomUpsertWithoutBookingInput
    connect?: homestayRoomWhereUniqueInput
    update?: XOR<XOR<homestayRoomUpdateToOneWithWhereWithoutBookingInput, homestayRoomUpdateWithoutBookingInput>, homestayRoomUncheckedUpdateWithoutBookingInput>
  }

  export type landing_page_userUpdateOneWithoutBookingNestedInput = {
    create?: XOR<landing_page_userCreateWithoutBookingInput, landing_page_userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: landing_page_userCreateOrConnectWithoutBookingInput
    upsert?: landing_page_userUpsertWithoutBookingInput
    disconnect?: landing_page_userWhereInput | boolean
    delete?: landing_page_userWhereInput | boolean
    connect?: landing_page_userWhereUniqueInput
    update?: XOR<XOR<landing_page_userUpdateToOneWithWhereWithoutBookingInput, landing_page_userUpdateWithoutBookingInput>, landing_page_userUncheckedUpdateWithoutBookingInput>
  }

  export type paymentsUpdateManyWithoutBookingNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutBookingInput | paymentsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutBookingInput | paymentsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutBookingInput | paymentsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type paymentsUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput> | paymentsCreateWithoutBookingInput[] | paymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingInput | paymentsCreateOrConnectWithoutBookingInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutBookingInput | paymentsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: paymentsCreateManyBookingInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutBookingInput | paymentsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutBookingInput | paymentsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type admin_usersCreateNestedOneWithoutHomestayInput = {
    create?: XOR<admin_usersCreateWithoutHomestayInput, admin_usersUncheckedCreateWithoutHomestayInput>
    connectOrCreate?: admin_usersCreateOrConnectWithoutHomestayInput
    connect?: admin_usersWhereUniqueInput
  }

  export type homestayImagesCreateNestedManyWithoutHomestayInput = {
    create?: XOR<homestayImagesCreateWithoutHomestayInput, homestayImagesUncheckedCreateWithoutHomestayInput> | homestayImagesCreateWithoutHomestayInput[] | homestayImagesUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayImagesCreateOrConnectWithoutHomestayInput | homestayImagesCreateOrConnectWithoutHomestayInput[]
    createMany?: homestayImagesCreateManyHomestayInputEnvelope
    connect?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
  }

  export type homestayRoomCreateNestedManyWithoutHomestayInput = {
    create?: XOR<homestayRoomCreateWithoutHomestayInput, homestayRoomUncheckedCreateWithoutHomestayInput> | homestayRoomCreateWithoutHomestayInput[] | homestayRoomUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayRoomCreateOrConnectWithoutHomestayInput | homestayRoomCreateOrConnectWithoutHomestayInput[]
    createMany?: homestayRoomCreateManyHomestayInputEnvelope
    connect?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutHomestayInput = {
    create?: XOR<reviewsCreateWithoutHomestayInput, reviewsUncheckedCreateWithoutHomestayInput> | reviewsCreateWithoutHomestayInput[] | reviewsUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayInput | reviewsCreateOrConnectWithoutHomestayInput[]
    createMany?: reviewsCreateManyHomestayInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type homestayImagesUncheckedCreateNestedManyWithoutHomestayInput = {
    create?: XOR<homestayImagesCreateWithoutHomestayInput, homestayImagesUncheckedCreateWithoutHomestayInput> | homestayImagesCreateWithoutHomestayInput[] | homestayImagesUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayImagesCreateOrConnectWithoutHomestayInput | homestayImagesCreateOrConnectWithoutHomestayInput[]
    createMany?: homestayImagesCreateManyHomestayInputEnvelope
    connect?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
  }

  export type homestayRoomUncheckedCreateNestedManyWithoutHomestayInput = {
    create?: XOR<homestayRoomCreateWithoutHomestayInput, homestayRoomUncheckedCreateWithoutHomestayInput> | homestayRoomCreateWithoutHomestayInput[] | homestayRoomUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayRoomCreateOrConnectWithoutHomestayInput | homestayRoomCreateOrConnectWithoutHomestayInput[]
    createMany?: homestayRoomCreateManyHomestayInputEnvelope
    connect?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutHomestayInput = {
    create?: XOR<reviewsCreateWithoutHomestayInput, reviewsUncheckedCreateWithoutHomestayInput> | reviewsCreateWithoutHomestayInput[] | reviewsUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayInput | reviewsCreateOrConnectWithoutHomestayInput[]
    createMany?: reviewsCreateManyHomestayInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type Enumhomestay_statusFieldUpdateOperationsInput = {
    set?: $Enums.homestay_status
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type admin_usersUpdateOneRequiredWithoutHomestayNestedInput = {
    create?: XOR<admin_usersCreateWithoutHomestayInput, admin_usersUncheckedCreateWithoutHomestayInput>
    connectOrCreate?: admin_usersCreateOrConnectWithoutHomestayInput
    upsert?: admin_usersUpsertWithoutHomestayInput
    connect?: admin_usersWhereUniqueInput
    update?: XOR<XOR<admin_usersUpdateToOneWithWhereWithoutHomestayInput, admin_usersUpdateWithoutHomestayInput>, admin_usersUncheckedUpdateWithoutHomestayInput>
  }

  export type homestayImagesUpdateManyWithoutHomestayNestedInput = {
    create?: XOR<homestayImagesCreateWithoutHomestayInput, homestayImagesUncheckedCreateWithoutHomestayInput> | homestayImagesCreateWithoutHomestayInput[] | homestayImagesUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayImagesCreateOrConnectWithoutHomestayInput | homestayImagesCreateOrConnectWithoutHomestayInput[]
    upsert?: homestayImagesUpsertWithWhereUniqueWithoutHomestayInput | homestayImagesUpsertWithWhereUniqueWithoutHomestayInput[]
    createMany?: homestayImagesCreateManyHomestayInputEnvelope
    set?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    disconnect?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    delete?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    connect?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    update?: homestayImagesUpdateWithWhereUniqueWithoutHomestayInput | homestayImagesUpdateWithWhereUniqueWithoutHomestayInput[]
    updateMany?: homestayImagesUpdateManyWithWhereWithoutHomestayInput | homestayImagesUpdateManyWithWhereWithoutHomestayInput[]
    deleteMany?: homestayImagesScalarWhereInput | homestayImagesScalarWhereInput[]
  }

  export type homestayRoomUpdateManyWithoutHomestayNestedInput = {
    create?: XOR<homestayRoomCreateWithoutHomestayInput, homestayRoomUncheckedCreateWithoutHomestayInput> | homestayRoomCreateWithoutHomestayInput[] | homestayRoomUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayRoomCreateOrConnectWithoutHomestayInput | homestayRoomCreateOrConnectWithoutHomestayInput[]
    upsert?: homestayRoomUpsertWithWhereUniqueWithoutHomestayInput | homestayRoomUpsertWithWhereUniqueWithoutHomestayInput[]
    createMany?: homestayRoomCreateManyHomestayInputEnvelope
    set?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    disconnect?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    delete?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    connect?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    update?: homestayRoomUpdateWithWhereUniqueWithoutHomestayInput | homestayRoomUpdateWithWhereUniqueWithoutHomestayInput[]
    updateMany?: homestayRoomUpdateManyWithWhereWithoutHomestayInput | homestayRoomUpdateManyWithWhereWithoutHomestayInput[]
    deleteMany?: homestayRoomScalarWhereInput | homestayRoomScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutHomestayNestedInput = {
    create?: XOR<reviewsCreateWithoutHomestayInput, reviewsUncheckedCreateWithoutHomestayInput> | reviewsCreateWithoutHomestayInput[] | reviewsUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayInput | reviewsCreateOrConnectWithoutHomestayInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutHomestayInput | reviewsUpsertWithWhereUniqueWithoutHomestayInput[]
    createMany?: reviewsCreateManyHomestayInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutHomestayInput | reviewsUpdateWithWhereUniqueWithoutHomestayInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutHomestayInput | reviewsUpdateManyWithWhereWithoutHomestayInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type homestayImagesUncheckedUpdateManyWithoutHomestayNestedInput = {
    create?: XOR<homestayImagesCreateWithoutHomestayInput, homestayImagesUncheckedCreateWithoutHomestayInput> | homestayImagesCreateWithoutHomestayInput[] | homestayImagesUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayImagesCreateOrConnectWithoutHomestayInput | homestayImagesCreateOrConnectWithoutHomestayInput[]
    upsert?: homestayImagesUpsertWithWhereUniqueWithoutHomestayInput | homestayImagesUpsertWithWhereUniqueWithoutHomestayInput[]
    createMany?: homestayImagesCreateManyHomestayInputEnvelope
    set?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    disconnect?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    delete?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    connect?: homestayImagesWhereUniqueInput | homestayImagesWhereUniqueInput[]
    update?: homestayImagesUpdateWithWhereUniqueWithoutHomestayInput | homestayImagesUpdateWithWhereUniqueWithoutHomestayInput[]
    updateMany?: homestayImagesUpdateManyWithWhereWithoutHomestayInput | homestayImagesUpdateManyWithWhereWithoutHomestayInput[]
    deleteMany?: homestayImagesScalarWhereInput | homestayImagesScalarWhereInput[]
  }

  export type homestayRoomUncheckedUpdateManyWithoutHomestayNestedInput = {
    create?: XOR<homestayRoomCreateWithoutHomestayInput, homestayRoomUncheckedCreateWithoutHomestayInput> | homestayRoomCreateWithoutHomestayInput[] | homestayRoomUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: homestayRoomCreateOrConnectWithoutHomestayInput | homestayRoomCreateOrConnectWithoutHomestayInput[]
    upsert?: homestayRoomUpsertWithWhereUniqueWithoutHomestayInput | homestayRoomUpsertWithWhereUniqueWithoutHomestayInput[]
    createMany?: homestayRoomCreateManyHomestayInputEnvelope
    set?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    disconnect?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    delete?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    connect?: homestayRoomWhereUniqueInput | homestayRoomWhereUniqueInput[]
    update?: homestayRoomUpdateWithWhereUniqueWithoutHomestayInput | homestayRoomUpdateWithWhereUniqueWithoutHomestayInput[]
    updateMany?: homestayRoomUpdateManyWithWhereWithoutHomestayInput | homestayRoomUpdateManyWithWhereWithoutHomestayInput[]
    deleteMany?: homestayRoomScalarWhereInput | homestayRoomScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutHomestayNestedInput = {
    create?: XOR<reviewsCreateWithoutHomestayInput, reviewsUncheckedCreateWithoutHomestayInput> | reviewsCreateWithoutHomestayInput[] | reviewsUncheckedCreateWithoutHomestayInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayInput | reviewsCreateOrConnectWithoutHomestayInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutHomestayInput | reviewsUpsertWithWhereUniqueWithoutHomestayInput[]
    createMany?: reviewsCreateManyHomestayInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutHomestayInput | reviewsUpdateWithWhereUniqueWithoutHomestayInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutHomestayInput | reviewsUpdateManyWithWhereWithoutHomestayInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type homestayCreateNestedOneWithoutHomestayImagesInput = {
    create?: XOR<homestayCreateWithoutHomestayImagesInput, homestayUncheckedCreateWithoutHomestayImagesInput>
    connectOrCreate?: homestayCreateOrConnectWithoutHomestayImagesInput
    connect?: homestayWhereUniqueInput
  }

  export type homestayUpdateOneRequiredWithoutHomestayImagesNestedInput = {
    create?: XOR<homestayCreateWithoutHomestayImagesInput, homestayUncheckedCreateWithoutHomestayImagesInput>
    connectOrCreate?: homestayCreateOrConnectWithoutHomestayImagesInput
    upsert?: homestayUpsertWithoutHomestayImagesInput
    connect?: homestayWhereUniqueInput
    update?: XOR<XOR<homestayUpdateToOneWithWhereWithoutHomestayImagesInput, homestayUpdateWithoutHomestayImagesInput>, homestayUncheckedUpdateWithoutHomestayImagesInput>
  }

  export type bookingCreateNestedManyWithoutHomestayRoomInput = {
    create?: XOR<bookingCreateWithoutHomestayRoomInput, bookingUncheckedCreateWithoutHomestayRoomInput> | bookingCreateWithoutHomestayRoomInput[] | bookingUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutHomestayRoomInput | bookingCreateOrConnectWithoutHomestayRoomInput[]
    createMany?: bookingCreateManyHomestayRoomInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type homestayCreateNestedOneWithoutHomestayRoomInput = {
    create?: XOR<homestayCreateWithoutHomestayRoomInput, homestayUncheckedCreateWithoutHomestayRoomInput>
    connectOrCreate?: homestayCreateOrConnectWithoutHomestayRoomInput
    connect?: homestayWhereUniqueInput
  }

  export type relation_feature_roomCreateNestedManyWithoutHomestayRoomInput = {
    create?: XOR<relation_feature_roomCreateWithoutHomestayRoomInput, relation_feature_roomUncheckedCreateWithoutHomestayRoomInput> | relation_feature_roomCreateWithoutHomestayRoomInput[] | relation_feature_roomUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutHomestayRoomInput | relation_feature_roomCreateOrConnectWithoutHomestayRoomInput[]
    createMany?: relation_feature_roomCreateManyHomestayRoomInputEnvelope
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutHomestayRoomInput = {
    create?: XOR<reviewsCreateWithoutHomestayRoomInput, reviewsUncheckedCreateWithoutHomestayRoomInput> | reviewsCreateWithoutHomestayRoomInput[] | reviewsUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayRoomInput | reviewsCreateOrConnectWithoutHomestayRoomInput[]
    createMany?: reviewsCreateManyHomestayRoomInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutHomestayRoomInput = {
    create?: XOR<bookingCreateWithoutHomestayRoomInput, bookingUncheckedCreateWithoutHomestayRoomInput> | bookingCreateWithoutHomestayRoomInput[] | bookingUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutHomestayRoomInput | bookingCreateOrConnectWithoutHomestayRoomInput[]
    createMany?: bookingCreateManyHomestayRoomInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type relation_feature_roomUncheckedCreateNestedManyWithoutHomestayRoomInput = {
    create?: XOR<relation_feature_roomCreateWithoutHomestayRoomInput, relation_feature_roomUncheckedCreateWithoutHomestayRoomInput> | relation_feature_roomCreateWithoutHomestayRoomInput[] | relation_feature_roomUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutHomestayRoomInput | relation_feature_roomCreateOrConnectWithoutHomestayRoomInput[]
    createMany?: relation_feature_roomCreateManyHomestayRoomInputEnvelope
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutHomestayRoomInput = {
    create?: XOR<reviewsCreateWithoutHomestayRoomInput, reviewsUncheckedCreateWithoutHomestayRoomInput> | reviewsCreateWithoutHomestayRoomInput[] | reviewsUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayRoomInput | reviewsCreateOrConnectWithoutHomestayRoomInput[]
    createMany?: reviewsCreateManyHomestayRoomInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type Enumroom_statusFieldUpdateOperationsInput = {
    set?: $Enums.room_status
  }

  export type bookingUpdateManyWithoutHomestayRoomNestedInput = {
    create?: XOR<bookingCreateWithoutHomestayRoomInput, bookingUncheckedCreateWithoutHomestayRoomInput> | bookingCreateWithoutHomestayRoomInput[] | bookingUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutHomestayRoomInput | bookingCreateOrConnectWithoutHomestayRoomInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutHomestayRoomInput | bookingUpsertWithWhereUniqueWithoutHomestayRoomInput[]
    createMany?: bookingCreateManyHomestayRoomInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutHomestayRoomInput | bookingUpdateWithWhereUniqueWithoutHomestayRoomInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutHomestayRoomInput | bookingUpdateManyWithWhereWithoutHomestayRoomInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type homestayUpdateOneRequiredWithoutHomestayRoomNestedInput = {
    create?: XOR<homestayCreateWithoutHomestayRoomInput, homestayUncheckedCreateWithoutHomestayRoomInput>
    connectOrCreate?: homestayCreateOrConnectWithoutHomestayRoomInput
    upsert?: homestayUpsertWithoutHomestayRoomInput
    connect?: homestayWhereUniqueInput
    update?: XOR<XOR<homestayUpdateToOneWithWhereWithoutHomestayRoomInput, homestayUpdateWithoutHomestayRoomInput>, homestayUncheckedUpdateWithoutHomestayRoomInput>
  }

  export type relation_feature_roomUpdateManyWithoutHomestayRoomNestedInput = {
    create?: XOR<relation_feature_roomCreateWithoutHomestayRoomInput, relation_feature_roomUncheckedCreateWithoutHomestayRoomInput> | relation_feature_roomCreateWithoutHomestayRoomInput[] | relation_feature_roomUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutHomestayRoomInput | relation_feature_roomCreateOrConnectWithoutHomestayRoomInput[]
    upsert?: relation_feature_roomUpsertWithWhereUniqueWithoutHomestayRoomInput | relation_feature_roomUpsertWithWhereUniqueWithoutHomestayRoomInput[]
    createMany?: relation_feature_roomCreateManyHomestayRoomInputEnvelope
    set?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    disconnect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    delete?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    update?: relation_feature_roomUpdateWithWhereUniqueWithoutHomestayRoomInput | relation_feature_roomUpdateWithWhereUniqueWithoutHomestayRoomInput[]
    updateMany?: relation_feature_roomUpdateManyWithWhereWithoutHomestayRoomInput | relation_feature_roomUpdateManyWithWhereWithoutHomestayRoomInput[]
    deleteMany?: relation_feature_roomScalarWhereInput | relation_feature_roomScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutHomestayRoomNestedInput = {
    create?: XOR<reviewsCreateWithoutHomestayRoomInput, reviewsUncheckedCreateWithoutHomestayRoomInput> | reviewsCreateWithoutHomestayRoomInput[] | reviewsUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayRoomInput | reviewsCreateOrConnectWithoutHomestayRoomInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutHomestayRoomInput | reviewsUpsertWithWhereUniqueWithoutHomestayRoomInput[]
    createMany?: reviewsCreateManyHomestayRoomInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutHomestayRoomInput | reviewsUpdateWithWhereUniqueWithoutHomestayRoomInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutHomestayRoomInput | reviewsUpdateManyWithWhereWithoutHomestayRoomInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutHomestayRoomNestedInput = {
    create?: XOR<bookingCreateWithoutHomestayRoomInput, bookingUncheckedCreateWithoutHomestayRoomInput> | bookingCreateWithoutHomestayRoomInput[] | bookingUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutHomestayRoomInput | bookingCreateOrConnectWithoutHomestayRoomInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutHomestayRoomInput | bookingUpsertWithWhereUniqueWithoutHomestayRoomInput[]
    createMany?: bookingCreateManyHomestayRoomInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutHomestayRoomInput | bookingUpdateWithWhereUniqueWithoutHomestayRoomInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutHomestayRoomInput | bookingUpdateManyWithWhereWithoutHomestayRoomInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type relation_feature_roomUncheckedUpdateManyWithoutHomestayRoomNestedInput = {
    create?: XOR<relation_feature_roomCreateWithoutHomestayRoomInput, relation_feature_roomUncheckedCreateWithoutHomestayRoomInput> | relation_feature_roomCreateWithoutHomestayRoomInput[] | relation_feature_roomUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutHomestayRoomInput | relation_feature_roomCreateOrConnectWithoutHomestayRoomInput[]
    upsert?: relation_feature_roomUpsertWithWhereUniqueWithoutHomestayRoomInput | relation_feature_roomUpsertWithWhereUniqueWithoutHomestayRoomInput[]
    createMany?: relation_feature_roomCreateManyHomestayRoomInputEnvelope
    set?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    disconnect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    delete?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    update?: relation_feature_roomUpdateWithWhereUniqueWithoutHomestayRoomInput | relation_feature_roomUpdateWithWhereUniqueWithoutHomestayRoomInput[]
    updateMany?: relation_feature_roomUpdateManyWithWhereWithoutHomestayRoomInput | relation_feature_roomUpdateManyWithWhereWithoutHomestayRoomInput[]
    deleteMany?: relation_feature_roomScalarWhereInput | relation_feature_roomScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutHomestayRoomNestedInput = {
    create?: XOR<reviewsCreateWithoutHomestayRoomInput, reviewsUncheckedCreateWithoutHomestayRoomInput> | reviewsCreateWithoutHomestayRoomInput[] | reviewsUncheckedCreateWithoutHomestayRoomInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutHomestayRoomInput | reviewsCreateOrConnectWithoutHomestayRoomInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutHomestayRoomInput | reviewsUpsertWithWhereUniqueWithoutHomestayRoomInput[]
    createMany?: reviewsCreateManyHomestayRoomInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutHomestayRoomInput | reviewsUpdateWithWhereUniqueWithoutHomestayRoomInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutHomestayRoomInput | reviewsUpdateManyWithWhereWithoutHomestayRoomInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type bookingCreateNestedManyWithoutLanding_page_userInput = {
    create?: XOR<bookingCreateWithoutLanding_page_userInput, bookingUncheckedCreateWithoutLanding_page_userInput> | bookingCreateWithoutLanding_page_userInput[] | bookingUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutLanding_page_userInput | bookingCreateOrConnectWithoutLanding_page_userInput[]
    createMany?: bookingCreateManyLanding_page_userInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutLanding_page_userInput = {
    create?: XOR<notificationsCreateWithoutLanding_page_userInput, notificationsUncheckedCreateWithoutLanding_page_userInput> | notificationsCreateWithoutLanding_page_userInput[] | notificationsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutLanding_page_userInput | notificationsCreateOrConnectWithoutLanding_page_userInput[]
    createMany?: notificationsCreateManyLanding_page_userInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutLanding_page_userInput = {
    create?: XOR<reviewsCreateWithoutLanding_page_userInput, reviewsUncheckedCreateWithoutLanding_page_userInput> | reviewsCreateWithoutLanding_page_userInput[] | reviewsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutLanding_page_userInput | reviewsCreateOrConnectWithoutLanding_page_userInput[]
    createMany?: reviewsCreateManyLanding_page_userInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutLanding_page_userInput = {
    create?: XOR<bookingCreateWithoutLanding_page_userInput, bookingUncheckedCreateWithoutLanding_page_userInput> | bookingCreateWithoutLanding_page_userInput[] | bookingUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutLanding_page_userInput | bookingCreateOrConnectWithoutLanding_page_userInput[]
    createMany?: bookingCreateManyLanding_page_userInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutLanding_page_userInput = {
    create?: XOR<notificationsCreateWithoutLanding_page_userInput, notificationsUncheckedCreateWithoutLanding_page_userInput> | notificationsCreateWithoutLanding_page_userInput[] | notificationsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutLanding_page_userInput | notificationsCreateOrConnectWithoutLanding_page_userInput[]
    createMany?: notificationsCreateManyLanding_page_userInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutLanding_page_userInput = {
    create?: XOR<reviewsCreateWithoutLanding_page_userInput, reviewsUncheckedCreateWithoutLanding_page_userInput> | reviewsCreateWithoutLanding_page_userInput[] | reviewsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutLanding_page_userInput | reviewsCreateOrConnectWithoutLanding_page_userInput[]
    createMany?: reviewsCreateManyLanding_page_userInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type Enumuser_typeFieldUpdateOperationsInput = {
    set?: $Enums.user_type
  }

  export type bookingUpdateManyWithoutLanding_page_userNestedInput = {
    create?: XOR<bookingCreateWithoutLanding_page_userInput, bookingUncheckedCreateWithoutLanding_page_userInput> | bookingCreateWithoutLanding_page_userInput[] | bookingUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutLanding_page_userInput | bookingCreateOrConnectWithoutLanding_page_userInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutLanding_page_userInput | bookingUpsertWithWhereUniqueWithoutLanding_page_userInput[]
    createMany?: bookingCreateManyLanding_page_userInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutLanding_page_userInput | bookingUpdateWithWhereUniqueWithoutLanding_page_userInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutLanding_page_userInput | bookingUpdateManyWithWhereWithoutLanding_page_userInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutLanding_page_userNestedInput = {
    create?: XOR<notificationsCreateWithoutLanding_page_userInput, notificationsUncheckedCreateWithoutLanding_page_userInput> | notificationsCreateWithoutLanding_page_userInput[] | notificationsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutLanding_page_userInput | notificationsCreateOrConnectWithoutLanding_page_userInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutLanding_page_userInput | notificationsUpsertWithWhereUniqueWithoutLanding_page_userInput[]
    createMany?: notificationsCreateManyLanding_page_userInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutLanding_page_userInput | notificationsUpdateWithWhereUniqueWithoutLanding_page_userInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutLanding_page_userInput | notificationsUpdateManyWithWhereWithoutLanding_page_userInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutLanding_page_userNestedInput = {
    create?: XOR<reviewsCreateWithoutLanding_page_userInput, reviewsUncheckedCreateWithoutLanding_page_userInput> | reviewsCreateWithoutLanding_page_userInput[] | reviewsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutLanding_page_userInput | reviewsCreateOrConnectWithoutLanding_page_userInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutLanding_page_userInput | reviewsUpsertWithWhereUniqueWithoutLanding_page_userInput[]
    createMany?: reviewsCreateManyLanding_page_userInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutLanding_page_userInput | reviewsUpdateWithWhereUniqueWithoutLanding_page_userInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutLanding_page_userInput | reviewsUpdateManyWithWhereWithoutLanding_page_userInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutLanding_page_userNestedInput = {
    create?: XOR<bookingCreateWithoutLanding_page_userInput, bookingUncheckedCreateWithoutLanding_page_userInput> | bookingCreateWithoutLanding_page_userInput[] | bookingUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutLanding_page_userInput | bookingCreateOrConnectWithoutLanding_page_userInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutLanding_page_userInput | bookingUpsertWithWhereUniqueWithoutLanding_page_userInput[]
    createMany?: bookingCreateManyLanding_page_userInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutLanding_page_userInput | bookingUpdateWithWhereUniqueWithoutLanding_page_userInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutLanding_page_userInput | bookingUpdateManyWithWhereWithoutLanding_page_userInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutLanding_page_userNestedInput = {
    create?: XOR<notificationsCreateWithoutLanding_page_userInput, notificationsUncheckedCreateWithoutLanding_page_userInput> | notificationsCreateWithoutLanding_page_userInput[] | notificationsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutLanding_page_userInput | notificationsCreateOrConnectWithoutLanding_page_userInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutLanding_page_userInput | notificationsUpsertWithWhereUniqueWithoutLanding_page_userInput[]
    createMany?: notificationsCreateManyLanding_page_userInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutLanding_page_userInput | notificationsUpdateWithWhereUniqueWithoutLanding_page_userInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutLanding_page_userInput | notificationsUpdateManyWithWhereWithoutLanding_page_userInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutLanding_page_userNestedInput = {
    create?: XOR<reviewsCreateWithoutLanding_page_userInput, reviewsUncheckedCreateWithoutLanding_page_userInput> | reviewsCreateWithoutLanding_page_userInput[] | reviewsUncheckedCreateWithoutLanding_page_userInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutLanding_page_userInput | reviewsCreateOrConnectWithoutLanding_page_userInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutLanding_page_userInput | reviewsUpsertWithWhereUniqueWithoutLanding_page_userInput[]
    createMany?: reviewsCreateManyLanding_page_userInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutLanding_page_userInput | reviewsUpdateWithWhereUniqueWithoutLanding_page_userInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutLanding_page_userInput | reviewsUpdateManyWithWhereWithoutLanding_page_userInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type admin_usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<admin_usersCreateWithoutNotificationsInput, admin_usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: admin_usersCreateOrConnectWithoutNotificationsInput
    connect?: admin_usersWhereUniqueInput
  }

  export type landing_page_userCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<landing_page_userCreateWithoutNotificationsInput, landing_page_userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: landing_page_userCreateOrConnectWithoutNotificationsInput
    connect?: landing_page_userWhereUniqueInput
  }

  export type admin_usersUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<admin_usersCreateWithoutNotificationsInput, admin_usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: admin_usersCreateOrConnectWithoutNotificationsInput
    upsert?: admin_usersUpsertWithoutNotificationsInput
    disconnect?: admin_usersWhereInput | boolean
    delete?: admin_usersWhereInput | boolean
    connect?: admin_usersWhereUniqueInput
    update?: XOR<XOR<admin_usersUpdateToOneWithWhereWithoutNotificationsInput, admin_usersUpdateWithoutNotificationsInput>, admin_usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type landing_page_userUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<landing_page_userCreateWithoutNotificationsInput, landing_page_userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: landing_page_userCreateOrConnectWithoutNotificationsInput
    upsert?: landing_page_userUpsertWithoutNotificationsInput
    disconnect?: landing_page_userWhereInput | boolean
    delete?: landing_page_userWhereInput | boolean
    connect?: landing_page_userWhereUniqueInput
    update?: XOR<XOR<landing_page_userUpdateToOneWithWhereWithoutNotificationsInput, landing_page_userUpdateWithoutNotificationsInput>, landing_page_userUncheckedUpdateWithoutNotificationsInput>
  }

  export type bookingCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<bookingCreateWithoutPaymentsInput, bookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingCreateOrConnectWithoutPaymentsInput
    connect?: bookingWhereUniqueInput
  }

  export type bookingUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<bookingCreateWithoutPaymentsInput, bookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingCreateOrConnectWithoutPaymentsInput
    upsert?: bookingUpsertWithoutPaymentsInput
    connect?: bookingWhereUniqueInput
    update?: XOR<XOR<bookingUpdateToOneWithWhereWithoutPaymentsInput, bookingUpdateWithoutPaymentsInput>, bookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type room_featuresCreateNestedOneWithoutRelation_feature_roomInput = {
    create?: XOR<room_featuresCreateWithoutRelation_feature_roomInput, room_featuresUncheckedCreateWithoutRelation_feature_roomInput>
    connectOrCreate?: room_featuresCreateOrConnectWithoutRelation_feature_roomInput
    connect?: room_featuresWhereUniqueInput
  }

  export type homestayRoomCreateNestedOneWithoutRelation_feature_roomInput = {
    create?: XOR<homestayRoomCreateWithoutRelation_feature_roomInput, homestayRoomUncheckedCreateWithoutRelation_feature_roomInput>
    connectOrCreate?: homestayRoomCreateOrConnectWithoutRelation_feature_roomInput
    connect?: homestayRoomWhereUniqueInput
  }

  export type room_featuresUpdateOneRequiredWithoutRelation_feature_roomNestedInput = {
    create?: XOR<room_featuresCreateWithoutRelation_feature_roomInput, room_featuresUncheckedCreateWithoutRelation_feature_roomInput>
    connectOrCreate?: room_featuresCreateOrConnectWithoutRelation_feature_roomInput
    upsert?: room_featuresUpsertWithoutRelation_feature_roomInput
    connect?: room_featuresWhereUniqueInput
    update?: XOR<XOR<room_featuresUpdateToOneWithWhereWithoutRelation_feature_roomInput, room_featuresUpdateWithoutRelation_feature_roomInput>, room_featuresUncheckedUpdateWithoutRelation_feature_roomInput>
  }

  export type homestayRoomUpdateOneRequiredWithoutRelation_feature_roomNestedInput = {
    create?: XOR<homestayRoomCreateWithoutRelation_feature_roomInput, homestayRoomUncheckedCreateWithoutRelation_feature_roomInput>
    connectOrCreate?: homestayRoomCreateOrConnectWithoutRelation_feature_roomInput
    upsert?: homestayRoomUpsertWithoutRelation_feature_roomInput
    connect?: homestayRoomWhereUniqueInput
    update?: XOR<XOR<homestayRoomUpdateToOneWithWhereWithoutRelation_feature_roomInput, homestayRoomUpdateWithoutRelation_feature_roomInput>, homestayRoomUncheckedUpdateWithoutRelation_feature_roomInput>
  }

  export type homestayCreateNestedOneWithoutReviewsInput = {
    create?: XOR<homestayCreateWithoutReviewsInput, homestayUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: homestayCreateOrConnectWithoutReviewsInput
    connect?: homestayWhereUniqueInput
  }

  export type homestayRoomCreateNestedOneWithoutReviewsInput = {
    create?: XOR<homestayRoomCreateWithoutReviewsInput, homestayRoomUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: homestayRoomCreateOrConnectWithoutReviewsInput
    connect?: homestayRoomWhereUniqueInput
  }

  export type landing_page_userCreateNestedOneWithoutReviewsInput = {
    create?: XOR<landing_page_userCreateWithoutReviewsInput, landing_page_userUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: landing_page_userCreateOrConnectWithoutReviewsInput
    connect?: landing_page_userWhereUniqueInput
  }

  export type homestayUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<homestayCreateWithoutReviewsInput, homestayUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: homestayCreateOrConnectWithoutReviewsInput
    upsert?: homestayUpsertWithoutReviewsInput
    connect?: homestayWhereUniqueInput
    update?: XOR<XOR<homestayUpdateToOneWithWhereWithoutReviewsInput, homestayUpdateWithoutReviewsInput>, homestayUncheckedUpdateWithoutReviewsInput>
  }

  export type homestayRoomUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<homestayRoomCreateWithoutReviewsInput, homestayRoomUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: homestayRoomCreateOrConnectWithoutReviewsInput
    upsert?: homestayRoomUpsertWithoutReviewsInput
    disconnect?: homestayRoomWhereInput | boolean
    delete?: homestayRoomWhereInput | boolean
    connect?: homestayRoomWhereUniqueInput
    update?: XOR<XOR<homestayRoomUpdateToOneWithWhereWithoutReviewsInput, homestayRoomUpdateWithoutReviewsInput>, homestayRoomUncheckedUpdateWithoutReviewsInput>
  }

  export type landing_page_userUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<landing_page_userCreateWithoutReviewsInput, landing_page_userUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: landing_page_userCreateOrConnectWithoutReviewsInput
    upsert?: landing_page_userUpsertWithoutReviewsInput
    connect?: landing_page_userWhereUniqueInput
    update?: XOR<XOR<landing_page_userUpdateToOneWithWhereWithoutReviewsInput, landing_page_userUpdateWithoutReviewsInput>, landing_page_userUncheckedUpdateWithoutReviewsInput>
  }

  export type relation_feature_roomCreateNestedManyWithoutRoom_featuresInput = {
    create?: XOR<relation_feature_roomCreateWithoutRoom_featuresInput, relation_feature_roomUncheckedCreateWithoutRoom_featuresInput> | relation_feature_roomCreateWithoutRoom_featuresInput[] | relation_feature_roomUncheckedCreateWithoutRoom_featuresInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutRoom_featuresInput | relation_feature_roomCreateOrConnectWithoutRoom_featuresInput[]
    createMany?: relation_feature_roomCreateManyRoom_featuresInputEnvelope
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
  }

  export type relation_feature_roomUncheckedCreateNestedManyWithoutRoom_featuresInput = {
    create?: XOR<relation_feature_roomCreateWithoutRoom_featuresInput, relation_feature_roomUncheckedCreateWithoutRoom_featuresInput> | relation_feature_roomCreateWithoutRoom_featuresInput[] | relation_feature_roomUncheckedCreateWithoutRoom_featuresInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutRoom_featuresInput | relation_feature_roomCreateOrConnectWithoutRoom_featuresInput[]
    createMany?: relation_feature_roomCreateManyRoom_featuresInputEnvelope
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
  }

  export type Enumfeature_categoryFieldUpdateOperationsInput = {
    set?: $Enums.feature_category
  }

  export type relation_feature_roomUpdateManyWithoutRoom_featuresNestedInput = {
    create?: XOR<relation_feature_roomCreateWithoutRoom_featuresInput, relation_feature_roomUncheckedCreateWithoutRoom_featuresInput> | relation_feature_roomCreateWithoutRoom_featuresInput[] | relation_feature_roomUncheckedCreateWithoutRoom_featuresInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutRoom_featuresInput | relation_feature_roomCreateOrConnectWithoutRoom_featuresInput[]
    upsert?: relation_feature_roomUpsertWithWhereUniqueWithoutRoom_featuresInput | relation_feature_roomUpsertWithWhereUniqueWithoutRoom_featuresInput[]
    createMany?: relation_feature_roomCreateManyRoom_featuresInputEnvelope
    set?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    disconnect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    delete?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    update?: relation_feature_roomUpdateWithWhereUniqueWithoutRoom_featuresInput | relation_feature_roomUpdateWithWhereUniqueWithoutRoom_featuresInput[]
    updateMany?: relation_feature_roomUpdateManyWithWhereWithoutRoom_featuresInput | relation_feature_roomUpdateManyWithWhereWithoutRoom_featuresInput[]
    deleteMany?: relation_feature_roomScalarWhereInput | relation_feature_roomScalarWhereInput[]
  }

  export type relation_feature_roomUncheckedUpdateManyWithoutRoom_featuresNestedInput = {
    create?: XOR<relation_feature_roomCreateWithoutRoom_featuresInput, relation_feature_roomUncheckedCreateWithoutRoom_featuresInput> | relation_feature_roomCreateWithoutRoom_featuresInput[] | relation_feature_roomUncheckedCreateWithoutRoom_featuresInput[]
    connectOrCreate?: relation_feature_roomCreateOrConnectWithoutRoom_featuresInput | relation_feature_roomCreateOrConnectWithoutRoom_featuresInput[]
    upsert?: relation_feature_roomUpsertWithWhereUniqueWithoutRoom_featuresInput | relation_feature_roomUpsertWithWhereUniqueWithoutRoom_featuresInput[]
    createMany?: relation_feature_roomCreateManyRoom_featuresInputEnvelope
    set?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    disconnect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    delete?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    connect?: relation_feature_roomWhereUniqueInput | relation_feature_roomWhereUniqueInput[]
    update?: relation_feature_roomUpdateWithWhereUniqueWithoutRoom_featuresInput | relation_feature_roomUpdateWithWhereUniqueWithoutRoom_featuresInput[]
    updateMany?: relation_feature_roomUpdateManyWithWhereWithoutRoom_featuresInput | relation_feature_roomUpdateManyWithWhereWithoutRoom_featuresInput[]
    deleteMany?: relation_feature_roomScalarWhereInput | relation_feature_roomScalarWhereInput[]
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

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumhomestay_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.homestay_status | Enumhomestay_statusFieldRefInput<$PrismaModel>
    in?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhomestay_statusFilter<$PrismaModel> | $Enums.homestay_status
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumhomestay_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.homestay_status | Enumhomestay_statusFieldRefInput<$PrismaModel>
    in?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.homestay_status[] | ListEnumhomestay_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhomestay_statusWithAggregatesFilter<$PrismaModel> | $Enums.homestay_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhomestay_statusFilter<$PrismaModel>
    _max?: NestedEnumhomestay_statusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumroom_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusFilter<$PrismaModel> | $Enums.room_status
  }

  export type NestedEnumroom_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusWithAggregatesFilter<$PrismaModel> | $Enums.room_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_statusFilter<$PrismaModel>
    _max?: NestedEnumroom_statusFilter<$PrismaModel>
  }

  export type NestedEnumuser_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_typeFilter<$PrismaModel> | $Enums.user_type
  }

  export type NestedEnumuser_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_type[] | ListEnumuser_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_typeFilter<$PrismaModel>
  }

  export type NestedEnumfeature_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.feature_category | Enumfeature_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumfeature_categoryFilter<$PrismaModel> | $Enums.feature_category
  }

  export type NestedEnumfeature_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.feature_category | Enumfeature_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.feature_category[] | ListEnumfeature_categoryFieldRefInput<$PrismaModel>
    not?: NestedEnumfeature_categoryWithAggregatesFilter<$PrismaModel> | $Enums.feature_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfeature_categoryFilter<$PrismaModel>
    _max?: NestedEnumfeature_categoryFilter<$PrismaModel>
  }

  export type homestayCreateWithoutAdmin_usersInput = {
    title: string
    description?: string | null
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayImages?: homestayImagesCreateNestedManyWithoutHomestayInput
    homestayRoom?: homestayRoomCreateNestedManyWithoutHomestayInput
    reviews?: reviewsCreateNestedManyWithoutHomestayInput
  }

  export type homestayUncheckedCreateWithoutAdmin_usersInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayImages?: homestayImagesUncheckedCreateNestedManyWithoutHomestayInput
    homestayRoom?: homestayRoomUncheckedCreateNestedManyWithoutHomestayInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayInput
  }

  export type homestayCreateOrConnectWithoutAdmin_usersInput = {
    where: homestayWhereUniqueInput
    create: XOR<homestayCreateWithoutAdmin_usersInput, homestayUncheckedCreateWithoutAdmin_usersInput>
  }

  export type homestayCreateManyAdmin_usersInputEnvelope = {
    data: homestayCreateManyAdmin_usersInput | homestayCreateManyAdmin_usersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutAdmin_usersInput = {
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
    landing_page_user?: landing_page_userCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutAdmin_usersInput = {
    id?: number
    user_id?: number | null
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
  }

  export type notificationsCreateOrConnectWithoutAdmin_usersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutAdmin_usersInput, notificationsUncheckedCreateWithoutAdmin_usersInput>
  }

  export type notificationsCreateManyAdmin_usersInputEnvelope = {
    data: notificationsCreateManyAdmin_usersInput | notificationsCreateManyAdmin_usersInput[]
    skipDuplicates?: boolean
  }

  export type homestayUpsertWithWhereUniqueWithoutAdmin_usersInput = {
    where: homestayWhereUniqueInput
    update: XOR<homestayUpdateWithoutAdmin_usersInput, homestayUncheckedUpdateWithoutAdmin_usersInput>
    create: XOR<homestayCreateWithoutAdmin_usersInput, homestayUncheckedCreateWithoutAdmin_usersInput>
  }

  export type homestayUpdateWithWhereUniqueWithoutAdmin_usersInput = {
    where: homestayWhereUniqueInput
    data: XOR<homestayUpdateWithoutAdmin_usersInput, homestayUncheckedUpdateWithoutAdmin_usersInput>
  }

  export type homestayUpdateManyWithWhereWithoutAdmin_usersInput = {
    where: homestayScalarWhereInput
    data: XOR<homestayUpdateManyMutationInput, homestayUncheckedUpdateManyWithoutAdmin_usersInput>
  }

  export type homestayScalarWhereInput = {
    AND?: homestayScalarWhereInput | homestayScalarWhereInput[]
    OR?: homestayScalarWhereInput[]
    NOT?: homestayScalarWhereInput | homestayScalarWhereInput[]
    id?: IntFilter<"homestay"> | number
    title?: StringFilter<"homestay"> | string
    description?: StringNullableFilter<"homestay"> | string | null
    user_id?: IntFilter<"homestay"> | number
    status?: Enumhomestay_statusFilter<"homestay"> | $Enums.homestay_status
    has_rooms?: BoolFilter<"homestay"> | boolean
    location?: StringFilter<"homestay"> | string
    address?: StringFilter<"homestay"> | string
    base_price?: DecimalNullableFilter<"homestay"> | Decimal | DecimalJsLike | number | string | null
    max_guests?: IntNullableFilter<"homestay"> | number | null
    contact_number?: StringNullableFilter<"homestay"> | string | null
    created_at?: DateTimeFilter<"homestay"> | Date | string
    updated_at?: DateTimeFilter<"homestay"> | Date | string
  }

  export type notificationsUpsertWithWhereUniqueWithoutAdmin_usersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutAdmin_usersInput, notificationsUncheckedUpdateWithoutAdmin_usersInput>
    create: XOR<notificationsCreateWithoutAdmin_usersInput, notificationsUncheckedCreateWithoutAdmin_usersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutAdmin_usersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutAdmin_usersInput, notificationsUncheckedUpdateWithoutAdmin_usersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutAdmin_usersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutAdmin_usersInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntNullableFilter<"notifications"> | number | null
    admin_id?: IntNullableFilter<"notifications"> | number | null
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    is_read?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeFilter<"notifications"> | Date | string
  }

  export type homestayRoomCreateWithoutBookingInput = {
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay: homestayCreateNestedOneWithoutHomestayRoomInput
    relation_feature_room?: relation_feature_roomCreateNestedManyWithoutHomestayRoomInput
    reviews?: reviewsCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomUncheckedCreateWithoutBookingInput = {
    id?: number
    homestay_id: number
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    relation_feature_room?: relation_feature_roomUncheckedCreateNestedManyWithoutHomestayRoomInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomCreateOrConnectWithoutBookingInput = {
    where: homestayRoomWhereUniqueInput
    create: XOR<homestayRoomCreateWithoutBookingInput, homestayRoomUncheckedCreateWithoutBookingInput>
  }

  export type landing_page_userCreateWithoutBookingInput = {
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    notifications?: notificationsCreateNestedManyWithoutLanding_page_userInput
    reviews?: reviewsCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userUncheckedCreateWithoutBookingInput = {
    id?: number
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    notifications?: notificationsUncheckedCreateNestedManyWithoutLanding_page_userInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userCreateOrConnectWithoutBookingInput = {
    where: landing_page_userWhereUniqueInput
    create: XOR<landing_page_userCreateWithoutBookingInput, landing_page_userUncheckedCreateWithoutBookingInput>
  }

  export type paymentsCreateWithoutBookingInput = {
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    payment_method: string
    payment_status: string
    transaction_id?: string | null
    payment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentsUncheckedCreateWithoutBookingInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    payment_method: string
    payment_status: string
    transaction_id?: string | null
    payment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentsCreateOrConnectWithoutBookingInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput>
  }

  export type paymentsCreateManyBookingInputEnvelope = {
    data: paymentsCreateManyBookingInput | paymentsCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type homestayRoomUpsertWithoutBookingInput = {
    update: XOR<homestayRoomUpdateWithoutBookingInput, homestayRoomUncheckedUpdateWithoutBookingInput>
    create: XOR<homestayRoomCreateWithoutBookingInput, homestayRoomUncheckedCreateWithoutBookingInput>
    where?: homestayRoomWhereInput
  }

  export type homestayRoomUpdateToOneWithWhereWithoutBookingInput = {
    where?: homestayRoomWhereInput
    data: XOR<homestayRoomUpdateWithoutBookingInput, homestayRoomUncheckedUpdateWithoutBookingInput>
  }

  export type homestayRoomUpdateWithoutBookingInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUpdateOneRequiredWithoutHomestayRoomNestedInput
    relation_feature_room?: relation_feature_roomUpdateManyWithoutHomestayRoomNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayRoomUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relation_feature_room?: relation_feature_roomUncheckedUpdateManyWithoutHomestayRoomNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayRoomNestedInput
  }

  export type landing_page_userUpsertWithoutBookingInput = {
    update: XOR<landing_page_userUpdateWithoutBookingInput, landing_page_userUncheckedUpdateWithoutBookingInput>
    create: XOR<landing_page_userCreateWithoutBookingInput, landing_page_userUncheckedCreateWithoutBookingInput>
    where?: landing_page_userWhereInput
  }

  export type landing_page_userUpdateToOneWithWhereWithoutBookingInput = {
    where?: landing_page_userWhereInput
    data: XOR<landing_page_userUpdateWithoutBookingInput, landing_page_userUncheckedUpdateWithoutBookingInput>
  }

  export type landing_page_userUpdateWithoutBookingInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: notificationsUpdateManyWithoutLanding_page_userNestedInput
    reviews?: reviewsUpdateManyWithoutLanding_page_userNestedInput
  }

  export type landing_page_userUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: notificationsUncheckedUpdateManyWithoutLanding_page_userNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutLanding_page_userNestedInput
  }

  export type paymentsUpsertWithWhereUniqueWithoutBookingInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutBookingInput, paymentsUncheckedUpdateWithoutBookingInput>
    create: XOR<paymentsCreateWithoutBookingInput, paymentsUncheckedCreateWithoutBookingInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutBookingInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutBookingInput, paymentsUncheckedUpdateWithoutBookingInput>
  }

  export type paymentsUpdateManyWithWhereWithoutBookingInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutBookingInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    booking_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payments"> | string
    payment_method?: StringFilter<"payments"> | string
    payment_status?: StringFilter<"payments"> | string
    transaction_id?: StringNullableFilter<"payments"> | string | null
    payment_date?: DateTimeFilter<"payments"> | Date | string
    created_at?: DateTimeFilter<"payments"> | Date | string
    updated_at?: DateTimeFilter<"payments"> | Date | string
  }

  export type admin_usersCreateWithoutHomestayInput = {
    username: string
    password: string
    email: string
    name: string
    role?: $Enums.user_role
    is_active?: boolean
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    notifications?: notificationsCreateNestedManyWithoutAdmin_usersInput
  }

  export type admin_usersUncheckedCreateWithoutHomestayInput = {
    id?: number
    username: string
    password: string
    email: string
    name: string
    role?: $Enums.user_role
    is_active?: boolean
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    notifications?: notificationsUncheckedCreateNestedManyWithoutAdmin_usersInput
  }

  export type admin_usersCreateOrConnectWithoutHomestayInput = {
    where: admin_usersWhereUniqueInput
    create: XOR<admin_usersCreateWithoutHomestayInput, admin_usersUncheckedCreateWithoutHomestayInput>
  }

  export type homestayImagesCreateWithoutHomestayInput = {
    img_url: string
    is_primary?: boolean
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayImagesUncheckedCreateWithoutHomestayInput = {
    id?: number
    img_url: string
    is_primary?: boolean
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayImagesCreateOrConnectWithoutHomestayInput = {
    where: homestayImagesWhereUniqueInput
    create: XOR<homestayImagesCreateWithoutHomestayInput, homestayImagesUncheckedCreateWithoutHomestayInput>
  }

  export type homestayImagesCreateManyHomestayInputEnvelope = {
    data: homestayImagesCreateManyHomestayInput | homestayImagesCreateManyHomestayInput[]
    skipDuplicates?: boolean
  }

  export type homestayRoomCreateWithoutHomestayInput = {
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingCreateNestedManyWithoutHomestayRoomInput
    relation_feature_room?: relation_feature_roomCreateNestedManyWithoutHomestayRoomInput
    reviews?: reviewsCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomUncheckedCreateWithoutHomestayInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutHomestayRoomInput
    relation_feature_room?: relation_feature_roomUncheckedCreateNestedManyWithoutHomestayRoomInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomCreateOrConnectWithoutHomestayInput = {
    where: homestayRoomWhereUniqueInput
    create: XOR<homestayRoomCreateWithoutHomestayInput, homestayRoomUncheckedCreateWithoutHomestayInput>
  }

  export type homestayRoomCreateManyHomestayInputEnvelope = {
    data: homestayRoomCreateManyHomestayInput | homestayRoomCreateManyHomestayInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutHomestayInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayRoom?: homestayRoomCreateNestedOneWithoutReviewsInput
    landing_page_user: landing_page_userCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutHomestayInput = {
    id?: number
    user_id: number
    room_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewsCreateOrConnectWithoutHomestayInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutHomestayInput, reviewsUncheckedCreateWithoutHomestayInput>
  }

  export type reviewsCreateManyHomestayInputEnvelope = {
    data: reviewsCreateManyHomestayInput | reviewsCreateManyHomestayInput[]
    skipDuplicates?: boolean
  }

  export type admin_usersUpsertWithoutHomestayInput = {
    update: XOR<admin_usersUpdateWithoutHomestayInput, admin_usersUncheckedUpdateWithoutHomestayInput>
    create: XOR<admin_usersCreateWithoutHomestayInput, admin_usersUncheckedCreateWithoutHomestayInput>
    where?: admin_usersWhereInput
  }

  export type admin_usersUpdateToOneWithWhereWithoutHomestayInput = {
    where?: admin_usersWhereInput
    data: XOR<admin_usersUpdateWithoutHomestayInput, admin_usersUncheckedUpdateWithoutHomestayInput>
  }

  export type admin_usersUpdateWithoutHomestayInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: notificationsUpdateManyWithoutAdmin_usersNestedInput
  }

  export type admin_usersUncheckedUpdateWithoutHomestayInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: notificationsUncheckedUpdateManyWithoutAdmin_usersNestedInput
  }

  export type homestayImagesUpsertWithWhereUniqueWithoutHomestayInput = {
    where: homestayImagesWhereUniqueInput
    update: XOR<homestayImagesUpdateWithoutHomestayInput, homestayImagesUncheckedUpdateWithoutHomestayInput>
    create: XOR<homestayImagesCreateWithoutHomestayInput, homestayImagesUncheckedCreateWithoutHomestayInput>
  }

  export type homestayImagesUpdateWithWhereUniqueWithoutHomestayInput = {
    where: homestayImagesWhereUniqueInput
    data: XOR<homestayImagesUpdateWithoutHomestayInput, homestayImagesUncheckedUpdateWithoutHomestayInput>
  }

  export type homestayImagesUpdateManyWithWhereWithoutHomestayInput = {
    where: homestayImagesScalarWhereInput
    data: XOR<homestayImagesUpdateManyMutationInput, homestayImagesUncheckedUpdateManyWithoutHomestayInput>
  }

  export type homestayImagesScalarWhereInput = {
    AND?: homestayImagesScalarWhereInput | homestayImagesScalarWhereInput[]
    OR?: homestayImagesScalarWhereInput[]
    NOT?: homestayImagesScalarWhereInput | homestayImagesScalarWhereInput[]
    id?: IntFilter<"homestayImages"> | number
    img_url?: StringFilter<"homestayImages"> | string
    homestay_id?: IntFilter<"homestayImages"> | number
    is_primary?: BoolFilter<"homestayImages"> | boolean
    order?: IntFilter<"homestayImages"> | number
    created_at?: DateTimeFilter<"homestayImages"> | Date | string
    updated_at?: DateTimeFilter<"homestayImages"> | Date | string
  }

  export type homestayRoomUpsertWithWhereUniqueWithoutHomestayInput = {
    where: homestayRoomWhereUniqueInput
    update: XOR<homestayRoomUpdateWithoutHomestayInput, homestayRoomUncheckedUpdateWithoutHomestayInput>
    create: XOR<homestayRoomCreateWithoutHomestayInput, homestayRoomUncheckedCreateWithoutHomestayInput>
  }

  export type homestayRoomUpdateWithWhereUniqueWithoutHomestayInput = {
    where: homestayRoomWhereUniqueInput
    data: XOR<homestayRoomUpdateWithoutHomestayInput, homestayRoomUncheckedUpdateWithoutHomestayInput>
  }

  export type homestayRoomUpdateManyWithWhereWithoutHomestayInput = {
    where: homestayRoomScalarWhereInput
    data: XOR<homestayRoomUpdateManyMutationInput, homestayRoomUncheckedUpdateManyWithoutHomestayInput>
  }

  export type homestayRoomScalarWhereInput = {
    AND?: homestayRoomScalarWhereInput | homestayRoomScalarWhereInput[]
    OR?: homestayRoomScalarWhereInput[]
    NOT?: homestayRoomScalarWhereInput | homestayRoomScalarWhereInput[]
    id?: IntFilter<"homestayRoom"> | number
    homestay_id?: IntFilter<"homestayRoom"> | number
    title?: StringFilter<"homestayRoom"> | string
    description?: StringNullableFilter<"homestayRoom"> | string | null
    status?: Enumroom_statusFilter<"homestayRoom"> | $Enums.room_status
    room_number?: StringNullableFilter<"homestayRoom"> | string | null
    number_people?: IntFilter<"homestayRoom"> | number
    max_occupancy?: IntFilter<"homestayRoom"> | number
    price?: DecimalFilter<"homestayRoom"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"homestayRoom"> | string
    size?: StringNullableFilter<"homestayRoom"> | string | null
    created_at?: DateTimeFilter<"homestayRoom"> | Date | string
    updated_at?: DateTimeFilter<"homestayRoom"> | Date | string
  }

  export type reviewsUpsertWithWhereUniqueWithoutHomestayInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutHomestayInput, reviewsUncheckedUpdateWithoutHomestayInput>
    create: XOR<reviewsCreateWithoutHomestayInput, reviewsUncheckedCreateWithoutHomestayInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutHomestayInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutHomestayInput, reviewsUncheckedUpdateWithoutHomestayInput>
  }

  export type reviewsUpdateManyWithWhereWithoutHomestayInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutHomestayInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    id?: IntFilter<"reviews"> | number
    user_id?: IntFilter<"reviews"> | number
    homestay_id?: IntFilter<"reviews"> | number
    room_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntFilter<"reviews"> | number
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeFilter<"reviews"> | Date | string
    updated_at?: DateTimeFilter<"reviews"> | Date | string
  }

  export type homestayCreateWithoutHomestayImagesInput = {
    title: string
    description?: string | null
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admin_users: admin_usersCreateNestedOneWithoutHomestayInput
    homestayRoom?: homestayRoomCreateNestedManyWithoutHomestayInput
    reviews?: reviewsCreateNestedManyWithoutHomestayInput
  }

  export type homestayUncheckedCreateWithoutHomestayImagesInput = {
    id?: number
    title: string
    description?: string | null
    user_id: number
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayRoom?: homestayRoomUncheckedCreateNestedManyWithoutHomestayInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayInput
  }

  export type homestayCreateOrConnectWithoutHomestayImagesInput = {
    where: homestayWhereUniqueInput
    create: XOR<homestayCreateWithoutHomestayImagesInput, homestayUncheckedCreateWithoutHomestayImagesInput>
  }

  export type homestayUpsertWithoutHomestayImagesInput = {
    update: XOR<homestayUpdateWithoutHomestayImagesInput, homestayUncheckedUpdateWithoutHomestayImagesInput>
    create: XOR<homestayCreateWithoutHomestayImagesInput, homestayUncheckedCreateWithoutHomestayImagesInput>
    where?: homestayWhereInput
  }

  export type homestayUpdateToOneWithWhereWithoutHomestayImagesInput = {
    where?: homestayWhereInput
    data: XOR<homestayUpdateWithoutHomestayImagesInput, homestayUncheckedUpdateWithoutHomestayImagesInput>
  }

  export type homestayUpdateWithoutHomestayImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin_users?: admin_usersUpdateOneRequiredWithoutHomestayNestedInput
    homestayRoom?: homestayRoomUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayNestedInput
  }

  export type homestayUncheckedUpdateWithoutHomestayImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayRoom?: homestayRoomUncheckedUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayNestedInput
  }

  export type bookingCreateWithoutHomestayRoomInput = {
    start_date: Date | string
    end_date: Date | string
    status?: $Enums.booking_status
    is_paid?: boolean
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    landing_page_user?: landing_page_userCreateNestedOneWithoutBookingInput
    payments?: paymentsCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutHomestayRoomInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    status?: $Enums.booking_status
    is_paid?: boolean
    user_id?: number | null
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutHomestayRoomInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutHomestayRoomInput, bookingUncheckedCreateWithoutHomestayRoomInput>
  }

  export type bookingCreateManyHomestayRoomInputEnvelope = {
    data: bookingCreateManyHomestayRoomInput | bookingCreateManyHomestayRoomInput[]
    skipDuplicates?: boolean
  }

  export type homestayCreateWithoutHomestayRoomInput = {
    title: string
    description?: string | null
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admin_users: admin_usersCreateNestedOneWithoutHomestayInput
    homestayImages?: homestayImagesCreateNestedManyWithoutHomestayInput
    reviews?: reviewsCreateNestedManyWithoutHomestayInput
  }

  export type homestayUncheckedCreateWithoutHomestayRoomInput = {
    id?: number
    title: string
    description?: string | null
    user_id: number
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayImages?: homestayImagesUncheckedCreateNestedManyWithoutHomestayInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayInput
  }

  export type homestayCreateOrConnectWithoutHomestayRoomInput = {
    where: homestayWhereUniqueInput
    create: XOR<homestayCreateWithoutHomestayRoomInput, homestayUncheckedCreateWithoutHomestayRoomInput>
  }

  export type relation_feature_roomCreateWithoutHomestayRoomInput = {
    is_available?: boolean
    created_at?: Date | string
    room_features: room_featuresCreateNestedOneWithoutRelation_feature_roomInput
  }

  export type relation_feature_roomUncheckedCreateWithoutHomestayRoomInput = {
    id?: number
    room_feature_id: number
    is_available?: boolean
    created_at?: Date | string
  }

  export type relation_feature_roomCreateOrConnectWithoutHomestayRoomInput = {
    where: relation_feature_roomWhereUniqueInput
    create: XOR<relation_feature_roomCreateWithoutHomestayRoomInput, relation_feature_roomUncheckedCreateWithoutHomestayRoomInput>
  }

  export type relation_feature_roomCreateManyHomestayRoomInputEnvelope = {
    data: relation_feature_roomCreateManyHomestayRoomInput | relation_feature_roomCreateManyHomestayRoomInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutHomestayRoomInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay: homestayCreateNestedOneWithoutReviewsInput
    landing_page_user: landing_page_userCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutHomestayRoomInput = {
    id?: number
    user_id: number
    homestay_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewsCreateOrConnectWithoutHomestayRoomInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutHomestayRoomInput, reviewsUncheckedCreateWithoutHomestayRoomInput>
  }

  export type reviewsCreateManyHomestayRoomInputEnvelope = {
    data: reviewsCreateManyHomestayRoomInput | reviewsCreateManyHomestayRoomInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutHomestayRoomInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutHomestayRoomInput, bookingUncheckedUpdateWithoutHomestayRoomInput>
    create: XOR<bookingCreateWithoutHomestayRoomInput, bookingUncheckedCreateWithoutHomestayRoomInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutHomestayRoomInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutHomestayRoomInput, bookingUncheckedUpdateWithoutHomestayRoomInput>
  }

  export type bookingUpdateManyWithWhereWithoutHomestayRoomInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutHomestayRoomInput>
  }

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[]
    OR?: bookingScalarWhereInput[]
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[]
    id?: IntFilter<"booking"> | number
    start_date?: DateTimeFilter<"booking"> | Date | string
    end_date?: DateTimeFilter<"booking"> | Date | string
    room_id?: IntFilter<"booking"> | number
    status?: Enumbooking_statusFilter<"booking"> | $Enums.booking_status
    is_paid?: BoolFilter<"booking"> | boolean
    user_id?: IntNullableFilter<"booking"> | number | null
    booking_number?: StringFilter<"booking"> | string
    total_price?: DecimalFilter<"booking"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"booking"> | string | null
    check_in_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    check_out_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    number_of_guests?: IntFilter<"booking"> | number
    notes?: StringNullableFilter<"booking"> | string | null
    special_requests?: StringNullableFilter<"booking"> | string | null
    cancellation_reason?: StringNullableFilter<"booking"> | string | null
    cancelled_at?: DateTimeNullableFilter<"booking"> | Date | string | null
    created_at?: DateTimeFilter<"booking"> | Date | string
    updated_at?: DateTimeFilter<"booking"> | Date | string
  }

  export type homestayUpsertWithoutHomestayRoomInput = {
    update: XOR<homestayUpdateWithoutHomestayRoomInput, homestayUncheckedUpdateWithoutHomestayRoomInput>
    create: XOR<homestayCreateWithoutHomestayRoomInput, homestayUncheckedCreateWithoutHomestayRoomInput>
    where?: homestayWhereInput
  }

  export type homestayUpdateToOneWithWhereWithoutHomestayRoomInput = {
    where?: homestayWhereInput
    data: XOR<homestayUpdateWithoutHomestayRoomInput, homestayUncheckedUpdateWithoutHomestayRoomInput>
  }

  export type homestayUpdateWithoutHomestayRoomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin_users?: admin_usersUpdateOneRequiredWithoutHomestayNestedInput
    homestayImages?: homestayImagesUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayNestedInput
  }

  export type homestayUncheckedUpdateWithoutHomestayRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayImages?: homestayImagesUncheckedUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayNestedInput
  }

  export type relation_feature_roomUpsertWithWhereUniqueWithoutHomestayRoomInput = {
    where: relation_feature_roomWhereUniqueInput
    update: XOR<relation_feature_roomUpdateWithoutHomestayRoomInput, relation_feature_roomUncheckedUpdateWithoutHomestayRoomInput>
    create: XOR<relation_feature_roomCreateWithoutHomestayRoomInput, relation_feature_roomUncheckedCreateWithoutHomestayRoomInput>
  }

  export type relation_feature_roomUpdateWithWhereUniqueWithoutHomestayRoomInput = {
    where: relation_feature_roomWhereUniqueInput
    data: XOR<relation_feature_roomUpdateWithoutHomestayRoomInput, relation_feature_roomUncheckedUpdateWithoutHomestayRoomInput>
  }

  export type relation_feature_roomUpdateManyWithWhereWithoutHomestayRoomInput = {
    where: relation_feature_roomScalarWhereInput
    data: XOR<relation_feature_roomUpdateManyMutationInput, relation_feature_roomUncheckedUpdateManyWithoutHomestayRoomInput>
  }

  export type relation_feature_roomScalarWhereInput = {
    AND?: relation_feature_roomScalarWhereInput | relation_feature_roomScalarWhereInput[]
    OR?: relation_feature_roomScalarWhereInput[]
    NOT?: relation_feature_roomScalarWhereInput | relation_feature_roomScalarWhereInput[]
    id?: IntFilter<"relation_feature_room"> | number
    room_feature_id?: IntFilter<"relation_feature_room"> | number
    homestay_id?: IntFilter<"relation_feature_room"> | number
    is_available?: BoolFilter<"relation_feature_room"> | boolean
    created_at?: DateTimeFilter<"relation_feature_room"> | Date | string
  }

  export type reviewsUpsertWithWhereUniqueWithoutHomestayRoomInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutHomestayRoomInput, reviewsUncheckedUpdateWithoutHomestayRoomInput>
    create: XOR<reviewsCreateWithoutHomestayRoomInput, reviewsUncheckedCreateWithoutHomestayRoomInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutHomestayRoomInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutHomestayRoomInput, reviewsUncheckedUpdateWithoutHomestayRoomInput>
  }

  export type reviewsUpdateManyWithWhereWithoutHomestayRoomInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutHomestayRoomInput>
  }

  export type bookingCreateWithoutLanding_page_userInput = {
    start_date: Date | string
    end_date: Date | string
    status?: $Enums.booking_status
    is_paid?: boolean
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayRoom: homestayRoomCreateNestedOneWithoutBookingInput
    payments?: paymentsCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutLanding_page_userInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    room_id: number
    status?: $Enums.booking_status
    is_paid?: boolean
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutLanding_page_userInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutLanding_page_userInput, bookingUncheckedCreateWithoutLanding_page_userInput>
  }

  export type bookingCreateManyLanding_page_userInputEnvelope = {
    data: bookingCreateManyLanding_page_userInput | bookingCreateManyLanding_page_userInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutLanding_page_userInput = {
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
    admin_users?: admin_usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateWithoutLanding_page_userInput = {
    id?: number
    admin_id?: number | null
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
  }

  export type notificationsCreateOrConnectWithoutLanding_page_userInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutLanding_page_userInput, notificationsUncheckedCreateWithoutLanding_page_userInput>
  }

  export type notificationsCreateManyLanding_page_userInputEnvelope = {
    data: notificationsCreateManyLanding_page_userInput | notificationsCreateManyLanding_page_userInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutLanding_page_userInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay: homestayCreateNestedOneWithoutReviewsInput
    homestayRoom?: homestayRoomCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutLanding_page_userInput = {
    id?: number
    homestay_id: number
    room_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewsCreateOrConnectWithoutLanding_page_userInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutLanding_page_userInput, reviewsUncheckedCreateWithoutLanding_page_userInput>
  }

  export type reviewsCreateManyLanding_page_userInputEnvelope = {
    data: reviewsCreateManyLanding_page_userInput | reviewsCreateManyLanding_page_userInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutLanding_page_userInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutLanding_page_userInput, bookingUncheckedUpdateWithoutLanding_page_userInput>
    create: XOR<bookingCreateWithoutLanding_page_userInput, bookingUncheckedCreateWithoutLanding_page_userInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutLanding_page_userInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutLanding_page_userInput, bookingUncheckedUpdateWithoutLanding_page_userInput>
  }

  export type bookingUpdateManyWithWhereWithoutLanding_page_userInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutLanding_page_userInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutLanding_page_userInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutLanding_page_userInput, notificationsUncheckedUpdateWithoutLanding_page_userInput>
    create: XOR<notificationsCreateWithoutLanding_page_userInput, notificationsUncheckedCreateWithoutLanding_page_userInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutLanding_page_userInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutLanding_page_userInput, notificationsUncheckedUpdateWithoutLanding_page_userInput>
  }

  export type notificationsUpdateManyWithWhereWithoutLanding_page_userInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutLanding_page_userInput>
  }

  export type reviewsUpsertWithWhereUniqueWithoutLanding_page_userInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutLanding_page_userInput, reviewsUncheckedUpdateWithoutLanding_page_userInput>
    create: XOR<reviewsCreateWithoutLanding_page_userInput, reviewsUncheckedCreateWithoutLanding_page_userInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutLanding_page_userInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutLanding_page_userInput, reviewsUncheckedUpdateWithoutLanding_page_userInput>
  }

  export type reviewsUpdateManyWithWhereWithoutLanding_page_userInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutLanding_page_userInput>
  }

  export type admin_usersCreateWithoutNotificationsInput = {
    username: string
    password: string
    email: string
    name: string
    role?: $Enums.user_role
    is_active?: boolean
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay?: homestayCreateNestedManyWithoutAdmin_usersInput
  }

  export type admin_usersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    username: string
    password: string
    email: string
    name: string
    role?: $Enums.user_role
    is_active?: boolean
    last_login?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestay?: homestayUncheckedCreateNestedManyWithoutAdmin_usersInput
  }

  export type admin_usersCreateOrConnectWithoutNotificationsInput = {
    where: admin_usersWhereUniqueInput
    create: XOR<admin_usersCreateWithoutNotificationsInput, admin_usersUncheckedCreateWithoutNotificationsInput>
  }

  export type landing_page_userCreateWithoutNotificationsInput = {
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingCreateNestedManyWithoutLanding_page_userInput
    reviews?: reviewsCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutLanding_page_userInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userCreateOrConnectWithoutNotificationsInput = {
    where: landing_page_userWhereUniqueInput
    create: XOR<landing_page_userCreateWithoutNotificationsInput, landing_page_userUncheckedCreateWithoutNotificationsInput>
  }

  export type admin_usersUpsertWithoutNotificationsInput = {
    update: XOR<admin_usersUpdateWithoutNotificationsInput, admin_usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<admin_usersCreateWithoutNotificationsInput, admin_usersUncheckedCreateWithoutNotificationsInput>
    where?: admin_usersWhereInput
  }

  export type admin_usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: admin_usersWhereInput
    data: XOR<admin_usersUpdateWithoutNotificationsInput, admin_usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type admin_usersUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUpdateManyWithoutAdmin_usersNestedInput
  }

  export type admin_usersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUncheckedUpdateManyWithoutAdmin_usersNestedInput
  }

  export type landing_page_userUpsertWithoutNotificationsInput = {
    update: XOR<landing_page_userUpdateWithoutNotificationsInput, landing_page_userUncheckedUpdateWithoutNotificationsInput>
    create: XOR<landing_page_userCreateWithoutNotificationsInput, landing_page_userUncheckedCreateWithoutNotificationsInput>
    where?: landing_page_userWhereInput
  }

  export type landing_page_userUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: landing_page_userWhereInput
    data: XOR<landing_page_userUpdateWithoutNotificationsInput, landing_page_userUncheckedUpdateWithoutNotificationsInput>
  }

  export type landing_page_userUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutLanding_page_userNestedInput
    reviews?: reviewsUpdateManyWithoutLanding_page_userNestedInput
  }

  export type landing_page_userUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutLanding_page_userNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutLanding_page_userNestedInput
  }

  export type bookingCreateWithoutPaymentsInput = {
    start_date: Date | string
    end_date: Date | string
    status?: $Enums.booking_status
    is_paid?: boolean
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayRoom: homestayRoomCreateNestedOneWithoutBookingInput
    landing_page_user?: landing_page_userCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutPaymentsInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    room_id: number
    status?: $Enums.booking_status
    is_paid?: boolean
    user_id?: number | null
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type bookingCreateOrConnectWithoutPaymentsInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutPaymentsInput, bookingUncheckedCreateWithoutPaymentsInput>
  }

  export type bookingUpsertWithoutPaymentsInput = {
    update: XOR<bookingUpdateWithoutPaymentsInput, bookingUncheckedUpdateWithoutPaymentsInput>
    create: XOR<bookingCreateWithoutPaymentsInput, bookingUncheckedCreateWithoutPaymentsInput>
    where?: bookingWhereInput
  }

  export type bookingUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: bookingWhereInput
    data: XOR<bookingUpdateWithoutPaymentsInput, bookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type bookingUpdateWithoutPaymentsInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayRoom?: homestayRoomUpdateOneRequiredWithoutBookingNestedInput
    landing_page_user?: landing_page_userUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    room_id?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_featuresCreateWithoutRelation_feature_roomInput = {
    title: string
    description?: string | null
    symbol?: string | null
    category: $Enums.feature_category
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type room_featuresUncheckedCreateWithoutRelation_feature_roomInput = {
    id?: number
    title: string
    description?: string | null
    symbol?: string | null
    category: $Enums.feature_category
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type room_featuresCreateOrConnectWithoutRelation_feature_roomInput = {
    where: room_featuresWhereUniqueInput
    create: XOR<room_featuresCreateWithoutRelation_feature_roomInput, room_featuresUncheckedCreateWithoutRelation_feature_roomInput>
  }

  export type homestayRoomCreateWithoutRelation_feature_roomInput = {
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingCreateNestedManyWithoutHomestayRoomInput
    homestay: homestayCreateNestedOneWithoutHomestayRoomInput
    reviews?: reviewsCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomUncheckedCreateWithoutRelation_feature_roomInput = {
    id?: number
    homestay_id: number
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutHomestayRoomInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomCreateOrConnectWithoutRelation_feature_roomInput = {
    where: homestayRoomWhereUniqueInput
    create: XOR<homestayRoomCreateWithoutRelation_feature_roomInput, homestayRoomUncheckedCreateWithoutRelation_feature_roomInput>
  }

  export type room_featuresUpsertWithoutRelation_feature_roomInput = {
    update: XOR<room_featuresUpdateWithoutRelation_feature_roomInput, room_featuresUncheckedUpdateWithoutRelation_feature_roomInput>
    create: XOR<room_featuresCreateWithoutRelation_feature_roomInput, room_featuresUncheckedCreateWithoutRelation_feature_roomInput>
    where?: room_featuresWhereInput
  }

  export type room_featuresUpdateToOneWithWhereWithoutRelation_feature_roomInput = {
    where?: room_featuresWhereInput
    data: XOR<room_featuresUpdateWithoutRelation_feature_roomInput, room_featuresUncheckedUpdateWithoutRelation_feature_roomInput>
  }

  export type room_featuresUpdateWithoutRelation_feature_roomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumfeature_categoryFieldUpdateOperationsInput | $Enums.feature_category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_featuresUncheckedUpdateWithoutRelation_feature_roomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumfeature_categoryFieldUpdateOperationsInput | $Enums.feature_category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayRoomUpsertWithoutRelation_feature_roomInput = {
    update: XOR<homestayRoomUpdateWithoutRelation_feature_roomInput, homestayRoomUncheckedUpdateWithoutRelation_feature_roomInput>
    create: XOR<homestayRoomCreateWithoutRelation_feature_roomInput, homestayRoomUncheckedCreateWithoutRelation_feature_roomInput>
    where?: homestayRoomWhereInput
  }

  export type homestayRoomUpdateToOneWithWhereWithoutRelation_feature_roomInput = {
    where?: homestayRoomWhereInput
    data: XOR<homestayRoomUpdateWithoutRelation_feature_roomInput, homestayRoomUncheckedUpdateWithoutRelation_feature_roomInput>
  }

  export type homestayRoomUpdateWithoutRelation_feature_roomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutHomestayRoomNestedInput
    homestay?: homestayUpdateOneRequiredWithoutHomestayRoomNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayRoomUncheckedUpdateWithoutRelation_feature_roomInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutHomestayRoomNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayCreateWithoutReviewsInput = {
    title: string
    description?: string | null
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admin_users: admin_usersCreateNestedOneWithoutHomestayInput
    homestayImages?: homestayImagesCreateNestedManyWithoutHomestayInput
    homestayRoom?: homestayRoomCreateNestedManyWithoutHomestayInput
  }

  export type homestayUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description?: string | null
    user_id: number
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    homestayImages?: homestayImagesUncheckedCreateNestedManyWithoutHomestayInput
    homestayRoom?: homestayRoomUncheckedCreateNestedManyWithoutHomestayInput
  }

  export type homestayCreateOrConnectWithoutReviewsInput = {
    where: homestayWhereUniqueInput
    create: XOR<homestayCreateWithoutReviewsInput, homestayUncheckedCreateWithoutReviewsInput>
  }

  export type homestayRoomCreateWithoutReviewsInput = {
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingCreateNestedManyWithoutHomestayRoomInput
    homestay: homestayCreateNestedOneWithoutHomestayRoomInput
    relation_feature_room?: relation_feature_roomCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomUncheckedCreateWithoutReviewsInput = {
    id?: number
    homestay_id: number
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutHomestayRoomInput
    relation_feature_room?: relation_feature_roomUncheckedCreateNestedManyWithoutHomestayRoomInput
  }

  export type homestayRoomCreateOrConnectWithoutReviewsInput = {
    where: homestayRoomWhereUniqueInput
    create: XOR<homestayRoomCreateWithoutReviewsInput, homestayRoomUncheckedCreateWithoutReviewsInput>
  }

  export type landing_page_userCreateWithoutReviewsInput = {
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingCreateNestedManyWithoutLanding_page_userInput
    notifications?: notificationsCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    name: string
    last_name: string
    passport?: string | null
    phone_number: string
    type: $Enums.user_type
    country?: string | null
    address?: string | null
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutLanding_page_userInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutLanding_page_userInput
  }

  export type landing_page_userCreateOrConnectWithoutReviewsInput = {
    where: landing_page_userWhereUniqueInput
    create: XOR<landing_page_userCreateWithoutReviewsInput, landing_page_userUncheckedCreateWithoutReviewsInput>
  }

  export type homestayUpsertWithoutReviewsInput = {
    update: XOR<homestayUpdateWithoutReviewsInput, homestayUncheckedUpdateWithoutReviewsInput>
    create: XOR<homestayCreateWithoutReviewsInput, homestayUncheckedCreateWithoutReviewsInput>
    where?: homestayWhereInput
  }

  export type homestayUpdateToOneWithWhereWithoutReviewsInput = {
    where?: homestayWhereInput
    data: XOR<homestayUpdateWithoutReviewsInput, homestayUncheckedUpdateWithoutReviewsInput>
  }

  export type homestayUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin_users?: admin_usersUpdateOneRequiredWithoutHomestayNestedInput
    homestayImages?: homestayImagesUpdateManyWithoutHomestayNestedInput
    homestayRoom?: homestayRoomUpdateManyWithoutHomestayNestedInput
  }

  export type homestayUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayImages?: homestayImagesUncheckedUpdateManyWithoutHomestayNestedInput
    homestayRoom?: homestayRoomUncheckedUpdateManyWithoutHomestayNestedInput
  }

  export type homestayRoomUpsertWithoutReviewsInput = {
    update: XOR<homestayRoomUpdateWithoutReviewsInput, homestayRoomUncheckedUpdateWithoutReviewsInput>
    create: XOR<homestayRoomCreateWithoutReviewsInput, homestayRoomUncheckedCreateWithoutReviewsInput>
    where?: homestayRoomWhereInput
  }

  export type homestayRoomUpdateToOneWithWhereWithoutReviewsInput = {
    where?: homestayRoomWhereInput
    data: XOR<homestayRoomUpdateWithoutReviewsInput, homestayRoomUncheckedUpdateWithoutReviewsInput>
  }

  export type homestayRoomUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutHomestayRoomNestedInput
    homestay?: homestayUpdateOneRequiredWithoutHomestayRoomNestedInput
    relation_feature_room?: relation_feature_roomUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayRoomUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutHomestayRoomNestedInput
    relation_feature_room?: relation_feature_roomUncheckedUpdateManyWithoutHomestayRoomNestedInput
  }

  export type landing_page_userUpsertWithoutReviewsInput = {
    update: XOR<landing_page_userUpdateWithoutReviewsInput, landing_page_userUncheckedUpdateWithoutReviewsInput>
    create: XOR<landing_page_userCreateWithoutReviewsInput, landing_page_userUncheckedCreateWithoutReviewsInput>
    where?: landing_page_userWhereInput
  }

  export type landing_page_userUpdateToOneWithWhereWithoutReviewsInput = {
    where?: landing_page_userWhereInput
    data: XOR<landing_page_userUpdateWithoutReviewsInput, landing_page_userUncheckedUpdateWithoutReviewsInput>
  }

  export type landing_page_userUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutLanding_page_userNestedInput
    notifications?: notificationsUpdateManyWithoutLanding_page_userNestedInput
  }

  export type landing_page_userUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    country?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutLanding_page_userNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutLanding_page_userNestedInput
  }

  export type relation_feature_roomCreateWithoutRoom_featuresInput = {
    is_available?: boolean
    created_at?: Date | string
    homestayRoom: homestayRoomCreateNestedOneWithoutRelation_feature_roomInput
  }

  export type relation_feature_roomUncheckedCreateWithoutRoom_featuresInput = {
    id?: number
    homestay_id: number
    is_available?: boolean
    created_at?: Date | string
  }

  export type relation_feature_roomCreateOrConnectWithoutRoom_featuresInput = {
    where: relation_feature_roomWhereUniqueInput
    create: XOR<relation_feature_roomCreateWithoutRoom_featuresInput, relation_feature_roomUncheckedCreateWithoutRoom_featuresInput>
  }

  export type relation_feature_roomCreateManyRoom_featuresInputEnvelope = {
    data: relation_feature_roomCreateManyRoom_featuresInput | relation_feature_roomCreateManyRoom_featuresInput[]
    skipDuplicates?: boolean
  }

  export type relation_feature_roomUpsertWithWhereUniqueWithoutRoom_featuresInput = {
    where: relation_feature_roomWhereUniqueInput
    update: XOR<relation_feature_roomUpdateWithoutRoom_featuresInput, relation_feature_roomUncheckedUpdateWithoutRoom_featuresInput>
    create: XOR<relation_feature_roomCreateWithoutRoom_featuresInput, relation_feature_roomUncheckedCreateWithoutRoom_featuresInput>
  }

  export type relation_feature_roomUpdateWithWhereUniqueWithoutRoom_featuresInput = {
    where: relation_feature_roomWhereUniqueInput
    data: XOR<relation_feature_roomUpdateWithoutRoom_featuresInput, relation_feature_roomUncheckedUpdateWithoutRoom_featuresInput>
  }

  export type relation_feature_roomUpdateManyWithWhereWithoutRoom_featuresInput = {
    where: relation_feature_roomScalarWhereInput
    data: XOR<relation_feature_roomUpdateManyMutationInput, relation_feature_roomUncheckedUpdateManyWithoutRoom_featuresInput>
  }

  export type homestayCreateManyAdmin_usersInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.homestay_status
    has_rooms?: boolean
    location: string
    address: string
    base_price?: Decimal | DecimalJsLike | number | string | null
    max_guests?: number | null
    contact_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type notificationsCreateManyAdmin_usersInput = {
    id?: number
    user_id?: number | null
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
  }

  export type homestayUpdateWithoutAdmin_usersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayImages?: homestayImagesUpdateManyWithoutHomestayNestedInput
    homestayRoom?: homestayRoomUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayNestedInput
  }

  export type homestayUncheckedUpdateWithoutAdmin_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayImages?: homestayImagesUncheckedUpdateManyWithoutHomestayNestedInput
    homestayRoom?: homestayRoomUncheckedUpdateManyWithoutHomestayNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayNestedInput
  }

  export type homestayUncheckedUpdateManyWithoutAdmin_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumhomestay_statusFieldUpdateOperationsInput | $Enums.homestay_status
    has_rooms?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    base_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    max_guests?: NullableIntFieldUpdateOperationsInput | number | null
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUpdateWithoutAdmin_usersInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landing_page_user?: landing_page_userUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutAdmin_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyWithoutAdmin_usersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyBookingInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    payment_method: string
    payment_status: string
    transaction_id?: string | null
    payment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentsUpdateWithoutBookingInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayImagesCreateManyHomestayInput = {
    id?: number
    img_url: string
    is_primary?: boolean
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayRoomCreateManyHomestayInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.room_status
    room_number?: string | null
    number_people: number
    max_occupancy: number
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    size?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reviewsCreateManyHomestayInput = {
    id?: number
    user_id: number
    room_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type homestayImagesUpdateWithoutHomestayInput = {
    img_url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayImagesUncheckedUpdateWithoutHomestayInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayImagesUncheckedUpdateManyWithoutHomestayInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homestayRoomUpdateWithoutHomestayInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutHomestayRoomNestedInput
    relation_feature_room?: relation_feature_roomUpdateManyWithoutHomestayRoomNestedInput
    reviews?: reviewsUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayRoomUncheckedUpdateWithoutHomestayInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutHomestayRoomNestedInput
    relation_feature_room?: relation_feature_roomUncheckedUpdateManyWithoutHomestayRoomNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutHomestayRoomNestedInput
  }

  export type homestayRoomUncheckedUpdateManyWithoutHomestayInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_number?: NullableStringFieldUpdateOperationsInput | string | null
    number_people?: IntFieldUpdateOperationsInput | number
    max_occupancy?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUpdateWithoutHomestayInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayRoom?: homestayRoomUpdateOneWithoutReviewsNestedInput
    landing_page_user?: landing_page_userUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutHomestayInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUncheckedUpdateManyWithoutHomestayInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyHomestayRoomInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    status?: $Enums.booking_status
    is_paid?: boolean
    user_id?: number | null
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type relation_feature_roomCreateManyHomestayRoomInput = {
    id?: number
    room_feature_id: number
    is_available?: boolean
    created_at?: Date | string
  }

  export type reviewsCreateManyHomestayRoomInput = {
    id?: number
    user_id: number
    homestay_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type bookingUpdateWithoutHomestayRoomInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landing_page_user?: landing_page_userUpdateOneWithoutBookingNestedInput
    payments?: paymentsUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutHomestayRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutHomestayRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relation_feature_roomUpdateWithoutHomestayRoomInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room_features?: room_featuresUpdateOneRequiredWithoutRelation_feature_roomNestedInput
  }

  export type relation_feature_roomUncheckedUpdateWithoutHomestayRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_feature_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relation_feature_roomUncheckedUpdateManyWithoutHomestayRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_feature_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUpdateWithoutHomestayRoomInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUpdateOneRequiredWithoutReviewsNestedInput
    landing_page_user?: landing_page_userUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutHomestayRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUncheckedUpdateManyWithoutHomestayRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyLanding_page_userInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    room_id: number
    status?: $Enums.booking_status
    is_paid?: boolean
    booking_number: string
    total_price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    number_of_guests: number
    notes?: string | null
    special_requests?: string | null
    cancellation_reason?: string | null
    cancelled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type notificationsCreateManyLanding_page_userInput = {
    id?: number
    admin_id?: number | null
    title: string
    message: string
    is_read?: boolean
    created_at?: Date | string
  }

  export type reviewsCreateManyLanding_page_userInput = {
    id?: number
    homestay_id: number
    room_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type bookingUpdateWithoutLanding_page_userInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayRoom?: homestayRoomUpdateOneRequiredWithoutBookingNestedInput
    payments?: paymentsUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutLanding_page_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    room_id?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutLanding_page_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    room_id?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    booking_number?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    number_of_guests?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    special_requests?: NullableStringFieldUpdateOperationsInput | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUpdateWithoutLanding_page_userInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admin_users?: admin_usersUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateWithoutLanding_page_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyWithoutLanding_page_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUpdateWithoutLanding_page_userInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestay?: homestayUpdateOneRequiredWithoutReviewsNestedInput
    homestayRoom?: homestayRoomUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutLanding_page_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUncheckedUpdateManyWithoutLanding_page_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relation_feature_roomCreateManyRoom_featuresInput = {
    id?: number
    homestay_id: number
    is_available?: boolean
    created_at?: Date | string
  }

  export type relation_feature_roomUpdateWithoutRoom_featuresInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    homestayRoom?: homestayRoomUpdateOneRequiredWithoutRelation_feature_roomNestedInput
  }

  export type relation_feature_roomUncheckedUpdateWithoutRoom_featuresInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relation_feature_roomUncheckedUpdateManyWithoutRoom_featuresInput = {
    id?: IntFieldUpdateOperationsInput | number
    homestay_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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