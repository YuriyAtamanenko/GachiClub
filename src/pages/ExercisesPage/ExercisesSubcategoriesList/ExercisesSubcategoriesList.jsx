import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { getCategories } from '../../../redux/Exercises/operations';
import { List, Container } from './ExercisesSubcategoriesList.styled';
import { getExercises } from '../../../redux/Exercises/selectors';
function Pagination({ itemsPerPage, category }) {
  const dispatch = useDispatch();
  const categories = useSelector(getExercises);
  const currentCategory = categories[category || 'bodyparts'];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(currentCategory.length / itemsPerPage);
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = currentCategory.slice(startIndex, endIndex);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <Container>
      <List>
        {displayedData.map(({ filter, name, imgURL }, idx) => {
          return (
            <ExercisesSubcategoriesItem
              key={idx}
              imgURL={imgURL}
              name={name.charAt(0).toUpperCase() + name.slice(1)}
              filter={filter}
            />
          );
        })}
      </List>
      {displayedData.length <= 10 || displayedData.length <= 9 ? (
        <div
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            marginRight: 8,
          }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <input
              type="radio"
              name="active-page"
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            />
          ))}
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
