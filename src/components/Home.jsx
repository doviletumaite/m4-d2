import MineNavbar from "./MineNavbar"
import MyFooter from "./MyFooter"
import MyCard from "./MyCard"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbotron from "./MyJumbotron"
import scifiBooks from"../json/scifi.json"

const Home = () => {
    const scifiBooksArray = scifiBooks
   
    return (
        <div>
            <MineNavbar/>
            <Container>
                <MyJumbotron/>
                <Row className="my-5">
                   
            {scifiBooksArray.map(b=>
             <Col xs={6} md={4} className="my-3">
                 <MyCard book={b}/>
                  </Col>
                 )} 
                   
                </Row>
            </Container>
            
            <MyFooter/>
        </div>
    )
}
export default Home