<template>
  <section class="padding-x mb-[-100svh] py-0">
    <div
      id="hero"
      class="sticky top-0 flex min-h-svh w-full items-end pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <div class="relative flex w-full flex-col items-center">
        <div class="w-full items-end overflow-clip">
          <div class="flex w-full items-start gap-10">
            <MyName />
            <Star id="star" class="hide-on-mobile translate-x-full" />
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
                class="hide-on-mobile m-0 size-4 -translate-x-full p-0 md:size-6"
                color="#8C8C73"
                style="color: #8c8c73"
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

            <div class="relative origin-left overflow-hidden sm:scale-150">
              <div id="contact-btn" class="flex -translate-y-full">
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

          <!-- Profile Image Container - Updated -->
          <div
            id="profile-container"
            class="relative col-span-full mt-10 h-[30vh] min-h-[220px] max-w-lg w-fit select-none flex-col rounded-lg sm:col-span-4 sm:mt-0 sm:h-full md:flex md:h-[50vh]"
          >
            <div class="overlay absolute inset-0 z-[2] bg-flax-smoke-50"></div>
            <img
              id="profile-img"
              :src="profile"
              alt="Ebraheem profile"
              class="h-full scale-100 rounded-lg object-cover object-top brightness-110 grayscale"
            />
          </div>

          <!-- Available Section - Updated -->
          <div
            class="relative col-span-full mt-4 size-full overflow-clip text-end sm:col-span-8 sm:mt-0"
          >
            <div
              id="available-for-work"
              class="flex translate-y-0 flex-col items-end sm:absolute sm:bottom-0 sm:right-0 sm:translate-y-full"
            >
              <p
                class="block text-sm font-medium uppercase leading-snug -tracking-tight sm:text-base 3xl:text-base"
              >
                Open for work
              </p>
              <h1
                class="heading-1-alt font-fancy text-3xl font-bold leading-none -tracking-tight sm:text-4xl 3xl:text-6xl"
              >
                {{ AvailableForWorkDate }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { MyName, Star } from '../design';
  import { Button } from '@/components/common';
  import { profile } from '@/assets/images';
  import { getAvailableForWorkDate, textSplitterIntoChar } from '@/functions';
  import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';

  const whoAmI = ref(
    'A freelance full-stack developer, cutting-edge technologies to deliver comprehensive solutions for your business.',
  );
  const AvailableForWorkDate = ref('');

  onBeforeMount(() => {
    whoAmI.value = textSplitterIntoChar(whoAmI.value);
    AvailableForWorkDate.value = getAvailableForWorkDate();
  });
</script>
