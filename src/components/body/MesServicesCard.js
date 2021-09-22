import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function MesServicesCard({service}) {
    return (
            <Card sx={{ maxWidth: 400 }} style={{backgroundColor: "#7fb6d4"}} className='h-100'>
                <CardHeader sx={{minHeight: 99.5}}
                    avatar={
                        <Avatar src={service.logo} alt={service.id}/>
                    }
                    title={service.title}
                    subheader={
                        <small>{service.subtitle}</small>}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={service.image}
                    alt={service.id}
                />
                <CardContent sx={{minHeight: 160}}>
                    <Typography variant="body2" color="text.secondary">
                        {service.textUn}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {service.textDeux}
                    </Typography>
                </CardContent>
            </Card>
    );
}
export default MesServicesCard