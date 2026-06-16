export const EFFECT_CSS_KEYS = [
  'boxShadow',
  'mixBlendMode',
  'backgroundBlendMode',
  'opacity',
] as const

export const EFFECT_ALIASES = {
  shadow: 'boxShadow',
  blendMode: 'mixBlendMode',
  bgBlendMode: 'backgroundBlendMode',
} as const
