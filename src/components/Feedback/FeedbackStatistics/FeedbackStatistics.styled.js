import styled from 'styled-components';
import { Chart } from 'react-google-charts';

export const StyledChart = styled(Chart)`
  position: absolute;
  left: 50%;

  transform: translateX(-50%);
`;

export const FeedbackStatisticsBox = styled.div`
  position: relative;

  opacity: ${({ shouldShown }) => (shouldShown ? 1 : 0)};
  visibility: ${({ shouldShown }) => (shouldShown ? 'none' : 'initial')};

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.visibility};
`;

export const StatisticsTitle = styled.p`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[0]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: center;
`;

export const StatisticsTotalHead = styled.p`
  position: absolute;
  top: 43%;
  left: 50%;

  margin: ${({ theme }) => theme.space[0]};

  font-size: ${({ theme }) => theme.fontSizes.xxl};

  transform: translateX(-50%);
`;

export const StatisticsTotalValue = styled.span`
  display: block;

  margin-top: ${({ theme }) => theme.space[3]};

  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;

  color: ${({ topFeedbackType, theme }) => {
    if (topFeedbackType === 'good') return theme.colors.goodNorm;
    if (topFeedbackType === 'neutral') return theme.colors.neutralNorm;
    if (topFeedbackType === 'bad') return theme.colors.badNorm;
  }};
`;
