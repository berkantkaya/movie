import React from 'react'
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import ClipLoader from "react-spinners/ClipLoader";
export default function MoviesList({movies,deleteMovie}){
    const emptyMessage=(<div>Maalesef film bulunmamaktadır</div>);
const moviesList=(<div>
     <ClipLoader
          size={100}
          color={"#123abc"}
          loading={movies.fetching}
        />
    {movies.error.response ? <h2>errorrrr</h2> : 
    <Grid stackable columns={3}>
   { movies.movies.map(movie=><MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie}/>)}
    </Grid>}</div>);

    return (
        <div>
           {
               movies.length===0 ? emptyMessage : moviesList
           }
        </div>
    )
}
MoviesList.propTypes={
    movies:PropTypes.shape({
        movies:PropTypes.array.isRequired
    }).isRequired
}