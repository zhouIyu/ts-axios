import { AxiosRequestConfig } from './type'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function xhr(config: AxiosRequestConfig) {
  const { url, method = 'get', data = null } = config
  const request = new XMLHttpRequest()

  request.open(method.toLowerCase(), url, true)

  request.send(data)
}
