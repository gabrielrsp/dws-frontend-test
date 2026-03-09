import styled from 'styled-components'

export const PageWrapper = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

export const ArticleHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`

export const BackButton = styled.button`
  width: fit-content;
  padding: 4px 12px;
  border: 1px solid ${(props) => props.theme.colors.secondary.medium};
  border-radius: 42px;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary.medium};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 4px;

  &:before {
    content: '←';
  }
`

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ccc;
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.neutrals.dark};
    }
  }
`

export const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 21 / 9;
  object-fit: cover;
  border-radius: 16px;
`

export const Content = styled.article`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.neutrals.extraDark};
  column-count: 1;

  @media (min-width: 1024px) {
    column-count: 1;
    max-width: 900px;
  }
`

export const LatestArticlesSection = styled.section`
  border-top: 1px solid ${(props) => props.theme.colors.neutrals.light};
  padding-top: 40px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }


  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  .card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const Tag = styled.span`
  background: ${(props) => props.theme.colors.neutrals.extraLight};
  padding: 4px 12px;
  border-radius: 42px;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.neutrals.dark};
`
