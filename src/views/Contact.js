import React, { Component } from 'react';
import {
    Grid,
    Typography
} from "@material-ui/core"; 

class Contact extends Component {
    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Typography variant="h2">Contact</Typography>
            </Grid>
        );
    }
}

export default Contact;