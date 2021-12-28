import { Container, DropdownButton,Dropdown, InputGroup, Jumbotron, FormControl } from "react-bootstrap"

const MyJumbotron = () => {
    return(
        <div>
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
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>
  </Container>
</Jumbotron>
        </div>
    )
}
export default MyJumbotron