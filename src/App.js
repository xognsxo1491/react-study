import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import UserContext from "./context/UserContext";

import Dashboard from "./components/Dashboard";
import Tech002 from "./components/Tech002";
import Tech003 from "./components/Tech003";

function App() {

    return (
        <UserContext.Provider value="홍길동">

            <div style={{ margin: '24px' }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/tech002" element={<Tech002 />} />
                        <Route path="/tech003" element={<Tech003 />} />
                    </Routes>
                </BrowserRouter>
            </div>

        </UserContext.Provider>
    );
}

export default App;
