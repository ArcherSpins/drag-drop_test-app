import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const MyButton = styled(Button)`
  border-color: ${({ color }) => color} !important;
  color: ${({ color }) => color} !important;
  width: 180px;
`;
