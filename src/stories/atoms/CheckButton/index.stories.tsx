import { Meta, StoryObj, Decorator } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import CheckButton from './'

const MemoryRouterDecorator: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
)

const config: Meta<typeof CheckButton> = {
  title: 'CheckButton',
  component: CheckButton,
  decorators: [MemoryRouterDecorator],
  args: {},
}

export default config

type Story = StoryObj<typeof CheckButton>

export const Primary: Story = { args: { text: '확인!', isActive: true } }
