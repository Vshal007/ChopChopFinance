import { Box, Paper, Typography, styled } from "@mui/material";

export const ContainerCagrCalculation = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  width: "100%",
  height: "100%",
});

export const CAGRInputContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  border: "1px solid rgbA(254,102,0,0.4) ",
  padding: "4px",
  justifyContent: "center",
  gap: "8px",
  height: "25%",
  width: "92%",
  borderRadius: "5px",
  "&:hover": {
    border: "1px solid rgbA(254,102,0,0.8) ",

    // borderColor:
    //   "linear-gradient(90deg, rgba(81,87,88,1) 40%,rgba(191,121,60,1) 100%)}",
  },
});

export const StyledTextField = styled("input")({
  width: "67%",
  height: "100%",
  backgroundColor: "transparent",
  paddingLeft: "10px",
  //   border: "1px solid rgbA(254,102,0,0.4) ",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  color: "white",
  fontSize: "16px",
  fontFamily: "Helvetica, sans-serif",
  hideNumberArrows: "true",
  "&:focus": {
    outline: "none",
  },
});

export const StyledTypography = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins, sans-serif",
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "10px",
  fontWeight: "bold",
  textAlign: "start",
});
