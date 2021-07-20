import React from 'react';
import useOrderCountHook from '../hooks/useOrderCount';

function DisplayCount() {
    const orderHook = useOrderCountHook();
    return (
        <>
        <div>
            <h1>count: {orderHook.orderCount} </h1>
            <button type='button' onClick {orderHook.incrementOrderCount}>+</button>
            <button type='button' onClick {orderHoo.decrementOrderCount}>-</button>
        </div>
        </>
    );
}

export default DisplayCount;