<template>
  <div class="jumbotron">
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
      meals: {},
      categorySelected: ''
    }
  },
  components: {
    MenuCard
  },
  created() {
    let categorySelected = this.$route.params.categorySelected
  },
  mounted() {
    axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=' +
          this.$route.params.categorySelected
      )
      .then(response => {
        this.meals = response.data.meals
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped></style>
