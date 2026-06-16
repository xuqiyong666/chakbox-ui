import type { CSSObject } from '@emotion/serialize'

import { EmptyObject, PSEUDO_STYLE_MAP } from './constants'
import {
  isCssPropertyKey,
  isPseudoStylePropKey,
  isStylePropKey,
  resolveStylePropToCssKeys,
} from './cssProperties'
import type { PartitionKeysResult, PrimitiveStyleValue, SplitStylePropsResult, StyleProps } from './types'

export function partitionKeys(restKeys: readonly string[]): PartitionKeysResult {
  const stylePropKeys: string[] = []
  const pseudoStylePropKeys: string[] = []
  const domPropKeys: string[] = []

  for (const key of restKeys) {
    if (isPseudoStylePropKey(key)) {
      pseudoStylePropKeys.push(key)
      continue
    }

    if (isStylePropKey(key)) {
      stylePropKeys.push(key)
      continue
    }

    domPropKeys.push(key)
  }

  return { stylePropKeys, pseudoStylePropKeys, domPropKeys }
}

export function assembleStyleProps(
  props: Record<string, unknown>,
  stylePropKeys: string[],
): Partial<StyleProps> {
  if (!stylePropKeys?.length) {
    return EmptyObject
  }

  const styleProps: Partial<StyleProps> = {}

  for (const key of stylePropKeys) {
    styleProps[key] = props[key]
  }

  return styleProps
}

export function assemblePseudoStyleProps(
  props: Record<string, unknown>,
  pseudoStylePropKeys: string[],
): Record<string, unknown> {
  if (!pseudoStylePropKeys?.length) {
    return EmptyObject
  }

  const pseudoStyleProps: Record<string, unknown> = {}

  for (const key of pseudoStylePropKeys) {
    pseudoStyleProps[key] = props[key]
  }

  return pseudoStyleProps
}

export function assembleDomProps(
  props: Record<string, unknown>,
  domPropKeys: string[],
): Record<string, unknown> {

  if (!domPropKeys?.length) {
    return EmptyObject
  }

  const domProps: Record<string, unknown> = {}

  for (const key of domPropKeys) {
    domProps[key] = props[key]
  }

  return domProps
}

export function toStyleObject(rawStyleProps: Record<string, unknown> = {}): CSSObject {
  const styleObject: Record<string, unknown> = {}

  Object.entries(rawStyleProps).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return
    }

    if (isPseudoStylePropKey(key)) {
      styleObject[PSEUDO_STYLE_MAP[key]] = toStyleObject(value as Record<string, unknown>)
      return
    }

    const cssKeys = resolveStylePropToCssKeys(key)
    if (cssKeys) {
      cssKeys.forEach((singleKey) => {
        styleObject[singleKey] = value as PrimitiveStyleValue
      })
      return
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      styleObject[key] = toStyleObject(value as Record<string, unknown>)
      return
    }

    if (typeof value === 'string' || typeof value === 'number') {
      if (isCssPropertyKey(key)) {
        styleObject[key] = value
      }
    }
  })

  return styleObject as CSSObject
}

export function splitStyleProps(props: Record<string, unknown>): SplitStylePropsResult {
  const restKeys = Object.keys(props)
  const { stylePropKeys, pseudoStylePropKeys, domPropKeys } = partitionKeys(restKeys)

  return {
    styleProps: {
      ...assembleStyleProps(props, stylePropKeys),
      ...assemblePseudoStyleProps(props, pseudoStylePropKeys),
    },
    domProps: assembleDomProps(props, domPropKeys),
  }
}
