<template>
  <div class="d-flex">
    <a @:click.prevent="switchVersion">
      <v-icon color="white">{{ eyeIcon }}</v-icon>
      <span class="pl-2 d-none d-sm-inline">{{
        $t("header.inclusivenessVersionButton")
      }}</span>
    </a>
  </div>
</template>

<script>
import { mdiEye } from "@mdi/js";

export default {
  name: "SpecialVersionButton",
  data() {
    return {
      eyeIcon: mdiEye,
    };
  },
  methods: {
    switchVersion: () => {
      console.log("switchVersion");
    },
  },
};
</script>
