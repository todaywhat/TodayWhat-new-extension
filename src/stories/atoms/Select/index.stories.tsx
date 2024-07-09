import { Meta, StoryObj } from '@storybook/react'
import Select from './index'

const config: Meta<typeof Select> = {
  title: 'Select',
  component: Select,

  args: {},
}

export default config

type Story = StoryObj<typeof Select>

export const Primary: Story = { args: { category: '학교이름' } }
