function Navbar(props) {
    return (
    <>
        <div className={`flex flex-col space-y-8 text-xl w-fit h-full bg-healthygreen p-3`}>
            <div>
                <a href="/" className="bg-secondary-green p-1 rounded-sm">Home</a>
            </div>
            <div className="">
                <a href="/logout" className="bg-secondary-green p-1 rounded-sm">Logout</a>
            </div>
        </div>
    </>
    )
}

export default Navbar
