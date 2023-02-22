import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { post_movie } from '../redux/Action/MoviesAction';

const Addmovie = ({setData,Data}) => {
const dispatch=useDispatch()
const [id,setId]=useState(Math.random())
const [name, setName] = useState('')
const [rating,setRating]=useState('')
const [image, setImage] = useState('')
const [date,setDate]=useState("")
const [type,setType]=useState("")
const [description,setDes]=useState("")    

const handlePost=()=>{
  dispatch(post_movie({id,image,rating,name,type,date,description}),handleClose())
}
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <div><Button variant="primary" onClick={handleShow}>
    Add movie
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body> <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>name</Form.Label>
      <Form.Control  type="text"  name="name" placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>type</Form.Label>
    <Form.Control  type="text"   placeholder="Enter type" onChange={e=>setType(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>description</Form.Label>
  <Form.Control  type="text"   placeholder="Enter description" onChange={e=>setDes(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>rating</Form.Label>
<Form.Control  type="Number"  name="name" placeholder="Enter rating" onChange={e=>setRating(e.target.value)}/>
</Form.Group>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>image</Form.Label>
  <Form.Control type="text" name="image" placeholder="Enter image url" onChange={e=>setImage(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>date</Form.Label>
<Form.Control  type="Date" placeholder="Enter date" onChange={e=>setDate(e.target.value)}/>
</Form.Group>
   
  </Form></Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handlePost} >
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default Addmovie