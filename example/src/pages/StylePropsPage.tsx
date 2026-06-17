import type { MouseEvent } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Box, Code, Heading, HStack, Stack, Text } from 'chakbox-ui'
import { STYLE_PROP_SECTIONS, type StylePropTableRow } from '../data/style-props'

import { ScrollableBox } from '../common/ScrollableBox'

const columns: ColumnsType<StylePropTableRow> = [
  {
    title: 'Prop',
    dataIndex: 'props',
    render: (value: string) => <Code fontSize={13}>{value}</Code>,
  },
  {
    title: 'CSS Property',
    dataIndex: 'cssProperty',
    render: (value: string) => (
      <Text fontFamily="monospace" fontSize={13}>
        {value}
      </Text>
    ),
  },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${id}`)
}

export function StylePropsPage() {
  return (
    <Box h="calc(100vh - 104px)" minH={0}>
      <HStack h="100%" gap={24} align="stretch">
        <ScrollableBox flex={1} minH={0} h="100%">
          <Stack gap={32} pr={8} pb={24}>
            <Stack gap={8}>
              <Heading as="h2" fontSize={24}>
                样式 Props
              </Heading>
              <Text color="#666">所有组件共享的样式 props 简写与对应 CSS 属性。</Text>
            </Stack>

            {STYLE_PROP_SECTIONS.map((section) => (
              <Stack key={section.id} id={section.id} gap={12} scrollMarginTop={16}>
                <Heading as="h3" fontSize={18}>
                  {section.title}
                </Heading>
                <Table
                  size="small"
                  columns={columns}
                  dataSource={section.rows}
                  rowKey="key"
                  pagination={false}
                  bordered
                />
              </Stack>
            ))}
          </Stack>
        </ScrollableBox>

        <ScrollableBox w={200} flexShrink={0} h="100%" minH={0}>
          <Stack gap={4} py={4} pr={4}>
            <Text fontSize={14} fontWeight={600} mb={4}>
              目录
            </Text>
            {STYLE_PROP_SECTIONS.map((section) => (
              <Box
                key={section.id}
                as="a"
                href={`#${section.id}`}
                fontSize={14}
                color="#1677ff"
                cursor="pointer"
                py={4}
                onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                  event.preventDefault()
                  scrollToSection(section.id)
                }}
              >
                {section.title}
              </Box>
            ))}
          </Stack>
        </ScrollableBox>
      </HStack>
    </Box>
  )
}
