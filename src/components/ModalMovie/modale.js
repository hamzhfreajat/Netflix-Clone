import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {useRef} from 'react';

function Modale({cardInfo, show, handleClose}) {
    const commentInputRef = useRef("");
    const addToFav = async ()=>{
        let comment = commentInputRef.current.value;
        console.log(comment); 
       let favorite = {title:cardInfo.title, movies_path:cardInfo.poster_path, overview:cardInfo.overview,comment:comment}
      
       await axios.post('https://hamzhapp.herokuapp.com/addMovie',favorite)
                  .then(()=>{
                      console.log("Complete :) ");
                  }).catch((err)=>{
                      console.log(err);
                  });
  
   }
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
                        <input placeholder="Write Your Opinion" ref={commentInputRef} type="text" id="op" className='modal-input' />
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-bottom">
                    <Button variant="danger" onClick={()=>{
                        addToFav();
                        handleClose();
                    }}> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modale;