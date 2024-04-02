import { styled } from "@mui/material";

export const NavBarContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  // justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgb(41, 41, 41)",
  // width: "90%",
  height: "50px",
  padding: "18px",
  // gap: "33%",
});

export const NavBarElement = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-start",
  alignItems: "center",
  fontFamily: "Poppins, sans-serif",
});

export const SearchBarElement = styled("div")({
  display: "flex",
  width: "16em",
  height: "10px",
  alignItems: "center",
  backgroundColor: "#111111",
  padding: "20px",
  borderRadius: "20px 20px 20px 20px",
  justifySelf: "center",
});

export const SearchContainerElement = styled("div")({
  display: "flex",
  marginLeft: "30%",
  justifyContent: "space-between",
  justifySelf: "center",
  height: "10px",
  alignItems: "center",
  backgroundColor: "#111111",
  padding: "20px",
  borderRadius: "20px 20px 20px 20px",
  "&:focus": {
    border: "1px solid rgba(254,102,0,0.2)",
  },
});

export const SearchInput = styled("input")({
  width: "20em",
  border: "transparent", // Set border to none here for the entire field
  color: "white",

  fontSize: "16px",
  fontFamily: "Helvetica, sans-serif",

  backgroundColor: "transparent",

  ":placeholder-shown": {
    // color: "#fe6600",
    color: "grey",
    fontSize: "20px",
  },

  outline: "none",
  "::placeholder": {
    color: "rgb(254,102,0)",
    fontSize: "16px",
  },
  "& .MuiInputBase-root": {
    color: "white",
    border: "none", // Inherit border: none from the parent
  },
  "& .MuiInputBase-input": {
    padding: "8px 12px",
  },
  "& .MuiInputBase-input:focus": {
    outline: "none", // Maintain outline removal on focus
    boxShadow: "0 0 0 ", // Add a subtle focus indicator
  },
});
