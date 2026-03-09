import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 12px 24px;
  border-radius: 42px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;

  font-size: ${(props) => props.theme.typography.large.fontSize};
  font-weight: 600;
  line-height: ${(props) => props.theme.typography.large.lineHeight};

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.theme.colors.secondary.medium};
      color: ${props.theme.colors.neutrals.lightest};

      &:hover {
        background-color: ${props.theme.colors.secondary.dark};
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: transparent;
      border: 1px solid ${props.theme.colors.secondary.medium};
      color: ${props.theme.colors.secondary.medium};
      padding: 12px 16px;

      &:hover {
        border-color: ${props.theme.colors.secondary.dark};
        color: ${props.theme.colors.secondary.dark};
      }

      svg {
        width: 16px;
        height: 16px;
      }
    `}
`
