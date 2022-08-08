import styled from 'styled-components';

export const FeedbackButtonList = styled.ul`
  list-style: none;

  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[0]};

  display: flex;
  justify-content: center;
`;
