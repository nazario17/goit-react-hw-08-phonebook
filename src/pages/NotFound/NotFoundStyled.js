import styled from 'styled-components';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Arrow = styled(BsArrowLeftSquare)`
  margin-right: 10px;
`;

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  width: 100px;
  border: 1px solid tomato;
  border-radius: 5px;
  color: tomato;
`;
