import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const slidesSettings = {
    //dots: true,
    //fade: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 3500,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const HeroWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column-reverse",
    height: "45vh",
    zIndex: 0,
}));

export const HeroTextBG = styled(Box, {
    shouldForwardProp: (prop) => {
        return prop !== "test";
    },
})<{ test?: boolean }>(({ theme, test }) => ({
    width: "100%",
    height: "15vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: test ? alpha("#ba68c8", 0.6) : alpha("#424242", 0.6),
}));

export const SyImg = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "",
    width: "200px",
    height: "90px",
    zIndex: 1,
}));

export const SyHero = styled(Grid)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    margin: "auto",
    /* backgroundColor: alpha("#424242", 0.5),
    borderRadius: (theme.shape.borderRadius as number) * 4, */
    height: "10vh",
    top: "3vh",
    zIndex: 2,
}));

export const SyHeroText = styled(Typography)`
    color: #ff3d00;
    :hover {
        color: #ef6c00;
    }
`;
