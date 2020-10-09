<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>/-->
    <p v-once>{{myName}}</p>
    <input type="text" v-model="myName"/>
    <p>{{myAge}}</p>
    <p v-if="isVisible"> c'est OUIIIII (is visible = true)</p>
    <p v-else> c'est NONNNN (is visible = false) </p>
    <p v-if="myAge<30"> je suis jeune</p>
    <p v-else-if="myAge>35">je suis vieux</p>
    <p v-else> ça passe crème</p>
    <div class="product--list">
      <div class="product--item" v-for="product in myProducts" v-bind:key="product.index">
        <h2>{{product.name}}</h2>
        <p>{{product.price}}</p>
        <img v-bind:src="product.name" alt="">
        <a :href="product.img"> lien img</a>
      </div>
    </div>
    <p v-html="myRedTitle"></p>
    <p>
      {{myAge > 40 ? "je suis vieux" : "je suis jeune"}}
    </p>
    <button v-on:click="sayHello">say Hello</button>
    <button v-on:click="sayMyName(myName)">say my name</button>
    <input type="text" v-model="myName"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    data:function () {
        return {
            myName: "Tanguy",
            myAge: 22,
            myRedTitle:"<b style='color: red'>ce texte est rouge et bold</b>",
            myProducts:[
                {name:'product 1',price:130,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.courir.com%2Ffr%2Fp%2Fnike-mx-720-818-1467104.html&psig=AOvVaw2cMb4gRFN0fSWg59OXdr8Z&ust=1602236916186000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDk5uzbpOwCFQAAAAAdAAAAABAK"},
                {name:'product 2',price:150,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUHPrvOUHeXkAvU7u73M7SGsn2e42ScDVqbA&usqp=CAU"},
                {name:'product 3',price:170,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwave.fr%2Fnike-air-vapormax-2019-ci-1240-102-date-de-sortie-prix-251083&psig=AOvVaw2cMb4gRFN0fSWg59OXdr8Z&ust=1602236916186000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDk5uzbpOwCFQAAAAAdAAAAABAU"}
            ],
            myInfo:{},
            isVisible:true
        }
    },
    methods: {
      sayHello: function () {
          alert('hello');
      },
        sayMyName: function (name) {
            alert(`hello ${name}`)
        }
    }
}
</script>
