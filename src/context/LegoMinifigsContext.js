import React, {createContext, useEffect, useState} from "react";
import {getLegoMinifigs} from '../utils/axios'

export const LegoMinifigsContext = createContext([]);

export const LegoMinifigsProvider = (props) => {
    const [legoMinifigs, setLegoMinifigs] = useState([]);

    useEffect(() => {
        getLegoMinifigs()
            .then(response => {
                setLegoMinifigs([...response.data.results]);
            })
    }, [])

    return (
        <LegoMinifigsContext.Provider value={[legoMinifigs, setLegoMinifigs]}>
            {props.children}
        </LegoMinifigsContext.Provider>
    );
}
