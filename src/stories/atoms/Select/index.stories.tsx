import { Meta, StoryObj } from '@storybook/react'
import Select from './index'

const config: Meta<typeof Select> = {
  title: 'Select',
  component: Select,

  args: {
    category: '학교이름',
    data: ['옵션1', '옵션2', '옵션3'],
    value: '옵션1',
    setValue: () => {},
    cookie: () => {},
  },
}

export default config

type Story = StoryObj<typeof Select>

export const Primary: Story = { args: { category: '학교이름' } }
