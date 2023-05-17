import apiAxios from "../axios/apiAxios"

// This file should contains function who return elements in Firebase
export const getContacts = async () =>{
    const res = await apiAxios.get() // Get JSON of contacts
    return res.data
}

// export 