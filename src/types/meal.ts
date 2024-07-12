export interface MealInfo {
  DDISH_NM: string
  CAL_INFO: string
}

export type MealResponse = {
  [key: number]: MealInfo
} | null

export type ProcessedMealData = {
  mealData: string[]
  calInfo: string
}
