import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { TDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =  useSelector;
