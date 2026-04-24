export const expirationCookie = (): Date => {
  const now: Date = new Date()
  let expirationDate: Date

  if (now.getMonth() < 2 || (now.getMonth() === 2 && now.getDate() === 1)) {
    expirationDate = new Date(now.getFullYear(), 2, 1)
  } else {
    expirationDate = new Date(now.getFullYear() + 1, 2, 1)
  }

  return expirationDate
}
