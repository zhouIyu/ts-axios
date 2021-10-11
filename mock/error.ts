import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/error/get',
    method: 'get',
    statusCode: 500
  },
  {
    url: '/error/timeout',
    method: 'get',
    response: () => {
      setTimeout(() => {
        return {
          msh: 'hello world'
        }
      })
    }
  }
] as MockMethod[]
