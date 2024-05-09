import IMainHotelCardVM from "~/core/main/view/hotel-card/i-main-hotel-card-vm";

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
        image:
          "https://c4.wallpaperflare.com/wallpaper/237/180/1018/yemen-city-lights-sanaa-cityscape-wallpaper-preview.jpg",
        title: "الصنعاء",
        numberOfHotels: 38,
        shortDescription:
          "صنعاء، عاصمة اليمن، تتميز بجمال معمارها التاريخي وضيافة سكانها الودودة، مع نسيم هواءها العليل وأسواقها النابضة بالحياة وثقافتها الغنية والتاريخ العريق الذي يعود لقرون مضت.",
      },
    };
  }
}
