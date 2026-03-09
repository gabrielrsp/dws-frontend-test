import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'
import { SortContainer, SortButton, SortText } from './styles'
import { SortIcon } from '../../assets/SortIcon'

export function SortBy() {
  const { state, dispatch } = useContext(PostContext)

  const handleSortToggle = () => {
    dispatch({ type: 'SET_ORDER' })
  }

  return (
    <SortContainer>
      <SortText>Sort by:</SortText>
      <SortButton onClick={handleSortToggle}>
        {state.order === 'newest' ? 'Newest first' : 'Oldest first'}
        <SortIcon />
      </SortButton>
    </SortContainer>
  )
}
