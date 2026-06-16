import { forwardRef } from 'react'

import { Box } from './Box'
import type { PropsWithIntrinsicAs } from '../types'

export type TextProps = PropsWithIntrinsicAs<'span'>

export const Text = forwardRef<HTMLSpanElement, TextProps>(function Text(props, ref) {
  const { as: tag = 'span', ...rest } = props

  return (
    <Box
      data-type="Text"
      ref={ref}
      as={tag}
      {...rest}
    />
  )
})
