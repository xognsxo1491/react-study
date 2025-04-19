import { useState, useEffect, useRef, useContext, useMemo } from "react";
import UserContext from "../context/UserContext";

const computeHeavyTask = (num) => {
    let result = 0;

    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }

    return result + num;
};

// useState, useEffect 예시
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('업데이트 될 때 실행된다.');
    }, [count]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                클릭 수: { count }
            </button>
        </>
    )
}

// userRef 예시
function Ref() {
    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <br/>

            <button onClick={ focusInput }>포커스 주기</button>
            <input ref={ inputRef } placeholder="여기에 입력해보세요." />
        </div>
    );
}

// useContext 예시
function UserInfo() {
    const userName = useContext(UserContext);
    return <p>사용자 이름: { userName }</p>;
}

// useMemo 예시
function Calculating() {
    const [count, setCount] = useState(0);
    const expensiveValue = useMemo(() => computeHeavyTask(count), [count]);

    return (
        <div>
            <p>무거운 계산 결과: {expensiveValue}</p>
            <button onClick={() => setCount(count + 1)}>카운트 증가: { count }</button>
            <button onClick={() => setCount(count)}>카운트 증가 안함</button>
        </div>
    );
}

function Tech003() {
    useEffect(() => {
        console.log('마운트 될 때 실행된다.')
    }, [])

    useEffect(() => {
        console.log('렌더링 될 때 실행된다.')
    })

    return (
        <>
            <Counter />

            <Ref />

            <UserInfo />

            <Calculating />
        </>
    );
}

export default Tech003;