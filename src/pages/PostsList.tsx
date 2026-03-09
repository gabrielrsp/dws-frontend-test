import { PageHeader } from '../components/PageHeader'
import { BlogPage } from '../components/BlogPage'
import { PostsListContainer } from './styles'

export function PostsList() {
  return (
    <PostsListContainer>
      <PageHeader />
      <BlogPage />
    </PostsListContainer>
  )
}
