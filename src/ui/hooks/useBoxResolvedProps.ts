import { useMemo } from 'react'

import { useShallowMemo } from '../../hooks/useShallowMemo'
import { assembleDomProps, partitionKeys } from '../utils'
import { useBoxStyleClassName } from './useBoxStyleClassName'

interface UseBoxResolvedPropsResult {
  domProps: Record<string, unknown>
  rootClassName: string
}

export function useBoxResolvedProps(
  rest: Record<string, unknown>,
  className?: string,
): UseBoxResolvedPropsResult {
  const restKeys = useShallowMemo(() => Object.keys(rest))

  const { domPropKeys } = useMemo(() => partitionKeys(restKeys), [restKeys])

  const domProps = useShallowMemo(() => assembleDomProps(rest, domPropKeys))
  const rootClassName = useBoxStyleClassName(rest, className)

  return {
    domProps,
    rootClassName,
  }
}
