import axios from "axios";

const api = axios.create({
    baseURL: "https://4832cfdc-5d39-41f9-847a-234198f1e94b.mock.pstmn.io",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
})

export default api;