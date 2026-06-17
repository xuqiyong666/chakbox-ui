import { marginPaddingSection } from './margin-padding'
import { colorBackgroundSection } from './color-background'
import { widthHeightSection } from './width-height'
import { layoutSection } from './layout'
import { flexboxSection } from './flexbox'
import { gridSection } from './grid'
import { borderSection } from './border'
import { positionSection } from './position'
import { typographySection } from './typography'
import { textDecorationSection } from './text-decoration'
import { effectSection } from './effect'
import { transitionSection } from './transition'
import { transformSection } from './transform'
import { filterSection } from './filter'
import { scrollSection } from './scroll'
import { listSection } from './list'
import { interactivitySection } from './interactivity'
import { pseudoSection } from './pseudo'

export const STYLE_PROP_SECTIONS = [
  marginPaddingSection,
  colorBackgroundSection,
  widthHeightSection,
  layoutSection,
  flexboxSection,
  gridSection,
  borderSection,
  positionSection,
  typographySection,
  textDecorationSection,
  effectSection,
  transitionSection,
  transformSection,
  filterSection,
  scrollSection,
  listSection,
  interactivitySection,
  pseudoSection,
]

export type { StylePropSection, StylePropTableRow } from './types'
