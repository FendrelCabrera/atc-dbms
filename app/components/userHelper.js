import axios from "axios"

const backend = "http://localhost:5000"

const getAirports = async () => {
    try { 
        let resp = await axios.get(`${backend}/get_airports`)
        return Object.entries(resp.data)
    } catch(e) {
        console.log(e)
        return [];
    }
}

export { getAirports }