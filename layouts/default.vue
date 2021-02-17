<template>
  <div class="default-layout">
    <HeaderDefault />
    <nuxt />
    <FooterDefault />
  </div>
</template>

<script>
import HeaderDefault from "~/components/header/default/HeaderDefault";
import FooterDefault from "~/components/footer/FooterDefault";

export default {
  components: {
    HeaderDefault,
    FooterDefault,
  },
};
</script>
