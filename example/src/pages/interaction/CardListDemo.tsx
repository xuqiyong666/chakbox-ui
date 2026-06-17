import { Heading, Stack, Text } from 'chakbox-ui'

export const CARD_LIST_CODE = `import { Heading, Stack, Text } from 'chakbox-ui'

<Stack gap={12}>
  {[1, 2, 3].map((item) => (
    <Stack
      key={item}
      gap={8}
      p={16}
      bg="#fafafa"
      rounded={8}
      border="1px solid #f0f0f0"
      cursor="pointer"
      _hover={{ borderColor: '#1677ff' }}
    >
      <Heading as="h3" fontSize={16}>卡片 {item}</Heading>
      <Text color="#666" fontSize={14}>悬停时边框高亮</Text>
    </Stack>
  ))}
</Stack>`

export function CardListDemo() {
  return (
    <Stack gap={12}>
      {[1, 2, 3].map((item) => (
        <Stack
          key={item}
          gap={8}
          p={16}
          bg="#fafafa"
          rounded={8}
          border="1px solid #f0f0f0"
          cursor="pointer"
          _hover={{ borderColor: '#1677ff' }}
        >
          <Heading as="h3" fontSize={16}>
            卡片 {item}
          </Heading>
          <Text color="#666" fontSize={14}>
            悬停时边框高亮
          </Text>
        </Stack>
      ))}
    </Stack>
  )
}
