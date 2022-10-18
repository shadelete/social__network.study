import {combineReducers, legacy_createStore as createStore} from 'redux'
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogReducer,
    sidebarData : navReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;