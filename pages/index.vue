<template>
  <section class="wrapper wrapper-grey">
    <div class="container news-container">
      <div class="row">
        <div class="news-container__title col-12 col-md-6">
          <h2>Лента новостей</h2>
        </div>
        <div class="news-container__control col-12 col-md-6">
          control
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xxl-3 pb-5">
          <News />
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xxl-3 pb-5">
          <News />
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xxl-3 pb-5">
          <News />
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xxl-3 pb-5">
          <News />
        </div>
      </div>
    </div>
  </section>
</template>

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
}
</style>
<script>
import News from "./News";

export default {
  components: { News },
};
</script>
