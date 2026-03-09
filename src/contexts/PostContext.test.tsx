import { render, screen, act } from '@testing-library/react'
import { useContext } from 'react'
import { describe, it, expect } from 'vitest'
import { PostContext, PostProvider } from './PostContext'
import { MOCK_POSTS } from '../mocks/MockPosts'

const TestComponent = () => {
  const { state, dispatch, filteredPosts } = useContext(PostContext)

  return (
    <div>
      <div data-testid="post-count">{filteredPosts.length}</div>
      <div data-testid="loading">{state.loading.toString()}</div>
      <div data-testid="order">{state.order}</div>

      <div data-testid="first-post">{filteredPosts[0]?.title ?? 'no-post'}</div>

      <button onClick={() => dispatch({ type: 'SET_ORDER' })}>
        Toggle Order
      </button>

      <button
        onClick={() =>
          dispatch({
            type: 'SET_POSTS',
            payload: MOCK_POSTS,
          })
        }
      >
        Load Posts
      </button>
    </div>
  )
}

describe('PostContext', () => {
  it('should initialize with default values', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )

    expect(screen.getByTestId('loading').textContent).toBe('true')
    expect(screen.getByTestId('post-count').textContent).toBe('0')
    expect(screen.getByTestId('order').textContent).toBe('newest')
  })

  it('should update posts and disable loading when SET_POSTS is dispatched', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )

    const loadButton = screen.getByText('Load Posts')
    act(() => {
      loadButton.click()
    })

    expect(screen.getByTestId('post-count').textContent).toBe('26')
    expect(screen.getByTestId('loading').textContent).toBe('false')
  })

  it('should filter posts correctly by order (newest/oldest)', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )
    act(() => {
      screen.getByText('Load Posts').click()
    })

    const toggleButton = screen.getByText('Toggle Order')

    expect(screen.getByTestId('order').textContent).toBe('newest')

    act(() => {
      toggleButton.click()
    })

    expect(screen.getByTestId('order').textContent).toBe('oldest')
  })

  it('should sort posts by oldest when order is toggled', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )
    act(() => {
      screen.getByText('Load Posts').click()
    })

    expect(screen.getByTestId('order').textContent).toBe('newest')

    act(() => {
      screen.getByText('Toggle Order').click()
    })

    expect(screen.getByTestId('order').textContent).toBe('oldest')

    expect(screen.getByTestId('first-post').textContent).toBe(
      'Healthy Eating Habits',
    )
  })

  it('should sort posts by newest by default', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )

    act(() => {
      screen.getByText('Load Posts').click()
    })

    expect(screen.getByTestId('order')).toHaveTextContent('newest')

    expect(screen.getByTestId('first-post')).toHaveTextContent(
      'Fitness Routines for Athletes',
    )
  })

  it('should toggle order back to newest', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )

    act(() => {
      screen.getByText('Load Posts').click()
    })

    const toggle = screen.getByText('Toggle Order')

    act(() => toggle.click())
    expect(screen.getByTestId('order')).toHaveTextContent('oldest')

    act(() => toggle.click())
    expect(screen.getByTestId('order')).toHaveTextContent('newest')
  })

  it('should return no-post when there are no posts', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )

    expect(screen.getByTestId('first-post')).toHaveTextContent('no-post')
  })

  it('should render the first post after loading posts', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )

    act(() => {
      screen.getByText('Load Posts').click()
    })

    expect(screen.getByTestId('first-post').textContent).not.toBe('no-post')
  })

  it('should sort posts by createdAt when order changes', () => {
    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>,
    )

    act(() => {
      screen.getByText('Load Posts').click()
    })

    const firstNewest = screen.getByTestId('first-post').textContent

    act(() => {
      screen.getByText('Toggle Order').click()
    })

    const firstOldest = screen.getByTestId('first-post').textContent

    expect(firstNewest).not.toBe(firstOldest)
  })
})
