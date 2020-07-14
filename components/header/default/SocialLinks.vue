<template>
  <div class="d-flex pl-5 social">
    <a
      v-for="social of socialLinks"
      v-bind:key="social.link"
      class="social__link"
      v-bind:href="social.link"
      target="_blank"
    >
      <v-icon color="white">{{ social.icon }}</v-icon>
    </a>
  </div>
</template>
<script>
import { mdiInstagram, mdiTwitter, mdiVk } from "@mdi/js";

export default {
  name: "SocialLinks",
  data() {
    return {
      socialLinks: [
        {
          icon: mdiInstagram,
          link: "https://www.instagram.com/kursk_state_university/",
        },
        {
          icon: mdiTwitter,
          link: "https://twitter.com/kursksu1934",
        },
        {
          icon: mdiVk,
          link: "https://vk.com/kursksu",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.social {
  :first-child {
    margin-left: 0;
  }

  &__link {
    margin-left: 12px;
  }
}
</style>
