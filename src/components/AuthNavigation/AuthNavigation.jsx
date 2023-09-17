import { AuthNavContainer, Link } from './AuthNavigationStyled';

const AuthNavigation = () => {
  return (
    <AuthNavContainer>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log In</Link>
    </AuthNavContainer>
  );
};

export default AuthNavigation;
