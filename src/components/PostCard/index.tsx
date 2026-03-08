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

interface PostCardProps {
  post: {
    title: string
    author: string
    excerpt: string
    category: string // ou string[] se tiver várias
    imageUrl?: string
    date?: string
  }
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img
          src={
            post.imageUrl ||
            'https://pt.vecteezy.com/fotos-gratis/background?page=5'
          }
          alt={post.title}
        />
      </ImageContainer>

      <Content>
        <MetaData>
          <span>{post.date || 'Jan 20, 2024'}</span>
          <span className="separator">•</span>
          <span>{post.author}</span>
        </MetaData>

        <Title>{post.title}</Title>

        <Excerpt>{post.excerpt}</Excerpt>

        <TagContainer>
          <Tag>{post.category}</Tag>
          <Tag>{post.category}</Tag>
        </TagContainer>
      </Content>
    </CardContainer>
  )
}
