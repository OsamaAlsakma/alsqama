import { Box, Modal } from "@mui/material";
import { styled } from "styled-components";

export const StyledAppModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow: auto;
`;

export const StyledAppModalBox = styled(Box)`
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 16px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  height: clamp(35%, 110px, 40%);
  width: 25%;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;
