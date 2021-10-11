import { AxiosRequestConfig } from '../type'
import { isPlainObject, deepMerge } from '../helpers/util'

const strats = Object.create(null)

function defaultStrata(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1
}

function fromVal2Strata(val1: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2
  }
}

const strataKeyFromVal2 = ['url', 'params', 'data']

strataKeyFromVal2.forEach((key) => {
  strats[key] = fromVal2Strata
})

function deepMergeStrata(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2)
  } else if (typeof val2 !== 'undefined') {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else {
    return val1
  }
}

const strataKeyDeepMerge = ['headers', 'auth']

strataKeyDeepMerge.forEach((key) => {
  strats[key] = deepMergeStrata
})

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {}
  }

  const config = Object.create(null)
  for (const key in config2) {
    mergeField(key)
  }
  for (const key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strata = strats[key] || defaultStrata
    config[key] = strata(config1[key], config2![key])
  }

  return config
}
