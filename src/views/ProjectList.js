import React from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Box
} from "@material-ui/core";

import { projectData } from '../constants.js';

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    cardImage: {
        height: 200
    },
    projectsBox: {
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    technologies: {
        marginTop: "1rem"
    },
    buttons: {
        marginBottom: "1rem"
    }
}));

const ProjectList = () => {

    const classes = useStyles(theme);

    return (
        <Box className={classes.projectsBox}>
            <Grid container justify="center" spacing={3}>
                {projectData.map((project, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index} container alignItems="stretch">
                            <Card>
                                <CardMedia
                                    className={classes.cardImage}
                                    image={project.image}
                                    title={project.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {project.content}
                                    </Typography>
                                    <Typography className={classes.technologies} variant="body2" color="textSecondary" component="p">
                                        <i>Technologies: {project.technologies}</i>
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.buttons}>
                                    <Button variant="contained" size="small" color="secondary" href={project.github}>
                                        View on GitHub
                                    </Button>
                                    {project.hasOwnProperty('url') &&
                                        <Button variant="contained" size="small" color="secondary" href={project.url}>
                                            View Live
                                        </Button>
                                    }
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ProjectList;
