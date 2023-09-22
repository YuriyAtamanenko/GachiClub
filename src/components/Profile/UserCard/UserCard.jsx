import PropTypes from 'prop-types';
import {
  CheckMark,
  CurrentUser,
  SceletUser,
  CurrentUserName,
  UserPlate,
  Plate,
  Ico,
  DailyText,
  WarningContainer,
  WarningText,
  UserAvatar,
} from './UserCard.styled';
import exclamationMark from '../../../assets/profile_img/tabler_exclamation-mark.svg';
import checkMark from '../../../assets/profile_img/check_mark.svg';
import spoonFork from '../../../assets/profile_img/spoon_fork.svg';
import dumbbell from '../../../assets/profile_img/dumbbell.svg';
import { Plates } from './UserCard.styled';
import LogOutBtn from '../../Header/LogOutBtn/LogOutBtn';

const callInDay = '2200';
const dailySportTime = '110';

const UserCard = ({ userAvatar }) => {
  const avatar =
    userAvatar ||
    'https://i.pinimg.com/564x/72/91/c4/7291c40ad206f03e56fb62cfd8536d84.jpg';

  return (
    <div>
      <UserAvatar>
        <CurrentUser>
          <SceletUser width="100%" src={avatar} alt="scelet user" />
        </CurrentUser>
        <CheckMark>
          <img src={checkMark} alt="check mark" />
        </CheckMark>
      </UserAvatar>

      <CurrentUserName>FirstName SecondName </CurrentUserName>
      <UserPlate>User</UserPlate>

      <Plates>
        <Plate>
          <div style={{ display: 'flex' }}>
            <Ico src={spoonFork} alt={'spoon and fork'} />
            <DailyText>Daily calorie intake</DailyText>
          </div>
          <p>{callInDay}</p>
        </Plate>

        <Plate>
          <div style={{ display: 'flex' }}>
            <Ico src={dumbbell} alt={'dumbbell'} />
            <DailyText>Daily norm of sports</DailyText>
          </div>
          <p>{dailySportTime}</p>
        </Plate>
      </Plates>
      <WarningContainer>
        <img src={exclamationMark} alt={'exclamation mark'}></img>
        <WarningText>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </WarningText>
      </WarningContainer>
      <LogOutBtn></LogOutBtn>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  userAvatar: PropTypes.string,
};
