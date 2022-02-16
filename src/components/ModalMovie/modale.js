import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';


function Modale({cardInfo, show, handleClose}) {
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${cardInfo.poster_path}`} alt={cardInfo.title}/>
                    <h3>{cardInfo.title}</h3>
                    <div>
                        <p>{cardInfo.overview}</p>
                        <label htmlFor="op">Write Your Opinion :</label>
                        <input placeholder="Write Your Opinion" type="text" id="op" className='modal-input' />
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-bottom">
                    <Button variant="danger"> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modale;