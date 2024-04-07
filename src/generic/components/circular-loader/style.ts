import Box from "@mui/material/Box/Box";
import styled from "styled-components";

export const StyledLoaderBox = styled(Box)`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  background: white;
  opacity: 0.4;
  justify-content: center;
`;

export const StyledFullAreaLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;
