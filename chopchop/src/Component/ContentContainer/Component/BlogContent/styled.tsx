import { Box, Typography, styled } from "@mui/material";

export const StyledTypography = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "12px",
  fontWeight: "bold",
  textAlign: "start",
});

export const BlogLinkContaniner = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  fontFamily: "Poppins, sans-serif",
  height: "50px",
  width: "100%",
  paddingTop: "18px",
  paddingBottom: "18px",
  borderBottom: "1px solid darkgrey",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  borderRadius: "5px",
  paddingLeft: "10px",

  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(81,87,88,1) 40%,rgba(191,121,60,1) 100%)}",
  },
}));

export const BlogLinkContainerSkeleton = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "5px",
  fontFamily: "Poppins, sans-serif",
  height: "20px",
  width: "100%",
  paddingTop: "18px",
  paddingBottom: "18px",
  borderBottom: "1px solid darkgrey",
  animation: "fade 1.5s infinite linear",
  backgroundColor: "rgba(17, 17, 17, 0.7)",
  overflowY: "hidden",
});
