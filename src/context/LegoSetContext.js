import React, {createContext, useEffect, useState} from "react";
import {getLegoSets} from '../utils/Http'

export const LegoSetContext = createContext(undefined);

export const LegoThemeProvider = (props) => {
    const [legoSets, setLegoSets] = useState([])
    useEffect(() => {
        getLegoSets()
            .then(response => {
                setLegoSets([response.data.results]);
            })
    }, [])

    return (
        <LegoSetContext.Provider value={{legoSets, setLegoSets}}>
            {props.children}
        </LegoSetContext.Provider>
    );
}
