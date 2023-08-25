import { Box, Stack, styled, Typography } from "@mui/material";
import CountryFlag from "./CountryFlag";

const ItemWrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  textAlign: "left",
  padding: "8px 16px 8px 16px",
  backgroundColor: theme.palette.grey[100],
  "&:hover": { backgroundColor: theme.palette.grey[200] }
}));

const CountryResultItem = ({ country, onItemSelect }) => {
  return (
    <ItemWrapper
      onClick={() => {
        onItemSelect(country);
      }}
    >
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={2}
      >
        <CountryFlag country={country} />
        <Box>
          <Typography>+{country.phone}</Typography>
          <Typography variant="body2" color="grey.600">
            {country.label}
          </Typography>
        </Box>
      </Stack>
    </ItemWrapper>
  );
};

export default CountryResultItem;
