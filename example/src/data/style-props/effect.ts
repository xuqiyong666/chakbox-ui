import type { StylePropSection } from './types'

export const effectSection: StylePropSection = {
  "id": "effect",
  "title": "Effect",
  "rows": [
    {
      "key": "shadow",
      "props": "shadow, boxShadow",
      "cssProperty": "box-shadow"
    },
    {
      "key": "blendMode",
      "props": "blendMode, mixBlendMode",
      "cssProperty": "mix-blend-mode"
    },
    {
      "key": "bgBlendMode",
      "props": "bgBlendMode, backgroundBlendMode",
      "cssProperty": "background-blend-mode"
    },
    {
      "key": "opacity",
      "props": "opacity",
      "cssProperty": "opacity"
    }
  ]
}
