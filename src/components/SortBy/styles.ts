import styled from 'styled-components'

export const SortContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.neutrals.extraDark};
    font-weight: 700;
  }

  margin-left: auto;
`

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 999px;

  color: ${({ theme }) => theme.colors.neutrals.extraDark};

  span {
    color: ${({ theme }) => theme.colors.accent1.medium};
  }

  svg {
    color: ${({ theme }) => theme.colors.accent1.medium}; // default
    transition: color 0.2s ease;
  }

  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent1.medium};
    color: ${({ theme }) => theme.colors.neutrals.extraLight};

    span {
      color: ${({ theme }) => theme.colors.neutrals.extraLight};
    }

    svg {
      color: ${({ theme }) => theme.colors.neutrals.extraLight}; // hover
    }
  }
`
