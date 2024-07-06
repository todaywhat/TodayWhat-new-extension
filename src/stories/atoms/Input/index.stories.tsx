import { Meta, StoryObj } from '@storybook/react'
import Input from './index'

const config: Meta<typeof Input> = {
  title: 'Input',
  component: Input,

  args: { placeholder: '학교이름을 입력해주세요.' },
}

export default config

type Story = StoryObj<typeof Input>

export const Primary: Story = { args: { category: '학교이름' } }
