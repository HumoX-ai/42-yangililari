import * as React from "react";
import PropTypes from "prop-types";
import { Fade } from "react-reveal";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowDown,
  faBars,
  faEnvelope,
  faLocationDot,
  faPhone,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@mui/material";
import {
  faInstagram,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const drawerWidth = 301;

function SecondNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClickScroll = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const Nav2 = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#e8e9eb", height: "100vh" }}
    >
      <Fade bottom duration={1500} delay={2000}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Logo
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
      <Button fullWidth sx={{ pt: 2, pb: 2 }}>
        <a
          href="https://mpe.uz/front-end/assets_files/images/flag_big.png"
          target="_blank"
          rel="noreferrer"
        >
          <Box sx={{ color: "black", display: "flex", alignItems: "center" }}>
            <img
              src="https://mpe.uz/front-end/assets_files/images/flag.svg"
              alt="bayroq"
            />
            <Typography
              sx={{
                pl: 0.5,

                fontWeight: 500,

                "&:hover": {
                  color: "#fdb515",
                },
              }}
            >
              Bayroq
            </Typography>
          </Box>
        </a>
      </Button>
      <Button fullWidth sx={{ pt: 2, pb: 2 }}>
        <a
          href="https://mpe.uz/front-end/assets_files/images/emblem_big.png"
          target="_blank"
          rel="noreferrer"
        >
          <Box sx={{ color: "black", display: "flex", alignItems: "center" }}>
            <img
              src="https://mpe.uz/front-end/assets_files/images/emblem.svg"
              alt="gerb"
            />
            <Typography
              sx={{
                pl: 0.5,
                fontWeight: 500,
                "&:hover": {
                  color: "#fdb515",
                },
              }}
            >
              Gerb
            </Typography>
          </Box>
        </a>
      </Button>
      <Button fullWidth sx={{ pt: 2, pb: 2 }}>
        <a
          href="https://mpe.uz/front-end/assets_files/music/hymn.mp3"
          target="_blank"
          rel="noreferrer"
        >
          <Box
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                color: "#fdb515",
              },
            }}
          >
            <img
              src="https://mpe.uz/front-end/assets_files/images/sound.svg"
              alt="madhiya"
            />
            <Typography
              sx={{
                pl: 0.5,
                fontWeight: 500,
              }}
            >
              Madhiya
            </Typography>
          </Box>
        </a>
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <a
          href="https://t.me/yangiyolmaktab42"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            sx={{
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
              xs: "20px",
              sm: "23px",
              "&:hover": {
                color: "#0088cc",
              },
            },
          }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
        <IconButton
          sx={{
            fontSize: {
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
      <Divider
        textAlign="center"
        color="white"
        sx={{
          width: "50%",
          margin: "0 auto",
          mb: 3,
          mt: 3,
        }}
      />
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Murojaat uchun
      </Typography>
      <Box sx={{ mt: 2.5 }}>
        <a href="tel:+998935980539">
          <Button
            startIcon={<FontAwesomeIcon icon={faPhone} size="15px" />}
            sx={{
              textTransform: "none",
              fontSize: "18px",
              color: "#787878",
              "&:hover": { color: "black" },
            }}
          >
            Tel: +998935980539
          </Button>
        </a>
        <a href="tel:+998944192806">
          <Button
            startIcon={<FontAwesomeIcon icon={faPhone} size="15px" />}
            sx={{
              textTransform: "none",
              fontSize: "18px",
              color: "#787878",
              "&:hover": { color: "black" },
            }}
          >
            Tel: +998944192806
          </Button>
        </a>
        <a href="mailto:abduodirovhumoyun@gmail.com">
          <Button
            startIcon={<FontAwesomeIcon icon={faEnvelope} size="15px" />}
            sx={{
              textTransform: "none",
              fontSize: "18px",
              color: "#787878",
              "&:hover": { color: "black" },
            }}
          >
            1-Email manzil
          </Button>
        </a>
        <a href="mailto:abduodirovhumoyun@gmail.com">
          <Button
            startIcon={<FontAwesomeIcon icon={faEnvelope} size="15px" />}
            sx={{
              textTransform: "none",
              fontSize: "18px",
              color: "#787878",
              "&:hover": { color: "black" },
            }}
          >
            2-Email manzil
          </Button>
        </a>
      </Box>
      <Divider
        textAlign="center"
        color="white"
        sx={{
          width: "50%",
          margin: "0 auto",
          mb: 1,
          mt: 1,
        }}
      />
      <Box>
        <Typography sx={{ fontSize: "20px", color: "#787878", pt: 1, m: 0.8 }}>
          <FontAwesomeIcon icon={faLocationDot} />
          <strong style={{ paddingLeft: "7px" }}>Manzil</strong>: Toshkent,
          Yangiyo'l tumani, 42-maktab binosi
        </Typography>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{ backgroundColor: "#1f0d61" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ display: { xs: "flex", sm: "flex" } }}>
            <Box
              sx={{
                display: { sm: "none", xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Box sx={{ pr: 4 }}>
                <a href="mailto:abduodirovhumoyun@gmail.com">
                  <Button
                    startIcon={
                      <FontAwesomeIcon icon={faEnvelope} size="15px" />
                    }
                    sx={{
                      textTransform: "none",
                      fontSize: "18px",
                      color: "#787878",
                      "&:hover": { color: "#fdb515" },
                    }}
                  >
                    42-maktab@gmail.con
                  </Button>
                </a>
              </Box>
              <Box sx={{ pr: 4 }}>
                <a href="tel:+998944192806">
                  <Button
                    startIcon={<FontAwesomeIcon icon={faPhone} size="15px" />}
                    sx={{
                      textTransform: "none",
                      fontSize: "18px",
                      color: "#787878",
                      "&:hover": { color: "#fdb515" },
                    }}
                  >
                    Tel: +998944192806
                  </Button>
                </a>
              </Box>
            </Box>
            <a
              href="https://mpe.uz/front-end/assets_files/images/flag_big.png"
              target="_blank"
              rel="noreferrer"
            >
              <Fade duration={1000} top>
                <Button sx={{ color: "#fff" }}>
                  <img
                    src="https://mpe.uz/front-end/assets_files/images/flag.svg"
                    alt="bayroq"
                  />
                  <Typography
                    sx={{
                      pl: 0.5,
                      "&:hover": {
                        color: "#fdb515",
                      },
                    }}
                  >
                    Bayroq
                  </Typography>
                </Button>
              </Fade>
            </a>
            <Box>
              <Divider orientation="vertical" color="#b4b4b4" />
            </Box>
            <a
              href="https://mpe.uz/front-end/assets_files/images/emblem_big.png"
              target="_blank"
              rel="noreferrer"
            >
              <Fade top duration={1500}>
                <Button sx={{ color: "#fff" }}>
                  <img
                    src="https://mpe.uz/front-end/assets_files/images/emblem.svg"
                    alt="gerb"
                  />

                  <Typography
                    sx={{
                      pl: 0.5,
                      "&:hover": {
                        color: "#fdb515",
                      },
                    }}
                  >
                    Gerb
                  </Typography>
                </Button>
              </Fade>
            </a>
            <Box>
              <Divider orientation="vertical" color="#b4b4b4" />
            </Box>
            <a
              href="https://mpe.uz/front-end/assets_files/music/hymn.mp3"
              target="_blank"
              rel="noreferrer"
            >
              <Fade top duration={2000}>
                <Button sx={{ color: "#fff" }}>
                  <img
                    src="https://mpe.uz/front-end/assets_files/images/sound.svg"
                    alt="madhiya"
                  />
                  <Typography
                    sx={{
                      pl: 0.5,
                      "&:hover": {
                        color: "#fdb515",
                      },
                    }}
                  >
                    Madhiya
                  </Typography>
                </Button>
              </Fade>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          backgroundColor: "#1261A0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          pt: 1.2,
          pb: 1,
        }}
      >
        <Box onClick={Nav2}>
          <Button
            sx={{
              textTransform: "none",
              color: "white",

              "&:hover": {
                color: "#fdb515",
              },
            }}
            endIcon={<FontAwesomeIcon icon={faArrowDown} />}
          >
            Maktab haqida
          </Button>
        </Box>
        <Box onClick={handleClickScroll}>
          <Badge
            badgeContent="new"
            color="error"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                color: "white",
                "&:hover": {
                  color: "#fdb515",
                },
              }}
              endIcon={<FontAwesomeIcon icon={faRss} />}
            >
              So'nggi yangiliklar
            </Button>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

SecondNav.propTypes = {
  window: PropTypes.func,
};

export default SecondNav;
