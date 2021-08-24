import {Navbar, Nav} from `react-bootstrap`
const MineNavbar = () => {
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#browse">Browse</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
}
export default MineNavbar