import { HttpRequest, HttpResponse } from './http'

export type Controller = {
  handle: (httpRequest: HttpRequest) => HttpResponse
}
