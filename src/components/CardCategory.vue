<template>
  <div class="col-sm-3">
    <div class="card" style="width:100%;">
      <router-link
        :to="{
          name: 'menu',
          params: { categorySelected: category.strCategory }
        }"
      >
        <img class="card-img-top" v-bind:src="category.strCategoryThumb" alt="Card image cap" />
      </router-link>
      <div class="card-body">
        <p class="card-title">{{ category.strCategory }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {}
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
</style>
