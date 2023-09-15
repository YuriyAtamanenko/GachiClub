import ProfileUserPhoto from '../../components/CurrentUserProfile';
import { Container, Title } from './ProfilePage.styled';
import DailyPlates from '../../components/DailyPlates/DailyPlates';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <ProfileUserPhoto />
      <DailyPlates></DailyPlates>
    </Container>
  );
};

export default ProfilePage;
