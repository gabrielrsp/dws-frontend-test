import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/default'

const renderWithTheme = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>)
}

describe('Button Component', () => {
  it('should render the button with correct text', () => {
    renderWithTheme(<Button>Click me</Button>)

    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })

  it('should call onClick function when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    renderWithTheme(<Button onClick={handleClick}>Action</Button>)

    const button = screen.getByRole('button', { name: /action/i })
    await user.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when the disabled prop is passed', () => {
    renderWithTheme(<Button disabled>Disabled</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})
