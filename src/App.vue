<script setup>
import LeftSection from './components/LeftSection.vue';
import RightSection from './components/RightSection.vue';
</script>
<!--  leading-relaxed text-slate-400 -->

<template>
  <div class="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <header
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 overflow-y-hidden border-none border-2 border-red-600">
        <LeftSection />

      </header>

      <!-- Right Section (scrollable) -->
      <div class="pt-24 lg:w-1/2 lg:py-24 border-none border-2 border-indigo-600">

        <main>
          <RightSection />
        </main>

        <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p class="">Built with <a href="https://vuejs.org/"
              class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
              rel="noreferrer noopener" aria-label="vue.js (opens in a new tab)">Vue3</a> and <a
              href="https://tailwindcss.com/"
              class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
              rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind CSS</a>, deployed with <a
              href="https://vercel.com/"
              class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
              rel="noreferrer noopener" aria-label="Vercel (opens in a new tab)">Vercel</a>. All text is set
            in the <a href="https://rsms.me/inter/"
              class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
              rel="noreferrer noopener" aria-label="Inter (opens in a new tab)">Inter</a> typeface.
          </p>

          <!-- <p>Please find the original website design
            <a href="https://brittanychiang.com/"
              class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
              rel="noreferrer noopener" aria-label="brittanychiang (opens in a new tab)">
              here
            </a>
            by
            <a href="https://brittanychiang.com/"
              class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
              rel="noreferrer noopener" aria-label="brittanychiang (opens in a new tab)">
              brittanychiang
            </a>, built with
            <a class="font-medium text-slate-500">NextJS</a>
            and
            <a class="font-medium text-slate-500">Tailwind CSS.
            </a>
          </p> -->
        </footer>
      </div>
    </div>
  </div>
</template>
