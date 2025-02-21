import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit'; //cold
import WhatshotIcon from '@mui/icons-material/Whatshot'; //hot
import UmbrellaIcon from '@mui/icons-material/Umbrella'; //rain
import CloudIcon from '@mui/icons-material/Cloud'; //normal

import './InfoBox.css';

export default function InfoBox({ weatherInfo }) {
  let Hot_URL =
    'https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  let RAIN_URL =
    'https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=';
  let COLD_URL =
    'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';

  const imageURL =
    weatherInfo.temp < 10
      ? RAIN_URL
      : weatherInfo.temp > 30
      ? Hot_URL
      : weatherInfo.temp < 5
      ? COLD_URL
      : 'https://images.unsplash.com/photo-1614434163906-5520f43d4e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';

  const Icon =
    weatherInfo.temp < 10 ? (
      <UmbrellaIcon color="action" />
    ) : weatherInfo.temp > 40 ? (
      <WhatshotIcon color="action" />
    ) : weatherInfo.temp < 5 ? (
      <AcUnitIcon color="action" />
    ) : (
      <CloudIcon color="action" />
    );

  return (
    <div className="infoBox">
      <div className="CardBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={imageURL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <span>{weatherInfo.city}</span>
                <Box>{Icon}</Box>
              </Stack>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary' }}
              component="div"
            >
              <div>temp : {weatherInfo.temp}&deg;C</div>
              <div>humidity : {weatherInfo.humidity}</div>
              <div>weather : {weatherInfo.weather}</div>
              <div>tempMax : {weatherInfo.tempMax}&deg;C</div>
              <div>tempMin : {weatherInfo.tempMin}&deg;C</div>
              <div>
                feelslike : The weather feelsLike {weatherInfo.feelslike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
