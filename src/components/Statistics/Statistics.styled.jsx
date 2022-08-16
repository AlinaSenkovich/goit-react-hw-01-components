import styled from 'styled-components';
import { getRandomHexColor } from '../getRandomHexColor';

export const StatItem = styled.li`
  background-color: ${getRandomHexColor};
`;
export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: 16p;
  color: #333333;
  text-align: center;
`;
