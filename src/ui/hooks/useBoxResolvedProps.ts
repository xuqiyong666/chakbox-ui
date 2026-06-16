import { css, cx } from '@emotion/css'
import { useMemo } from 'react'

import { useDeepEqualMemo } from '../../hooks/useDeepEqualMemo'
import { useShallowMemo } from '../../hooks/useShallowMemo'
import {
  assembleDomProps,
  assemblePseudoStyleProps,
  assembleStyleProps,
  partitionKeys,
  toStyleObject,
} from '../utils'

interface UseBoxResolvedPropsResult {
  domProps: Record<string, unknown>
  rootClassName: string
}

export function useBoxResolvedProps(
  rest: Record<string, unknown>,
  className?: string,
): UseBoxResolvedPropsResult {
  const restKeys = useShallowMemo(() => Object.keys(rest))

  const { stylePropKeys, pseudoStylePropKeys, domPropKeys } = useMemo(
    () => partitionKeys(restKeys),
    [restKeys],
  )

  const styleProps = useShallowMemo(() => assembleStyleProps(rest, stylePropKeys))

  const pseudoStyleProps = useDeepEqualMemo(() =>
    assemblePseudoStyleProps(rest, pseudoStylePropKeys),
  )

  const domProps = useShallowMemo(() => assembleDomProps(rest, domPropKeys))

  const styleObject = useMemo(
    () =>
      toStyleObject({
        ...styleProps,
        ...pseudoStyleProps,
      }),
    [styleProps, pseudoStyleProps],
  )

  const styleClassName = useMemo(() => css(styleObject), [styleObject])
  const rootClassName = useMemo(() => cx(styleClassName, className), [styleClassName, className])

  return {
    domProps,
    rootClassName,
  }
}
