import { SearchWrapper, StyledSearchInput, SearchButton } from './styles'

import searchIcon from '../../assets/search-icon.svg'

export function SearchInput() {
  return (
    <SearchWrapper>
      <StyledSearchInput placeholder="Search" />

      <SearchButton>
        <img src={searchIcon} alt="search" />
      </SearchButton>
    </SearchWrapper>
  )
}
