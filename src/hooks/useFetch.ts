import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

type TParams = string | string[];

type TFetch = {
  action: (...args: string[] | any) => void;
  params?: TParams;
};

const getDependency = (value: TParams): string => {
  let newValue;
  if (Array.isArray(value)) {
    [newValue] = value;
  } else {
    newValue = value;
  }

  return newValue;
};

const useFetch = (args: TFetch) => {
  const { action, params = '' } = args;
  const dispatch = useDispatch();
  const getState = useSelector((state: RootState) => state);
  const update = getDependency(params);

  React.useEffect(() => {
    dispatch(action(params));
  }, [dispatch, update]);

  return getState;
};

export default useFetch;
