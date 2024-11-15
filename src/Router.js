import { createRouter, createWebHistory } from "vue-router"; 
import HomeComponent from './components/Home.vue'
import CubosComponent from './components/Cubos.vue'
import DetallesComponent from './components/Detalles.vue'
import LoginComponent from './components/Login.vue'
import PerfilComponent from './components/Perfil.vue'
import ComprarComponent from './components/Comprar.vue'
const myRoutes = [ 

    {
        path:"/",component: HomeComponent
    },
    {
        path:"/cubos/:marca",component:CubosComponent
    },
    {
        path:"/detalles/:id", component:DetallesComponent
    },
    {
        path:"/login", component:LoginComponent
    },
    {
        path:"/perfil", component:PerfilComponent
    },
    {
        path:"/comprar", component:ComprarComponent
    }
    
] 

const router = createRouter({ 

    history: createWebHistory(), 
    
    routes: myRoutes 
}) 

export default router;