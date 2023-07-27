import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const renderPosition = (position_list) => {
    return position_list.map(position => 
    <CardContent>
        <Typography variant="body1">
            {position[0]}
        </Typography>
        <Typography variant="body2">
            {position[1]}
        </Typography>
    </CardContent>
    )
}

export default function Experience(props) {
  return (
    <Card sx={{width: 0.3, marginTop: 10}}>
        <CardMedia
        sx={{ height: 140 }}
        image={props.company_image}
        title={props.image_alt}
        />
        <CardContent>
            <Typography variant="h5" component="div">
            {props.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <Grid container justifyContent="space-between">
                    <Grid item>
                        {props.location}
                    </Grid>
                    <Grid item>
                        {props.time_span}
                    </Grid>
                </Grid>
            </Typography>
        </CardContent>
        {renderPosition(props.position_list)}
            
    </Card>
  );
}