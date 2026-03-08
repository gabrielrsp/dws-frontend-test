import { CardsWrapper, Grid } from './styles'
import { PostCard } from '../PostCard'
import { MOCK_POSTS } from '../../mocks/MockPosts'
import type { Post } from '../../types/Posts'

export function CardsContainer () {
  return (
    <CardsWrapper>
      <Grid>
        {MOCK_POSTS.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </CardsWrapper>
  )
}
