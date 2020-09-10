import axios from 'axios';
import {API_BASE} from '../config/env';
import movies from '../reducers/movies';
export const FETCH_MOVIES ='FETCH_MOVIES';
export const FETCH_MOVIES_ERROR ='FETCH_MOVIES_ERROR';
export const FETCH_MOVIES_PENDING ='FETCH_MOVIES_PENDING';

export const DELETE_MOVIE ='DELETE_MOVIE';
export const DELETE_MOVIE_ERROR ='DELETE_MOVIE_ERROR';
export const DELETE_MOVIE_PENDING ='DELETE_MOVIE_PENDING'
export function fetchMovies() {
   return dispatch=>{
       axios.get(`${API_BASE}/movies`)
       .then(result=>result.data)
       .then(data=>dispatch({
           type:FETCH_MOVIES,
           payload:data.movies
       }))
       .catch(error=>dispatch({
        type:FETCH_MOVIES_ERROR,
        payload:error
       }))
    }
}
export function deleteMovie(id) {
    return dispatch=>{
        axios.delete(`${API_BASE}/movies/${id}`)
        .then(result=>result.data)
        .then(data=>dispatch({
            type:DELETE_MOVIE,
            payload:data.movies
        }))
        .catch(error=>dispatch({
         type:DELETE_MOVIE_ERROR,
         payload:error
        }))
        .then(result=>Object.assign({},result,{ id }))
     }
 }