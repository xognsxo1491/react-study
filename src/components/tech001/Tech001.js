import { useState } from "react";

// Components 예시
function Greeting() {
    return <h2>안녕하세요! 반갑습니다 👋</h2>
}

// Props 예시
function Welcome({ name }) {
    return <h2>Welcome, {name}!</h2>
}

// State 예시
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}

function Tech001() {
    return (
        <>
            <Greeting />

            <Welcome name="James"/>

            <Counter />
        </>
    );
}

export default Tech001;