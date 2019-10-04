<template>
  <div class="index container">
    <div class="card" v-for="sushi in sushis" :key="sushi.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ sushi.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in sushi.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      sushis: [
        {title: 'Futomaki', slug: 'futomaki', ingredients: ["Nori (seaweed)", "Sushi rice", "Tamagoyaki (egg)", "Kanpyo (gourd strips)", "Shiitake Mushrooms", "Spinach", "Cucumber", "Cooked unagi (eel)", "Sakura Denbu (Fish Flakes)"], id: 1},
        {title: 'Avocado Roll', slug: 'avocado-roll', ingredients: ["Nori (seaweed)", "Sushi rice", "Avocado"], id: 2}

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
 display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;

    h2 {
      font-size: 1.8em;
      text-align: center;
      margin-top: 0;
    } 

    .ingredients{
      margin: 30px auto;

      .ingredients li{
         margin: 30px auto;
      }
    }

}
</style>
