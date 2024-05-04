/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { SetState } from "~/bootstrap/helper/global-types";
import {
  ChaletsFilterationSearchInput,
  ChaletsFilterationSpecificSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
  ChaletsFilterationSpecificSearchWrapper,
  StyledChaletsFilterationWrapper,
  StyledSearchIcon,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import { Hotel } from "~/core/hotels/view/cards-section/wrapper/hotels-cards-wrapper";

type IHotelsFilterationWrapperProps = {
  setFilteredHotels: SetState<Hotel[]>;
  hotels: Hotel[];
};

const HotelsFilterationWrapper = (props: IHotelsFilterationWrapperProps) => {
  const { setFilteredHotels, hotels } = props;

  const inputPaddingStyle = {
    paddingTop: "6px",
    paddingBottom: "0px",
  };

  useEffect(() => {
    setFilteredHotels(hotels);
  }, []);

  const [cityFilter, setCityFilter] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [numberOfStarsFilter, setNumberOfStarsFilter] = useState<number>(0);

  const applyFilters = () => {
    const filteredChalets = hotels.filter((hotel) => {
      const passCityFilter = cityFilter
        ? hotel.location.includes(cityFilter)
        : true;

      const passNameFilter = nameFilter
        ? hotel.hotelName.includes(nameFilter)
        : true;

      const passNumberOfStarsFilter = numberOfStarsFilter
        ? hotel.numberOfStars >= numberOfStarsFilter
        : true;

      return passCityFilter && passNameFilter && passNumberOfStarsFilter;
    });
    setFilteredHotels(filteredChalets);
  };

  const handleOnCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCityFilter(value);
  };

  const handleOnNumberOfStarsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const numericValue: number = parseFloat(value);
    setNumberOfStarsFilter(numericValue);
  };

  const handleOnNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNameFilter(value);
  };

  useEffect(() => {
    applyFilters();
  }, [cityFilter, nameFilter, numberOfStarsFilter]);

  return (
    <StyledChaletsFilterationWrapper>
      <ChaletsFilterationSearchInput
        placeholder="أبحث عن أي فندق.."
        disableUnderline
        endAdornment={<StyledSearchIcon />}
        inputProps={{
          style: inputPaddingStyle,
        }}
        onChange={handleOnNameChange}
      />
      <ChaletsFilterationSpecificSearchWrapper>
        <ChaletsFilterationSpecificSearchInput
          onChange={handleOnNumberOfStarsChange}
          disableUnderline
          placeholder="التصنيف من 1 إلى 5.."
          startAdornment={
            <ChaletsFilterationSpecificSearchInputIcon src="./icons/star.svg" />
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

export default HotelsFilterationWrapper;
