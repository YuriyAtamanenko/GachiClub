import logout from '../../assets/profile_img/logOut.svg';
import { BtnLogOut } from './ProfileLogout.style';

const ProfileLogout = () => {
  return (
    <>
      <BtnLogOut>
        <span>Logout</span>
        <img src={logout} alt={'logout'}></img>
      </BtnLogOut>
    </>
  );
};

export default ProfileLogout;
