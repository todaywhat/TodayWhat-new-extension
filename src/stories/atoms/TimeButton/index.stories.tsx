import { Meta, StoryObj } from '@storybook/react'
import TimeButton from '.'

const config: Meta<typeof TimeButton> = {
  title: 'TimeButton',
  component: TimeButton,

  args: {
    text: '어제',
    onClick: () => {},
    selected: false,
  },
}

export default config

type Story = StoryObj<typeof TimeButton>

export const Primary: Story = {}
