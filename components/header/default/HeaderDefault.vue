<template>
  <header class="top-panel">
    <v-container>
      <v-row class="p-0 align-center">
        <v-col class="pb-0 pt-0 d-flex">
          <SpecialVersionButton />
          <SocialLinks />
        </v-col>
        <v-col class="pb-0 pt-0 d-flex align-center justify-end">
          <div class="mr-4">
            <a href="">{{ $t("header.informationAboutOrganization") }}</a>
          </div>
          <Search />
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
import SpecialVersionButton from "./SpecialVersionButton";
import SocialLinks from "./SocialLinks";
import Search from "./Search";

export default {
  components: { Search, SocialLinks, SpecialVersionButton },
};
</script>

<style lang="scss">
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
