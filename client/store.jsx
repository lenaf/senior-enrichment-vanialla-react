import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios'

/* -----------------    ACTION TYPES ------------------ */
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export const getAllCampuses = campuses => ({ type: GET_ALL_CAMPUSES, campuses })


const init   = stories => ({ type: INITIALIZE, stories });

export function getCampus (campus) {
  return { type: GET_CAMPUS, campus };
}

/* ------------   THUNK CREATORS     ------------------ */
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getAllCampuses(campuses));
      });
  };
}

export function fetchCampus () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getAllCampuses(campuses));
      });
  };
}

export function postCampus (campus, history) {

  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newChannel => {
        dispatch(getChannel(newChannel));
        socket.emit('new-channel', newChannel);
        history.push(`/channels/${newChannel.id}`);
      });
  };
}

/* ------------       REDUCERS     ------------------ */

const initialState = {
    campuses: []
}

function reducer (state = initialState, action) {

  switch (action.type) {

    case GET_ALL_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses});

    case GET_CAMPUS:
      return [...state, action.channel];

    default:
      return state;
  }

}


export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))
