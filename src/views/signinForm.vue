<template>
    <v-container class="container"  >
        <h1>Sign in</h1>
        <v-form ref="form">
            <v-row>
                <v-col cols="12">
                   <v-text-field prepend-inner-icon="mdi-account" label="Name"/>
                   <v-text-field prepend-inner-icon="mdi-account" label="Lastname"/>
                   <v-text-field prepend-inner-icon="mdi-home" label="adress"/>
                </v-col>
                <v-col cols="6">
                   <v-text-field prepend-inner-icon="mdi-email" label="e-mail"/>
                </v-col> 
                <v-col cols="6">
                   <v-text-field prepend-inner-icon="mdi-cellphone" label="phone"/>    
                </v-col>
                <v-col cols="6">
                    <v-btn block color="red" depressed dark to="/">Cancel</v-btn>    
                </v-col>
                <v-col cols="6">
                    <v-btn block color="green" depressed dark>Acept</v-btn>    
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
 .container{
    width: 600px;
 }
</style>