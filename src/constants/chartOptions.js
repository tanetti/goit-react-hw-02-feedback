import { theme } from 'constants/theme';

export const chartOptions = Object.freeze({
  pieHole: 0.6,
  is3D: false,
  colors: [
    theme.colors.goodNorm,
    theme.colors.neutralNorm,
    theme.colors.badNorm,
  ],
  width: theme.sizes.statisticsChart,
  height: theme.sizes.statisticsChart,
  chartArea: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20,
    width: '100%',
    height: '100%',
  },
  legend: { position: 'none' },
  pieSliceTextStyle: {
    color: theme.colors.whiteText,
    fontSize: parseInt(theme.fontSizes.xs),
  },
  tooltip: { text: 'percentage' },
});
