/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { unNormalizeInput } from "~/bootstrap/helper/global-helper";
import { SetState } from "~/bootstrap/helper/global-types";
import { Chalet } from "~/core/chalets/view/cards-section/wrapper/chalets-cards-wrapper";
import {
  ChaletsFilterationSearchInput,
  ChaletsFilterationSpecificSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
  ChaletsFilterationSpecificSearchWrapper,
  StyledChaletsFilterationWrapper,
  StyledSearchIcon,
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

  const [priceFilter, setPriceFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const applyFilters = () => {
    const filteredChalets = chalets.filter((chalet) => {
      const passPriceFilter = priceFilter
        ? chalet.price <= parseFloat(priceFilter)
        : true;
      const passCityFilter = cityFilter
        ? chalet.location.includes(cityFilter)
        : true;
      const passNameFilter = nameFilter
        ? chalet.name.includes(nameFilter)
        : true;
      return passPriceFilter && passCityFilter && passNameFilter;
    });
    setFilteredChalets(filteredChalets);
  };

  const handleOnPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPriceFilter(unNormalizeInput(value));
  };

  const handleOnCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCityFilter(value);
  };

  const handleOnNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNameFilter(value);
  };

  useEffect(() => {
    applyFilters();
  }, [priceFilter, cityFilter, nameFilter]);

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
          value={priceFilter}
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
