import ClientsPage from './components/ClientsPage';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const APP_TITLE = "Title";
    return (
    <>
        <div className="flex h-screen">
            <Navbar title={APP_TITLE}></Navbar>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/clients" />} />
                    <Route path="/clients" element={<ClientsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
)
}

export default App
