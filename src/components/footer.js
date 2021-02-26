import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = (props) => {
    return (
        <div className="navbar navbar-expand bg-light fixed-bottom">
            <div className="container">
                <ul className="navbar-nav d-flex justify-content-around" style={{ width: '100%' }}>
                    <li className="nav-item">
                        <a className="nav-link btn btn-dark btn-block" href="#" onClick={() => props.onGenerate()}>Generate New Array</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link btn btn-dark btn-block" href="#" onClick={() => props.onSort()}>Sort</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;