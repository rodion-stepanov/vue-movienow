<template>
  <div>
    <ul class="film__list">
      <FilmItem
        v-on:filmFunc="filmFunc"
        v-for="film of films"
        :key="film.id"
        v-bind:film="film"
        v-bind:isLifting="isLifting"
      />
    </ul>
  </div>
</template>

<script>
import FilmItem from "./FilmItem";
export default {
  props: ["films"],
  components: { FilmItem },
  data: function () {
    return { isLifting: true };
  },
  methods: {
    filmFunc(film) {
      this.$router.push({
        path: `/${film.id}`
      });
    },
  },
};
</script>

<style>
.film__list {
  list-style: none;
  margin: 40px auto 0;
  padding: 0 0 40px 0;
  background: #363232;
}
</style>