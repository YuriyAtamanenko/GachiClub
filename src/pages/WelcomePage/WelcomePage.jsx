import {
  Container,
  Title,
  BlackSection,
  ImageSection,
  SignUp,
  SignIn,
  WelcomeBtn,
} from './WelcomePage.styled';
// import sprite from '../../../images/sprite.svg';

const WelcomePage = () => {
  return (
    <Container>
      <BlackSection>
        <Title>
          Transforming your body shape with Power Pulse
        </Title>
        <WelcomeBtn>
          <SignUp to="/signup">Sign Up</SignUp>
          <SignIn to="/signin">Sign In</SignIn>
        </WelcomeBtn>
      </BlackSection>

      <ImageSection />
    </Container>
  );
};

export default WelcomePage;