import { useCallback } from 'react';
import { useState } from 'react';

const COUNTER_INIT = 0;

const Counter = ({step}) => {

    const [count, setCount] = useState(COUNTER_INIT);

    const handleIncr = useCallback(() => {
        setCount(c => c + step);
    }, [step]);

    const handleReset = useCallback(() => {
        setCount(COUNTER_INIT);
    }, [])

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={handleIncr}>+{step}</button>
                {count !== COUNTER_INIT && (
                    <button onClick={handleReset}>Reset</button>
                )}
            </div>
        </>
    )
};

Counter.defaultProps = {
    step: 1
}

export default Counter