//ф-ція для короткого запису днів тижня
export const shortDaysName = date => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return days[date.getDay()];
};
