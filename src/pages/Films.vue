<template>
  <div class="films">
    <h2 class="films__title">Фильмы</h2>
    <div class="films__filter">
      <label class="films__filter-text">
        <div
          v-on:click="nameSort"
          class="films__filer-image"
          v-bind:class="{ active: sortName }"
        />
        <input
          v-on:click="nameSort"
          class="films__filter-button"
          type="checkbox"
          name="filter"
        />
        Отсортировать по названию
      </label>
      <label class="films__filter-text">
        <div
          v-on:click.stop="yearSort"
          class="films__filer-image"
          v-bind:class="{ active: sortYear }"
        />
        <input
          v-on:click.stop="yearSort"
          class="films__filter-button"
          type="checkbox"
          name="filter"
        />
        Отсортировать по году
      </label>
    </div>
    <Loader v-if="loading" />
    <FilmList v-else v-bind:films="films" />
  </div>
</template>

<script>
import FilmList from "../components/FilmList";
import Loader from "../components/Loader";
export default {
  name: "App",
  components: { FilmList, Loader },
  data() {
    return {
      films: [],
      loading: true,
      sortName: false,
      sortYear: false,
    };
  },
  mounted() {
    fetch("https://floating-sierra-20135.herokuapp.com/api/movies").then(
      (response) =>
        response.json().then((res) => {
          this.films = res.data;
          this.loading = false;
        })
    );
  },
  methods: {
    nameSort: function () {
      this.sortYear = false;
      this.sortName = true;
      this.films.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
      });
    },
    yearSort: function () {
      this.sortName = false;
      this.sortYear = true;
      this.films.sort((a, b) => a.year - b.year);
    },
  },
};
</script>

<style>
.films {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.films__title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  color: #ffffff;
  width: 75%;
  text-align: left;
}
.films__filter {
  width: 75%;
  display: flex;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 16px;
}
.films__filter-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #c4c4c4;
  display: flex;
  align-items: center;
}
.films__filter-text:first-child {
  margin-right: 32px;
}
.films__filer-image {
  display: flex;
  width: 16px;
  height: 16px;
  background-image: url("../assets/checkbox-empty.png");
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 8px;
  transition: all 0.3s ease-in-out;
}
.active {
  background-image: url("../assets/checkbox-active.png");
}
.films__filter-button {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
</style>