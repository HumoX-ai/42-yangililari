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
import axios from "axios";

export default function FirstNav() {
  const [date, setDate] = useState(new Date());
 
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    // Get the user's location
    navigator.geolocation.getCurrentPosition((position) => {
      

      // Get the weather data for the user's location using an API
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=1906a421b773d4c0774e29816aba7fa8&units=metric`
        )
        .then((response) => {
          setWeather(response.data.main.temp);
          setLocation(response.data.name);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    // Update the date every second
    const timerID = setInterval(() => setDate(new Date()), 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <Box sx={{ background: "#161616", pt: 1.4, pb: 1 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ color: "#d1d1d1", display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faLocationDot} />
              <Typography sx={{ pl: 0.5 }}>{location} </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faCloud} />
              <Typography sx={{ pl: 0.5 }}>{weather}°C</Typography>
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
