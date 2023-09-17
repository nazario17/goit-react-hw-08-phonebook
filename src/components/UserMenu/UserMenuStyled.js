import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;


export const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid blueviolet;
  border-radius: 3px;
  transition: background-color 1s;
  margin-right: 16px;
  :hover,
  :focus {
    background-color: blue;
  }
`;
