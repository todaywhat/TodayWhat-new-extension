import { Meta, StoryObj } from '@storybook/react'
import TimeButton from './'

const config: Meta<typeof TimeButton> = {
  title: 'TimeButton',
  component: TimeButton,

  args: {},
}

export default config

type Story = StoryObj<typeof TimeButton>

export const Primary: Story = { args: { text: '어제' } }
