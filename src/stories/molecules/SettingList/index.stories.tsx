import { Meta, StoryObj } from '@storybook/react'
// import ToggleSwitch from '../../atoms/ToggleSwitch'
import { MemoryRouter } from 'react-router-dom'
import AllergiesList from '../../atoms/AllergiesList'
import Rice from '../../icons/Rice'
import SettingList from './'

const config: Meta<typeof SettingList> = {
  title: 'SettingList',
  component: SettingList,
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

type Story = StoryObj<typeof SettingList>

export const Primary: Story = {
  args: { text: '쌀밥', icons: <Rice />, components: <AllergiesList /> },
}
