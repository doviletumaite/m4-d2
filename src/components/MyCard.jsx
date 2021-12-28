import { Button, Card } from "react-bootstrap"

const MyCard = ({book:b}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b.img} />
  <Card.Body>
    <Card.Title>{b.title}</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary">details</Button>
  </Card.Body>
</Card>
        </div>
    )
}
export default MyCard