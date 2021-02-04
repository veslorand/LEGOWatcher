import React, {createContext, useEffect, useState} from "react";
import {getLegoThemes} from '../utils/axios'

export const LegoThemesContext = createContext(undefined);

export const LegoThemesProvider = (props) => {
    const [legoThemes, setLegoThemes] = useState([])
    useEffect(() => {
        getLegoThemes()
            .then(response => {
                setLegoThemes([response.data.results]);
            })
    }, [])

    return (
        <LegoThemesContext.Provider value={[legoThemes, setLegoThemes]}>
            {props.children}
        </LegoThemesContext.Provider>
    );
}

