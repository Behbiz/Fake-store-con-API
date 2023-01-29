<template>
  <store-header />
  <div>
    <vueper-slides>
      <vueper-slide v-for="(slide, i) in product.images" :key="i" :image="slide">
      </vueper-slide>
    </vueper-slides>
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
  </div>
  <store-footer />
</template>
<script setup>
import { onMounted, ref } from "vue";
import StoreHeader from "../../components/StoreHeader/StoreHeader.vue";
import StoreFooter from "../../components/StoreFooter/StoreFooter.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
const route = useRoute();
const product = ref({});
const getProduct = () => {
  axios
    .get(`https://api.escuelajs.co/api/v1/products/${route.params.id}`)
    .then((response) => {
      console.log(response.data);
      product.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  getProduct();
});
</script>
