import {NEW_MOVIE,NEW_MOVIE_ERROR, NEW_MOVIE_PENDING,FETCH_MOVIE,FETCH_MOVIE_ERROR, FETCH_MOVIE_PENDING} from '../actions/newMovie';

const initialState={
    fetching:false,
    done:false,
    error:{},
    movie:{}
}
export default (state=initialState,action)=>{
    switch(action.type){
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching:true
                
            };
        case NEW_MOVIE:
        return {
            ...state,
            movies:action.payload,
            done:true,
            fetching:false
        };
        case NEW_MOVIE_ERROR:
            return {
                ...state,
                error:action.payload,
                fetching:false
            };

            //FETCH MOVİE
            case FETCH_MOVIE_PENDING:
                return {
                    ...state,
                   
                    
                };
            case FETCH_MOVIE:
            return {
                ...state,
                movie:action.payload.movie
              
            };
            case FETCH_MOVIE_ERROR:
                return {
                    ...state,
                    
                };
        default:
            return state;
    }
}