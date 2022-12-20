import axios from "axios";

export const logiN = (login, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/user/login', {
                login,
                password
            })
            console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}