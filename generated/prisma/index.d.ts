
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
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Profissional
 * 
 */
export type Profissional = $Result.DefaultSelection<Prisma.$ProfissionalPayload>
/**
 * Model Commission
 * 
 */
export type Commission = $Result.DefaultSelection<Prisma.$CommissionPayload>
/**
 * Model Premiacao
 * 
 */
export type Premiacao = $Result.DefaultSelection<Prisma.$PremiacaoPayload>
/**
 * Model Procedimento
 * 
 */
export type Procedimento = $Result.DefaultSelection<Prisma.$ProcedimentoPayload>
/**
 * Model PaymentMethods
 * 
 */
export type PaymentMethods = $Result.DefaultSelection<Prisma.$PaymentMethodsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoProfissional: {
  MEDICO: 'MEDICO',
  NUTRICIONISTA: 'NUTRICIONISTA',
  BIOMEDICO: 'BIOMEDICO',
  PSICOLOGO: 'PSICOLOGO',
  COMERCIAL: 'COMERCIAL',
  OUTRO: 'OUTRO'
};

export type TipoProfissional = (typeof TipoProfissional)[keyof typeof TipoProfissional]


export const NivelComercial: {
  JUNIOR: 'JUNIOR',
  SENIOR: 'SENIOR'
};

export type NivelComercial = (typeof NivelComercial)[keyof typeof NivelComercial]


export const CategoriaComissao: {
  CONSULTA: 'CONSULTA',
  PROTOCOLO: 'PROTOCOLO',
  IMPLANTE: 'IMPLANTE',
  PROCEDIMENTO: 'PROCEDIMENTO',
  CALORIMETRIA: 'CALORIMETRIA',
  OUTRO: 'OUTRO'
};

export type CategoriaComissao = (typeof CategoriaComissao)[keyof typeof CategoriaComissao]


export const TipoCalculo: {
  PERCENTUAL: 'PERCENTUAL',
  VALOR_FIXO: 'VALOR_FIXO',
  TABELA_PROGRESSIVA: 'TABELA_PROGRESSIVA'
};

export type TipoCalculo = (typeof TipoCalculo)[keyof typeof TipoCalculo]


export const TipoPremiacao: {
  AGENDAMENTO: 'AGENDAMENTO',
  CONVERSAO_PROTOCOLO: 'CONVERSAO_PROTOCOLO',
  RECEPCAO: 'RECEPCAO',
  RENOVACAO: 'RENOVACAO',
  VENDA_INDICADA: 'VENDA_INDICADA',
  GESTOR_COMERCIAL: 'GESTOR_COMERCIAL',
  ATENDIMENTO_SPA: 'ATENDIMENTO_SPA'
};

export type TipoPremiacao = (typeof TipoPremiacao)[keyof typeof TipoPremiacao]

}

export type TipoProfissional = $Enums.TipoProfissional

export const TipoProfissional: typeof $Enums.TipoProfissional

export type NivelComercial = $Enums.NivelComercial

export const NivelComercial: typeof $Enums.NivelComercial

export type CategoriaComissao = $Enums.CategoriaComissao

export const CategoriaComissao: typeof $Enums.CategoriaComissao

export type TipoCalculo = $Enums.TipoCalculo

export const TipoCalculo: typeof $Enums.TipoCalculo

export type TipoPremiacao = $Enums.TipoPremiacao

