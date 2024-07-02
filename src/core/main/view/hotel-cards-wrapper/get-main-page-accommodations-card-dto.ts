import axios from "axios";
import { SetState } from "~/bootstrap/helper/global-types";
import { MainPageAccommodationsCard } from "~/core/main/view/hotel-cards-wrapper/main-hotel-cards-wrapper";
import { PossibleSelectedTabs } from "~/generic/context/selected-tab-ctx";

export const fetchAccommodation = async (
  setAccommodations: SetState<MainPageAccommodationsCard[]>,
  endpointUrl: string,
  endpoint: string,
  name: string,
  tabName: PossibleSelectedTabs
) => {
  const response = await axios.get(`${endpointUrl}`);
  if (response.status === 200) {
    const accommodation = response.data;
    const entity: MainPageAccommodationsCard = {
      image:
        accommodation[0].images[0].attachment_path ||
        accommodation[0].images[0].attachmentPath,
      name,
      description:
        "صنعاء، عاصمة اليمن، تتميز بجمال معمارها التاريخي وضيافة سكانها الودودة، مع نسيم هواءها العليل وأسواقها النابضة بالحياة وثقافتها الغنية والتاريخ العريق الذي يعود لقرون مضت.",
      length: accommodation.length,
      endpoint,
      tabName,
    };
    setAccommodations((prev) => [...prev, entity]);
  }
};
