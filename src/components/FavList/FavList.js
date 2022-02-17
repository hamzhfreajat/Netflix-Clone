import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import './FavList.css';
import UpdateModal from './UpdateModal/UpdateModal'


function FavList(){
    const [data, setData] = useState([]);
    const [show,setShow] = useState(false);
    const [ele,setEle] = useState({});
    const [title,setTitleInput] = useState("");
    const [image,setImageInput] = useState("");
    const [comment,setCommentInput] = useState("");

    const handleClose = ()=> setShow(false);

    const getFavRecipes = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        return await axios.get('https://hamzhapp.herokuapp.com/getMovies')
            .then(result => {
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
         getFavRecipes();
    },[]);


    const deleteFromFav = async(id) =>{
        await axios.delete(`https://hamzhapp.herokuapp.com/DELETE/${id}`)
                   .then(()=>{
                      getFavRecipes();
                   }).catch((err)=>{
                       console.log(err);
                   })
    } 

    return (
        <>
        <Container className='div-container'>
        <Row md={3}>
            {
                data.length && data.map((ele) => (
                    <Col key={ele.id} md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${ele.movies_path}`} />
                            <Card.Body>
                                    <Card.Title>{ele.title}</Card.Title>
                                    <Card.Text>{ele.overview}</Card.Text>
                                    <Button className='div-card-button' variant="primary"
                                                           onClick={()=>{
                                                                setShow(true)
                                                                setEle(ele);
                                                                setTitleInput(ele.title);
                                                                setCommentInput(ele.comment);
                                                                setImageInput(ele.movies_path);
                                                            }}
                                                        >Update</Button>
                                                        <Button className='div-card-button' variant="danger" 
                                                          onClick={()=>deleteFromFav(ele.id)}
                                                        >Delete</Button>
                                </Card.Body>    
                               
                           
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>

    {
        !data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }

    {
      <UpdateModal show={show} handleClose={handleClose} ele={ele} getFavRecipes={getFavRecipes}  
      titleInput={title}
      setTitleInput= {setTitleInput}
      imageInput ={image}
      setImageInput = {setImageInput}
      commentInput = {comment}
      setCommentInput ={setCommentInput}
      /> 
    }

</>
    )
}

export default FavList; 