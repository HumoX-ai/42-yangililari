import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";

export default function Article({ dataNav }) {
  const { id } = useParams();
  const article = dataNav.find((article) => article.id === Number(id));
  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 2 }}>
        <Fade top duration={1000}>
          <Typography variant="h4" sx={{ textAlign: "center", pb: 2 }}>
            {article.head}
          </Typography>
        </Fade>
        <Fade top duration={2000}>
          <img
            src="https://wallpapercave.com/wp/wp6125247.jpg"
            width="100%"
            alt=""
          />
        </Fade>
        <Fade bottom cascade duration={2500}>
          <Typography variant="subtitle1">{article.des}</Typography>
        </Fade>
      </Box>
    </Container>
  );
}
