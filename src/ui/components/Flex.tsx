import { forwardRef } from 'react'

import { Box } from './Box'
import type { PropsWithIntrinsicAs } from '../types'

export type FlexProps = PropsWithIntrinsicAs<'div'>

export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(props, ref) {
  const { as: tag = 'div', ...rest } = props

  return (
    <Box
      data-type="Flex"
      ref={ref}
      as={tag}
      display="flex"
      {...rest}
    />
  )
})
