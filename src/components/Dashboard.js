import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>포스팅 목차</h1>

            <button onClick={() =>
                navigate('/tech002')}>React 입문자라면 꼭 알아야 할 핵심 개념들
            </button>

            <button onClick={() =>
                navigate('/tech003')}>React에서 자주 쓰는 Hooks, 어렵지 않아요!
            </button>
        </div>
    );
}

export default Dashboard;