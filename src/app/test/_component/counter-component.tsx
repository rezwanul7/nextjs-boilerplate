// app/page.tsx
'use client';
import {useState} from 'react';

export default function CounterComponent() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 border rounded">
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className="mr-2">+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}
