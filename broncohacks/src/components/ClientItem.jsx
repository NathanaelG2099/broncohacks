function ClientItem(props) {
    let client_loading = props.status == "loading";
    
    return (
    <div className={`flex rounded-md m-1 ${client_loading ? "bg-secondary-green animate-pulse" : "bg-healthygreen"} text-white font-bold p-3 text-left`}>
        <div className="w-full">
            {client_loading ? '...' : props.name}
        </div>
        {client_loading ? null : <a href={`/client/${props.client_id}`} className="flex justify-end">View</a>}
    </div>
    )
}

export default ClientItem;