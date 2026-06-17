import type { ReactNode } from 'react'
import { Box, Heading, Stack, Text } from 'chakbox-ui'

import { CodeBlock } from './CodeBlock'

export function DemoSection({
  title,
  description,
  code,
  children,
}: {
  title: string
  description?: string
  code?: string
  children: ReactNode
}) {
  return (
    <Stack gap={16} p={24} bg="#fff" rounded={8} border="1px solid #f0f0f0">
      <Stack gap={4}>
        <Heading as="h2" fontSize={18}>
          {title}
        </Heading>
        {description ? <Text color="#666">{description}</Text> : null}
      </Stack>

      {code ? (
        <>
          <Box p={16} bg="#fafafa" rounded={6}>
            {children}
          </Box>
          <Stack gap={8}>
            <Text fontSize={14} color="#666">
              源码
            </Text>
            <CodeBlock language="tsx">{code}</CodeBlock>
          </Stack>
        </>
      ) : (
        children
      )}
    </Stack>
  )
}
