export function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function isFormData(val: any): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData
}

export function extend<T, U>(to: T, form: U): T & U {
  function copy(instance: Record<string, any>) {
    Object.getOwnPropertyNames(instance).forEach((key) => {
      Object.assign(to, {
        [key]: instance[key]
      })
    })
    const proto = Reflect.getPrototypeOf(instance)

    if (proto !== null) {
      copy(proto)
    }
  }

  copy(form)
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)
  objs.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge({}, val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
