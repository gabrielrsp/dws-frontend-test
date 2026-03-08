import { useNavigate } from 'react-router-dom'
import {
  CardContainer,
  ImageContainer,
  Content,
  MetaData,
  Title,
  Excerpt,
  TagContainer,
  Tag,
} from './styles'
import type { Post } from '../../types/Posts'

interface PostCardProps {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/details/${post.id}`, {
      state: { post },
    })
  }

  return (
    <CardContainer onClick={handleClick} style={{ cursor: 'pointer' }}>
      <ImageContainer>
        <img src={post.thumbnail_url} alt={post.title} />
      </ImageContainer>

      <Content>
        <MetaData>
          <span>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })}
          </span>

          <span className="separator">•</span>

          <span>{post.author.name}</span>
        </MetaData>

        <Title>{post.title}</Title>

        <Excerpt>{post.content.slice(0, 120)}...</Excerpt>

        <TagContainer>
          {post.categories.map((category) => (
            <Tag key={category.id}>{category.name}</Tag>
          ))}
        </TagContainer>
      </Content>
    </CardContainer>
  )
}
