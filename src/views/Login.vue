<template>
  <v-container fill-height fluid>
    
    <v-layout align-content-center justify-center>
        
        <v-flex s12 sm8 md4 align-self-center>
            <center><v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/biosintec.png"
          transition="scale-transition"
          width="200"
        /></center>
        <p></p>
        <v-progress-linear
        indeterminate
        :active="loading"
        :indetereminate="loading"
        />
        <p></p>
        <v-card  flat>
            <v-form ref="form" v-model="valid">
            <v-text-field label="Mail example@example.com" v-model="email" required>
            </v-text-field>
            <v-text-field label="Password" v-model="password" type="password" required @keyup.enter="submitForm">
            </v-text-field>
            <v-spacer></v-spacer>
            <v-card-actions >
                <v-btn :disabled="valid" @click="submitForm">
                Log In
                </v-btn>
                <v-snackbar
                color="red"
                centered>
                Datos incorrectos
                </v-snackbar>
            </v-card-actions>
            </v-form>
        </v-card>
        </v-flex>
    </v-layout>

    
</v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data: () => ({
      email: "",
      password:"",
      loading:false,
     
    }),
    methods:{
        
        ...mapActions("login",["login"]),

        async submitForm(){
            this.loading=true;
            let logdata={
                email:this.email,
                password:this.password
            }
            await this.login(logdata).then((response)=>{
                if(response === "OK"){
                    this.loading=false
                }
            })
        },
},
    computed:{
     valid(){
        if(this.email !== "" && this.password !== "" ){
            return false
        }
        else{
            return true
        }
     }
    }
}
</script>

<style>

</style>