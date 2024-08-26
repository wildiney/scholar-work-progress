import { renderHook, act } from '@testing-library/react'
import useCountdown from '../../hooks/useCountdown'

describe("Countdown Hook", () => {
  it("Return the countdown", () => {
    const deliveryDate = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + 10)
    const result = renderHook(() => useCountdown(deliveryDate))
    expect(result.result.current).toBe(10)
  })
})