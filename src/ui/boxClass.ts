import { css, cx } from '@emotion/css'

import type { StyleProps } from './types'
import {
  assemblePseudoStyleProps,
  assembleStyleProps,
  partitionKeys,
  toStyleObject,
} from './utils'

export type BoxClassProps = StyleProps

export function resolveStylePropsToClassName(props: Record<string, unknown>): string {
  const { stylePropKeys, pseudoStylePropKeys } = partitionKeys(Object.keys(props))
  const styleProps = assembleStyleProps(props, stylePropKeys)
  const pseudoStyleProps = assemblePseudoStyleProps(props, pseudoStylePropKeys)
  const styleObject = toStyleObject({
    ...styleProps,
    ...pseudoStyleProps,
  })

  return css(styleObject)
}

/**
 * 将 Box 样式 props 转为 emotion className，供 antd 等组件的 className 注入使用。
 */
export function boxClass(styleProps: BoxClassProps, className?: string): string {
  const styleClassName = resolveStylePropsToClassName(styleProps as Record<string, unknown>)
  return className ? cx(styleClassName, className) : styleClassName
}
