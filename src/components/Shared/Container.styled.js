import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[4]};

  @media screen and (min-width: ${p => p.theme.breakPoints.tabletMin}) {
    width: ${p => p.theme.breakPoints.tabletMin};
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${p => p.theme.breakPoints.desktopMin}) {
    width: ${p => p.theme.breakPoints.desktopMin};
  }

  @media screen and (min-width: ${p => p.theme.breakPoints.bigMin}) {
    width: ${p => p.theme.breakPoints.bigMin};
  }
`;
