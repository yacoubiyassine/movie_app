import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { delete_movie, edit_movie } from '../redux/Action/MoviesAction';
import Form from 'react-bootstrap/Form';
function MovieCard({el}) {
  const [id,setId]=useState(el.id)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [name, setName] = useState(el.name)
const [rating,setRating]=useState(el.rating)
const [image, setImage] = useState(el.image)
const [date,setDate]=useState(el.date)
const [type,setType]=useState(el.type)
const [description,setDes]=useState(el.description)  
  const dispatch=useDispatch()
const handleEdit=()=>{
  dispatch(edit_movie(id,{id,image,rating,name,type,date,description}))
}
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.info}
        </Card.Text>
        <Button variant="danger" onClick={()=>dispatch(delete_movie(el.id))} >Delete</Button>
        <Button variant="warning" onClick={handleShow}>
   Edit
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body> <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>name</Form.Label>
      <Form.Control  type="text"  name="name" placeholder="Enter name" value={name} onChange={e=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>type</Form.Label>
    <Form.Control  type="text"   placeholder="Enter type" value={type} onChange={e=>setType(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>description</Form.Label>
  <Form.Control  type="text"   placeholder="Enter description" value={description} onChange={e=>setDes(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>rating</Form.Label>
<Form.Control  type="Number"  name="name" placeholder="Enter rating" value={rating} onChange={e=>setRating(e.target.value)}/>
</Form.Group>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>image</Form.Label>
  <Form.Control type="text" name="image" placeholder="Enter image url" value={image} onChange={e=>setImage(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>date</Form.Label>
<Form.Control  type="text" placeholder="Enter date" value={date} onChange={e=>setDate(e.target.value)}/>
</Form.Group>
   
  </Form></Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleEdit}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;