import {
  CheckMark,
  CurrentUser,
  SceletUser,
  CurrentUserName,
  UserPlate,
  Plate,
  Ico,
  DailyText,
  BtnLogOut,
  WarningContainer,
  WarningText,
} from './UserCard.styled';
import logout from '../../assets/profile_img/logOut.svg';
import exclamationMark from '../../assets/profile_img/tabler_exclamation-mark.svg';
import sceletUser from '../../assets/profile_img/no_photo_user.svg';
import checkMark from '../../assets/profile_img/check_mark.svg';
import spoonFork from '../../assets/profile_img/spoon_fork.svg';
import dumbbell from '../../assets/profile_img/dumbbell.svg';
import { Plates } from './UserCard.styled';

const callInDay = '2200';
const dailySportTime = '110';

const UserCard = () => {
  return (
    <>
      <CurrentUser>
        <SceletUser src={sceletUser} alt="scelet user" />
        <CheckMark>
          <img src={checkMark} alt="check mark" />
        </CheckMark>
      </CurrentUser>
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
      <BtnLogOut>
        <span>Logout</span>
        <img src={logout} alt={'logout'}></img>
      </BtnLogOut>
    </>
  );
};

export default UserCard;
