import { Category } from './styledComponents/ExercisesCategories.styled';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/reducer';
const pages = ['Body parts', 'Muscles', 'Equipment'];
const ExercisesCategories = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul style={{ display: 'flex' }}>
        {pages.map((page, index) => (
          <li key={index} style={{ marginRight: 28 }}>
            <Category
              to={page.toLowerCase()}
              onClick={() => dispatch(changeCategory(page))}
            >
              {page}
            </Category>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExercisesCategories;
