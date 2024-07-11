import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Input from './index'

interface InputStoryProps {
  category: string
  placeholder: string
}

const InputStory: React.FC<InputStoryProps> = ({ category, placeholder }) => {
  const [value, setValue] = useState('')

  return (
    <Input
      category={category}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
    />
  )
}

const config: Meta<InputStoryProps> = {
  title: 'Input',
  component: InputStory,
  argTypes: {
    category: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export default config

type Story = StoryObj<InputStoryProps>

export const Primary: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    category: '학교이름',
    placeholder: '학교이름을 입력해주세요.',
  },
}
