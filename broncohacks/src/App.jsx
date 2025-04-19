import ClientsPage from './components/ClientsPage';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from './components/NotFound';
import ViewClientPage from './components/ViewClientPage';

function App() {
    const APP_TITLE = "Title";
    return (
    <>
        <div className="flex h-screen">
            <Navbar title={APP_TITLE}></Navbar>
            <BrowserRouter>
                <Routes>
                    <Route element={<Navigate to="/clients" />} />
                    <Route path="/" element={<Navigate to="/clients" />} />
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/client/:id" element={<ViewClientPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
)
}

export default App
