import ClientsList from "./ClientsList";

function ClientItem(props) {
    return (
        <div className={`justify-center h-[50vh] w-full ml-6 mr-6 p-1`}>
            <div className='flex'>
                <div className="text-left text-2xl m-3">View Clients</div>
            </div>
            <ClientsList></ClientsList>
            <div className="border-3 rounded-sm m-1 p-3 border-secondary-green">
                <div className="text-left text-2xl mb-2">Connect With a Client</div>
                <form className="flex flex-col space-y-4">
                    <input className="bg-healthygreen rounded-sm p-1" type="text" placeholder="Client Name..."></input>
                    <input className="bg-healthygreen rounded-sm p-1"type="text" placeholder="Client Code..."></input>
                    <button className="bg-secondary-green p-1" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ClientItem;