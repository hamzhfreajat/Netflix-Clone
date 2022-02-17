import './Header.css'; 
import Navbar from '../Navbar/Navbar';

function Header(){
    return (
        <header className="main-header shadow">
             <div className="top-header">
                    <div className='container top-header-wrapper'>
                        <div className="logo header-logo">
                            <h5>NETFLIX</h5>
                        </div>
                        <Navbar  />
                    </div>
                    
                </div>
        </header>  
    );
}

export default Header; 