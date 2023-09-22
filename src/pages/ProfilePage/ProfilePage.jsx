import { Container, Title, UserContainer } from './ProfilePage.styled';
import UserForm from '../../components/UserForm';
import UserCard from '../../components/UserCard/UserCard';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserContainer>
        <UserCard userAvatar={undefined} />
        <UserForm />
      </UserContainer>
    </Container>
  );
};

export default ProfilePage;
