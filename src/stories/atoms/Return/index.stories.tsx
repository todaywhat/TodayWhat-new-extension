import { Meta, StoryObj, Decorator } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import Return from './index'

const MemoryRouterDecorator: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
)

const config: Meta<typeof Return> = {
  title: 'Return',
  component: Return,
  decorators: [MemoryRouterDecorator], // Add the decorator here
  args: {},
}

export default config

type Story = StoryObj<typeof Return>

export const Primary: Story = { args: {} }
