import { createStitches } from 'stitches-native'
import { colors } from './colors'
import { fontFamily } from './fontFamily'
import { fontSize } from './fontSize'

const { styled, useTheme, theme } = createStitches({
  theme: {
    colors,
    fonts: fontFamily,
    fontSizes: fontSize,
    space: {
      none: 0,
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
    },
  },
})

export { styled, useTheme, theme }
