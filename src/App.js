import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <main className="main__wrapper">
                   <Nav/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route
                                path="/profile/*"
                                element={<Profile/>}
                            />
                            <Route
                                path="/dialogs/*"
                                element={<DialogsContainer />}
                            />
                            <Route
                                path="/users/*"
                                element={<UsersContainer />}
                            />
                            <Route path="/music/*" element={<Music/>}/>
                            <Route path="/settings/*" element={<Settings/>}/>
                            <Route path="/news/*" element={<News/>}/>
                        </Routes>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
