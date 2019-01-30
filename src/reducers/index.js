import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import signIn_reducer from './signIn_reducer'
import get_student_reducer from './get_student_reducer'

const rootReducer = combineReducers({
    form: formReducer,
    signIn_reducer,
    get_student_reducer,
});

export default rootReducer;