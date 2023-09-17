import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

import { UserMenuWrapper, StyledButton } from './UserMenuStyled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.selectUserName);
  return (
    <UserMenuWrapper>
      <p>Hello, {name}</p>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
