import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import NavigationMob from '../NavigationMob/NavigationMob';
import { Active, Container, Menu, MenuBtn, Svg } from './MobileMenu.styled';

const MobileMenu = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
     if (!nav) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = 'auto';
     }
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <Container>
        <Menu nav={nav}>
          <NavigationMob closeNav={closeNav} />
        </Menu>
        <Active nav={nav} />
      </Container>
      <MenuBtn onClick={toggleNav}>
        {nav ? (
          <Svg>
            <use href={sprite + `#icon-close`}></use>
          </Svg>
        ) : (
          <Svg>
            <use href={sprite + `#icon-menu`}></use>
          </Svg>
        )}
      </MenuBtn>
    </>
  );
};

export default MobileMenu;
