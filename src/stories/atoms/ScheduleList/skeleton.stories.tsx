import { Meta, StoryObj } from '@storybook/react'
import ScheduleListSkeleton from './ScheduleListSkeleton'

const config: Meta<typeof ScheduleListSkeleton> = {
  title: 'ScheduleListSkeleton',
  component: ScheduleListSkeleton,
}

export default config

type Story = StoryObj<typeof ScheduleListSkeleton>

export const Primary: Story = {}
