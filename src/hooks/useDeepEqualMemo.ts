import { isEqual } from 'lodash'
import { useRef, type DependencyList } from 'react'

import { shallowEqual } from '../utils/shallowEqual'

/**
 * 深比较 Memo Hook：结果深相等时返回缓存引用，便于稳定下游依赖。
 *
 * @param factory - 计算函数
 * @param deps - 依赖项；不传则每轮执行 factory，并对结果做深比较
 */
export function useDeepEqualMemo<T>(factory: () => T, deps?: DependencyList): T {
  const prevResultRef = useRef<T | undefined>(undefined)
  const prevDepsRef = useRef<DependencyList | undefined>(undefined)

  if (deps === undefined) {
    const newResult = factory()

    if (prevResultRef.current !== undefined && isEqual(newResult, prevResultRef.current)) {
      return prevResultRef.current
    }

    prevResultRef.current = newResult
    return newResult
  }

  const depsChanged = prevDepsRef.current == null || !shallowEqual(deps, prevDepsRef.current)

  if (depsChanged) {
    const newResult = factory()

    if (prevResultRef.current !== undefined && isEqual(newResult, prevResultRef.current)) {
      prevDepsRef.current = deps
      return prevResultRef.current
    }

    prevResultRef.current = newResult
    prevDepsRef.current = deps
    return newResult
  }

  return prevResultRef.current!
}
