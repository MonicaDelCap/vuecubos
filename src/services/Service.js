import Global from "@/Global";
import axios from "axios";

export default class Service{

    getCubos(){
        let request = "api/Cubos";
        return new Promise (function(resolve){
            axios.get(Global.urlCubos + request).then(r => resolve(r))
        })
    }

    getMarcas(){
        let request= "api/Cubos/Marcas";
        return new Promise(function(resolve){
            axios.get(Global.urlCubos + request).then( r => resolve(r))
        })
    }

    getCubosByMarca(marca){
        let request = "api/Cubos/CubosMarca/" + marca;
        return new Promise(function(resolve){
            axios.get(Global.urlCubos + request).then(r => resolve(r))
        })
    }

    getCuboById(id){
        let request = "api/Cubos/" + id;
        return new Promise(function(resolve){
            axios.get(Global.urlCubos + request).then(r => resolve(r))
        })
    }

    getComentarios(id){
        let request = "api/ComentariosCubo/GetComentariosCubo/" + id;
        return new Promise(function(resolve){
            axios.get(Global.urlCubos + request).then(r => resolve(r))
        })
    }

    getToken(login){
        let request = "/api/Manage/Login";
        let header = {"Content-Type":"application/json"}
        return new Promise(function(resolve){
            axios.post(Global.urlCubos + request, JSON.stringify(login),{headers:header})
            .then(r => resolve(r))
            .catch(r => resolve(r))
        })
    }

    getPerfil(){
        let request = "api/Manage/PerfilUsuario";
        let header = {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}
        return new Promise(function(resolve){
            axios.get(Global.urlCubos + request,{headers:header})
            .then( r => resolve(r))
        })
    }

    getHistorialCompras(){
        let request = "api/Compra/ComprasUsuario";
        let header = {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}
        return new Promise(function(resolve){
            axios.get(Global.urlCubos + request,{headers:header})
            .then( r => resolve(r))
        })
    }

    comprarCubo(id){
        let request = "api/Compra/InsertarPedido/" +id;
        let header = {
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`,
            "Content-Type":"application/json",
        }
        console.log(header)
        return new Promise(function(resolve){
            axios.post(Global.urlCubos + request,null, {headers:header})
            .then(r => resolve(r))
            .catch(r => resolve(r))
        })
    }
}