import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/simple/get',
    method: 'get',
    response: () => {
      return {
        msg: 'hello world'
      }
    }
  }
] as MockMethod[]
