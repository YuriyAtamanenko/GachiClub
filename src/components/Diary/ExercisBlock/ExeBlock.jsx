import React, { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import {
  ExercisesContainer,
  BlockTxtBtn,
  ProductsExercisesText,
  ExercisesBtn,
  BlockExeLabel768,
  TitleExeLabel768,
  BlockNotFoundExe,
  ContainerExecrcisesInput,
  BlockExecrcisesInput,
  LabelExecrcises,
  InputExecrcises,
  ButtonDelExe,
  SvgIconDel,
} from './ExeBlock.styled';

const ExeBlock = () => {
  const [execrcisesBlocks, setExecrcisesBlocks] = useState([]);
  const [isBlockExeVisible, setBlockExeVisibility] = useState(false);

  const removeExecrcisesBlocks = blockIndex => {
    const updatedBlocks = [...execrcisesBlocks];
    updatedBlocks.splice(blockIndex, 1);
    setExecrcisesBlocks(updatedBlocks);

    if (updatedBlocks.length === 0) {
      setBlockExeVisibility(false);
    }
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
    <>
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
              <TitleExeLabel768 key={index} className={`title-exe-${index}`}>
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
    </>
  );
};

export default ExeBlock;
