/*
  Elysia Type
  - Elysia.t is based on TypeBox with pre-configuration for usage on the server while providing additional types commonly found on server-side validation.
  - You can find all of the source code of Elysia type in elysia/type-system.
  - The following are types provided by Elysia:
    + Numeric
    + File
    + Files 
    + Cookie
    + Nullable
    + Maybe Empty


************************

  Numeric
  - Numeric accepts a numeric string or number and then transforms the value into a number.
    
    @@ t.Numeric()

  - This is useful when an incoming value is a numeric string for example path parameter or query string.
  - Numeric accepts the same attribute as Numeric Instance


************************

  File
  - A singular file. Often useful for file upload validation.

    @@ t.File()

  - File extends attribute of base schema, with additional property as follows:

  type
  - A format of the file like image, video, audio.
  - If an array is provided, will attempt to validate if any of the format is valid.

    @@ type?: MaybeArray<string>

  minSize
  - Minimum size of the file.
  - Accept number in byte or suffix of file unit:

    @@ minSize?: number | `${number}${'k' | 'm'}`

  maxSize
  - Maximum size of the file.
  - Accept number in byte or suffix of file unit:

    @@ maxSize?: number | `${number}${'k' | 'm'}`

  File Unit Suffix:
  - The following are the specifications of the file unit: m: MegaByte (1048576 byte) k: KiloByte (1024 byte)


************************

  Files
  - Extends from File, but adds support for an array of files in a single field.

    @@ t.Files()

  - File extends attributes of base schema, array, and File.


************************

  Cookie
  - Object-like representation of a Cookie Jar extended from Object type.

      t.Cookie({
          name: t.String()
      })

  - Cookie extends attributes of Object and Cookie with additional properties follows:


  secrets
  - The secret key for signing cookies.
  - Accepts a string or an array of string

    @@ secrets?: string | string[]

  - If an array is provided, Key Rotation will be used, the newly signed value will use the first secret as the key.


************************

  Nullable
  - Allow the value to be null but not undefined.

    @@ t.Nullable(t.String())


************************

  MaybeEmpty
  - Allow the value to be null and undefined.

    @@ t.MaybeEmpty(t.String())

  - For additional information, you can find the full source code of the type system in elysia/type-system.


*/
