function Navbar(props) {
    return (
    <>
        <div className={`flex flex-col justify-between w-40 text-xl h-full bg-healthygreen p-3`}>
            <a href="/" className="flex flex-row justify-between items-center text-md text-end bg-offwhite w-full p-1 rounded-sm">
                <img className="h-6" src="assets/home-icon.png"></img>
                <span>Home</span>
            </a>
            <div>
                <a href="/logout" className="flex flex-row justify-between items-center text-md text-end bg-offwhite w-full p-1 rounded-sm">
                    <img className="h-6" src="assets/logout-icon.png"></img>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    </>
    )
}

export default Navbar
