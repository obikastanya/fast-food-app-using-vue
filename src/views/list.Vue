<template>
  <div>
    <div class="jumbotron">
      <ul>
        <li v-for="category in categories" :key="category.idCategory">{{ category.strCategory }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      categories: [],
      loading: true,
      errored: false
    }
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
