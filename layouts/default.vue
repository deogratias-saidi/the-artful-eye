<template>
  <div class="relative">
    <div class="fixed p-3 w-full">
      <div class="hidden sm:block">
        <div class="relative flex justify-between items-center uppercase">
          <div class="flex gap-4">
            <div class="">Artists</div>
            <div>Categories</div>
          </div>
          <div class="font-Playfair font-semibold text-[2rem]">
            THE-ARTFUL-EYES
          </div>
          <div class="flex gap-3">
            <div>Lightbox</div>
            <div>INFO</div>
          </div>
        </div>
      </div>
      <div class="block sm:hidden">
        <div class="relative flex justify-between items-center uppercase">
          <div class="cursor-pointer font-Playfair">THE-ARTFUL-EYES</div>
          <div class="flex gap-3 cursor-pointer" @click="showMenu = !showMenu">
            Menu
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-75"
      v-if="showMenu"
      @click="showMenu = false"
    ></div>
    <div class="sticky">
      <div
        class="absolute top-0 left-0 right-0 bg-white p-4 h-screen"
        v-if="showMenu"
      >
        <div class="text-3xl flex justify-end pr-4">
          <div class="cursor-pointer" @click="showMenu = false">X</div>
        </div>
        <div
          class="relative flex flex-col items-center justify-evenly h-screen uppercase"
        >
          <div class="cursor-pointer">Artists</div>
          <div class="cursor-pointer">Categories</div>
          <div class="cursor-pointer">Lightbox</div>
          <div class="cursor-pointer">INFO</div>
        </div>
      </div>
    </div>
    <div class="px-3 pt-20 font-OpenSans">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMenu = ref(false);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap");
.opacity-75 {
  opacity: 0.75;
}
</style>
