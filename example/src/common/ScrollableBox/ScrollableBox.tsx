/**
 * ScrollableBox 组件
 * disabled = true 时退化为普通 Box；
 * disabled = false 时使用独立的 SimpleBar 实现。
 */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Box } from 'chakbox-ui';
import { type ScrollableBoxProps } from './types';
import { ScrollableBoxSimpleBar, type ScrollableBoxSimpleBarRef } from './ScrollableBoxSimpleBar';

// ScrollableBox ref 接口定义
export interface ScrollableBoxRef {
  getScrollElement: () => HTMLElement | null;
}

export const ScrollableBox = forwardRef<ScrollableBoxRef, ScrollableBoxProps>(({
  children,
  disabled = false,
  simpleBarProps,
  ...boxProps
}, ref) => {
  const simpleBarRef = useRef<ScrollableBoxSimpleBarRef>(null);

  useImperativeHandle(ref, () => ({
    getScrollElement: () => {
      if (disabled) {
        return null;
      }
      return simpleBarRef.current?.getScrollElement() ?? null;
    }
  }), [disabled]);

  if (disabled) {
    return <Box {...boxProps}>{children}</Box>;
  }

  return (
    <ScrollableBoxSimpleBar
      ref={simpleBarRef}
      simpleBarProps={simpleBarProps}
      {...boxProps}
    >
      {children}
    </ScrollableBoxSimpleBar>
  );
});

ScrollableBox.displayName = 'ScrollableBox';

