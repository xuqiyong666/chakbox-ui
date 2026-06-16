import { PSEUDO_STYLE_MAP, type PseudoStylePropKey } from '../constants'

import { BACKGROUND_ALIASES, BACKGROUND_CSS_KEYS } from './background'
import { BORDER_ALIASES, BORDER_CSS_KEYS } from './border'
import { COLOR_ALIASES, COLOR_CSS_KEYS } from './color'
import { EFFECT_ALIASES, EFFECT_CSS_KEYS } from './effect'
import { FILTER_ALIASES, FILTER_CSS_KEYS } from './filter'
import { FLEXBOX_ALIASES, FLEXBOX_CSS_KEYS } from './flexbox'
import { GRID_ALIASES, GRID_CSS_KEYS } from './grid'
import { INTERACTIVITY_ALIASES, INTERACTIVITY_CSS_KEYS } from './interactivity'
import { LAYOUT_ALIASES, LAYOUT_CSS_KEYS } from './layout'
import { LIST_ALIASES, LIST_CSS_KEYS } from './list'
import { POSITION_ALIASES, POSITION_CSS_KEYS } from './position'
import { SCROLL_ALIASES, SCROLL_CSS_KEYS } from './scroll'
import { SPACE_ALIASES, SPACE_CSS_KEYS } from './space'
import { TEXT_DECORATION_ALIASES, TEXT_DECORATION_CSS_KEYS } from './textDecoration'
import { TRANSFORM_ALIASES, TRANSFORM_CSS_KEYS } from './transform'
import { TRANSITION_ALIASES, TRANSITION_CSS_KEYS } from './transition'
import { FONT_TEXT_ALIASES, FONT_TEXT_CSS_KEYS } from './typography'

export const CSS_PROPERTY_KEYS = [
  ...SPACE_CSS_KEYS,
  ...LAYOUT_CSS_KEYS,
  ...BACKGROUND_CSS_KEYS,
  ...COLOR_CSS_KEYS,
  ...BORDER_CSS_KEYS,
  ...EFFECT_CSS_KEYS,
  ...FLEXBOX_CSS_KEYS,
  ...GRID_CSS_KEYS,
  ...POSITION_CSS_KEYS,
  ...INTERACTIVITY_CSS_KEYS,
  ...LIST_CSS_KEYS,
  ...SCROLL_CSS_KEYS,
  ...TEXT_DECORATION_CSS_KEYS,
  ...TRANSITION_CSS_KEYS,
  ...FONT_TEXT_CSS_KEYS,
  ...TRANSFORM_CSS_KEYS,
  ...FILTER_CSS_KEYS,
] as const

/** 所有标准 CSS 样式属性名（用于 O(1) 判断） */
export const CSS_PROPERTY_KEY_SET = new Set<string>(CSS_PROPERTY_KEYS)

export const STYLE_ALIAS_MAP = {
  ...SPACE_ALIASES,
  ...LAYOUT_ALIASES,
  ...BACKGROUND_ALIASES,
  ...COLOR_ALIASES,
  ...BORDER_ALIASES,
  ...EFFECT_ALIASES,
  ...FLEXBOX_ALIASES,
  ...GRID_ALIASES,
  ...POSITION_ALIASES,
  ...INTERACTIVITY_ALIASES,
  ...LIST_ALIASES,
  ...SCROLL_ALIASES,
  ...TEXT_DECORATION_ALIASES,
  ...TRANSITION_ALIASES,
  ...FONT_TEXT_ALIASES,
  ...TRANSFORM_ALIASES,
  ...FILTER_ALIASES,
} as const

export type CssPropertyKey = (typeof CSS_PROPERTY_KEYS)[number]
export type StyleAliasKey = keyof typeof STYLE_ALIAS_MAP
export type StylePropKey = CssPropertyKey | StyleAliasKey

export function isCssPropertyKey(key: string): key is CssPropertyKey {
  return CSS_PROPERTY_KEY_SET.has(key)
}

export function isStyleAliasKey(key: string): key is StyleAliasKey {
  return Object.prototype.hasOwnProperty.call(STYLE_ALIAS_MAP, key)
}

export function isPseudoStylePropKey(key: string): key is PseudoStylePropKey {
  return Object.prototype.hasOwnProperty.call(PSEUDO_STYLE_MAP, key)
}

/** 可作为 Box 样式 prop 的 key（标准名、别名或伪类根 key） */
export function isStylePropKey(key: string): boolean {
  return (
    isCssPropertyKey(key) ||
    isStyleAliasKey(key) ||
    isPseudoStylePropKey(key)
  )
}

/**
 * 将 prop key 解析为最终写入 style 对象的 CSS 属性名列表。
 * 未知 key 返回 null。
 */
export function resolveStylePropToCssKeys(key: string): readonly string[] | null {
  if (isStyleAliasKey(key)) {
    const target = STYLE_ALIAS_MAP[key]
    if (typeof target === 'string') {
      return [target]
    }
    return target as readonly string[]
  }
  if (isCssPropertyKey(key)) {
    return [key]
  }
  return null
}

export {
  BACKGROUND_ALIASES,
  BACKGROUND_CSS_KEYS,
  BORDER_ALIASES,
  BORDER_CSS_KEYS,
  COLOR_ALIASES,
  COLOR_CSS_KEYS,
  EFFECT_ALIASES,
  EFFECT_CSS_KEYS,
  FILTER_ALIASES,
  FILTER_CSS_KEYS,
  FLEXBOX_ALIASES,
  FLEXBOX_CSS_KEYS,
  GRID_ALIASES,
  GRID_CSS_KEYS,
  INTERACTIVITY_ALIASES,
  INTERACTIVITY_CSS_KEYS,
  LAYOUT_ALIASES,
  LAYOUT_CSS_KEYS,
  LIST_ALIASES,
  LIST_CSS_KEYS,
  POSITION_ALIASES,
  POSITION_CSS_KEYS,
  SCROLL_ALIASES,
  SCROLL_CSS_KEYS,
  SPACE_ALIASES,
  SPACE_CSS_KEYS,
  TEXT_DECORATION_ALIASES,
  TEXT_DECORATION_CSS_KEYS,
  TRANSFORM_ALIASES,
  TRANSFORM_CSS_KEYS,
  TRANSITION_ALIASES,
  TRANSITION_CSS_KEYS,
  FONT_TEXT_ALIASES,
  FONT_TEXT_CSS_KEYS,
}
