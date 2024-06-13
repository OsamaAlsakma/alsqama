/* eslint-disable react-hooks/exhaustive-deps */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { unNormalizeInput } from "~/bootstrap/helper/global-helper";
import {
  FilterationASpecificSearchInput,
  FilterationDatesAndOtherWrapper,
  inputPaddingStyle,
} from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
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
        ? hall.location.includes(cityFilter)
        : true;
      const passNameFilter = nameFilter ? hall.name.includes(nameFilter) : true;

      const passItemsWithValidDates =
        startDate && endDate
          ? !hall.reservedDates.some(
              (date) =>
                dayjs(date).isAfter(startDate) && dayjs(date).isBefore(endDate)
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
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
        <FilterationDatesAndOtherWrapper>
          {/* Dates */}
          <FilterationStartAndEndDates
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          {/* Price */}
          <FilterationASpecificSearchInput
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
          {/* City */}
          <FilterationASpecificSearchInput
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
        </FilterationDatesAndOtherWrapper>
      </StyledChaletsFilterationWrapper>
    </LocalizationProvider>
  );
};

export default HallsFilterationWrapper;
