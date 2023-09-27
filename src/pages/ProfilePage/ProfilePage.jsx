import { Container, Title, UserContainer } from './ProfilePage.styled';
import UserForm from '../../components/Profile/UserForm';
import UserCard from '../../components/Profile/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateUserProfile } from '../../redux/Profile/operations';

const ProfilePage = () => {
  const userData = useSelector(store => store.auth.bodyData);
  const [selectedAvatar, setSelectedAvatar] = useState(userData.avatarUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedAvatar(userData.avatarUrl);
  }, [userData.avatarUrl, dispatch]);

  const formatingBirthday = birthday =>
    `${birthday.getFullYear()}-${String(birthday.getMonth() + 1).padStart(
      2,
      '0',
    )}-${String(birthday.getDate()).padStart(2, '0')}`;

  // запит на відправку форми
  const handleSubmit = data => {
    const formData = new FormData();

    if (selectedAvatar !== null && typeof selectedAvatar !== 'string') {
      formData.append('avatar', selectedAvatar, selectedAvatar.name);
    }

    for (const key in data) {
      if (key === 'birthday') {
        formData.append(key, formatingBirthday(new Date(data[key])));
        continue;
      }
      if (key === 'avatarUrl') {
        continue;
      }
      formData.append(key, data[key]);
    }

    formData.birthday = formatingBirthday(new Date(data.birthday));

    data.avatarUrl = null;

    dispatch(updateUserProfile(formData));
  };

  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserContainer>
        <UserCard
          dataUser={userData}
          selectedAvatar={selectedAvatar}
          changeAvatar={setSelectedAvatar}
        />
        <UserForm
          dataUser={userData}
          handleSubmit={handleSubmit}
          selectedAvatar={selectedAvatar}
        />
      </UserContainer>
    </Container>
  );
};

export default ProfilePage;
