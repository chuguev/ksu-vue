<template>
  <header class="top-panel">
    <v-container>
      <v-row class="p-0 align-center">
        <LeftSubmenu />
        <RightSubmenu />
      </v-row>
    </v-container>
  </header>
</template>

<script>
import LeftSubmenu from "./leftSubmenu/LeftSubmenu";
import RightSubmenu from "./rightSubmenu/RightSubmenu";

export default {
  components: { LeftSubmenu, RightSubmenu },
};
</script>

<style scoped lang="scss">
.top-panel {
  background: var(--color-top-panel);
  font-size: var(--small-font);
  color: var(--font-color-white);
}
a {
  color: var(--font-color-white) !important;
  text-decoration: none;
}
</style>
