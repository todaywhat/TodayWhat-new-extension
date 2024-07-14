import { Meta, StoryObj } from '@storybook/react'
import ToggleSwitch from './'

const config: Meta<typeof ToggleSwitch> = {
  title: 'ToggleSwitch',
  component: ToggleSwitch,

  args: {},
}

export default config

type Story = StoryObj<typeof ToggleSwitch>

export const Primary: Story = {
  args: {},
}
