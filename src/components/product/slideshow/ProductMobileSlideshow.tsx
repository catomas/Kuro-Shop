"use client";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";
import { FreeMode, Pagination } from "swiper/modules";
import { ProductImage } from "../product-image/ProductImage";

interface ProductSlideshowProps {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({
  images,
  title,
  className,
}: ProductSlideshowProps) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination
        modules={[FreeMode, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <ProductImage width={600} height={500} src={image} alt={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
