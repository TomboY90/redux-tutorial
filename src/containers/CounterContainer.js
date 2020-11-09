import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, increaseAsync, decrease, decreaseAsync } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.Counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  }

  const onDecrease = () => {
    dispatch(decreaseAsync());
  }

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}

export default CounterContainer;