import {
  Background,
  ErrorContainer,
  Title,
  Text,
  StyledLink,
  ButtonLink,
  Logo,
  ContentBox,
} from './ErrorPage.styled';
import Icons from './../../images/sprite.svg';

const ErrorPage = () => {
  return (
    <Background>
      <ErrorContainer>
        <StyledLink to="/">
          <Logo>
            <use href={Icons + '#full-logo'}></use>
          </Logo>
        </StyledLink>
        <ContentBox>
          <Title>404</Title>
          <Text>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text>
          <ButtonLink to="/">Go Home</ButtonLink>
        </ContentBox>
      </ErrorContainer>
    </Background>
  );
};

export default ErrorPage;
