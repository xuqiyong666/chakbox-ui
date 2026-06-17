import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import { Box, type BoxProps } from 'chakbox-ui';
import { type ScrollableBoxProps } from './types';
import './ScrollableBox.css';

export interface ScrollableBoxSimpleBarRef {
  getScrollElement: () => HTMLElement | null;
}

const defaultSimpleBarProps = {
  autoHide: true,
  scrollbarMinSize: 20,
  forceVisible: false,
} as const;

const defaultSimpleBarStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
};

const defaultBoxProps: Partial<BoxProps> = {
  overflow: 'hidden',
  position: 'relative',
};

export const ScrollableBoxSimpleBar = forwardRef<ScrollableBoxSimpleBarRef, ScrollableBoxProps>(({
  children,
  simpleBarProps,
  ...boxProps
}, ref) => {
  const simpleBarRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getScrollElement: () => {
      if (!simpleBarRef.current) {
        console.warn('ScrollableBox: SimpleBar not initialized yet');
        return null;
      }
      return simpleBarRef.current.getScrollElement();
    }
  }), []);

  const mergedBoxProps = useMemo(
    () => ({
      ...defaultBoxProps,
      ...boxProps,
    }),
    [boxProps]
  );

  const mergedSimpleBarProps = useMemo(
    () => ({
      ...defaultSimpleBarProps,
      ...simpleBarProps,
    }),
    [simpleBarProps]
  );

  const mergedSimpleBarStyle = useMemo<React.CSSProperties>(
    () => ({
      ...defaultSimpleBarStyle,
      ...simpleBarProps?.style,
    }),
    [simpleBarProps?.style]
  );

  return (
    <Box className="scrollable-box" {...mergedBoxProps}>
      <SimpleBar ref={simpleBarRef} style={mergedSimpleBarStyle} {...mergedSimpleBarProps}>
        {children}
      </SimpleBar>
    </Box>
  );
});

ScrollableBoxSimpleBar.displayName = 'ScrollableBoxSimpleBar';

