import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from '../../page.module.css';
import Github from 'public/github.svg';
import ExternalLink from 'public/external-link.svg';

export default function Project(props) {
  return (
    <Card sx={{width: 0.3, marginTop: 10, backgroundColor: "rgb(0, 12, 6)", color: "rgb(200,200,200)"}}>
        <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={props.image_alt}
        />
        <CardContent>
            <Typography variant="h5" component="div">
            {props.name}
            </Typography>
            <Typography variant="body2" className={styles.projectdesc}>
            {props.desc}
            </Typography>
        </CardContent>
        <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item style= {{paddingLeft: "10%",}}>
              <Button variant="contained" style=
              {{ 
                background: "rgb(200,200,200)", color: "rgb(0, 12, 6)", 
              }} 
              
              href={props.link} size="large" endIcon={<ExternalLink style={{fill:"rgb(0, 12, 6)"}} />}>
                View Project
              </Button>
            </Grid>
            <Grid item style= {{paddingRight: "10%"}}>
              <Button variant="outlined" style=
                {{
                  borderColor: "rgb(200,200,200)", background: "rgb(0, 12, 6)", color: "rgb(200,200,200)"
                }} 
                 href={props.github} 
                 size="large" endIcon={<Github style={{fill:"rgb(200,200,200)"}}/>}>
                GitHub
              </Button>
            </Grid>
          </Grid>
        </CardActions>
            
    </Card>
  );
}