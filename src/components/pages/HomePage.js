import React, { Component } from 'react'
import ActorList from '../ActorList';
export default class HomePage extends Component {
    state={
   actors:[{
       name:'Marlon Brando',
       description:"Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem",
       photo:"https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY317_CR97,0,214,317_AL_.jpg"
   },
   {
    name:' Robert De Niro',
    description:"One of the greatest actors of all time, Robert De Niro was born on August 17, 1943 in Manhattan, New York City, to artists Virginia (Admiral) and Robert De Niro Sr. His paternal grandfather was of Italian descent",
    photo:"https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg"
},
{
    name:' Al Pacino',
    description:"Alfredo James Al 'Pacino established himself as a film actor during one of cinema's most vibrant decades, the 1970s, and has become an enduring and iconic figure in the world of American movies.",
    photo:"https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg"
}]
    };
    render() {
        return (
            <div>
                <ActorList actors={this.state.actors}/>
            </div>
        );
    }
}
