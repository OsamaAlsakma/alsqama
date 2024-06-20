import Avatar from "@mui/material/Avatar/Avatar";
import styled from "styled-components";
import { primaryColor } from "~/bootstrap/helper/global-helper";

export const StyledHeaderUserAvatar = styled(Avatar)`
  && {
    width: 33px;
    height: 33px;
    cursor: pointer;
    background-color: ${primaryColor};
  }
`;
