import React, { FC, useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { purple } from "@mui/material/colors";

import { getQuestions } from "./math";

const Gmath: FC = () => {
    const [value, setValue] = useState("?");
    const [isCorrect, setIsCorrect] = useState(false);
    const [question, setQuestion] = useState(getQuestions(1));

    const handleOneMore = () => {
        setQuestion(getQuestions(1));
        setValue("?");
        setIsCorrect(false);
    };

    const answerBtns = (answers: Array<any>) => {
        return answers.map((item: any) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Button
                    id="answer_1"
                    variant="outlined"
                    size="large"
                    onClick={(e) => {
                        e.preventDefault();
                        setValue(item.an);
                        setIsCorrect(item.correct);
                    }}
                >
                    {item.an}
                </Button>
            </Grid>
        ));
    };

    return (
        <Container sx={{ padding: "1rem" }}>
            <Typography variant="h5">This is a Math Game~</Typography>
            <Typography variant="h6" color={purple[500]}>
                Choose the correct answer to the question.
            </Typography>
            <Paper elevation={4} sx={{ margin: "3rem" }}>
                <Stack direction="row" justifyContent="center">
                    <Typography variant="h2">{question[0].question}</Typography>
                    <Typography
                        variant="h2"
                        color={isCorrect ? "#66bb6a" : "#f44336"}
                    >
                        {value}
                    </Typography>
                </Stack>

                <Divider />
                <Grid container spacing={2} sx={{ padding: "1rem" }}>
                    {answerBtns(question[0].answers)}
                </Grid>
            </Paper>
            <IconButton
                aria-label="back-post"
                color="success"
                size="large"
                onClick={handleOneMore}
            >
                <AddAlertIcon />
                <Typography>One more time ~</Typography>
            </IconButton>
        </Container>
    );
};

export default Gmath;
