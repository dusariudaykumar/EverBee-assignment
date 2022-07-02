import React from "react";
import { CardContent, Card, Typography, Icon, Paper } from "@mui/material";
import moneyIcon from "../Assert/Gross.png";
const CardItem = ({ cardInfo }) => {
  const { img, title, money, subText } = cardInfo;
  return (
    <Paper
      elevation={4}
      sx={{
        minWidth: "5rem",
        width: "230px",
        height: "200px",
        borderRadius: "1.5rem",
        cursor: "pointer",
      }}>
      <Card sx={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}>
        <CardContent
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: "1.4rem",
            gap: "1rem",
          }}>
          <Icon>
            <img src={img} alt={img} width="100%" height="100%" />
          </Icon>
          <Typography variant="h5" fontFamily="Poppins" fontWeight={600}>
            {title}
          </Typography>
          <div>
            <Typography variant="h6" fontFamily="Poppins" fontWeight={500}>
              {money}
            </Typography>
            <Typography fontFamily="Poppins" fontWeight={500}>
              {subText}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export { CardItem };
