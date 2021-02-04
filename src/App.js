import React from 'react';
import Navbar from './components/header/Navbar';
import Copyright from "./components/footer/Copyright";
import {LegoSetsProvider} from "./context/LegoSetsContext";
import {LegoMinifigsProvider} from "./context/LegoMinifigsContext";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import LegoSetList from "./components/legosets/LegoSetList";
import LegoMinifigList from "./components/legominifigs/LegoMinifigList";
import {WishlistProvider} from "./context/WishlistContext";
import {Container} from "@material-ui/core";
import LegoWishlistList from "./components/wishlist/LegoWishlistList";

export default function App() {
    return (
        <WishlistProvider>
            <LegoSetsProvider>
                <LegoMinifigsProvider>
                    <Container my={5} className={App}>
                        <Router>
                            <Navbar/>
                            <br/><br/>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/sets">
                                <LegoSetList/>
                            </Route>
                            <Route path="/minifigs">
                                <LegoMinifigList/>
                            </Route>
                            <Route path="/wishlist">
                                <LegoWishlistList/>
                            </Route>
                        </Router>
                        <Copyright/>
                    </Container>
                </LegoMinifigsProvider>
            </LegoSetsProvider>
        </WishlistProvider>
    );
}