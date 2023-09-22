import { Container, Title, UserContainer } from './ProfilePage.styled';
import UserForm from '../../components/Profile/UserForm';
import UserCard from '../../components/Profile/UserCard';

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
