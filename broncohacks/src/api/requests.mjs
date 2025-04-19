import axios from 'axios'

export const get_clients = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/getclients`);
    if (res.status != 200)
    {
        console.error(res.statusText);
    }

    return {success: res.status == 200, clients: res.data.clients};
}

export const get_client_from_id = async (code) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/id`, {
        code: code
    });

    if (res.status != 200)
    {
        console.error(res.statusText);
        return null;
    }

    return {success: res.status == 200, client: res.data.client};
}

export const add_blocked_site = async (code, url) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/add`, {
        code: code, 
        url: url
    });
}