import { createSlice } from '@reduxjs/toolkit';

import { SliceNameSpace } from 'src/store/constants';
import type { MainPageSliceInitialState } from 'src/store/slices/mainPageSlice/types';

const initialState: MainPageSliceInitialState = {
  title: 'Hello',
};

export const mainPageSlice = createSlice({
  name: SliceNameSpace.MainPage,
  initialState,
  reducers: {
    clearState(state) {
      state.title = 'State is cleared';
    },
  },
});

export const { actions: mainPageSliceActions } = mainPageSlice;
