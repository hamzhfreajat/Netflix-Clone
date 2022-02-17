import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="header-nav">
                                <ul className="nav-list">
                                    <li className="nav-item nav-item-sign active"><Link to='/'>  Home </Link></li>
                                    <li className="nav-item nav-item-sign active"><Link to='/favorite '>  Favorite </Link></li>
                                    <li className="nav-item nav-item-sign active"><a href="#" className="nav-link">Sign Up</a></li>
                                    <li className="nav-item nav-item-start"><a href="#" className="nav-link get-start-link">Get Started</a></li>
                                </ul>
        </nav>
    )
}

export default Navbar; 