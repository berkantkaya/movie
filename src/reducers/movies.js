import {FETCH_MOVIES,FETCH_MOVIES_ERROR, FETCH_MOVIES_PENDING,
    DELETE_MOVIE,DELETE_MOVIE_ERROR, DELETE_MOVIE_PENDING} from '../actions/movies';
const initialState={
    fetching:false,
    movies:[],
    error:{}
}
export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                fetching:true
                
            };
        case FETCH_MOVIES:
        return {
            ...state,
            movies:action.payload,
            fetching:false
        };
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                error:action.payload,
                fetching:false
            };

            //DELETE MOVİE

            switch(action.type){
                case DELETE_MOVIE_PENDING:
                    return {
                        ...state
                        
                        
                    };
                case DELETE_MOVIE:
                return {
                    ...state,
                    movies:state.movies.filter(item=>item._id !==action.payload.id)
                   
                };
                case DELETE_MOVIE_ERROR:
                    return {
                        ...state,
                        error:action.payload
                      
                    }; }
        default:
            return state;
    }
    }