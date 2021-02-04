import React from 'react';
import Box from '@material-ui/core/Box';
import Navbar from './components/header/Navbar';
import Copyright from "./components/footer/Copyright";
import {LegoThemesProvider} from "./context/LegoThemesContext";
import {LegoSetsProvider} from "./context/LegoSetsContext";
import {LegoMinifigsProvider} from "./context/LegoMinifigsContext";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import LegoSetList from "./components/legosets/LegoSetList";
import LegoMinifigList from "./components/legominifigs/LegoMinifigList";

export default function App() {
    return (
        <LegoThemesProvider>
            <LegoSetsProvider>
                <LegoMinifigsProvider>
                    <Box my={4}>
                        <Router>
                            <Navbar/>
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
                                wish
                            </Route>
                        </Router>
                        <Copyright/>
                    </Box>
                </LegoMinifigsProvider>
            </LegoSetsProvider>
        </LegoThemesProvider>
    );
}