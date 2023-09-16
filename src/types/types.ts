import { useDispatch} from "react-redux";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { TDispatch, RootState } from "../redux/store";

export const useTDispatch = () => useDispatch<TDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;