import {Fragment} from "react";
import {Link} from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <Fragment>
            <header className="nav__list">
                <Link to="/" className="nav__elements">First</Link>
                <Link to="/second" className="nav__elements">Second</Link>
            </header>
        </Fragment>
    )
}

export default Nav;