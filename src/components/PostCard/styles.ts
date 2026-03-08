import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${({ theme }) =>
    theme.colors.neutrals.lightest}; // Fundo quase branco
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};

  &:hover {
    transform: translateY(-4px);
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const MetaData = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};

  .separator {
    color: ${({ theme }) => theme.colors.secondary.medium};
    font-weight: bold;
  }
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  /* Limita a 2 linhas como no print */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Excerpt = styled.p`
  color: ${({ theme }) => theme.colors.neutrals.extraDark};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  line-height: ${({ theme }) => theme.typography.small.lineHeight};
  margin: 0;
  /* Limita a 3 linhas */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.neutrals.extraLight};
  color: ${({ theme }) => theme.colors.neutrals.darkest};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`
