<template>
   <div class="container px-4 my-5">
    <h1 class="text-center" style="margin-bottom: 20px">LOGIN</h1>
    <div class="row gx-5 mb-3">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="login.email" />
      </div>
    </div>
    <div class="row gx-5 mb-3">
      <label class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" v-model="login.password" />
      </div>
    </div>
    <div class="row gx-5">
      <div class="col-sm-10 offset-sm-2">
        <button @click="getToken()" class="btn btn-info btn-custom">
          Token
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Service from '../services/Service'
const service = new Service();
export default {
    name:"LoginComponent",
    data() {
    return {
      login: {
        email: "",
        password: "",
        },
    }
    },
    mounted(){
      if(localStorage.getItem('authToken')){
                this.$router.push("/perfil")

      }
    },
    methods:{
        getToken(){
            service.getToken(this.login).then((r) => {
                localStorage.setItem('authToken', r.data.response);
                this.$router.push("/perfil")
            })
            .catch(() => {
                this.$router.push("/login")
            } );
        }
    }
}
</script>

<style>

</style>