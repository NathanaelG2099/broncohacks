import ClientsPage from './components/ClientsPage';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const APP_TITLE = "Title";
    return (
    <>
        <Navbar title={APP_TITLE}></Navbar>
        <BrowserRouter>
            <Routes>
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/" element={<Navigate to="/clients" />} />
            </Routes>
        </BrowserRouter>
    </>
)
}

export default App
