/**
 * ScrollableBox 组件类型定义
 */
import type { BoxProps } from 'chakbox-ui';
import { type ComponentProps } from 'react';
import SimpleBar from 'simplebar-react';

/**
 * SimpleBar 的 props 类型（排除 children，因为我们在内部处理）
 * 保留 style 支持，用户可以通过 simpleBarProps.style 自定义样式
 */
type SimpleBarProps = Omit<ComponentProps<typeof SimpleBar>, 'children'>;

/**
 * ScrollableBox 组件 Props
 * 
 * 设计原则：
 * - 完全使用 Chakra UI 的 BoxProps（隐藏 SimpleBar 的复杂性）
 * - SimpleBar 默认配置为纵向滚动、自动隐藏
 * - 通过 simpleBarProps 支持复杂场景的自定义配置
 */
export interface ScrollableBoxProps extends BoxProps {
  /** 是否禁用 SimpleBar，禁用后退化为普通 Box 容器 */
  disabled?: boolean;
  /** SimpleBar 自定义配置（可选，会与默认配置合并） */
  simpleBarProps?: Partial<SimpleBarProps>;
}

