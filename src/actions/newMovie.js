import axios from 'axios';
import {API_BASE} from '../config/env';
import newMovie from '../reducers/newMovie';
export const NEW_MOVIE ='NEW_MOVIE';
export const NEW_MOVIE_ERROR ='NEW_MOVIE_ERROR';
export const NEW_MOVIE_PENDING ='NEW_MOVIE_PENDING';
export const FETCH_MOVIE ='FETCH_MOVIE';
export const FETCH_MOVIE_ERROR ='FETCH_MOVIE_ERROR';
export const FETCH_MOVIE_PENDING ='FETCH_MOVIES_PENDING';
export function onNewMovieSubmit({title,cover}) {
   return dispatch=>{
       axios.post(`${API_BASE}/movies`,{
           title,
           cover
       })
       .then(result=>result.data)
       .then(data=>dispatch({
           type:NEW_MOVIE,
           payload:data.movies
       }))
       .catch(error=>dispatch({
        type:NEW_MOVIE_ERROR,
        payload:error
       }))
    }
}
export function fetchMovie(id) {
    return dispatch=>{
        axios.get(`${API_BASE}/movies/${id}`)
        .then(result=>result.data)
        .then(data=>dispatch({
            type:FETCH_MOVIE,
            payload:data.movies
        }))
        .catch(error=>dispatch({
         type:FETCH_MOVIE_ERROR,
         payload:error
        }))
     }
 }