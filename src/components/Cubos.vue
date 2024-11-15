<template>
  <div class="card" style="width: 18rem;" v-for="cub of cubos" :key="cub">
    <img :src="cub.imagen" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{cub.nombre}}</h5>
      <p class="card-text">{{cub.precio}}</p>
      <p>Valoracion: {{cub.valoracion}}</p>
        <router-link :to="'/detalles/' + cub.idCubo" class="btn btn-success">Detalles</router-link>
    </div>
</div>

</template>

<script>
import Service from '../services/Service'
const service = new Service();
export default {
    name:"CubosComponent",
    data(){
        return{
            cubos:[]
        }
    },
    mounted(){
        this.getMarcas()
    },
     watch: {
        '$route.params.marca'(newVal,oldVal){
            if(newVal != oldVal){
                service.getCubosByMarca(newVal).then(r => this.cubos = r.data)
                
            }

        }
    },
    methods:{
        getMarcas(){
            service.getCubosByMarca(this.$route.params.marca).then(r => this.cubos = r.data)

        }
    }
}
</script>

<style>

</style>