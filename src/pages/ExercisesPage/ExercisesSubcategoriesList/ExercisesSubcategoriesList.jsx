import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { getCategories } from '../../../redux/Exercises/operations';
import { List, Container } from './ExercisesSubcategoriesList.styled';
import css from './RadioButtons.module.css';
import { getExercises } from '../../../redux/Exercises/selectors';
function Pagination({ itemsPerPage, category }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439.8 });
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const categories = useSelector(getExercises);
  const currentCategory = categories[category || 'bodyparts'];
  const totalPages = Math.ceil(currentCategory.length / itemsPerPage);
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = currentCategory.slice(startIndex, endIndex);
  useEffect(() => {
    setCurrentPage(1);
    dispatch(getCategories());
  }, [dispatch, category]);
  return (
    <Container>
      <List>
        {displayedData.map(({ filter, name, imgURL, _id }) => {
          return (
            <ExercisesSubcategoriesItem
              key={_id}
              id={_id}
              imgURL={imgURL}
              name={name.charAt(0).toUpperCase() + name.slice(1)}
              filter={filter.charAt(0).toUpperCase() + filter.slice(1)}
            />
          );
        })}
      </List>
      {currentCategory.length > 10 || isTablet ? (
        <div
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            marginRight: 8,
            gap: 8,
          }}
        >
          {Array.from({ length: totalPages }, (_, index) => {
            return (
              <label key={index} className={css.radiobutton}>
                <input
                  type="radio"
                  name="active-page"
                  checked={currentPage === index + 1}
                  onChange={() => handlePageChange(index + 1)}
                />
                <span></span>
              </label>
            );
          })}
        </div>
      ) : null}
    </Container>
  );
}
const ExercisesSubcategoriesList = ({ page }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439.8 });
  return (
    <Container>
      <div>
        <Pagination category={page} itemsPerPage={isTablet ? 9 : 10} />
      </div>
    </Container>
  );
};
export default ExercisesSubcategoriesList;
ExercisesSubcategoriesList.propTypes = {
  page: PropTypes.string,
};
Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  category: PropTypes.string,
};
