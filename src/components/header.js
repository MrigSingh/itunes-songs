import React, { Component } from 'react';
// import './App.css';
import logo from '../itunes-logo.png';
import {connect} from 'react-redux';
import {getSongs} from '../actions/songs-action';

class Header extends Component {
    state = {
        query : ""
    }
    setQuery = async(e) => {
        await this.setState({
            query : e.target.value
        })
    }
    triggerSearch = () => {
        const {query} = this.state;
        this.props.getSongs(query);
    }
    render() {
        return (
            <div>
                <header className="header-container">
                    <div className="logo">
                        <img src={logo} width="50px" alt="logo" />
                        <span className="logo-text">iTunes Songs</span>
                    </div>
                    <nav>
                        <input type="text" className="search-box" placeholder="Enter the song name to be searched" onChange={(e) => this.setQuery(e)} />
                        <button className="btn" onClick={() => this.triggerSearch()}>Search</button>
                    </nav>
                </header>
            </div>
        )
    }
}

export default connect(null, {getSongs})(Header);