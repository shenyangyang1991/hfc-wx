export function disposeSrc(src, prefix) {
  Object.keys(src).forEach(key => {
    if (typeof src[key] === 'string') {
      src[key] = `${prefix}${src[key]}`
    } else {
      src[key] = disposeSrc(src[key], prefix)
    }
  })
  return src
}