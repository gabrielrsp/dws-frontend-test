import styled from 'styled-components'

export const PageHeaderContainer = styled.div`
  display: flex;
  padding: 8px 16px;
  background-color: transparent;
`

export const Title = styled.h2`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    margin-bottom: 24px;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 1024px) {
    display: none;
  }
`
