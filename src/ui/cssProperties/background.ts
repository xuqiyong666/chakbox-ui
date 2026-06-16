export const BACKGROUND_CSS_KEYS = [
  'background',
  'backgroundColor',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundAttachment',
  'backgroundClip',
  'backgroundBlendMode',
] as const

export const BACKGROUND_ALIASES = {
  bg: 'background',
  bgColor: 'backgroundColor',
  bgSize: 'backgroundSize',
  bgPosition: 'backgroundPosition',
  bgPos: 'backgroundPosition',
  bgRepeat: 'backgroundRepeat',
  bgAttachment: 'backgroundAttachment',
  bgGradient: 'backgroundImage',
  bgClip: 'backgroundClip',
  bgImage: 'backgroundImage',
  bgImg: 'backgroundImage',
} as const
