import { Text } from './Title.styled';
import sprite from '../../../images/sprite.svg';

export default function Title() {
  return (
    <Text>
      Transforming your <span>body<svg>
          <use href={sprite + `#icon-line`}></use>
        </svg>
      </span> shape with Power Pulse
    </Text>
  );
}
