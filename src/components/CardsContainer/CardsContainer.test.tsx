import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { PostProvider } from '../../contexts/PostContext'
import { CardsContainer } from '.'
import { postService } from '../../services/postService'
import { defaultTheme } from '../../styles/default'
import type { ReactNode } from 'react'
import { MOCK_POSTS } from '../../mocks/MockPosts'

vi.mock('../../services/postService', () => ({
  postService: {
    getAll: vi.fn(),
  },
}))

vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
  },
}))

const renderWithProviders = (ui: ReactNode) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        <PostProvider>{ui}</PostProvider>
      </ThemeProvider>
    </MemoryRouter>,
  )
}

describe('CardsContainer', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should show loading spinner initially and then the posts', async () => {
    vi.mocked(postService.getAll).mockResolvedValue(MOCK_POSTS)

    renderWithProviders(<CardsContainer />)

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

    expect(
      await screen.findByText('Tech Innovations in Healthcare'),
    ).toBeInTheDocument()
  })

  it('should show empty state message when no posts are returned', async () => {
    vi.mocked(postService.getAll).mockResolvedValue([])

    renderWithProviders(<CardsContainer />)

    expect(await screen.findByText(/no articles found/i)).toBeInTheDocument()
  })
})
