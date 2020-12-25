<template>
  <div class="film__info">
    <router-link to="/" class="link">
      <img class="link__image" src="../assets/arrow.png" alt="arrow" />
      <p class="link__text">Назад к списку</p>
    </router-link>
    <Loader v-if="loading" />
    <FilmItem
      v-if="film.title"
      v-bind:film="film"
      v-bind:isLifting="isLifting"
    />
    <p class="film__info-text" v-if="!film && !loading">
      К сожалению, по вашему запросу ничего не найдено...
    </p>
  </div>
</template>

<script>
import FilmItem from "../components/FilmItem";
import Loader from "../components/Loader";
export default {
  components: {
    FilmItem,
    Loader,
  },
  data: () => ({
    isLifting: false,
    loading: true,
    film: {},
  }),
  mounted() {
    fetch(
      `https://floating-sierra-20135.herokuapp.com/api/movie${this.$router.history.current.path}`
    )
      .then((response) => response.json())
      .then((res) => (this.film = res.data))
      .catch((err) => console.log(err))
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
.film__info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #363232;
}
.film__info-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  color: #ffffff;
  width: 75%;
  text-align: left;
}
.link {
  display: flex;
  align-items: center;
  width: 75%;
  margin: 40px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #c4c4c4;
}
.link__image {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
.link__text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  text-decoration-line: underline;
  color: rgba(255, 82, 82, 0.98);
}
</style>