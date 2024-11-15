<template>
 <h1>Hola {{perfil.email}}</h1>
<h1>Detalles Email:{{perfil.email}}</h1>
<button @click="historialCompra()">HISTORIAL</button>
<button @click="comprar()">Comprar</button>
<div v-if="show == true">
    <ul v-for="com of compras" :key="com">
        <li>ID PEDIDO: {{com.idPedido}}, FECHA: {{com.fechaPedido}} </li>
    </ul>
</div>
</template>

<script>
import Service from '../services/Service'
const service = new Service();
export default {
    name:"PerfilComponent",
    data(){
        return{
            perfil:[],
            compras:[],
            show:false
        }
    },
    mounted(){
        service.getPerfil().then(r => this.perfil = r.data)
    },
    methods:{
       historialCompra(){
        service.getHistorialCompras().then( r => this.compras = r.data);
        this.show = true
       } ,
       comprar(){
        this.$router.push("/comprar")
       }
    }
}
</script>

<style>

</style>