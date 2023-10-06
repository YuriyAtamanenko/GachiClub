import PropTypes from 'prop-types';
import {
  CheckMark,
  CurrentUser,
  CurrentUserName,
  UserPlate,
  Plate,
  DailyText,
  WarningContainer,
  WarningText,
  UserAvatar,
  NoSelectUserPhoto,
  ImgUser,
  PlateSvg,
} from './UserCard.styled';
import exclamationMark from '../../../assets/profile_img/tabler_exclamation-mark.svg';
import { Plates } from './UserCard.styled';
import LogOutBtn from '../../Header/LogOutBtn/LogOutBtn';
import SvgSprite from '../../../images/sprite.svg';
import { customButtonStyle } from './customLogoutStyle';

const UserCard = ({ dataUser, changeAvatar, selectedAvatar }) => {
  const { name, dailyRateCalories, dailySportMin } = dataUser;

  const handleAvatarChange = e => {
    const avatarFile = e.target.files[0];
    changeAvatar(avatarFile);
  };

  return (
    <div>
      <UserAvatar>
        <CurrentUser>
          {selectedAvatar === null ? (
            <NoSelectUserPhoto>
              <use xlinkHref={`${SvgSprite}#icon-user`} />
            </NoSelectUserPhoto>
          ) : (
            <ImgUser
              src={
                typeof selectedAvatar !== 'object'
                  ? selectedAvatar
                  : URL.createObjectURL(selectedAvatar)
              }
              alt="scelet user"
            />
          )}
        </CurrentUser>

        <CheckMark>
          <input
            type="file"
            id="sendAvatar"
            accept="image/*"
            onChange={handleAvatarChange}
          />

          <svg viewBox="0 0 32 32">
            <use xlinkHref={`${SvgSprite}#icon-addPhoto`} />
          </svg>
        </CheckMark>
      </UserAvatar>

      <CurrentUserName>{name}</CurrentUserName>
      <UserPlate>User</UserPlate>

      <Plates>
        <Plate>
          <div style={{ display: 'flex' }}>
            <PlateSvg>
              <use xlinkHref={`${SvgSprite}#icon-fork`} />
            </PlateSvg>
            <DailyText>Daily calorie intake</DailyText>
          </div>
          <p>{dailyRateCalories || 2200}</p>
        </Plate>

        <Plate>
          <div style={{ display: 'flex' }}>
            <PlateSvg>
              <use xlinkHref={`${SvgSprite}#icon-dumbbell `} />
            </PlateSvg>
            <DailyText>Daily norm of sports</DailyText>
          </div>
          <p>{dailySportMin || 110} min</p>
        </Plate>
      </Plates>
      <WarningContainer>
        <PlateSvg>
          <use xlinkHref={`${SvgSprite}#icon-mark`} />
        </PlateSvg>
        <img src={exclamationMark} alt={'exclamation mark'}></img>
        <WarningText>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </WarningText>
      </WarningContainer>
      <LogOutBtn customStyles={customButtonStyle}></LogOutBtn>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  dataUser: PropTypes.object.isRequired,
  changeAvatar: PropTypes.func,
  selectedAvatar: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
