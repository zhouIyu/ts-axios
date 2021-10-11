import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig) {
  const { url, method = 'get', data = null, headers } = config
  const request = new XMLHttpRequest()

  request.open(method.toLowerCase(), url, true)

  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}
