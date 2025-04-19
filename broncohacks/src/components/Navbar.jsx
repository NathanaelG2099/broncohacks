function Navbar(props) {
    return (
    <>
        <div className={`flex flex-col text-xl w-fit h-full sticky top-0 bg-healthygreen border-solid border-offwhite border-b-2 p-3`}>
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
