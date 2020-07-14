<template>
  <v-app>
    <div class="default-layout">
      <HeaderDefault/>
      <v-main>
        <nuxt/>
      </v-main>
      <FooterDefault/>
    </div>
  </v-app>
</template>

<script>
  import HeaderDefault from '~/components/header/default/HeaderDefault';
  import FooterDefault from '~/components/footer/FooterDefault';

  export default {
    components: {
      HeaderDefault,
      FooterDefault,
    },
  };
</script>
