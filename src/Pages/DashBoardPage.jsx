import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardItem, Header, TableComponent } from "../Components";
import { cardData } from "./cardData";

const DashBoardPage = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await axios.get(
        "https://everbee-web-dev-ext.herokuapp.com/listing?limit=20&offset=10"
      );
      setDataList(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Box
        m={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}>
        {cardData.map((cardInfo) => (
          <CardItem key={cardInfo.img} cardInfo={cardInfo} />
        ))}
      </Box>
      {/* <GraphComponent dataList={dataList} loading={loading} /> */}
      <TableComponent dataList={dataList} loading={loading} />
    </React.Fragment>
  );
};

export default DashBoardPage;
