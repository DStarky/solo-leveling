import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type User = {
  name: string;
  level: number;
  currentExperience: number;
  nextLevelExperience: number;
}

const initialState: User = {
  name: 'Username',
  level: 0,
  currentExperience: 7,
  nextLevelExperience: 10,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>){
      state.name = action.payload;
    }
  }
})

export const selectUser = (state: RootState) => state.user;
export const { changeName } = userSlice.actions;
export default userSlice.reducer;