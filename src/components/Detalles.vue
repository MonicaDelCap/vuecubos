<template>
  <div class="card custom-card" style="width: 18rem;">
    <img :src="cubo.imagen" class="card-img-top custom-card-img">
    <div class="card-body">
      <h5 class="card-title">{{cubo.nombre}}</h5>
      <p class="card-text"><strong>Precio:</strong> {{cubo.precio}}</p>
      <p><strong>Valoración:</strong> {{cubo.valoracion}}/5</p>
    </div>
  </div>

  <div v-for="com of comentarios" :key="com" class="comment-section">
    <p class="comment-text"><strong>Comentario:</strong> {{com.comentario}}</p>
  </div>
</template>

<script>
import Service from '../services/Service'
const service = new Service();
export default {
    name:"DetallesComponent",
    data(){
        return{
            cubo:[],
            comentarios:[]
        }
    },
    mounted(){
        service.getCuboById(this.$route.params.id).then( r => this.cubo = r.data)
        service.getComentarios(this.$route.params.id).then( r => this.comentarios = r.data)
    }
}
</script>

<style scoped>
.custom-card {
  width: 18rem;
  margin: 20px auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.custom-card-img {
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

.comment-section {
  background-color: #f7f7f7;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.comment-text {
  font-size: 1rem;
  color: #2c3e50;
  line-height: 1.5;
}

</style>