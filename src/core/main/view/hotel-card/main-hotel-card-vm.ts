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
        shortDescription: "تعد صنعاء أقدم عاصمة عربية مأهلة حتى الآن",
      },
    };
  }
}
