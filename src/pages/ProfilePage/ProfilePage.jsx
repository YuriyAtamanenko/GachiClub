import ProfileUserPhoto from '../../components/CurrentUserProfile';
import { Container, Title } from './ProfilePage.styled';
import DailyPlates from '../../components/DailyPlates/DailyPlates';
import ProfileWarning from '../../components/ProfileWarning/ProfileWarning';
import ProfileLogout from '../../components/ProfileLogout/ProfileLogout';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <ProfileUserPhoto />
      <DailyPlates />
      <ProfileWarning />
      <ProfileLogout />
    </Container>
  );
};

export default ProfilePage;
