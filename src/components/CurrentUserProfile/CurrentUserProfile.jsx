import {
  CheckMark,
  CurrentUser,
  SceletUser,
  CurrentUserName,
  UserPlate,
} from './CurrentUserProfile.styled';
import sceletUser from '../../assets/profile_img/no_photo_user.svg';
import checkMark from '../../assets/profile_img/check_mark.svg';

const CurrentUserProfile = () => {
  return (
    <>
      <CurrentUser>
        <SceletUser src={sceletUser} alt="scelet user" />
        <CheckMark>
          <img src={checkMark} alt="check mark" />
        </CheckMark>
      </CurrentUser>
      <CurrentUserName>FirstName SecondName</CurrentUserName>
      <UserPlate>User</UserPlate>
    </>
  );
};

export default CurrentUserProfile;
