import { Meta, StoryObj } from '@storybook/react'
import List from './index'

const config: Meta<typeof List> = {
  title: 'List',
  component: List,

  args: {},
}

export default config

type Story = StoryObj<typeof List>

export const Primary: Story = {
  args: { school: '광주경신여자고등학교', location: '광주광역시 북구' },
}
