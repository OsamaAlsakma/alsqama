import { Input } from "@mui/material";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import SearchIcon from "@mui/icons-material/Search";

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
padding: 8px;
padding-right: 16px;
`;

const ChaletsFilterationSearchInput = styled(Input)`
  && {
    width: 70%;
    ${inputCommonProps}
  }
`;

const ChaletsFilterationSpecificSearchWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const ChaletsFilterationSpecificSearchInput = styled(Input)`
  && {
    width: 49%;
    ${inputCommonProps}
    color: black;
    border: none;
    background-color: ${palette.secondaryColor};
    input::placeholder {
      opacity: 0.8;
    }
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
  return (
    <StyledChaletsFilterationWrapper>
      <ChaletsFilterationSearchInput
        placeholder="أبحث عن أي شاليه.."
        disableUnderline
        endAdornment={<StyledSearchIcon />}
      />
      <ChaletsFilterationSpecificSearchWrapper className="price-city">
        <ChaletsFilterationSpecificSearchInput
          disableUnderline
          placeholder="أبحث حسب السعر.."
          startAdornment={
            <img src="./icons/input-money.svg" style={{ width: "36px" }} />
          }
        />
        <ChaletsFilterationSpecificSearchInput
          disableUnderline
          placeholder="أبحث حسب المدينة.."
          startAdornment={
            <img src="./icons/input-city.svg" style={{ width: "36px" }} />
          }
        />
      </ChaletsFilterationSpecificSearchWrapper>
    </StyledChaletsFilterationWrapper>
  );
};

export default ChaletsFilterationWrapper;
