import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import './UpdateModal.css'

function UpdateModal( {show,handleClose,ele,getFavRecipes, titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    commentInput,
    setCommentInput}){    

    const update = async(id)=>{

        let updated = {title:titleInput,movies_path:imageInput,overview:ele.overview,comment:commentInput}
        
      await axios.put(`https://hamzhapp.herokuapp.com/Update/${id}`,updated)
                  .then(()=>{
                    getFavRecipes();
                  }).catch(err=>{
                      console.log(err);
                  })
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>Edite Title</p>
                        <input value={titleInput} 
                         onChange={(e) => setTitleInput(e.target.value)} className="update-modal-input"
                        />
                        <p style={{ "marginTop": "10px" }}>Edit Image</p>
                        <input value={imageInput} 
                            onChange={(e) => setImageInput(e.target.value)} className="update-modal-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <textarea value={commentInput} 
                            onChange={(e) => setCommentInput(e.target.value)} 
                        placeholder="Write Your Opinion" type="text" id="op" 
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"
                     onClick={()=>{
                        update(ele.id);
                        handleClose();
                     }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;






