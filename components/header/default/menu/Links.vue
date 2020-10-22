<template>
  <ul class="menu-links">
    <li><a href="#">Абитуриентам</a></li>
    <li><a href="#">Студентам</a></li>
    <li><a href="#">Сотрудникам</a></li>
    <li><a href="#">Инностраным гражданам</a></li>
    <li><a href="#">Контакты</a></li>
  </ul>
</template>

<script>
export default {
  name: "Links",
};
</script>

<style scoped>
.menu-links {
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  flex-grow: 2;
  color: var(--color-main-menu-font);
}
.menu-links li {
  margin-left: 2rem;
}
</style>
