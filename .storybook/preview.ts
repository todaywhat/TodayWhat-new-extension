import type { Preview } from '@storybook/react'
import '../src/styles/global.css'
import '../src/styles/fonts.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
