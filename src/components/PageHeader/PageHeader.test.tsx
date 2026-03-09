import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/default'
import { PageHeader } from '.'
import { PostContext } from '../../contexts/PostContext'
import { categoryService, authorService } from '../../services/postService'

vi.mock('../../services/postService', () => ({
  categoryService: {
    getAll: vi.fn(),
  },
  authorService: {
    getAll: vi.fn(),
  },
}))

const dispatchMock = vi.fn()

function renderComponent() {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <PostContext.Provider
        value={{
          state: {
            selectedCategories: [],
            selectedAuthors: [],
          },
          dispatch: dispatchMock,
        }}
      >
        <PageHeader />
      </PostContext.Provider>
      ,
    </ThemeProvider>,
  )
}

describe('PageHeader', () => {
  it('should render the title', () => {
    renderComponent()

    expect(screen.getByText(/dws blog/i)).toBeInTheDocument()
  })

  it('should fetch categories and authors on mount', async () => {
    categoryService.getAll.mockResolvedValue([{ id: '1', name: 'Tech' }])

    authorService.getAll.mockResolvedValue([{ id: '1', name: 'John' }])

    renderComponent()

    await waitFor(() => {
      expect(categoryService.getAll).toHaveBeenCalled()
      expect(authorService.getAll).toHaveBeenCalled()
    })
  })
})
