import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  JSX,
  ReactElement,
  ReactNode,
} from 'react'

import type { PseudoStylePropKey } from './constants'
import type { StylePropKey } from './cssProperties'

export type PrimitiveStyleValue = string | number

type PseudoStyleRecord = Record<string, unknown>

export type StyleProps = {
  [K in StylePropKey]?: PrimitiveStyleValue
} & {
  [K in PseudoStylePropKey]?: PseudoStyleRecord
}

/** 内置 HTML 标签名，用于 `as` 切换布局/语义元素 */
export type IntrinsicTagName = keyof JSX.IntrinsicElements

export type BoxOwnProps<TTag extends ElementType> = StyleProps & {
  as?: TTag
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

/** color 等样式键已由 StyleProps / keyof BoxOwnProps 从 DOM props 中排除 */
export type BoxLikeProps<TTag extends ElementType = 'div'> = BoxOwnProps<TTag> &
  Omit<ComponentPropsWithoutRef<TTag>, keyof BoxOwnProps<TTag> | 'color'>

export type BoxLikeRef<TTag extends ElementType> = ComponentPropsWithRef<TTag>['ref']

export type BoxProps<TTag extends ElementType = 'div'> = BoxLikeProps<TTag>

export type BoxComponent = <TTag extends ElementType = 'div'>(
  props: BoxProps<TTag> & {
    ref?: BoxLikeRef<TTag>
  },
) => ReactElement | null

/**
 * 包装组件 props：继承默认标签的 BoxLikeProps，as 可覆盖为任意内置 HTML 标签。
 * 默认标签由各组件在实现中指定（如 Text 默认 span、Flex 默认 div）。
 */
export type PropsWithIntrinsicAs<TDefaultTag extends IntrinsicTagName = 'div'> = Omit<
  BoxLikeProps<TDefaultTag>,
  'as'
> & {
  as?: IntrinsicTagName
}

export type PartitionKeysResult = {
  stylePropKeys: string[]
  pseudoStylePropKeys: string[]
  domPropKeys: string[]
}

export type SplitStylePropsResult = {
  styleProps: Partial<StyleProps>
  domProps: Record<string, unknown>
}
