<template>
  <header>
    <a href="/" class="logo"><img :src="store" alt="store" width="120" /></a>
    <ul class="nav">
      <li><a href="/profile">Profile</a></li>
      <li><a href="/login">Login</a></li>
      
      <li>
        <div class="search">
          <input
            type="text"
            class="search__Term"
            placeholder="Busca"
            v-model="searchTerm"
          />
            <button v-on:click="queryText" type="submit" class="search__Button">
              <icon-search />
            </button>
        </div>
      </li>
      <li >
        <button><icon-bag /></button>( )
      </li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </header>
</template>
<script setup>
import IconSearch from "../icons/IconSearch.vue";
import store from "../../assets/image/logo-store.svg";
import IconBag from "../../components/icons/IconBag.vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { onMounted, ref } from "vue";
const searchTerm = ref("");
const stateStore = useStore();
const router = useRouter()

const checkToken = function () {
  const accessToken = localStorage.getItem("access_token");
  if(!accessToken){
    router.push({ name: 'Login' })
  }
}

onMounted(() => {
  checkToken();
});

const queryText = function () {
  stateStore.state.searchText = searchTerm;
  router.push({ name: 'SingleCategory' })
};
</script>
<style lang="scss" scoped>
@import "./StoreHeader-style.scss";
</style>
