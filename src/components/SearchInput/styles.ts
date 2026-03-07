import styled from 'styled-components'
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  border: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  border-radius: 20px;

  padding: 4px 4px 4px 0;
  background: ${({ theme }) => theme.colors.neutrals.lightest};

  transition: border 0.2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
  }

  @media (max-width: 768px) {
    border: none;
    padding: 0;
  }
`

export const StyledSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  margin-left: 16px;

  background: ${({ theme }) => theme.colors.neutrals.lightest};
  color: ${({ theme }) => theme.colors.neutrals.extraDark};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutrals.medium};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const SearchButton = styled.button`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.neutrals.extraLight};

  cursor: pointer;
`

export const SearchIcon = styled.svg`
  width: 16px;
  height: 16px;
`
