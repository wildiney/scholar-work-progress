import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'


test('Should render the title', () => {
  render(<Header title='Testing' />)
  const text = screen.getByText(/Testing/i)
  expect(text).toBeInTheDocument()
})