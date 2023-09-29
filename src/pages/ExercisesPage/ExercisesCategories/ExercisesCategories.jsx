// import {
//   Category,
//   CategoryGroup,
//   Container,
//   CategoryItem,
// } from './ExercisesCategories.styled';
import PropTypes from 'prop-types';
import css from './ExerciseCategories.module.css';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../../redux/Exercises/reducer';
import { useState } from 'react';
const pages = [
  { title: 'Body parts', route: 'bodyparts' },
  { title: 'Muscules', route: 'muscules' },
  { title: 'Equipments', route: 'equipments' },
];
const ExercisesCategories = ({ titleName }) => {
  const [idx, setIdx] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <ul className={css.categorygroup}>
        {pages.map(({ title, route }, index) => (
          <li className={css.categoryitem} key={index}>
            <button
              className={`${
                index === idx && titleName === 'Exercises'
                  ? css.activecategory
                  : css.category
              }`}
              onClick={() => {
                dispatch(changeCategory(route));
                setIdx(index);
              }}
              disabled={titleName !== 'Exercises'}
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
ExercisesCategories.propTypes = {
  titleName: PropTypes.string,
};
