import { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import DatePicker from 'react-datepicker';
import { getYear, getMonth } from 'date-fns';
import PropTypes from 'prop-types';
import CustomInput from '../CustomInput/CustomInput';
// import 'react-datepicker/dist/react-datepicker.css';
import { CalendarGlobalStyles } from './Calendar.styled';

const Calendar = forwardRef(({ field, form }, ref) => {
  const [startDate, setStartDate] = useState('');
  const datepickerRef = useRef(null);

  const years = Array.from(
    { length: getYear(new Date()) - 1930 },
    (_, index) => 1931 + index,
  );
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Обработчик изменения даты
  const handleDateChange = date => {
    setStartDate(date);
    form.setFieldValue(field.name, date); // значение в Formik
  };

  useImperativeHandle(ref, () => ({
    // для закрытия календаря
    closeDatePicker: () => {
      if (datepickerRef.current) {
        datepickerRef.current.setOpen(false);
      }
    },
  }));

  Calendar.displayName = 'Calendar';

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        customInput={<CustomInput />}
        ref={datepickerRef}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              className="calendar-button"
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {'<'}
            </button>
            <select
              className="calendar-select"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="calendar-select"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              className="calendar-button"
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {'>'}
            </button>
          </div>
        )}
      />
      <CalendarGlobalStyles />
    </>
  );
});

Calendar.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default Calendar;
