import React, {useContext} from "react";
import {LegoSetsContext} from "../../context/LegoSetsContext";
import LegoSetElement from "./LegoSetElement";
import {Grid} from "@material-ui/core";

function LegoSetList() {
    const [legoSets] = useContext(LegoSetsContext);

    return (
        <Grid container spacing={1}>
            {legoSets.map((legoSet) => (
                <LegoSetElement
                    key={legoSet.id}
                    legoset={legoSet}/>
            ))}
        </Grid>
    );
}

export default LegoSetList;
