import React, {useContext } from "react";
import LegoMinifigElement from "./LegoMinifigElement";
import {LegoMinifigsContext} from "../../context/LegoMinifigsContext";
import {Grid} from "@material-ui/core";


function LegoMinifigList() {
    const [legoMinifigs] = useContext(LegoMinifigsContext);

    return (
        <Grid container spacing={1}>
            {legoMinifigs.map((legoMinifig) => (
                <LegoMinifigElement
                    key={legoMinifig.id}
                    legoMinifig={legoMinifig}
                />
            ))}
        </Grid>
    );
}

export default LegoMinifigList;
