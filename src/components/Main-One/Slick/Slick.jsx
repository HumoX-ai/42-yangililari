import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// style text

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Button, Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import dataNav from "../../data/Data-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";

export default function Slick() {
  return (
    <Container maxWidth="xl" >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        rewind={true}
        pagination={{
          type: "progressbar",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dataNav.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Box sx={{ mt: 2 }}>
              <Fade top duration={1000}>
                <img
                  src="https://wallpaperaccess.com/full/1209611.jpg"
                  widht="100%"
                  alt=""
                />
              </Fade>
              <Fade bottom duration={1500} delay={1000}>
                <Typography
                  sx={{
                    color: "#37474f",
                    fontWeight: "bold",
                    fontSize: "22px",
                    fontFamily: "roboto",

                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
              </Fade>
              <Divider
                textAlign="center"
                color="white"
                sx={{
                  width: "80%",
                  margin: "0 auto",
                  mb: 1,
                  mt: 1,
                }}
              />
              <Fade top cascade duration={2000} delay={1200}>
                <Typography
                  sx={{
                    color: "#37474f",
                    fontSize: "18px",
                    fontFamily: "roboto",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {item.describe}
                </Typography>
                <Typography
                  sx={{
                    pt: 1,
                    color: "#37474f",
                    fontSize: "15px",

                    fontFamily: "roboto",
                    textAlign: "start",
                    p: 1,
                  }}
                >
                  {item.text}
                </Typography>
              </Fade>

              <Fade top cascade>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      color: "grey",
                      fontSize: "12px",
                      fontFamily: "roboto",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                    <Typography
                      sx={{
                        color: "grey",
                        fontSize: "12px",
                        fontFamily: "roboto",
                        pl: 0.8,
                      }}
                    >
                      21/02/2023 00:14
                    </Typography>
                  </Box>
                  <Button
                    endIcon={<FontAwesomeIcon icon={faAnglesRight} />}
                    sx={{
                      backgroundColor: "#009688",
                      textTransform: "none",
                      pt: 1,
                      mt: 1,
                      p: "9px 35px",
                      "&:hover": {
                        color: "#fdb515",
                      },
                    }}
                    variant="contained"
                  >
                    <Link
                      to={`/qiziqarli/${item.id}`}
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontFamily: "roboto",
                        "&:hover": {
                          color: "#fdb515",
                        },
                      }}
                    >
                      Batafsil
                    </Link>
                  </Button>
                </Box>
              </Fade>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
