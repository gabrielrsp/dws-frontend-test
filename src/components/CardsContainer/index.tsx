import { CardsWrapper, Grid } from './styles'
import { PostCard } from '../PostCard'

const MOCK_POSTS = [
  {
    id: 1,
    title: 'React Tips',
    author: 'Gabriel',
    category: 'React',
    excerpt: 'Dicas práticas para React...',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBNixWhIqVPLtgwYLBZsV82MpJKyJZ2P1Nw&s',
  },
  {
    id: 2,
    title: 'NodeJS Guide',
    author: 'Alice',
    category: 'NodeJS',
    excerpt: 'Aprenda a criar APIs...',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBNixWhIqVPLtgwYLBZsV82MpJKyJZ2P1Nw&s',
  },
  {
    id: 3,
    title: 'Styled Components',
    author: 'Bob',
    category: 'CSS',
    excerpt: 'Como estilizar componentes...',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBNixWhIqVPLtgwYLBZsV82MpJKyJZ2P1Nw&s',
  },
  {
    id: 4,
    title: 'GraphQL Basics',
    author: 'Gabriel',
    category: 'GraphQL',
    excerpt: 'Introdução ao GraphQL...',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBNixWhIqVPLtgwYLBZsV82MpJKyJZ2P1Nw&s',
  },
  {
    id: 5,
    title: 'Testing React',
    author: 'Alice',
    category: 'Testing',
    excerpt: 'Testando seus componentes...',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBNixWhIqVPLtgwYLBZsV82MpJKyJZ2P1Nw&s',
  },
]

export function CardsContainer() {
  return (
    <CardsWrapper>
      <Grid>
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </CardsWrapper>
  )
}
