import { Box, styled } from "@mui/material";

export const QuickActionContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "50px",
  paddingTop: "18px",
  paddingBottom: "18px",
  gap: "10px",
});

export const QuickActionElement = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins, sans-serif",
  height: "50px",
  width: "50px",
  border: "1px solid rgb(254,102,0)",
  borderRadius: "5px",
});
