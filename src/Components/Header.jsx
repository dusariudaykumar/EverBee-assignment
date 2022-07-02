import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "4rem",
  },
  btnContainer: {
    display: "flex",
    gap: "10px",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer}>
      <Box>
        <Typography
          variant="h5"
          component="div"
          fontFamily="Poppins"
          fontWeight={500}
          color="secondary">
          Good Morning, Cody
        </Typography>
        <Typography variant="subtitle" fontFamily="Poppins" color="secondary">
          Take a look at the latest update for your shop PVTLmotions
        </Typography>
      </Box>

      <ButtonGroup className={classes.btnContainer} color="white">
        <IconButton
          style={{
            outline: "1px solid white",
            borderRadius: "4px",
            height: "2.5rem",
          }}>
          <CalendarTodayOutlinedIcon color="secondary" />
        </IconButton>
        <IconButton
          style={{
            outline: "1px solid white",
            borderRadius: "4px",
            height: "2.5rem",
          }}>
          <FactCheckOutlinedIcon color="secondary" />
        </IconButton>
        <IconButton
          style={{
            outline: "1px solid white",
            borderRadius: "4px",
            height: "2.5rem",
          }}>
          <ConstructionOutlinedIcon color="secondary" />
        </IconButton>
        <IconButton
          style={{
            outline: "1px solid white",
            borderRadius: "4px",
            height: "2.5rem",
          }}>
          <DarkModeOutlinedIcon color="secondary" />
        </IconButton>
        <IconButton
          style={{
            outline: "1px solid white",
            borderRadius: "4px",
            height: "2.5rem",
          }}>
          <NotificationsNoneOutlinedIcon color="secondary" />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
};

export { Header };