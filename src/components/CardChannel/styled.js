import styled from 'styled-components';

export const CardChannel = styled.div`
  cursor: move;
  background: #F6F7FD;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;
  position: relative;

  &:nth-child(n+2) {
    margin-top: 8px;
  }

  .title-channel {
    opacity: 0.67;
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  border: 1px solid #D6D6D6;
  box-sizing: border-box;
  width: 20px
  height: 20px;
  color: #FF574F;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TransparentButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  right: 5px;
  height: 20px;
  top: 50%;
  cursor: pointer;
  width: 14px;
  margin-top: -10px;
`;
