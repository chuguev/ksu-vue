<template>
  <v-col cols="auto" class="pb-0 pt-0 d-flex align-center justify-end">
    <div class="mr-4" v-if="!showSearchInput">
      <a href="">{{ $t("header.informationAboutOrganization") }}</a>
    </div>
    <Search :showSearchInput="showSearchInput" @toggle="toggleSearchInput"/>
  </v-col>
</template>
<script>
import Search from "./Search";

export default {
  name: "RightSubmenu",
  components: { Search },
  data() {
    return {
      showSearchInput: false,
    };
  },
  methods: {
    toggleSearchInput() {
      this.showSearchInput = !this.showSearchInput;
    }
  }
};
</script>
<style lang="scss">
a {
  color: var(--font-color-white) !important;
  text-decoration: none;
}
</style>
