<template>
  <div class="profile-container">
    <h1 class="greeting">Hola, {{perfil.email}}</h1>
    <h2 class="details">Detalles Email: {{perfil.email}}</h2>
    <div class="buttons">
      <button @click="historialCompra()" class="btn btn-primary">Historial</button>
      <button @click="comprar()" class="btn btn-success">Comprar</button>
    </div>
    <div v-if="show" class="purchase-history">
      <h3>Historial de Compras</h3>
      <ul>
        <li v-for="com of compras" :key="com" class="purchase-item">
          <strong>ID Pedido:</strong> {{com.idPedido}}, <strong>Fecha:</strong> {{com.fechaPedido}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Service from '../services/Service';
const service = new Service();
export default {
  name: "PerfilComponent",
  data() {
    return {
      perfil: [],
      compras: [],
      show: false,
    };
  },
  mounted() {
    service.getPerfil().then((r) => (this.perfil = r.data));
  },
  methods: {
    historialCompra() {
      service.getHistorialCompras().then((r) => (this.compras = r.data));
      this.show = true;
    },
    comprar() {
      this.$router.push("/comprar");
    },
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.greeting {
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 10px;
}

.details {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-success {
  background-color: #2ecc71;
  color: #fff;
}

.btn-success:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
}

.purchase-history {
  margin-top: 20px;
  text-align: left;
}

.purchase-history h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 15px;
}

.purchase-item {
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #2c3e50;
  font-size: 1rem;
}
</style>
