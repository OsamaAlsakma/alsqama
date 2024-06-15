import ShareIcon from "@mui/icons-material/Share";

import { Button } from "@mui/material";
import styled from "styled-components";
import {
  mediumScreenSize,
  mainFontFamily,
  primaryColor,
} from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";

export const StyledDetailsFastDescriptionItemsAndShareWrapper = styled(
  HandlingSectionPaddingWrapper
)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0px;
  gap: 4px;
  @media (max-width: ${mediumScreenSize}) {
    flex-direction: column;
  }
`;
export const DetailsFastDescriptionItemsWrapper = styled.div`
  display: flex;
  gap: 4px 24px;
  flex-wrap: wrap;
`;

export const DetailsFastDescriptionButton = styled(Button)`
  && {
    font-family: ${mainFontFamily};
    font-weight: bold;
    color: black;
    display: flex;
    padding: 8px 8px 2px;
    gap: 8px;
    width: fit-content;
    &:hover {
      background-color: #0000000a;
    }
  }
`;

export const DetailsFastDescriptionShareIcon = styled(ShareIcon)`
  color: ${primaryColor};
  margin-bottom: 4px;
`;
