import CircularProgress from "@mui/material/CircularProgress";
import {
  StyledFullAreaLoaderContainer,
  StyledLoaderBox,
} from "~/generic/components/circular-loader/style";

const CircularLoader = () => {
  return (
    <StyledFullAreaLoaderContainer>
      <StyledLoaderBox>
        <CircularProgress sx={{ color: "black" }} />
      </StyledLoaderBox>
    </StyledFullAreaLoaderContainer>
  );
};

export default CircularLoader;
