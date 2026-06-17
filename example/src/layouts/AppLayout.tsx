import { Menu } from 'antd'
import { Box, Code, Heading, HStack, Text, VStack, version } from 'chakbox-ui'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { demoRoutes } from '../routes'

export function AppLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = demoRoutes.map((route) => ({
    key: route.path,
    label: route.label,
  }))

  return (
    <VStack h="100vh" bg="#f5f5f5">
      <HStack
        h={56}
        px={24}
        align="center"
        justify="space-between"
        bg="#fff"
        borderBottom="1px solid #f0f0f0"
        flexShrink={0}
      >
        <HStack gap={12} align="center">
          <Heading as="h1" fontSize={18}>
            chakbox-ui
          </Heading>
          <Text color="#999" fontSize={14}>
            示例应用
          </Text>
        </HStack>
        <Text color="#666" fontSize={14}>
          <Code>v{version}</Code>
        </Text>
      </HStack>

      <HStack flex={1} align="stretch" overflow="hidden">
        <Box
          w={220}
          flexShrink={0}
          bg="#fff"
          borderRight="1px solid #f0f0f0"
          py={12}
          overflow="auto"
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
            style={{ borderInlineEnd: 'none' }}
          />
        </Box>

        <Box flex={1} overflow="auto" p={24}>
          <Outlet />
        </Box>
      </HStack>
    </VStack>
  )
}
