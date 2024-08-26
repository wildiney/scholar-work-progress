import { render, screen } from '@testing-library/react'
import ProgressDetails from '../../components/ProgressDetails'

test('Should render the title', () => {
  render(<ProgressDetails discipline='portuguese' data={{ questions: 8, answereds: 1 }} />)
  const text = screen.getByText(/Português/i)
  expect(text).toBeInTheDocument()

  const questions = screen.getByText(/8/i)
  expect(questions).toBeInTheDocument()
})