import { forwardRef } from 'react'

import { Stack } from './Stack'
import type { PropsWithIntrinsicAs } from '../types'

export type HStackProps = PropsWithIntrinsicAs<'div'>

export const HStack = forwardRef<HTMLDivElement, HStackProps>(function HStack(props, ref) {
  const { as: tag = 'div', ...rest } = props

  return (
    <Stack
      data-type="HStack"
      ref={ref}
      as={tag}
      flexDirection="row"
      {...rest}
    />
  )
})
