import dotenv from 'dotenv'
dotenv.config()

const { NEXT_PUBLIC_CLIENT_NEIS_KEY } = process.env

const createRewrite = (source, destination) => ({
  source,
  destination: `https://open.neis.go.kr/hub/${destination}?KEY=${NEXT_PUBLIC_CLIENT_NEIS_KEY}`,
})

const nextConfig = {
  output: 'export',
  async rewrites() {
    return [
      createRewrite('/api/schoolMajorinfo', 'schoolMajorinfo'),
      createRewrite('/api/mealServiceDietInfo', 'mealServiceDietInfo'),
      createRewrite('/api/schoolInfo', 'schoolInfo'),
      createRewrite('/api/hisTimetable', 'hisTimetable'),
      createRewrite('/api/misTimetable', 'misTimetable'),
      createRewrite('/api/elsTimetable', 'elsTimetable'),
    ]
  },
}

export default nextConfig
