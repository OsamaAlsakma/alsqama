import { ChangeEvent } from "react";
import { SetState } from "~/bootstrap/helper/global-types";
import { Chalet } from "~/core/chalets/view/cards-section/wrapper/chalets-cards-wrapper";
import {
  StyledChaletsFilterationWrapper,
  ChaletsFilterationSearchInput,
  StyledSearchIcon,
  ChaletsFilterationSpecificSearchWrapper,
  ChaletsFilterationSpecificSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
} from "~/core/chalets/view/filtration-section/wrapper/style";

type IChaletsFilterationWrapperProps = {
  setChalets: SetState<Chalet[]>;
};

const ChaletsFilterationWrapper = (props: IChaletsFilterationWrapperProps) => {
  const { setChalets } = props;
  const inputPaddingStyle = {
    paddingTop: "6px",
    paddingBottom: "0px",
  };

  const handleOnPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numericValue: number = parseFloat(value);

    setChalets((chalets) => {
      const filteredChalets = numericValue
        ? chalets.filter((chalet) => chalet.price <= numericValue)
        : chalets;
      return filteredChalets;
    });
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
      <ChaletsFilterationSpecificSearchWrapper>
        <ChaletsFilterationSpecificSearchInput
          onChange={handleOnPriceChange}
          disableUnderline
          placeholder="أكتب السعر.."
          startAdornment={
            <ChaletsFilterationSpecificSearchInputIcon src="./icons/input-money.svg" />
          }
          inputProps={{
            style: inputPaddingStyle,
          }}
        />
        <ChaletsFilterationSpecificSearchInput
          disableUnderline
          placeholder="أكتب المدينة.."
          startAdornment={
            <ChaletsFilterationSpecificSearchInputIcon src="./icons/input-city.svg" />
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
