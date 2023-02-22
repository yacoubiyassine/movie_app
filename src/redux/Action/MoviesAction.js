import { DELETE_MOVIE, EDIT_MOVIE, POST_MOVIE } from "../ActionType/MovieTypes"

export const post_movie=(data)=>{
    return({type:POST_MOVIE,payload:data})
}
export const delete_movie=(id)=>{
    return({type:DELETE_MOVIE,payload:id})
}
export const edit_movie=(id,data)=>{
    return({type:EDIT_MOVIE,payload:{id,data}})
}