<template>
  <store-header />
  <div>
      <p>ID: {{ profile.id }}</p>
      <p>Email: {{ profile.email }}</p>
      <p>Name: {{ profile.name }}</p>
      <p>Role: {{ profile.role }}</p>
      <img :src="profile.avatar" alt="Avatar">
    </div>
  <store-footer />
</template>
<script setup>
import { onMounted, ref } from "vue";
import StoreHeader from "../../components/StoreHeader/StoreHeader.vue";
import StoreFooter from "../../components/StoreFooter/StoreFooter.vue";
import axios from "axios";
import { useRouter } from 'vue-router';
const router = useRouter()

const profile = ref({});

const getProfile = () => {
  const accessToken = localStorage.getItem("access_token");
  if(!accessToken){
    router.push({ name: 'Login' })
  }
  axios
    .get("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      profile.value = response.data
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  getProfile();
});
</script>
