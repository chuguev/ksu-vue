<template>
    <v-col class="pb-0 pt-0 d-flex">
        <SpecialVersionButton/>
        <SocialLinks/>
    </v-col>
</template>
<script>
  import SocialLinks from './SocialLinks'
  import SpecialVersionButton from './SpecialVersionButton'

  export default {
    name: 'LeftSubmenu',
    components: {SocialLinks, SpecialVersionButton}
  }
</script>
