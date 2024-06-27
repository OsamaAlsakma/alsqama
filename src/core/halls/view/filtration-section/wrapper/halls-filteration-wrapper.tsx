/* eslint-disable react-hooks/exhaustive-deps */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { appBaseUrl, unNormalizeInput } from "~/bootstrap/helper/global-helper";
import {
  FilterationASpecificSearchInput,
  FilterationDatesAndOtherWrapper,
  FilterationTwoInputsWrapper,
  inputPaddingStyle,
} from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import {
  ChaletsFilterationSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
  StyledChaletsFilterationWrapper,
  StyledSearchIcon,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import { Hall } from "~/core/halls/view/cards-section/wrapper/halls-cards-wrapper";
import FilterationStartAndEndDates from "~/generic/components/filteration/start-and-end-dates/hotels-hotel-items-filteration-start-and-end-dates";

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
  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<Dayjs | null>();

  const applyFilters = () => {
    const filteredHalls = halls.filter((hall) => {
      const passPriceFilter = priceFilter
        ? hall.pricePerNight <= parseFloat(priceFilter)
        : true;
      const passCityFilter = cityFilter
        ? hall.location?.includes(cityFilter)
        : true;
      const passNameFilter = nameFilter ? hall.name.includes(nameFilter) : true;

      const passItemsWithValidDates =
        startDate && endDate
          ? !hall.reservedDates.some(
              (date) =>
                dayjs(date.start_date).isAfter(startDate) &&
                dayjs(date.end_date).isBefore(endDate)
            )
          : true;
      return (
        passPriceFilter &&
        passCityFilter &&
        passNameFilter &&
        passItemsWithValidDates
      );
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
  }, [priceFilter, cityFilter, nameFilter, startDate, endDate]);
  const { t } = useTranslation();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
      <StyledChaletsFilterationWrapper>
        <ChaletsFilterationSearchInput
          placeholder={t(langKey.search.searchForAnyHall)}
          disableUnderline
          endAdornment={<StyledSearchIcon />}
          inputProps={{
            style: inputPaddingStyle,
          }}
          onChange={handleOnNameChange}
        />
        <FilterationDatesAndOtherWrapper>
          {/* Dates */}
          <FilterationStartAndEndDates
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <FilterationTwoInputsWrapper>
            {/* Price */}
            <FilterationASpecificSearchInput
              onChange={handleOnPriceChange}
              disableUnderline
              value={priceFilter}
              placeholder={t(langKey.search.writePrice)}
              startAdornment={
                <ChaletsFilterationSpecificSearchInputIcon
                  src={`/${appBaseUrl}/icons/input-money.svg`}
                />
              }
              inputProps={{
                style: inputPaddingStyle,
              }}
            />
            {/* City */}
            <FilterationASpecificSearchInput
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
          </FilterationTwoInputsWrapper>
        </FilterationDatesAndOtherWrapper>
      </StyledChaletsFilterationWrapper>
    </LocalizationProvider>
  );
};

export default HallsFilterationWrapper;
