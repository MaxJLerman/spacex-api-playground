import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CrewData } from "@/types/CrewData.type";

type CrewState = {
  crewData: CrewData[];
};

const CREW_INITIAL_STATE: CrewState = {
  crewData: [],
};

export const crewSlice = createSlice({
  name: "crew",
  initialState: CREW_INITIAL_STATE,
  reducers: {
    setCrewData: (state, action: PayloadAction<CrewData[]>) => {
      state.crewData = action.payload;
    },
  },
});

export const { setCrewData } = crewSlice.actions;

export default crewSlice.reducer;
