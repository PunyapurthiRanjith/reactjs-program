import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ItemCard({cardWidth,cardHeight,title,rating,reviewCount,imageUrl,category,description,buttonText}) {
  return (
    <Card style={{height:{cardHeight}, width: {cardWidth} }} >
      <Card.Img variant="top" src={imageUrl} height={"250px"} style={{padding:"20px"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {category}
        </Card.Text>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {rating}
        </Card.Text>
        <Card.Text>
          {reviewCount}
        </Card.Text>
        <Button variant="dark" >{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;