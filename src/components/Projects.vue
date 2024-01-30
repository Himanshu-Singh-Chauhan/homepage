<template>
    <div>
        <ul class="group/list">
            <li class="mb-12">
                <div
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div
                        class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[1rem] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="https://github.com/Himanshu-Singh-Chauhan/Pie-Menus" target="_blank"
                                rel="noreferrer noopener" aria-label="Pie Menus (opens in a new tab)">
                                <span
                                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                </span>
                                <span>Pie Menus App
                                    <!-- <span class="inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span> -->
                                </span>
                            </a>
                        </h3>
                        <a class="relative mt-1 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://github.com/Himanshu-Singh-Chauhan/Pie-Menus" target="_blank"
                            rel="noreferrer noopener" aria-label="16 stars on github (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="mr-1 h-3 w-3" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>16</span>
                        </a>
                        <!-- &nbsp
                        <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                            target="_blank" rel="noreferrer noopener"
                            aria-label="Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="mr-1 h-4 w-4" aria-hidden="true">
                                <path
                                    d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z">
                                </path>
                                <path
                                    d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z">
                                </path>
                            </svg><span>100k+ Installs</span>
                        </a> -->
                        <p class="mt-1 text-sm leading-normal">
                            Pie Menus allow you to improve your workflow, you can use it to
                            launch applications, simulate long hotkeys, open URLs, open
                            favourite file folder locations, run other python scripts which
                            automates repetitive tasks and navigate browsers, explorers and
                            windows much faster.
                        </p>

                        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    Python
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    PyQT5
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img alt="Pie Menus Image" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                        class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style="color: transparent"
                        comment_srcset="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"
                        src="../assets/piemenus.png" />
                </div>
            </li>
            <li class="mb-12">
                <div
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div
                        class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[1rem] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="http://googledocs-clone-drab.vercel.app/" target="_blank" rel="noreferrer noopener"
                                aria-label="gdocs link (opens in a new tab)"><span
                                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                </span>
                                <span>Google Docs Clone
                                    <!-- <span class="inline-block">Clone
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span> -->
                                </span>
                            </a>
                        </h3>
                        <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://github.com/Himanshu-Singh-Chauhan/googledocs-clone" target="_blank"
                            rel="noreferrer noopener" aria-label="gdocs gitHub link (opens in a new tab)">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="mr-1 h-3 w-3" aria-hidden="true">
                                <path
                                    d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z">
                                </path>
                                <path
                                    d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z">
                                </path>
                            </svg> -->

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="link" viewBoxx="0 0 20 20"
                                fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                                <path
                                    d="M324.958 187.046c58.347 58.407 57.546 152.048.352 209.56a10.76 10.76 0 0 1-.352.361l-65.625 65.625c-57.881 57.881-152.05 57.873-209.922 0-57.881-57.871-57.881-152.05 0-209.921l36.236-36.236c9.609-9.609 26.158-3.223 26.654 10.357.633 17.307 3.736 34.694 9.463 51.485 1.939 5.686.554 11.975-3.694 16.223l-12.78 12.78c-27.369 27.369-28.228 71.933-1.128 99.57 27.367 27.909 72.35 28.075 99.927.498l65.625-65.615c27.53-27.53 27.415-72.028 0-99.443-3.614-3.607-7.255-6.41-10.099-8.368a15.66 15.66 0 0 1-6.784-12.311c-.387-10.319 3.27-20.953 11.424-29.107l20.561-20.561c5.392-5.392 13.85-6.054 20.102-1.69a148.956 148.956 0 0 1 20.04 16.793z">
                                </path>
                                <path
                                    d="M462.59 49.408c-57.872-57.873-152.041-57.881-209.922 0l-65.625 65.625c-.117.117-.244.244-.352.361-57.193 57.512-57.995 151.153.352 209.56a148.906 148.906 0 0 0 20.04 16.793c6.252 4.363 14.711 3.7 20.102-1.69l20.561-20.561c8.154-8.154 11.811-18.788 11.424-29.107a15.659 15.659 0 0 0-6.784-12.31c-2.844-1.958-6.484-4.761-10.099-8.368-27.415-27.415-27.53-71.913 0-99.443l65.625-65.615c27.577-27.577 72.559-27.411 99.927.498 27.1 27.637 26.242 72.201-1.128 99.57l-12.78 12.78c-4.248 4.248-5.634 10.537-3.694 16.223 5.727 16.791 8.83 34.179 9.463 51.485.497 13.58 17.045 19.967 26.654 10.357l36.236-36.236c57.88-57.872 57.88-152.051 0-209.922z">
                                </path>
                            </svg>

                            <span>github</span></a>
                        <p class="mt-2 text-sm leading-normal">
                            • User Registration and Authentication using Google Firebase •
                            Implemented a user-friendly dashboard allowing users to access and
                            manage all previously created documents • Integrated a
                            comprehensive set of document editing features.
                        </p>

                        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    NextJS
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    Firebase
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    TailwindCSS
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    Material Tailwind
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img alt="google docs image" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                        class="rounded-lg border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style="color: transparent" comment_srcset="../assets/gdocs.png 1280w"
                        comment_sizes="(max-width: 500px) 500px" src="../assets/google-docs.webp" />
                </div>
            </li>
            <li class="mb-12">
                <div
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div
                        class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="https://halcyon-theme.netlify.app/" target="_blank" rel="noreferrer noopener"
                                aria-label="Halcyon Theme (opens in a new tab)"><span
                                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Setreo
                                    Connect Music Player
                                    <!-- <span class="inline-block"
                    >Project<svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path></svg></span> -->
                                </span></a>
                        </h3>

                        <ul class="mt-1 flex flex-wrap" aria-label="Related links">
                            <li class="mr-4">
                                <a class="relative mt-1 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                    href="https://github.com/Himanshu-Singh-Chauhan/stereo-connect" target="_blank"
                                    rel="noreferrer noopener" aria-label="stereo gitHub link (opens in a new tab)">
                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="mr-1 h-3 w-3" aria-hidden="true">
                                <path
                                    d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z">
                                </path>
                                <path
                                    d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z">
                                </path>
                            </svg> -->

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="link"
                                        viewBoxx="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                                        <path
                                            d="M324.958 187.046c58.347 58.407 57.546 152.048.352 209.56a10.76 10.76 0 0 1-.352.361l-65.625 65.625c-57.881 57.881-152.05 57.873-209.922 0-57.881-57.871-57.881-152.05 0-209.921l36.236-36.236c9.609-9.609 26.158-3.223 26.654 10.357.633 17.307 3.736 34.694 9.463 51.485 1.939 5.686.554 11.975-3.694 16.223l-12.78 12.78c-27.369 27.369-28.228 71.933-1.128 99.57 27.367 27.909 72.35 28.075 99.927.498l65.625-65.615c27.53-27.53 27.415-72.028 0-99.443-3.614-3.607-7.255-6.41-10.099-8.368a15.66 15.66 0 0 1-6.784-12.311c-.387-10.319 3.27-20.953 11.424-29.107l20.561-20.561c5.392-5.392 13.85-6.054 20.102-1.69a148.956 148.956 0 0 1 20.04 16.793z">
                                        </path>
                                        <path
                                            d="M462.59 49.408c-57.872-57.873-152.041-57.881-209.922 0l-65.625 65.625c-.117.117-.244.244-.352.361-57.193 57.512-57.995 151.153.352 209.56a148.906 148.906 0 0 0 20.04 16.793c6.252 4.363 14.711 3.7 20.102-1.69l20.561-20.561c8.154-8.154 11.811-18.788 11.424-29.107a15.659 15.659 0 0 0-6.784-12.31c-2.844-1.958-6.484-4.761-10.099-8.368-27.415-27.415-27.53-71.913 0-99.443l65.625-65.615c27.577-27.577 72.559-27.411 99.927.498 27.1 27.637 26.242 72.201-1.128 99.57l-12.78 12.78c-4.248 4.248-5.634 10.537-3.694 16.223 5.727 16.791 8.83 34.179 9.463 51.485.497 13.58 17.045 19.967 26.654 10.357l36.236-36.236c57.88-57.872 57.88-152.051 0-209.922z">
                                        </path>
                                    </svg>

                                    <span>github</span></a>
                            </li>
                            <!-- <li class="mr-4">
                                <a class="relative mt-1 inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                                    href="https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"
                                    target="_blank" rel="noreferrer noopener" aria-label="University Project">

                                    <span>University Project</span></a>
                            </li> -->
                            <li class="mr-4">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    University Project
                                </div>
                            </li>
                        </ul>
                        <!-- <a href=""
                            class="relative mt-1 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"><span
                                class="">University Project</span></a> -->
                        <p class="mt-1 text-sm leading-normal">
                            • Developed a Spotify-inspired webapp utilizing Spotify API for seamless
                            music integration.
                            • Developed user-friendly account creation functionality for personalized
                            interactions.
                            • Implemented the ability for users to explore and enjoy songs, utilizing
                            Spotify API for detailed song information.
                            • Utilized web sockets to create a unique feature—virtual ”listening
                            rooms”—allowing users to enjoy synchronized music sessions with
                            friends from any location.
                            • Ensured real-time streaming within the collaborative listening rooms.
                            • Tech Stack : NextJS, WebSockets
                        </p>
                        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    NextJS
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    WebSockets
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    socket.io
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    TailwindCSS
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200"
                        height="48" decoding="async" data-nimg="1"
                        class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style="color: transparent"
                        comment_srcset="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75 2x"
                        src="../assets/spotify.jpg" />
                </div>
            </li>
            <li class="mb-12">
                <div
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div
                        class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href="https://v4.brittanychiang.com/" target="_blank" rel="noreferrer noopener"
                                aria-label="brittanychiang.com (v4) (opens in a new tab)"><span
                                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>URL Shortener
                                    <!-- <span class="inline-block"> Project
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor"
                                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span> -->
                                </span></a>
                        </h3>
                        <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer noopener"
                            aria-label="6940 stars on GitHub (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="link"
                                        viewBoxx="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                                        <path
                                            d="M324.958 187.046c58.347 58.407 57.546 152.048.352 209.56a10.76 10.76 0 0 1-.352.361l-65.625 65.625c-57.881 57.881-152.05 57.873-209.922 0-57.881-57.871-57.881-152.05 0-209.921l36.236-36.236c9.609-9.609 26.158-3.223 26.654 10.357.633 17.307 3.736 34.694 9.463 51.485 1.939 5.686.554 11.975-3.694 16.223l-12.78 12.78c-27.369 27.369-28.228 71.933-1.128 99.57 27.367 27.909 72.35 28.075 99.927.498l65.625-65.615c27.53-27.53 27.415-72.028 0-99.443-3.614-3.607-7.255-6.41-10.099-8.368a15.66 15.66 0 0 1-6.784-12.311c-.387-10.319 3.27-20.953 11.424-29.107l20.561-20.561c5.392-5.392 13.85-6.054 20.102-1.69a148.956 148.956 0 0 1 20.04 16.793z">
                                        </path>
                                        <path
                                            d="M462.59 49.408c-57.872-57.873-152.041-57.881-209.922 0l-65.625 65.625c-.117.117-.244.244-.352.361-57.193 57.512-57.995 151.153.352 209.56a148.906 148.906 0 0 0 20.04 16.793c6.252 4.363 14.711 3.7 20.102-1.69l20.561-20.561c8.154-8.154 11.811-18.788 11.424-29.107a15.659 15.659 0 0 0-6.784-12.31c-2.844-1.958-6.484-4.761-10.099-8.368-27.415-27.415-27.53-71.913 0-99.443l65.625-65.615c27.577-27.577 72.559-27.411 99.927.498 27.1 27.637 26.242 72.201-1.128 99.57l-12.78 12.78c-4.248 4.248-5.634 10.537-3.694 16.223 5.727 16.791 8.83 34.179 9.463 51.485.497 13.58 17.045 19.967 26.654 10.357l36.236-36.236c57.88-57.872 57.88-152.051 0-209.922z">
                                        </path>
                                    </svg>
                            <span>github</span></a>
                        <p class="mt-2 text-sm leading-normal">
                            A URL shortener service creates a short url against a long url
                        </p>
                        
                        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    NodeJS
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    MongoDB
                                </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                                <div
                                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    Bootstrap CSS
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48"
                        decoding="async" data-nimg="1"
                        class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        style="color: transparent"
                        src="../assets/urlshortner-mobile.jpg" />
                </div>
            </li>
        </ul>
        <!-- <div class="mt-12">
            <a class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                aria-label="View Full Project Archive" href="/archive"><span><span
                        class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View
                        Full Project </span><span class="whitespace-nowrap"><span
                            class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                            aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clip-rule="evenodd"></path>
                        </svg></span></span></a>
        </div> -->
    </div>
</template>

<script setup></script>

<style scoped></style>
