export type StylePropTableRow = {
  key: string
  props: string
  cssProperty: string
}

export type StylePropSection = {
  id: string
  title: string
  rows: StylePropTableRow[]
}
