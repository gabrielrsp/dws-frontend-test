import { createContext, useReducer, useMemo } from 'react'

import type { ReactNode, Dispatch } from 'react'
import type { Category, Post } from '../types/Posts'

type Actions =
  | { type: 'SET_POSTS'; payload: Post[] }
  | { type: 'SET_ORDER' }
  | {
      type: 'SET_FILTERS'
      payload: { categories: string[]; authors: string[] }
    }
  | { type: 'SET_LOADING'; payload: boolean }

type PostState = {
  allPosts: Post[]
  loading: boolean
  order: 'newest' | 'oldest'
  selectedCategories: string[]
  selectedAuthors: string[]
  search: string
}

interface PostContextData {
  state: PostState
  dispatch: Dispatch<Actions>
  filteredPosts: Post[]
}

export const PostContext = createContext<PostContextData>({} as PostContextData)

const reducer = (state: PostState, action: Actions): PostState => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, allPosts: action.payload, loading: false }
    case 'SET_ORDER':
      return { ...state, order: state.order === 'newest' ? 'oldest' : 'newest' }
    case 'SET_FILTERS':
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
    allPosts: [],
    loading: true,
    order: 'newest',
    selectedCategories: [],
    selectedAuthors: [],
    search: '',
  })

  const filteredPosts = useMemo(() => {
    let result = [...state.allPosts]

    if (state.search) {
      const term = state.search.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term),
      )
    }

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

    return result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return state.order === 'newest' ? dateB - dateA : dateA - dateB
    })
  }, [state])

  return (
    <PostContext.Provider value={{ state, dispatch, filteredPosts }}>
      {children}
    </PostContext.Provider>
  )
}
