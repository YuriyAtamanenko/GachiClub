import React, { useState } from 'react';
import sprite from '../../../images/sprite.svg';

import {
  ProductsContainer,
  BlockTxtBtn,
  ProductsExercisesText,
  ProductsBtn,
  BlockProdLabel768,
  TitleProdLabel768,
  BlockNotFoundProd,
  ContainerProductInput,
  BlockProductInput,
  LabelProduct,
  InputProduct,
  ButtonDelProd,
  SvgIconDel,
} from './ProdBlock.styled';

const ProdBlock = () => {
  const [productBlocks, setProductBlocks] = useState([]);
  const [isBlockProdVisible, setBlockProdVisibility] = useState(false);

  const removeProductBlock = blockIndex => {
    const updatedBlocks = [...productBlocks];
    updatedBlocks.splice(blockIndex, 1);
    setProductBlocks(updatedBlocks);

    if (updatedBlocks.length === 0) {
      setBlockProdVisibility(false);
    }
  };

  const addProductBlock = () => {
    const newBlock = {
      id: Date.now(),
      inputs: ['Title', 'Category', 'Calories', 'Weight', 'Recommend'],
    };

    setProductBlocks([...productBlocks, newBlock]);
    setBlockProdVisibility(true);
  };

  return (
    <>
      <ProductsContainer>
        <BlockTxtBtn>
          <ProductsExercisesText>Products</ProductsExercisesText>
          <ProductsBtn onClick={addProductBlock}>
            Add product
            <svg style={{ width: '16', height: '16' }}>
              <use xlinkHref={`${sprite}#icon-next`} />
            </svg>
          </ProductsBtn>
        </BlockTxtBtn>
        {isBlockProdVisible && (
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
        )}
        {productBlocks.length === 0 ? (
          <BlockNotFoundProd>Not found products</BlockNotFoundProd>
        ) : (
          productBlocks.map((block, blockIndex) => (
            <ContainerProductInput key={block.id}>
              <BlockProductInput>
                {block.inputs.map((label, inputIndex) => (
                  <div key={inputIndex}>
                    <LabelProduct className={`label-prod-${inputIndex}`}>
                      {label}
                    </LabelProduct>
                    <InputProduct
                      className={`input-prod-${inputIndex}`}
                      type="text"
                    />
                  </div>
                ))}
                <ButtonDelProd onClick={() => removeProductBlock(blockIndex)}>
                  <SvgIconDel>
                    <use xlinkHref={`${sprite}#icon-trash`} />
                  </SvgIconDel>
                </ButtonDelProd>
              </BlockProductInput>
            </ContainerProductInput>
          ))
        )}
      </ProductsContainer>
    </>
  );
};

export default ProdBlock;
