import styled from 'styled-components'

export const PageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`

export const Title = styled.h2`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    padding: 20px 40px;
  }
`
