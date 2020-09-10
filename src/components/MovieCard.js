import React from 'react';
import { Card, Icon, Image,Grid,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
 const extra=(movie,deleteMovie)=>{
   return(
  <div className='animateded'>
  <Button animated as={Link} to={`/movie/${movie._id}`}>
    <Button.Content visible>EDİT</Button.Content>
    <Button.Content hidden>
      <Icon name='arrow right' />
    </Button.Content>
  </Button>
  <Button animated='vertical' onClick={()=>deleteMovie(movie._id)}>
    <Button.Content hidden>DELETE</Button.Content>
    <Button.Content visible>
      <Icon name='trash' />
    </Button.Content>
    </Button>
    </div>
 );};
const MovieCard = ({movie,deleteMovie}) => (
    <Grid.Column>
  <Card  color='blue'>
    <Image src={movie.cover} />
    <Card.Content >
      <Card.Header>{movie.title}</Card.Header>
      
    </Card.Content>
    {extra(movie,deleteMovie)}
  </Card>
  </Grid.Column>
)

export default MovieCard
