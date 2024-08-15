import { DetailsPageEdgeCaseMessage } from "~/core/chalets/page/style";

interface IChaletsDetailsInfoTabsMapProps {
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

const ChaletsDetailsInfoTabsMap = (props: IChaletsDetailsInfoTabsMapProps) => {
  const { coordinates } = props;

  function extractSrc(iframeString: string): string | null {
    if (typeof iframeString !== "string") {
      throw new TypeError("Expected a string as input");
    }

    const srcMatch = iframeString.match(/src="([^"]+)"/);

    if (srcMatch && srcMatch[1]) {
      return srcMatch[1];
    }

    return null;
  }

  const mapLink = coordinates.latitude || coordinates.longitude || "";
  const src = extractSrc(mapLink);

  return (
    <div>
      {src ? (
        <iframe
          src={`${src}`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <DetailsPageEdgeCaseMessage>
          The location is not provided
        </DetailsPageEdgeCaseMessage>
      )}
    </div>
  );
};

export default ChaletsDetailsInfoTabsMap;
