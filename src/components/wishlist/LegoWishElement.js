import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

const Sprite = styled.img`
  width: 22em;
  height: 22em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function LegoWishElement(props) {
    const wish = props.wish;

    return (
        <div className="col-md-4 col-sm-6 mb-5">
            <StyledLink
                to={`/sets/${wish.id}`}
                style={elementStyle}
            >
                <Card className="card">
                    <div className="card-header" style={cardHeader}>
                        {wish.name}
                    </div>
                    <div className="card-body mx-auto">
                        <Sprite
                            className="card-img-center rounded mx-auto mt-2"
                            src={wish.set_img_url}
                        />
                    </div>
                </Card>
            </StyledLink>
        </div>
    );

}
const elementStyle = {
    textDecoration: "none",
};

const cardHeader = {
    fontWeight: "bold",
    color: "black",
    backgroundColor: `${theme ? "#ffe000" : "black"}`,
};

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

export default LegoWishElement;
