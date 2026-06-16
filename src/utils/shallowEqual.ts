/**
 * 浅比较两个值是否相等（对象与数组仅比较一层）。
 */
export function shallowEqual(a: unknown, b: unknown): boolean {
  if (a === b) {
    return true
  }

  if (a == null || b == null) {
    return false
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return false
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false
    }

    for (let index = 0; index < a.length; index += 1) {
      if (a[index] !== b[index]) {
        return false
      }
    }

    return true
  }

  const objectA = a as Record<string, unknown>
  const objectB = b as Record<string, unknown>
  const keysA = Object.keys(objectA)
  const keysB = Object.keys(objectB)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (const key of keysA) {
    if (objectA[key] !== objectB[key]) {
      return false
    }
  }

  return true
}
