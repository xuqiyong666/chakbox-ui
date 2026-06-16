export const PSEUDO_STYLE_MAP = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _before: '&::before',
  _after: '&::after',
  _last: '&:last-child',
} as const

export type PseudoStylePropKey = keyof typeof PSEUDO_STYLE_MAP


export const EmptyObject: Readonly<Record<string, never>> = Object.freeze({})

export const EmptyArray: readonly never[] = Object.freeze([])

