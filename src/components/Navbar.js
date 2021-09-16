import logo from '../assets/mon_logo.png';

function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} alt='mon logo'/>
            </nav>
        </header>
    )
}

export default Navbar