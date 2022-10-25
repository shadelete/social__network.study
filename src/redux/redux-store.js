import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogReducer,
    sidebarData : navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;