/* eslint-disable react-hooks/exhaustive-deps */
import Input from "@mui/material/Input/Input";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import {
  appBaseUrl,
  largeScreenSize,
  mediumScreenSize,
} from "~/bootstrap/helper/global-helper";
import { inputPaddingStyle } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import {
  ChaletsFilterationSpecificSearchInputIcon,
  StyledChaletsFilterationWrapper,
  inputCommonProps,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import { HotelItem } from "~/core/hotels/view/items-cards-section/wrapper/hotel-items-cards-wrapper";
import FilterationStartAndEndDates from "~/generic/components/filteration/start-and-end-dates/hotels-hotel-items-filteration-start-and-end-dates";

/* -------------------------------------------------------------------------- */
/*                                   Styling                                  */
/* -------------------------------------------------------------------------- */
export const FilterationDatesAndOtherWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 80%;
  @media (max-width: ${largeScreenSize}) {
    width: 90%;
  }
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FilterationASpecificSearchInput = styled(Input)`
  && {
    ${inputCommonProps}
    color: black;
    border: none;
    border: 1px solid black;
    input::placeholder {
      opacity: 0.4;
    }
    font-size: 14px;
    width: 25%;
    height: 48px;
    @media (max-width: ${mediumScreenSize}) {
      width: 100%;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
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
              (date) =>
                dayjs(date).isAfter(startDate) && dayjs(date).isBefore(endDate)
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
      <StyledChaletsFilterationWrapper>
        <FilterationDatesAndOtherWrapper>
          {/* start and end dates */}
          <FilterationStartAndEndDates
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          {/* min price */}
          <FilterationASpecificSearchInput
            onChange={handleOnMinimumPricePerNightChange}
            disableUnderline
            placeholder="السعر من.."
            startAdornment={
              <ChaletsFilterationSpecificSearchInputIcon
                src={`/${appBaseUrl}/icons/input-money.svg`}
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
            placeholder="إلى السعر.."
            startAdornment={
              <ChaletsFilterationSpecificSearchInputIcon
                src={`/${appBaseUrl}/icons/input-money.svg`}
              />
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

export default HotelsHotelItemsFilterationWrapper;
