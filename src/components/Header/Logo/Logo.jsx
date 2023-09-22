// import React from 'react';
import sprite from '../../../images/sprite.svg';
import { LogoIcon, Svg } from './Logo.styled';

const Logo = () => {
  return (
    <LogoIcon to="/">
      <Svg>
        <use href={sprite + `#full-logo-color`}></use>
      </Svg>
    </LogoIcon>
  );
};

export default Logo;
