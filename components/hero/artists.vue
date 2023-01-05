<template>
  <div>
    <swiper
      :slidesPerView="2"
      :spaceBetween="10"
      :freeMode="true"
      :loop="true"
      :loopFillGroupWithBlank="false"
      :modules="modules"
      class="mySwiper m-0 p-0 mm:hidden mr:hidden md:hidden sm:hidden xm:block hidden"
    >
      <swiper-slide class="flex flex-col items-start bg-transparent">
        <p class="uppercase text-base">Anna Nyukuri</p>
        <img src="../../assets/images/Carlito-african.png" alt="" />
        <p class="uppercase">Painter</p>
        <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
      </swiper-slide>
      <swiper-slide class="flex flex-col items-start bg-transparent">
        <p class="uppercase text-base">Deogratias Saidi</p>
        <img src="../../assets/images/Carlito-african.png" alt="" />
        <p class="uppercase">Painter</p>
        <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
      </swiper-slide>
      <swiper-slide class="flex flex-col items-start bg-transparent">
        <p class="uppercase text-base">Faida Juma</p>
        <img src="../../assets/images/Carlito-african.png" alt="" />
        <p class="uppercase">Painter</p>
        <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
      </swiper-slide>
      <swiper-slide class="flex flex-col items-start bg-transparent">
        <p class="uppercase text-base">Jemimah Ngongo</p>
        <img src="../../assets/images/Carlito-african.png" alt="" />
        <p class="uppercase">Painter</p>
        <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
      </swiper-slide>
      <swiper-slide class="flex flex-col items-start bg-transparent">
        <p class="uppercase text-base">Ibrahim Jusu</p>
        <img src="../../assets/images/Carlito-african.png" alt="" />
        <p class="uppercase">Painter</p>
        <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
      </swiper-slide>
      <swiper-slide class="flex flex-col items-start bg-transparent">
        <p class="uppercase text-base">Tine Marie</p>
        <img src="../../assets/images/Carlito-african.png" alt="" />
        <p class="uppercase">Painter</p>
        <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
      </swiper-slide>
    </swiper>
    <div class="block xm:hidden">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :freeMode="true"
        :loop="true"
        :loopFillGroupWithBlank="false"
        :modules="modules"
        class="mySwiper m-0 p-0 block sm:hidden"
      >
        <swiper-slide class="flex flex-col items-start bg-transparent">
          <p class="uppercase text-base">Anna Nyukuri</p>
          <img src="../../assets/images/Carlito-african.png" alt="" />
          <p class="uppercase">Painter</p>
          <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col items-start bg-transparent">
          <p class="uppercase text-base">Deogratias Saidi</p>
          <img src="../../assets/images/Carlito-african.png" alt="" />
          <p class="uppercase">Painter</p>
          <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col items-start bg-transparent">
          <p class="uppercase text-base">Faida Juma</p>
          <img src="../../assets/images/Carlito-african.png" alt="" />
          <p class="uppercase">Painter</p>
          <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col items-start bg-transparent">
          <p class="uppercase text-base">Jemimah Ngongo</p>
          <img src="../../assets/images/Carlito-african.png" alt="" />
          <p class="uppercase">Painter</p>
          <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col items-start bg-transparent">
          <p class="uppercase text-base">Ibrahim Jusu</p>
          <img src="../../assets/images/Carlito-african.png" alt="" />
          <p class="uppercase">Painter</p>
          <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col items-start bg-transparent">
          <p class="uppercase text-base">Tine Marie</p>
          <img src="../../assets/images/Carlito-african.png" alt="" />
          <p class="uppercase">Painter</p>
          <p class="text-gray-400 text-sm">Gamle Oslo, Oslo</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const modules = [FreeMode, Pagination];
</script>

<style scoped></style>
