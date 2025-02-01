import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Swiper.module.css";

function GalleryOfImg() {
  return (
    <Swiper>
      <SwiperSlide>
        <img
          src={`https://www.seeson.vn/cdn/shop/files/web-11.jpg?v=1737048073&width=1780`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`https://www.seeson.vn/cdn/shop/files/web-10.jpg?v=1737048110&width=1780`}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default GalleryOfImg;
