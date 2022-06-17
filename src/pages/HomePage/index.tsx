import React, { FC, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { API_IMG, API_ROAR } from "../../api";
import {
    HeroWrapper,
    SyImg,
    SyHero,
    SyHeroText,
    slidesSettings,
    HeroTextBG,
} from "../../components/styledComponents/hero.style";
import simpleCard from "../../components/card/simpleCard";

import { blogs } from "../../config/blog";
import InsIcon from "../../components/icons/instagramIcon";
import WBIcon from "../../components/icons/weiboIcon";

const HomePage: FC = () => {
    const [heroSlides, setHeroSlides] = useState<string[]>([]);
    useEffect(() => {
        API_ROAR.getRoars("roar_with_pics")
            .then((result) => {
                console.log(
                    "=> fe recv test data: ",
                    JSON.parse(result.content)
                );
                setHeroSlides(JSON.parse(result.content).slice(0, 10));
            })
            .catch((err) => {
                setHeroSlides([]);
            });
    }, []);

    const imgContent = (items: any[]) => {
        return items.map((item: any) => (
            <Card sx={{ maxWidth: 345 }} key={item._id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.pics[0].url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            noWrap
                        >
                            {item.content}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        ));
    };

    const Hero = () => (
        <HeroWrapper
            sx={{
                backgroundImage: `url(http://localhost:8000/images/hero_1.jpg)`,
            }}
        >
            <HeroTextBG>
                <Container>
                    <Typography variant="h3" color="white" align="left">
                        Welcome to Tiger's Cave
                    </Typography>
                    <Typography variant="body2" color="#bdbdbd" align="left">
                        Created by Areos
                    </Typography>
                </Container>
            </HeroTextBG>
        </HeroWrapper>
    );

    const cardlistArea = (items: any) => {
        return items.map((item: any) => (
            <Card sx={{ display: "flex" }}>
                <CardMedia
                    component="img"
                    height="100"
                    sx={{ width: "150px" }}
                    image={item.img}
                    alt={item.title}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="div"
                        noWrap
                        sx={{ width: "250px" }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        noWrap
                        component="div"
                        sx={{ width: "200px" }}
                    >
                        {item.content}
                    </Typography>
                </CardContent>
            </Card>
        ));
    };

    return (
        <>
            <Hero />
            <Container sx={{ marginTop: "2vh" }}>
                <Typography variant="h4" color="primary">
                    What's new:{" "}
                </Typography>
                <Slider {...slidesSettings}>{imgContent(heroSlides)}</Slider>
            </Container>
            <Container sx={{ marginTop: "2vh" }}>
                <Grid container spacing={3}>
                    <Grid item container md={12} lg={9} spacing={3}>
                        <Grid item xs={12} md={6}>
                            {simpleCard(blogs[0])}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={3}>
                                {cardlistArea(blogs.slice(1, 5))}
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item container xs={0} lg={3} spacing={3}>
                        <Grid item xs={12}>
                            <Paper elevation={2}>
                                <Typography variant="h6">
                                    Stay In Touch
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <InsIcon />
                                    <WBIcon />
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default HomePage;
