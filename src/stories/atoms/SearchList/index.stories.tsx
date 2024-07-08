import { Meta, StoryObj } from '@storybook/react'
import SearchList from './index'

const config: Meta<typeof SearchList> = {
  title: 'SearchList',
  component: SearchList,

  args: {},
}

export default config

type Story = StoryObj<typeof SearchList>

export const Primary: Story = {
  args: { school: '광주경신여자고등학교', location: '광주광역시 북구' },
}
