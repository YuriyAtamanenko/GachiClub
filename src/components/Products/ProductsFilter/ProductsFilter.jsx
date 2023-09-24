import {
  ContainerForm,
  InputForm,
  Form,
  Search,
  Button,
  SearchBtn,
  CloseBtn,
  Select,
  Option,
  SelectPointer,
  SelectAll,
} from './ProductsFilter.styled';
import sprite from '../../../images/sprite.svg';

const ProductsFilter = () => {
  return (
    <ContainerForm>
      <li>
        <Form>
          <InputForm
            //   value={search}
            //   onChange={onChangeSearch}
            name="productSearch"
            type="text"
            placeholder="Search"
          />
          <SearchBtn
            // onClick={delTextInput}
            // style={{ display: hiddenBtnClose ? 'block' : 'none' }}
            type="button"
          >
            <CloseBtn>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </CloseBtn>
          </SearchBtn>
          <Button type="button">
            <Search>
              <use xlinkHref={`${sprite}#icon-search`}></use>
            </Search>
          </Button>
        </Form>
      </li>
      <li>
        <Select>
          <Option value="default">Categories</Option>
          <SelectPointer>
            <use xlinkHref={`${sprite}#icon-chevron-down`}></use>
          </SelectPointer>
        </Select>
      </li>
      <li>
        <SelectAll>
          <Option value="default">All</Option>
          <Option value="Recommended">Recommended</Option>
          <Option value="Not recommended">Not recommended</Option>
        </SelectAll>
      </li>
    </ContainerForm>
  );
};

export default ProductsFilter;
