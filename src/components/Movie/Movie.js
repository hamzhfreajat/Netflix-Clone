import { Button,Card, Col } from 'react-bootstrap';

function Movie(props){
    let movie = props.movie; 
    return(
        <Col md={3}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {movie.overview}
                </Card.Text>
                <Button variant="danger" onClick={()=>{props.setCard(movie);props.setShow(true)} } >Add to Favorite</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Movie; 