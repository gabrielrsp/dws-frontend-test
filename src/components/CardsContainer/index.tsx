import { useEffect, useState } from 'react'
import { CardsWrapper, Grid } from './styles'
import { PostCard } from '../PostCard'
import { postService } from '../../services/postService' // Importando o serviço
import type { Post } from '../../types/Posts'

export function CardsContainer () {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts () {
      try {
        setLoading(true)
        const data = await postService.getAll()
        setPosts(data)
      } catch (error) {
        console.error('Erro ao buscar posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <CardsWrapper>
        <p>Loading articles...</p>
      </CardsWrapper>
    )
  }

  return (
    <CardsWrapper>
      <Grid>
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </CardsWrapper>
  )
}
