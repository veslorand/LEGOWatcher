import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import {CardActionArea, CardActions, CardContent, CardMedia, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function LegoMinifigElement(props) {
    const legoMinifig = props.legoMinifig;
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={legoMinifig.set_img_url}
                    title="Contemplative Reptile"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {legoMinifig.name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {legoMinifig.parts}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    Add to WishList
                </Button>
                <Button size="small" color="secondary">
                    Add to OwnedList
                </Button>
            </CardActions>
        </Card>
    );

}

const Card = styled.div`

  font-weight: bold;
  color: ${theme ? "#000000" : "#ff0000"};
  background-color: ${theme ? "#ff0000" : "#333"};
  box-shadow: 0 1px 3px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 7px 14px;
  }
`;

const useStyles = makeStyles({
    root: {
        width: 400,
    },
    media: {
        height: 400,
    },
});



    export default LegoMinifigElement;
