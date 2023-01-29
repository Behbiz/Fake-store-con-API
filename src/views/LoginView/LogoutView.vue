<script setup>
import { onMounted } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter()


const handleLogout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  router.push({ name: 'Login' })
};

onMounted(() => {
  handleLogout();
});
</script>
