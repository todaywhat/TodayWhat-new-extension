import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Select from './index'

const SelectStory: React.FC = () => {
  const [value, setValue] = useState('옵션1')
  const [isOpen, setIsOpen] = useState(false)

  const handleSetValue = (newValue: string) => {
    setValue(newValue)
  }

  return (
    <Select
      category='학교이름'
      data={['옵션1', '옵션2', '옵션3']}
      value={value}
      setValue={handleSetValue}
      cookie={() => {}}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  )
}

const config: Meta<typeof SelectStory> = {
  title: 'Select',
  component: SelectStory,
}

export default config

type Story = StoryObj<typeof SelectStory>

export const Primary: Story = {}
