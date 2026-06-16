import { forwardRef } from 'react'

import { Stack } from './Stack'
import type { PropsWithIntrinsicAs } from '../types'

export type VStackProps = PropsWithIntrinsicAs<'div'>

export const VStack = forwardRef<HTMLDivElement, VStackProps>(function VStack(props, ref) {
  const { as: tag = 'div', ...rest } = props

  return (
    <Stack
      data-type="VStack"
      ref={ref}
      as={tag}
      flexDirection="column"
      {...rest}
    />
  )
})
