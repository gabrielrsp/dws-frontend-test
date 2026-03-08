import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { Post } from '../../types/Posts'
import { PostCard } from '../../components/PostCard'
import { MOCK_POSTS } from '../../mocks/MockPosts'

import {
  PageWrapper,
  ArticleHeader,
  MainTitle,
  AuthorInfo,
  MainImage,
  Content,
  LatestArticlesSection,
  Grid,
} from './style'

import { Button } from '../Button'

export const PostDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { post } = location.state as { post: Post }

  const posts = MOCK_POSTS

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [post.id])

  const handleBack = () => {
    navigate('/')
  }

  return (
    <PageWrapper>
      <Button variant="secondary" onClick={handleBack}>
        Back
      </Button>

      <ArticleHeader>
        <MainTitle>{post.title}</MainTitle>

        <AuthorInfo>
          <img src={post.author.profilePicture} alt={post.author.name} />

          <div>
            <strong>Written by: {post.author.name}</strong>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </AuthorInfo>
      </ArticleHeader>

      <MainImage src={post.thumbnail_url} />

      <Content>
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Content>

      <LatestArticlesSection>
        <h3>Latest articles</h3>

        <Grid>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      </LatestArticlesSection>
    </PageWrapper>
  )
}
