import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";

const StyledChaletsFilterationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 0px 32px 0px;
`;

const inputCommonProps = `
border-radius: 32px;
border: 1px solid black;
font-family: Tajawal;
padding: 6px;
`;

const ChaletsFilterationSearchInput = styled(Input)`
  && {
    padding-right: 16px !important;
    ${inputCommonProps}
    width: 40%;
    @media (max-width: ${palette.largeScreenSize}) {
      width: 60%;
    }
    @media (max-width: ${palette.mediumScreenSize}) {
      width: 100%;
    }
  }
`;

const ChaletsFilterationSpecificSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 40%;
  @media (max-width: ${palette.largeScreenSize}) {
    width: 60%;
  }
  @media (max-width: ${palette.mediumScreenSize}) {
    width: 100%;
  }
`;

const ChaletsFilterationSpecificSearchInput = styled(Input)`
  && {
    ${inputCommonProps}
    color: black;
    border: none;
    background-color: ${palette.secondaryColor};
    input::placeholder {
      opacity: 0.8;
    }
    width: 49%;
    font-size: 14px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  background-color: ${palette.primaryColor};
  padding: 4px;
  border-radius: 50%;
  color: white;
  width: 32px !important;
  height: 32px !important;
`;

const ChaletsFilterationWrapper = () => {
  const inputPaddingStyle = {
    paddingTop: "6px",
    paddingBottom: "0px",
  };
  return (
    <StyledChaletsFilterationWrapper>
      <ChaletsFilterationSearchInput
        placeholder="أبحث عن أي شاليه.."
        disableUnderline
        endAdornment={<StyledSearchIcon />}
        inputProps={{
          style: inputPaddingStyle,
        }}
      />
      <ChaletsFilterationSpecificSearchWrapper className="price-city">
        <ChaletsFilterationSpecificSearchInput
          disableUnderline
          placeholder="أكتب السعر.."
          startAdornment={
            <img src="./icons/input-money.svg" style={{ width: "32px" }} />
          }
          inputProps={{
            style: inputPaddingStyle,
          }}
        />
        <ChaletsFilterationSpecificSearchInput
          disableUnderline
          placeholder="أكتب المدينة.."
          startAdornment={
            <img src="./icons/input-city.svg" style={{ width: "32px" }} />
          }
          inputProps={{
            style: inputPaddingStyle,
          }}
        />
      </ChaletsFilterationSpecificSearchWrapper>
    </StyledChaletsFilterationWrapper>
  );
};

export default ChaletsFilterationWrapper;
