import { Sidebar } from '../SideBar'
import { CardsContainer } from '../CardsContainer'
import { BlogPageContainer } from './styles'

export const BlogPage = () => {
  return (
    <BlogPageContainer>
      <Sidebar />
      <CardsContainer />
    </BlogPageContainer>
  )
}
