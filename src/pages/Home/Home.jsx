import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import { Container } from 'components/SharedLayout/SharedLayoutStyled';
import { Wrapper } from './HomeStyled';

const Home = () => {
  const loggedIn = useSelector(authSelectors.selectLoggedIn);
  return (
    <>
      <Container>
        {loggedIn ? (
          <Wrapper>
            Oops, you already work for the program. There’s nothing interesting
            here anymore
          </Wrapper>
        ) : (
          <Wrapper>
            Hi! Register if it’s your first time here, otherwise you need Log
            In...
          </Wrapper>
        )}
      </Container>
    </>
  );
};

export default Home;
