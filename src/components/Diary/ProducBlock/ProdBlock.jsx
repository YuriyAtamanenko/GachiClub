import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import {
  ProductsContainer,
  BlockTxtBtn,
  ProductsExercisesText,
  ProductsBtn,
  ContainerProduct,
  BlockNotFoundProd,
  BlockProdLabel768,
  TitleProdLabel768,
  ListProducts,
  ItemProducts,
  ContentProducts,
  TitleProducts,
  LabelProducts,
  ButtonDelProd,
  SvgIconDel,
  Circle,
  Recommended,
} from './ProdBlock.styled';
import { removeProductThunk } from '../../../redux/Diary/operations';
import { selectGroupBlood } from '../../../redux/Authorization/selector';

const ProdBlock = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.diary.products);
  const currentDate = useSelector(store => store.diary.date);
  const groupBlood = useSelector(selectGroupBlood);

  return (
    <>
      <ProductsContainer>
        <BlockTxtBtn>
          <ProductsExercisesText>Products</ProductsExercisesText>
          <ProductsBtn to="/products" className="add-product-link">
            Add product
            <svg style={{ width: '16', height: '16' }}>
              <use xlinkHref={`${sprite}#icon-next`} />
            </svg>
          </ProductsBtn>
        </BlockTxtBtn>
        {products.length === 0 ? (
          <BlockNotFoundProd>Not found products</BlockNotFoundProd>
        ) : (
          <ContainerProduct>
            <BlockProdLabel768>
              {['Title', 'Category', 'Calories', 'Weight', 'Recommend'].map(
                (label, index) => (
                  <TitleProdLabel768
                    key={index}
                    className={`title-prod-${index}`}
                  >
                    {label}
                  </TitleProdLabel768>
                ),
              )}
            </BlockProdLabel768>
            <div>
              <ListProducts>
                {products.map(
                  ({
                    amount,
                    calories,
                    _id,

                    productId: { category, title, groupBloodNotAllowed },
                  }) => (
                    <ItemProducts key={_id}>
                      <ContentProducts className="title">
                        <LabelProducts className="labTitle">
                          Title
                        </LabelProducts>
                        <TitleProducts>{title}</TitleProducts>
                      </ContentProducts>
                      <ContentProducts className="category">
                        <LabelProducts className="labCategory">
                          Category
                        </LabelProducts>
                        <TitleProducts>{category}</TitleProducts>
                      </ContentProducts>
                      <ContentProducts className="calories">
                        <LabelProducts className="labCalories">
                          Calories
                        </LabelProducts>
                        <TitleProducts>{calories}</TitleProducts>
                      </ContentProducts>
                      <ContentProducts className="amount">
                        <LabelProducts className="labWeight">
                          Weight
                        </LabelProducts>
                        <TitleProducts>{amount}</TitleProducts>
                      </ContentProducts>
                      <ContentProducts className="recommend">
                        <LabelProducts className="labRecommend">
                          Recommend
                        </LabelProducts>
                        <Circle
                          style={{
                            backgroundColor: `${
                              groupBloodNotAllowed[groupBlood]
                                ? '#E9101D'
                                : '#419B09'
                            }`,
                          }}
                        ></Circle>
                        <Recommended>
                          {groupBloodNotAllowed[groupBlood] ? 'No' : 'Yes'}
                        </Recommended>
                      </ContentProducts>
                      <ButtonDelProd
                        onClick={() =>
                          dispatch(
                            removeProductThunk({
                              date: currentDate,
                              productToRemove: _id,
                            }),
                          )
                        }
                      >
                        <SvgIconDel>
                          <use xlinkHref={`${sprite}#icon-trash`} />
                        </SvgIconDel>
                      </ButtonDelProd>
                    </ItemProducts>
                  ),
                )}
              </ListProducts>
            </div>
          </ContainerProduct>
        )}
      </ProductsContainer>
    </>
  );
};

export default ProdBlock;
