import { WarningContainer, WarningText } from './ProfileWarning.styled';
import exclamationMark from '../../assets/profile_img/tabler_exclamation-mark.svg';

const ProfileWarning = () => {
  return (
    <WarningContainer>
      <img src={exclamationMark} alt={'exclamation mark'}></img>
      <WarningText>
        We understand that each individual is unique, so the entire approach to
        diet is relative and tailored to your unique body and goals.
      </WarningText>
    </WarningContainer>
  );
};

export default ProfileWarning;
