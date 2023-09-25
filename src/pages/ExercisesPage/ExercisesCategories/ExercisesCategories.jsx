// import {
//   Category,
//   CategoryGroup,
//   Container,
//   CategoryItem,
// } from './ExercisesCategories.styled';
import css from './ExerciseCategories.module.css';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../../redux/Exercises/reducer';
import { useEffect, useState } from 'react';
const pages = [
  { title: 'Body parts', route: 'bodyparts' },
  { title: 'Muscules', route: 'muscules' },
  { title: 'Equipments', route: 'equipments' },
];
const ExercisesCategories = () => {
  const [idx, setIdx] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setIdx(0);
  }, []);
  return (
    <div className={css.container}>
      <ul className={css.categorygroup}>
        {pages.map(({ title, route }, index) => (
          <li className={css.categoryitem} key={index}>
            <button
              className={`${index === idx ? css.activecategory : css.category}`}
              onClick={() => {
                dispatch(changeCategory(route));
                setIdx(index);
              }}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExercisesCategories;
