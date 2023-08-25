import { useState } from "react";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { countries } from "../utils/countries";
import CountryResultItem from "./CountryResultItem";
import CountryFlag from "./CountryFlag";

const SelectCountry = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(countries[5]);

  const searchForCountry = (e) => {
    const q = e.target.value;
    setSelectedCountry(q);
    if (!q) {
      setSearchResult([]);
      return;
    }
    const result = countries.filter((country) =>
      country.label.toLowerCase().includes(q)
    );

    setSearchResult(result);
  };

  return (
    <Stack width="400px">
      <TextField
        value={
          selectedCountry.phone ? `+${selectedCountry.phone}` : selectedCountry
        }
        onChange={searchForCountry}
        onFocus={(e) => {
          setSearchResult(countries);
          e.target.select();
        }}
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CountryFlag country={selectedCountry} />
            </InputAdornment>
          )
        }}
        sx={{ maxWidth: "120px" }}
      />
      {searchResult.length > 0 && (
        <Box maxHeight={280} sx={{ overflowY: "scroll" }}>
          {searchResult.map((result) => {
            return (
              <CountryResultItem
                country={result}
                key={result.label}
                onItemSelect={(c) => {
                  setSelectedCountry(c);
                  setSearchResult([]);
                }}
              />
            );
          })}
        </Box>
      )}
    </Stack>
  );
};

export default SelectCountry;