export const TipoPremiacao: typeof $Enums.TipoPremiacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional`: Exposes CRUD operations for the **Profissional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionals
    * const profissionals = await prisma.profissional.findMany()
    * ```
    */
  get profissional(): Prisma.ProfissionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commission`: Exposes CRUD operations for the **Commission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commissions
    * const commissions = await prisma.commission.findMany()
    * ```
    */
  get commission(): Prisma.CommissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premiacao`: Exposes CRUD operations for the **Premiacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Premiacaos
    * const premiacaos = await prisma.premiacao.findMany()
    * ```
    */
  get premiacao(): Prisma.PremiacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procedimento`: Exposes CRUD operations for the **Procedimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procedimentos
    * const procedimentos = await prisma.procedimento.findMany()
    * ```
    */
  get procedimento(): Prisma.ProcedimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethods`: Exposes CRUD operations for the **PaymentMethods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethods.findMany()
    * ```
    */
  get paymentMethods(): Prisma.PaymentMethodsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
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
    Paciente: 'Paciente',
    Profissional: 'Profissional',
    Commission: 'Commission',
    Premiacao: 'Premiacao',
    Procedimento: 'Procedimento',
    PaymentMethods: 'PaymentMethods'
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
      modelProps: "paciente" | "profissional" | "commission" | "premiacao" | "procedimento" | "paymentMethods"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Profissional: {
        payload: Prisma.$ProfissionalPayload<ExtArgs>
        fields: Prisma.ProfissionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfissionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfissionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findFirst: {
            args: Prisma.ProfissionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfissionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findMany: {
            args: Prisma.ProfissionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          create: {
            args: Prisma.ProfissionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          createMany: {
            args: Prisma.ProfissionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfissionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          delete: {
            args: Prisma.ProfissionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          update: {
            args: Prisma.ProfissionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfissionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfissionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfissionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfissionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          aggregate: {
            args: Prisma.ProfissionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional>
          }
          groupBy: {
            args: Prisma.ProfissionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfissionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalCountAggregateOutputType> | number
          }
        }
      }
      Commission: {
        payload: Prisma.$CommissionPayload<ExtArgs>
        fields: Prisma.CommissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          findFirst: {
            args: Prisma.CommissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          findMany: {
            args: Prisma.CommissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>[]
          }
          create: {
            args: Prisma.CommissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          createMany: {
            args: Prisma.CommissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>[]
          }
          delete: {
            args: Prisma.CommissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          update: {
            args: Prisma.CommissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          deleteMany: {
            args: Prisma.CommissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>[]
          }
          upsert: {
            args: Prisma.CommissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          aggregate: {
            args: Prisma.CommissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommission>
          }
          groupBy: {
            args: Prisma.CommissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommissionCountArgs<ExtArgs>
            result: $Utils.Optional<CommissionCountAggregateOutputType> | number
          }
        }
      }
      Premiacao: {
        payload: Prisma.$PremiacaoPayload<ExtArgs>
        fields: Prisma.PremiacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremiacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremiacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>
          }
          findFirst: {
            args: Prisma.PremiacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremiacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>
          }
          findMany: {
            args: Prisma.PremiacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>[]
          }
          create: {
            args: Prisma.PremiacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>
          }
          createMany: {
            args: Prisma.PremiacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremiacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>[]
          }
          delete: {
            args: Prisma.PremiacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>
          }
          update: {
            args: Prisma.PremiacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>
          }
          deleteMany: {
            args: Prisma.PremiacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremiacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremiacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>[]
          }
          upsert: {
            args: Prisma.PremiacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiacaoPayload>
          }
          aggregate: {
            args: Prisma.PremiacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremiacao>
          }
          groupBy: {
            args: Prisma.PremiacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremiacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremiacaoCountArgs<ExtArgs>
            result: $Utils.Optional<PremiacaoCountAggregateOutputType> | number
          }
        }
      }
      Procedimento: {
        payload: Prisma.$ProcedimentoPayload<ExtArgs>
        fields: Prisma.ProcedimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcedimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcedimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>
          }
          findFirst: {
            args: Prisma.ProcedimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcedimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>
          }
          findMany: {
            args: Prisma.ProcedimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>[]
          }
          create: {
            args: Prisma.ProcedimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>
          }
          createMany: {
            args: Prisma.ProcedimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcedimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>[]
          }
          delete: {
            args: Prisma.ProcedimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>
          }
          update: {
            args: Prisma.ProcedimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>
          }
          deleteMany: {
            args: Prisma.ProcedimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcedimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcedimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>[]
          }
          upsert: {
            args: Prisma.ProcedimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedimentoPayload>
          }
          aggregate: {
            args: Prisma.ProcedimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedimento>
          }
          groupBy: {
            args: Prisma.ProcedimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcedimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcedimentoCountArgs<ExtArgs>
            result: $Utils.Optional<ProcedimentoCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethods: {
        payload: Prisma.$PaymentMethodsPayload<ExtArgs>
        fields: Prisma.PaymentMethodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          update: {
            args: Prisma.PaymentMethodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodsPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethods>
          }
          groupBy: {
            args: Prisma.PaymentMethodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodsCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    paciente?: PacienteOmit
    profissional?: ProfissionalOmit
    commission?: CommissionOmit
    premiacao?: PremiacaoOmit
    procedimento?: ProcedimentoOmit
    paymentMethods?: PaymentMethodsOmit
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
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    procedimentos: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedimentos?: boolean | PacienteCountOutputTypeCountProcedimentosArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountProcedimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedimentoWhereInput
  }


  /**
   * Count Type ProfissionalCountOutputType
   */

  export type ProfissionalCountOutputType = {
    comissoes: number
    premiacoes: number
    procedimentos: number
  }

  export type ProfissionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comissoes?: boolean | ProfissionalCountOutputTypeCountComissoesArgs
    premiacoes?: boolean | ProfissionalCountOutputTypeCountPremiacoesArgs
    procedimentos?: boolean | ProfissionalCountOutputTypeCountProcedimentosArgs
  }

  // Custom InputTypes
  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalCountOutputType
     */
    select?: ProfissionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountComissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountPremiacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiacaoWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountProcedimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedimentoWhereInput
  }


  /**
   * Count Type ProcedimentoCountOutputType
   */

  export type ProcedimentoCountOutputType = {
    paymentMethods: number
  }

  export type ProcedimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentMethods?: boolean | ProcedimentoCountOutputTypeCountPaymentMethodsArgs
  }

  // Custom InputTypes
  /**
   * ProcedimentoCountOutputType without action
   */
  export type ProcedimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedimentoCountOutputType
     */
    select?: ProcedimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcedimentoCountOutputType without action
   */
  export type ProcedimentoCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nome: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nome: string | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    nome: number
    _all: number
  }


  export type PacienteMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nome?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nome?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nome?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    nome: string
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
    procedimentos?: boolean | Paciente$procedimentosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "nome", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedimentos?: boolean | Paciente$procedimentosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      procedimentos: Prisma.$ProcedimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      nome: string
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedimentos<T extends Paciente$procedimentosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$procedimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'String'>
    readonly createdAt: FieldRef<"Paciente", 'DateTime'>
    readonly updatedAt: FieldRef<"Paciente", 'DateTime'>
    readonly nome: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.procedimentos
   */
  export type Paciente$procedimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    where?: ProcedimentoWhereInput
    orderBy?: ProcedimentoOrderByWithRelationInput | ProcedimentoOrderByWithRelationInput[]
    cursor?: ProcedimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcedimentoScalarFieldEnum | ProcedimentoScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Profissional
   */

  export type AggregateProfissional = {
    _count: ProfissionalCountAggregateOutputType | null
    _avg: ProfissionalAvgAggregateOutputType | null
    _sum: ProfissionalSumAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  export type ProfissionalAvgAggregateOutputType = {
    aluguelFixo: Decimal | null
  }

  export type ProfissionalSumAggregateOutputType = {
    aluguelFixo: Decimal | null
  }

  export type ProfissionalMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nome: string | null
    tipo: $Enums.TipoProfissional | null
    nivel: $Enums.NivelComercial | null
    aluguelFixo: Decimal | null
  }

  export type ProfissionalMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nome: string | null
    tipo: $Enums.TipoProfissional | null
    nivel: $Enums.NivelComercial | null
    aluguelFixo: Decimal | null
  }

  export type ProfissionalCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    nome: number
    tipo: number
    nivel: number
    aluguelFixo: number
    _all: number
  }


  export type ProfissionalAvgAggregateInputType = {
    aluguelFixo?: true
  }

  export type ProfissionalSumAggregateInputType = {
    aluguelFixo?: true
  }

  export type ProfissionalMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nome?: true
    tipo?: true
    nivel?: true
    aluguelFixo?: true
  }

  export type ProfissionalMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nome?: true
    tipo?: true
    nivel?: true
    aluguelFixo?: true
  }

  export type ProfissionalCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nome?: true
    tipo?: true
    nivel?: true
    aluguelFixo?: true
    _all?: true
  }

  export type ProfissionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissional to aggregate.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profissionals
    **/
    _count?: true | ProfissionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfissionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfissionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionalMaxAggregateInputType
  }

  export type GetProfissionalAggregateType<T extends ProfissionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional[P]>
      : GetScalarType<T[P], AggregateProfissional[P]>
  }




  export type ProfissionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalWhereInput
    orderBy?: ProfissionalOrderByWithAggregationInput | ProfissionalOrderByWithAggregationInput[]
    by: ProfissionalScalarFieldEnum[] | ProfissionalScalarFieldEnum
    having?: ProfissionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionalCountAggregateInputType | true
    _avg?: ProfissionalAvgAggregateInputType
    _sum?: ProfissionalSumAggregateInputType
    _min?: ProfissionalMinAggregateInputType
    _max?: ProfissionalMaxAggregateInputType
  }

  export type ProfissionalGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    nome: string
    tipo: $Enums.TipoProfissional
    nivel: $Enums.NivelComercial | null
    aluguelFixo: Decimal | null
    _count: ProfissionalCountAggregateOutputType | null
    _avg: ProfissionalAvgAggregateOutputType | null
    _sum: ProfissionalSumAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  type GetProfissionalGroupByPayload<T extends ProfissionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfissionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
    tipo?: boolean
    nivel?: boolean
    aluguelFixo?: boolean
    comissoes?: boolean | Profissional$comissoesArgs<ExtArgs>
    premiacoes?: boolean | Profissional$premiacoesArgs<ExtArgs>
    procedimentos?: boolean | Profissional$procedimentosArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
    tipo?: boolean
    nivel?: boolean
    aluguelFixo?: boolean
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
    tipo?: boolean
    nivel?: boolean
    aluguelFixo?: boolean
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nome?: boolean
    tipo?: boolean
    nivel?: boolean
    aluguelFixo?: boolean
  }

  export type ProfissionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "nome" | "tipo" | "nivel" | "aluguelFixo", ExtArgs["result"]["profissional"]>
  export type ProfissionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comissoes?: boolean | Profissional$comissoesArgs<ExtArgs>
    premiacoes?: boolean | Profissional$premiacoesArgs<ExtArgs>
    procedimentos?: boolean | Profissional$procedimentosArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfissionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfissionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfissionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profissional"
    objects: {
      comissoes: Prisma.$CommissionPayload<ExtArgs>[]
      premiacoes: Prisma.$PremiacaoPayload<ExtArgs>[]
      procedimentos: Prisma.$ProcedimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      nome: string
      tipo: $Enums.TipoProfissional
      nivel: $Enums.NivelComercial | null
      aluguelFixo: Prisma.Decimal | null
    }, ExtArgs["result"]["profissional"]>
    composites: {}
  }

  type ProfissionalGetPayload<S extends boolean | null | undefined | ProfissionalDefaultArgs> = $Result.GetResult<Prisma.$ProfissionalPayload, S>

  type ProfissionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfissionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionalCountAggregateInputType | true
    }

  export interface ProfissionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profissional'], meta: { name: 'Profissional' } }
    /**
     * Find zero or one Profissional that matches the filter.
     * @param {ProfissionalFindUniqueArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfissionalFindUniqueArgs>(args: SelectSubset<T, ProfissionalFindUniqueArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfissionalFindUniqueOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfissionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfissionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfissionalFindFirstArgs>(args?: SelectSubset<T, ProfissionalFindFirstArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfissionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfissionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionals
     * const profissionals = await prisma.profissional.findMany()
     * 
     * // Get first 10 Profissionals
     * const profissionals = await prisma.profissional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profissionalWithIdOnly = await prisma.profissional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfissionalFindManyArgs>(args?: SelectSubset<T, ProfissionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional.
     * @param {ProfissionalCreateArgs} args - Arguments to create a Profissional.
     * @example
     * // Create one Profissional
     * const Profissional = await prisma.profissional.create({
     *   data: {
     *     // ... data to create a Profissional
     *   }
     * })
     * 
     */
    create<T extends ProfissionalCreateArgs>(args: SelectSubset<T, ProfissionalCreateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionals.
     * @param {ProfissionalCreateManyArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfissionalCreateManyArgs>(args?: SelectSubset<T, ProfissionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profissionals and returns the data saved in the database.
     * @param {ProfissionalCreateManyAndReturnArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfissionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfissionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profissional.
     * @param {ProfissionalDeleteArgs} args - Arguments to delete one Profissional.
     * @example
     * // Delete one Profissional
     * const Profissional = await prisma.profissional.delete({
     *   where: {
     *     // ... filter to delete one Profissional
     *   }
     * })
     * 
     */
    delete<T extends ProfissionalDeleteArgs>(args: SelectSubset<T, ProfissionalDeleteArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional.
     * @param {ProfissionalUpdateArgs} args - Arguments to update one Profissional.
     * @example
     * // Update one Profissional
     * const profissional = await prisma.profissional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfissionalUpdateArgs>(args: SelectSubset<T, ProfissionalUpdateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionals.
     * @param {ProfissionalDeleteManyArgs} args - Arguments to filter Profissionals to delete.
     * @example
     * // Delete a few Profissionals
     * const { count } = await prisma.profissional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfissionalDeleteManyArgs>(args?: SelectSubset<T, ProfissionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfissionalUpdateManyArgs>(args: SelectSubset<T, ProfissionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals and returns the data updated in the database.
     * @param {ProfissionalUpdateManyAndReturnArgs} args - Arguments to update many Profissionals.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfissionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfissionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profissional.
     * @param {ProfissionalUpsertArgs} args - Arguments to update or create a Profissional.
     * @example
     * // Update or create a Profissional
     * const profissional = await prisma.profissional.upsert({
     *   create: {
     *     // ... data to create a Profissional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional we want to update
     *   }
     * })
     */
    upsert<T extends ProfissionalUpsertArgs>(args: SelectSubset<T, ProfissionalUpsertArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalCountArgs} args - Arguments to filter Profissionals to count.
     * @example
     * // Count the number of Profissionals
     * const count = await prisma.profissional.count({
     *   where: {
     *     // ... the filter for the Profissionals we want to count
     *   }
     * })
    **/
    count<T extends ProfissionalCountArgs>(
      args?: Subset<T, ProfissionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfissionalAggregateArgs>(args: Subset<T, ProfissionalAggregateArgs>): Prisma.PrismaPromise<GetProfissionalAggregateType<T>>

    /**
     * Group by Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalGroupByArgs} args - Group by arguments.
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
      T extends ProfissionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfissionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfissionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfissionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profissional model
   */
  readonly fields: ProfissionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profissional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfissionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comissoes<T extends Profissional$comissoesArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$comissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    premiacoes<T extends Profissional$premiacoesArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$premiacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    procedimentos<T extends Profissional$procedimentosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$procedimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profissional model
   */
  interface ProfissionalFieldRefs {
    readonly id: FieldRef<"Profissional", 'String'>
    readonly createdAt: FieldRef<"Profissional", 'DateTime'>
    readonly updatedAt: FieldRef<"Profissional", 'DateTime'>
    readonly nome: FieldRef<"Profissional", 'String'>
    readonly tipo: FieldRef<"Profissional", 'TipoProfissional'>
    readonly nivel: FieldRef<"Profissional", 'NivelComercial'>
    readonly aluguelFixo: FieldRef<"Profissional", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Profissional findUnique
   */
  export type ProfissionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findUniqueOrThrow
   */
  export type ProfissionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findFirst
   */
  export type ProfissionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findFirstOrThrow
   */
  export type ProfissionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findMany
   */
  export type ProfissionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissionals to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional create
   */
  export type ProfissionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profissional.
     */
    data: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
  }

  /**
   * Profissional createMany
   */
  export type ProfissionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissional createManyAndReturn
   */
  export type ProfissionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissional update
   */
  export type ProfissionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profissional.
     */
    data: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
    /**
     * Choose, which Profissional to update.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional updateMany
   */
  export type ProfissionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional updateManyAndReturn
   */
  export type ProfissionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional upsert
   */
  export type ProfissionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profissional to update in case it exists.
     */
    where: ProfissionalWhereUniqueInput
    /**
     * In case the Profissional found by the `where` argument doesn't exist, create a new Profissional with this data.
     */
    create: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
    /**
     * In case the Profissional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
  }

  /**
   * Profissional delete
   */
  export type ProfissionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter which Profissional to delete.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional deleteMany
   */
  export type ProfissionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissionals to delete
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to delete.
     */
    limit?: number
  }

  /**
   * Profissional.comissoes
   */
  export type Profissional$comissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    where?: CommissionWhereInput
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    cursor?: CommissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Profissional.premiacoes
   */
  export type Profissional$premiacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    where?: PremiacaoWhereInput
    orderBy?: PremiacaoOrderByWithRelationInput | PremiacaoOrderByWithRelationInput[]
    cursor?: PremiacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremiacaoScalarFieldEnum | PremiacaoScalarFieldEnum[]
  }

  /**
   * Profissional.procedimentos
   */
  export type Profissional$procedimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    where?: ProcedimentoWhereInput
    orderBy?: ProcedimentoOrderByWithRelationInput | ProcedimentoOrderByWithRelationInput[]
    cursor?: ProcedimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcedimentoScalarFieldEnum | ProcedimentoScalarFieldEnum[]
  }

  /**
   * Profissional without action
   */
  export type ProfissionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
  }


  /**
   * Model Commission
   */

  export type AggregateCommission = {
    _count: CommissionCountAggregateOutputType | null
    _avg: CommissionAvgAggregateOutputType | null
    _sum: CommissionSumAggregateOutputType | null
    _min: CommissionMinAggregateOutputType | null
    _max: CommissionMaxAggregateOutputType | null
  }

  export type CommissionAvgAggregateOutputType = {
    percentual: Decimal | null
    valorFixo: Decimal | null
  }

  export type CommissionSumAggregateOutputType = {
    percentual: Decimal | null
    valorFixo: Decimal | null
  }

  export type CommissionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profissionalId: string | null
    categoria: $Enums.CategoriaComissao | null
    tipoCalculo: $Enums.TipoCalculo | null
    percentual: Decimal | null
    valorFixo: Decimal | null
    ativo: boolean | null
  }

  export type CommissionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profissionalId: string | null
    categoria: $Enums.CategoriaComissao | null
    tipoCalculo: $Enums.TipoCalculo | null
    percentual: Decimal | null
    valorFixo: Decimal | null
    ativo: boolean | null
  }

  export type CommissionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    profissionalId: number
    categoria: number
    tipoCalculo: number
    percentual: number
    valorFixo: number
    tabelaProgressiva: number
    ativo: number
    _all: number
  }


  export type CommissionAvgAggregateInputType = {
    percentual?: true
    valorFixo?: true
  }

  export type CommissionSumAggregateInputType = {
    percentual?: true
    valorFixo?: true
  }

  export type CommissionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    profissionalId?: true
    categoria?: true
    tipoCalculo?: true
    percentual?: true
    valorFixo?: true
    ativo?: true
  }

  export type CommissionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    profissionalId?: true
    categoria?: true
    tipoCalculo?: true
    percentual?: true
    valorFixo?: true
    ativo?: true
  }

  export type CommissionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    profissionalId?: true
    categoria?: true
    tipoCalculo?: true
    percentual?: true
    valorFixo?: true
    tabelaProgressiva?: true
    ativo?: true
    _all?: true
  }

  export type CommissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commission to aggregate.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commissions
    **/
    _count?: true | CommissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommissionMaxAggregateInputType
  }

  export type GetCommissionAggregateType<T extends CommissionAggregateArgs> = {
        [P in keyof T & keyof AggregateCommission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommission[P]>
      : GetScalarType<T[P], AggregateCommission[P]>
  }




  export type CommissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionWhereInput
    orderBy?: CommissionOrderByWithAggregationInput | CommissionOrderByWithAggregationInput[]
    by: CommissionScalarFieldEnum[] | CommissionScalarFieldEnum
    having?: CommissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommissionCountAggregateInputType | true
    _avg?: CommissionAvgAggregateInputType
    _sum?: CommissionSumAggregateInputType
    _min?: CommissionMinAggregateInputType
    _max?: CommissionMaxAggregateInputType
  }

  export type CommissionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    profissionalId: string
    categoria: $Enums.CategoriaComissao
    tipoCalculo: $Enums.TipoCalculo
    percentual: Decimal | null
    valorFixo: Decimal | null
    tabelaProgressiva: JsonValue | null
    ativo: boolean
    _count: CommissionCountAggregateOutputType | null
    _avg: CommissionAvgAggregateOutputType | null
    _sum: CommissionSumAggregateOutputType | null
    _min: CommissionMinAggregateOutputType | null
    _max: CommissionMaxAggregateOutputType | null
  }

  type GetCommissionGroupByPayload<T extends CommissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommissionGroupByOutputType[P]>
            : GetScalarType<T[P], CommissionGroupByOutputType[P]>
        }
      >
    >


  export type CommissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    categoria?: boolean
    tipoCalculo?: boolean
    percentual?: boolean
    valorFixo?: boolean
    tabelaProgressiva?: boolean
    ativo?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commission"]>

  export type CommissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    categoria?: boolean
    tipoCalculo?: boolean
    percentual?: boolean
    valorFixo?: boolean
    tabelaProgressiva?: boolean
    ativo?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commission"]>

  export type CommissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    categoria?: boolean
    tipoCalculo?: boolean
    percentual?: boolean
    valorFixo?: boolean
    tabelaProgressiva?: boolean
    ativo?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commission"]>

  export type CommissionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    categoria?: boolean
    tipoCalculo?: boolean
    percentual?: boolean
    valorFixo?: boolean
    tabelaProgressiva?: boolean
    ativo?: boolean
  }

  export type CommissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "profissionalId" | "categoria" | "tipoCalculo" | "percentual" | "valorFixo" | "tabelaProgressiva" | "ativo", ExtArgs["result"]["commission"]>
  export type CommissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }
  export type CommissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }
  export type CommissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }

  export type $CommissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commission"
    objects: {
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      profissionalId: string
      categoria: $Enums.CategoriaComissao
      tipoCalculo: $Enums.TipoCalculo
      percentual: Prisma.Decimal | null
      valorFixo: Prisma.Decimal | null
      tabelaProgressiva: Prisma.JsonValue | null
      ativo: boolean
    }, ExtArgs["result"]["commission"]>
    composites: {}
  }

  type CommissionGetPayload<S extends boolean | null | undefined | CommissionDefaultArgs> = $Result.GetResult<Prisma.$CommissionPayload, S>

  type CommissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommissionCountAggregateInputType | true
    }

  export interface CommissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commission'], meta: { name: 'Commission' } }
    /**
     * Find zero or one Commission that matches the filter.
     * @param {CommissionFindUniqueArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommissionFindUniqueArgs>(args: SelectSubset<T, CommissionFindUniqueArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommissionFindUniqueOrThrowArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommissionFindUniqueOrThrowArgs>(args: SelectSubset<T, CommissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionFindFirstArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommissionFindFirstArgs>(args?: SelectSubset<T, CommissionFindFirstArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionFindFirstOrThrowArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommissionFindFirstOrThrowArgs>(args?: SelectSubset<T, CommissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commissions
     * const commissions = await prisma.commission.findMany()
     * 
     * // Get first 10 Commissions
     * const commissions = await prisma.commission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commissionWithIdOnly = await prisma.commission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommissionFindManyArgs>(args?: SelectSubset<T, CommissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commission.
     * @param {CommissionCreateArgs} args - Arguments to create a Commission.
     * @example
     * // Create one Commission
     * const Commission = await prisma.commission.create({
     *   data: {
     *     // ... data to create a Commission
     *   }
     * })
     * 
     */
    create<T extends CommissionCreateArgs>(args: SelectSubset<T, CommissionCreateArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commissions.
     * @param {CommissionCreateManyArgs} args - Arguments to create many Commissions.
     * @example
     * // Create many Commissions
     * const commission = await prisma.commission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommissionCreateManyArgs>(args?: SelectSubset<T, CommissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commissions and returns the data saved in the database.
     * @param {CommissionCreateManyAndReturnArgs} args - Arguments to create many Commissions.
     * @example
     * // Create many Commissions
     * const commission = await prisma.commission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commissions and only return the `id`
     * const commissionWithIdOnly = await prisma.commission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommissionCreateManyAndReturnArgs>(args?: SelectSubset<T, CommissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commission.
     * @param {CommissionDeleteArgs} args - Arguments to delete one Commission.
     * @example
     * // Delete one Commission
     * const Commission = await prisma.commission.delete({
     *   where: {
     *     // ... filter to delete one Commission
     *   }
     * })
     * 
     */
    delete<T extends CommissionDeleteArgs>(args: SelectSubset<T, CommissionDeleteArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commission.
     * @param {CommissionUpdateArgs} args - Arguments to update one Commission.
     * @example
     * // Update one Commission
     * const commission = await prisma.commission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommissionUpdateArgs>(args: SelectSubset<T, CommissionUpdateArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commissions.
     * @param {CommissionDeleteManyArgs} args - Arguments to filter Commissions to delete.
     * @example
     * // Delete a few Commissions
     * const { count } = await prisma.commission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommissionDeleteManyArgs>(args?: SelectSubset<T, CommissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commissions
     * const commission = await prisma.commission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommissionUpdateManyArgs>(args: SelectSubset<T, CommissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commissions and returns the data updated in the database.
     * @param {CommissionUpdateManyAndReturnArgs} args - Arguments to update many Commissions.
     * @example
     * // Update many Commissions
     * const commission = await prisma.commission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commissions and only return the `id`
     * const commissionWithIdOnly = await prisma.commission.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommissionUpdateManyAndReturnArgs>(args: SelectSubset<T, CommissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commission.
     * @param {CommissionUpsertArgs} args - Arguments to update or create a Commission.
     * @example
     * // Update or create a Commission
     * const commission = await prisma.commission.upsert({
     *   create: {
     *     // ... data to create a Commission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commission we want to update
     *   }
     * })
     */
    upsert<T extends CommissionUpsertArgs>(args: SelectSubset<T, CommissionUpsertArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionCountArgs} args - Arguments to filter Commissions to count.
     * @example
     * // Count the number of Commissions
     * const count = await prisma.commission.count({
     *   where: {
     *     // ... the filter for the Commissions we want to count
     *   }
     * })
    **/
    count<T extends CommissionCountArgs>(
      args?: Subset<T, CommissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommissionAggregateArgs>(args: Subset<T, CommissionAggregateArgs>): Prisma.PrismaPromise<GetCommissionAggregateType<T>>

    /**
     * Group by Commission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionGroupByArgs} args - Group by arguments.
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
      T extends CommissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommissionGroupByArgs['orderBy'] }
        : { orderBy?: CommissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commission model
   */
  readonly fields: CommissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Commission model
   */
  interface CommissionFieldRefs {
    readonly id: FieldRef<"Commission", 'String'>
    readonly createdAt: FieldRef<"Commission", 'DateTime'>
    readonly updatedAt: FieldRef<"Commission", 'DateTime'>
    readonly profissionalId: FieldRef<"Commission", 'String'>
    readonly categoria: FieldRef<"Commission", 'CategoriaComissao'>
    readonly tipoCalculo: FieldRef<"Commission", 'TipoCalculo'>
    readonly percentual: FieldRef<"Commission", 'Decimal'>
    readonly valorFixo: FieldRef<"Commission", 'Decimal'>
    readonly tabelaProgressiva: FieldRef<"Commission", 'Json'>
    readonly ativo: FieldRef<"Commission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Commission findUnique
   */
  export type CommissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission findUniqueOrThrow
   */
  export type CommissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission findFirst
   */
  export type CommissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commissions.
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commissions.
     */
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Commission findFirstOrThrow
   */
  export type CommissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commissions.
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commissions.
     */
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Commission findMany
   */
  export type CommissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commissions to fetch.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commissions.
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Commission create
   */
  export type CommissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Commission.
     */
    data: XOR<CommissionCreateInput, CommissionUncheckedCreateInput>
  }

  /**
   * Commission createMany
   */
  export type CommissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commissions.
     */
    data: CommissionCreateManyInput | CommissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commission createManyAndReturn
   */
  export type CommissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * The data used to create many Commissions.
     */
    data: CommissionCreateManyInput | CommissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commission update
   */
  export type CommissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Commission.
     */
    data: XOR<CommissionUpdateInput, CommissionUncheckedUpdateInput>
    /**
     * Choose, which Commission to update.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission updateMany
   */
  export type CommissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commissions.
     */
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyInput>
    /**
     * Filter which Commissions to update
     */
    where?: CommissionWhereInput
    /**
     * Limit how many Commissions to update.
     */
    limit?: number
  }

  /**
   * Commission updateManyAndReturn
   */
  export type CommissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * The data used to update Commissions.
     */
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyInput>
    /**
     * Filter which Commissions to update
     */
    where?: CommissionWhereInput
    /**
     * Limit how many Commissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commission upsert
   */
  export type CommissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Commission to update in case it exists.
     */
    where: CommissionWhereUniqueInput
    /**
     * In case the Commission found by the `where` argument doesn't exist, create a new Commission with this data.
     */
    create: XOR<CommissionCreateInput, CommissionUncheckedCreateInput>
    /**
     * In case the Commission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommissionUpdateInput, CommissionUncheckedUpdateInput>
  }

  /**
   * Commission delete
   */
  export type CommissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter which Commission to delete.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission deleteMany
   */
  export type CommissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commissions to delete
     */
    where?: CommissionWhereInput
    /**
     * Limit how many Commissions to delete.
     */
    limit?: number
  }

  /**
   * Commission without action
   */
  export type CommissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
  }


  /**
   * Model Premiacao
   */

  export type AggregatePremiacao = {
    _count: PremiacaoCountAggregateOutputType | null
    _avg: PremiacaoAvgAggregateOutputType | null
    _sum: PremiacaoSumAggregateOutputType | null
    _min: PremiacaoMinAggregateOutputType | null
    _max: PremiacaoMaxAggregateOutputType | null
  }

  export type PremiacaoAvgAggregateOutputType = {
    bonusMetaIndividual: Decimal | null
    metaIndividual: number | null
  }

  export type PremiacaoSumAggregateOutputType = {
    bonusMetaIndividual: Decimal | null
    metaIndividual: number | null
  }

  export type PremiacaoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profissionalId: string | null
    tipo: $Enums.TipoPremiacao | null
    descricao: string | null
    bonusMetaIndividual: Decimal | null
    metaIndividual: number | null
    ativo: boolean | null
  }

  export type PremiacaoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profissionalId: string | null
    tipo: $Enums.TipoPremiacao | null
    descricao: string | null
    bonusMetaIndividual: Decimal | null
    metaIndividual: number | null
    ativo: boolean | null
  }

  export type PremiacaoCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    profissionalId: number
    tipo: number
    descricao: number
    tabelaFaixas: number
    bonusMetaIndividual: number
    metaIndividual: number
    ativo: number
    _all: number
  }


  export type PremiacaoAvgAggregateInputType = {
    bonusMetaIndividual?: true
    metaIndividual?: true
  }

  export type PremiacaoSumAggregateInputType = {
    bonusMetaIndividual?: true
    metaIndividual?: true
  }

  export type PremiacaoMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    profissionalId?: true
    tipo?: true
    descricao?: true
    bonusMetaIndividual?: true
    metaIndividual?: true
    ativo?: true
  }

  export type PremiacaoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    profissionalId?: true
    tipo?: true
    descricao?: true
    bonusMetaIndividual?: true
    metaIndividual?: true
    ativo?: true
  }

  export type PremiacaoCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    profissionalId?: true
    tipo?: true
    descricao?: true
    tabelaFaixas?: true
    bonusMetaIndividual?: true
    metaIndividual?: true
    ativo?: true
    _all?: true
  }

  export type PremiacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Premiacao to aggregate.
     */
    where?: PremiacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premiacaos to fetch.
     */
    orderBy?: PremiacaoOrderByWithRelationInput | PremiacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremiacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premiacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premiacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Premiacaos
    **/
    _count?: true | PremiacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PremiacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PremiacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremiacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremiacaoMaxAggregateInputType
  }

  export type GetPremiacaoAggregateType<T extends PremiacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePremiacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremiacao[P]>
      : GetScalarType<T[P], AggregatePremiacao[P]>
  }




  export type PremiacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiacaoWhereInput
    orderBy?: PremiacaoOrderByWithAggregationInput | PremiacaoOrderByWithAggregationInput[]
    by: PremiacaoScalarFieldEnum[] | PremiacaoScalarFieldEnum
    having?: PremiacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremiacaoCountAggregateInputType | true
    _avg?: PremiacaoAvgAggregateInputType
    _sum?: PremiacaoSumAggregateInputType
    _min?: PremiacaoMinAggregateInputType
    _max?: PremiacaoMaxAggregateInputType
  }

  export type PremiacaoGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    profissionalId: string
    tipo: $Enums.TipoPremiacao
    descricao: string
    tabelaFaixas: JsonValue | null
    bonusMetaIndividual: Decimal | null
    metaIndividual: number | null
    ativo: boolean
    _count: PremiacaoCountAggregateOutputType | null
    _avg: PremiacaoAvgAggregateOutputType | null
    _sum: PremiacaoSumAggregateOutputType | null
    _min: PremiacaoMinAggregateOutputType | null
    _max: PremiacaoMaxAggregateOutputType | null
  }

  type GetPremiacaoGroupByPayload<T extends PremiacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremiacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremiacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremiacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PremiacaoGroupByOutputType[P]>
        }
      >
    >


  export type PremiacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    tipo?: boolean
    descricao?: boolean
    tabelaFaixas?: boolean
    bonusMetaIndividual?: boolean
    metaIndividual?: boolean
    ativo?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiacao"]>

  export type PremiacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    tipo?: boolean
    descricao?: boolean
    tabelaFaixas?: boolean
    bonusMetaIndividual?: boolean
    metaIndividual?: boolean
    ativo?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiacao"]>

  export type PremiacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    tipo?: boolean
    descricao?: boolean
    tabelaFaixas?: boolean
    bonusMetaIndividual?: boolean
    metaIndividual?: boolean
    ativo?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiacao"]>

  export type PremiacaoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionalId?: boolean
    tipo?: boolean
    descricao?: boolean
    tabelaFaixas?: boolean
    bonusMetaIndividual?: boolean
    metaIndividual?: boolean
    ativo?: boolean
  }

  export type PremiacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "profissionalId" | "tipo" | "descricao" | "tabelaFaixas" | "bonusMetaIndividual" | "metaIndividual" | "ativo", ExtArgs["result"]["premiacao"]>
  export type PremiacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }
  export type PremiacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }
  export type PremiacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }

  export type $PremiacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Premiacao"
    objects: {
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      profissionalId: string
      tipo: $Enums.TipoPremiacao
      descricao: string
      tabelaFaixas: Prisma.JsonValue | null
      bonusMetaIndividual: Prisma.Decimal | null
      metaIndividual: number | null
      ativo: boolean
    }, ExtArgs["result"]["premiacao"]>
    composites: {}
  }

  type PremiacaoGetPayload<S extends boolean | null | undefined | PremiacaoDefaultArgs> = $Result.GetResult<Prisma.$PremiacaoPayload, S>

  type PremiacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremiacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremiacaoCountAggregateInputType | true
    }

  export interface PremiacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Premiacao'], meta: { name: 'Premiacao' } }
    /**
     * Find zero or one Premiacao that matches the filter.
     * @param {PremiacaoFindUniqueArgs} args - Arguments to find a Premiacao
     * @example
     * // Get one Premiacao
     * const premiacao = await prisma.premiacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremiacaoFindUniqueArgs>(args: SelectSubset<T, PremiacaoFindUniqueArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Premiacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremiacaoFindUniqueOrThrowArgs} args - Arguments to find a Premiacao
     * @example
     * // Get one Premiacao
     * const premiacao = await prisma.premiacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremiacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PremiacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Premiacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiacaoFindFirstArgs} args - Arguments to find a Premiacao
     * @example
     * // Get one Premiacao
     * const premiacao = await prisma.premiacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremiacaoFindFirstArgs>(args?: SelectSubset<T, PremiacaoFindFirstArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Premiacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiacaoFindFirstOrThrowArgs} args - Arguments to find a Premiacao
     * @example
     * // Get one Premiacao
     * const premiacao = await prisma.premiacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremiacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PremiacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Premiacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Premiacaos
     * const premiacaos = await prisma.premiacao.findMany()
     * 
     * // Get first 10 Premiacaos
     * const premiacaos = await prisma.premiacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premiacaoWithIdOnly = await prisma.premiacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremiacaoFindManyArgs>(args?: SelectSubset<T, PremiacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Premiacao.
     * @param {PremiacaoCreateArgs} args - Arguments to create a Premiacao.
     * @example
     * // Create one Premiacao
     * const Premiacao = await prisma.premiacao.create({
     *   data: {
     *     // ... data to create a Premiacao
     *   }
     * })
     * 
     */
    create<T extends PremiacaoCreateArgs>(args: SelectSubset<T, PremiacaoCreateArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Premiacaos.
     * @param {PremiacaoCreateManyArgs} args - Arguments to create many Premiacaos.
     * @example
     * // Create many Premiacaos
     * const premiacao = await prisma.premiacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremiacaoCreateManyArgs>(args?: SelectSubset<T, PremiacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Premiacaos and returns the data saved in the database.
     * @param {PremiacaoCreateManyAndReturnArgs} args - Arguments to create many Premiacaos.
     * @example
     * // Create many Premiacaos
     * const premiacao = await prisma.premiacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Premiacaos and only return the `id`
     * const premiacaoWithIdOnly = await prisma.premiacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremiacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PremiacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Premiacao.
     * @param {PremiacaoDeleteArgs} args - Arguments to delete one Premiacao.
     * @example
     * // Delete one Premiacao
     * const Premiacao = await prisma.premiacao.delete({
     *   where: {
     *     // ... filter to delete one Premiacao
     *   }
     * })
     * 
     */
    delete<T extends PremiacaoDeleteArgs>(args: SelectSubset<T, PremiacaoDeleteArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Premiacao.
     * @param {PremiacaoUpdateArgs} args - Arguments to update one Premiacao.
     * @example
     * // Update one Premiacao
     * const premiacao = await prisma.premiacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremiacaoUpdateArgs>(args: SelectSubset<T, PremiacaoUpdateArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Premiacaos.
     * @param {PremiacaoDeleteManyArgs} args - Arguments to filter Premiacaos to delete.
     * @example
     * // Delete a few Premiacaos
     * const { count } = await prisma.premiacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremiacaoDeleteManyArgs>(args?: SelectSubset<T, PremiacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Premiacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Premiacaos
     * const premiacao = await prisma.premiacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremiacaoUpdateManyArgs>(args: SelectSubset<T, PremiacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Premiacaos and returns the data updated in the database.
     * @param {PremiacaoUpdateManyAndReturnArgs} args - Arguments to update many Premiacaos.
     * @example
     * // Update many Premiacaos
     * const premiacao = await prisma.premiacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Premiacaos and only return the `id`
     * const premiacaoWithIdOnly = await prisma.premiacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends PremiacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PremiacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Premiacao.
     * @param {PremiacaoUpsertArgs} args - Arguments to update or create a Premiacao.
     * @example
     * // Update or create a Premiacao
     * const premiacao = await prisma.premiacao.upsert({
     *   create: {
     *     // ... data to create a Premiacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Premiacao we want to update
     *   }
     * })
     */
    upsert<T extends PremiacaoUpsertArgs>(args: SelectSubset<T, PremiacaoUpsertArgs<ExtArgs>>): Prisma__PremiacaoClient<$Result.GetResult<Prisma.$PremiacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Premiacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiacaoCountArgs} args - Arguments to filter Premiacaos to count.
     * @example
     * // Count the number of Premiacaos
     * const count = await prisma.premiacao.count({
     *   where: {
     *     // ... the filter for the Premiacaos we want to count
     *   }
     * })
    **/
    count<T extends PremiacaoCountArgs>(
      args?: Subset<T, PremiacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremiacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Premiacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PremiacaoAggregateArgs>(args: Subset<T, PremiacaoAggregateArgs>): Prisma.PrismaPromise<GetPremiacaoAggregateType<T>>

    /**
     * Group by Premiacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiacaoGroupByArgs} args - Group by arguments.
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
      T extends PremiacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremiacaoGroupByArgs['orderBy'] }
        : { orderBy?: PremiacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PremiacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremiacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Premiacao model
   */
  readonly fields: PremiacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Premiacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremiacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Premiacao model
   */
  interface PremiacaoFieldRefs {
    readonly id: FieldRef<"Premiacao", 'String'>
    readonly createdAt: FieldRef<"Premiacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Premiacao", 'DateTime'>
    readonly profissionalId: FieldRef<"Premiacao", 'String'>
    readonly tipo: FieldRef<"Premiacao", 'TipoPremiacao'>
    readonly descricao: FieldRef<"Premiacao", 'String'>
    readonly tabelaFaixas: FieldRef<"Premiacao", 'Json'>
    readonly bonusMetaIndividual: FieldRef<"Premiacao", 'Decimal'>
    readonly metaIndividual: FieldRef<"Premiacao", 'Int'>
    readonly ativo: FieldRef<"Premiacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Premiacao findUnique
   */
  export type PremiacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * Filter, which Premiacao to fetch.
     */
    where: PremiacaoWhereUniqueInput
  }

  /**
   * Premiacao findUniqueOrThrow
   */
  export type PremiacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * Filter, which Premiacao to fetch.
     */
    where: PremiacaoWhereUniqueInput
  }

  /**
   * Premiacao findFirst
   */
  export type PremiacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * Filter, which Premiacao to fetch.
     */
    where?: PremiacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premiacaos to fetch.
     */
    orderBy?: PremiacaoOrderByWithRelationInput | PremiacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Premiacaos.
     */
    cursor?: PremiacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premiacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premiacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Premiacaos.
     */
    distinct?: PremiacaoScalarFieldEnum | PremiacaoScalarFieldEnum[]
  }

  /**
   * Premiacao findFirstOrThrow
   */
  export type PremiacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * Filter, which Premiacao to fetch.
     */
    where?: PremiacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premiacaos to fetch.
     */
    orderBy?: PremiacaoOrderByWithRelationInput | PremiacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Premiacaos.
     */
    cursor?: PremiacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premiacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premiacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Premiacaos.
     */
    distinct?: PremiacaoScalarFieldEnum | PremiacaoScalarFieldEnum[]
  }

  /**
   * Premiacao findMany
   */
  export type PremiacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * Filter, which Premiacaos to fetch.
     */
    where?: PremiacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premiacaos to fetch.
     */
    orderBy?: PremiacaoOrderByWithRelationInput | PremiacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Premiacaos.
     */
    cursor?: PremiacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premiacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premiacaos.
     */
    skip?: number
    distinct?: PremiacaoScalarFieldEnum | PremiacaoScalarFieldEnum[]
  }

  /**
   * Premiacao create
   */
  export type PremiacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Premiacao.
     */
    data: XOR<PremiacaoCreateInput, PremiacaoUncheckedCreateInput>
  }

  /**
   * Premiacao createMany
   */
  export type PremiacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Premiacaos.
     */
    data: PremiacaoCreateManyInput | PremiacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Premiacao createManyAndReturn
   */
  export type PremiacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Premiacaos.
     */
    data: PremiacaoCreateManyInput | PremiacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Premiacao update
   */
  export type PremiacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Premiacao.
     */
    data: XOR<PremiacaoUpdateInput, PremiacaoUncheckedUpdateInput>
    /**
     * Choose, which Premiacao to update.
     */
    where: PremiacaoWhereUniqueInput
  }

  /**
   * Premiacao updateMany
   */
  export type PremiacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Premiacaos.
     */
    data: XOR<PremiacaoUpdateManyMutationInput, PremiacaoUncheckedUpdateManyInput>
    /**
     * Filter which Premiacaos to update
     */
    where?: PremiacaoWhereInput
    /**
     * Limit how many Premiacaos to update.
     */
    limit?: number
  }

  /**
   * Premiacao updateManyAndReturn
   */
  export type PremiacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * The data used to update Premiacaos.
     */
    data: XOR<PremiacaoUpdateManyMutationInput, PremiacaoUncheckedUpdateManyInput>
    /**
     * Filter which Premiacaos to update
     */
    where?: PremiacaoWhereInput
    /**
     * Limit how many Premiacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Premiacao upsert
   */
  export type PremiacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Premiacao to update in case it exists.
     */
    where: PremiacaoWhereUniqueInput
    /**
     * In case the Premiacao found by the `where` argument doesn't exist, create a new Premiacao with this data.
     */
    create: XOR<PremiacaoCreateInput, PremiacaoUncheckedCreateInput>
    /**
     * In case the Premiacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremiacaoUpdateInput, PremiacaoUncheckedUpdateInput>
  }

  /**
   * Premiacao delete
   */
  export type PremiacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
    /**
     * Filter which Premiacao to delete.
     */
    where: PremiacaoWhereUniqueInput
  }

  /**
   * Premiacao deleteMany
   */
  export type PremiacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Premiacaos to delete
     */
    where?: PremiacaoWhereInput
    /**
     * Limit how many Premiacaos to delete.
     */
    limit?: number
  }

  /**
   * Premiacao without action
   */
  export type PremiacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premiacao
     */
    select?: PremiacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premiacao
     */
    omit?: PremiacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiacaoInclude<ExtArgs> | null
  }


  /**
   * Model Procedimento
   */

  export type AggregateProcedimento = {
    _count: ProcedimentoCountAggregateOutputType | null
    _avg: ProcedimentoAvgAggregateOutputType | null
    _sum: ProcedimentoSumAggregateOutputType | null
    _min: ProcedimentoMinAggregateOutputType | null
    _max: ProcedimentoMaxAggregateOutputType | null
  }

  export type ProcedimentoAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type ProcedimentoSumAggregateOutputType = {
    valor: Decimal | null
  }

  export type ProcedimentoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    dataAtendimento: Date | null
    valor: Decimal | null
    tipo: string | null
    status: string | null
    profissionalId: string | null
    pacienteId: string | null
  }

  export type ProcedimentoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    dataAtendimento: Date | null
    valor: Decimal | null
    tipo: string | null
    status: string | null
    profissionalId: string | null
    pacienteId: string | null
  }

  export type ProcedimentoCountAggregateOutputType = {
    id: number
    createdAt: number
    dataAtendimento: number
    valor: number
    tipo: number
    status: number
    profissionalId: number
    pacienteId: number
    _all: number
  }


  export type ProcedimentoAvgAggregateInputType = {
    valor?: true
  }

  export type ProcedimentoSumAggregateInputType = {
    valor?: true
  }

  export type ProcedimentoMinAggregateInputType = {
    id?: true
    createdAt?: true
    dataAtendimento?: true
    valor?: true
    tipo?: true
    status?: true
    profissionalId?: true
    pacienteId?: true
  }

  export type ProcedimentoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    dataAtendimento?: true
    valor?: true
    tipo?: true
    status?: true
    profissionalId?: true
    pacienteId?: true
  }

  export type ProcedimentoCountAggregateInputType = {
    id?: true
    createdAt?: true
    dataAtendimento?: true
    valor?: true
    tipo?: true
    status?: true
    profissionalId?: true
    pacienteId?: true
    _all?: true
  }

  export type ProcedimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedimento to aggregate.
     */
    where?: ProcedimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedimentos to fetch.
     */
    orderBy?: ProcedimentoOrderByWithRelationInput | ProcedimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcedimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Procedimentos
    **/
    _count?: true | ProcedimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcedimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcedimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcedimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcedimentoMaxAggregateInputType
  }

  export type GetProcedimentoAggregateType<T extends ProcedimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedimento[P]>
      : GetScalarType<T[P], AggregateProcedimento[P]>
  }




  export type ProcedimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedimentoWhereInput
    orderBy?: ProcedimentoOrderByWithAggregationInput | ProcedimentoOrderByWithAggregationInput[]
    by: ProcedimentoScalarFieldEnum[] | ProcedimentoScalarFieldEnum
    having?: ProcedimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcedimentoCountAggregateInputType | true
    _avg?: ProcedimentoAvgAggregateInputType
    _sum?: ProcedimentoSumAggregateInputType
    _min?: ProcedimentoMinAggregateInputType
    _max?: ProcedimentoMaxAggregateInputType
  }

  export type ProcedimentoGroupByOutputType = {
    id: string
    createdAt: Date
    dataAtendimento: Date
    valor: Decimal
    tipo: string
    status: string
    profissionalId: string
    pacienteId: string
    _count: ProcedimentoCountAggregateOutputType | null
    _avg: ProcedimentoAvgAggregateOutputType | null
    _sum: ProcedimentoSumAggregateOutputType | null
    _min: ProcedimentoMinAggregateOutputType | null
    _max: ProcedimentoMaxAggregateOutputType | null
  }

  type GetProcedimentoGroupByPayload<T extends ProcedimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcedimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcedimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcedimentoGroupByOutputType[P]>
            : GetScalarType<T[P], ProcedimentoGroupByOutputType[P]>
        }
      >
    >


  export type ProcedimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    dataAtendimento?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    paymentMethods?: boolean | Procedimento$paymentMethodsArgs<ExtArgs>
    _count?: boolean | ProcedimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedimento"]>

  export type ProcedimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    dataAtendimento?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedimento"]>

  export type ProcedimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    dataAtendimento?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedimento"]>

  export type ProcedimentoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    dataAtendimento?: boolean
    valor?: boolean
    tipo?: boolean
    status?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
  }

  export type ProcedimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "dataAtendimento" | "valor" | "tipo" | "status" | "profissionalId" | "pacienteId", ExtArgs["result"]["procedimento"]>
  export type ProcedimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    paymentMethods?: boolean | Procedimento$paymentMethodsArgs<ExtArgs>
    _count?: boolean | ProcedimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProcedimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type ProcedimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $ProcedimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Procedimento"
    objects: {
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
      paciente: Prisma.$PacientePayload<ExtArgs>
      paymentMethods: Prisma.$PaymentMethodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      dataAtendimento: Date
      valor: Prisma.Decimal
      tipo: string
      status: string
      profissionalId: string
      pacienteId: string
    }, ExtArgs["result"]["procedimento"]>
    composites: {}
  }

  type ProcedimentoGetPayload<S extends boolean | null | undefined | ProcedimentoDefaultArgs> = $Result.GetResult<Prisma.$ProcedimentoPayload, S>

  type ProcedimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcedimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcedimentoCountAggregateInputType | true
    }

  export interface ProcedimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Procedimento'], meta: { name: 'Procedimento' } }
    /**
     * Find zero or one Procedimento that matches the filter.
     * @param {ProcedimentoFindUniqueArgs} args - Arguments to find a Procedimento
     * @example
     * // Get one Procedimento
     * const procedimento = await prisma.procedimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcedimentoFindUniqueArgs>(args: SelectSubset<T, ProcedimentoFindUniqueArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Procedimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcedimentoFindUniqueOrThrowArgs} args - Arguments to find a Procedimento
     * @example
     * // Get one Procedimento
     * const procedimento = await prisma.procedimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcedimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcedimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedimentoFindFirstArgs} args - Arguments to find a Procedimento
     * @example
     * // Get one Procedimento
     * const procedimento = await prisma.procedimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcedimentoFindFirstArgs>(args?: SelectSubset<T, ProcedimentoFindFirstArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedimentoFindFirstOrThrowArgs} args - Arguments to find a Procedimento
     * @example
     * // Get one Procedimento
     * const procedimento = await prisma.procedimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcedimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcedimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Procedimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procedimentos
     * const procedimentos = await prisma.procedimento.findMany()
     * 
     * // Get first 10 Procedimentos
     * const procedimentos = await prisma.procedimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procedimentoWithIdOnly = await prisma.procedimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcedimentoFindManyArgs>(args?: SelectSubset<T, ProcedimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Procedimento.
     * @param {ProcedimentoCreateArgs} args - Arguments to create a Procedimento.
     * @example
     * // Create one Procedimento
     * const Procedimento = await prisma.procedimento.create({
     *   data: {
     *     // ... data to create a Procedimento
     *   }
     * })
     * 
     */
    create<T extends ProcedimentoCreateArgs>(args: SelectSubset<T, ProcedimentoCreateArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Procedimentos.
     * @param {ProcedimentoCreateManyArgs} args - Arguments to create many Procedimentos.
     * @example
     * // Create many Procedimentos
     * const procedimento = await prisma.procedimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcedimentoCreateManyArgs>(args?: SelectSubset<T, ProcedimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Procedimentos and returns the data saved in the database.
     * @param {ProcedimentoCreateManyAndReturnArgs} args - Arguments to create many Procedimentos.
     * @example
     * // Create many Procedimentos
     * const procedimento = await prisma.procedimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Procedimentos and only return the `id`
     * const procedimentoWithIdOnly = await prisma.procedimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcedimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcedimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Procedimento.
     * @param {ProcedimentoDeleteArgs} args - Arguments to delete one Procedimento.
     * @example
     * // Delete one Procedimento
     * const Procedimento = await prisma.procedimento.delete({
     *   where: {
     *     // ... filter to delete one Procedimento
     *   }
     * })
     * 
     */
    delete<T extends ProcedimentoDeleteArgs>(args: SelectSubset<T, ProcedimentoDeleteArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Procedimento.
     * @param {ProcedimentoUpdateArgs} args - Arguments to update one Procedimento.
     * @example
     * // Update one Procedimento
     * const procedimento = await prisma.procedimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcedimentoUpdateArgs>(args: SelectSubset<T, ProcedimentoUpdateArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Procedimentos.
     * @param {ProcedimentoDeleteManyArgs} args - Arguments to filter Procedimentos to delete.
     * @example
     * // Delete a few Procedimentos
     * const { count } = await prisma.procedimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcedimentoDeleteManyArgs>(args?: SelectSubset<T, ProcedimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procedimentos
     * const procedimento = await prisma.procedimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcedimentoUpdateManyArgs>(args: SelectSubset<T, ProcedimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedimentos and returns the data updated in the database.
     * @param {ProcedimentoUpdateManyAndReturnArgs} args - Arguments to update many Procedimentos.
     * @example
     * // Update many Procedimentos
     * const procedimento = await prisma.procedimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Procedimentos and only return the `id`
     * const procedimentoWithIdOnly = await prisma.procedimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcedimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcedimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Procedimento.
     * @param {ProcedimentoUpsertArgs} args - Arguments to update or create a Procedimento.
     * @example
     * // Update or create a Procedimento
     * const procedimento = await prisma.procedimento.upsert({
     *   create: {
     *     // ... data to create a Procedimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procedimento we want to update
     *   }
     * })
     */
    upsert<T extends ProcedimentoUpsertArgs>(args: SelectSubset<T, ProcedimentoUpsertArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Procedimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedimentoCountArgs} args - Arguments to filter Procedimentos to count.
     * @example
     * // Count the number of Procedimentos
     * const count = await prisma.procedimento.count({
     *   where: {
     *     // ... the filter for the Procedimentos we want to count
     *   }
     * })
    **/
    count<T extends ProcedimentoCountArgs>(
      args?: Subset<T, ProcedimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcedimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procedimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcedimentoAggregateArgs>(args: Subset<T, ProcedimentoAggregateArgs>): Prisma.PrismaPromise<GetProcedimentoAggregateType<T>>

    /**
     * Group by Procedimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedimentoGroupByArgs} args - Group by arguments.
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
      T extends ProcedimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcedimentoGroupByArgs['orderBy'] }
        : { orderBy?: ProcedimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcedimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcedimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Procedimento model
   */
  readonly fields: ProcedimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Procedimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcedimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentMethods<T extends Procedimento$paymentMethodsArgs<ExtArgs> = {}>(args?: Subset<T, Procedimento$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Procedimento model
   */
  interface ProcedimentoFieldRefs {
    readonly id: FieldRef<"Procedimento", 'String'>
    readonly createdAt: FieldRef<"Procedimento", 'DateTime'>
    readonly dataAtendimento: FieldRef<"Procedimento", 'DateTime'>
    readonly valor: FieldRef<"Procedimento", 'Decimal'>
    readonly tipo: FieldRef<"Procedimento", 'String'>
    readonly status: FieldRef<"Procedimento", 'String'>
    readonly profissionalId: FieldRef<"Procedimento", 'String'>
    readonly pacienteId: FieldRef<"Procedimento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Procedimento findUnique
   */
  export type ProcedimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * Filter, which Procedimento to fetch.
     */
    where: ProcedimentoWhereUniqueInput
  }

  /**
   * Procedimento findUniqueOrThrow
   */
  export type ProcedimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * Filter, which Procedimento to fetch.
     */
    where: ProcedimentoWhereUniqueInput
  }

  /**
   * Procedimento findFirst
   */
  export type ProcedimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * Filter, which Procedimento to fetch.
     */
    where?: ProcedimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedimentos to fetch.
     */
    orderBy?: ProcedimentoOrderByWithRelationInput | ProcedimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedimentos.
     */
    cursor?: ProcedimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedimentos.
     */
    distinct?: ProcedimentoScalarFieldEnum | ProcedimentoScalarFieldEnum[]
  }

  /**
   * Procedimento findFirstOrThrow
   */
  export type ProcedimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * Filter, which Procedimento to fetch.
     */
    where?: ProcedimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedimentos to fetch.
     */
    orderBy?: ProcedimentoOrderByWithRelationInput | ProcedimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedimentos.
     */
    cursor?: ProcedimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedimentos.
     */
    distinct?: ProcedimentoScalarFieldEnum | ProcedimentoScalarFieldEnum[]
  }

  /**
   * Procedimento findMany
   */
  export type ProcedimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * Filter, which Procedimentos to fetch.
     */
    where?: ProcedimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedimentos to fetch.
     */
    orderBy?: ProcedimentoOrderByWithRelationInput | ProcedimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Procedimentos.
     */
    cursor?: ProcedimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedimentos.
     */
    skip?: number
    distinct?: ProcedimentoScalarFieldEnum | ProcedimentoScalarFieldEnum[]
  }

  /**
   * Procedimento create
   */
  export type ProcedimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Procedimento.
     */
    data: XOR<ProcedimentoCreateInput, ProcedimentoUncheckedCreateInput>
  }

  /**
   * Procedimento createMany
   */
  export type ProcedimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Procedimentos.
     */
    data: ProcedimentoCreateManyInput | ProcedimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Procedimento createManyAndReturn
   */
  export type ProcedimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Procedimentos.
     */
    data: ProcedimentoCreateManyInput | ProcedimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Procedimento update
   */
  export type ProcedimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Procedimento.
     */
    data: XOR<ProcedimentoUpdateInput, ProcedimentoUncheckedUpdateInput>
    /**
     * Choose, which Procedimento to update.
     */
    where: ProcedimentoWhereUniqueInput
  }

  /**
   * Procedimento updateMany
   */
  export type ProcedimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Procedimentos.
     */
    data: XOR<ProcedimentoUpdateManyMutationInput, ProcedimentoUncheckedUpdateManyInput>
    /**
     * Filter which Procedimentos to update
     */
    where?: ProcedimentoWhereInput
    /**
     * Limit how many Procedimentos to update.
     */
    limit?: number
  }

  /**
   * Procedimento updateManyAndReturn
   */
  export type ProcedimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * The data used to update Procedimentos.
     */
    data: XOR<ProcedimentoUpdateManyMutationInput, ProcedimentoUncheckedUpdateManyInput>
    /**
     * Filter which Procedimentos to update
     */
    where?: ProcedimentoWhereInput
    /**
     * Limit how many Procedimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Procedimento upsert
   */
  export type ProcedimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Procedimento to update in case it exists.
     */
    where: ProcedimentoWhereUniqueInput
    /**
     * In case the Procedimento found by the `where` argument doesn't exist, create a new Procedimento with this data.
     */
    create: XOR<ProcedimentoCreateInput, ProcedimentoUncheckedCreateInput>
    /**
     * In case the Procedimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcedimentoUpdateInput, ProcedimentoUncheckedUpdateInput>
  }

  /**
   * Procedimento delete
   */
  export type ProcedimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
    /**
     * Filter which Procedimento to delete.
     */
    where: ProcedimentoWhereUniqueInput
  }

  /**
   * Procedimento deleteMany
   */
  export type ProcedimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedimentos to delete
     */
    where?: ProcedimentoWhereInput
    /**
     * Limit how many Procedimentos to delete.
     */
    limit?: number
  }

  /**
   * Procedimento.paymentMethods
   */
  export type Procedimento$paymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    where?: PaymentMethodsWhereInput
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    cursor?: PaymentMethodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * Procedimento without action
   */
  export type ProcedimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedimento
     */
    select?: ProcedimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedimento
     */
    omit?: ProcedimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedimentoInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethods
   */

  export type AggregatePaymentMethods = {
    _count: PaymentMethodsCountAggregateOutputType | null
    _avg: PaymentMethodsAvgAggregateOutputType | null
    _sum: PaymentMethodsSumAggregateOutputType | null
    _min: PaymentMethodsMinAggregateOutputType | null
    _max: PaymentMethodsMaxAggregateOutputType | null
  }

  export type PaymentMethodsAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type PaymentMethodsSumAggregateOutputType = {
    valor: Decimal | null
  }

  export type PaymentMethodsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dataPagamento: Date | null
    valor: Decimal | null
    formaPagamento: string | null
    procedimentoId: string | null
  }

  export type PaymentMethodsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dataPagamento: Date | null
    valor: Decimal | null
    formaPagamento: string | null
    procedimentoId: string | null
  }

  export type PaymentMethodsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    dataPagamento: number
    valor: number
    formaPagamento: number
    procedimentoId: number
    _all: number
  }


  export type PaymentMethodsAvgAggregateInputType = {
    valor?: true
  }

  export type PaymentMethodsSumAggregateInputType = {
    valor?: true
  }

  export type PaymentMethodsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    dataPagamento?: true
    valor?: true
    formaPagamento?: true
    procedimentoId?: true
  }

  export type PaymentMethodsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    dataPagamento?: true
    valor?: true
    formaPagamento?: true
    procedimentoId?: true
  }

  export type PaymentMethodsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    dataPagamento?: true
    valor?: true
    formaPagamento?: true
    procedimentoId?: true
    _all?: true
  }

  export type PaymentMethodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to aggregate.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodsMaxAggregateInputType
  }

  export type GetPaymentMethodsAggregateType<T extends PaymentMethodsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethods[P]>
      : GetScalarType<T[P], AggregatePaymentMethods[P]>
  }




  export type PaymentMethodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodsWhereInput
    orderBy?: PaymentMethodsOrderByWithAggregationInput | PaymentMethodsOrderByWithAggregationInput[]
    by: PaymentMethodsScalarFieldEnum[] | PaymentMethodsScalarFieldEnum
    having?: PaymentMethodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodsCountAggregateInputType | true
    _avg?: PaymentMethodsAvgAggregateInputType
    _sum?: PaymentMethodsSumAggregateInputType
    _min?: PaymentMethodsMinAggregateInputType
    _max?: PaymentMethodsMaxAggregateInputType
  }

  export type PaymentMethodsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    dataPagamento: Date
    valor: Decimal
    formaPagamento: string
    procedimentoId: string
    _count: PaymentMethodsCountAggregateOutputType | null
    _avg: PaymentMethodsAvgAggregateOutputType | null
    _sum: PaymentMethodsSumAggregateOutputType | null
    _min: PaymentMethodsMinAggregateOutputType | null
    _max: PaymentMethodsMaxAggregateOutputType | null
  }

  type GetPaymentMethodsGroupByPayload<T extends PaymentMethodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataPagamento?: boolean
    valor?: boolean
    formaPagamento?: boolean
    procedimentoId?: boolean
    procedimento?: boolean | ProcedimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethods"]>

  export type PaymentMethodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataPagamento?: boolean
    valor?: boolean
    formaPagamento?: boolean
    procedimentoId?: boolean
    procedimento?: boolean | ProcedimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethods"]>

  export type PaymentMethodsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataPagamento?: boolean
    valor?: boolean
    formaPagamento?: boolean
    procedimentoId?: boolean
    procedimento?: boolean | ProcedimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethods"]>

  export type PaymentMethodsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataPagamento?: boolean
    valor?: boolean
    formaPagamento?: boolean
    procedimentoId?: boolean
  }

  export type PaymentMethodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "dataPagamento" | "valor" | "formaPagamento" | "procedimentoId", ExtArgs["result"]["paymentMethods"]>
  export type PaymentMethodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedimento?: boolean | ProcedimentoDefaultArgs<ExtArgs>
  }
  export type PaymentMethodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedimento?: boolean | ProcedimentoDefaultArgs<ExtArgs>
  }
  export type PaymentMethodsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedimento?: boolean | ProcedimentoDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethods"
    objects: {
      procedimento: Prisma.$ProcedimentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      dataPagamento: Date
      valor: Prisma.Decimal
      formaPagamento: string
      procedimentoId: string
    }, ExtArgs["result"]["paymentMethods"]>
    composites: {}
  }

  type PaymentMethodsGetPayload<S extends boolean | null | undefined | PaymentMethodsDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodsPayload, S>

  type PaymentMethodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodsCountAggregateInputType | true
    }

  export interface PaymentMethodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethods'], meta: { name: 'PaymentMethods' } }
    /**
     * Find zero or one PaymentMethods that matches the filter.
     * @param {PaymentMethodsFindUniqueArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodsFindUniqueArgs>(args: SelectSubset<T, PaymentMethodsFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodsFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsFindFirstArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodsFindFirstArgs>(args?: SelectSubset<T, PaymentMethodsFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsFindFirstOrThrowArgs} args - Arguments to find a PaymentMethods
     * @example
     * // Get one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodsWithIdOnly = await prisma.paymentMethods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodsFindManyArgs>(args?: SelectSubset<T, PaymentMethodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethods.
     * @param {PaymentMethodsCreateArgs} args - Arguments to create a PaymentMethods.
     * @example
     * // Create one PaymentMethods
     * const PaymentMethods = await prisma.paymentMethods.create({
     *   data: {
     *     // ... data to create a PaymentMethods
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodsCreateArgs>(args: SelectSubset<T, PaymentMethodsCreateArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodsCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodsCreateManyArgs>(args?: SelectSubset<T, PaymentMethodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodsCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodsWithIdOnly = await prisma.paymentMethods.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethods.
     * @param {PaymentMethodsDeleteArgs} args - Arguments to delete one PaymentMethods.
     * @example
     * // Delete one PaymentMethods
     * const PaymentMethods = await prisma.paymentMethods.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethods
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodsDeleteArgs>(args: SelectSubset<T, PaymentMethodsDeleteArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethods.
     * @param {PaymentMethodsUpdateArgs} args - Arguments to update one PaymentMethods.
     * @example
     * // Update one PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodsUpdateArgs>(args: SelectSubset<T, PaymentMethodsUpdateArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodsDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodsDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodsUpdateManyArgs>(args: SelectSubset<T, PaymentMethodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodsUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodsWithIdOnly = await prisma.paymentMethods.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentMethodsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethods.
     * @param {PaymentMethodsUpsertArgs} args - Arguments to update or create a PaymentMethods.
     * @example
     * // Update or create a PaymentMethods
     * const paymentMethods = await prisma.paymentMethods.upsert({
     *   create: {
     *     // ... data to create a PaymentMethods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethods we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodsUpsertArgs>(args: SelectSubset<T, PaymentMethodsUpsertArgs<ExtArgs>>): Prisma__PaymentMethodsClient<$Result.GetResult<Prisma.$PaymentMethodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethods.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodsCountArgs>(
      args?: Subset<T, PaymentMethodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodsAggregateArgs>(args: Subset<T, PaymentMethodsAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodsAggregateType<T>>

    /**
     * Group by PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodsGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethods model
   */
  readonly fields: PaymentMethodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedimento<T extends ProcedimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedimentoDefaultArgs<ExtArgs>>): Prisma__ProcedimentoClient<$Result.GetResult<Prisma.$ProcedimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentMethods model
   */
  interface PaymentMethodsFieldRefs {
    readonly id: FieldRef<"PaymentMethods", 'String'>
    readonly createdAt: FieldRef<"PaymentMethods", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethods", 'DateTime'>
    readonly dataPagamento: FieldRef<"PaymentMethods", 'DateTime'>
    readonly valor: FieldRef<"PaymentMethods", 'Decimal'>
    readonly formaPagamento: FieldRef<"PaymentMethods", 'String'>
    readonly procedimentoId: FieldRef<"PaymentMethods", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethods findUnique
   */
  export type PaymentMethodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods findUniqueOrThrow
   */
  export type PaymentMethodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods findFirst
   */
  export type PaymentMethodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * PaymentMethods findFirstOrThrow
   */
  export type PaymentMethodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * PaymentMethods findMany
   */
  export type PaymentMethodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodsOrderByWithRelationInput | PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodsScalarFieldEnum | PaymentMethodsScalarFieldEnum[]
  }

  /**
   * PaymentMethods create
   */
  export type PaymentMethodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethods.
     */
    data: XOR<PaymentMethodsCreateInput, PaymentMethodsUncheckedCreateInput>
  }

  /**
   * PaymentMethods createMany
   */
  export type PaymentMethodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodsCreateManyInput | PaymentMethodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethods createManyAndReturn
   */
  export type PaymentMethodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodsCreateManyInput | PaymentMethodsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethods update
   */
  export type PaymentMethodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethods.
     */
    data: XOR<PaymentMethodsUpdateInput, PaymentMethodsUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethods to update.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods updateMany
   */
  export type PaymentMethodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodsUpdateManyMutationInput, PaymentMethodsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodsWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethods updateManyAndReturn
   */
  export type PaymentMethodsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodsUpdateManyMutationInput, PaymentMethodsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodsWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethods upsert
   */
  export type PaymentMethodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethods to update in case it exists.
     */
    where: PaymentMethodsWhereUniqueInput
    /**
     * In case the PaymentMethods found by the `where` argument doesn't exist, create a new PaymentMethods with this data.
     */
    create: XOR<PaymentMethodsCreateInput, PaymentMethodsUncheckedCreateInput>
    /**
     * In case the PaymentMethods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodsUpdateInput, PaymentMethodsUncheckedUpdateInput>
  }

  /**
   * PaymentMethods delete
   */
  export type PaymentMethodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethods to delete.
     */
    where: PaymentMethodsWhereUniqueInput
  }

  /**
   * PaymentMethods deleteMany
   */
  export type PaymentMethodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodsWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethods without action
   */
  export type PaymentMethodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethods
     */
    select?: PaymentMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethods
     */
    omit?: PaymentMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodsInclude<ExtArgs> | null
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


  export const PacienteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nome: 'nome'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ProfissionalScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nome: 'nome',
    tipo: 'tipo',
    nivel: 'nivel',
    aluguelFixo: 'aluguelFixo'
  };

  export type ProfissionalScalarFieldEnum = (typeof ProfissionalScalarFieldEnum)[keyof typeof ProfissionalScalarFieldEnum]


  export const CommissionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profissionalId: 'profissionalId',
    categoria: 'categoria',
    tipoCalculo: 'tipoCalculo',
    percentual: 'percentual',
    valorFixo: 'valorFixo',
    tabelaProgressiva: 'tabelaProgressiva',
    ativo: 'ativo'
  };

  export type CommissionScalarFieldEnum = (typeof CommissionScalarFieldEnum)[keyof typeof CommissionScalarFieldEnum]


  export const PremiacaoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profissionalId: 'profissionalId',
    tipo: 'tipo',
    descricao: 'descricao',
    tabelaFaixas: 'tabelaFaixas',
    bonusMetaIndividual: 'bonusMetaIndividual',
    metaIndividual: 'metaIndividual',
    ativo: 'ativo'
  };

  export type PremiacaoScalarFieldEnum = (typeof PremiacaoScalarFieldEnum)[keyof typeof PremiacaoScalarFieldEnum]


  export const ProcedimentoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    dataAtendimento: 'dataAtendimento',
    valor: 'valor',
    tipo: 'tipo',
    status: 'status',
    profissionalId: 'profissionalId',
    pacienteId: 'pacienteId'
  };

  export type ProcedimentoScalarFieldEnum = (typeof ProcedimentoScalarFieldEnum)[keyof typeof ProcedimentoScalarFieldEnum]


  export const PaymentMethodsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dataPagamento: 'dataPagamento',
    valor: 'valor',
    formaPagamento: 'formaPagamento',
    procedimentoId: 'procedimentoId'
  };

  export type PaymentMethodsScalarFieldEnum = (typeof PaymentMethodsScalarFieldEnum)[keyof typeof PaymentMethodsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoProfissional'
   */
  export type EnumTipoProfissionalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoProfissional'>
    


  /**
   * Reference to a field of type 'TipoProfissional[]'
   */
  export type ListEnumTipoProfissionalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoProfissional[]'>
    


  /**
   * Reference to a field of type 'NivelComercial'
   */
  export type EnumNivelComercialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NivelComercial'>
    


  /**
   * Reference to a field of type 'NivelComercial[]'
   */
  export type ListEnumNivelComercialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NivelComercial[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CategoriaComissao'
   */
  export type EnumCategoriaComissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaComissao'>
    


  /**
   * Reference to a field of type 'CategoriaComissao[]'
   */
  export type ListEnumCategoriaComissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaComissao[]'>
    


  /**
   * Reference to a field of type 'TipoCalculo'
   */
  export type EnumTipoCalculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCalculo'>
    


  /**
   * Reference to a field of type 'TipoCalculo[]'
   */
  export type ListEnumTipoCalculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCalculo[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoPremiacao'
   */
  export type EnumTipoPremiacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPremiacao'>
    


  /**
   * Reference to a field of type 'TipoPremiacao[]'
   */
  export type ListEnumTipoPremiacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPremiacao[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: StringFilter<"Paciente"> | string
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    nome?: StringFilter<"Paciente"> | string
    procedimentos?: ProcedimentoListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    procedimentos?: ProcedimentoOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome_createdAt?: PacienteNomeCreatedAtCompoundUniqueInput
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    nome?: StringFilter<"Paciente"> | string
    procedimentos?: ProcedimentoListRelationFilter
  }, "id" | "nome_createdAt">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paciente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    nome?: StringWithAggregatesFilter<"Paciente"> | string
  }

  export type ProfissionalWhereInput = {
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    id?: StringFilter<"Profissional"> | string
    createdAt?: DateTimeFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeFilter<"Profissional"> | Date | string
    nome?: StringFilter<"Profissional"> | string
    tipo?: EnumTipoProfissionalFilter<"Profissional"> | $Enums.TipoProfissional
    nivel?: EnumNivelComercialNullableFilter<"Profissional"> | $Enums.NivelComercial | null
    aluguelFixo?: DecimalNullableFilter<"Profissional"> | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionListRelationFilter
    premiacoes?: PremiacaoListRelationFilter
    procedimentos?: ProcedimentoListRelationFilter
  }

  export type ProfissionalOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    nivel?: SortOrderInput | SortOrder
    aluguelFixo?: SortOrderInput | SortOrder
    comissoes?: CommissionOrderByRelationAggregateInput
    premiacoes?: PremiacaoOrderByRelationAggregateInput
    procedimentos?: ProcedimentoOrderByRelationAggregateInput
  }

  export type ProfissionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    createdAt?: DateTimeFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeFilter<"Profissional"> | Date | string
    tipo?: EnumTipoProfissionalFilter<"Profissional"> | $Enums.TipoProfissional
    nivel?: EnumNivelComercialNullableFilter<"Profissional"> | $Enums.NivelComercial | null
    aluguelFixo?: DecimalNullableFilter<"Profissional"> | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionListRelationFilter
    premiacoes?: PremiacaoListRelationFilter
    procedimentos?: ProcedimentoListRelationFilter
  }, "id" | "nome">

  export type ProfissionalOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    nivel?: SortOrderInput | SortOrder
    aluguelFixo?: SortOrderInput | SortOrder
    _count?: ProfissionalCountOrderByAggregateInput
    _avg?: ProfissionalAvgOrderByAggregateInput
    _max?: ProfissionalMaxOrderByAggregateInput
    _min?: ProfissionalMinOrderByAggregateInput
    _sum?: ProfissionalSumOrderByAggregateInput
  }

  export type ProfissionalScalarWhereWithAggregatesInput = {
    AND?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    OR?: ProfissionalScalarWhereWithAggregatesInput[]
    NOT?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profissional"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profissional"> | Date | string
    nome?: StringWithAggregatesFilter<"Profissional"> | string
    tipo?: EnumTipoProfissionalWithAggregatesFilter<"Profissional"> | $Enums.TipoProfissional
    nivel?: EnumNivelComercialNullableWithAggregatesFilter<"Profissional"> | $Enums.NivelComercial | null
    aluguelFixo?: DecimalNullableWithAggregatesFilter<"Profissional"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CommissionWhereInput = {
    AND?: CommissionWhereInput | CommissionWhereInput[]
    OR?: CommissionWhereInput[]
    NOT?: CommissionWhereInput | CommissionWhereInput[]
    id?: StringFilter<"Commission"> | string
    createdAt?: DateTimeFilter<"Commission"> | Date | string
    updatedAt?: DateTimeFilter<"Commission"> | Date | string
    profissionalId?: StringFilter<"Commission"> | string
    categoria?: EnumCategoriaComissaoFilter<"Commission"> | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFilter<"Commission"> | $Enums.TipoCalculo
    percentual?: DecimalNullableFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    valorFixo?: DecimalNullableFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: JsonNullableFilter<"Commission">
    ativo?: BoolFilter<"Commission"> | boolean
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
  }

  export type CommissionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    categoria?: SortOrder
    tipoCalculo?: SortOrder
    percentual?: SortOrderInput | SortOrder
    valorFixo?: SortOrderInput | SortOrder
    tabelaProgressiva?: SortOrderInput | SortOrder
    ativo?: SortOrder
    profissional?: ProfissionalOrderByWithRelationInput
  }

  export type CommissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommissionWhereInput | CommissionWhereInput[]
    OR?: CommissionWhereInput[]
    NOT?: CommissionWhereInput | CommissionWhereInput[]
    createdAt?: DateTimeFilter<"Commission"> | Date | string
    updatedAt?: DateTimeFilter<"Commission"> | Date | string
    profissionalId?: StringFilter<"Commission"> | string
    categoria?: EnumCategoriaComissaoFilter<"Commission"> | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFilter<"Commission"> | $Enums.TipoCalculo
    percentual?: DecimalNullableFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    valorFixo?: DecimalNullableFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: JsonNullableFilter<"Commission">
    ativo?: BoolFilter<"Commission"> | boolean
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
  }, "id">

  export type CommissionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    categoria?: SortOrder
    tipoCalculo?: SortOrder
    percentual?: SortOrderInput | SortOrder
    valorFixo?: SortOrderInput | SortOrder
    tabelaProgressiva?: SortOrderInput | SortOrder
    ativo?: SortOrder
    _count?: CommissionCountOrderByAggregateInput
    _avg?: CommissionAvgOrderByAggregateInput
    _max?: CommissionMaxOrderByAggregateInput
    _min?: CommissionMinOrderByAggregateInput
    _sum?: CommissionSumOrderByAggregateInput
  }

  export type CommissionScalarWhereWithAggregatesInput = {
    AND?: CommissionScalarWhereWithAggregatesInput | CommissionScalarWhereWithAggregatesInput[]
    OR?: CommissionScalarWhereWithAggregatesInput[]
    NOT?: CommissionScalarWhereWithAggregatesInput | CommissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Commission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Commission"> | Date | string
    profissionalId?: StringWithAggregatesFilter<"Commission"> | string
    categoria?: EnumCategoriaComissaoWithAggregatesFilter<"Commission"> | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoWithAggregatesFilter<"Commission"> | $Enums.TipoCalculo
    percentual?: DecimalNullableWithAggregatesFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    valorFixo?: DecimalNullableWithAggregatesFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: JsonNullableWithAggregatesFilter<"Commission">
    ativo?: BoolWithAggregatesFilter<"Commission"> | boolean
  }

  export type PremiacaoWhereInput = {
    AND?: PremiacaoWhereInput | PremiacaoWhereInput[]
    OR?: PremiacaoWhereInput[]
    NOT?: PremiacaoWhereInput | PremiacaoWhereInput[]
    id?: StringFilter<"Premiacao"> | string
    createdAt?: DateTimeFilter<"Premiacao"> | Date | string
    updatedAt?: DateTimeFilter<"Premiacao"> | Date | string
    profissionalId?: StringFilter<"Premiacao"> | string
    tipo?: EnumTipoPremiacaoFilter<"Premiacao"> | $Enums.TipoPremiacao
    descricao?: StringFilter<"Premiacao"> | string
    tabelaFaixas?: JsonNullableFilter<"Premiacao">
    bonusMetaIndividual?: DecimalNullableFilter<"Premiacao"> | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: IntNullableFilter<"Premiacao"> | number | null
    ativo?: BoolFilter<"Premiacao"> | boolean
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
  }

  export type PremiacaoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    tabelaFaixas?: SortOrderInput | SortOrder
    bonusMetaIndividual?: SortOrderInput | SortOrder
    metaIndividual?: SortOrderInput | SortOrder
    ativo?: SortOrder
    profissional?: ProfissionalOrderByWithRelationInput
  }

  export type PremiacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PremiacaoWhereInput | PremiacaoWhereInput[]
    OR?: PremiacaoWhereInput[]
    NOT?: PremiacaoWhereInput | PremiacaoWhereInput[]
    createdAt?: DateTimeFilter<"Premiacao"> | Date | string
    updatedAt?: DateTimeFilter<"Premiacao"> | Date | string
    profissionalId?: StringFilter<"Premiacao"> | string
    tipo?: EnumTipoPremiacaoFilter<"Premiacao"> | $Enums.TipoPremiacao
    descricao?: StringFilter<"Premiacao"> | string
    tabelaFaixas?: JsonNullableFilter<"Premiacao">
    bonusMetaIndividual?: DecimalNullableFilter<"Premiacao"> | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: IntNullableFilter<"Premiacao"> | number | null
    ativo?: BoolFilter<"Premiacao"> | boolean
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
  }, "id">

  export type PremiacaoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    tabelaFaixas?: SortOrderInput | SortOrder
    bonusMetaIndividual?: SortOrderInput | SortOrder
    metaIndividual?: SortOrderInput | SortOrder
    ativo?: SortOrder
    _count?: PremiacaoCountOrderByAggregateInput
    _avg?: PremiacaoAvgOrderByAggregateInput
    _max?: PremiacaoMaxOrderByAggregateInput
    _min?: PremiacaoMinOrderByAggregateInput
    _sum?: PremiacaoSumOrderByAggregateInput
  }

  export type PremiacaoScalarWhereWithAggregatesInput = {
    AND?: PremiacaoScalarWhereWithAggregatesInput | PremiacaoScalarWhereWithAggregatesInput[]
    OR?: PremiacaoScalarWhereWithAggregatesInput[]
    NOT?: PremiacaoScalarWhereWithAggregatesInput | PremiacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Premiacao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Premiacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Premiacao"> | Date | string
    profissionalId?: StringWithAggregatesFilter<"Premiacao"> | string
    tipo?: EnumTipoPremiacaoWithAggregatesFilter<"Premiacao"> | $Enums.TipoPremiacao
    descricao?: StringWithAggregatesFilter<"Premiacao"> | string
    tabelaFaixas?: JsonNullableWithAggregatesFilter<"Premiacao">
    bonusMetaIndividual?: DecimalNullableWithAggregatesFilter<"Premiacao"> | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: IntNullableWithAggregatesFilter<"Premiacao"> | number | null
    ativo?: BoolWithAggregatesFilter<"Premiacao"> | boolean
  }

  export type ProcedimentoWhereInput = {
    AND?: ProcedimentoWhereInput | ProcedimentoWhereInput[]
    OR?: ProcedimentoWhereInput[]
    NOT?: ProcedimentoWhereInput | ProcedimentoWhereInput[]
    id?: StringFilter<"Procedimento"> | string
    createdAt?: DateTimeFilter<"Procedimento"> | Date | string
    dataAtendimento?: DateTimeFilter<"Procedimento"> | Date | string
    valor?: DecimalFilter<"Procedimento"> | Decimal | DecimalJsLike | number | string
    tipo?: StringFilter<"Procedimento"> | string
    status?: StringFilter<"Procedimento"> | string
    profissionalId?: StringFilter<"Procedimento"> | string
    pacienteId?: StringFilter<"Procedimento"> | string
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    paymentMethods?: PaymentMethodsListRelationFilter
  }

  export type ProcedimentoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataAtendimento?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
    profissional?: ProfissionalOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
    paymentMethods?: PaymentMethodsOrderByRelationAggregateInput
  }

  export type ProcedimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcedimentoWhereInput | ProcedimentoWhereInput[]
    OR?: ProcedimentoWhereInput[]
    NOT?: ProcedimentoWhereInput | ProcedimentoWhereInput[]
    createdAt?: DateTimeFilter<"Procedimento"> | Date | string
    dataAtendimento?: DateTimeFilter<"Procedimento"> | Date | string
    valor?: DecimalFilter<"Procedimento"> | Decimal | DecimalJsLike | number | string
    tipo?: StringFilter<"Procedimento"> | string
    status?: StringFilter<"Procedimento"> | string
    profissionalId?: StringFilter<"Procedimento"> | string
    pacienteId?: StringFilter<"Procedimento"> | string
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    paymentMethods?: PaymentMethodsListRelationFilter
  }, "id">

  export type ProcedimentoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataAtendimento?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
    _count?: ProcedimentoCountOrderByAggregateInput
    _avg?: ProcedimentoAvgOrderByAggregateInput
    _max?: ProcedimentoMaxOrderByAggregateInput
    _min?: ProcedimentoMinOrderByAggregateInput
    _sum?: ProcedimentoSumOrderByAggregateInput
  }

  export type ProcedimentoScalarWhereWithAggregatesInput = {
    AND?: ProcedimentoScalarWhereWithAggregatesInput | ProcedimentoScalarWhereWithAggregatesInput[]
    OR?: ProcedimentoScalarWhereWithAggregatesInput[]
    NOT?: ProcedimentoScalarWhereWithAggregatesInput | ProcedimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Procedimento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Procedimento"> | Date | string
    dataAtendimento?: DateTimeWithAggregatesFilter<"Procedimento"> | Date | string
    valor?: DecimalWithAggregatesFilter<"Procedimento"> | Decimal | DecimalJsLike | number | string
    tipo?: StringWithAggregatesFilter<"Procedimento"> | string
    status?: StringWithAggregatesFilter<"Procedimento"> | string
    profissionalId?: StringWithAggregatesFilter<"Procedimento"> | string
    pacienteId?: StringWithAggregatesFilter<"Procedimento"> | string
  }

  export type PaymentMethodsWhereInput = {
    AND?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    OR?: PaymentMethodsWhereInput[]
    NOT?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    id?: StringFilter<"PaymentMethods"> | string
    createdAt?: DateTimeFilter<"PaymentMethods"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethods"> | Date | string
    dataPagamento?: DateTimeFilter<"PaymentMethods"> | Date | string
    valor?: DecimalFilter<"PaymentMethods"> | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFilter<"PaymentMethods"> | string
    procedimentoId?: StringFilter<"PaymentMethods"> | string
    procedimento?: XOR<ProcedimentoScalarRelationFilter, ProcedimentoWhereInput>
  }

  export type PaymentMethodsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataPagamento?: SortOrder
    valor?: SortOrder
    formaPagamento?: SortOrder
    procedimentoId?: SortOrder
    procedimento?: ProcedimentoOrderByWithRelationInput
  }

  export type PaymentMethodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    OR?: PaymentMethodsWhereInput[]
    NOT?: PaymentMethodsWhereInput | PaymentMethodsWhereInput[]
    createdAt?: DateTimeFilter<"PaymentMethods"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethods"> | Date | string
    dataPagamento?: DateTimeFilter<"PaymentMethods"> | Date | string
    valor?: DecimalFilter<"PaymentMethods"> | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFilter<"PaymentMethods"> | string
    procedimentoId?: StringFilter<"PaymentMethods"> | string
    procedimento?: XOR<ProcedimentoScalarRelationFilter, ProcedimentoWhereInput>
  }, "id">

  export type PaymentMethodsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataPagamento?: SortOrder
    valor?: SortOrder
    formaPagamento?: SortOrder
    procedimentoId?: SortOrder
    _count?: PaymentMethodsCountOrderByAggregateInput
    _avg?: PaymentMethodsAvgOrderByAggregateInput
    _max?: PaymentMethodsMaxOrderByAggregateInput
    _min?: PaymentMethodsMinOrderByAggregateInput
    _sum?: PaymentMethodsSumOrderByAggregateInput
  }

  export type PaymentMethodsScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodsScalarWhereWithAggregatesInput | PaymentMethodsScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodsScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodsScalarWhereWithAggregatesInput | PaymentMethodsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethods"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethods"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethods"> | Date | string
    dataPagamento?: DateTimeWithAggregatesFilter<"PaymentMethods"> | Date | string
    valor?: DecimalWithAggregatesFilter<"PaymentMethods"> | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringWithAggregatesFilter<"PaymentMethods"> | string
    procedimentoId?: StringWithAggregatesFilter<"PaymentMethods"> | string
  }

  export type PacienteCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    procedimentos?: ProcedimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    procedimentos?: ProcedimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    procedimentos?: ProcedimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    procedimentos?: ProcedimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
  }

  export type PacienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionalCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionCreateNestedManyWithoutProfissionalInput
    premiacoes?: PremiacaoCreateNestedManyWithoutProfissionalInput
    procedimentos?: ProcedimentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUncheckedCreateNestedManyWithoutProfissionalInput
    premiacoes?: PremiacaoUncheckedCreateNestedManyWithoutProfissionalInput
    procedimentos?: ProcedimentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUpdateManyWithoutProfissionalNestedInput
    premiacoes?: PremiacaoUpdateManyWithoutProfissionalNestedInput
    procedimentos?: ProcedimentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUncheckedUpdateManyWithoutProfissionalNestedInput
    premiacoes?: PremiacaoUncheckedUpdateManyWithoutProfissionalNestedInput
    procedimentos?: ProcedimentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
  }

  export type ProfissionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ProfissionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CommissionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: $Enums.CategoriaComissao
    tipoCalculo: $Enums.TipoCalculo
    percentual?: Decimal | DecimalJsLike | number | string | null
    valorFixo?: Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
    profissional: ProfissionalCreateNestedOneWithoutComissoesInput
  }

  export type CommissionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionalId: string
    categoria: $Enums.CategoriaComissao
    tipoCalculo: $Enums.TipoCalculo
    percentual?: Decimal | DecimalJsLike | number | string | null
    valorFixo?: Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
  }

  export type CommissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: EnumCategoriaComissaoFieldUpdateOperationsInput | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFieldUpdateOperationsInput | $Enums.TipoCalculo
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
    profissional?: ProfissionalUpdateOneRequiredWithoutComissoesNestedInput
  }

  export type CommissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaComissaoFieldUpdateOperationsInput | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFieldUpdateOperationsInput | $Enums.TipoCalculo
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommissionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionalId: string
    categoria: $Enums.CategoriaComissao
    tipoCalculo: $Enums.TipoCalculo
    percentual?: Decimal | DecimalJsLike | number | string | null
    valorFixo?: Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
  }

  export type CommissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: EnumCategoriaComissaoFieldUpdateOperationsInput | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFieldUpdateOperationsInput | $Enums.TipoCalculo
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaComissaoFieldUpdateOperationsInput | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFieldUpdateOperationsInput | $Enums.TipoCalculo
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiacaoCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: $Enums.TipoPremiacao
    descricao: string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: Decimal | DecimalJsLike | number | string | null
    metaIndividual?: number | null
    ativo?: boolean
    profissional: ProfissionalCreateNestedOneWithoutPremiacoesInput
  }

  export type PremiacaoUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionalId: string
    tipo: $Enums.TipoPremiacao
    descricao: string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: Decimal | DecimalJsLike | number | string | null
    metaIndividual?: number | null
    ativo?: boolean
  }

  export type PremiacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoPremiacaoFieldUpdateOperationsInput | $Enums.TipoPremiacao
    descricao?: StringFieldUpdateOperationsInput | string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    profissional?: ProfissionalUpdateOneRequiredWithoutPremiacoesNestedInput
  }

  export type PremiacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPremiacaoFieldUpdateOperationsInput | $Enums.TipoPremiacao
    descricao?: StringFieldUpdateOperationsInput | string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiacaoCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionalId: string
    tipo: $Enums.TipoPremiacao
    descricao: string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: Decimal | DecimalJsLike | number | string | null
    metaIndividual?: number | null
    ativo?: boolean
  }

  export type PremiacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoPremiacaoFieldUpdateOperationsInput | $Enums.TipoPremiacao
    descricao?: StringFieldUpdateOperationsInput | string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoPremiacaoFieldUpdateOperationsInput | $Enums.TipoPremiacao
    descricao?: StringFieldUpdateOperationsInput | string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProcedimentoCreateInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissional: ProfissionalCreateNestedOneWithoutProcedimentosInput
    paciente: PacienteCreateNestedOneWithoutProcedimentosInput
    paymentMethods?: PaymentMethodsCreateNestedManyWithoutProcedimentoInput
  }

  export type ProcedimentoUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissionalId: string
    pacienteId: string
    paymentMethods?: PaymentMethodsUncheckedCreateNestedManyWithoutProcedimentoInput
  }

  export type ProcedimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneRequiredWithoutProcedimentosNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutProcedimentosNestedInput
    paymentMethods?: PaymentMethodsUpdateManyWithoutProcedimentoNestedInput
  }

  export type ProcedimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    paymentMethods?: PaymentMethodsUncheckedUpdateManyWithoutProcedimentoNestedInput
  }

  export type ProcedimentoCreateManyInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissionalId: string
    pacienteId: string
  }

  export type ProcedimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProcedimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPagamento: Date | string
    valor?: Decimal | DecimalJsLike | number | string
    formaPagamento: string
    procedimento: ProcedimentoCreateNestedOneWithoutPaymentMethodsInput
  }

  export type PaymentMethodsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPagamento: Date | string
    valor?: Decimal | DecimalJsLike | number | string
    formaPagamento: string
    procedimentoId: string
  }

  export type PaymentMethodsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    procedimento?: ProcedimentoUpdateOneRequiredWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    procedimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPagamento: Date | string
    valor?: Decimal | DecimalJsLike | number | string
    formaPagamento: string
    procedimentoId: string
  }

  export type PaymentMethodsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    procedimentoId?: StringFieldUpdateOperationsInput | string
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

  export type ProcedimentoListRelationFilter = {
    every?: ProcedimentoWhereInput
    some?: ProcedimentoWhereInput
    none?: ProcedimentoWhereInput
  }

  export type ProcedimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteNomeCreatedAtCompoundUniqueInput = {
    nome: string
    createdAt: Date | string
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
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

  export type EnumTipoProfissionalFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProfissional | EnumTipoProfissionalFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProfissionalFilter<$PrismaModel> | $Enums.TipoProfissional
  }

  export type EnumNivelComercialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelComercial | EnumNivelComercialFieldRefInput<$PrismaModel> | null
    in?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelComercialNullableFilter<$PrismaModel> | $Enums.NivelComercial | null
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

  export type CommissionListRelationFilter = {
    every?: CommissionWhereInput
    some?: CommissionWhereInput
    none?: CommissionWhereInput
  }

  export type PremiacaoListRelationFilter = {
    every?: PremiacaoWhereInput
    some?: PremiacaoWhereInput
    none?: PremiacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PremiacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfissionalCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    nivel?: SortOrder
    aluguelFixo?: SortOrder
  }

  export type ProfissionalAvgOrderByAggregateInput = {
    aluguelFixo?: SortOrder
  }

  export type ProfissionalMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    nivel?: SortOrder
    aluguelFixo?: SortOrder
  }

  export type ProfissionalMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    nivel?: SortOrder
    aluguelFixo?: SortOrder
  }

  export type ProfissionalSumOrderByAggregateInput = {
    aluguelFixo?: SortOrder
  }

  export type EnumTipoProfissionalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProfissional | EnumTipoProfissionalFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProfissionalWithAggregatesFilter<$PrismaModel> | $Enums.TipoProfissional
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProfissionalFilter<$PrismaModel>
    _max?: NestedEnumTipoProfissionalFilter<$PrismaModel>
  }

  export type EnumNivelComercialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelComercial | EnumNivelComercialFieldRefInput<$PrismaModel> | null
    in?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelComercialNullableWithAggregatesFilter<$PrismaModel> | $Enums.NivelComercial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNivelComercialNullableFilter<$PrismaModel>
    _max?: NestedEnumNivelComercialNullableFilter<$PrismaModel>
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

  export type EnumCategoriaComissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaComissao | EnumCategoriaComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaComissaoFilter<$PrismaModel> | $Enums.CategoriaComissao
  }

  export type EnumTipoCalculoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCalculo | EnumTipoCalculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCalculoFilter<$PrismaModel> | $Enums.TipoCalculo
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfissionalScalarRelationFilter = {
    is?: ProfissionalWhereInput
    isNot?: ProfissionalWhereInput
  }

  export type CommissionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    categoria?: SortOrder
    tipoCalculo?: SortOrder
    percentual?: SortOrder
    valorFixo?: SortOrder
    tabelaProgressiva?: SortOrder
    ativo?: SortOrder
  }

  export type CommissionAvgOrderByAggregateInput = {
    percentual?: SortOrder
    valorFixo?: SortOrder
  }

  export type CommissionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    categoria?: SortOrder
    tipoCalculo?: SortOrder
    percentual?: SortOrder
    valorFixo?: SortOrder
    ativo?: SortOrder
  }

  export type CommissionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    categoria?: SortOrder
    tipoCalculo?: SortOrder
    percentual?: SortOrder
    valorFixo?: SortOrder
    ativo?: SortOrder
  }

  export type CommissionSumOrderByAggregateInput = {
    percentual?: SortOrder
    valorFixo?: SortOrder
  }

  export type EnumCategoriaComissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaComissao | EnumCategoriaComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaComissaoWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaComissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaComissaoFilter<$PrismaModel>
    _max?: NestedEnumCategoriaComissaoFilter<$PrismaModel>
  }

  export type EnumTipoCalculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCalculo | EnumTipoCalculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCalculoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCalculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCalculoFilter<$PrismaModel>
    _max?: NestedEnumTipoCalculoFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTipoPremiacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPremiacao | EnumTipoPremiacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPremiacaoFilter<$PrismaModel> | $Enums.TipoPremiacao
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

  export type PremiacaoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    tabelaFaixas?: SortOrder
    bonusMetaIndividual?: SortOrder
    metaIndividual?: SortOrder
    ativo?: SortOrder
  }

  export type PremiacaoAvgOrderByAggregateInput = {
    bonusMetaIndividual?: SortOrder
    metaIndividual?: SortOrder
  }

  export type PremiacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    bonusMetaIndividual?: SortOrder
    metaIndividual?: SortOrder
    ativo?: SortOrder
  }

  export type PremiacaoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionalId?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    bonusMetaIndividual?: SortOrder
    metaIndividual?: SortOrder
    ativo?: SortOrder
  }

  export type PremiacaoSumOrderByAggregateInput = {
    bonusMetaIndividual?: SortOrder
    metaIndividual?: SortOrder
  }

  export type EnumTipoPremiacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPremiacao | EnumTipoPremiacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPremiacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPremiacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPremiacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoPremiacaoFilter<$PrismaModel>
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

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type PaymentMethodsListRelationFilter = {
    every?: PaymentMethodsWhereInput
    some?: PaymentMethodsWhereInput
    none?: PaymentMethodsWhereInput
  }

  export type PaymentMethodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcedimentoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataAtendimento?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ProcedimentoAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type ProcedimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataAtendimento?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ProcedimentoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataAtendimento?: SortOrder
    valor?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ProcedimentoSumOrderByAggregateInput = {
    valor?: SortOrder
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

  export type ProcedimentoScalarRelationFilter = {
    is?: ProcedimentoWhereInput
    isNot?: ProcedimentoWhereInput
  }

  export type PaymentMethodsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataPagamento?: SortOrder
    valor?: SortOrder
    formaPagamento?: SortOrder
    procedimentoId?: SortOrder
  }

  export type PaymentMethodsAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type PaymentMethodsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataPagamento?: SortOrder
    valor?: SortOrder
    formaPagamento?: SortOrder
    procedimentoId?: SortOrder
  }

  export type PaymentMethodsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataPagamento?: SortOrder
    valor?: SortOrder
    formaPagamento?: SortOrder
    procedimentoId?: SortOrder
  }

  export type PaymentMethodsSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type ProcedimentoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ProcedimentoCreateWithoutPacienteInput, ProcedimentoUncheckedCreateWithoutPacienteInput> | ProcedimentoCreateWithoutPacienteInput[] | ProcedimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutPacienteInput | ProcedimentoCreateOrConnectWithoutPacienteInput[]
    createMany?: ProcedimentoCreateManyPacienteInputEnvelope
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
  }

  export type ProcedimentoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ProcedimentoCreateWithoutPacienteInput, ProcedimentoUncheckedCreateWithoutPacienteInput> | ProcedimentoCreateWithoutPacienteInput[] | ProcedimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutPacienteInput | ProcedimentoCreateOrConnectWithoutPacienteInput[]
    createMany?: ProcedimentoCreateManyPacienteInputEnvelope
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProcedimentoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ProcedimentoCreateWithoutPacienteInput, ProcedimentoUncheckedCreateWithoutPacienteInput> | ProcedimentoCreateWithoutPacienteInput[] | ProcedimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutPacienteInput | ProcedimentoCreateOrConnectWithoutPacienteInput[]
    upsert?: ProcedimentoUpsertWithWhereUniqueWithoutPacienteInput | ProcedimentoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ProcedimentoCreateManyPacienteInputEnvelope
    set?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    disconnect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    delete?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    update?: ProcedimentoUpdateWithWhereUniqueWithoutPacienteInput | ProcedimentoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ProcedimentoUpdateManyWithWhereWithoutPacienteInput | ProcedimentoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ProcedimentoScalarWhereInput | ProcedimentoScalarWhereInput[]
  }

  export type ProcedimentoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ProcedimentoCreateWithoutPacienteInput, ProcedimentoUncheckedCreateWithoutPacienteInput> | ProcedimentoCreateWithoutPacienteInput[] | ProcedimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutPacienteInput | ProcedimentoCreateOrConnectWithoutPacienteInput[]
    upsert?: ProcedimentoUpsertWithWhereUniqueWithoutPacienteInput | ProcedimentoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ProcedimentoCreateManyPacienteInputEnvelope
    set?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    disconnect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    delete?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    update?: ProcedimentoUpdateWithWhereUniqueWithoutPacienteInput | ProcedimentoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ProcedimentoUpdateManyWithWhereWithoutPacienteInput | ProcedimentoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ProcedimentoScalarWhereInput | ProcedimentoScalarWhereInput[]
  }

  export type CommissionCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<CommissionCreateWithoutProfissionalInput, CommissionUncheckedCreateWithoutProfissionalInput> | CommissionCreateWithoutProfissionalInput[] | CommissionUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutProfissionalInput | CommissionCreateOrConnectWithoutProfissionalInput[]
    createMany?: CommissionCreateManyProfissionalInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type PremiacaoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<PremiacaoCreateWithoutProfissionalInput, PremiacaoUncheckedCreateWithoutProfissionalInput> | PremiacaoCreateWithoutProfissionalInput[] | PremiacaoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: PremiacaoCreateOrConnectWithoutProfissionalInput | PremiacaoCreateOrConnectWithoutProfissionalInput[]
    createMany?: PremiacaoCreateManyProfissionalInputEnvelope
    connect?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
  }

  export type ProcedimentoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<ProcedimentoCreateWithoutProfissionalInput, ProcedimentoUncheckedCreateWithoutProfissionalInput> | ProcedimentoCreateWithoutProfissionalInput[] | ProcedimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutProfissionalInput | ProcedimentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: ProcedimentoCreateManyProfissionalInputEnvelope
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
  }

  export type CommissionUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<CommissionCreateWithoutProfissionalInput, CommissionUncheckedCreateWithoutProfissionalInput> | CommissionCreateWithoutProfissionalInput[] | CommissionUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutProfissionalInput | CommissionCreateOrConnectWithoutProfissionalInput[]
    createMany?: CommissionCreateManyProfissionalInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type PremiacaoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<PremiacaoCreateWithoutProfissionalInput, PremiacaoUncheckedCreateWithoutProfissionalInput> | PremiacaoCreateWithoutProfissionalInput[] | PremiacaoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: PremiacaoCreateOrConnectWithoutProfissionalInput | PremiacaoCreateOrConnectWithoutProfissionalInput[]
    createMany?: PremiacaoCreateManyProfissionalInputEnvelope
    connect?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
  }

  export type ProcedimentoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<ProcedimentoCreateWithoutProfissionalInput, ProcedimentoUncheckedCreateWithoutProfissionalInput> | ProcedimentoCreateWithoutProfissionalInput[] | ProcedimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutProfissionalInput | ProcedimentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: ProcedimentoCreateManyProfissionalInputEnvelope
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
  }

  export type EnumTipoProfissionalFieldUpdateOperationsInput = {
    set?: $Enums.TipoProfissional
  }

  export type NullableEnumNivelComercialFieldUpdateOperationsInput = {
    set?: $Enums.NivelComercial | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CommissionUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<CommissionCreateWithoutProfissionalInput, CommissionUncheckedCreateWithoutProfissionalInput> | CommissionCreateWithoutProfissionalInput[] | CommissionUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutProfissionalInput | CommissionCreateOrConnectWithoutProfissionalInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutProfissionalInput | CommissionUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: CommissionCreateManyProfissionalInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutProfissionalInput | CommissionUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutProfissionalInput | CommissionUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type PremiacaoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<PremiacaoCreateWithoutProfissionalInput, PremiacaoUncheckedCreateWithoutProfissionalInput> | PremiacaoCreateWithoutProfissionalInput[] | PremiacaoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: PremiacaoCreateOrConnectWithoutProfissionalInput | PremiacaoCreateOrConnectWithoutProfissionalInput[]
    upsert?: PremiacaoUpsertWithWhereUniqueWithoutProfissionalInput | PremiacaoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: PremiacaoCreateManyProfissionalInputEnvelope
    set?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    disconnect?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    delete?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    connect?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    update?: PremiacaoUpdateWithWhereUniqueWithoutProfissionalInput | PremiacaoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: PremiacaoUpdateManyWithWhereWithoutProfissionalInput | PremiacaoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: PremiacaoScalarWhereInput | PremiacaoScalarWhereInput[]
  }

  export type ProcedimentoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<ProcedimentoCreateWithoutProfissionalInput, ProcedimentoUncheckedCreateWithoutProfissionalInput> | ProcedimentoCreateWithoutProfissionalInput[] | ProcedimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutProfissionalInput | ProcedimentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: ProcedimentoUpsertWithWhereUniqueWithoutProfissionalInput | ProcedimentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: ProcedimentoCreateManyProfissionalInputEnvelope
    set?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    disconnect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    delete?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    update?: ProcedimentoUpdateWithWhereUniqueWithoutProfissionalInput | ProcedimentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: ProcedimentoUpdateManyWithWhereWithoutProfissionalInput | ProcedimentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: ProcedimentoScalarWhereInput | ProcedimentoScalarWhereInput[]
  }

  export type CommissionUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<CommissionCreateWithoutProfissionalInput, CommissionUncheckedCreateWithoutProfissionalInput> | CommissionCreateWithoutProfissionalInput[] | CommissionUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutProfissionalInput | CommissionCreateOrConnectWithoutProfissionalInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutProfissionalInput | CommissionUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: CommissionCreateManyProfissionalInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutProfissionalInput | CommissionUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutProfissionalInput | CommissionUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type PremiacaoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<PremiacaoCreateWithoutProfissionalInput, PremiacaoUncheckedCreateWithoutProfissionalInput> | PremiacaoCreateWithoutProfissionalInput[] | PremiacaoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: PremiacaoCreateOrConnectWithoutProfissionalInput | PremiacaoCreateOrConnectWithoutProfissionalInput[]
    upsert?: PremiacaoUpsertWithWhereUniqueWithoutProfissionalInput | PremiacaoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: PremiacaoCreateManyProfissionalInputEnvelope
    set?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    disconnect?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    delete?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    connect?: PremiacaoWhereUniqueInput | PremiacaoWhereUniqueInput[]
    update?: PremiacaoUpdateWithWhereUniqueWithoutProfissionalInput | PremiacaoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: PremiacaoUpdateManyWithWhereWithoutProfissionalInput | PremiacaoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: PremiacaoScalarWhereInput | PremiacaoScalarWhereInput[]
  }

  export type ProcedimentoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<ProcedimentoCreateWithoutProfissionalInput, ProcedimentoUncheckedCreateWithoutProfissionalInput> | ProcedimentoCreateWithoutProfissionalInput[] | ProcedimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutProfissionalInput | ProcedimentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: ProcedimentoUpsertWithWhereUniqueWithoutProfissionalInput | ProcedimentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: ProcedimentoCreateManyProfissionalInputEnvelope
    set?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    disconnect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    delete?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    connect?: ProcedimentoWhereUniqueInput | ProcedimentoWhereUniqueInput[]
    update?: ProcedimentoUpdateWithWhereUniqueWithoutProfissionalInput | ProcedimentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: ProcedimentoUpdateManyWithWhereWithoutProfissionalInput | ProcedimentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: ProcedimentoScalarWhereInput | ProcedimentoScalarWhereInput[]
  }

  export type ProfissionalCreateNestedOneWithoutComissoesInput = {
    create?: XOR<ProfissionalCreateWithoutComissoesInput, ProfissionalUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutComissoesInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type EnumCategoriaComissaoFieldUpdateOperationsInput = {
    set?: $Enums.CategoriaComissao
  }

  export type EnumTipoCalculoFieldUpdateOperationsInput = {
    set?: $Enums.TipoCalculo
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfissionalUpdateOneRequiredWithoutComissoesNestedInput = {
    create?: XOR<ProfissionalCreateWithoutComissoesInput, ProfissionalUncheckedCreateWithoutComissoesInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutComissoesInput
    upsert?: ProfissionalUpsertWithoutComissoesInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutComissoesInput, ProfissionalUpdateWithoutComissoesInput>, ProfissionalUncheckedUpdateWithoutComissoesInput>
  }

  export type ProfissionalCreateNestedOneWithoutPremiacoesInput = {
    create?: XOR<ProfissionalCreateWithoutPremiacoesInput, ProfissionalUncheckedCreateWithoutPremiacoesInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutPremiacoesInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type EnumTipoPremiacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoPremiacao
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfissionalUpdateOneRequiredWithoutPremiacoesNestedInput = {
    create?: XOR<ProfissionalCreateWithoutPremiacoesInput, ProfissionalUncheckedCreateWithoutPremiacoesInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutPremiacoesInput
    upsert?: ProfissionalUpsertWithoutPremiacoesInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutPremiacoesInput, ProfissionalUpdateWithoutPremiacoesInput>, ProfissionalUncheckedUpdateWithoutPremiacoesInput>
  }

  export type ProfissionalCreateNestedOneWithoutProcedimentosInput = {
    create?: XOR<ProfissionalCreateWithoutProcedimentosInput, ProfissionalUncheckedCreateWithoutProcedimentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutProcedimentosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutProcedimentosInput = {
    create?: XOR<PacienteCreateWithoutProcedimentosInput, PacienteUncheckedCreateWithoutProcedimentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutProcedimentosInput
    connect?: PacienteWhereUniqueInput
  }

  export type PaymentMethodsCreateNestedManyWithoutProcedimentoInput = {
    create?: XOR<PaymentMethodsCreateWithoutProcedimentoInput, PaymentMethodsUncheckedCreateWithoutProcedimentoInput> | PaymentMethodsCreateWithoutProcedimentoInput[] | PaymentMethodsUncheckedCreateWithoutProcedimentoInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutProcedimentoInput | PaymentMethodsCreateOrConnectWithoutProcedimentoInput[]
    createMany?: PaymentMethodsCreateManyProcedimentoInputEnvelope
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
  }

  export type PaymentMethodsUncheckedCreateNestedManyWithoutProcedimentoInput = {
    create?: XOR<PaymentMethodsCreateWithoutProcedimentoInput, PaymentMethodsUncheckedCreateWithoutProcedimentoInput> | PaymentMethodsCreateWithoutProcedimentoInput[] | PaymentMethodsUncheckedCreateWithoutProcedimentoInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutProcedimentoInput | PaymentMethodsCreateOrConnectWithoutProcedimentoInput[]
    createMany?: PaymentMethodsCreateManyProcedimentoInputEnvelope
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProfissionalUpdateOneRequiredWithoutProcedimentosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutProcedimentosInput, ProfissionalUncheckedCreateWithoutProcedimentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutProcedimentosInput
    upsert?: ProfissionalUpsertWithoutProcedimentosInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutProcedimentosInput, ProfissionalUpdateWithoutProcedimentosInput>, ProfissionalUncheckedUpdateWithoutProcedimentosInput>
  }

  export type PacienteUpdateOneRequiredWithoutProcedimentosNestedInput = {
    create?: XOR<PacienteCreateWithoutProcedimentosInput, PacienteUncheckedCreateWithoutProcedimentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutProcedimentosInput
    upsert?: PacienteUpsertWithoutProcedimentosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutProcedimentosInput, PacienteUpdateWithoutProcedimentosInput>, PacienteUncheckedUpdateWithoutProcedimentosInput>
  }

  export type PaymentMethodsUpdateManyWithoutProcedimentoNestedInput = {
    create?: XOR<PaymentMethodsCreateWithoutProcedimentoInput, PaymentMethodsUncheckedCreateWithoutProcedimentoInput> | PaymentMethodsCreateWithoutProcedimentoInput[] | PaymentMethodsUncheckedCreateWithoutProcedimentoInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutProcedimentoInput | PaymentMethodsCreateOrConnectWithoutProcedimentoInput[]
    upsert?: PaymentMethodsUpsertWithWhereUniqueWithoutProcedimentoInput | PaymentMethodsUpsertWithWhereUniqueWithoutProcedimentoInput[]
    createMany?: PaymentMethodsCreateManyProcedimentoInputEnvelope
    set?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    disconnect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    delete?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    update?: PaymentMethodsUpdateWithWhereUniqueWithoutProcedimentoInput | PaymentMethodsUpdateWithWhereUniqueWithoutProcedimentoInput[]
    updateMany?: PaymentMethodsUpdateManyWithWhereWithoutProcedimentoInput | PaymentMethodsUpdateManyWithWhereWithoutProcedimentoInput[]
    deleteMany?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
  }

  export type PaymentMethodsUncheckedUpdateManyWithoutProcedimentoNestedInput = {
    create?: XOR<PaymentMethodsCreateWithoutProcedimentoInput, PaymentMethodsUncheckedCreateWithoutProcedimentoInput> | PaymentMethodsCreateWithoutProcedimentoInput[] | PaymentMethodsUncheckedCreateWithoutProcedimentoInput[]
    connectOrCreate?: PaymentMethodsCreateOrConnectWithoutProcedimentoInput | PaymentMethodsCreateOrConnectWithoutProcedimentoInput[]
    upsert?: PaymentMethodsUpsertWithWhereUniqueWithoutProcedimentoInput | PaymentMethodsUpsertWithWhereUniqueWithoutProcedimentoInput[]
    createMany?: PaymentMethodsCreateManyProcedimentoInputEnvelope
    set?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    disconnect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    delete?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    connect?: PaymentMethodsWhereUniqueInput | PaymentMethodsWhereUniqueInput[]
    update?: PaymentMethodsUpdateWithWhereUniqueWithoutProcedimentoInput | PaymentMethodsUpdateWithWhereUniqueWithoutProcedimentoInput[]
    updateMany?: PaymentMethodsUpdateManyWithWhereWithoutProcedimentoInput | PaymentMethodsUpdateManyWithWhereWithoutProcedimentoInput[]
    deleteMany?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
  }

  export type ProcedimentoCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<ProcedimentoCreateWithoutPaymentMethodsInput, ProcedimentoUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutPaymentMethodsInput
    connect?: ProcedimentoWhereUniqueInput
  }

  export type ProcedimentoUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<ProcedimentoCreateWithoutPaymentMethodsInput, ProcedimentoUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: ProcedimentoCreateOrConnectWithoutPaymentMethodsInput
    upsert?: ProcedimentoUpsertWithoutPaymentMethodsInput
    connect?: ProcedimentoWhereUniqueInput
    update?: XOR<XOR<ProcedimentoUpdateToOneWithWhereWithoutPaymentMethodsInput, ProcedimentoUpdateWithoutPaymentMethodsInput>, ProcedimentoUncheckedUpdateWithoutPaymentMethodsInput>
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

  export type NestedEnumTipoProfissionalFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProfissional | EnumTipoProfissionalFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProfissionalFilter<$PrismaModel> | $Enums.TipoProfissional
  }

  export type NestedEnumNivelComercialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelComercial | EnumNivelComercialFieldRefInput<$PrismaModel> | null
    in?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelComercialNullableFilter<$PrismaModel> | $Enums.NivelComercial | null
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

  export type NestedEnumTipoProfissionalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProfissional | EnumTipoProfissionalFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProfissional[] | ListEnumTipoProfissionalFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProfissionalWithAggregatesFilter<$PrismaModel> | $Enums.TipoProfissional
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProfissionalFilter<$PrismaModel>
    _max?: NestedEnumTipoProfissionalFilter<$PrismaModel>
  }

  export type NestedEnumNivelComercialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelComercial | EnumNivelComercialFieldRefInput<$PrismaModel> | null
    in?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NivelComercial[] | ListEnumNivelComercialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNivelComercialNullableWithAggregatesFilter<$PrismaModel> | $Enums.NivelComercial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNivelComercialNullableFilter<$PrismaModel>
    _max?: NestedEnumNivelComercialNullableFilter<$PrismaModel>
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

  export type NestedEnumCategoriaComissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaComissao | EnumCategoriaComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaComissaoFilter<$PrismaModel> | $Enums.CategoriaComissao
  }

  export type NestedEnumTipoCalculoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCalculo | EnumTipoCalculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCalculoFilter<$PrismaModel> | $Enums.TipoCalculo
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCategoriaComissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaComissao | EnumCategoriaComissaoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaComissao[] | ListEnumCategoriaComissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaComissaoWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaComissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaComissaoFilter<$PrismaModel>
    _max?: NestedEnumCategoriaComissaoFilter<$PrismaModel>
  }

  export type NestedEnumTipoCalculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCalculo | EnumTipoCalculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCalculo[] | ListEnumTipoCalculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCalculoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCalculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCalculoFilter<$PrismaModel>
    _max?: NestedEnumTipoCalculoFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoPremiacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPremiacao | EnumTipoPremiacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPremiacaoFilter<$PrismaModel> | $Enums.TipoPremiacao
  }

  export type NestedEnumTipoPremiacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPremiacao | EnumTipoPremiacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPremiacao[] | ListEnumTipoPremiacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPremiacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoPremiacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPremiacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoPremiacaoFilter<$PrismaModel>
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

  export type ProcedimentoCreateWithoutPacienteInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissional: ProfissionalCreateNestedOneWithoutProcedimentosInput
    paymentMethods?: PaymentMethodsCreateNestedManyWithoutProcedimentoInput
  }

  export type ProcedimentoUncheckedCreateWithoutPacienteInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissionalId: string
    paymentMethods?: PaymentMethodsUncheckedCreateNestedManyWithoutProcedimentoInput
  }

  export type ProcedimentoCreateOrConnectWithoutPacienteInput = {
    where: ProcedimentoWhereUniqueInput
    create: XOR<ProcedimentoCreateWithoutPacienteInput, ProcedimentoUncheckedCreateWithoutPacienteInput>
  }

  export type ProcedimentoCreateManyPacienteInputEnvelope = {
    data: ProcedimentoCreateManyPacienteInput | ProcedimentoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ProcedimentoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ProcedimentoWhereUniqueInput
    update: XOR<ProcedimentoUpdateWithoutPacienteInput, ProcedimentoUncheckedUpdateWithoutPacienteInput>
    create: XOR<ProcedimentoCreateWithoutPacienteInput, ProcedimentoUncheckedCreateWithoutPacienteInput>
  }

  export type ProcedimentoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ProcedimentoWhereUniqueInput
    data: XOR<ProcedimentoUpdateWithoutPacienteInput, ProcedimentoUncheckedUpdateWithoutPacienteInput>
  }

  export type ProcedimentoUpdateManyWithWhereWithoutPacienteInput = {
    where: ProcedimentoScalarWhereInput
    data: XOR<ProcedimentoUpdateManyMutationInput, ProcedimentoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ProcedimentoScalarWhereInput = {
    AND?: ProcedimentoScalarWhereInput | ProcedimentoScalarWhereInput[]
    OR?: ProcedimentoScalarWhereInput[]
    NOT?: ProcedimentoScalarWhereInput | ProcedimentoScalarWhereInput[]
    id?: StringFilter<"Procedimento"> | string
    createdAt?: DateTimeFilter<"Procedimento"> | Date | string
    dataAtendimento?: DateTimeFilter<"Procedimento"> | Date | string
    valor?: DecimalFilter<"Procedimento"> | Decimal | DecimalJsLike | number | string
    tipo?: StringFilter<"Procedimento"> | string
    status?: StringFilter<"Procedimento"> | string
    profissionalId?: StringFilter<"Procedimento"> | string
    pacienteId?: StringFilter<"Procedimento"> | string
  }

  export type CommissionCreateWithoutProfissionalInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: $Enums.CategoriaComissao
    tipoCalculo: $Enums.TipoCalculo
    percentual?: Decimal | DecimalJsLike | number | string | null
    valorFixo?: Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
  }

  export type CommissionUncheckedCreateWithoutProfissionalInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: $Enums.CategoriaComissao
    tipoCalculo: $Enums.TipoCalculo
    percentual?: Decimal | DecimalJsLike | number | string | null
    valorFixo?: Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
  }

  export type CommissionCreateOrConnectWithoutProfissionalInput = {
    where: CommissionWhereUniqueInput
    create: XOR<CommissionCreateWithoutProfissionalInput, CommissionUncheckedCreateWithoutProfissionalInput>
  }

  export type CommissionCreateManyProfissionalInputEnvelope = {
    data: CommissionCreateManyProfissionalInput | CommissionCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type PremiacaoCreateWithoutProfissionalInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: $Enums.TipoPremiacao
    descricao: string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: Decimal | DecimalJsLike | number | string | null
    metaIndividual?: number | null
    ativo?: boolean
  }

  export type PremiacaoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: $Enums.TipoPremiacao
    descricao: string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: Decimal | DecimalJsLike | number | string | null
    metaIndividual?: number | null
    ativo?: boolean
  }

  export type PremiacaoCreateOrConnectWithoutProfissionalInput = {
    where: PremiacaoWhereUniqueInput
    create: XOR<PremiacaoCreateWithoutProfissionalInput, PremiacaoUncheckedCreateWithoutProfissionalInput>
  }

  export type PremiacaoCreateManyProfissionalInputEnvelope = {
    data: PremiacaoCreateManyProfissionalInput | PremiacaoCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type ProcedimentoCreateWithoutProfissionalInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    paciente: PacienteCreateNestedOneWithoutProcedimentosInput
    paymentMethods?: PaymentMethodsCreateNestedManyWithoutProcedimentoInput
  }

  export type ProcedimentoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    pacienteId: string
    paymentMethods?: PaymentMethodsUncheckedCreateNestedManyWithoutProcedimentoInput
  }

  export type ProcedimentoCreateOrConnectWithoutProfissionalInput = {
    where: ProcedimentoWhereUniqueInput
    create: XOR<ProcedimentoCreateWithoutProfissionalInput, ProcedimentoUncheckedCreateWithoutProfissionalInput>
  }

  export type ProcedimentoCreateManyProfissionalInputEnvelope = {
    data: ProcedimentoCreateManyProfissionalInput | ProcedimentoCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type CommissionUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: CommissionWhereUniqueInput
    update: XOR<CommissionUpdateWithoutProfissionalInput, CommissionUncheckedUpdateWithoutProfissionalInput>
    create: XOR<CommissionCreateWithoutProfissionalInput, CommissionUncheckedCreateWithoutProfissionalInput>
  }

  export type CommissionUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: CommissionWhereUniqueInput
    data: XOR<CommissionUpdateWithoutProfissionalInput, CommissionUncheckedUpdateWithoutProfissionalInput>
  }

  export type CommissionUpdateManyWithWhereWithoutProfissionalInput = {
    where: CommissionScalarWhereInput
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type CommissionScalarWhereInput = {
    AND?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
    OR?: CommissionScalarWhereInput[]
    NOT?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
    id?: StringFilter<"Commission"> | string
    createdAt?: DateTimeFilter<"Commission"> | Date | string
    updatedAt?: DateTimeFilter<"Commission"> | Date | string
    profissionalId?: StringFilter<"Commission"> | string
    categoria?: EnumCategoriaComissaoFilter<"Commission"> | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFilter<"Commission"> | $Enums.TipoCalculo
    percentual?: DecimalNullableFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    valorFixo?: DecimalNullableFilter<"Commission"> | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: JsonNullableFilter<"Commission">
    ativo?: BoolFilter<"Commission"> | boolean
  }

  export type PremiacaoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: PremiacaoWhereUniqueInput
    update: XOR<PremiacaoUpdateWithoutProfissionalInput, PremiacaoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<PremiacaoCreateWithoutProfissionalInput, PremiacaoUncheckedCreateWithoutProfissionalInput>
  }

  export type PremiacaoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: PremiacaoWhereUniqueInput
    data: XOR<PremiacaoUpdateWithoutProfissionalInput, PremiacaoUncheckedUpdateWithoutProfissionalInput>
  }

  export type PremiacaoUpdateManyWithWhereWithoutProfissionalInput = {
    where: PremiacaoScalarWhereInput
    data: XOR<PremiacaoUpdateManyMutationInput, PremiacaoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type PremiacaoScalarWhereInput = {
    AND?: PremiacaoScalarWhereInput | PremiacaoScalarWhereInput[]
    OR?: PremiacaoScalarWhereInput[]
    NOT?: PremiacaoScalarWhereInput | PremiacaoScalarWhereInput[]
    id?: StringFilter<"Premiacao"> | string
    createdAt?: DateTimeFilter<"Premiacao"> | Date | string
    updatedAt?: DateTimeFilter<"Premiacao"> | Date | string
    profissionalId?: StringFilter<"Premiacao"> | string
    tipo?: EnumTipoPremiacaoFilter<"Premiacao"> | $Enums.TipoPremiacao
    descricao?: StringFilter<"Premiacao"> | string
    tabelaFaixas?: JsonNullableFilter<"Premiacao">
    bonusMetaIndividual?: DecimalNullableFilter<"Premiacao"> | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: IntNullableFilter<"Premiacao"> | number | null
    ativo?: BoolFilter<"Premiacao"> | boolean
  }

  export type ProcedimentoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: ProcedimentoWhereUniqueInput
    update: XOR<ProcedimentoUpdateWithoutProfissionalInput, ProcedimentoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<ProcedimentoCreateWithoutProfissionalInput, ProcedimentoUncheckedCreateWithoutProfissionalInput>
  }

  export type ProcedimentoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: ProcedimentoWhereUniqueInput
    data: XOR<ProcedimentoUpdateWithoutProfissionalInput, ProcedimentoUncheckedUpdateWithoutProfissionalInput>
  }

  export type ProcedimentoUpdateManyWithWhereWithoutProfissionalInput = {
    where: ProcedimentoScalarWhereInput
    data: XOR<ProcedimentoUpdateManyMutationInput, ProcedimentoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type ProfissionalCreateWithoutComissoesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    premiacoes?: PremiacaoCreateNestedManyWithoutProfissionalInput
    procedimentos?: ProcedimentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutComissoesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    premiacoes?: PremiacaoUncheckedCreateNestedManyWithoutProfissionalInput
    procedimentos?: ProcedimentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutComissoesInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutComissoesInput, ProfissionalUncheckedCreateWithoutComissoesInput>
  }

  export type ProfissionalUpsertWithoutComissoesInput = {
    update: XOR<ProfissionalUpdateWithoutComissoesInput, ProfissionalUncheckedUpdateWithoutComissoesInput>
    create: XOR<ProfissionalCreateWithoutComissoesInput, ProfissionalUncheckedCreateWithoutComissoesInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutComissoesInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutComissoesInput, ProfissionalUncheckedUpdateWithoutComissoesInput>
  }

  export type ProfissionalUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    premiacoes?: PremiacaoUpdateManyWithoutProfissionalNestedInput
    procedimentos?: ProcedimentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutComissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    premiacoes?: PremiacaoUncheckedUpdateManyWithoutProfissionalNestedInput
    procedimentos?: ProcedimentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateWithoutPremiacoesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionCreateNestedManyWithoutProfissionalInput
    procedimentos?: ProcedimentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutPremiacoesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUncheckedCreateNestedManyWithoutProfissionalInput
    procedimentos?: ProcedimentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutPremiacoesInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutPremiacoesInput, ProfissionalUncheckedCreateWithoutPremiacoesInput>
  }

  export type ProfissionalUpsertWithoutPremiacoesInput = {
    update: XOR<ProfissionalUpdateWithoutPremiacoesInput, ProfissionalUncheckedUpdateWithoutPremiacoesInput>
    create: XOR<ProfissionalCreateWithoutPremiacoesInput, ProfissionalUncheckedCreateWithoutPremiacoesInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutPremiacoesInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutPremiacoesInput, ProfissionalUncheckedUpdateWithoutPremiacoesInput>
  }

  export type ProfissionalUpdateWithoutPremiacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUpdateManyWithoutProfissionalNestedInput
    procedimentos?: ProcedimentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutPremiacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUncheckedUpdateManyWithoutProfissionalNestedInput
    procedimentos?: ProcedimentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateWithoutProcedimentosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionCreateNestedManyWithoutProfissionalInput
    premiacoes?: PremiacaoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutProcedimentosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
    tipo: $Enums.TipoProfissional
    nivel?: $Enums.NivelComercial | null
    aluguelFixo?: Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUncheckedCreateNestedManyWithoutProfissionalInput
    premiacoes?: PremiacaoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutProcedimentosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutProcedimentosInput, ProfissionalUncheckedCreateWithoutProcedimentosInput>
  }

  export type PacienteCreateWithoutProcedimentosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
  }

  export type PacienteUncheckedCreateWithoutProcedimentosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nome: string
  }

  export type PacienteCreateOrConnectWithoutProcedimentosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutProcedimentosInput, PacienteUncheckedCreateWithoutProcedimentosInput>
  }

  export type PaymentMethodsCreateWithoutProcedimentoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPagamento: Date | string
    valor?: Decimal | DecimalJsLike | number | string
    formaPagamento: string
  }

  export type PaymentMethodsUncheckedCreateWithoutProcedimentoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPagamento: Date | string
    valor?: Decimal | DecimalJsLike | number | string
    formaPagamento: string
  }

  export type PaymentMethodsCreateOrConnectWithoutProcedimentoInput = {
    where: PaymentMethodsWhereUniqueInput
    create: XOR<PaymentMethodsCreateWithoutProcedimentoInput, PaymentMethodsUncheckedCreateWithoutProcedimentoInput>
  }

  export type PaymentMethodsCreateManyProcedimentoInputEnvelope = {
    data: PaymentMethodsCreateManyProcedimentoInput | PaymentMethodsCreateManyProcedimentoInput[]
    skipDuplicates?: boolean
  }

  export type ProfissionalUpsertWithoutProcedimentosInput = {
    update: XOR<ProfissionalUpdateWithoutProcedimentosInput, ProfissionalUncheckedUpdateWithoutProcedimentosInput>
    create: XOR<ProfissionalCreateWithoutProcedimentosInput, ProfissionalUncheckedCreateWithoutProcedimentosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutProcedimentosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutProcedimentosInput, ProfissionalUncheckedUpdateWithoutProcedimentosInput>
  }

  export type ProfissionalUpdateWithoutProcedimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUpdateManyWithoutProfissionalNestedInput
    premiacoes?: PremiacaoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutProcedimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoProfissionalFieldUpdateOperationsInput | $Enums.TipoProfissional
    nivel?: NullableEnumNivelComercialFieldUpdateOperationsInput | $Enums.NivelComercial | null
    aluguelFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    comissoes?: CommissionUncheckedUpdateManyWithoutProfissionalNestedInput
    premiacoes?: PremiacaoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type PacienteUpsertWithoutProcedimentosInput = {
    update: XOR<PacienteUpdateWithoutProcedimentosInput, PacienteUncheckedUpdateWithoutProcedimentosInput>
    create: XOR<PacienteCreateWithoutProcedimentosInput, PacienteUncheckedCreateWithoutProcedimentosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutProcedimentosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutProcedimentosInput, PacienteUncheckedUpdateWithoutProcedimentosInput>
  }

  export type PacienteUpdateWithoutProcedimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateWithoutProcedimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodsUpsertWithWhereUniqueWithoutProcedimentoInput = {
    where: PaymentMethodsWhereUniqueInput
    update: XOR<PaymentMethodsUpdateWithoutProcedimentoInput, PaymentMethodsUncheckedUpdateWithoutProcedimentoInput>
    create: XOR<PaymentMethodsCreateWithoutProcedimentoInput, PaymentMethodsUncheckedCreateWithoutProcedimentoInput>
  }

  export type PaymentMethodsUpdateWithWhereUniqueWithoutProcedimentoInput = {
    where: PaymentMethodsWhereUniqueInput
    data: XOR<PaymentMethodsUpdateWithoutProcedimentoInput, PaymentMethodsUncheckedUpdateWithoutProcedimentoInput>
  }

  export type PaymentMethodsUpdateManyWithWhereWithoutProcedimentoInput = {
    where: PaymentMethodsScalarWhereInput
    data: XOR<PaymentMethodsUpdateManyMutationInput, PaymentMethodsUncheckedUpdateManyWithoutProcedimentoInput>
  }

  export type PaymentMethodsScalarWhereInput = {
    AND?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
    OR?: PaymentMethodsScalarWhereInput[]
    NOT?: PaymentMethodsScalarWhereInput | PaymentMethodsScalarWhereInput[]
    id?: StringFilter<"PaymentMethods"> | string
    createdAt?: DateTimeFilter<"PaymentMethods"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethods"> | Date | string
    dataPagamento?: DateTimeFilter<"PaymentMethods"> | Date | string
    valor?: DecimalFilter<"PaymentMethods"> | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFilter<"PaymentMethods"> | string
    procedimentoId?: StringFilter<"PaymentMethods"> | string
  }

  export type ProcedimentoCreateWithoutPaymentMethodsInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissional: ProfissionalCreateNestedOneWithoutProcedimentosInput
    paciente: PacienteCreateNestedOneWithoutProcedimentosInput
  }

  export type ProcedimentoUncheckedCreateWithoutPaymentMethodsInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissionalId: string
    pacienteId: string
  }

  export type ProcedimentoCreateOrConnectWithoutPaymentMethodsInput = {
    where: ProcedimentoWhereUniqueInput
    create: XOR<ProcedimentoCreateWithoutPaymentMethodsInput, ProcedimentoUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type ProcedimentoUpsertWithoutPaymentMethodsInput = {
    update: XOR<ProcedimentoUpdateWithoutPaymentMethodsInput, ProcedimentoUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<ProcedimentoCreateWithoutPaymentMethodsInput, ProcedimentoUncheckedCreateWithoutPaymentMethodsInput>
    where?: ProcedimentoWhereInput
  }

  export type ProcedimentoUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: ProcedimentoWhereInput
    data: XOR<ProcedimentoUpdateWithoutPaymentMethodsInput, ProcedimentoUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type ProcedimentoUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneRequiredWithoutProcedimentosNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutProcedimentosNestedInput
  }

  export type ProcedimentoUncheckedUpdateWithoutPaymentMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
  }

  export type ProcedimentoCreateManyPacienteInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    profissionalId: string
  }

  export type ProcedimentoUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneRequiredWithoutProcedimentosNestedInput
    paymentMethods?: PaymentMethodsUpdateManyWithoutProcedimentoNestedInput
  }

  export type ProcedimentoUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    paymentMethods?: PaymentMethodsUncheckedUpdateManyWithoutProcedimentoNestedInput
  }

  export type ProcedimentoUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
  }

  export type CommissionCreateManyProfissionalInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: $Enums.CategoriaComissao
    tipoCalculo: $Enums.TipoCalculo
    percentual?: Decimal | DecimalJsLike | number | string | null
    valorFixo?: Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: boolean
  }

  export type PremiacaoCreateManyProfissionalInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: $Enums.TipoPremiacao
    descricao: string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: Decimal | DecimalJsLike | number | string | null
    metaIndividual?: number | null
    ativo?: boolean
  }

  export type ProcedimentoCreateManyProfissionalInput = {
    id?: string
    createdAt?: Date | string
    dataAtendimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    tipo: string
    status: string
    pacienteId: string
  }

  export type CommissionUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: EnumCategoriaComissaoFieldUpdateOperationsInput | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFieldUpdateOperationsInput | $Enums.TipoCalculo
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommissionUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: EnumCategoriaComissaoFieldUpdateOperationsInput | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFieldUpdateOperationsInput | $Enums.TipoCalculo
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommissionUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: EnumCategoriaComissaoFieldUpdateOperationsInput | $Enums.CategoriaComissao
    tipoCalculo?: EnumTipoCalculoFieldUpdateOperationsInput | $Enums.TipoCalculo
    percentual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorFixo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tabelaProgressiva?: NullableJsonNullValueInput | InputJsonValue
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiacaoUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoPremiacaoFieldUpdateOperationsInput | $Enums.TipoPremiacao
    descricao?: StringFieldUpdateOperationsInput | string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiacaoUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoPremiacaoFieldUpdateOperationsInput | $Enums.TipoPremiacao
    descricao?: StringFieldUpdateOperationsInput | string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiacaoUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoPremiacaoFieldUpdateOperationsInput | $Enums.TipoPremiacao
    descricao?: StringFieldUpdateOperationsInput | string
    tabelaFaixas?: NullableJsonNullValueInput | InputJsonValue
    bonusMetaIndividual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    metaIndividual?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProcedimentoUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutProcedimentosNestedInput
    paymentMethods?: PaymentMethodsUpdateManyWithoutProcedimentoNestedInput
  }

  export type ProcedimentoUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    paymentMethods?: PaymentMethodsUncheckedUpdateManyWithoutProcedimentoNestedInput
  }

  export type ProcedimentoUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodsCreateManyProcedimentoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataPagamento: Date | string
    valor?: Decimal | DecimalJsLike | number | string
    formaPagamento: string
  }

  export type PaymentMethodsUpdateWithoutProcedimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodsUncheckedUpdateWithoutProcedimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodsUncheckedUpdateManyWithoutProcedimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
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