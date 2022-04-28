import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import {
  IconButton,
  TextField,
  InputAdornment,
  FormControl,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import theme from "./style";
import { ThemeProvider } from "@mui/material/styles";

interface ZipCodeInputProps {
  placeholder?: string;
  errorText: string;
  helperText: string;
  label: string;
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = (props) => {
  const { errorText, helperText, label } = props;

  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const handleInput = (e: any) => {
    const numRegex = /[0-9]+$/;

    if (e.target.value == "" || numRegex.test(e.target.value)) {
      setInput(e.target.value);
    } else {
      return;
    }
  };

  const handleClick = () => {
    setInput("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (input.length === 5) {
      fetch(
        `https://us-zipcode.api.smartystreets.com/lookup?auth-id=${process.env.REACT_APP_AUTH_ID}&auth-token=${process.env.REACT_APP_AUTH_TOKEN}&zipcode=${input}`
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((err) => console.log(err));
    }
  }, [input]);

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <FormControl onSubmit={handleSubmit}>
          <TextField
            onChange={handleInput}
            label={label}
            type="text"
            value={input}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MarkunreadMailboxIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton onClick={handleClick} type="submit">
                  {!input ? (
                    <SearchIcon />
                  ) : (
                    <CloseIcon onClick={handleClick} />
                  )}
                </IconButton>
              ),
            }}
          />
          <>
            {!input ? (
              <Typography
                style={{ marginBlock: ".5rem" }}
                align="center"
                component="span"
                color={theme.status.info}
              >
                Please, enter a five (5) digit number
              </Typography>
            ) : input.length !== 5 && input.length !== 0 ? (
              <Typography
                align="center"
                component="span"
                color={theme.status.error}
                style={{ marginBlock: ".5rem" }}
              >
                {errorText}
              </Typography>
            ) : !data ? null : !("zipcodes" in data["0"]) ? (
              <Typography
                align="center"
                component="span"
                color={theme.status.warning}
                style={{ marginBlock: ".5rem" }}
              >
                {helperText}
              </Typography>
            ) : (
              <Typography
                align="center"
                component="span"
                color={theme.status.success}
                style={{ marginBlock: ".5rem" }}
              >
                {data["0"]["zipcodes"]["0"]["zipcode"]}{" "}
                {data["0"]["zipcodes"]["0"]["default_city"]},{" "}
                {data["0"]["zipcodes"]["0"]["state"]}
              </Typography>
            )}
          </>
        </FormControl>
      </Grid>
    </ThemeProvider>
  );
};

export default ZipCodeInput;
