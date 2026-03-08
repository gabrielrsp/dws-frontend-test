import { SortContainer, SortButton, SortText } from './styles'
import { SortIcon } from '../../assets/SortIcon'

export function SortBy () {
  return (
    <SortContainer>
      <SortText>Sort by:</SortText>
      <SortButton>
        Newest first
        <SortIcon />
      </SortButton>
    </SortContainer>
  )
}
