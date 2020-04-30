<template>
  <div class="jumbotron">
    <h1>hallo {{ categorySelected }}</h1>
    <div class="row">
      <MenuCard v-for="meal in meals" :key="meal.idmeals" :meal="meal" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import MenuCard from '../components/menuCard.vue'
export default {
  data() {
    return {
      meals: {}
    }
  },
  components: {
    MenuCard
  },
  props: { categorySelected: String },
  mounted() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood')
      .then(response => {
        this.meals = response.data.meals
        console.log(this.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped></style>
