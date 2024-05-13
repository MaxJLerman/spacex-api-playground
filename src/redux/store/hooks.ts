import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, TypedDispatch, TypedStore } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = useDispatch.withTypes<TypedDispatch>();
export const useTypedSelector = useSelector.withTypes<RootState>();
export const useTypedStore = useStore.withTypes<TypedStore>();
