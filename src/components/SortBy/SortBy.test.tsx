import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SortBy } from '.'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/default'
import { PostContext } from '../../contexts/PostContext'

const dispatchMock = vi.fn()

function renderComponent(order: 'newest' | 'oldest' = 'newest') {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <PostContext.Provider
        value={{
          state: {
            allPosts: [],
            loading: false,
            order,
            selectedCategories: [],
            selectedAuthors: [],
            search: '',
          },
          dispatch: dispatchMock,
          filteredPosts: [],
        }}
      >
        <SortBy />
      </PostContext.Provider>
      ,
    </ThemeProvider>,
  )
}

describe('SortBy', () => {
  it('should show newest first when order is newest', () => {
    renderComponent('newest')

    expect(screen.getByText(/newest first/i)).toBeInTheDocument()
  })

  it('should show oldest first when order is oldest', () => {
    renderComponent('oldest')

    expect(screen.getByText(/oldest first/i)).toBeInTheDocument()
  })

  it('should dispatch when clicking sort button', async () => {
    const user = userEvent.setup()

    renderComponent()

    const button = screen.getByRole('button')

    await user.click(button)

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_ORDER',
    })
  })
})
