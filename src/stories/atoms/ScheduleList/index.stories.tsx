import { Meta, StoryObj } from '@storybook/react'
import ScheduleList from './'

const config: Meta<typeof ScheduleList> = {
  title: 'ScheduleList',
  component: ScheduleList,

  args: {},
}

export default config

type Story = StoryObj<typeof ScheduleList>

export const Primary: Story = {
  args: {
    time: '1교시',
    subject: '역사',
  },
}
