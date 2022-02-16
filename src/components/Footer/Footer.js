import './Footer.css';

function Footer(){
    return(
        <div className="footer">
               <div className="top-footer">
                    <h3>Ready to get started?</h3>
                    <p>Unlimited movies, TV shows, and more.Enjoy on your TV.
Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <a href='#'>Lets Go</a>
               </div>
               <div className="bottom-footer">
                    <div className="container">
                        <div id="footer-logo">
                            <div className="logo">
                                <h5>NETFLIX</h5>
                            </div>
                        </div>
                        <div className="footer-copyright">
                            &copy; 2022 By Hamza Fraijat
                        </div>
                        <div className="footer-socail-media">
                            <ul>
                                <li><a href="https://web.facebook.com/">facebook</a></li>
                                <li><a href="https://www.instagram.com/">instagram</a></li>
                                <li><a href="https://twitter.com/">twitter</a></li>
                            </ul>
                        </div>
                    </div>
               </div>
        </div>
    )
}

export default Footer; 