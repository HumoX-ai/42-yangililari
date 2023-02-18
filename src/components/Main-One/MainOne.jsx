import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./style.css";
export default function MainOne() {
  return (
    <Container maxWidth="xl">
      <Box id="about" sx={{ height: "100vh", pt: 3 }}>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid sm={5} md={6} xs={12}>
              <img
                src="https://www.bbva.com/wp-content/uploads/en/2015/12/bbva-educacion-1920x1080.jpg"
                alt="internal error!"
                width="100%"
              />
            </Grid>
            <Grid sm={5} md={5} xs={12}>
              <Typography sx={{ pt: 2 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique, reiciendis! Eaque odit aliquam voluptatibus
                provident, tempore exercitationem ducimus sapiente
                necessitatibus, facilis velit repudiandae voluptatum aperiam
                esse consectetur unde deserunt impedit eligendi? Nesciunt
                doloremque neque, saepe consequatur quod, vitae laborum est
                nihil eum voluptatem nisi non impedit dolores fugit, rem ipsum.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
