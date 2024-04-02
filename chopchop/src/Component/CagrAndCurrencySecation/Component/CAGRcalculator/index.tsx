import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import {
  CAGRInputContainer,
  ContainerCagrCalculation,
  StyledTextField,
  StyledTypography,
} from "./styled";
import { useEffect, useState } from "react";
import CAGRPieChart from "./CAGRPieChart";

const CAGRCalculator = () => {
  const [presentValue, setPresentValue] = useState(0);
  const [expectedValue, setExpectedValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [cagr, setCagr] = useState(0); // State to store calculated CAGR
  useEffect(() => {
    setCagr((prevCagr) => {
      if (presentValue > 0 && expectedValue > 0 && duration > 0) {
        const newCagr =
          Math.pow(expectedValue / presentValue, 1 / duration) - 1;
        return newCagr * 100; // Convert to percentage
      } else {
        return prevCagr; // Keep previous value if invalid input
      }
    });
  }, [presentValue, expectedValue, duration, cagr]);
  const handleCalculateCAGR = () => {
    if (presentValue > 0 && expectedValue > 0 && duration > 0) {
      const calculatedCagr =
        Math.pow(expectedValue / presentValue, 1 / duration) - 1;
      setCagr(calculatedCagr * 100); // Convert to percentage

      //   alert(`CAGR: ${cagr.toFixed(2)}%`);
    } else {
      alert(
        "Please enter valid positive values for Present Value, Expected Value, and Duration."
      );
    }
  };

  return (
    <>
      <ContainerCagrCalculation>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
          >
            CAGR Calculator
          </Typography>
          <Box
            sx={{
              height: "90%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CAGRInputContainer>
              <StyledTextField
                type="number"
                // label="Present Value ( ₹ 0)"
                value={presentValue}
                onChange={(e) => setPresentValue(parseFloat(e.target.value))}
              />
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  backgroundColor: "red",
                  height: "30px",
                  alignSelf: "center",
                }}
              />
              <StyledTypography>Present Value ( ₹ 0)</StyledTypography>
            </CAGRInputContainer>
            <CAGRInputContainer>
              <StyledTextField
                type="number"
                // label="Expected Value ( ₹)"
                value={expectedValue}
                onChange={(e) => setExpectedValue(parseFloat(e.target.value))}
              />
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  backgroundColor: "red",
                  height: "30px",
                  alignSelf: "center",
                }}
              />
              <StyledTypography
              // component={"span"}
              >
                Expected Value ( ₹)
              </StyledTypography>
            </CAGRInputContainer>
            <CAGRInputContainer>
              <StyledTextField
                type="number"
                // label="Duration (in Yr)"
                value={duration}
                onChange={(e) => setDuration(parseFloat(e.target.value))}
              />
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  backgroundColor: "red",
                  height: "30px",
                  alignSelf: "center",
                }}
              />
              <StyledTypography>Duration (in Yr)</StyledTypography>
            </CAGRInputContainer>
            <Button
              sx={{
                backgroundColor: "rgba(254,102,0,0.1)",
                height: "10px",
                marginTop: "10px",
                padding: "10px",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(254,102,0,0.8)",
                },
              }}
              variant="contained"
              onClick={handleCalculateCAGR}
            >
              Calculate CAGR
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "50%", height: "100%" }}>
          <CAGRPieChart
            presentValue={presentValue}
            expectedValue={expectedValue}
            CAGRPercentage={cagr}
          />
        </Box>
      </ContainerCagrCalculation>
    </>
  );
};

export default CAGRCalculator;
