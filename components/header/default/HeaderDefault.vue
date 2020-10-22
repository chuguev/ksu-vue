<template>
  <header>
    <div class="top-panel">
      <v-container>
        <v-row class="p-0 align-center">
          <LeftSubmenu />
          <RightSubmenu />
        </v-row>
      </v-container>
    </div>
    <div class="menu">
      <v-container>
        <MainMenu />
      </v-container>
    </div>
  </header>
</template>

<script>
import LeftSubmenu from "./leftSubmenu/LeftSubmenu";
import RightSubmenu from "./rightSubmenu/RightSubmenu";
import MainMenu from "~/components/header/default/menu/MainMenu";

export default {
  components: { MainMenu, LeftSubmenu, RightSubmenu },
};
</script>

<style scoped>
.top-panel {
  background: var(--color-top-panel);
  font-size: var(--small-font);
  color: var(--font-color-white);
}
a {
  color: var(--font-color-white) !important;
  text-decoration: none;
}
.menu {
  background: #ccc;
}
</style>
