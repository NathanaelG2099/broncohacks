import { useState } from "react";
import { useEffect } from "react";
import ClientItem from "./ClientItem";
import { get_clients } from "../api/requests.mjs";

function ClientsList() {
    const [loadedClients, setLoadedClients] = useState([]);
    const [loadSuccess, setLoadSuccess] = useState(false);
    
    useEffect(() => {
        get_clients().then((loaded_clients) => {
            console.log(loadedClients);
            if (loaded_clients.success)
            {
                setLoadSuccess(true);
                setLoadedClients(loaded_clients.clients);
            }   
        })
    }, [])
    
    return (
    <>
        <ol className="ml-1 mr-1 mb-4 w-full border-3 border-r-0 border-secondary-green custom-scrollbar rounded-sm max-h-full overflow-y-scroll">
            {
                loadSuccess ? 
                loadedClients.map((item, index) => {
                    return <ClientItem key={item.client_id} status="loaded" client_id={item.client_id} name={item.name}></ClientItem>
                }) : 
                <ClientItem status="loading" client_id={-1}></ClientItem>
            }
        </ol>
    </>
    )
}

export default ClientsList