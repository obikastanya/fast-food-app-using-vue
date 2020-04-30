<template>
  <div>
    <div class="jumbotron">
      <h1>Category Menu</h1>
      <div class="row">
        <CardCategory
          v-for="category in categories"
          :key="category.idCategory"
          :category="category"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import CardCategory from '../components/CardCategory.vue'
export default {
  data() {
    return {
      categories: [],
      loading: true,
      errored: false
    }
  },
  components: {
    CardCategory
  },
  mounted() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        this.categories = response.data.categories
      })
      // .then(() => {
      //test getting data
      //   console.log(this.categories[0].idCategory)
      // })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>
<style lang="stylus" scoped></style>
