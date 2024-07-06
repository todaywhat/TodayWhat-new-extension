import { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '../../icons'
import NavigateButton from './index'

const config: Meta<typeof NavigateButton> = {
  title: 'NavigateButton',
  component: NavigateButton,

  args: {},
}

export default config

type Story = StoryObj<typeof NavigateButton>

export const Primary: Story = { args: { icons: <Calendar />, text: '시간표' } }
