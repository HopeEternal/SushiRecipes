<template>
  <div class="index container">
    <div class="card" v-for="sushi in sushis" :key="sushi.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSushi(sushi.id)">delete</i>
        <h2 class="indigo-text">{{ sushi.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in sushi.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{ name: 'EditSushi', params: {sushi_slug: sushi.slug} }">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      sushis: [
      ]
    }
  },
  methods: {
    deleteSushi(id){
      //Delete doc from Firestore
      db.collection('sushis').doc(id).delete()
      .then(() => {
        //Once Deleted from FireStore, remove from Array to update UI
        this.sushis = this.sushis.filter(sushi => {
          return sushi.id != id
        })
      })
    }
  },
  created() {
    // fetch data from the firestore
    db.collection('sushis').get()
    .then(snapshot =>
    {
      snapshot.forEach(doc => {
        let sushi = doc.data()
        sushi.id = doc.id
        this.sushis.push(sushi)
      })
    })
    
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

    .delete {
      position: absolute;
      top: 4px;
      right: 4px;
      cursor: pointer;
      color: #aaa;
      font-size: 1.4em;
    }
}
</style>
