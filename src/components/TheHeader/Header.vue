<template>
  <v-app-bar app elevation="0" outlined >
      <div class="d-flex align-center">
          <v-btn plain>
              <v-icon>
                  mdi-format-list-bulleted
                </v-icon>
          </v-btn>
          <v-spacer/>
        <v-img
          alt="Biosintec Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          max-width="100"
          src="../../assets/biosintec.png"
          width="60"
          @click="tohome"
        />
      </div>

      <v-spacer></v-spacer>
      <div v-show="true">
        <v-btn target="_blank" text @click="toLogin">
          <span class="mr-2">Login</span>
        </v-btn>
        <span class="mr-2">/</span>
        <v-btn target="_blank" text @click="toSignin" >
          <span class="mr-2">Sign in</span>
        </v-btn>
      </div>

      <div v-show="false">
        <v-btn target="_blank" text>
          <span class="mr-2">Log Out</span>
        </v-btn>
      </div>

      <div class="d-flex align-center">
          <v-btn plain>
              <v-icon>
                  mdi-shopping
                </v-icon>
          </v-btn>
      </div>
    </v-app-bar>
    
</template>

<script>
export default {
methods:{
  toLogin(){
    const redirectUrl = '/login'
    this.$router.replace(redirectUrl)
  },
  tohome(){
    const redirectUrl = '/'
    this.$router.replace(redirectUrl)
  },
  toSignin(){
    const redirectUrl = '/Signin'
    this.$router.replace(redirectUrl)
  }

}
}
</script>

<style>

</style>