<template>
  <div class="d-flex align-center">
    <a class="special-version-button" v-on:click.prevent="switchVersion">
      <v-icon color="white">{{ eyeIcon }}</v-icon>
      <span class="pl-2">{{ $t("header.inclusivenessVersionButton") }}</span>
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

<style>
.special-version-button {
  color: var(--font-color-white) !important;
}
</style>
