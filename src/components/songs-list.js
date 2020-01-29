import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getSongs } from '../actions/songs-action';

class SongsList extends Component {

    render() {
        const {songs} = this.props.songs;
        if(songs.length === 0 || songs.length === undefined){
            return (
                <div className="message">
                    <h2>Enter a song name to be searched !!</h2>
                </div>
            )
        } else{
            return (
                <div className="content">
                    <h3 style={{marginLeft:'60px'}}>Your result(s) for last song query : {songs.length} items </h3>
                    <div className="grid-container">
                    {songs.map(song => 
                        <div key={song.trackId} className="grid-items">
                            <div className="song-avatar">
                                <img src={song.artworkUrl100} width="100px" alt="song-cover" />
                            </div>
                            <div className="song-des">
                                <p className="track-title">Track name</p>
                                <p className="track-name">{song.trackName}</p>
                                <p className="artist-title">Artist name</p>
                                <p className="artist-name">{song.artistName}</p>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    songs: state.songs,
    searchQuery: state.searchQuery,
})

export default connect(mapStateToProps, {getSongs})(SongsList);