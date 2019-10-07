<template>
  <div class="add-sushi container">
    <h2 class="center-align indigo-text">Add New Sushi Recipe</h2>
    <form @submit.prevent="AddSushi">
      <div class="field title">
        <label for="title">Sushi Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient (press Tab key to save each one):</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Sushi</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
  name: 'AddSushi',
  data(){
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null
    }
  },
  methods: {
    AddSushi() {
      if(this.title){
        this.feedback = null
        //Create a slug
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        db.collection('sushis').add({
          title: this.title,
          ingredients: this.ingredients,
          slug: this.slug
        }).then(() =>{
          this.$router.push({ name: 'Home' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback='You must enter a sushi title!'
      }
      
    },
    addIng() {
      if(this.another){
        this.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add an ingredient!'
      }
    }

  }
}
</script>

<style>
  .add-sushi{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }
  .add-sushi h2 {
    font-size: 2em;
    margin: 20px auto;
  }
  .add-sushi .field{
    margin: 20px auto;
  }
</style>