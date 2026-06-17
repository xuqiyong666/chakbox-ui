import type { BoxClassProps } from '../boxClass'
import { useBoxStyleClassName } from './useBoxStyleClassName'

/**
 * boxClass 的 memo 版本：样式 props 未变时复用 className，避免重复解析与 css 调用。
 */
export function useBoxClass(styleProps: BoxClassProps, className?: string): string {
  return useBoxStyleClassName(styleProps as Record<string, unknown>, className)
}
