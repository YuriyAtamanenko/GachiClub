import React from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import {
  ListStats,
  ItemStats,
  ItemContent,
  TextContent,
  TotalContent,
  BlockWarning,
  TextWarning,
} from './StatisticsBlock.styled';

const StatisticsBlock = () => {
  const products = useSelector(store => store.diary.products);
  const exercises = useSelector(store => store.diary.exercises);

  const totalCaloriesConsumed = products.reduce(
    (total, product) => total + product.calories,
    0,
  );

  const totalCaloriesBurned = exercises.reduce(
    (total, exercise) => total + exercise.calories,
    0,
  );

  return (
    <>
      <ListStats>
        <ItemStats className="dailyCalor">
          <ItemContent>
            <TextContent className="textColories">
              <svg style={{ width: '20', height: '20', marginRight: '8' }}>
                <use xlinkHref={`${sprite}#icon-food`} />
              </svg>
              Daily calorie intake
            </TextContent>
            <TotalContent>2200</TotalContent>
          </ItemContent>
        </ItemStats>
        <ItemStats className="dailyNorm">
          <ItemContent>
            <TextContent className="textNorm">
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
            <TotalContent>{totalCaloriesConsumed}</TotalContent>
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
            <TotalContent>{totalCaloriesBurned}</TotalContent>
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
              <svg
                style={{
                  width: '20',
                  height: '20',
                  marginRight: '8',
                  fill: '#EF8964',
                }}
              >
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
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </TextWarning>
      </BlockWarning>
    </>
  );
};

export default StatisticsBlock;
