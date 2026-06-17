import { Code, Heading, Stack, Text, version } from 'chakbox-ui'
import { Link } from 'react-router-dom'

import { CodeBlock } from '../components/CodeBlock'
import { DemoSection } from '../components/DemoSection'

const INTRO_EXAMPLE = `import { HStack, Stack, Text } from 'chakbox-ui'

<HStack gap={8} align="center">
  <Text>标签</Text>
  <Text color="#999">说明</Text>
</HStack>`

const INSTALL_EXAMPLE = `npm i chakbox-ui

# 需配合 react、react-dom（>= 16.9.0）`

const QUICK_START_EXAMPLE = `import { Box, Heading, Stack, Text } from 'chakbox-ui'

export function Page() {
  return (
    <Stack gap={16} p={24}>
      <Heading as="h2">页面标题</Heading>
      <Text>正文内容</Text>
      <Box p={16} bg="#fafafa" rounded={8}>
        内容区域
      </Box>
    </Stack>
  )
}`

const ANTD_EXAMPLE = `import { Button, Input } from 'antd'
import { HStack, Stack, boxClass, useBoxClass } from 'chakbox-ui'

// 搜索栏：boxClass
<HStack gap={8} align="center" maxW={480}>
  <Input placeholder="搜索..." className={boxClass({ flex: 1 })} />
  <Button type="primary">查询</Button>
</HStack>

// 列表复用：useBoxClass
function SearchList() {
  const inputClass = useBoxClass({ w: '100%', mb: 8 })

  return (
    <Stack gap={0} maxW={480}>
      {items.map((item) => (
        <Input key={item.id} placeholder={\`搜索\${item.label}...\`} className={inputClass} />
      ))}
    </Stack>
  )
}`

export function OverviewPage() {
  return (
    <Stack gap={24} maxW={960}>
      <Stack gap={8}>
        <Heading as="h2" fontSize={24}>
          chakbox-ui
        </Heading>
        <Text color="#666">
          React 布局基础组件库 · <Code>v{version}</Code>
        </Text>
        <Text>
          通过 props 直接写样式和布局，无需手写 CSS 或 <Code>style</Code> 对象。可与 antd
          等组件库组合使用。
        </Text>
      </Stack>

      <DemoSection title="安装">
        <Stack gap={8}>
          <CodeBlock language="bash">{INSTALL_EXAMPLE}</CodeBlock>
        </Stack>
      </DemoSection>

      <DemoSection title="快速开始" description="基础布局与排版组件">
        <Stack gap={16}>
          <CodeBlock language="tsx">{INTRO_EXAMPLE}</CodeBlock>
          <CodeBlock language="tsx">{QUICK_START_EXAMPLE}</CodeBlock>
        </Stack>
      </DemoSection>

      <DemoSection title="与 antd 配合" description="通过 className 注入 Box 样式">
        <Stack gap={8}>
          <Text color="#666" fontSize={14}>
            使用 <Code>boxClass</Code> 或 <Code>useBoxClass</Code> 生成 emotion
            className，传给 antd 组件的 className。详见
            <Link to="/antd"> antd 集成</Link> 示例。
          </Text>
          <CodeBlock language="tsx">{ANTD_EXAMPLE}</CodeBlock>
        </Stack>
      </DemoSection>

      <DemoSection title="示例导航" description="左侧菜单进入各专题">
        <Stack gap={8}>
          <Text>
            <Link to="/layout">布局</Link> — Center、Stack、HStack、VStack 等常见布局与排版
          </Text>
          <Text>
            <Link to="/interaction">交互状态</Link> — <Code>_hover</Code> 等伪类 props
          </Text>
          <Text>
            <Link to="/antd">antd 集成</Link> — <Code>boxClass</Code> /{' '}
            <Code>useBoxClass</Code>
          </Text>
        </Stack>
      </DemoSection>
    </Stack>
  )
}
