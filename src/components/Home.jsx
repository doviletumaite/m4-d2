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
    }, [])
   
    const [query, setQuery] = useState("")
     const [selectedGenre, setSelectedGenre] = useState([])
    const selectGenre = (e) =>{
      setSelectedGenre([e])
      console.log("selected genre", selectedGenre)
    }
    
    const handleQuery = (e) => {
        setQuery(e.target.value)
        const result = selectedGenre[0].filter(b=>b.title.toLowerCase().includes(query.toLowerCase()) )
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
      title="chose a catagory"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item onClick={(e)=>selectGenre(scifiArray)}>Scifi</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>selectGenre(fantasyArray)}>Fantasy</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>selectGenre(historyArray)}>History</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>selectGenre(horrorArray)}>Horror</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>selectGenre(romanceArray)}>Romance</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" value={query} onChange={(e)=>handleQuery(e)}/>
  </InputGroup>
  </Container>
</Jumbotron>
                <Row className="my-5">

                {searchResult ? searchResult.map(b=>
                <Row className="my-5">
             <Col xs={6} md={4} className="my-3">
                 <MyCard book={b}/>
                  </Col>
                  </Row>
                 ) : (<></>)}  
                 

                  {selectedGenre ? selectedGenre[0].map(b=>
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