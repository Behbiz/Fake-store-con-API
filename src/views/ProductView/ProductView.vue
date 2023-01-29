<template>
    <store-header />
    <div class="banner">
        <img :src="banner" alt="Banner" class="banner__img">
    </div>
    <main class="home">
      <div class="home_wrap">
        <h1 class="text-4xl text-slate-800 pb-10 font-bold"> Products</h1>
        <div class="home_wrap__content">
          <store-card-product  v-for="card in result" :key="card.index" :products="card" />
        </div>
      </div>
    </main>
    <store-footer />
</template>
<script setup>
import { onMounted, ref } from 'vue';
import StoreHeader from '../../components/StoreHeader/StoreHeader.vue';
import StoreFooter from '../../components/StoreFooter/StoreFooter.vue';
import StoreCardProduct from '../../components/StoreCardProduct/StoreCardProduct.vue'
import banner from '../../assets/image/banner.jpg'
import axios from 'axios'

const result = ref({})

const getProduct = () =>{
  axios.get('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.data)
    .then(data =>{
      console.log(data)
      result.value = data
    })
  }

onMounted(() =>{
  getProduct()
})


</script>
<style lang="scss" scoped>
@import './ProductView-style.scss';
</style>

