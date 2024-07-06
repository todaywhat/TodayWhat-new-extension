import { Meta, StoryObj } from '@storybook/react'
import Logo from './index'

const config: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,

  args: {},
}

export default config

type Story = StoryObj<typeof Logo>

export const Primary: Story = {
  args: {},
}
