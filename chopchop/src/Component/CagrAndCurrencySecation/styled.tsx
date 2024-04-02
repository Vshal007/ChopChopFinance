import { Box, styled } from "@mui/material";

interface ContainerBoxProps {
  height: string;
  width: string;
  scrollable: boolean;
}

export const MainContainerCagrSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "start",
  // border: "1px solid white ",

  width: "100%",
  height: "45%",
  gap: "10px",
});

// export const ContainerBox = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "start",
//   alignItems: "start",
//   width: "300px",
//   height: "100px",
//   gap: "10px",
//   backgroundColor: "rgba(17, 17, 17,0.7)",
//   border: "1px solid rgba(255, 255, 255, 0.6)",
// });

export const ContainerBox = styled(Box)((props: ContainerBoxProps) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  width: props.width,
  height: props.height,
  // gap: "10px",
  backgroundColor: "rgba(17, 17, 17,0.7)",
  overflowY: props.scrollable ? "scroll" : "hidden",
  padding: "2rem 1.5rem 2rem 1.5rem",
  borderRadius: "5px",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: "rgba(17, 17, 17,0.7)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(254,102,0)",
    borderRadius: "4px",
  },
}));
