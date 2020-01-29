import {GET_SONGS } from '../actions/types';

const initialState = {
    songs: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SONGS:
            return {
                ...state,
                songs: [...action.payload]
            };
        default:
            return state;
    }
}