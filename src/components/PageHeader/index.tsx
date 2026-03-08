import {
  PageHeaderContainer,
  Title,
  HeaderActions,
  FilterGroup,
} from './styles'
import { SortBy } from '../SortBy'
import Dropdown from '../Dropdown'

export function PageHeader () {
  const categoryOptions = ['Category 1', 'Category 2', 'Category 3']
  const authorOptions = ['Author 1', 'Author 2', 'Author 3']

  return (
    <PageHeaderContainer>
      <Title>DWS blog</Title>

      <HeaderActions>
        <FilterGroup>
          <Dropdown label="Category" options={categoryOptions} />
          <Dropdown label="Author" options={authorOptions} />
        </FilterGroup>

        <SortBy />
      </HeaderActions>
    </PageHeaderContainer>
  )
}
