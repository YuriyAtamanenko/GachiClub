import { useState } from 'react';
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
  ExercisesContainer,
  BlockTxtBtn,
  ProductsExercisesText,
  ProductsBtn,
  ExercisesBtn,
  ListStats,
  ItemStats,
  ItemContent,
  TextContent,
  TotalContent,
  BlockWarning,
  TextWarning,
  SvgIconCalendar,
  SvgIconLeft,
} from './DiaryPage.styled';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());

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
              <ProductsBtn>
                Add product
                <svg style={{ width: '16', height: '16' }}>
                  <use xlinkHref={`${sprite}#icon-next`} />
                </svg>
              </ProductsBtn>
            </BlockTxtBtn>
          </ProductsContainer>

          <ExercisesContainer>
            <BlockTxtBtn className="block-ex">
              <ProductsExercisesText>Exercises</ProductsExercisesText>
              <ExercisesBtn>
                Add exercise
                <svg style={{ width: '16', height: '16' }}>
                  <use xlinkHref={`${sprite}#icon-next`} />
                </svg>
              </ExercisesBtn>
            </BlockTxtBtn>
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
