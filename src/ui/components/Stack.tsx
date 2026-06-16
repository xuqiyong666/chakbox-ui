import { forwardRef } from 'react'

import { Flex } from './Flex'
import type { PropsWithIntrinsicAs } from '../types'

export type StackProps = PropsWithIntrinsicAs<'div'>

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(props, ref) {
  const { as: tag = 'div', flexDirection = 'column', ...rest } = props

  return (
    <Flex
      data-type="Stack"
      ref={ref}
      as={tag}
      flexDirection={flexDirection}
      {...rest}
    />
  )
})
