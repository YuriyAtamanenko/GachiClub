import React from 'react';

import {
  Container,
  SubContainer,
  SubContainerPE,
  SubContainerStats,
} from './DiaryPage.styled';

import TitleCall from '../../components/Diary/TitleCallendar/TitleCall';
import ProdBlock from '../../components/Diary/ProducBlock/ProdBlock';
import ExeBlock from '../../components/Diary/ExercisBlock/ExeBlock';
import StatisticsBlock from '../../components/Diary/StatsBlock/StatisticsBlock';

const DiaryPage = () => {
  return (
    <Container>
      <TitleCall />
      <SubContainer>
        <SubContainerPE>
          <ProdBlock />
          <ExeBlock />
        </SubContainerPE>
        <SubContainerStats>
          <StatisticsBlock />
        </SubContainerStats>
      </SubContainer>
    </Container>
  );
};

export default DiaryPage;
