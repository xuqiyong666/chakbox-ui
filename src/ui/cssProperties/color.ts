export const COLOR_CSS_KEYS = [
  'color',
  'fill',
  'stroke',
  'accentColor',
  /** SVG / 部分引擎 */
  'textFillColor',
] as const

export const COLOR_ALIASES = {
  textColor: 'color',
} as const
