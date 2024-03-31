import IMainHotelCardVM from "~/core/main/view/hotel-card/i-main-hotel-card-vm";
import image1 from "./../../../../../public/assets/1.jpg";

export default class MainHotelCardVM {
  private mainHotelCardId: string;

  /* ------------------------------- Constructor ------------------------------ */
  constructor(mainHotelCardId: string) {
    this.mainHotelCardId = mainHotelCardId;
  }

  /* ----------------------------- Implementation ----------------------------- */
  useVM(): IMainHotelCardVM {
    return {
      props: {
        id: this.mainHotelCardId,
        image: `${image1}`,
        title: "الصنعاء",
        numberOfHotels: 38,
        shortDescription:
          "صنعاء، عاصمة اليمن، تتميز بجمال معمارها التاريخي وضيافة سكانها الودودة، مع نسيم هواءها العليل وأسواقها النابضة بالحياة وثقافتها الغنية والتاريخ العريق الذي يعود لقرون مضت.",
      },
    };
  }
}
