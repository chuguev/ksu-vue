<template>
  <div class="main-menu d-flex align-center white-menu">
    <MainLogo />
    <Links />
    <AccountEnter />
  </div>
</template>

<script>
import MainLogo from "./MainLogo";
import Links from "~/components/header/default/menu/Links";
import AccountEnter from "~/components/header/default/menu/AccountEnter";

export default {
  components: { AccountEnter, MainLogo, Links },
  name: "MainMenu",
};
</script>

<style scoped>
.white-menu {
  --color-main-menu-font: #ffffff;
}
</style>
