import { forwardRef } from 'react'

import { Box } from './Box'
import type { PropsWithIntrinsicAs } from '../types'

export type CodeProps = PropsWithIntrinsicAs<'code'>

export const Code = forwardRef<HTMLElement, CodeProps>(function Code(props, ref) {
  const {
    as: tag = 'code',
    fontFamily = 'monospace',
    fontSize = '0.875em',
    px = '0.25em',
    py = '0.125em',
    borderRadius = '4px',
    ...rest
  } = props

  return (
    <Box
      ref={ref}
      as={tag}
      fontFamily={fontFamily}
      fontSize={fontSize}
      px={px}
      py={py}
      borderRadius={borderRadius}
      {...rest}
    />
  )
})
