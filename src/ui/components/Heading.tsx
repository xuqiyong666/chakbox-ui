import { forwardRef } from 'react'

import { Box } from './Box'
import type { PropsWithIntrinsicAs } from '../types'

export type HeadingProps = PropsWithIntrinsicAs<'h1'>

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  props,
  ref,
) {
  const { as: tag = 'h2', fontWeight = 600, lineHeight = 1.2, ...rest } = props

  return (
    <Box
      data-type="Heading"
      ref={ref}
      as={tag}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...rest}
    />
  )
})
