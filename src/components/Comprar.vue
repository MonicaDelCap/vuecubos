<template>
  <label>Cubos</label>
<select v-model="selectcubo" >
    <option v-for="cub of cubos" :key="cub" :value="cub.idCubo">{{cub.nombre}}</option>
</select>
<button @click="comprar()">Comprar</button>

</template>

<script>
import Service from '../services/Service'
const service = new Service();
export default {
    name:"ComprarComponent",
    data(){
        return{
            cubos:[],
            selectcubo:""
        }
    },
    mounted(){
        service.getCubos().then(r => this.cubos = r.data)
    },
    methods:{
        comprar(){
            service.comprarCubo(this.selectcubo).then(r => {
                console.log(r.data)
                this.$router.push("/perfil")
            })
        }
    }
}
</script>

<style>

</style>