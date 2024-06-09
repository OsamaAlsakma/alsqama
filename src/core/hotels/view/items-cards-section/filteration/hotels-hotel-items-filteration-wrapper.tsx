/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { appBaseUrl } from "~/bootstrap/helper/global-helper";
import { inputPaddingStyle } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import {
  ChaletsFilterationSpecificSearchInput,
  ChaletsFilterationSpecificSearchInputIcon,
  ChaletsFilterationSpecificSearchWrapper,
  StyledChaletsFilterationWrapper,
} from "~/core/chalets/view/filtration-section/wrapper/style";
import HotelsHotelItemsFilterationStartAndEndDates from "~/core/hotels/view/items-cards-section/filteration/start-and-end-dates/hotels-hotel-items-filteration-start-and-end-dates";
import { HotelItem } from "~/core/hotels/view/items-cards-section/wrapper/hotel-items-cards-wrapper";
import dayjs, { Dayjs } from "dayjs";

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
    <StyledChaletsFilterationWrapper>
      <ChaletsFilterationSpecificSearchWrapper style={{ width: "80%" }}>
        {/* start and end dates */}
        <HotelsHotelItemsFilterationStartAndEndDates
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        {/* min price */}
        <ChaletsFilterationSpecificSearchInput
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
        <ChaletsFilterationSpecificSearchInput
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
      </ChaletsFilterationSpecificSearchWrapper>
    </StyledChaletsFilterationWrapper>
  );
};

export default HotelsHotelItemsFilterationWrapper;