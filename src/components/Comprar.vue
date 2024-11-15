<template>
  <div class="buy-container">
    <label for="cube-select" class="label">Cubos</label>
    <select id="cube-select" v-model="selectcubo" class="select">
      <option v-for="cub of cubos" :key="cub.idCubo" :value="cub.idCubo">
        {{cub.nombre}}
      </option>
    </select>
    <button @click="comprar()" class="btn btn-success">Comprar</button>
  </div>
</template>

<script>
import Service from '../services/Service';
const service = new Service();
export default {
  name: "ComprarComponent",
  data() {
    return {
      cubos: [],
      selectcubo: "",
    };
  },
  mounted() {
    service.getCubos().then((r) => (this.cubos = r.data));
  },
  methods: {
    comprar() {
      service.comprarCubo(this.selectcubo).then((r) => {
        console.log(r.data);
        this.$router.push("/perfil");
      });
    },
  },
};
</script>

<style scoped>
.buy-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.label {
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #34495e;
}

.select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  color: #2c3e50;
  background-color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.select:focus {
  border-color: #3498db;
  box-shadow: 0px 0px 5px rgba(52, 152, 219, 0.5);
  outline: none;
}

.btn {
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-success {
  background-color: #27ae60;
  color: #fff;
}

.btn-success:hover {
  background-color: #2ecc71;
  transform: translateY(-2px);
}
</style>
