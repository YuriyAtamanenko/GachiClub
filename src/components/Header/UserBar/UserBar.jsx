import sprite from '../../../images/sprite.svg';
import { Avatar, Container, Img, Svg } from './UserBar.styled';
import { Link } from 'react-router-dom';

export const UserBar = ({ userAvatar }) => {
  const defaultAvatarSrc =
    'https://i.pinimg.com/564x/72/91/c4/7291c40ad206f03e56fb62cfd8536d84.jpg';
  return (
    <Container>
      <Link to="/profile">
        <Svg>
          <use href={sprite + `#icon-settings`}></use>
        </Svg>
      </Link>
      <Avatar to="/profile">
        <Img src={userAvatar || defaultAvatarSrc} />
      </Avatar>
    </Container>
  );
};
