import React from 'react';
import {Link} from 'react-router-dom';
import {useMedia} from 'react-media';
import {MenuItems} from './MenuItems';
import {DropdownItems} from './MenuItems';
import './Navbar.css';

class Navbar extends React.Component {
    state = {menu: false, dropdown: false}

    handleMenu = () => {
        this.setState({menu: !this.state.menu})
        this.setState({dropdown: false})
    }
    handleDropdown = () => {
        this.setState({dropdown: !this.state.dropdown})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-title">Joe Tomlinson</h1>
                <div className="menu-icon" onClick={this.handleMenu}>
                    <i className={this.state.menu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.menu ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className='link' to={item.url} onClick={this.handleMenu}>
                                    <span className={item.cName}>
                                         {item.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className='nav-links' onClick={this.handleDropdown} style={{cursor: 'pointer'}}>
                        <span>Projects {'\u00A0'}<i className={this.state.dropdown ? 'fas fa-angle-down' : 'fas fa-angle-right'}></i></span>
                    </li>
                    <div className={this.state.dropdown ? 'dropdown active' : 'dropdown'}>
                        {DropdownItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link className='link' to={item.url} onClick={this.handleMenu}>
                                        <span className={item.cName}>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </nav>
        )
    }
}

export default Navbar