<template>
  <div id="Page1" class="Page1 w-40 h-40">
    <span>Page1</span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { useRoute, onBeforeRouteLeave } from "vue-router";

export default {
  name: "Page1",
  setup() {
    const route = useRoute();

    const x = ref(100);
    const y = ref(100);
    const color = ref("red");
    const scale = ref(1);
    const rotation = ref(0);

    onBeforeRouteLeave((to) => {
      if (to.name == "page2") {
        to.query = {
          x: x.value,
          y: y.value,
          scale: scale.value,
          color: color.value,
          rotation: rotation.value,
        };
      }
    });

    onMounted(() => {
      // 如果没有传入值, 则初始化
      if (!route.query.x) {
        console.log("init");
        gsap.set(".Page1", {
          x: x.value,
          y: y.value,
          scale: scale.value,
          background: color.value,
          rotation: rotation.value,
        });
        return;
      }

      // 如果有传入值, 则使用 fromTo 动画
      if (route.query.x) {
        console.log("fromTo");
        gsap.fromTo(
          ".Page1",
          {
            x: route.query.x,
            y: route.query.y,
            scale: route.query.scale,
            background: route.query.color,
            rotation: route.query.rotation,
          },
          {
            x: x.value,
            y: y.value,
            scale: scale.value,
            background: color.value,
            rotation: rotation.value,
            duration: 1,
          }
        );
        return;
      }
    });

    return { route, x, y };
  },
};
</script>
<style scoped>
</style>