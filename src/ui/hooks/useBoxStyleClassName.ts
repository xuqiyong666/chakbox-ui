import { css, cx } from '@emotion/css'
import { useMemo } from 'react'

import { useDeepEqualMemo } from '../../hooks/useDeepEqualMemo'
import { useShallowMemo } from '../../hooks/useShallowMemo'
import {
  assemblePseudoStyleProps,
  assembleStyleProps,
  partitionKeys,
  toStyleObject,
} from '../utils'

export function useBoxStyleClassName(
  rest: Record<string, unknown>,
  className?: string,
): string {
  const restKeys = useShallowMemo(() => Object.keys(rest))

  const { stylePropKeys, pseudoStylePropKeys } = useMemo(
    () => partitionKeys(restKeys),
    [restKeys],
  )

  const styleProps = useShallowMemo(() => assembleStyleProps(rest, stylePropKeys))

  const pseudoStyleProps = useDeepEqualMemo(() =>
    assemblePseudoStyleProps(rest, pseudoStylePropKeys),
  )

  const styleObject = useMemo(
    () =>
      toStyleObject({
        ...styleProps,
        ...pseudoStyleProps,
      }),
    [styleProps, pseudoStyleProps],
  )

  const styleClassName = useMemo(() => css(styleObject), [styleObject])

  return useMemo(() => cx(styleClassName, className), [styleClassName, className])
}
