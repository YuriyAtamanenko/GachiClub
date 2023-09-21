
import { Container, Title } from './ProfilePage.styled';
import UserForm from '../../components/UserForm';
import UserCard from '../../components/UserCard/UserCard';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserCard />
      <UserForm />
    </Container>

  );
};



export default ProfilePage;
