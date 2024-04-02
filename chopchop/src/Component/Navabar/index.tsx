import SearchIcon from "@mui/icons-material/Search";
import { NavBarContainer, SearchContainerElement, SearchInput } from "./styled";
import { Box, Divider, Typography } from "@mui/material";
import useCharacterLimit from "../../CustomHook/UseCharacterLimit";
import ChopLogo from "../../assets/logo/chop logoo.svg";

const NavBar = () => {
  const { value, handleChange } = useCharacterLimit({ maxLength: 30 });
  return (
    <NavBarContainer>
      <Box>
        <img
          src={ChopLogo}
          alt="logo"
          style={{ width: "70px", height: "50px" }}
        />
      </Box>

      <SearchContainerElement>
        <div
          style={{
            display: "flex",
            placeItems: "center",
            gap: "20px",
          }}
        >
          <SearchIcon
            sx={{
              color: "rgb(254,102,0)",
              fontSize: "20px",
              cursor: "pointer",
            }}
          />

          <SearchInput
            placeholder="Search On Google "
            value={value}
            onChange={handleChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            placeItems: "center",
            background: "#111111",
            padding: "0.2",
            borderRadius: "5px",
            color: "white",
            gap: "10px",
          }}
        >
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
          Or
          <Typography
            sx={{
              color: "rgb(254,102,0)",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            CHOP
          </Typography>
        </div>
      </SearchContainerElement>
    </NavBarContainer>
  );
};

export default NavBar;
