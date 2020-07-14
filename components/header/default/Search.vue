<template>
  <div class="search">
    <v-icon
      v-if="!showInput"
      @click="toggleInput"
      class="search__icon"
      color="white"
      >{{ searchIcon }}</v-icon
    >
    <template v-else>
      <v-text-field
        v-model="searchTerm"
        class="pa-0 ma-0 flex-grow-1 search__input"
        v-click-outside="closeInput"
        placeholder="Что вы ищите?"
        hide-details="true"
        autofocus
        dense
        color="indigo darken-3"
        @keydown.enter="search"
      ></v-text-field>
    </template>
  </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
  name: "Search",
  data() {
    return {
      searchIcon: mdiMagnify,
      showInput: false,
      searchTerm: ''
    };
  },
  methods: {
    toggleInput() {
      this.showInput = !this.showInput;
    },
    closeInput() {
      this.searchTerm = '';
      this.toggleInput();
    },
    search() {
      console.log(this.searchTerm);
    }
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
