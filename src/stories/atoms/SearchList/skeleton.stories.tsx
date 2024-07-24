import { Meta, StoryObj } from '@storybook/react'
import SearchListSkeleton from './SearchListSkeleton'

const config: Meta<typeof SearchListSkeleton> = {
  title: 'SearchListSkeleton',
  component: SearchListSkeleton,
}

export default config

type Story = StoryObj<typeof SearchListSkeleton>

export const Primary: Story = {}
