<template>
  <ol class="group/list">
    <li class="mb-12">

      <div
        class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[1rem] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
        </div>
        <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label="May '23 — Aug '23">May '23 — Aug '23</header>
        <div class="z-10 sm:col-span-6">
          <h3 class="font-medium leading-snug text-slate-200">
            <div>
              <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                href="https://www.novabenefits.com/" target="_blank" rel="noreferrer noopener"
                aria-label="SDE Intern (opens in a new tab)">
                <!-- following empty span makes entire block clickable, but you can clone it and use it for left side heading also. -->
                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>SDE Intern @ <span class="inline-block">Nova Benfits
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </span></span>
              </a>
            </div>
            <div>
              <div class="text-slate-500" aria-hidden="true">Full Stack Developer</div>
            </div>
            <!-- <div>
              <div class="text-slate-500" aria-hidden="true">Full Stack Developer</div>
            </div> -->
          </h3>
          <p class="mt-2 leading-normal">
          <ul class="list-disc  text-sm ">
            <li class="list-none">Delivered high-quality, robust production code. </li>
            <li>
              Implmented Whatsapp communication into Nova Portal for messaging updates for new client onboarding,
              utilizing the Wati platform.
            </li>
            <li>Implemented support for storing multiple health checkup reports of users generated by ekincare.</li>
            <li>UI improvements, and various bugs fixes on backend.</li>
            <li>Gained valuable experience in working within a professional software development team.</li>
          </ul>
          </p>
          <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                <!-- <span> <img :src="vuesvg" class="w-4"/></span> &nbsp -->
                VueJS
              </div>
            </li>
            <li class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                NodeJS</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                GraphQL</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PostgreSQL</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                JavaScript</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                <!-- <span> <img :src="tssvg" class="w-4"/></span> &nbsp -->
                TypeScript
              </div>
            </li>
            <li class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Bootstrap</div>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ol>
</template>


<script setup>
import { ref } from 'vue'
import vuesvg from '../assets/vue.svg'
import tssvg from '../assets/ts.svg'

defineProps({
  msg: String,
})



</script>

<script>
export default {
  data() {
    return {
      vuesvg, tssvg
    }
  }
}
</script>

    
<style scoped></style>
    