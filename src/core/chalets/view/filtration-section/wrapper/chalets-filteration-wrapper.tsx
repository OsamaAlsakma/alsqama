/* eslint-disable react-hooks/exhaustive-deps */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { unNormalizeInput } from "~/bootstrap/helper/global-helper";
import { inputPaddingStyle } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import { Chalet } from "~/core/chalets/view/cards-section/wrapper/chalets-cards-wrapper";
import {
  ChaletsFilterationSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
  StyledChaletsFilterationWrapper,
  StyledSearchIcon,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import {
  FilterationASpecificSearchInput,
  FilterationDatesAndOtherWrapper,
} from "~/core/hotels/view/items-cards-section/filteration/hotels-hotel-items-filteration-wrapper";
import FilterationStartAndEndDates from "~/generic/components/filteration/start-and-end-dates/hotels-hotel-items-filteration-start-and-end-dates";

type IChaletsFilterationWrapperProps = {
  setFilteredChalets: SetState<Chalet[]>;
  chalets: Chalet[];
};

const ChaletsFilterationWrapper = (props: IChaletsFilterationWrapperProps) => {
  const { setFilteredChalets, chalets } = props;

  useEffect(() => {
    setFilteredChalets(chalets);
  }, []);

  const [priceFilter, setPriceFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<Dayjs | null>();

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
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
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
        <FilterationDatesAndOtherWrapper>
          <FilterationStartAndEndDates
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
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
        </FilterationDatesAndOtherWrapper>
      </StyledChaletsFilterationWrapper>
    </LocalizationProvider>
  );
};

export default ChaletsFilterationWrapper;
