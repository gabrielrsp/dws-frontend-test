import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} {...props}>
      {variant === 'secondary' && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      )}
      {children}
    </ButtonContainer>
  )
}
