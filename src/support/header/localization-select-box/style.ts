import FormControl from "@mui/material/FormControl/FormControl";
import styled from "styled-components";

export const StyledLocalizationButtonFormControl = styled(FormControl)`
  height: 38px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  outline: none;

  && {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
