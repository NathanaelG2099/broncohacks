import ClientsList from "./ClientsList";

function ClientItem(props) {
    return (
        <div className={`justify-center ml-6 mr-6 p-1`}>
            <div className='flex'>
                <div className="text-left text-2xl m-3">View Clients</div>
                <a href="/newclient" className="text-l p-1 text-center rounded-lg bg-healthygreen m-3">Add Client</a>
            </div>
            <ClientsList></ClientsList>
        </div>
    )
}

export default ClientItem;