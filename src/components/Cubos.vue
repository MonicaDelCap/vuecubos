<template>
  <div class="cubes-container">
    <div class="card cube-card" v-for="cub of cubos" :key="cub">
      <img :src="cub.imagen" class="card-img-top cube-img" alt="Cubo de Rubik">
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
import Service from '../services/Service';
const service = new Service();
export default {
  name: "CubosComponent",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    this.getMarcas();
  },
  watch: {
    '$route.params.marca'(newVal, oldVal) {
      if (newVal !== oldVal) {
        service.getCubosByMarca(newVal).then((r) => (this.cubos = r.data));
      }
    },
  },
  methods: {
    getMarcas() {
      service.getCubosByMarca(this.$route.params.marca).then((r) => (this.cubos = r.data));
    },
  },
};
</script>

<style scoped>
.cubes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.cube-card {
  width: 18rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.cube-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.cube-img {
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #e0e0e0;
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
  margin-bottom: 10px;
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
