import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { Post } from '../../types/Posts'
import { PostCard } from '../../components/PostCard'
import { postService } from '../../services/postService' //

import {
  PageWrapper,
  ArticleHeader,
  AuthorInfo,
  MainImage,
  Content,
  LatestArticlesSection,
  Grid,
} from './style'

import { Button } from '../Button'

export const PostDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [post, setPost] = useState<Post | null>(null)
  const [latestPosts, setLatestPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPostData() {
      if (!id) return

      try {
        setLoading(true)
        const [postData, allPosts] = await Promise.all([
          postService.getById(id),
          postService.getAll(),
        ])

        setPost(postData)
        const filteredLatest = allPosts
          .filter((p: Post) => p.id !== id)
          .slice(0, 3)

        setLatestPosts(filteredLatest)
      } catch (error) {
        console.error('Erro ao carregar post:', error)
        navigate('/')
      } finally {
        setLoading(false)
      }
    }

    loadPostData()
    window.scrollTo(0, 0)
  }, [id, navigate])

  if (loading)
    return (
      <PageWrapper>
        <p>Loading...</p>
      </PageWrapper>
    )
  if (!post) return null

  return (
    <PageWrapper>
      <Button variant="secondary" onClick={() => navigate('/')}>
        Back
      </Button>

      <ArticleHeader>
        <h1>{post.title}</h1>

        <AuthorInfo>
          <img src={post.author.profilePicture} alt={post.author.name} />
          <div>
            <strong>Written by: {post.author.name}</strong>
            <span>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
            </span>
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
          {latestPosts.map((latest) => (
            <PostCard key={latest.id} post={latest} />
          ))}
        </Grid>
      </LatestArticlesSection>
    </PageWrapper>
  )
}
