import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../../hooks";
import { GlobalStyles } from "../../global";
import { theme } from "../../theme";
import { Burger, Menu } from "../Second-Nav";
import FocusLock from "react-focus-lock";
import { Box } from "@mui/material";

function Burgerking() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Box sx={{ background: "#328695", pt: 1.5, pb: 1.5 }}>
      <Box>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Box ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />

              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </Box>
        </ThemeProvider>
      </Box>
          <Box>
              
      </Box>
    </Box>
  );
}

export default Burgerking;
