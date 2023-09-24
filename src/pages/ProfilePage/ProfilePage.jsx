import { Container, Title, UserContainer } from './ProfilePage.styled';
import UserForm from '../../components/Profile/UserForm';
import UserCard from '../../components/Profile/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectToken } from '../../redux/Profile/selectors';
import { useEffect } from 'react';
import { currenntUserProfile } from '../../redux/Profile/operations';

const ProfilePage = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(currenntUserProfile(token));
  }, [dispatch, token]);

  if (isLoading) {
    return <h1>Loading Profile</h1>;
  }
  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserContainer>
        <UserCard userData={data} />
        <UserForm userParams={data} />
      </UserContainer>
    </Container>
  );
};

export default ProfilePage;
