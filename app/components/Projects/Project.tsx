import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../../page.module.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function Project(props) {
  return (
    <Card sx={{width: 0.3, marginTop: 10, backgroundColor: "rgb(0, 12, 6)", color: "white"}}>
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
            <Button href={props.link} size="small">View Project</Button>
            <Button href={props.github} size="small">GitHub</Button>
        </CardActions>
            
    </Card>
  );
}