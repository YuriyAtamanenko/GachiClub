import { useAuth } from '../../../hooks/useAuth';
import sprite from '../../../images/sprite.svg';
import { LogoIcon, Svg } from './Logo.styled';

const Logo = () => {
  const { isLoggedIn } = useAuth();
  return (
    <LogoIcon to={isLoggedIn ? '/diary' : '/'}>
      <Svg>
        <use href={sprite + `#full-logo-color`}></use>
      </Svg>
    </LogoIcon>
  );
};

export default Logo;
