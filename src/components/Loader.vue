<template>
  <div class="loader">
    <img src="../assets/loader.png" class="loader__image" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
}
.loader__image {
  object-fit: contain;
  width: 136px;
  height: 136px;
}
</style>