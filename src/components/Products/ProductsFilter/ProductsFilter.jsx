import { ContainerForm, InputForm } from './ProductsFilter.styled';

const ProductsFilter = () => {
  return (
    <ContainerForm>
      <li>
        <label>
          <InputForm
            //   value={search}
            //   onChange={onChangeSearch}
            name="productSearch"
            type="text"
            //   className={css.products_filter_search}
            placeholder="Search"
          />
        </label>
      </li>
      <li></li>
      <li></li>
    </ContainerForm>
  );
};

export default ProductsFilter;
