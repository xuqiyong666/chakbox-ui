export const POSITION_CSS_KEYS = [
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'inset',
  'insetBlockStart',
  'insetBlockEnd',
  'insetInlineStart',
  'insetInlineEnd',
  'insetInline',
  'insetBlock',
] as const

export const POSITION_ALIASES = {
  pos: 'position',
  insetX: ['left', 'right'],
  insetY: ['top', 'bottom'],
  insetStart: 'insetInlineStart',
  insetEnd: 'insetInlineEnd',
} as const
