import "./styles.css";
import { Box, Typography } from "@mui/material";
import SelectCountry from "./components/SelectCountry";

export default function App() {
  return (
    <Box className="App" p={4}>
      <Typography variant="h4">Search And Select Country Code</Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <SelectCountry />
      </Box>
    </Box>
  );
}
