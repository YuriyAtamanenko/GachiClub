import Title from './Title/Title';
import { LinkList, SignIn, SignUp, Wrapper, WrapperDesktop } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <>
      <WrapperDesktop></WrapperDesktop>
      <Wrapper>
        <Title />
        <LinkList>
          <li>
            <SignUp to="/signup">Sign Up</SignUp>
          </li>
          <li>
            <SignIn to="/signin">Sign In</SignIn>
          </li>
        </LinkList>
      </Wrapper>
    </>
  );
};

export default WelcomePage;
