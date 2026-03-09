import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
`

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${(props) => props.theme.colors.secondary.medium};
  border-top: 4px solid ${(props) => props.theme.colors.secondary.light};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`
