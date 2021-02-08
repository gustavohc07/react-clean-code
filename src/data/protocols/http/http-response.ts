export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 205,
  unauthorized = 401,
  notFound = 404,
  internalServerError = 500
}

// Quem chamar o HttpResponse deve passar qual o tipo do body.
export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
