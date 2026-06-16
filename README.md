# chakbox-ui

React 布局基础组件库。通过 props 直接写样式和布局，无需手写 CSS 或 `style` 对象。

```tsx
import { HStack, Stack, Text } from 'chakbox-ui'

<HStack gap={8} align="center">
  <Text>标签</Text>
  <Text color="#999">说明</Text>
</HStack>
```

## 安装

```bash
npm i chakbox-ui
```

需配合 `react`、`react-dom`（>= 16.9.0）使用。

## 快速开始

```tsx
import { Box, Heading, Stack, Text } from 'chakbox-ui'

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
}
```

## 常见布局

### 全屏居中

```tsx
import { Center, Heading, Stack, Text } from 'chakbox-ui'

<Center h="100vh">
  <Stack gap={16} p={24} w={400} bg="#fff" rounded={8} shadow="0 4px 12px rgba(0,0,0,0.1)">
    <Heading as="h2">登录</Heading>
    <Text>请输入账号和密码</Text>
  </Stack>
</Center>
```

### 顶栏 + 内容区

```tsx
import { Box, Heading, HStack, Text, VStack } from 'chakbox-ui'

<VStack h="100vh">
  <HStack h={56} px={16} align="center" justify="space-between" borderBottom="1px solid #f0f0f0">
    <Heading as="h1" fontSize={18}>控制台</Heading>
    <Text>用户名</Text>
  </HStack>
  <Box flex={1} p={24}>主内容</Box>
</VStack>
```

### 左右分栏

```tsx
import { Box, HStack } from 'chakbox-ui'

<HStack gap={16} align="stretch">
  <Box flex={1} p={16} bg="#fafafa" rounded={8}>左侧内容</Box>
  <Box w={280} p={16} bg="#fafafa" rounded={8}>右侧面板</Box>
</HStack>
```

### 表单项纵向排列

```tsx
import { Box, Stack, Text } from 'chakbox-ui'

<Stack gap={16}>
  <Stack gap={8}>
    <Text>用户名</Text>
    <Box h={40} w="100%" bg="#fafafa" rounded={6} border="1px solid #d9d9d9" />
  </Stack>
  <Stack gap={8}>
    <Text>密码</Text>
    <Box h={40} w="100%" bg="#fafafa" rounded={6} border="1px solid #d9d9d9" />
  </Stack>
</Stack>
```

### 图标 + 文字横排

```tsx
import { Box, HStack, Text } from 'chakbox-ui'

<HStack gap={8} align="center">
  <Box w={8} h={8} bg="#1677ff" rounded="50%" />
  <Text>在线</Text>
</HStack>
```

### 卡片列表

```tsx
import { Heading, Stack, Text } from 'chakbox-ui'

<Stack gap={12}>
  {[1, 2, 3].map((item) => (
    <Stack
      key={item}
      gap={8}
      p={16}
      bg="#fff"
      rounded={8}
      border="1px solid #f0f0f0"
      _hover={{ borderColor: '#1677ff' }}
    >
      <Heading as="h3" fontSize={16}>卡片 {item}</Heading>
      <Text color="#666">卡片描述文字</Text>
    </Stack>
  ))}
</Stack>
```

## 组件速查

| 组件 | 用途 | 常用 props |
|------|------|-----------|
| `Box` | 万能容器，承载所有样式 | `p` `px` `py` `m` `w` `h` `bg` `rounded` |
| `Flex` | 弹性布局 | `gap` `align` `justify` `direction` `wrap` |
| `Stack` | 默认纵向排列 | `gap` |
| `HStack` | 横向排列 | `gap` `align` `justify` |
| `VStack` | 纵向排列 | `gap` `align` |
| `Center` | 内容居中 | `w` `h` |
| `Text` | 正文文字 | `color` `fontSize` |
| `Heading` | 标题 | `as="h1"` ~ `h6` `fontSize` `fontWeight` |
| `Code` | 行内代码 | 默认等宽字体与内边距，可直接使用 |

所有组件均支持样式 props，可直接传 `className` 覆盖或补充样式。

## 样式 props 速查

所有组件共享同一套样式 props，支持标准 CSS 属性名和常用别名。

**间距**

| 别名 | 含义 |
|------|------|
| `m` `mt` `mr` `mb` `ml` `mx` `my` | margin |
| `p` `pt` `pr` `pb` `pl` `px` `py` | padding |

**尺寸**

| 别名 | 含义 |
|------|------|
| `w` `h` `minW` `maxW` `minH` `maxH` | width / height |

**颜色与背景**

| 别名 | 含义 |
|------|------|
| `textColor` | 文字颜色 |
| `bg` | background |
| `bgColor` | backgroundColor |

**圆角与边框**

| 别名 | 含义 |
|------|------|
| `rounded` | borderRadius |
| `roundedTop` `roundedBottom` `roundedLeft` `roundedRight` | 各边圆角 |

**Flex**

| 别名 | 含义 |
|------|------|
| `align` | alignItems |
| `justify` | justifyContent |
| `direction` `flexDir` | flexDirection |
| `spacing` | gap |

**交互状态**

通过伪类 props 设置 hover、focus 等状态样式：

```tsx
<Box
  p={12}
  border="1px solid #f0f0f0"
  _hover={{ borderColor: '#1677ff', color: '#1677ff' }}
>
  Hover me
</Box>
```

支持的伪类：`_hover` `_active` `_focus` `_before` `_after` `_last`

## 其他导出

- `chakbox-ui/hooks` — `useStateRef` `useShallowMemo` `useDeepEqualMemo`
- `chakbox-ui/utils` — `patchByPath` `shallowEqual`
