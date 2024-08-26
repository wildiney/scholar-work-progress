import { render, screen } from '@testing-library/react'
import Titles from "../../components/Titles";

test('Should render the title', () => {
  render(<Titles title='Testing' />)
  const text = screen.getByText(/Testing/i)
  expect(text).toBeInTheDocument()
})