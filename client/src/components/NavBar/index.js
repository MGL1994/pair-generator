import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = ({ history }) => {
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink className="home-link navbar-item" to="/">Home</NavLink>
                    <NavLink activeClassName="active" className="navbar-item" to="/groups">Groups</NavLink>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <button className="button" onClick={history.goBack}>Back</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(NavBar);