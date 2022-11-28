// node modules
import { createSlice } from '@reduxjs/toolkit';

// local files
import { RootState } from '../store';

// typings
type AppState = typeof initialState;

const initialState = {
  isMobileScreenSize: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    on_mobile_screen_width: (state: AppState, _) => {
      state.isMobileScreenSize = true;
    },
    on_desk_screen_width: (state: AppState, _) => {
      state.isMobileScreenSize = false;
    },
  },
});

export const { on_mobile_screen_width, on_desk_screen_width } =
  appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
