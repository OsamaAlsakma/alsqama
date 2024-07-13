export const servicesPageEndpoint = {
  main: "",
  chalets: "/chalets",
  halls: "/halls",
  hotels: "/hotels",
  apartments: "/apartments",
};

export const supportEndpoint = {
  termsOfUse: `/termsOfUse`,
  privacyPolicy: `/privacyPolicy`,
};

export const mainPageEndpointsUrl = {
  mainPageSlide: "https://backend.hajjzi.com/public/api/main-sliders",
  sectionsOverview: "https://backend.hajjzi.com/public/api/sections",
  mainPageOurServices: "https://backend.hajjzi.com/public/api/main-services",
  mainPageRepeatedQuestions:
    "https://backend.hajjzi.com/public/api/repeated-questions",

  /* -------------------------------------------------------------------------- */
  discounts: "https://backend.hajjzi.com/public/api/get-ads",
  /* -------------------------------------------------------------------------- */
  termsOfUse: "https://backend.hajjzi.com/public/api/terms-conditions",
  /* -------------------------------------------------------------------------- */
  privacyPolicy: "https://backend.hajjzi.com/public/api/policies",
  /* -------------------------------------------------------------------------- */
  contactUs: "https://backend.hajjzi.com/public/api/send-contact-email",
  /* -------------------------------------------------------------------------- */
  contactUsPicturesAndDescription:
    "https://backend.hajjzi.com/public/api/get-footer-info",
  /* -------------------------------------------------------------------------- */
  socialMediaIcons: "https://backend.hajjzi.com/public/api/social-icons",
};

export const endpointsUrl = {
  /* --------------------------------- Signup --------------------------------- */
  signupEndpoint: "https://backend.hajjzi.com/public/api/register",
  /* ---------------------------------- login --------------------------------- */
  loginEndpoint: "https://backend.hajjzi.com/public/api/login",
  /* ------------------------ pay and send information ------------------------ */
  payEndpoint: "https://backend.hajjzi.com/public/api/reservations",
  /* --------------------------------- Chalets -------------------------------- */
  allChalets:
    "https://backend.hajjzi.com/public/api/accommodations?type=chalets",
  chaletDetails: "https://run.mocky.io/v3/0d10feea-c7c4-40c9-b88a-802cb8cc35de",

  /* --------------------------------- Hotels --------------------------------- */
  allHotels: "https://backend.hajjzi.com/public/api/accommodations?type=hotels",

  anHotelItems: "https://run.mocky.io/v3/52546746-7763-4744-8e3d-8bd747b2eade",
  hotelItemDetails: "https://backend.hajjzi.com/public/api/rooms",

  /* ---------------------------------- Halls --------------------------------- */
  allHalls: "https://backend.hajjzi.com/public/api/accommodations?type=halls",
  hallDetails: "https://backend.hajjzi.com/public/api/accommodations",

  /* ------------------------------- Appartments ------------------------------ */
  allAppartments:
    "https://backend.hajjzi.com/public/api/accommodations?type=appartments",
  appartmentDetails: "https://backend.hajjzi.com/public/api/accommodations",
};
