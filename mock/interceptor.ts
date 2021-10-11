import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/interceptor/get',
    method: 'get',
    response: () => {
      return 'hello'
    }
  }
] as MockMethod[]
