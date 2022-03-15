import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './pages/Details';
import Home from './pages/Home'
import Play from './pages/Play'
import ViewAll from './pages/ViewAll';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SearchForm from './pages/SearchForm';
import FavFilm from './pages/FavFilm';
import TokenConfirm from './pages/TokenConfirm';
import LoginAdmin from './Admin/pages/LoginAdmin';
import HomeAdmin from './Admin/pages/HomeAdmin';
import ListFilmAdmin from './Admin/pages/ListFilmAdmin';
import ListCateAdmin from './Admin/pages/ListCateAdmin';
import ThemPhimAdmin from './Admin/pages/ThemPhimAdmin';
import ThemCateAdmin from './Admin/pages/ThemCateAdmin';
import EditCateAdmin from './Admin/pages/EditCateAdmin';
import EditFilmAdmin from './Admin/pages/EditFilmAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:acc" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/detail" element={<Details />}></Route>
        <Route path="/search" element={<SearchForm />}></Route>
        <Route path="/search/:kw" element={<SearchForm />}></Route>
        <Route path="/search/:kw/:id" element={<SearchForm />}></Route>
        <Route path="/play/:id" element={<Play />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/viewall" element={<ViewAll />}></Route>
        <Route path="/viewall/:id" element={<ViewAll />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signin/:id" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/favfilm" element={localStorage.getItem('User') ? <FavFilm /> : <SignIn requestSign='true'/>}></Route> 
        <Route path="/token" element={<TokenConfirm />}></Route>
        <Route path="/admin" element={<LoginAdmin />}></Route>
        <Route path="/homeadmin" element={localStorage.getItem('Admin') ? <HomeAdmin /> : <LoginAdmin requestSign='true'/>}></Route>
        <Route path="/listfilmadmin" element={localStorage.getItem('Admin') ? <ListFilmAdmin /> : <LoginAdmin requestSign='true'/>}></Route>
        <Route path="/listcateadmin" element={localStorage.getItem('Admin') ? <ListCateAdmin /> : <LoginAdmin requestSign='true'/>}></Route>
        <Route path="/themphimadmin" element={localStorage.getItem('Admin') ? <ThemPhimAdmin /> : <LoginAdmin requestSign='true'/>}></Route>
        <Route path="/themcateadmin" element={localStorage.getItem('Admin') ? <ThemCateAdmin /> : <LoginAdmin requestSign='true'/>}></Route>
        <Route path="/editcateadmin/:id" element={localStorage.getItem('Admin') ? <EditCateAdmin /> : <LoginAdmin requestSign='true'/>}></Route>
        <Route path="/editfilmadmin/:id" element={localStorage.getItem('Admin') ? <EditFilmAdmin /> : <LoginAdmin requestSign='true'/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
