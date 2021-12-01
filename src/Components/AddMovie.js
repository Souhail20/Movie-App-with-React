import React, {useState} from 'react';
import Modal from 'react-modal';
import { InputGroup , FormControl, Button, Nav, Form} from 'react-bootstrap'

const AddMovie = ({addMovie}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
   const [name, setName] = useState('')
   const [image, setImage] = useState('')
   const [rating, setRating] = useState(0)
   const [description, setDescription] = useState('')
   function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleAddMovie= () =>{
    let newMovie ={
      Title:name,
      rating,
      image,
      description,
    };
    addMovie(newMovie)
    setIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDescription('');
  }

  return (
    <div className='add-btn-container'>
      <Nav>
      <Button className='Add-btn'  variant="outline-primary" onClick={openModal} >Add Movie</Button>
      <Modal
        className='add-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >      
        <Button  onClick={closeModal} variant="outline-primary" className='AddMovie-h3' >close</Button>   
        <Button onClick={handleAddMovie} variant="outline-primary" className='AddMovie-h2'>Add Movie</Button>   
        <InputGroup className="mb-3">
            <InputGroup.Text 
            id="inputGroup-sizing-default"
            >Enter Movie title</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setName(e.target.value)}               
              />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Enter Movie Rating</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setRating(e.target.value)}           
              />
            </InputGroup>
             <br />
             <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">Enter Movie PosterURL</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setImage(e.target.value)}              
              />
            </InputGroup>
             <br />
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Enter Movie Description</Form.Label>
               <Form.Control  as="textarea" rows={3} onChange ={(e) => setDescription(e.target.value)} />
             </Form.Group>      
      </Modal>
      </Nav>
    </div>
  );
}
export default AddMovie ;