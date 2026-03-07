import { SortContainer, SortButton } from './styles'
import { SortIcon } from '../../assets/SortIcon'

export function SortBy () {
  return (
    <SortContainer>
      <span>Sort by:</span>
      <SortButton>
        Newest first
        <SortIcon />
      </SortButton>
    </SortContainer>
  )
}
