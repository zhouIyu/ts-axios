export function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any) {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, form: U): T & U {
  function copy(instance: Record<string, any>) {
    const proto = Reflect.getPrototypeOf(instance)
    console.log(proto)
    if (proto !== null) {
      Object.getOwnPropertyNames(proto).forEach((key) => {
        Object.assign(to, {
          [key]: instance[key]
        })
      })
    }
  }

  copy(form)
  return to as T & U
}
