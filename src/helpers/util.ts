export function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any) {
  return Object.prototype.toString.call(val) === '[object Object]'
}
