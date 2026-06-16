import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react'

import type { BoxComponent, BoxLikeRef, BoxProps } from '../types'
import { useBoxResolvedProps } from '../hooks/useBoxResolvedProps'

const BoxImpl = function BoxImpl<TTag extends ElementType = 'div'>(
  props: BoxProps<TTag>,
  ref: BoxLikeRef<TTag>,
) {
  const {
    as: InnerComponent = 'div',
    className,
    style,
    children,
    ...rest
  } = props

  const { domProps, rootClassName } = useBoxResolvedProps(
    rest as Record<string, unknown>,
    className,
  )

  const Component = InnerComponent as ElementType

  return (
    <Component
      data-type="Box"
      ref={ref}
      className={rootClassName}
      style={style}
      {...(domProps as ComponentPropsWithoutRef<TTag>)}
    >
      {children}
    </Component>
  )
}

// forwardRef 无法直接承载多态 render；导出层用断言恢复 BoxComponent 调用签名。
export const Box = forwardRef(BoxImpl as never) as unknown as BoxComponent
