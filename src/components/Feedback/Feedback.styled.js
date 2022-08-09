import styled from 'styled-components';

export const FeedbackButtonList = styled.ul`
  list-style: none;

  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[0]};

  display: flex;
  justify-content: center;
`;
