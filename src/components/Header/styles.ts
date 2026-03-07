import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* mobile */
  padding: 16px;

  /* desktop */
  @media (min-width: 1024px) {
    padding: 20px 40px;
  }
`

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background: ${({ theme }) => theme.colors.neutrals.extraLight};
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: baseline;
  gap: 6px;
`

type TextVariant = 'large' | 'small' | 'caption'

export const Text = styled.span<{ variant?: TextVariant }>`
  ${({ theme, variant = 'large' }) => {
    const t = theme.typography[variant]

    return css`
      font-size: ${t.fontSize};
      line-height: ${t.lineHeight};
      font-weight: ${t.fontWeight};
    `
  }}
`
