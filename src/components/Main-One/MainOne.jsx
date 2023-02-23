import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Slick from "./Slick/Slick";
import "./style.css";
export default function MainOne() {
  return (
    <Container maxWidth="xl">
      <Box id="about" sx={{ height: "100vh", pt: 3 }}>
        <Box sx={{ height: "100vh" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid sm={12} md={12} xs={12}>
              <Slick />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
