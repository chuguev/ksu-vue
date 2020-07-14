<template>
  <header class="top-panel">
    <v-container>
      <v-row class="p-0">
        <v-col class="pb-0 pt-0 d-flex">
          <SpecialVersionButton />
          <SocialLinks />
        </v-col>
        <v-col class="pb-0 pt-0">
          123
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
import SpecialVersionButton from "./SpecialVersionButton";
import SocialLinks from "./SocialLinks";

export default {
  components: { SocialLinks, SpecialVersionButton },
};
</script>

<style lang="scss">
.top-panel {
  background: var(--color-top-panel);
  font-size: var(--small-font);
  color: var(--font-color-white);
}
</style>
