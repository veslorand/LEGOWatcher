import React, {useContext} from "react";
import {LegoSetsContext} from "../../context/LegoSetsContext";
import LegoSetElement from "./LegoSetElement";
import {Grid, makeStyles} from "@material-ui/core";


function LegoSetList() {
    const [legoSets] = useContext(LegoSetsContext);
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();

    return (

        <Grid container spacing={1}>
            {legoSets.map((legoSet) => (
                <Grid container item xs={12} spacing={3}>
                    <LegoSetElement
                        key={legoSet.id}
                        legoset={legoSet}
                        className={classes.paper}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default LegoSetList;
