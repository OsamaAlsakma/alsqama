/* eslint-disable react-hooks/exhaustive-deps */
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FilterationASpecificSearchInput,
  FilterationDatesAndOtherWrapper,
  FilterationTwoInputsWrapper,
  inputPaddingStyle,
} from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import {
  ChaletsFilterationSpecificSearchInputIcon,
  StyledChaletsFilterationWrapper,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import { HotelItem } from "~/core/hotels/view/items-cards-section/wrapper/hotel-items-cards-wrapper";
import FilterationStartAndEndDates from "~/generic/components/filteration/start-and-end-dates/hotels-hotel-items-filteration-start-and-end-dates";

type IHotelsFilterationWrapperProps = {
  setFilteredHotelItems: SetState<HotelItem[]>;
  hotelItems: HotelItem[];
};

const HotelsHotelItemsFilterationWrapper = (
  props: IHotelsFilterationWrapperProps
) => {
  const { setFilteredHotelItems, hotelItems } = props;

  useEffect(() => {
    setFilteredHotelItems(hotelItems);
  }, []);

  const [minimumPricePerNight, setMinimumPricePerNight] = useState<string>("");
  const [maximumPricePerNight, setMaximumPricePerNight] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<Dayjs | null>();

  const applyFilters = () => {
    const filteredCHotelItems = hotelItems.filter((hotelItem) => {
      const passMinimumPriceFilter = minimumPricePerNight
        ? hotelItem.pricePerNight >= parseFloat(minimumPricePerNight)
        : true;

      const passMaximumPriceFilter = maximumPricePerNight
        ? hotelItem.pricePerNight <= parseFloat(maximumPricePerNight)
        : true;

      const passItemsWithValidDates =
        startDate && endDate
          ? !hotelItem.reservedDates.some(
              (reservedDate) =>
                dayjs(reservedDate.start_date).isAfter(startDate) &&
                dayjs(reservedDate.end_date).isBefore(endDate)
            )
          : true;

      return (
        passMinimumPriceFilter &&
        passMaximumPriceFilter &&
        passItemsWithValidDates
      );
    });
    setFilteredHotelItems(filteredCHotelItems);
  };

  const handleOnMinimumPricePerNightChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setMinimumPricePerNight(value);
  };

  const handleOnMaximumPricePerNightChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setMaximumPricePerNight(value);
  };

  useEffect(() => {
    applyFilters();
  }, [minimumPricePerNight, maximumPricePerNight, startDate, endDate]);
  const { t } = useTranslation();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
      <StyledChaletsFilterationWrapper>
        <FilterationDatesAndOtherWrapper>
          {/* start and end dates */}
          <FilterationStartAndEndDates
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <FilterationTwoInputsWrapper>
            {/* min price */}
            <FilterationASpecificSearchInput
              onChange={handleOnMinimumPricePerNightChange}
              disableUnderline
              placeholder={t(langKey.search.priceFrom)}
              startAdornment={
                <ChaletsFilterationSpecificSearchInputIcon
                  src={`/icons/input-money.svg`}
                />
              }
              inputProps={{
                style: inputPaddingStyle,
              }}
            />
            {/* max price */}
            <FilterationASpecificSearchInput
              onChange={handleOnMaximumPricePerNightChange}
              disableUnderline
              placeholder={t(langKey.search.priceTo)}
              startAdornment={
                <ChaletsFilterationSpecificSearchInputIcon
                  src={`/icons/input-money.svg`}
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

export default HotelsHotelItemsFilterationWrapper;
