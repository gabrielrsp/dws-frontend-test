import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { postService } from '../../services/postService'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/default'
import { toast } from 'react-toastify'
import { PostDetails } from '.'
import { MOCK_POSTS } from '../../mocks/MockPosts'
import { MOCK_POST_DETAILS } from '../../mocks/MockPostDetails'

vi.mock('../../services/postService', () => ({
  postService: {
    getAll: vi.fn(),
    getById: vi.fn(),
  },
}))

vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
  },
}))

function renderComponent () {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter
        initialEntries={['/details/cc8a8c63-2f82-4745-8b6e-28f88ff73fdd']}
      >
        <Routes>
          <Route path="/details/:id" element={<PostDetails />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>,
  )
}

describe('PostDetails', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(postService.getPostById).mockResolvedValue(MOCK_POST_DETAILS)
    vi.mocked(postService.getAllPosts).mockResolvedValue(MOCK_POSTS)
  })

  it('should load and render post data correctly', async () => {
    renderComponent()

    const title = await screen.findByText(MOCK_POST_DETAILS.title)
    expect(title).toBeInTheDocument()

    expect(
      screen.getByText(`Written by: ${MOCK_POST_DETAILS.author.name}`),
    ).toBeInTheDocument()
  })

  it('should render post content paragraphs using data-testid', async () => {
    renderComponent()
    const contentContainer = await screen.findByTestId('post-content')

    const paragraphs = contentContainer.querySelectorAll('p')
    expect(paragraphs.length).toBeGreaterThan(0)
  })

  it('should render exactly 3 latest articles (excluding current post)', async () => {
    renderComponent()

    await screen.findByText('Latest articles')

    const cards = screen.getAllByTestId('post-card')
    expect(cards.length).toBe(3)
  })

  it('should show toast error when request fails', async () => {
    vi.mocked(postService.getPostById).mockRejectedValue(new Error('API Error'))

    renderComponent()

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Failed to load post',
        expect.any(Object),
      )
    })
  })
})
