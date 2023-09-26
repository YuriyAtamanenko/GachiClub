export const initialState = {
  memo: null,
  defaultParams: {
    data: {
      height: 150,
      currentWeight: 35,
      desiredWeight: 35,
      birthday: '2005-06-17T07:27:41.902Z',
      blood: 3,
      sex: 'female',
      levelActivity: 2,
    },
    name: 'Mark',
    avatarUrl: null,
    dailyRateCalories: 2200,
    dailySportMin: 110,
  },
  data: {},
  isLoading: false,
  error: null,

  isLoadingUpdate: false,
  errorUpdate: null,
};
