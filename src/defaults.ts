import { AxiosRequestConfig } from './type'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 3000,
  headers: {
    common: {
      Accept: 'application/json,text/plain,*/*'
    }
  }
}

const methodNoData = ['get', 'delete', 'head', 'options']

methodNoData.forEach((method) => {
  defaults.headers[method] = {}
})

const methodWithData = ['post', 'put', 'patch']

methodWithData.forEach((method) => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
