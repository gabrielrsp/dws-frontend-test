import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { describe, it, expect } from 'vitest'
import { Header } from '.'
import { defaultTheme } from '../../styles/default'

const renderComponent = () =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>,
  )

describe('Header', () => {
  it('should render the dentsu logo', () => {
    renderComponent()

    const logo = screen.getByAltText(/dentsu/i)

    expect(logo).toBeInTheDocument()
  })

  it('should render the external link', () => {
    renderComponent()

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', 'https://www.dentsu.com/?global=true')
  })

  it('should render the search input', () => {
    renderComponent()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
