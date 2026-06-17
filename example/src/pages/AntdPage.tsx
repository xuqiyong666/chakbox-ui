import { Button, Input } from 'antd'
import { Heading, HStack, Stack, Text, boxClass, useBoxClass } from 'chakbox-ui'

import { DemoSection } from '../components/DemoSection'

const LIST_ITEMS = [
  { id: '1', label: '用户' },
  { id: '2', label: '订单' },
  { id: '3', label: '商品' },
  { id: '4', label: '仓库' },
  { id: '5', label: '日志' },
]

const BOX_CLASS_CODE = `import { Button, Input } from 'antd'
import { HStack, boxClass } from 'chakbox-ui'

<HStack gap={8} align="center" maxW={480}>
  <Input placeholder="搜索..." className={boxClass({ flex: 1 })} />
  <Button type="primary">查询</Button>
</HStack>`

const USE_BOX_CLASS_CODE = `import { Input } from 'antd'
import { Stack, useBoxClass } from 'chakbox-ui'

const items = [
  { id: '1', label: '用户' },
  { id: '2', label: '订单' },
  { id: '3', label: '商品' },
  { id: '4', label: '仓库' },
  { id: '5', label: '日志' },
]

function SearchList() {
  const inputClass = useBoxClass({ w: '100%', mb: 8 })

  return (
    <Stack gap={0} maxW={480}>
      {items.map((item) => (
        <Input
          key={item.id}
          placeholder={\`搜索\${item.label}...\`}
          className={inputClass}
        />
      ))}
    </Stack>
  )
}`

function SearchBarDemo() {
  return (
    <HStack gap={8} align="center" maxW={480}>
      <Input placeholder="搜索..." className={boxClass({ flex: 1 })} />
      <Button type="primary">查询</Button>
    </HStack>
  )
}

function SearchList() {
  const inputClass = useBoxClass({
    w: '100%',
    mb: 8,
  })

  return (
    <Stack gap={0} maxW={480}>
      {LIST_ITEMS.map((item) => (
        <Input key={item.id} placeholder={`搜索${item.label}...`} className={inputClass} />
      ))}
    </Stack>
  )
}

export function AntdPage() {
  return (
    <Stack gap={24} maxW={960}>
      <Stack gap={8}>
        <Heading as="h2" fontSize={24}>
          antd 集成
        </Heading>
        <Text color="#666">通过 className 注入 Box 样式</Text>
      </Stack>

      <DemoSection title="boxClass" description="纯函数，适合搜索栏等静态场景" code={BOX_CLASS_CODE}>
        <SearchBarDemo />
      </DemoSection>

      <DemoSection
        title="useBoxClass"
        description="hooks memo，在列表中顶层调用一次，多项共用同一 className，避免在 map 内重复调用 boxClass。"
        code={USE_BOX_CLASS_CODE}
      >
        <SearchList />
      </DemoSection>
    </Stack>
  )
}
