<template>
  <div id="Page2" class="Page2 w-40 h-40">
    <span>Page2</span>
    <!-- <span>{{ $route.query }}</span> -->
  </div>
</template>

<script >
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";

import { gsap } from "gsap";
export default {
  name: "Page2",
  setup() {
    const route = useRoute();
    const toX = ref(200);
    const toY = ref(200);
    const toColor = ref("green");
    const toScale = ref(1.2);
    const toRotation = ref(90);

    onBeforeRouteLeave((to) => {
      if (to.name == "page1") {
        to.query = {
          x: toX.value,
          y: toY.value,
          color: toColor.value,
          scale: toScale.value,
          rotation: toRotation.value,
        };
      }
    });

    onMounted(() => {
      gsap.fromTo(
        ".Page2",
        {
          x: route.query.x,
          y: route.query.y,
          scale: route.query.scale,
          background: route.query.color,
          rotation: route.query.rotation,
        },
        {
          x: toX.value,
          y: toY.value,
          scale: toScale.value,
          background: toColor.value,
          rotation: toRotation.value,
          duration: 1,
        }
      );
    });
    return { route, toX, toY };
  },
};
</script>
<style scoped>
</style>