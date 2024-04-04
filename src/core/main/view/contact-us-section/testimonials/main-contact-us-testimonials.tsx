import { Mousewheel, Navigation } from "swiper/modules";
import { mainContactUsTestimonials } from "~/core/main/view/contact-us-section/testimonials/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  CustomNextButton,
  CustomPrevButton,
  MainContactUsTestimonialsImage,
  MainContactUsTestimonialsSlideSwiper,
  MainContactUsTestimonialsSwiper,
  MainContactUsTestimonialsTestimonial,
  MainContactUsTestimonialsTitle,
  MainContactUsTestimonialsTitleAndTestimonial,
} from "~/core/main/view/contact-us-section/testimonials/style";

export interface IMainContactUsTestimonialsProps {
  name: string;
  testimonial?: string;
  image?: string;
}

const MainContactUsTestimonials = () => {
  return (
    <MainContactUsTestimonialsSwiper
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      loop={true}
      modules={[Mousewheel, Navigation]}
      className="mySwiper"
    >
      {mainContactUsTestimonials.map(
        (testimonial: IMainContactUsTestimonialsProps, index) => (
          <MainContactUsTestimonialsSlideSwiper key={index}>
            <MainContactUsTestimonialsImage image={`${testimonial.image}`} />
            <MainContactUsTestimonialsTitleAndTestimonial>
              <MainContactUsTestimonialsTitle>
                {testimonial.name}
              </MainContactUsTestimonialsTitle>
              <MainContactUsTestimonialsTestimonial>
                {testimonial.testimonial}
              </MainContactUsTestimonialsTestimonial>
            </MainContactUsTestimonialsTitleAndTestimonial>
          </MainContactUsTestimonialsSlideSwiper>
        )
      )}
      <CustomPrevButton className="swiper-button-prev" />
      <CustomNextButton className="swiper-button-next" />
    </MainContactUsTestimonialsSwiper>
  );
};

export default MainContactUsTestimonials;
