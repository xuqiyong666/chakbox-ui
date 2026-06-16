import { forwardRef } from 'react'

import { Flex } from './Flex'
import type { PropsWithIntrinsicAs } from '../types'

export type CenterProps = PropsWithIntrinsicAs<'div'>

export const Center = forwardRef<HTMLDivElement, CenterProps>(function Center(props, ref) {
  const { as: tag = 'div', ...rest } = props

  return (
    <Flex
      ref={ref}
      as={tag}
      alignItems="center"
      justifyContent="center"
      {...rest}
    />
  )
})
