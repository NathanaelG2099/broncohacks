import Navbar from './components/Navbar'

function App() {
    const APP_TITLE = "Title";
    return (
    <>
        <Navbar title={APP_TITLE}></Navbar>
        <div className={`flex justify-center bg-offwhite ml-6 mr-6`}>Test</div>
    </>
)
}

export default App
