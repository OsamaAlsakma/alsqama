/* eslint-disable react-hooks/exhaustive-deps */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { unNormalizeInput } from "~/bootstrap/helper/global-helper";
import {
  FilterationASpecificSearchInput,
  FilterationDatesAndOtherWrapper,
  FilterationTwoInputsWrapper,
  inputPaddingStyle,
} from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import { Appartment } from "~/core/Apartments/view/cards-section/wrapper/appartments-cards-wrapper";
import {
  ChaletsFilterationSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
  StyledChaletsFilterationWrapper,
  StyledSearchIcon,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import FilterationStartAndEndDates from "~/generic/components/filteration/start-and-end-dates/hotels-hotel-items-filteration-start-and-end-dates";
type IAppartmentsFilterationWrapperProps = {
  setFilteredAppartments: SetState<Appartment[]>;
  appartments: Appartment[];
};

const ApartmentsFilterationWrapper = (
  props: IAppartmentsFilterationWrapperProps
) => {
  const { setFilteredAppartments, appartments } = props;

  useEffect(() => {
    setFilteredAppartments(appartments);
  }, []);

  const [priceFilter, setPriceFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<Dayjs | null>();

  const applyFilters = () => {
    const filteredAppartments = appartments.filter((appartment) => {
      const passPriceFilter = priceFilter
        ? appartment.pricePerNight <= parseFloat(priceFilter)
        : true;
      const passCityFilter = cityFilter
        ? appartment.location?.includes(cityFilter)
        : true;
      const passNameFilter = nameFilter
        ? appartment.name.includes(nameFilter)
        : true;
      const passItemsWithValidDates =
        startDate && endDate
          ? !appartment.reservedDates.some(
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
    setFilteredAppartments(filteredAppartments);
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
          placeholder="أبحث عن أي شقة.."
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
            {/* price */}
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
          </FilterationTwoInputsWrapper>
        </FilterationDatesAndOtherWrapper>
      </StyledChaletsFilterationWrapper>
    </LocalizationProvider>
  );
};

export default ApartmentsFilterationWrapper;
