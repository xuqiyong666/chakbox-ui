import type { StylePropSection } from './types'

export const pseudoSection: StylePropSection = {
  "id": "pseudo",
  "title": "伪类",
  "rows": [
    {
      "key": "_hover",
      "props": "_hover",
      "cssProperty": "&:hover"
    },
    {
      "key": "_active",
      "props": "_active",
      "cssProperty": "&:active"
    },
    {
      "key": "_focus",
      "props": "_focus",
      "cssProperty": "&:focus"
    },
    {
      "key": "_before",
      "props": "_before",
      "cssProperty": "&::before"
    },
    {
      "key": "_after",
      "props": "_after",
      "cssProperty": "&::after"
    },
    {
      "key": "_last",
      "props": "_last",
      "cssProperty": "&:last-child"
    }
  ]
}
