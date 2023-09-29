import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { removeExerciseThunk } from '../../../redux/Diary/operations';

const ExeBlock = () => {
  const dispatch = useDispatch();
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
              {[
                'Body Part',
                'Equipment',
                'Name',
                'Target',
                'Burned Calories',
                'Time',
              ].map((label, index) => (
                <TitleExeLabel768 key={index} className={`title-exe-${index}`}>
                  {label}
                </TitleExeLabel768>
              ))}
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
                      <ContentExercises className="bodyPart">
                        <LabelExercises className="labBodyPart">
                          Body part
                        </LabelExercises>
                        <TitleExercises>{bodyPart}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="equipment">
                        <LabelExercises className="labEquipment">
                          Equipment
                        </LabelExercises>
                        <TitleExercises>{equipment}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="name">
                        <LabelExercises className="labName">
                          Name
                        </LabelExercises>
                        <TitleExercises>{name}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="target">
                        <LabelExercises className="labTarget">
                          Target
                        </LabelExercises>
                        <TitleExercises>{target}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="calories">
                        <LabelExercises className="labCalori">
                          Burned Calories
                        </LabelExercises>
                        <TitleExercises>{calories}</TitleExercises>
                      </ContentExercises>
                      <ContentExercises className="duration">
                        <LabelExercises className="labDuration">
                          Time
                        </LabelExercises>
                        <TitleExercises>{duration}</TitleExercises>
                      </ContentExercises>
                      <ButtonDelExe>
                        <SvgIconDel
                          onClick={() =>
                            dispatch(
                              removeExerciseThunk({
                                date: '29-09-2023',
                                exerciseToRemove: _id,
                              }),
                            )
                          }
                        >
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
