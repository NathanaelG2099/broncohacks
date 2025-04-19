import { useParams } from "react-router-dom";

function ViewClientPage(props) {
    const { id } = useParams();
    
    return (
            <div className="justify-center h-screen w-full ml-6 mr-6 p-1">
                <div className='flex'>
                    <div className="text-left text-2xl m-3">{`ID ${id}`}</div>
                </div>
                <ol className="ml-1 mr-1 mb-4 w-full h-[50%] border-3 border-r-0 border-secondary-green custom-scrollbar rounded-sm max-h-full overflow-y-scroll">
                    {
                        loadSuccess ? 
                        loadedClients.map((item, index) => {
                            return <ClientItem key={item.client_id} status="loaded" client_id={item.client_id} name={item.name}></ClientItem>
                        }) : 
                        <ClientItem status="loading" client_id={-1}></ClientItem>
                    }
                </ol>
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

export default ViewClientPage;