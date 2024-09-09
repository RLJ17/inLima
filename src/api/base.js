import axios from 'axios';

const URI = 'https://api.inlima.online';
//const URI = 'http://localhost:3001';

axios.defaults.withCredentials = true;

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url, {
            withCredentials: true
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const post = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.post(url, payload, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const put = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.put(url, payload, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const remove = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.delete(url, {
            withCredentials: true
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const base = { get, post, put, remove };

export default base;
