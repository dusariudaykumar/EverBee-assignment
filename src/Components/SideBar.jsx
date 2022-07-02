import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../Assert/logo.png";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import userAvatar from "../Assert/userAvatar.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { TbLetterR } from "react-icons/tb";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import HelpIcon from "@mui/icons-material/Help";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import avatarImg from "../Assert/Ellipse.png";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  avatarBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    color: "black",
    width: "100%",
  },
}));
const SideBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box component="img" src={logo} alt="logo" p="1rem" my={1} />
      <Box>
        <Paper
          elevation={3}
          sx={{
            borderRadius: "10px",
            width: "100%",
          }}>
          <Button className={classes.avatarBtnContainer}>
            <Box
              sx={{
                display: "inline-flex",
                gap: "10px",
                alignItems: "center",
                marginRight: "auto",
              }}>
              <Avatar src={avatarImg} />
              <Typography color="black" fontFamily="Poppins" fontWeight={500}>
                PVTLmotions
              </Typography>
            </Box>
            <KeyboardArrowDownIcon
              sx={{
                color: "black",
              }}
            />
          </Button>
        </Paper>
        <Box sx={{ width: "100%" }}>
          <List component="nav" sx={{ padding: "4px", width: "max-content" }}>
            <ListItemButton divider>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
                primary="Dashboard"
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText
                primary="My Shop"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
              <KeyboardArrowDownIcon
                sx={{
                  color: "black",
                }}
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText
                primary="Research Tools"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
              <KeyboardArrowDownIcon
                sx={{
                  color: "black",
                }}
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText
                primary="Wishlist"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <TbLetterR fontSize="1.2rem" />
              </ListItemIcon>
              <ListItemText
                primary="Trademark Analyzer"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <LanguageTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Affiliate Program"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <DriveFolderUploadRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Upgrade"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText
                primary="Support"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
            </ListItemButton>

            <ListItemButton divider>
              <ListItemIcon>
                <StorageOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Send Feedback"
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              />
            </ListItemButton>
          </List>
        </Box>
      </Box>
      <Divider sx={{ mt: "2rem" }} />
      <Button className={classes.avatarBtnContainer} p={1}>
        <Box
          sx={{
            display: "inline-flex",
            gap: "10px",
            alignItems: "center",
            marginRight: "auto",
            paddingLeft: "10px",
          }}>
          <Avatar src={userAvatar} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography color="black" fontFamily="Poppins" fontWeight={500}>
              Cody
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight={500}
              variant="span"
              sx={{
                textTransform: "lowerCase",
                color: "black",
              }}>
              cody.pvtl07@gmail.com
            </Typography>
          </div>
        </Box>
        <KeyboardArrowUpIcon
          sx={{
            color: "black",
          }}
        />
      </Button>
    </Container>
  );
};

export { SideBar };
