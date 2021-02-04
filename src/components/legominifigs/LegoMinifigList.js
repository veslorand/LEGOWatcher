import React, {useContext } from "react";
import LegoMinifigElement from "./LegoMinifigElement";
import {LegoMinifigsContext} from "../../context/LegoMinifigsContext";
import {Grid} from "@material-ui/core";


function LegoMinifigList() {
    const [legoMinifig] = useContext(LegoMinifigsContext);

    return (
        <Grid container spacing={1}>
            {legoMinifig.map((legoMinifig) => (
                <Grid container item xs={12} spacing={3}>
                <LegoMinifigElement
                    key={legoMinifig.id}
                    legoMinifig={legoMinifig}
                />
                </Grid>
            ))}
        </Grid>
    );
}

export default LegoMinifigList;
