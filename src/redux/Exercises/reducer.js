import { createSlice } from '@reduxjs/toolkit';
import {
  getExercisesList,
  getCategories,
  addExerciseToDiary,
} from './operations';
const initialState = {
  bodyparts: [],
  equipments: [],
  muscules: [],
  allExercises: [],
  doneExercises: [],
  burnedCalories: null,
  time: null,
  title: null,
  category: null,
  exerciseIndex: null,
  isToggled: false,
  modalIsOpen: false,
  isSuccess: false,
  isLoading: false,
};
const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    changeTitle: (state, action) => void (state.title = action.payload),
    changeCategory: (state, action) => void (state.category = action.payload),
    toggleChoice: state => void (state.isToggled = !state.isToggled),
    setIndex: (state, action) => void (state.exerciseIndex = action.payload),
    toggleSuccess: state => void (state.isSuccess = !state.isSuccess),
    setModalToggle: state => void (state.modalIsOpen = !state.modalIsOpen),
  },
  extraReducers: {
    [getExercisesList.pending]: onPending,
    [getExercisesList.fulfilled]: (state, { payload }) => {
      state.allExercises = payload.exercises;
      state.isLoading = false;
    },

    [getExercisesList.rejected]: onRejected,

    [getCategories.pending]: onPending,
    [getCategories.fulfilled]: (state, { payload }) => {
      state.bodyparts = payload.bodyparts.allBodyParts.map(el => el);
      state.muscules = payload.muscules.muscules.map(el => el);
      state.equipments = payload.equipments.equipments.map(el => el);
      state.isLoading = false;
    },
    [getCategories.rejected]: onRejected,
    [addExerciseToDiary.pending]: onPending,
    [addExerciseToDiary.fulfilled]: (state, { payload }) => {
      const { newExercise } = payload;
      if (newExercise) {
        const newElement = {
          ...payload.doneExercises,
          exercise: payload.newExercise,
        };
        state.doneExercises = [...state.doneExercises, newElement];
      }
      state.burnedCalories = payload.calories;
      state.time = payload.duration;
      state.isLoading = false;
    },
    [addExerciseToDiary.rejected]: onRejected,
  },
});
function onPending(state) {
  state.isLoading = true;
}
function onRejected(state) {
  state.isLoading = false;
}
export const {
  changeTitle,
  changeCategory,
  toggleChoice,
  setIndex,
  toggleSuccess,
  setBodyParts,
  setModalToggle,
} = exercisesSlice.actions;
export const exercisesReducer = exercisesSlice.reducer;
