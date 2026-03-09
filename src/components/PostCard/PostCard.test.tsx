import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/default'
import { describe, it, expect, vi } from 'vitest'
import { PostCard } from '.'
import { MOCK_POST_DETAILS } from '../../mocks/MockPostDetails'

const navigateMock = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}))

function renderComponent() {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <PostCard post={MOCK_POST_DETAILS} />
    </ThemeProvider>,
  )
}

describe('PostCard', () => {
  it('should render post data', () => {
    renderComponent()

    expect(
      screen.getByText(/Tech Innovations in Healthcare/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Emily Davis/i)).toBeInTheDocument()
    expect(screen.getByText(/Technology/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit/i,
      ),
    ).toBeInTheDocument()
  })

  it('should navigate to post details when clicked', async () => {
    const user = userEvent.setup()

    renderComponent()

    const title = screen.getByRole('heading')

    await user.click(title)

    expect(navigateMock).toHaveBeenCalledWith(
      '/details/cc8a8c63-2f82-4745-8b6e-28f88ff73fdd',
    )
  })
})
