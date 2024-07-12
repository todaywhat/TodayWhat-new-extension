import { Meta, StoryObj } from '@storybook/react'
import Notification from './index'

const config: Meta<typeof Notification> = {
  title: 'Notification',
  component: Notification,

  args: {},
}

export default config

type Story = StoryObj<typeof Notification>

export const Primary: Story = {
  args: {
    title: '예시 공지 입니다',
    date: '20204.07.05',
    contents:
      '이번 업데이트 내용은 별 건 없고 그냥 웹에서 쓸 수 있게 만들었습니다',
  },
}