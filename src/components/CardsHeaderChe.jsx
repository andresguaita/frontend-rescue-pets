import React from 'react';
import {Card, Typography, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';



function CardsHeader(props) {

    const useStyles= makeStyles(()=>({
        root:{
            textAlign: 'center',
            background: props.color
        },
        texto:{
            fontSize: 18,
            color: props.font
        },
        titulo:{
            fontWeight: 'bold',
            fontSize: 22,
            color: props.font
        }
        }));

    const classes=useStyles();
    console.log("props",props)
    return (
        <Card className={classes.root}>
            <CardContent>
                {props.icono}
                <Typography className={classes.titulo}>
                {props.titulo}
                </Typography>

                <Typography className={classes.texto}>
                {props.texto}
                {/* {props.shelterId} */}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default CardsHeader;