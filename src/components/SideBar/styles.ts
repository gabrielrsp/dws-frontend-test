import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  display: none;
  flex-direction: column;
  padding: 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.neutrals.lightest};
  border: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  width: 280px;
  gap: 32px;

  @media (min-width: 1024px) {
    display: flex;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.primary.light};

  h2 {
    /* Especificação de Título H3/H2 do guia [cite: 73, 74] */
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary.dark};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const FilterItem = styled.button<{ active?: boolean }>`
  padding: 12px 4px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  cursor: pointer;

  color: ${({ theme, active }) =>
    active ? theme.colors.secondary.medium : theme.colors.primary.light};
  font-weight: ${({ active }) => (active ? '600' : '400')};

  transition: all 0.2s ease;

  &:hover {
    padding-left: 8px;
    background-color: ${({ theme }) => theme.colors.neutrals.lightest};
    color: ${({ theme }) => theme.colors.secondary.medium};
  }

  &:last-child {
    border-bottom: none;
  }
`

export const ApplyButton = styled.button`
  margin-top: 8px;
  padding: 14px;
  border-radius: 25px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  color: white;

  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
