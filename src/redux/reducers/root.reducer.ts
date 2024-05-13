import { combineReducers } from "@reduxjs/toolkit";

import { crewSlice } from "./crew.reducer";
import { companyInfoSlice } from "./companyInfo.reducer";

const rootReducer = combineReducers({
  crewReducer: crewSlice.reducer,
  companyInfoReducer: companyInfoSlice.reducer,
});

export type StoreRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
