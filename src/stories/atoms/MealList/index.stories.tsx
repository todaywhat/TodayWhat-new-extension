import { Meta, StoryObj } from '@storybook/react'
import Allergies from '../../icons/Allergies'
import MealList from './'

const config: Meta<typeof MealList> = {
  title: 'MealList',
  component: MealList,

  args: {},
}

export default config

type Story = StoryObj<typeof MealList>

export const Primary: Story = {
  args: { icons: <Allergies />, text: '저녁 후 내일 급식 표시' },
}
