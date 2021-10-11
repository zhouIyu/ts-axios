import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/extend/get',
    method: 'get'
  },
  {
    url: '/extend/options',
    method: 'options'
  },
  {
    url: '/extend/head',
    method: 'head'
  },
  {
    url: '/extend/delete',
    method: 'delete'
  },
  {
    url: '/extend/post',
    method: 'post',
    response: ({ body }: any) => {
      return body
    }
  },
  {
    url: '/extend/put',
    method: 'put',
    response: ({ body }: any) => {
      return body
    }
  },
  {
    url: '/extend/patch',
    method: 'patch',
    response: ({ body }: any) => {
      return body
    }
  },
  {
    url: '/extend/user',
    method: 'get',
    response: () => {
      const user = {
        name: 'Jon',
        age: 13
      }
      return {
        code: 0,
        data: user,
        message: '请求成功'
      }
    }
  }
] as MockMethod[]
