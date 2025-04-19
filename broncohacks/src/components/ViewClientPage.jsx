import { useParams } from "react-router-dom";
import { add_blocked_site, get_client_from_id } from "../api/requests.mjs";
import { useEffect, useState } from "react";


function ViewClientPage(props) {
    const { code } = useParams();
    const [client, setClient] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        console.log(inputValue)

        add_blocked_site(code, inputValue);
    }

    useEffect(() => {
        setLoaded(false);
        get_client_from_id(code).then((fetch_client) => {
            if (fetch_client.success)
            {  
                console.log(fetch_client.client);
                setClient(fetch_client.client);
                setLoaded(true)
            }
        });
    }, [])

    return (<div className="justify-center h-screen w-full ml-6 mr-6 p-1">
        <div className='flex'>
            <div className="text-left text-2xl m-3">{`${client.name} ${code}`}</div>
        </div>
        <ol className="ml-1 p-1 mr-1 mb-4 w-full h-[50%] border-3 border-r-0 border-secondary-green custom-scrollbar rounded-sm max-h-full overflow-y-scroll">
            {loaded ? client.content_locks.fullBlock.map((item, index) => {
                return <li key={0}>{item}</li>
            }) : null}
        </ol>
        <div className="border-3 rounded-sm m-1 p-3 border-secondary-green">
            <div className="text-left text-2xl mb-2">Add a Website</div>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input className="bg-healthygreen rounded-sm p-1" type="text" placeholder="URL..." onChange={(e) => setInputValue(e.target.value)}></input>
                <button className="bg-secondary-green p-1" type="submit">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default ViewClientPage;