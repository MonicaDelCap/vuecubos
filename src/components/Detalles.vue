<template>
  <div class="card" style="width: 18rem;">
    <img :src="cubo.imagen" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{cubo.nombre}}</h5>
      <p class="card-text">{{cubo.precio}}</p>
      <p>Valoracion: {{cubo.valoracion}}</p>
    </div>
</div>
<div v-for="com of comentarios" :key="com">
    <p>{{com.comentario}}</p>
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

<style>

</style>