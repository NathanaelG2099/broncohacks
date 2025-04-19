import ClientsList from "./ClientsList";

function ClientItem(props) {
    return (
        <div className={`justify-center h-[50vh] w-full ml-6 mr-6 p-1`}>
            <div className='flex'>
                <div className="text-left text-2xl m-3">View Clients</div>
            </div>
            <ClientsList></ClientsList>
            <div>Add Client Section</div>
        </div>
    )
}

export default ClientItem;