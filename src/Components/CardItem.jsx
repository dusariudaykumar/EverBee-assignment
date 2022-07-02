import React from "react";
import { CardContent, Card, Typography, Icon, Paper } from "@mui/material";

const CardItem = ({ cardInfo }) => {
  const { img, title, money, subText } = cardInfo;
  return (
    <Paper
      elevation={4}
      sx={{
        width: "13rem",
        height: "10rem",
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
            padding: "1rem",
            gap: "1rem",
          }}>
          <Icon sx={{ mt: "5px" }}>
            <img src={img} alt={img} width="100%" height="100%" />
          </Icon>
          <Typography
            fontSize="1rem"
            variant="h6"
            lineHeight={1}
            fontFamily="Poppins"
            fontWeight={600}
            sx={{
              color: "#707070",
            }}>
            {title}
          </Typography>
          <div>
            <Typography
              fontSize="1rem"
              variant="subtitle1"
              fontFamily="Poppins"
              fontWeight={500}>
              {money}
            </Typography>
            <Typography
              variant="body"
              fontSize="12px"
              fontFamily="Poppins"
              fontWeight={500}>
              {subText}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export { CardItem };
