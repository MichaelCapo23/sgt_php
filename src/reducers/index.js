import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {signIn} from '../actions/singIn_reducer'

const rootReducer = combineReducers({
    form: formReducer,
    signIn,
});

export default rootReducer;