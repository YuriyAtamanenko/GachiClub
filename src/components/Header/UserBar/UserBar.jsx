import { useSelector } from 'react-redux';

import sprite from '../../../images/sprite.svg';
import { Avatar, Container, Img, Svg } from './UserBar.styled';
import { Link } from 'react-router-dom';
import { selectUser } from '../../../redux/Authorization/selector';
import { selectCurrentUser } from '../../../redux/Profile/selectors';

export const UserBar = () => {
  const user = useSelector(selectUser);
  const { memo } = useSelector(selectCurrentUser);

  const defaultAvatarSrc = memo === null ? user.avatarUrl : memo.avatarUrl;

  return (
    <Container>
      <Link to="/profile">
        <Svg>
          <use href={sprite + `#icon-settings`}></use>
        </Svg>
      </Link>
      <Avatar to="/profile">
        <Img src={defaultAvatarSrc} />
      </Avatar>
    </Container>
  );
};
