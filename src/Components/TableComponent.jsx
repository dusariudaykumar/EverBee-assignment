import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { copyTextToClipboard } from "../Utils/copyTextToClipboard";
import { searchItem } from "../Utils/searchItem";
import { sortProducts } from "../Utils/sortProducts";
import { GraphComponent } from "./GraphComponent";

const titles = [
  "Title",
  "Price",
  "Quantity",
  "Views",
  "Image",
  "Review",
  "Tags",
];
const TableComponent = ({ dataList, loading }) => {
  const copyTextHandler = (text) => {
    console.log("clicked");
    copyTextToClipboard(text);
    toast.success("copied to clipboard");
  };
  const [sortBy, setSortBy] = useState("asc");
  const sortByHandler = (e) => {
    setSortBy(e.target.value);
  };

  //paginationHandler
  const [page, setPage] = useState(1);
  const paginationHandler = (event, value) => {
    setPage(value);
  };
  // searchFunctionality
  const [searchText, setSearchText] = useState("");
  const searchedList = searchItem(searchText, dataList).slice(
    (page - 1) * 5,
    (page - 1) * 5 + 5
  );

  const sortedProducts = sortProducts(sortBy, searchedList);

  return (
    <Container
      maxWidth="xl"
      style={{ textAlign: "center", marginBottom: "2rem" }}>
      <GraphComponent dataList={sortedProducts} loading={loading} />
      <Typography variant="h5" color="initial" fontWeight={600} gutterBottom>
        Listing details
      </Typography>

      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="primary" />
        </Box>
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
            }}>
            <TextField
              variant="outlined"
              label="Search the product"
              style={{ marginBottom: 20, width: "max-content" }}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FormControl size="medium">
              <InputLabel id="demo-simple-select-label">SortBy</InputLabel>
              <Select
                onChange={sortByHandler}
                variant="outlined"
                value={sortBy}
                label="SortBy"
                style={{ width: "10rem", marginBottom: 20 }}>
                <MenuItem value="desc">HighToLow</MenuItem>
                <MenuItem value="asc">LowToHigh</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TableContainer
            component={Paper}
            elevation={3}
            sx={{
              maxWidth: "100%",
              fontFamily: "Poppins",
              borderRadius: "1rem",
            }}>
            <Table stickyHeader sx={{ borderRadius: "1rem" }}>
              <TableHead>
                <TableRow>
                  {titles.map((header) => (
                    <TableCell
                      align="center"
                      key={header}
                      style={{
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        fontSize: "1.1rem",
                      }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedProducts.length > 0 ? (
                  sortedProducts?.map((product) => (
                    <TableRow
                      key={product.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "Poppins",
                        }}>
                        {product.title}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "Poppins",
                        }}>
                        ${product.price}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "Poppins",
                        }}>
                        {product.quantity}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "Poppins",
                        }}>
                        {product.views}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "Poppins",
                        }}>
                        <img src={product.Images} alt="product-img"></img>
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "Poppins",
                        }}>
                        {product.reviews}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "Poppins",
                          cursor: "pointer",
                        }}
                        onClick={() => copyTextHandler(product.tags)}>
                        {product.tags}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>
                      <Typography
                        textAlign="center"
                        variant="h6"
                        fontWeight="500"
                        fontFamily="Poppins">
                        No products found.Search for something else!
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      <Pagination
        sx={{
          padding: "1rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        count={Number((dataList.length / 5).toFixed(0))}
        color="primary"
        onChange={paginationHandler}
      />
    </Container>
  );
};

export { TableComponent };
