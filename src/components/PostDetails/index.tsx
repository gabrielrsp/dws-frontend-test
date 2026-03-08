import { useParams, useNavigate } from 'react-router-dom'
import { PostCard } from '../../components/PostCard'
import { MOCK_POSTS_DETAILS } from '../../mocks/MockPostDetails'

import {
  PageWrapper,
  BackButton,
  ArticleHeader,
  MainTitle,
  AuthorInfo,
  MainImage,
  Content,
  LatestArticlesSection,
  Grid,
} from './style'

export const PostDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const post = MOCK_POSTS_DETAILS

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <PageWrapper>
      <BackButton onClick={handleBack}>Back</BackButton>

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
          {[post, post, post].map((article, index) => (
            <PostCard key={index} post={article} />
          ))}
        </Grid>
      </LatestArticlesSection>
    </PageWrapper>
  )
}
