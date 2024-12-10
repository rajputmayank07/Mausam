import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VufGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1641672222794-536ad524a929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://media.istockphoto.com/id/477184230/photo/thunderclouds-over-horizon.jpg?s=612x612&w=0&k=20&c=PQ8IPHmomy05WghlYMiXgepFj4yXXp9eSpiQXKrIKfM=";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                        title="Initial Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humdity = {info.humidity}</p>
                            <p>Min Temp={info.tempMin}</p>
                            <p>Max Temp={info.tempMax}</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}