import { PageHeaderContainer, Title } from './styles'
import { SortBy } from '../SortBy'

export function PageHeader() {
  return (
    <PageHeaderContainer>
      <Title>DWS blog</Title>

      <SortBy />
    </PageHeaderContainer>
  )
}
