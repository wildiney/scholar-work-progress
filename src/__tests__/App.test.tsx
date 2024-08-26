import { render, screen } from "@testing-library/react"
import { describe, it, expect } from 'vitest'
import App from "../App"


describe('App Component', () => {
  it("renders Header component with the correct title", () => {
    render(<App />)
    expect(screen.getByText('Progresso do Trabalho Bimestral')).toBeInTheDocument()
  })
})