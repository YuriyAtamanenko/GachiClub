import { useState, useEffect } from 'react';
import sprite from '../../../images/sprite.svg';
import NavigationMob from '../NavigationMob/NavigationMob';
import { Active, Container, Menu, MenuBtn, Svg } from './MobileMenu.styled';

const MobileMenu = () => {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden'; // Блокування скролінгу
    } else {
      document.body.style.overflow = 'auto'; // Дозвіл на скролінг
    }
    // Функція очистки, яка відновить стан скролінгу після закриття меню
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]); // Відстежуємо зміни в `nav`

  return (
    <>
      <Container>
        <Menu nav={nav}>
          <NavigationMob closeNav={closeNav} />
        </Menu>
        <Active nav={nav} />
      </Container>
      <MenuBtn onClick={() => setNav(!nav)}>
        {nav ? (
          <Svg>
            <use href={sprite + `#icon-x`}></use>
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