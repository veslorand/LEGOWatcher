import React, {createContext, useEffect, useState} from "react";
import {getLegoSets} from '../utils/Http'

export const LegoSetsContext = createContext(undefined);

export const LegoSetsProvider = (props) => {
    const [legoSets, setLegoSets] = useState([]);

    useEffect(() => {
        getLegoSets()
        .then(response => {
            setLegoSets([...response.data.results]);
        })
    }, [])

    return (
        <LegoSetsContext.Provider value={[legoSets, setLegoSets]}>
            {props.children}
        </LegoSetsContext.Provider>
    );
}
