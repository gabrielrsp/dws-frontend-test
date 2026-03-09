import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { LoadingSpinner } from '.'
import { defaultTheme } from '../../styles/default'

const renderComponent = () =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <LoadingSpinner />
    </ThemeProvider>,
  )

describe('LoadingSpinner', () => {
  it('should render loading spinner with accessibility attributes', () => {
    renderComponent()

    const spinner = screen.getByRole('status', { name: /loading/i })

    expect(spinner).toBeInTheDocument()
  })
})
