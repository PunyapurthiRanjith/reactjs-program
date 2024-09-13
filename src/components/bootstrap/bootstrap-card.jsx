import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CustomCard({title,text,removeHandler,ind}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={()=>removeHandler(ind)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;