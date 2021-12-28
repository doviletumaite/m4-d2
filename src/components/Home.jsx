import MineNavbar from "./MineNavbar"
import MyFooter from "./MyFooter"
import MyCard from "./MyCard"
import { Container, Row, Col, DropdownButton,Dropdown, InputGroup, Jumbotron, FormControl} from "react-bootstrap"
import { useEffect } from "react"
import { useState } from "react"
import scifi from "../json/scifi.json"
import fantasy from "../json/fantasy.json"
import history from "../json/history.json"
import horror from "../json/horror.json"
import romance from "../json/romance.json"

const Home = () => {
    const [bookArray, setBookArray] = useState([])
    useEffect(() => {
    setBookArray(scifi)
    }, [])
    
    const [scifiArray, setScifiArray] = useState([])
    const [fantasyArray, setFantasyArray] = useState([])
    const [historyArray, setHistoryArray] = useState([])
    const [horrorArray, setHorrorArray] = useState([])
    const [romanceArray, setRomanceArray] = useState([])
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
    setScifiArray(scifi)
    setFantasyArray(fantasy)
    setHistoryArray(history)
    setHorrorArray(horror)
    setRomanceArray(romance)
    console.log("array",scifiArray)
    }, [])
   
    const [query, setQuery] = useState("")
    
    const handleQuery = (e) => {
        setQuery(e.target.value)
        console.log("query", query)
        const result = scifiArray.filter(b=>b.toLowerCase().includes(query.toLowerCase()) )
        console.log("result", searchResult)
          setSearchResult(result)
    }
    return (
        <div>
            <MineNavbar/>
            <Container>
            <Jumbotron fluid className="my-5">
  <Container>
    <h1>Strive Books</h1>
    <p>
    Find out your next book
    </p>
    <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="choose a catagory"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Scifi</Dropdown.Item>
      <Dropdown.Item href="#">Fantasy</Dropdown.Item>
      <Dropdown.Item href="#">History</Dropdown.Item>
      <Dropdown.Item href="#">Horror</Dropdown.Item>
      <Dropdown.Item href="#">Romance</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" value={query} onChange={(e)=>handleQuery(e)}/>
  </InputGroup>
  </Container>
</Jumbotron>
                <Row className="my-5">
                {searchResult ? searchResult.map(b=>
             <Col xs={6} md={4} className="my-3">
                 <MyCard book={b}/>
                  </Col>
                 ) : (<></>)}      
            {bookArray.map(b=>
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