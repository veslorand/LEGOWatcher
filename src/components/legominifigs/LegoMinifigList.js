import React, {useContext } from "react";
import LegoMinifigElement from "./LegoMinifigElement";
import {LegoMinifigsContext} from "../../context/LegoMinifigsContext";


function LegoMinifigList() {
    const [legoMinifig] = useContext(LegoMinifigsContext);

    return (
        <div className="row" style={{flex: 1, flexDirection: 'row'}}>
            {legoMinifig.map((legoMinifig) => (
                <LegoMinifigElement
                    key={legoMinifig.id}
                    legoMinifig={legoMinifig}
                />
            ))}
        </div>
    );
}

export default LegoMinifigList;
