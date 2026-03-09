import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/default'
import { describe, it, expect, vi } from 'vitest'
import { Sidebar } from '.'
import { PostContext } from '../../contexts/PostContext'
import { categoryService, authorService } from '../../services/postService'

vi.mock('../../services/postService')

const dispatchMock = vi.fn()

function renderComponent () {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <PostContext.Provider value={{ dispatch: dispatchMock }}>
        <Sidebar />
      </PostContext.Provider>
    </ThemeProvider>,
  )
}

describe('Sidebar', () => {
  it('should show loading state', () => {
    renderComponent()

    expect(screen.getByText(/loading filters/i)).toBeInTheDocument()
  })

  it('should render filters after fetch', async () => {
    vi.mocked(categoryService.getAllCategories).mockResolvedValue([
      { id: '1', name: 'Tech' },
    ])

    vi.mocked(authorService.getAllAuthors).mockResolvedValue([
      { id: '1', name: 'John' },
    ])

    renderComponent()

    await waitFor(() => {
      expect(screen.getByText('Tech')).toBeInTheDocument()
      expect(screen.getByText('John')).toBeInTheDocument()
    })
  })
})
