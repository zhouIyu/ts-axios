import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/base/get',
    method: 'get',
    response: ({ query }: any) => {
      return {
        data: query
      }
    }
  },
  {
    url: '/base/post',
    method: 'post',
    response: ({ body }: any) => {
      return {
        data: body
      }
    }
  }
] as MockMethod[]
