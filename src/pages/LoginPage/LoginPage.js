import LoginForm from 'components/LoginForm';
import Section from 'components/Section';
import Container from 'components/Container';
import {
   selectIsRefreshing,
   selectUserIsLoading,
} from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Wrapper, Title } from './LoginPage.styled';
import Loader from 'components/Loader';


const LoginPage = () => {
   const isRefreshing = useSelector(selectIsRefreshing);
   const isLoading = useSelector(selectUserIsLoading);


   return (
      !isRefreshing && (
         <>
            <Section>
               <Container>
                  <Wrapper>
                     <Title>Login</Title>
                     <LoginForm />
                  </Wrapper>
               </Container>
            </Section>
            {isLoading  && <Loader />}
         </>
      )
   );
};
export default LoginPage;
