<template>
  <section class="padding-x py-0">
    <div
      id="hero"
      class="sticky top-0 flex h-screen w-full items-end pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <div class="relative flex w-full flex-col items-center">
        <div class="w-full items-end overflow-visible">
          <div class="flex w-full items-start gap-10">
            <MyName />
            <Star id="star" class="hide-on-mobile opacity-0 transition-opacity duration-500 ease-in-out" />
          </div>
        </div>

        <div class="lg:column-gap spacing-t grid w-full grid-cols-12 justify-items-center">
          <div class="col-span-full flex flex-col items-start gap-14 sm:col-span-4">
            <div class="overflow-hidden">
              <svg
                id="down-arrow"
                stroke="currentColor"
                fill="none"
                stroke-width="1.25"
                viewBox="6 6 12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hide-on-mobile m-0 size-4 opacity-0 transition-opacity duration-500 ease-in-out md:size-6"
                color="#8C8C73"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <p class="sr-only">
              A freelance full-stack developer, cutting-edge technologies to
              deliver comprehensive solutions for your business.
            </p>
            <p
              v-html="whoAmI"
              id="whoAmI"
              class="who-am-i heading-5 w-full max-w-[30ch] overflow-clip text-balance font-medium leading-snug sm:max-w-[37ch] lg:text-start"
            ></p>

            <div class="relative origin-left overflow-visible">
              <div id="contact-btn" class="flex opacity-0 transition-opacity duration-500 ease-in-out">
                <Button
                  :data-cal-namespace="dataCalNamespace"
                  :data-cal-link="dataCalLink"
                  :data-cal-config="dataCalConfig"
                  class="contact"
                  label="Get in touch"
                />
              </div>
            </div>
          </div>

          <div
            id="profile-container"
            class="relative col-span-4 mt-10 h-[20vh] max-w-lg w-fit select-none flex-col rounded-lg sm:mt-0 sm:h-full md:flex md:h-[50vh]"
          >
            <div class="overlay absolute inset-0 z-[2] bg-flax-smoke-50"></div>
            <img
              id="profile-img"
              :src="profile"
              alt="Ebraheem profile"
              class="h-full w-full rounded-lg object-cover object-top brightness-110 grayscale"
            />
          </div>

          <div class="relative col-span-8 size-full overflow-clip text-end sm:col-span-4">
            <div
              id="available-for-work"
              class="absolute bottom-0 right-0 flex opacity-0 transition-opacity duration-500 ease-in-out flex-col items-end"
            >
              <p class="block font-medium uppercase leading-snug -tracking-tight 3xl:text-base">
                Open for work
              </p>
              <h1 class="3xl:heading-1 heading-1-alt font-fancy block font-bold leading-none -tracking-tight">
                {{ AvailableForWorkDate }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-screen"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MyName, Star } from '../design';
import { Button } from '@/components/common';
import { profile } from '@/assets/images';
import { getAvailableForWorkDate, textSplitterIntoChar } from '@/functions';
import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';

const whoAmI = ref(
  'A freelance full-stack developer, cutting-edge technologies to deliver comprehensive solutions for your business.'
);
const AvailableForWorkDate = ref('');

onMounted(() => {
  whoAmI.value = textSplitterIntoChar(whoAmI.value);
  AvailableForWorkDate.value = getAvailableForWorkDate();

  // Fix visibility animations
  setTimeout(() => {
    document.getElementById('star')?.classList.add('opacity-100');
    document.getElementById('down-arrow')?.classList.add('opacity-100');
    document.getElementById('contact-btn')?.classList.add('opacity-100');
    document.getElementById('available-for-work')?.classList.add('opacity-100');
  }, 300);
});
</script>
