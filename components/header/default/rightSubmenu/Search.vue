<template>
  <div class="search">
    <v-icon
      v-if="!showSearchInput"
      @click="$emit('toggle')"
      class="search__icon"
      color="white"
      >{{ searchIcon }}
    </v-icon>
    <template v-else>
      <v-text-field
        v-model="searchTerm"
        v-click-outside="closeInput"
        @keydown.enter="search"
        :placeholder="$t('header.searchPlaceholder')"
        hide-details="true"
        autofocus
        dense
        color="indigo darken-3"
        class="pa-0 ma-0 flex-grow-1 search__input"
      />
    </template>
  </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
  name: "Search",
  props: {
    showSearchInput: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      searchIcon: mdiMagnify,
      searchTerm: "",
    };
  },
  methods: {
    closeInput() {
      this.searchTerm = "";
      this.$emit("toggle");
    },
    search() {
      console.log(this.searchTerm);
    },
  },
};
</script>

<style lang="scss">
.search {
  &__icon {
    cursor: pointer;
  }
}

.v-text-field__slot {
  input {
    padding: 0 !important;
  }
}
</style>
