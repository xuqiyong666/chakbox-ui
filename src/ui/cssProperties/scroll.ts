export const SCROLL_CSS_KEYS = [
  'scrollBehavior',
  'scrollSnapAlign',
  'scrollSnapStop',
  'scrollSnapType',
  'scrollMargin',
  'scrollMarginTop',
  'scrollMarginBottom',
  'scrollMarginLeft',
  'scrollMarginRight',
  'scrollPadding',
  'scrollPaddingTop',
  'scrollPaddingBottom',
  'scrollPaddingLeft',
  'scrollPaddingRight',
] as const

export const SCROLL_ALIASES = {
  scrollMarginX: ['scrollMarginLeft', 'scrollMarginRight'],
  scrollMarginY: ['scrollMarginTop', 'scrollMarginBottom'],
  scrollPaddingX: ['scrollPaddingLeft', 'scrollPaddingRight'],
  scrollPaddingY: ['scrollPaddingTop', 'scrollPaddingBottom'],
} as const
