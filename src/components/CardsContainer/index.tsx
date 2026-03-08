import { useEffect, useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { CardsWrapper, Grid } from './styles'
import { PostCard } from '../PostCard'
import { postService } from '../../services/postService'
import type { Post } from '../../types/Posts'

export function CardsContainer() {
  const { state, dispatch, filteredPosts } = useContext(PostContext)

  useEffect(() => {
    async function fetchPosts() {
      if (state.allPosts.length > 0) return

      try {
        dispatch({ type: 'SET_LOADING', payload: true })
        const data = await postService.getAll()

        dispatch({ type: 'SET_POSTS', payload: data })
      } catch (error) {
        console.error('Erro ao buscar posts:', error)
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    }

    fetchPosts()
  }, [dispatch, state.allPosts.length])

  if (state.loading) {
    return (
      <CardsWrapper>
        <p>Loading articles...</p>
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
