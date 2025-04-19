function ClientItem(props) {
    let client_loading = props.status == "loading";
    
    return (
    <div className={`flex rounded-md m-1 ${client_loading ? "bg-secondary-green animate-pulse" : "bg-healthygreen"} text-white font-bold p-3 text-left`}>
        {client_loading ? '...' : <div className="flex w-full justify-between">
            <div className="flex space-x-2">
                <span>{props.name}</span>
                <span>{props.code}</span>
            </div>
            <a href={`/client/${props.id}`} className="flex justify-end">View</a>
        </div>}
    </div>
    )
}

export default ClientItem;