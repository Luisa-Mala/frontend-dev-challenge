import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import styles from "./Testimonials.module.scss";

export const Testimonials = () => {
  return (
    <section className={`${styles["testimonials"]}`}>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        //className={`${styles["hero__slider"]}`}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className={`${styles["testimonials__slide"]}`}>
            <Image
              src="/icons/ic-quote.png"
              alt="quote"
              width="48px"
              height="48px"
            />
            <p>
              Me gustaría agradecer al sitio, me ayudó de una manera
              inimaginable, el psicólogo fue sumamente servicial y acogedor
              conmigo y me siento mejor conmigo mismo.
            </p>
            <span className={`${styles["testimonials__slide--author"]}`}> ~ Maria Montessori ~</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles["testimonials__slide"]}`}>
            <Image
              src="/icons/ic-quote.png"
              alt="quote"
              width="48px"
              height="48px"
            />
            <p>
              Me gustaría agradecer al sitio, me ayudó de una manera
              inimaginable, el psicólogo fue sumamente servicial y acogedor
              conmigo y me siento mejor conmigo mismo.
            </p>
            <span className={`${styles["testimonials__slide--author"]}`}> ~ Maria Montessori ~</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
