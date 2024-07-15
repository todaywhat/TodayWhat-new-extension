import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import AllergiesList from './'

const config: Meta<typeof AllergiesList> = {
  title: 'AllergiesList',
  component: AllergiesList,
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

type Story = StoryObj<typeof AllergiesList>

export const Primary: Story = {
  args: {},
}
