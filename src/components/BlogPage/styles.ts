import styled from 'styled-components';

export const BlogPageContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  justify-content: space-between;
  padding: 16px 0;

  @media (min-width: 768px) {
    padding: 20px;
    gap: 20px;
  }
`;