import React, {useContext} from "react";
import {Grid, makeStyles} from "@material-ui/core";
import {WishlistContext} from "../../context/WishlistContext";
import LegoWishElement from "./LegoWishElement";

function LegoWishlistList() {
    const [wishlist] = useContext(WishlistContext);
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
            {wishlist.map((wish) => (
                <Grid container item xs={12} spacing={3}>
                    <LegoWishElement
                        key={wish.id}
                        wish={wish}
                        className={classes.paper}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default LegoWishlistList;
