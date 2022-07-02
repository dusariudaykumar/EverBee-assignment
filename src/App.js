import { Box, Grid } from "@mui/material";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { SideBar } from "./Components";
import DashBoardPage from "./Pages/DashBoardPage";
import { Toaster } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    alignItems: "flex-start",
    width: "100%",
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={true} />
      <Box>
        <Grid className={classes.gridContainer} container columns={12}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
            <DashBoardPage />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
