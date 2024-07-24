import { Meta, StoryObj } from '@storybook/react'
import MealListSkeleton from './MealListSkeleton'

const config: Meta<typeof MealListSkeleton> = {
  title: 'MealListSkeleton',
  component: MealListSkeleton,
}

export default config

type Story = StoryObj<typeof MealListSkeleton>

export const Primary: Story = {}
