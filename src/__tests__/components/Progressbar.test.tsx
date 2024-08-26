import { render, screen } from '@testing-library/react'
import Progressbar from '../../components/Progressbar'

test('Should render the correct width based on value', () => {
  const value = 50
  render(<Progressbar value={value} />)
  const element = screen.getByRole('progressbar')
  expect(element).toHaveStyle(`width: ${value}%`)
  expect(element).toHaveAttribute('aria-valuenow', `${value}`)
})