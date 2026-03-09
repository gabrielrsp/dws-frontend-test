import { CardsContainer } from '../../components/CardsContainer'
import { Sidebar } from '../../components/Sidebar'
import { BlogPageContainer } from './styles'

export const BlogPage = () => {
  return (
    <BlogPageContainer>
      <Sidebar />
      <CardsContainer />
    </BlogPageContainer>
  )
}
