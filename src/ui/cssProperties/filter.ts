/** 仅标准 filter；不包含 Chakra 的 blur/brightness 等 CSS 变量拼装项 */
export const FILTER_CSS_KEYS = ['filter', 'backdropFilter'] as const

export const FILTER_ALIASES = {} as const
