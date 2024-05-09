/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { unNormalizeInput } from "~/bootstrap/helper/global-helper";
import { inputPaddingStyle } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import {
  ChaletsFilterationSearchInput,
  ChaletsFilterationSpecificSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
  ChaletsFilterationSpecificSearchWrapper,
  StyledChaletsFilterationWrapper,
  StyledSearchIcon,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import { Hall } from "~/core/halls/view/cards-section/wrapper/halls-cards-wrapper";

type IHallsFilterationWrapperProps = {
  setFilteredHalls: SetState<Hall[]>;
  halls: Hall[];
};

const HallsFilterationWrapper = (props: IHallsFilterationWrapperProps) => {
  const { setFilteredHalls, halls } = props;

  useEffect(() => {
    setFilteredHalls(halls);
  }, []);

  const [priceFilter, setPriceFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const applyFilters = () => {
    const filteredHalls = halls.filter((chalet) => {
      const passPriceFilter = priceFilter
        ? chalet.pricePerNight <= parseFloat(priceFilter)
        : true;
      const passCityFilter = cityFilter
        ? chalet.location.includes(cityFilter)
        : true;
      const passNameFilter = nameFilter
        ? chalet.name.includes(nameFilter)
        : true;
      return passPriceFilter && passCityFilter && passNameFilter;
    });
    setFilteredHalls(filteredHalls);
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
        placeholder="أبحث عن أي صالة.."
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

export default HallsFilterationWrapper;
