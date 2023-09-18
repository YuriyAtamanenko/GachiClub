import {
  Container,
  SubContainer,
  Title,
  SubContainerPE,
  SubContainerStats,
  ProductsContainer,
  ExercisesContainer,
  BlockTxtBtn,
  ProductsExercisesText,
  ProductsExercisesBtn,
  ListStats,
  ItemStats,
  ItemContent,
  TextContent,
  TotalContent,
  BlockWarning,
  TextWarning,
} from './DiaryPage.styled';

const DiaryPage = () => {
  return (
    <Container>
      <Title>Diary</Title>
      <SubContainer>
        <SubContainerPE>
          <ProductsContainer>
            <BlockTxtBtn>
              <ProductsExercisesText>Products</ProductsExercisesText>
              <ProductsExercisesBtn>Add product</ProductsExercisesBtn>
            </BlockTxtBtn>
          </ProductsContainer>

          <ExercisesContainer>
            <BlockTxtBtn>
              <ProductsExercisesText>Exercises</ProductsExercisesText>
              <ProductsExercisesBtn>Add exercise</ProductsExercisesBtn>
            </BlockTxtBtn>
          </ExercisesContainer>
        </SubContainerPE>

        <SubContainerStats>
          <ListStats>
            <ItemStats>
              <ItemContent>
                <TextContent>Daily calorie intake</TextContent>
                <TotalContent>2200</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>Daily norm of sports</TextContent>
                <TotalContent>110 min</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>Сalories consumed</TextContent>
                <TotalContent>0</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>Сalories burned</TextContent>
                <TotalContent>0</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>The rest of the calories</TextContent>
                <TotalContent>2200</TotalContent>
              </ItemContent>
            </ItemStats>
            <ItemStats>
              <ItemContent>
                <TextContent>The rest of sports</TextContent>
                <TotalContent>110 min</TotalContent>
              </ItemContent>
            </ItemStats>
          </ListStats>

          <BlockWarning>
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
