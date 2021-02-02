import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import theme from "./theme";
import Navbar from './components/header/Navbar'
import Copyright from "./components/footer/Copyright";

export default function App() {
    return (
        <Container maxWidth="lg" color={theme}>
            <Box my={4}>
                <Navbar/>

                <Copyright />
            </Box>
        </Container>
    );
}