import React from 'react';

const Header = () => {
    document.addEventListener('contextmenu', event => event.preventDefault());

    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <a className="navbar-brand" href="/">
            <img src="../../logowhite.svg"  className="d-inline-block align-top" alt=""/>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/home">HOME <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/screens">OUR SCREENS <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/schedule">SCHEDULE <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/Library">MOVIE LIBRARY <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/contact">LOCATION & CONTACT <span className="sr-only">(current)</span></a>
                </li>
            
            </ul>
        </div>
    </nav>
  )
}

export default Header