Vue.component('product',{
    props:{
        premium : {
            type: Boolean,
            required: true
        }
    },
    template: ` <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <h3 v-if='inStock'>{{ price * 0.8}}</h3>
                <h3 v-else>{{ price }}</h3>
                <h3>Shipping : {{shipping}} </h3>
                <h4>Options to choice</h4>
                <div v-for="detail in details">
                    <p class="color-box" @mouseover="upDateProductImg(detail.species)" :style="{ backgroundColor: detail.fur_color }"></p>
                    <p>{{ detail.weigh }}</p> 
                    <p>{{ detail.heigh }}</p>
                    <br>
                </div>
                <div class ="cart-containner">
                    <button v-on:click="addToCart">Add to cart</button>
                  </div>
            </div>
        </div>`,
        data() {
            return {
                branch: 'Vue Master',
                product: 'Pet',
                image: './assets/pet.jpg',
                inStock: true,
                price: 100,
                details: [{
                    fur_color: "green",
                    species: "./assets/pet.jpg",
                    weigh: 5 + "kg",
                    heigh: 20 + "cm"
                },
                {
                    fur_color: "yellow",
                    species: "./assets/shiba_1.jpg",
                    weigh: 10 + "kg",
                    heigh: 50 + "cm"
                }],
                cart: 0
            }
    }, 
    methods: {
        addToCart(){
            this.$emit('add-to-cat')
        },
        upDateProductImg: function (species) {
            this.image = species
        }
    },
    computed: {
        title() {
            return this.branch + ' ' + this.product
        }, 
        shipping() {
            if(this.premium) {
                return "free"
            } return 2.99
        }
    }
})
var app = new Vue({
    el:'#app',
    data : {
        premium : false,
        cart: 0
    },
    methods:{
        updateCart(){
            this.cart += 1
        }
    }
})