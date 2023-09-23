import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';

import {
  Container,
  SubContainer,
  BlockTitleCall,
  BlockCalendar,
  CustomDatePicker,
  BlockBtnDate,
  BtnLeft,
  BtnRight,
  Title,
  SubContainerPE,
  SubContainerStats,
  ProductsContainer,
  ContainerProductInput,
  BlockProductInput,
  LabelProduct,
  InputProduct,
  ExercisesContainer,
  ContainerExecrcisesInput,
  BlockExecrcisesInput,
  LabelExecrcises,
  InputExecrcises,
  BlockTxtBtn,
  BlockProdLabel768,
  TitleProdLabel768,
  BlockExeLabel768,
  TitleExeLabel768,
  ProductsExercisesText,
  ProductsBtn,
  ExercisesBtn,
  BlockNotFoundProd,
  BlockNotFoundExe,
  ButtonDelProd,
  ButtonDelExe,
  ListStats,
  ItemStats,
  ItemContent,
  TextContent,
  TotalContent,
  BlockWarning,
  TextWarning,
  SvgIconCalendar,
  SvgIconLeft,
  SvgIconDel,
} from './DiaryPage.styled';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [productBlocks, setProductBlocks] = useState([]);
  const [execrcisesBlocks, setExecrcisesBlocks] = useState([]);
  const [isBlockProdVisible, setBlockProdVisibility] = useState(false);
  const [isBlockExeVisible, setBlockExeVisibility] = useState(false);

  const handleLeftButtonClick = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() - 1);
    setStartDate(newDate);
  };

  const handleRightButtonClick = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + 1);
    setStartDate(newDate);
  };

  const removeProductBlock = blockIndex => {
    const updatedBlocks = [...productBlocks];
    updatedBlocks.splice(blockIndex, 1);
    setProductBlocks(updatedBlocks);

    if (updatedBlocks.length === 0) {
      setBlockProdVisibility(false);
    }
  };

  const removeExecrcisesBlocks = blockIndex => {
    const updatedBlocks = [...execrcisesBlocks];
    updatedBlocks.splice(blockIndex, 1);
    setExecrcisesBlocks(updatedBlocks);

    if (updatedBlocks.length === 0) {
      setBlockExeVisibility(false);
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

  const addExecrcisesBlock = () => {
    const newBlock = {
      id: Date.now(),
      inputs: [
        'Body Part',
        'Equipment',
        'Name',
        'Target',
        'Burned Calories',
        'Time',
      ],
    };
    setExecrcisesBlocks([...execrcisesBlocks, newBlock]);
    setBlockExeVisibility(true);
  };

  return (
    <Container>
      <BlockTitleCall>
        <BlockCalendar>
          <CustomDatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
          <SvgIconCalendar>
            <use xlinkHref={`${sprite}#icon-calendar`} />
          </SvgIconCalendar>
          <BlockBtnDate>
            <BtnLeft onClick={handleLeftButtonClick}>
              <SvgIconLeft>
                <use xlinkHref={`${sprite}#icon-left`} />
              </SvgIconLeft>
            </BtnLeft>
            <BtnRight onClick={handleRightButtonClick}>
              <svg style={{ width: '20', height: '20' }}>
                <use xlinkHref={`${sprite}#icon-right`} />
              </svg>
            </BtnRight>
          </BlockBtnDate>
        </BlockCalendar>
        <Title>Diary</Title>
      </BlockTitleCall>

      <SubContainer>
        <SubContainerPE>
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
                    <ButtonDelProd
                      onClick={() => removeProductBlock(blockIndex)}
                    >
                      <SvgIconDel>
                        <use xlinkHref={`${sprite}#icon-trash`} />
                      </SvgIconDel>
                    </ButtonDelProd>
                  </BlockProductInput>
                </ContainerProductInput>
              ))
            )}
          </ProductsContainer>

          <ExercisesContainer>
            <BlockTxtBtn className="block-ex">
              <ProductsExercisesText>Exercises</ProductsExercisesText>
              <ExercisesBtn onClick={addExecrcisesBlock}>
                Add exercise
                <svg style={{ width: '16', height: '16' }}>
                  <use xlinkHref={`${sprite}#icon-next`} />
                </svg>
              </ExercisesBtn>
            </BlockTxtBtn>
            {isBlockExeVisible && (
              <BlockExeLabel768>
                {[
                  'Body Part',
                  'Equipment',
                  'Name',
                  'Target',
                  'Burned Calories',
                  'Time',
                ].map((label, index) => (
                  <TitleExeLabel768
                    key={index}
                    className={`title-exe-${index}`}
                  >
                    {label}
                  </TitleExeLabel768>
                ))}
              </BlockExeLabel768>
            )}
            {execrcisesBlocks.length === 0 ? (
              <BlockNotFoundExe>Not found exercises</BlockNotFoundExe>
            ) : (
              execrcisesBlocks.map((block, blockIndex) => (
                <ContainerExecrcisesInput key={block.id}>
                  <BlockExecrcisesInput>
                    {block.inputs.map((label, inputIndex) => (
                      <div key={inputIndex}>
                        <LabelExecrcises className={`label-exe-${inputIndex}`}>
                          {label}
                        </LabelExecrcises>
                        <InputExecrcises
                          className={`input-exe-${inputIndex}`}
                          type="text"
                        />
                      </div>
                    ))}
                    <ButtonDelExe
                      onClick={() => removeExecrcisesBlocks(blockIndex)}
                    >
                      <SvgIconDel>
                        <use xlinkHref={`${sprite}#icon-trash`} />
                      </SvgIconDel>
                    </ButtonDelExe>
                  </BlockExecrcisesInput>
                </ContainerExecrcisesInput>
              ))
            )}
          </ExercisesContainer>
        </SubContainerPE>

        <SubContainerStats>
          <ListStats>
            <ItemStats>
              <ItemContent>
                <TextContent>
                  <svg style={{ width: '20', height: '20', marginRight: '8' }}>
                    <use xlinkHref={`${sprite}#icon-food`} />
                  </svg>
                  Daily calorie intake
                </TextContent>
                <TotalContent>2200</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>
                  <svg style={{ width: '20', height: '20', marginRight: '8' }}>
                    <use xlinkHref={`${sprite}#icon-dumbbell`} />
                  </svg>
                  Daily norm of sports
                </TextContent>
                <TotalContent>110 min</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>
                  <svg style={{ width: '20', height: '20', marginRight: '8' }}>
                    <use xlinkHref={`${sprite}#icon-apple`} />
                  </svg>
                  Сalories consumed
                </TextContent>
                <TotalContent>0</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>
                  <svg style={{ width: '20', height: '20', marginRight: '8' }}>
                    <use xlinkHref={`${sprite}#icon-calories`} />
                  </svg>
                  Сalories burned
                </TextContent>
                <TotalContent>0</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>
                  <svg style={{ width: '20', height: '20', marginRight: '6' }}>
                    <use xlinkHref={`${sprite}#icon-bubble`} />
                  </svg>
                  The rest of the calories
                </TextContent>
                <TotalContent>2200</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent className="last-item">
                <TextContent className="last-text">
                  <svg style={{ width: '20', height: '20', marginRight: '8' }}>
                    <use xlinkHref={`${sprite}#icon-running`} />
                  </svg>
                  The rest of sports
                </TextContent>
                <TotalContent>110 min</TotalContent>
              </ItemContent>
            </ItemStats>
          </ListStats>

          <BlockWarning>
            <svg
              style={{
                width: '24',
                height: '24',
                marginRight: '8',
                borderRadius: '50%',
                stroke: 'white',
                backgroundColor: '#EFA082',
              }}
            >
              <use xlinkHref={`${sprite}#tabler_exclamation-mark`} />
            </svg>
            <TextWarning>
              Record all your meals in a calorie diary every day. This will help
              me be aware of my nutrition and make me responsible for my
              choices.
            </TextWarning>
          </BlockWarning>
        </SubContainerStats>
      </SubContainer>
    </Container>
  );
};

export default DiaryPage;
