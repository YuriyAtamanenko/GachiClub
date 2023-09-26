import PropTypes from 'prop-types';
import css from './UserDataPage.module.css';

export const ProgressBarStep1 = ({ currentStep }) => {
  const isCompleted = currentStep >= 0;

  return (
    <div className={css.progressBarOne}>
      <div
        className={`${css.progressBarPart} ${isCompleted ? css.completed : ''}`}
      ></div>
      {/* Добавьте другие части прогресс-бара для первой страницы */}
    </div>
  );
};

export const ProgressBarStep2 = ({ currentStep }) => {
  const isCompleted = currentStep >= 1;

  return (
    <div className={css.progressBarTwo}>
      {/* Добавьте части прогресс-бара для второй страницы */}
      <div
        className={`${css.progressBarPart} ${isCompleted ? css.completed : ''}`}
      ></div>
    </div>
  );
};

export const ProgressBarStep3 = ({ currentStep }) => {
  const isCompleted = currentStep >= 2;

  return (
    <div className={css.progressBarThree}>
      {/* Добавьте части прогресс-бара для третьей страницы */}
      <div
        className={`${css.progressBarPart} ${isCompleted ? css.completed : ''}`}
      ></div>
    </div>
  );
};

ProgressBarStep1.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

ProgressBarStep2.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

ProgressBarStep3.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
