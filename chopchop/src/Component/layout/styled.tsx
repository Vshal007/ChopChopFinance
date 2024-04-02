import { styled } from "@mui/material";

export const LayoutStyled = styled("div")({
  display: "flex", // Enable flexbox for layout control
  margin: 0, // Set all margins to 0
  padding: 0, // Set all padding to 0
  flexDirection: "column", // Arrange elements horizontally

  justifyContent: "start",
  background: "rgb(14, 14, 13)",
  width: "99vw",
  height: "98vh",
  gap: "10px",
});
