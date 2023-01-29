<template>
  <store-header />
  <div class="banner">
    <img :src="banner" alt="Banner" class="banner__img" />
  </div>
  <main class="home">
    <div class="home_wrap">
      <h1 class="text-4xl text-slate-800 pb-10 font-bold">Products</h1>
      <div class="home_wrap__content">
        <store-card-product v-for="card in result" :key="card.index" :products="card" />
      </div>
    </div>
  </main>
  <store-footer />
</template>
<script setup>
import { onMounted, ref } from "vue";
import StoreHeader from "../../components/StoreHeader/StoreHeader.vue";
import StoreFooter from "../../components/StoreFooter/StoreFooter.vue";
import StoreCardProduct from "../../components/StoreCardProduct/StoreCardProduct.vue";
import banner from "../../assets/image/banner.jpg";
import axios from "axios";
import { useStore } from "vuex";

const result = ref({});

const getProduct = () => {
  const store = useStore();
  axios
    .get(`https://api.escuelajs.co/api/v1/products/?title=${store.state.searchText}`)
    .then((response) => {
      console.log(response.data)
      result.value = response.data
    })
    .catch((error) => {
      console.log(error)
      console.error(error);
    });
};

onMounted(() => {
  getProduct();
});
</script>
<style lang="scss" scoped>
@import "./ProductView-style.scss";
</style>
