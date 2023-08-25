import { Box } from "@mui/material";

const CountryFlag = ({ country }) => {
  if (!country.code) {
    return <Box width={20} />;
  }
  return (
    <Box>
      <img
        loading="lazy"
        src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
        alt={country.label}
      />
    </Box>
  );
};

export default CountryFlag;
