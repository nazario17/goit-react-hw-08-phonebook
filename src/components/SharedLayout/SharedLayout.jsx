import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import HeadNavigation from 'components/HeadNavigation/HeadNavigation';
import { Container, Header } from './SharedLayoutStyled';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';

import authSelectors from 'redux/auth/authSelectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.selectLoggedIn);

  return (
    <Container>
      <Header>
        <HeadNavigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
