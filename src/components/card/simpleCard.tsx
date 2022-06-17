import React, { FC } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

type propType = {
    img: string;
    title: string;
    content: string;
};

const simpleCard: FC<propType> = ({ img, title, content }) => {
    return (
        <Card variant="outlined">
            {/* <CardActionArea> */}
            <CardMedia component="img" height="270" image={img} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
                <Button size="small" color="primary">
                    More
                </Button>
            </CardActions>
        </Card>
    );
};

export default simpleCard;
