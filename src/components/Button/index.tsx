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
      {children}
    </ButtonContainer>
  )
}
