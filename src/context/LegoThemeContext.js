import React, {createContext, useEffect, useState} from "react";
import {getLegoThemes} from '../utils/Http'

export const LegoThemeContext = createContext(undefined);

export const LegoThemeProvider = (props) => {
    const [legoThemes, setLegoThemes] = useState([])
    useEffect(() => {
        getLegoThemes()
            .then(response => {
                setLegoThemes([response.data.results]);
            })
    }, [])

    return (
        <LegoThemeContext.Provider value={{legoThemes, setLegoThemes}}>
            {props.children}
        </LegoThemeContext.Provider>
    );
}
