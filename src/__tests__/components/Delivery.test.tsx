import { render, screen } from '@testing-library/react'
import Delivery from '../../components/Delivery';

test('Should render the date', () => {
  const date = new Date()
  render(<Delivery date={date} countdown={7} />)
  const deliveryDate = screen.getByText(date.toLocaleDateString())
  expect(deliveryDate).toBeInTheDocument()
})

test('Should render the countdown', () => {
  const date = new Date()
  render(<Delivery date={date} countdown={7} />)
  const countdown = screen.getByText(/7/i)
  expect(countdown).toBeInTheDocument()
})