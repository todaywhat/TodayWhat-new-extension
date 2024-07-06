import { Meta, StoryObj } from '@storybook/react'
import Return from './index'

const config: Meta<typeof Return> = {
  title: 'Return',
  component: Return,

  args: {},
}

export default config

type Story = StoryObj<typeof Return>

export const Primary: Story = { args: {} }
