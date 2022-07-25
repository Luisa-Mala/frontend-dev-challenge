import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from "./Hero.module.scss";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={`${styles["hero"]}`}>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className={`${styles["hero__slider"]}`}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="imageNext">
            <Image
              src="/images/hero_1.png"
              alt="hero-image"
              className="image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageNext">
            <Image
              src="/images/hero_2.png"
              alt="hero-image"
              className="image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageNext">
            <Image
              src="/images/hero_3.png"
              alt="hero-image"
              className="image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageNext">
            <Image
              src="/images/hero_4.png"
              alt="hero-image"
              className="image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageNext">
            <Image
              src="/images/hero_5.png"
              alt="hero-image"
              className="image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
