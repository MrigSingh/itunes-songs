import {GET_SONGS} from './types';
import axios from 'axios';

export function getSongs (query) {
    return async dispatch =>  {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${query}`);
        dispatch({
            type: GET_SONGS,
            payload: res.data.results
        })
    }
}

