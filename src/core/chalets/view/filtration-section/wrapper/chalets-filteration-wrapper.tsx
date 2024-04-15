/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect } from "react";
import { delayExecutionFor } from "~/bootstrap/helper/global-helper";
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
  setFilteredChalets: SetState<Chalet[]>;
  chalets: Chalet[];
};

const ChaletsFilterationWrapper = (props: IChaletsFilterationWrapperProps) => {
  const { setFilteredChalets, chalets } = props;

  const inputPaddingStyle = {
    paddingTop: "6px",
    paddingBottom: "0px",
  };

  useEffect(() => {
    setFilteredChalets(chalets);
  }, []);

  const handleOnPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numericValue: number = parseFloat(value);
    delayExecutionFor((numericValue: number) => {
      const filteredChalets = numericValue
        ? chalets.filter((chalet) => chalet.price <= numericValue)
        : chalets;
      setFilteredChalets(filteredChalets);
    }, 500)(numericValue);
  };

  const handleOnCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    delayExecutionFor((value: string) => {
      const filteredChalets = value
        ? chalets.filter((chalet) => chalet.location.includes(value))
        : chalets;
      setFilteredChalets(filteredChalets);
    }, 500)(value);
  };

  const handleOnNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    delayExecutionFor((value: string) => {
      const filteredChalets = value
        ? chalets.filter((chalet) => chalet.name.includes(value))
        : chalets;
      setFilteredChalets(filteredChalets);
    }, 500)(value);
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
        onChange={handleOnNameChange}
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
          onChange={handleOnCityChange}
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
