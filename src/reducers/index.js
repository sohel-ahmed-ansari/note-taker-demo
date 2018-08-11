import { combineReducers } from 'redux';
import newNote from './newNote';
import notes from './notes';

export default combineReducers({
    newNote,
    notes
});
