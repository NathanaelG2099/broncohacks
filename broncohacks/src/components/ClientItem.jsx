function ClientItem(props) {
    return (
    <div className="flex rounded-md m-1 bg-healthygreen text-white font-bold p-3 text-left">
        <div className="w-full">
            {props.name}
        </div>
        <a href="/client?id=blahblabla" className="flex justify-end">View</a>
    </div>
    )
}

export default ClientItem;