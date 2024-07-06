import { Meta, StoryObj } from '@storybook/react'
import CheckButton from './'

const config: Meta<typeof CheckButton> = {
  title: 'CheckButton',
  component: CheckButton,

  args: {},
}

export default config

type Story = StoryObj<typeof CheckButton>

export const Primary: Story = { args: { text: '확인' } }
