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
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

export default function FirstNav() {
  const [, setDate] = useState(new Date());

  const [time] = useState(new Date());
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=1906a421b773d4c0774e29816aba7fa8&units=metric`
      )
      .then((response) => {
        setWeather(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });

    const timerID = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <Box sx={{ background: "#161616" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ color: "#d1d1d1", display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
              <Typography
                sx={{ pl: 0.5, fontSize: { xs: "13px", sm: "16px" } }}
              >
                Yangiyo'l
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faCloud} size="sm" />
              <Typography
                sx={{ pl: 0.5, fontSize: { xs: "13px", sm: "16px" } }}
              >
                {Math.floor(weather)}°C
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <FontAwesomeIcon icon={faCalendar} size="sm" />
              <Typography
                sx={{ pl: 0.5, fontSize: { xs: "13px", sm: "16px" } }}
              >
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
                <IconButton
                  sx={{
                    color: "#d1d1d1",

                    fontSize: { xs: "20px", sm: "23px" },
                    "&:hover": {
                      color: "#0088cc",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </IconButton>
              </a>
              <IconButton
                sx={{
                  color: "#d1d1d1",
                  fontSize: {
                    xs: "20px",
                    sm: "23px",
                    "&:hover": {
                      color: "#d62976",
                    },
                  },
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>

              <IconButton
                sx={{
                  fontSize: {
                    color: "#d1d1d1",
                    xs: "20px",
                    sm: "23px",
                    "&:hover": {
                      color: "#FF0000",
                    },
                  },
                }}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
