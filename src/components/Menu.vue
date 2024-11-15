<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link  class="nav-link active"  to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" @click="cerrarSesion()">Cerrar sesion</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Marcas
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                        <li  v-for="marca of marcas" :key="marca"><router-link  :to="'/cubos/' + marca" class="dropdown-item"> {{marca}}</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import Service from '../services/Service'
const service = new Service();
export default {
    name:"MenuComponent"
    ,data(){
        return{
            marcas:[]
        }
    }
    ,mounted(){
        service.getMarcas().then(r => this.marcas = r.data)
    },
    methods:{
        cerrarSesion(){
            localStorage.removeItem('authToken')
            this.$router.push("/")
        }
    }
}
</script>

<style>

</style>