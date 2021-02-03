import React from 'react';
import Box from '@material-ui/core/Box';
import Navbar from './components/header/Navbar'
import Copyright from "./components/footer/Copyright";
import {LegoThemesProvider} from "./context/LegoThemesContext";
import {LegoSetsProvider} from "./context/LegoSetsContext";
import {LegoMinifigsProvider} from "./context/LegoMinifigsContext";

export default function App() {
    return (
        <LegoThemesProvider>
            <LegoSetsProvider>
                <LegoMinifigsProvider>
                    <Box my={4}>
                        <Navbar/>

                        <Copyright/>
                    </Box>
                </LegoMinifigsProvider>
            </LegoSetsProvider>
        </LegoThemesProvider>
    );
}