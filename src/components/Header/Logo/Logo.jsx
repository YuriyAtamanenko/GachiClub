import { useAuth } from '../../../hooks/useAuth';
import sprite from '../../../images/sprite.svg';
import { LogoIcon, Svg } from './Logo.styled';

const Logo = () => {
  const { isLoggedIn, isBodyData } = useAuth();
  return (
    <LogoIcon to={isLoggedIn && isBodyData ? '/diary' : '/'}>
      <Svg>
        <use href={sprite + `#full-logo-color`}></use>
      </Svg>
    </LogoIcon>
  );
};

export default Logo;
