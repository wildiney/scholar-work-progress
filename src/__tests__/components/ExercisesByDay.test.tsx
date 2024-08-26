import { render, screen } from '@testing-library/react'
import ExercisesByDay from '../../components/ExercisesByDay'

test('Should render the amount', () => {
  render(<ExercisesByDay amount='7' />)
  const amount = screen.getByText(/7/i)
  expect(amount).toBeInTheDocument()
})