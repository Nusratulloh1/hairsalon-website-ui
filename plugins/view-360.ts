import { PanoViewer, SpinViewer } from "@egjs/view360";
// import "@egjs/vue3-view360";

export default defineNuxtPlugin(({ vueApp }) => {

    vueApp.component("PanoViewer", PanoViewer)
    vueApp.component("SpinViewer", SpinViewer)
  })