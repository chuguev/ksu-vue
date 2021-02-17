<template>
  <section class="grey">
    <div class="container news-container">
      <div class="row">
        <div class="news-container__title">
          <h2>Лента новостей</h2>
        </div>
        <div class="news-container__control">
          control
        </div>
        <ul class="news-container__list">
          <News />
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.news-container {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

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
}
</style>
<script>
import News from "./News";

export default {
  components: { News },
};
</script>
