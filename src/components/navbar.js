import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Sorting Visualizer</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => props.onSelect('bubble')}>Bubble Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => props.onSelect('selection')}>Selection Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => props.onSelect('insertion')}>Insertion Sort</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => props.onSelect('merge')}>Merge Sort</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;