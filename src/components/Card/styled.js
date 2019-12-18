import styled from 'styled-components';
import { primary, white } from '../../variables';


export const Header = styled.header`
  background: ${({ bgColor }) => bgColor || primary};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 117px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  border-radius: 5px;
  background-color: ${white};
  color: ${primary};
  transition: 0.3s;

  p {
    text-align: center;
    padding: 15px;
    margin: 0;
  }

  &:hover {
    box-shadow: 0px 1px 10px rgba(1, 1, 1, 0.1);
    cursor: pointer;

    header {
        box-shadow: 0px 1px 10px rgba(1, 1, 1, 0.1);
    }
  }
`;
