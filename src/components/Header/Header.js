import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import './Header.css'; 

function Header(){
    return (
        <header className="main-header shadow">
             <div className="top-header">
                    <div className='container top-header-wrapper'>
                        <div className="logo header-logo">
                            <h5>NETFLIX</h5>
                        </div>
                        <nav className="header-nav">
                                <ul className="nav-list">
                                    <li className="nav-item nav-item-sign active"><Link to='/'>  Home </Link></li>
                                    <li className="nav-item nav-item-sign active"><a href="#" className="nav-link">Sign Up</a></li>
                                    <li className="nav-item nav-item-start"><a href="#" className="nav-link get-start-link">Get Started</a></li>
                                </ul>
                        </nav>
                    </div>
                    
                </div>
        </header>  
    );
}

export default Header; 