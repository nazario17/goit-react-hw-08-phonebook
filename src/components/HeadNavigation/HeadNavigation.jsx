import authSelectors from 'redux/auth/authSelectors';
import { Navigation, Link } from './HeadNavigationStyled';
import { useSelector } from 'react-redux';

const HeadNavigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectLoggedIn);

  return (
    <Navigation>
      <Link to="/">Home</Link>
      {isLoggedIn ? <Link to="/contacts">Contacts</Link> : <div></div>}
    </Navigation>
  );
};

export default HeadNavigation;
