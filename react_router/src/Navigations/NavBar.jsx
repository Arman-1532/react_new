import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <nav>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/login"><li>LogIn</li></Link>
            </nav>
        </div>
    )
}

export default NavBar;