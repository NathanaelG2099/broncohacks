import { useState } from "react";
import { useEffect } from "react";
import ClientItem from "./ClientItem";

// TODO: Get data from a database
// Returns mock client data
const get_clients = () => {
    var clients_json = [];
    
    for (let i = 0; i < 50; i++)
    {
        clients_json.push({client_id: i, name: `Client number ${i + 1}`} );
    }

    return clients_json;
}

function ClientsList() {
    const [loadedClients, setLoadedClients] = useState([]);
    
    useEffect(() => {
        let loaded_clients = get_clients();
        console.log(loaded_clients);
        setLoadedClients(loaded_clients);
    }, [])
    
    return (
    <>
        <ol className="ml-1 mr-1 mb-4">
            {
                loadedClients.map((item, index) => {
                    return <ClientItem key={item.client_id} name={item.name}></ClientItem>
                })
            }
        </ol>
    </>
    )
}

export default ClientsList