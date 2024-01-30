<template>
  <div>
    <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24" aria-label="About me">
      <SectionHeader sectionName="About" />
      <div class="mb-12">
        <p class="mb-4">
          My main focus these days is on learning backend engineering.
          I most enjoy building software in the sweet spot where design and engineering meet,
          things that look good but are also built well under the hood.
          <span class="font-medium text-slate-200 hover:text-teal-300 focus-visibile:text-teal-300"> I like to code and
            design beautiful things.</span>
        </p>
        <p>
          In my free time I like to dive into designing modern UI/UX prototypes, exploring 3D animation and VFX pipelines.
        </p>
      </div>
      <div class="flex items-center gap-3 mb-6">
        <img src="../assets/school.png" style="height: 60px;" alt="" srcset="">

        <p class="bottom-0">Graduated from <span
            class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"> Ramaiah University of
            Applied Sciences </span><br>
          B.Tech in <span class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Computer
            Science and Engineering</span> (2019 - 2023)
        </p>
      </div>

      <!-- 2018 12th Standard - 76% (CBSE)
      2016 10th Standard - 8.6 CGPA (CBSE) -->
      <div class="flex items-center gap-3 mb-0">
        <!-- Try to make this leaf animated in svg, definitely will add more life to website. -->
        <img src="../assets/sprout.png" style="height: 60px;" alt="" srcset="">
        <p>
          When I’m not at the computer, I’m usually out admiring and relaxing in Nature 🌼🌺🌹
          <!-- try taking this to left section to improve experience visibility in desktop, but then mobile will be long. -->
        </p>
      </div>

    </section>
    <!-- <h3>Experience</h3> -->
    <section id="experience" aria-label="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24">
      <SectionHeader sectionName="Experience" />
      <Experience></Experience>
    </section>

    <section id="projects" aria-label="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24">
      <SectionHeader sectionName="Projects" />
      <Projects></Projects>
    </section>
  </div>
</template>
  
  
<script setup>
import { ref } from 'vue'
import Experience from './Experience.vue';
import Projects from './Projects.vue';
import SectionHeader from './SectionHeader.vue';

defineProps({
  msg: String,
})

</script>
  
  
<style scoped></style>
  