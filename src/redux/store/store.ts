import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "@/redux/reducers/root.reducer";

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type TypedStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<TypedStore["getState"]>;
export type TypedDispatch = TypedStore["dispatch"];
