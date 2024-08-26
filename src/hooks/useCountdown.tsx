import { useEffect, useState } from 'react'

function useCountdown (deliveryDate: Date) {
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    const today = new Date()
    const differenceInMilliseconds = Math.max(0, deliveryDate.getTime() - today.getTime())
    setCountdown(Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24)))

  }, [deliveryDate])

  return countdown
}

export default useCountdown