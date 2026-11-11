const API_URL = "http://localhost:3000";

export const fetchApi = async (record, method, id, data) => {
    let url = `${API_URL}/${record}`;

    if (method === "PATCH" || method === "DELETE") {
        url += `/${id}`;
    }

    const options = {
        method
    };

    if (method === "POST" || method === "PATCH") {
        options.headers = {
            "Content-Type": "application/json"
        };

        options.body = JSON.stringify(data);
    }

    const res = await fetch(url, options);

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    // DELETE might not return JSON
    if (method === "DELETE") {
        return true;
    }

    return await res.json();
};