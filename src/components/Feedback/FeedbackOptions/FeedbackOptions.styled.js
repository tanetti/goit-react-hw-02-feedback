import styled from 'styled-components';
import { FaRegSmileBeam, FaRegMeh, FaRegSadCry } from 'react-icons/fa';

export const FeedbackListItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[5]};

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.midMin}) {
      margin-right: ${({ theme }) => theme.space[6]};
    }
  }
`;

export const FeedbackButton = styled.button`
  width: ${({ theme }) => theme.sizes.feedbackButtonMobile};
  height: ${({ theme }) => theme.sizes.feedbackButtonMobile};

  padding: ${({ theme }) => theme.space[0]};

  color: ${({ name }) => {
    if (name === 'good') return ({ theme }) => theme.colors.goodNorm;
    if (name === 'neutral') return ({ theme }) => theme.colors.neutralNorm;
    if (name === 'bad') return ({ theme }) => theme.colors.badNorm;
  }};

  background-color: ${({ name }) => {
    if (name === 'good') return ({ theme }) => theme.colors.goodBG;
    if (name === 'neutral') return ({ theme }) => theme.colors.neutralBG;
    if (name === 'bad') return ({ theme }) => theme.colors.badBG;
  }};

  border-width: ${({ theme }) => theme.space[0]};
  border-radius: ${({ theme }) => theme.radii.round};

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ name }) => {
      if (name === 'good') return ({ theme }) => theme.colors.goodHover;
      if (name === 'neutral') return ({ theme }) => theme.colors.neutralHover;
      if (name === 'bad') return ({ theme }) => theme.colors.badHover;
    }};

    transform: scale(1.1);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.midMin}) {
    width: ${({ theme }) => theme.sizes.feedbackButton};
    height: ${({ theme }) => theme.sizes.feedbackButton};
  }
`;

export const ButtonGoodIcon = styled(FaRegSmileBeam)`
  fill: currentColor;
`;

export const ButtonNormalIcon = styled(FaRegMeh)`
  fill: currentColor;
`;

export const ButtonBadIcon = styled(FaRegSadCry)`
  fill: currentColor;
`;

export const FeedbackValueLabel = styled.span`
  position: absolute;
  bottom: ${({ theme }) => theme.sizes.valueLabelOfset};
  right: ${({ theme }) => theme.sizes.valueLabelOfset};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.valueLabelMobile};
  height: ${({ theme }) => theme.sizes.valueLabelMobile};

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.darkText};
  background-color: ${({ theme }) => theme.colors.valueLabelBG};

  border-radius: ${({ theme }) => theme.radii.round};
  backdrop-filter: blur(4px);

  pointer-events: none;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.midMin}) {
    width: ${({ theme }) => theme.sizes.valueLabel};
    height: ${({ theme }) => theme.sizes.valueLabel};

    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
