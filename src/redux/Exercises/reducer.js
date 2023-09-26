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
    [getExercisesList.fulfilled]: (state, { payload }) =>
      void (state.allExercises = payload.getExercises.map(el => el)),
    [getExercisesList.rejected]: onRejected,

    [getCategories.pending]: onPending,
    [getCategories.fulfilled]: (state, { payload }) => {
      state.bodyparts = payload.bodyparts.getAllBodyParts.map(
        ({ filter, name, imgURL }) => ({
          filter,
          name,
          imgURL,
        }),
      );
      state.muscules = payload.muscules.getMuscules.map(
        ({ filter, name, imgURL }) => ({
          filter,
          name,
          imgURL,
        }),
      );
      state.equipments = payload.equipments.getEquipments.map(
        ({ filter, name, imgURL }) => ({
          filter,
          name,
          imgURL,
        }),
      );
      state.isLoading = false;
    },
    [getCategories.rejected]: onRejected,
    [addExerciseToDiary.pending]: onPending,
    [addExerciseToDiary.fulfilled]: (state, { payload }) => {
      const { newExercise } = payload;
      if (newExercise) {
        const newElement = {
          ...payload.doneExercises.pop(),
          exercise: payload.newExercise,
        };
        state.doneExercises = [...state.doneExercises, newElement];
      }
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
