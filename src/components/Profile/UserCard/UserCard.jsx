import PropTypes from 'prop-types';
import {
  CheckMark,
  CurrentUser,
  CurrentUserName,
  UserPlate,
  Plate,
  Ico,
  DailyText,
  WarningContainer,
  WarningText,
  UserAvatar,
  NoSelectUserPhoto,
  ImgUser,
} from './UserCard.styled';
import exclamationMark from '../../../assets/profile_img/tabler_exclamation-mark.svg';
import spoonFork from '../../../assets/profile_img/spoon_fork.svg';
import dumbbell from '../../../assets/profile_img/dumbbell.svg';
import { Plates } from './UserCard.styled';
import LogOutBtn from '../../Header/LogOutBtn/LogOutBtn';
import SvgSprite from '../../../images/sprite.svg';

const UserCard = ({ userData, changeAvatar, selectedAvatar }) => {
  const { name, dailyRateCalories, dailySportMin, avatarUrl } = userData;

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    changeAvatar(file);
  };

  const customButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    padding: '0',
    gap: '8px',
    color: '#efede8',
    backgroundColor: 'transparent',
    border: 'none',
    marginLeft: 'auto !important',
    marginBottom: '36px',
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
                selectedAvatar === avatarUrl || selectedAvatar === null
                  ? avatarUrl
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
            <Ico src={spoonFork} alt={'spoon and fork'} />
            <DailyText>Daily calorie intake</DailyText>
          </div>
          <p>{dailyRateCalories || 2200}</p>
        </Plate>

        <Plate>
          <div style={{ display: 'flex' }}>
            <Ico src={dumbbell} alt={'dumbbell'} />
            <DailyText>Daily norm of sports</DailyText>
          </div>
          <p>{dailySportMin || 110} min</p>
        </Plate>
      </Plates>
      <WarningContainer>
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
  userData: PropTypes.object.isRequired,
  changeAvatar: PropTypes.func,
  selectedAvatar: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
