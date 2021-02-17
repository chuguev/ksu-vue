<template>
  <li class="news news-white">
    <label class="news__date">22 марта</label>
    <h3 class="news__title">
      Формируем налоговую культуру: открытая лекция от специалиста ФНС для
      студентов КГУ
    </h3>
    <div class="news__description">
      В целях популяризации точных наук, информационных технологий и
      естественно-научных предметов и повышения интереса...
    </div>
  </li>
</template>
<script>
export default {
  name: "News",
};
</script>
<style lang="scss">
.news {
  padding: 45px;

  &__date {
    list-style-type: circle;
    color: var(--color-font-brown);
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 20px;
  }

  &__title {
    font-size: var(--size-font-medium);
  }
}
</style>
