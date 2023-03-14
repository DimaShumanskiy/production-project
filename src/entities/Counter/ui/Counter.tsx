import React from 'react';
import Button from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {

}

const Counter = (props: CounterProps) => {
    const dispatch = useDispatch();

    const value = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {value}
            </h1>
            <Button onClick={increment} data-testid="increment-btn">{t('increment')}</Button>
            <Button onClick={decrement} data-testid="decrement-btn">{t('decrement')}</Button>
        </div>
    );
};

export default Counter;
