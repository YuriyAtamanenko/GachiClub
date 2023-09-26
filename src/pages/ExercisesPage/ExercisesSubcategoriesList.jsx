import { useState } from 'react';
import ExercisesSubcategoriesItem from './ExercisesSubcategoriesItem';
import imagesArray from './images.json';
import { List } from './styledComponents/ExercisesSubcategoriesList.styled';
function Pagination({ itemsPerPage, page }) {
  const [currentPage, setCurrentPage] = useState(1);
  const filteredImages = imagesArray.filter(({ filter }) => filter === page);
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredImages.slice(startIndex, endIndex);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40 }}>
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
      <div
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          marginRight: 8,
        }}
      >
        {filteredImages.length <= 10
          ? null
          : Array.from({ length: totalPages }, (_, index) => (
              <input
                type="radio"
                name="active-page"
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              />
            ))}
      </div>
    </div>
  );
}
const ExercisesSubcategoriesList = ({ page }) => {
  return (
    <div>
      <Pagination
        page={page}
        itemsPerPage={innerWidth > 768 && innerWidth < 1400 ? 9 : 10}
      />
    </div>
  );
};
export default ExercisesSubcategoriesList;
