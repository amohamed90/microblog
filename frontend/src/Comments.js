import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'reactstrap';

function Comments({ comments, add, remove }) {

  const { id } = useParams();
  const [formData, setFormData] = useState({text: ""});

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    add(id, formData);
    setFormData({text: ""});
  }

  return (
    <div className="Comments">
      <h3>Comments</h3>
      {comments.map(comment => {
        return (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <Button onClick={()=> remove(id, comment.id)}>
              <i className="far fa-trash-alt"></i>
            </Button>
          </div>
        )
      })}
    <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="text"
                 id="text"
                 name="text"
                 value={formData.text}
                 placeholder= "New Comment"
                 onChange={handleChange} />
        </FormGroup>
        <Button color='primary' type='submit'>Save</Button>
    </Form>
    </div>
  )
}

export default Comments;