import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import Contact from './'

const config: Meta<typeof Contact> = {
  title: 'Contact',
  component: Contact,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {},
}

export default config

type Story = StoryObj<typeof Contact>

export const Primary: Story = {
  args: {},
}
