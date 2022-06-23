import React, {
    FC,
    MouseEvent,
    TouchEvent,
    ChangeEvent,
    useState,
    useEffect,
} from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const GAMES = [{ name: "game-1" }, { name: "game-2" }, { name: "game-3" }];

const Games = () => {
    const gamesCards = (games: any) => {
        return games.map((game: any, index: number) => {
            return (
                <Grid item xs={4} key={index}>
                    <Link to={"/game-math"}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{123}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            );
        });
    };
    return (
        <Container sx={{ padding: "1rem" }}>
            <Grid container spacing={2}>
                {gamesCards(GAMES)}
            </Grid>
        </Container>
    );
};

export default Games;
