import logo from '../assets/mon_logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import '../styles/navbar.css'

function Navigation() {
    return (
            <Navbar className='navbar-bg' expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='mr-5'>
                        <img src={logo} className='img-fluid mon-logo' alt='logo grandvaux clement'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="#home" className='text-white ml-5'>A propos</Nav.Link>
                            <Nav.Link href="#link" className='text-white ml-5'>Mes services</Nav.Link>
                            <Nav.Link href="#projets" className='text-white ml-2'>Mes projets</Nav.Link>
                            <Nav.Link href="#contact" className='text-white ml-2'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navigation