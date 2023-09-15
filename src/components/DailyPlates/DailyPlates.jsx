import DailyPlate from '../DailyPlate';
import spoonFork from '../../assets/profile_img/spoon_fork.svg';
import dumbbell from '../../assets/profile_img/dumbbell.svg';
import { Plates } from './DailyPlates.style';

const callInDay = '2200';
const dailySportTime = '110';

const DailyPlates = () => {
  return (
    <Plates>
      <DailyPlate
        title={'Daily calorie intake'}
        alt="spoon and fork"
        img={spoonFork}
        data={callInDay}
      />
      <DailyPlate
        title={'Daily norm of sports'}
        alt="dumbbell"
        img={dumbbell}
        data={`${dailySportTime} min`}
      />
    </Plates>
  );
};

export default DailyPlates;
