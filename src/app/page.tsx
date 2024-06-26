'use client'

import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <>
      <button onClick={() => router.push('/profile')}>프로필</button>
      <br />
      <button onClick={() => router.push('/meal')}>급식</button>
      <br />
      <button onClick={() => router.push('/schedule')}>시간표</button>
      <br />
    </>
  )
}

export default Home
