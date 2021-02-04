import React, {useContext } from "react";
import {LegoSetsContext} from "../../context/LegoSetsContext";
import LegoSetElement from "./LegoSetElement";


function LegoSetList() {
    const [legoSets] = useContext(LegoSetsContext);

    return (
        <div className="row" style={{flex: 1, flexDirection: 'row'}}>
            {legoSets.map((legoSet) => (
                <LegoSetElement
                    key={legoSet.id}
                    legoset={legoSet}
                />
            ))}
        </div>
    );
}

export default LegoSetList;
