import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import {
  ExercisesContainer,
  BlockTxtBtn,
  ProductsExercisesText,
  ExercisesBtn,
  ContainerExecrcises,
  BlockExeLabel768,
  TitleExeLabel768,
  BlockNotFoundExe,
  ButtonDelExe,
  SvgIconDel,
  ListExercise,
  ItemExercise,
  ContentExercises,
  LabelExercises,
  TitleExercises,
} from './ExeBlock.styled';

const ExeBlock = () => {
  const exercises = useSelector(store => store.diary.exercises);
  console.log(exercises);

  return (
    <>
      <ExercisesContainer>
        <BlockTxtBtn className="block-ex">
          <ProductsExercisesText>Exercises</ProductsExercisesText>
          <ExercisesBtn to="/exercises" className="add-exercises-link">
            Add exercise
            <svg style={{ width: '16', height: '16' }}>
              <use xlinkHref={`${sprite}#icon-next`} />
            </svg>
          </ExercisesBtn>
        </BlockTxtBtn>
        {exercises.length === 0 ? (
          <BlockNotFoundExe>Not found products</BlockNotFoundExe>
        ) : (
          <ContainerExecrcises>
            <BlockExeLabel768>
              {['Title', 'Category', 'Calories', 'Weight', 'Recommend'].map(
                (label, index) => (
                  <TitleExeLabel768
                    key={index}
                    className={`title-exe-${index}`}
                  >
                    {label}
                  </TitleExeLabel768>
                ),
              )}
            </BlockExeLabel768>
            <div>
              <ListExercise>
                {exercises.map(
                  ({
                    duration,
                    calories,
                    _id,
                    exerciseId: { bodyPart, equipment, name, target },
                  }) => (
                    <ItemExercise key={_id}>
                      <ContentExercises className="title">
                        <LabelExercises className="labTitle">
                          Body part
                        </LabelExercises>
                        <TitleExercises>{bodyPart}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="category">
                        <LabelExercises className="labCategory">
                          Equipment
                        </LabelExercises>
                        <TitleExercises>{equipment}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="calories">
                        <LabelExercises className="labCalories">
                          Name
                        </LabelExercises>
                        <TitleExercises>{name}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="amount">
                        <LabelExercises className="labWeight">
                          Target
                        </LabelExercises>
                        <TitleExercises>{target}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="recommend">
                        <LabelExercises className="labRecommend">
                          Burned Calories
                        </LabelExercises>
                        <TitleExercises>{calories}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="recommend">
                        <LabelExercises className="labRecommend">
                          Time
                        </LabelExercises>
                        <TitleExercises>{duration}</TitleExercises>
                      </ContentExercises>
                      <ButtonDelExe>
                        <SvgIconDel>
                          <use xlinkHref={`${sprite}#icon-trash`} />
                        </SvgIconDel>
                      </ButtonDelExe>
                    </ItemExercise>
                  ),
                )}
              </ListExercise>
            </div>
          </ContainerExecrcises>
        )}
      </ExercisesContainer>
    </>
  );
};

export default ExeBlock;
