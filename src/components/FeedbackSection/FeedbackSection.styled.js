import styled from 'styled-components';

export const Title = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[6]};

  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  text-transform: uppercase;
`;
