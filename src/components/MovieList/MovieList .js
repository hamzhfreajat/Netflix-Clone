import { useState} from 'react';
import { Container, Row} from 'react-bootstrap';
import Modale from '../ModalMovie/modale';
import Movie from '../Movie/Movie';
import './Movielist.css'

function MovieList (props){
    const [cardInfo, setCardInfo] = useState({});
    const [show,setShow] = useState(false);
    const handleClose = ()=>setShow(false);
return(
    <>
    <Container className='div-container'>
    <Row md={3} className="main">
            {
                props.data.length && props.data.map((movie) => (
                       <Movie movie={movie} key={movie.id} setCard = {setCardInfo} setShow={setShow}/> 
                ))
            }
        </Row>
    </Container>
     {
        <Modale cardInfo={cardInfo} show={show} handleClose={handleClose} />
    }
    {
                !props.data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }
    </>

)
  
}

export default MovieList; 