import { DailyText, Ico, Plate } from './DailyPlate.style';
import PropTypes from 'prop-types';

const DailyPlate = ({ img, title, data, alt }) => {
  return (
    <Plate>
      <div style={{ display: 'flex' }}>
        <Ico src={img} alt={alt} />
        <DailyText>{title}</DailyText>
      </div>

      <p>{data}</p>
    </Plate>
  );
};

DailyPlate.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default DailyPlate;
