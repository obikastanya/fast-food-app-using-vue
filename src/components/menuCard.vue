<template>
  <div class="col-sm-3">
    <div class="card" style="width:100%;">
      <img class="card-img-top" v-bind:src="meal.strMealThumb" alt="Card image cap" />
      <div class="card-body">
        <p class="card-title">{{ meal.strMeal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meal: {}
  }
}
</script>
<style scoped>
.card {
  margin: 10% 0;
  padding: 5% 0;
}
.card-img-top {
  border-radius: 0;
}
.card-body {
  height: 80px;
}
</style>
