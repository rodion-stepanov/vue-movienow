<template>
  <div class="loader">
    <div class="loader__black" />
    <div class="loader__red" />
  </div>
</template>

<script>
export default {};
</script>

<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate-reverse {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.loader {
  display: flex;
  position: absolute;
  top: 50.6%;
  left: 49%;
  justify-content: center;
  align-items: center;
  margin-top: -0.625em;
}
.loader__red {
  width: 82px;
  height: 82px;
  border-top-left-radius: 85px;
  border-top-right-radius: 85px;
  border-top: 3px solid rgba(250, 40, 40, 0.98);
  animation: rotate 1s linear infinite;
  margin: 0;
  margin-left: -120px;
}
.loader__black {
  width: 100px;
  height: 100px;
  border-top-left-radius: 103.57px;
  border-top-right-radius: 103.57px;
  border-top: 3.57px solid #000000;
  animation: rotate-reverse 3s linear infinite;
  margin: 0;
}
</style>