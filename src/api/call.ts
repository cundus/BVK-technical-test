import API from "./config"

export const getAllCats = async () =>{
        const {data} = await API.get('breeds')

        return data
}