import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => navigate('/tech001')}>Tech001 이동</button>
        </div>
    );
}

export default Dashboard;