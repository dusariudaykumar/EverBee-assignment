import React from "react";
import { CardContent, Card, Typography, Icon, Paper } from "@mui/material";

const CardItem = ({ cardInfo }) => {
  const { img, title, money, subText } = cardInfo;
  return (
    <Paper
      elevation={4}
      sx={{
        width: "14rem",
        height: "12rem",
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
          <Icon sx={{ mt: "5px" }}>
            <img src={img} alt={img} width="100%" height="100%" />
          </Icon>
          <Typography
            fontSize="1.2rem"
            variant="h6"
            lineHeight={1}
            fontFamily="Poppins"
            fontWeight={600}>
            {title}
          </Typography>
          <div>
            <Typography
              fontSize="1.2rem"
              variant="h6"
              component="p"
              fontFamily="Poppins"
              fontWeight={500}>
              {money}
            </Typography>
            <Typography fontSize="1rem" fontFamily="Poppins" fontWeight={500}>
              {subText}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export { CardItem };
