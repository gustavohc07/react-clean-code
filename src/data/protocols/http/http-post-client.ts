import { HttpResponse } from '@/data/protocols/http/http-response'

// <T> -> Generics do Typescript. Utilizado para que possamos, no codigo, detemrinar o tipo para a determinada interface, object, etc
export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
