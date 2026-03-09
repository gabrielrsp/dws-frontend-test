import { useEffect, useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { CardsWrapper, Grid } from './styles'
import { PostCard } from '../PostCard'
import { postService } from '../../services/postService'
import type { Post } from '../../types/Posts'
import { toast } from 'react-toastify'
import { LoadingSpinner } from '../LoadingSpinner'

export function CardsContainer () {
  const { state, dispatch, filteredPosts } = useContext(PostContext)

  useEffect(() => {
    async function fetchPosts () {
      if (state.allPosts.length > 0) return

      try {
        dispatch({ type: 'SET_LOADING', payload: true })
        const data = await postService.getAllPosts()

        dispatch({ type: 'SET_POSTS', payload: data })
      } catch {
        toast.error('Failed on fetching posts:', {
          position: 'top-right',
          autoClose: 3000,
        })
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    }

    fetchPosts()
  }, [dispatch, state.allPosts.length])

  if (state.loading) {
    return (
      <CardsWrapper>
        <LoadingSpinner />
      </CardsWrapper>
    )
  }

  return (
    <CardsWrapper>
      <Grid>
        {filteredPosts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>

      {filteredPosts.length === 0 && !state.loading && (
        <p>No articles found for the selected filters.</p>
      )}
    </CardsWrapper>
  )
}
