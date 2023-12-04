import axios from "axios"

const backend = "http://localhost:5000"

const adminLogin = async (pass) => {
    try {
        await axios.post(`${backend}/adminlogin`, { "password": pass }, {
            headers: {
                "Content-Type": 'application/json'
            }, 
        });
        console.log("AdminLoginSuccess")
        return true;
    } catch(e) {
        console.log(e)
        return false;
    }
}

const userLogin = async(user, pass) => {
    try {
        let resp = await axios.post(`${backend}/userlogin`, { "email": user, "password": pass}, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        console.log("UserLoginSuccess", resp.data['cid'])
        return resp.data['cid']
    } catch(e) {
        return -1;
    }
}

const newuser = async(data) => {
    try {
        let resp = await axios.post(`${backend}/add_user`, data, {
            headers: {
                "Content-Type": 'application/json'
            }
        })

        console.log(resp.data['cid'])
        return resp.data['cid']
    } catch(e) {
        return -1;
    }
}

export { userLogin, adminLogin, newuser }