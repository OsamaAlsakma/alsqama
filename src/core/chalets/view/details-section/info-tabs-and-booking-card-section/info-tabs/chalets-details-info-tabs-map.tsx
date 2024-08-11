import { FullscreenControl, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { ChaletsDetailsInfoTabsStyledMap } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/style";

interface IChaletsDetailsInfoTabsMapProps {
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
const ChaletsDetailsInfoTabsMap = (props: IChaletsDetailsInfoTabsMapProps) => {
  const { coordinates } = props;

  return (
    <YMaps query={{ lang: "en_US" }}>
      <div>
        <ChaletsDetailsInfoTabsStyledMap
          defaultState={{
            center: [coordinates.longitude, coordinates.longitude],
            zoom: 9,
          }}
        >
          <FullscreenControl />
          <Placemark
            geometry={[coordinates.longitude, coordinates.longitude]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/icons/map-location.svg",
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30],
            }}
          />
        </ChaletsDetailsInfoTabsStyledMap>
      </div>
    </YMaps>
  );
};

export default ChaletsDetailsInfoTabsMap;
