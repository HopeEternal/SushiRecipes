<template>
  <div v-if="sushi" class="edit-sushi container">
    <h2>Edit {{ sushi.title }} sushi</h2>
    <form @submit.prevent="EditSushi">
      <div class="field title">
        <label for="title">Sushi Title:</label>
        <input type="text" name="title" v-model="sushi.title">
      </div>
      <div v-for="(ing, index) in sushi.ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="sushi.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient (press Tab key to save each one):</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Sushi</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
  name: 'EditSushi',
  data() {
    return{
        sushi: null,
        another: null,
        feedback: null
      
    }
  },
  methods: {
      EditSushi(){
        if(this.sushi.title){
        this.feedback = null
        //Create a slug
        this.sushi.slug = slugify(this.sushi.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        db.collection('sushis').doc(this.sushi.id).update({
          title: this.sushi.title,
          ingredients: this.sushi.ingredients,
          slug: this.sushi.slug
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
        this.sushi.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add an ingredient!'
      }
    },
    deleteIng(ing) {
      this.sushi.ingredients = this.sushi.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    },  
  },
  created(){
    let ref = db.collection('sushis').where('slug', '==', this.$route.params.sushi_slug)
    ref.get().then(snapshot => {
        snapshot.forEach(doc => {
            this.sushi = doc.data()
            this.sushi.id = doc.id
            })
        })
  }
}
</script>

<style>
  .edit-sushi{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }
  .edit-sushi h2 {
    font-size: 2em;
    margin: 20px auto;
  }
  .edit-sushi .field {
    margin: 20px auto;
    position: relative;
  }
  .edit-sushi .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
  }
</style>