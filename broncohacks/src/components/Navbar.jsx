function Navbar(props) {
    return (
    <>
        <div className={`flex grid-cols-2 text-3xl w-full sticky top-0 bg-healthygreen p-3`}>
            <div>
                <a href="/" className="">Home</a>
            </div>
            <div className="flex justify-end w-full">
                <a href="/" className="text-end">Account</a>
            </div>
        </div>
    </>
    )
}

export default Navbar
