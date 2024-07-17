/**
 * manage and organize language keys for l18n.
 * It allows developers to easily access and reference
 *  specific language keys within their codebase.
 */
const langKey = {
  global: {
    ru: "global.ru",
    en: "global.en",
    ar: "global.ar",
    createAccount: "global.createAccount",
    login: "global.login",
    hotels: "global.hotels",
    chalets: "global.chalets",
    halls: "global.halls",
    apartments: "global.apartments",
    more: "global.more",
    bookNow: "global.bookNow",
    copyRight: "global.copyRight",
  },

  mainPage: {
    signinOrSignup: "mainPage.signinOrSignup",
    username: "mainPage.username",
    email: "mainPage.email",
    password: "mainPage.password",
    haveAnAccount: "mainPage.haveAnAccount",
    surf: "mainPage.surf",
    count: "mainPage.count",
    accommodationsCardsTitle: "mainPage.accommodationsCardsTitle",
  },
  detailsPage: {
    share: "detailsPage.share",
    seeMorePhoto: "detailsPage.seeMorePhoto",
    watchVideo: "detailsPage.watchVideo",
    features: "detailsPage.features",
    conditions: "detailsPage.conditions",
    map: "detailsPage.map",
    reviews: "detailsPage.reviews",
    featuresAccessories: "detailsPage.featuresAccessories",
    successCopyMessage: "detailsPage.successCopyMessage",

    /* ---------------------------------- tabs ---------------------------------- */
    noFeaturesToShow: "detailsPage.noFeaturesToShow",
    noReviewsToShow: "detailsPage.noReviewsToShow",
    bookingAndCancelingConditions: "detailsPage.bookingAndCancelingConditions",
    bookingConditions: "detailsPage.bookingConditions",
    cancelingConditions: "detailsPage.cancelingConditions",
    noBookingAndCancelingConditions:
      "detailsPage.noBookingAndCancelingConditions",
    /* ------------------------------ booking card ------------------------------ */
    bookingStartDate: "detailsPage.bookingStartDate",
    bookingEndDate: "detailsPage.bookingEndDate",
    readAndConfirmConditions: "detailsPage.readAndConfirmConditions",
    totalAllDays: "detailsPage.totalAllDays",
    fees: "detailsPage.fees",
    residentName: "detailsPage.residentName",
    residentPhoneNumber: "detailsPage.residentPhoneNumber",
    confirmConditionsBeforePaying: "detailsPage.confirmConditionsBeforePaying",
    writeResidentInfoMessage: "detailsPage.writeResidentInfoMessage",

    loginOrSignUpToContinue: "detailsPage.loginOrSignUpToContinue",
    successfulPaymentMessage: "detailsPage.successfulPaymentMessage",
    errorPaymentMessage: "detailsPage.errorPaymentMessage",

    successfulContactUsMessage: "detailsPage.successfulContactUsMessage",
    errorContactUsMessage: "detailsPage.errorContactUsMessage",

    /* ----------------------------- review section ----------------------------- */
    writeReview: "detailsPage.writeReview",
    yourReview: "detailsPage.yourReview",
    send: "detailsPage.send",
    reviewSent: "detailsPage.reviewSent",
  },
  search: {
    searchForAnyHotel: "search.searchForAnyHotel",
    searchForAnyChalet: "search.searchForAnyChalet",
    searchForAnyHall: "search.searchForAnyHall",
    ratingRange: "search.ratingRange",
    writeCity: "search.writeCity",
    arriveDate: "search.arriveDate",
    leaveDate: "search.leaveDate",
    priceFrom: "search.priceFrom",
    priceTo: "search.priceTo",

    writePrice: "search.writePrice",
  },
  support: {
    termsOfUse: "support.termsOfUse",
    privacyPolicy: "support.privacyPolicy",
  },
};

export default langKey;
