import { Meta, StoryObj } from '@storybook/react'
import MyProfile from './'

const config: Meta<typeof MyProfile> = {
  title: 'MyProfile',
  component: MyProfile,

  args: {},
}

export default config

type Story = StoryObj<typeof MyProfile>

export const Primary: Story = {
  args: { school: '광주소프트웨어마이스터고등학교', Myclass: '2학년 1반' },
}
