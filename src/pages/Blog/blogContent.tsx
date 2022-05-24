import React, { FC } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type propsType = {
    data: any;
};

const BlogContent: FC<propsType> = ({ data }) => {
    if (!(data instanceof Array)) {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5">No content yet</Typography>
                </CardContent>
            </Card>
        );
    }
    //const content = data.map((item: any) => {});
    const content = "";
    return <>{content}</>;
};

export default BlogContent;
