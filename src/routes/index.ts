import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView/LoginView.vue";
import HomeView from "../views/HomeView/HomeView.vue";
import ProfileView from "../views/ProfileView/ProfileView.vue";
import ProductView from "../views/ProductView/ProductView.vue";
import SingleCategoryView from "../views/ProductView/SingleCategoryView.vue";
import StoreHeader from "../components/StoreHeader/StoreHeader.vue";
import SingleProductView from "../views/ProductView/SingleProductView.vue";

const routes = [
	{ path: "/", name: "Home", component: HomeView },
	{ path: "/login", name: "Login", component: LoginView },
	{ path: "/profile", name: "Profile", component: ProfileView },
	{ path: "/product", name: "Product", component: ProductView },
	{ path: "/logout", name: "Logout", component: LoginView },
	{ name: "SingleCategory", component: SingleCategoryView },
	{ name: "StoreHeader", component: StoreHeader },
	{ path: '/product/:id', component: SingleProductView },
];

  
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
