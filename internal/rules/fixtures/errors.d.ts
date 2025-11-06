// used by only-throw-error test case to validate package-based type specifiers
declare module 'errors' {
  export type ErrorLike = Error;
  export function createError(): ErrorLike;
}
