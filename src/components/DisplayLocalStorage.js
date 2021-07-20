import React, { useState } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState'

function DisplayLocalStorageData () {
    const [ userAge, setUserAge ] = useLocalStorageState("age", 20);
    return (
        <div>
            <h1>user age: {userAge}</h1>
            <button onClick={() => setUserAge(userAge + 1)}>+</button>
            <button onClick={() => setUserAge(userAge - 1)}>-</button>
        </div>

    )
}

export default DisplayLocalStorageData;