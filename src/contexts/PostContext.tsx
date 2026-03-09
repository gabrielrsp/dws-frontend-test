import { createContext, useReducer, useMemo } from 'react'
import type { ReactNode } from 'react'
import type { Category, Post } from '../types/Posts'

export const PostContext = createContext({} as any)

type Types = 'SET_POSTS' | 'SET_ORDER' | 'SET_FILTERS' | 'SET_LOADING'

export type Actions = {
  type: Types
  payload?: any
}

const reducer = (state: any, action: Actions) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, allPosts: action.payload, loading: false }
    case 'SET_ORDER':
      return { ...state, order: state.order === 'newest' ? 'oldest' : 'newest' }
    case 'SET_FILTERS':
      console.log('payload:', action.payload)
      return {
        ...state,
        selectedCategories: action.payload.categories,
        selectedAuthors: action.payload.authors,
      }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    allPosts: [] as Post[],
    loading: true,
    order: 'newest',
    selectedCategories: [] as string[],
    selectedAuthors: [] as string[],
  })

  const filteredPosts = useMemo(() => {
    let result = [...state.allPosts]

    if (state.selectedCategories.length > 0) {
      result = result.filter((post) =>
        post.categories.some((cat: Category) =>
          state.selectedCategories.includes(cat.id),
        ),
      )
    }

    if (state.selectedAuthors.length > 0) {
      result = result.filter((post) =>
        state.selectedAuthors.includes(post.author.id),
      )
    }

    const sortedResult = [...result].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()

      if (state.order === 'newest') {
        return dateB - dateA
      } else {
        return dateA - dateB
      }
    })
    return sortedResult
  }, [
    state.allPosts,
    state.order,
    state.selectedCategories,
    state.selectedAuthors,
  ])

  return (
    <PostContext.Provider value={{ state, dispatch, filteredPosts }}>
      {children}
    </PostContext.Provider>
  )
}
