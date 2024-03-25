"use client";
import React, { useState } from "react";
import { Swiper as SwiperObject } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideshow.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import clsx from "clsx";
import { ProductImage } from "../product-image/ProductImage";

interface ProductSlideshowProps {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideshow = ({
  images,
  title,
  className,
}: ProductSlideshowProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={clsx("h-full flex flex-row-reverse ", className)}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <ProductImage
              width={1024}
              height={800}
              src={image}
              className="rounded-lg   object-fill"
              alt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <ProductImage
              width={300}
              height={300}
              src={image}
              className="rounded-lg object-fill"
              alt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
