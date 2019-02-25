import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import signIn_reducer from './signIn_reducer';
import get_student_reducer from './get_student_reducer';
import addStudent_reducer from './addStudent_reducer';
import getTeacherList_reducer from './getTeacherList_reducer';
import updateRecord_reducer from './updateRecord_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    signIn_reducer,
    get_student_reducer,
    addStudent_reducer,
    getTeacherList_reducer,
    updateRecord_reducer,
});

export default rootReducer;