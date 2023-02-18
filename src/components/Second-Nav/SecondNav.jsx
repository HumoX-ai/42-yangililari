import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@mui/material";

const drawerWidth = 240;

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary="number" />
        </ListItemButton>
      </ListItem>
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

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <a
              href="https://mpe.uz/front-end/assets_files/images/flag_big.png"
              target="_blank"
              rel="noreferrer"
            >
              <Button sx={{ color: "#fff" }}>
                <img
                  src="https://mpe.uz/front-end/assets_files/images/flag.svg"
                  alt="bayroq"
                />
                <Typography sx={{ pl: 0.5 }}>Bayroq</Typography>
              </Button>
            </a>
            <a
              href="https://mpe.uz/front-end/assets_files/images/emblem_big.png"
              target="_blank"
              rel="noreferrer"
            >
              <Button sx={{ color: "#fff" }}>
                <img
                  src="https://mpe.uz/front-end/assets_files/images/emblem.svg"
                  alt="gerb"
                />
                <Typography sx={{ pl: 0.5 }}>Gerb</Typography>
              </Button>
            </a>
            <a
              href="https://mpe.uz/front-end/assets_files/music/hymn.mp3"
              target="_blank"
              rel="noreferrer"
            >
              <Button sx={{ color: "#fff" }}>
                <img
                  src="https://mpe.uz/front-end/assets_files/images/sound.svg"
                  alt="madhiya"
                />
                <Typography sx={{ pl: 0.5 }}>Madhiya</Typography>
              </Button>
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
            sx={{ textTransform: "none", color: "white" }}
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
              sx={{ textTransform: "none", color: "white" }}
              endIcon={<FontAwesomeIcon icon={faArrowDown} />}
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
