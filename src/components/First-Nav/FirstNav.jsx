import { Box, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCloud,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function FirstNav() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
    const interValId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interValId);
  }, []);

  useEffect(() => {
    if (location) {
      const API_KEY = "1906a421b773d4c0774e29816aba7fa8";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${API_KEY}`;
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.log(error));
    }
  }, [location]);
  if (!location || !weatherData) {
    return <Typography>Yuklanmoqda...</Typography>;
  }

  const { name: locationName } = weatherData;
 
  const { temp: temperature } = weatherData.main;
  return (
    <Box sx={{ background: "#161616", pt: 1.4, pb: 1 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ color: "#d1d1d1", display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faLocationDot} />
              <Typography sx={{ pl: 0.5 }}>{locationName} </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faCloud} />
              <Typography sx={{ pl: 0.5 }}>{temperature}°C</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faCalendar} />
              <Typography sx={{ pl: 0.5 }}>
                {time.toLocaleDateString()}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <a
                href="https://t.me/yangiyolmaktab42"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton>
                  <FontAwesomeIcon icon={faTelegram} color="#d1d1d1" />
                </IconButton>
              </a>
              <IconButton>
                <FontAwesomeIcon icon={faInstagram} color="#d1d1d1" />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon icon={faTwitter} color="#d1d1d1" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
