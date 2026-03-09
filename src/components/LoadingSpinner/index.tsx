import { SpinnerContainer, Spinner } from './styles'

export const LoadingSpinner = () => {
  return (
    <SpinnerContainer role="status" aria-label="Loading">
      <Spinner />
    </SpinnerContainer>
  )
}
