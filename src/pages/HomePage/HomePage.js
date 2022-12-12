import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Wrapper, Title, Text, StyledLink } from './HomePage.styled';
import Container from 'components/Container';

const LoginPage = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   return (
      <>
         <Wrapper>
            <Container>
               <Title>Phonebook manager welcome page{' '}
                  <span role="img" aria-label="Greeting icon">
                     💁‍♀️
                  </span></Title>
               {!isLoggedIn && (
                  <Text>
                     Before you get started, please{' '}
                     <StyledLink to="/register">register</StyledLink> or{' '}
                     <StyledLink to="/login">login</StyledLink>
                  </Text>
               )}
            </Container>
         </Wrapper>
      </>
   );
};
export default LoginPage;
