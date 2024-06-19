/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { appBaseUrl, unNormalizeInput } from "~/bootstrap/helper/global-helper";
import { inputPaddingStyle } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
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

/**
 * This component contains three inputs for filtration, search by name, city, number of stars
 */
const HotelsFilterationWrapper = (props: IHotelsFilterationWrapperProps) => {
  const { setFilteredHotels, hotels } = props;

  useEffect(() => {
    setFilteredHotels(hotels);
  }, []);

  const [cityFilter, setCityFilter] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [numberOfStarsFilter, setNumberOfStarsFilter] = useState("");

  const applyFilters = () => {
    const filteredChalets = hotels.filter((hotel) => {
      const passCityFilter = cityFilter
        ? hotel.location.includes(cityFilter)
        : true;

      const passNameFilter = nameFilter
        ? hotel.hotelName.includes(nameFilter)
        : true;

      const passNumberOfStarsFilter = numberOfStarsFilter
        ? hotel.numberOfStars === parseFloat(numberOfStarsFilter)
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
    const value = unNormalizeInput(event.target.value);
    setNumberOfStarsFilter(value);
  };

  const handleOnNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNameFilter(value);
  };

  useEffect(() => {
    applyFilters();
  }, [cityFilter, nameFilter, numberOfStarsFilter]);

  const { t } = useTranslation();
  return (
    <StyledChaletsFilterationWrapper>
      <ChaletsFilterationSearchInput
        placeholder={t(langKey.search.searchForAnyHotel)}
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
          value={numberOfStarsFilter}
          placeholder={t(langKey.search.ratingRange)}
          startAdornment={
            <ChaletsFilterationSpecificSearchInputIcon
              src={`/${appBaseUrl}/icons/star.svg`}
            />
          }
          inputProps={{
            style: inputPaddingStyle,
          }}
        />
        <ChaletsFilterationSpecificSearchInput
          onChange={handleOnCityChange}
          disableUnderline
          placeholder={t(langKey.search.writeCity)}
          startAdornment={
            <ChaletsFilterationSpecificSearchInputIcon
              src={`/${appBaseUrl}/icons/input-city.svg`}
            />
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
