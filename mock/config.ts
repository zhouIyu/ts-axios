import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/config/post',
    method: 'post',
    response: () => {
      return {
        msg: 'hello world'
      }
    }
  }
] as MockMethod[]
