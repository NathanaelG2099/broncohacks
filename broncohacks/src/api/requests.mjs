import axios from 'axios'

export const get_clients = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/getclients`);
    if (res.status != 200)
    {
        console.error(res.statusText);
    }

    return {success: res.status == 200, clients: res.data.clients};
}