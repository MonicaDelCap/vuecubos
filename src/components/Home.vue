<template>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; padding: 20px;">
    <div class="card custom-card" v-for="cub of cubos" :key="cub">
      <img :src="cub.imagen" class="card-img-top custom-card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{cub.nombre}}</h5>
        <p class="card-text"><strong>Precio:</strong> {{cub.precio}}</p>
        <p><strong>Valoración:</strong> {{cub.valoracion}}/5</p>
        <router-link :to="'/detalles/' + cub.idCubo" class="btn btn-success">Detalles</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Service from '../services/Service'
const service = new Service();
export default {
    name:"HomeComponent",
    data(){
        return{
            cubos:[]
        }
    },
    mounted(){
        service.getCubos().then(r => this.cubos = r.data)
    }
}
</script>

<style scoped>
.custom-card {
  width: 18rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.custom-card-img {
  height: 200px;
  object-fit: cover;
}

.card-body {
  text-align: center;
  padding: 15px;
  background-color: #f9f9f9;
}

.card-title {
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 10px;
}

.card-text {
  color: #7f8c8d;
  margin-bottom: 15px;
}

.btn-success {
  background-color: #27ae60;
  border-color: #27ae60;
}

.btn-success:hover {
  background-color: #2ecc71;
  border-color: #2ecc71;
}
</style>

