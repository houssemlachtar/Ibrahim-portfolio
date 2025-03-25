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
          <div
            class="col-span-full flex flex-col items-start gap-14 sm:col-span-4"
          >
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

          <div
            id="profile-container"
            class="relative col-span-4 mt-10 h-[20vh] max-w-lg w-fit select-none flex-col rounded-lg sm:mt-0 sm:h-full md:flex md:h-[50vh]"
          >
            <div class="overlay absolute inset-0 z-[2] bg-flax-smoke-50"></div>
            <img
              id="profile-img"
              :src="profile"
              alt="Ebraheem profile"
              class="h-full scale-100 rounded-lg object-cover object-top brightness-110 grayscale"
            />
          </div>

          <!-- content-end justify-self-end  -->
          <div
            class="relative col-span-8 size-full overflow-clip text-end sm:col-span-4"
          >
            <div
              id="available-for-work"
              class="absolute bottom-0 right-0 flex translate-y-full flex-col items-end"
            >
              <p
                class="block font-medium uppercase leading-snug -tracking-tight 3xl:text-base"
              >
                Open for work
              </p>
              <h1
                class="3xl:heading-1 heading-1-alt font-fancy block font-bold leading-none -tracking-tight"
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
<style>
  /* Base Styles */
section {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
  margin-bottom: -100svh;
  padding-top: 0;
  padding-bottom: 0;
}

#hero {
  position: sticky;
  top: 0;
  display: flex;
  min-height: 100svh;
  width: 100%;
  align-items: flex-end;
  padding-bottom: clamp(2.25rem, 2.1786rem + 0.3571vi, 2.5rem);
}

.hide-on-mobile {
  display: none;
}

/* Animations */
@keyframes starEntrance {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes arrowEntrance {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes contactEntrance {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@keyframes availableEntrance {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

/* Mobile First Approach */
#profile-container {
  margin-top: 2.5rem;
  height: 20vh;
  max-width: 56rem;
  width: fit-content;
  position: relative;
  user-select: none;
}

#profile-img {
  filter: grayscale(100%) brightness(1.1);
  border-radius: 0.5rem;
  object-fit: cover;
  object-position: top;
}

.overlay {
  background-color: #f5f5eb; /* Flax Smoke 50 */
}

/* Small screens (sm) */
@media (min-width: 640px) {
  .hide-on-mobile {
    display: block;
  }

  #whoAmI {
    max-width: 37ch;
  }

  #profile-container {
    margin-top: 0;
    height: 50vh;
  }

  #contact-btn {
    transform: scale(1.5);
    transform-origin: left;
  }
}

/* Medium screens (md) */
@media (min-width: 768px) {
  #profile-container {
    display: flex;
  }

  #down-arrow {
    width: 1.5rem;
    height: 1.5rem;
  }
}

/* Large screens (lg) */
@media (min-width: 1024px) {
  .spacing-t {
    column-gap: 1.5rem; /* Adjust based on your design system */
  }

  #whoAmI {
    text-align: start;
  }
}

/* Component-specific styles */
#star {
  animation: starEntrance 1s ease-out forwards;
}

#down-arrow {
  animation: arrowEntrance 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  color: #8c8c73;
  stroke: currentColor;
}

#contact-btn {
  animation: contactEntrance 0.6s ease-out forwards;
}

#available-for-work {
  animation: availableEntrance 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Typography */
.heading-5 {
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 500;
}

.heading-1-alt {
  font-size: 4.5rem;
  line-height: 1;
  letter-spacing: -0.02em;
  font-family: var(--font-fancy); /* Replace with actual font family */
}

/* Utilities */
.w-full { width: 100% }
.flex { display: flex }
.grid { display: grid }
.relative { position: relative }
.absolute { position: absolute }
.sticky { position: sticky }
.top-0 { top: 0 }
.bottom-0 { bottom: 0 }
.right-0 { right: 0 }
.left-0 { left: 0 }
.inset-0 { inset: 0 }
.z-\[2\] { z-index: 2 }
.overflow-clip { overflow: clip }
.justify-items-center { justify-items: center }
.items-center { align-items: center }
.items-end { align-items: flex-end }
.flex-col { flex-direction: column }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) }
.col-span-full { grid-column: 1 / -1 }
.col-span-4 { grid-column: span 4 / span 4 }
.col-span-8 { grid-column: span 8 / span 8 }
.gap-14 { gap: 3.5rem }
.gap-10 { gap: 2.5rem }
.rounded-lg { border-radius: 0.5rem }
.object-cover { object-fit: cover }
.object-top { object-position: top }
.brightness-110 { filter: brightness(1.1) }
.grayscale { filter: grayscale(100%) }
.select-none { user-select: none }
.uppercase { text-transform: uppercase }
.text-balance { text-wrap: balance }
.leading-snug { line-height: 1.3 }
.-tracking-tight { letter-spacing: -0.025em }
.font-medium { font-weight: 500 }
.font-bold { font-weight: 700 }
</style>  
