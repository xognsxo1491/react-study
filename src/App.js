import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import Tech001 from "./components/tech001/Tech001";

import './App.css';

function App() {
    return (
        <div style={{ margin: '24px' }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/tech001" element={<Tech001 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
