import { Container, Title, UserContainer } from './ProfilePage.styled';
import UserForm from '../../components/Profile/UserForm';
import UserCard from '../../components/Profile/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectToken } from '../../redux/Profile/selectors';
import { useEffect, useState } from 'react';
import {
  currenntUserProfile,
  updateUserProfile,
} from '../../redux/Profile/operations';

const ProfilePage = () => {
  //отримуємо токен щоб зробити запит та мати данні для userCard та userFotm
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  //витягуємо данні з redux по селектору
  const { isLoading, data } = useSelector(selectCurrentUser);

  //записуємо в стан поточний аватар користувача. він має окремий стан так як відокремлений від головної форми
  const [selectedAvatar, setSelectedAvatar] = useState(data.avatarUrl);

  //робимо запит на сервер та записуємо поточну аватарку
  useEffect(() => {
    dispatch(currenntUserProfile(token));
    setSelectedAvatar(data.avatarUrl);
  }, [data.avatarUrl, dispatch, token]);

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

  if (isLoading) {
    return <h1>Loading Profile</h1>;
  }

  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserContainer>
        <UserCard
          userData={data}
          selectedAvatar={selectedAvatar}
          changeAvatar={setSelectedAvatar}
        />
        <UserForm
          data={data}
          handleSubmit={handleSubmit}
          selectedAvatar={selectedAvatar}
        />
      </UserContainer>
    </Container>
  );
};

export default ProfilePage;
