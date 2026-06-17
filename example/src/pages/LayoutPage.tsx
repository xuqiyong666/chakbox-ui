import { Box, Center, Code, Heading, HStack, Stack, Text, VStack } from 'chakbox-ui'

import { DemoSection } from '../components/DemoSection'

const CENTER_CODE = `import { Box, Center, Heading, Stack, Text } from 'chakbox-ui'

<Box h={280} bg="#fff" rounded={6} overflow="hidden">
  <Center h="100%">
    <Stack gap={16} p={24} w={320} bg="#fff" rounded={8} shadow="0 4px 12px rgba(0,0,0,0.1)">
      <Heading as="h2" fontSize={20}>登录</Heading>
      <Text color="#666">请输入账号和密码</Text>
    </Stack>
  </Center>
</Box>`

const HEADER_CONTENT_CODE = `import { Box, Heading, HStack, Text, VStack } from 'chakbox-ui'

<Box h={240} bg="#fff" rounded={6} overflow="hidden">
  <VStack h="100%">
    <HStack
      h={48}
      px={16}
      align="center"
      justify="space-between"
      bg="#fff"
      borderBottom="1px solid #f0f0f0"
    >
      <Heading as="h1" fontSize={16}>控制台</Heading>
      <Text fontSize={14}>用户名</Text>
    </HStack>
    <Box flex={1} p={16}>
      <Text color="#666">主内容区域</Text>
    </Box>
  </VStack>
</Box>`

const COLUMNS_CODE = `import { Box, HStack, Text } from 'chakbox-ui'

<HStack gap={16} align="stretch">
  <Box flex={1} p={16} bg="#fafafa" rounded={8}>
    <Text>左侧内容</Text>
  </Box>
  <Box w={200} p={16} bg="#fafafa" rounded={8}>
    <Text fontSize={14} color="#666">右侧面板</Text>
  </Box>
</HStack>`

const FORM_CODE = `import { Box, Stack, Text } from 'chakbox-ui'

<Stack gap={16} maxW={400}>
  <Stack gap={8}>
    <Text fontSize={14}>用户名</Text>
    <Box h={40} w="100%" bg="#fafafa" rounded={6} border="1px solid #d9d9d9" />
  </Stack>
  <Stack gap={8}>
    <Text fontSize={14}>密码</Text>
    <Box h={40} w="100%" bg="#fafafa" rounded={6} border="1px solid #d9d9d9" />
  </Stack>
</Stack>`

const ICON_TEXT_CODE = `import { Box, HStack, Text } from 'chakbox-ui'

<HStack gap={8} align="center">
  <Box w={8} h={8} bg="#1677ff" rounded="50%" />
  <Text>在线</Text>
</HStack>`

const TYPOGRAPHY_CODE = `import { Code, Heading, Stack, Text } from 'chakbox-ui'

<Stack gap={8}>
  <Heading as="h3" fontSize={16}>三级标题</Heading>
  <Text>正文内容，支持 <Code>color</Code>、<Code>fontSize</Code> 等样式 props。</Text>
  <Text color="#999" fontSize={14}>次要说明文字</Text>
</Stack>`

export function LayoutPage() {
  return (
    <Stack gap={24} maxW={960}>
      <Stack gap={8}>
        <Heading as="h2" fontSize={24}>
          布局
        </Heading>
        <Text color="#666">Center、Stack、HStack、VStack、Box、Text、Heading</Text>
      </Stack>

      <DemoSection title="全屏居中" description="Center + Stack" code={CENTER_CODE}>
        <Box h={280} bg="#fff" rounded={6} overflow="hidden">
          <Center h="100%">
            <Stack gap={16} p={24} w={320} bg="#fff" rounded={8} shadow="0 4px 12px rgba(0,0,0,0.1)">
              <Heading as="h2" fontSize={20}>
                登录
              </Heading>
              <Text color="#666">请输入账号和密码</Text>
            </Stack>
          </Center>
        </Box>
      </DemoSection>

      <DemoSection title="顶栏 + 内容区" description="VStack + HStack" code={HEADER_CONTENT_CODE}>
        <Box h={240} bg="#fff" rounded={6} overflow="hidden">
          <VStack h="100%">
            <HStack
              h={48}
              px={16}
              align="center"
              justify="space-between"
              bg="#fff"
              borderBottom="1px solid #f0f0f0"
            >
              <Heading as="h1" fontSize={16}>
                控制台
              </Heading>
              <Text fontSize={14}>用户名</Text>
            </HStack>
            <Box flex={1} p={16}>
              <Text color="#666">主内容区域</Text>
            </Box>
          </VStack>
        </Box>
      </DemoSection>

      <DemoSection title="左右分栏" description="HStack + Box" code={COLUMNS_CODE}>
        <HStack gap={16} align="stretch">
          <Box flex={1} p={16} bg="#fafafa" rounded={8}>
            <Text>左侧内容</Text>
          </Box>
          <Box w={200} p={16} bg="#fafafa" rounded={8}>
            <Text fontSize={14} color="#666">
              右侧面板
            </Text>
          </Box>
        </HStack>
      </DemoSection>

      <DemoSection title="表单项" description="Stack 纵向排列" code={FORM_CODE}>
        <Stack gap={16} maxW={400}>
          <Stack gap={8}>
            <Text fontSize={14}>用户名</Text>
            <Box h={40} w="100%" bg="#fafafa" rounded={6} border="1px solid #d9d9d9" />
          </Stack>
          <Stack gap={8}>
            <Text fontSize={14}>密码</Text>
            <Box h={40} w="100%" bg="#fafafa" rounded={6} border="1px solid #d9d9d9" />
          </Stack>
        </Stack>
      </DemoSection>

      <DemoSection title="图标 + 文字" description="HStack align center" code={ICON_TEXT_CODE}>
        <HStack gap={8} align="center">
          <Box w={8} h={8} bg="#1677ff" rounded="50%" />
          <Text>在线</Text>
        </HStack>
      </DemoSection>

      <DemoSection title="排版" description="Text、Heading、Code" code={TYPOGRAPHY_CODE}>
        <Stack gap={8}>
          <Heading as="h3" fontSize={16}>
            三级标题
          </Heading>
          <Text>
            正文内容，支持 <Code>color</Code>、<Code>fontSize</Code> 等样式 props。
          </Text>
          <Text color="#999" fontSize={14}>
            次要说明文字
          </Text>
        </Stack>
      </DemoSection>
    </Stack>
  )
}
