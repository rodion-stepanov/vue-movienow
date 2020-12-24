<template>
  <li class="film" v-bind:class="{lift : isLifting}">
    <div class="film__poster-container">
      <img class="film__poster" :src="film.poster" :alt="film.title" />
    </div>
    <div class="film__info-container">
      <h2 class="film__title" v-on:click="$emit('filmFunc', film);">
        <!-- <router-link
          class="film__link"
          :to="{
            path: `/${film.id}`,
            props: this.film,
            params: { film: this.film },
          }"
        > -->
          {{ film.title }}
        <!-- </router-link> -->
      </h2>
      <div v-if="film.collapse.duration" class="film__time-container">
        <p class="film__time-text">{{ film.collapse.duration.join("") }}</p>
        <div class="film__time-image"></div>
      </div>
      <p class="film__genre">{{ `${film.year}, ${film.genres}` }}</p>
      <p v-if="film.directors" class="film__director">
        {{ `РЕЖИССЁР: ${film.directors}` }}
      </p>
      <div v-if="film.actors" class="film__actors-wrapper">
        <p class="film__actors">АКТЁРЫ:</p>
        <span class="film__name-actors">{{ film.actors.join(", ") }}</span>
      </div>
      <p class="film__desription">
        {{ film.description }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "FilmItem",
  props: {
    film: {
      type: Object,
      required: true,
    },
    isLifting: {
      type: Boolean,
      required: true,
    }
  },
};
</script>

<style>
.film {
  display: flex;
  width: 75%;
  margin: 0 auto 24px;
  background: #4d4747;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}
.film:last-child {
  margin-bottom: 0;
}
.lift:hover {
  transform: translateY(-8px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
}
.film__poster-container {
  display: flex;
  justify-content: center;
  background: #c4c4c4;
  max-width: 168px;
}
.film__poster {
  width: 66.67%;
  object-fit: contain;
}
.film__info-container {
  position: relative;
  box-sizing: padding-box;
  display: flex;
  width: 88.33%;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 32px 32px 24px;
}
.film__title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #ffffff;
  margin: 0 0 12px;
  z-index: 1;
  text-align: left;
  cursor: pointer;
}
.film__link {
  text-decoration: none;
  color: #ffffff;
}
.film__time-container {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 32px;
  right: 0;
  width: 174px;
  height: 0;
  border-left: 10px solid transparent;
  border-bottom: 30px solid#C4C4C4;
}
.film__time-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #000000;
  margin: 9px 0;
}
.film__time-image {
  background-image: url("../assets/tape.png");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  margin: 6px 0 6px 8px;
}
.film__genre {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #988f8f;
  margin: 0 0 8px;
}
.film__director {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #988f8f;
  margin: 0 0 8px;
}
.film__actors-wrapper {
  display: flex;
  margin: 0 0 16px;
}
.film__actors {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #988f8f;
  margin: 2px 7px 0 0;
  text-align: start;
}
.film__name-actors {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #e5e5e5;
  text-align: start;
}
.film__desription {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin: 0px;
  text-align: start;
}
@media screen and (max-width: 1700px) {
  .film__title {
    width: 70%;
  }
}
@media screen and (max-width: 1023px) {
  .film__title {
    width: 50%;
  }
}
</style>