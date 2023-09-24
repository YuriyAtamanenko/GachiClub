import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  title: null,
  category: null,
  exerciseIndex: null,
  isToggled: false,
};
const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    changeTitle: (state, action) => void (state.title = action.payload),
    changeCategory: (state, action) => void (state.category = action.payload),
    toggleChoice: state => void (state.isToggled = !state.isToggled),
    setIndex: (state, action) => void (state.exerciseIndex = action.payload),
  },
});
export const { changeTitle, changeCategory, toggleChoice, setIndex } =
  exercisesSlice.actions;
export const exercisesReducer = exercisesSlice.reducer;
