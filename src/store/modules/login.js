import axios from "axios"

const endpoint = "http://127.0.0.1:8000/"

export default{
    namespaced: true,
    state: {
        token:"",
        isLogged:false
    },

    mutations: {
        setToken(state,payload){
            state.token=payload.access
        },
        setLog(state){
            state.isLogged=true
        }

    },

    actions: {
        async login({commit},Data){
            let logdata={
                email:Data.email,
                password:Data.password
            }
            const res =await axios.post(endpoint + "api/auth/login", logdata)
            commit('setToken', res.data)
            console.log(res)

            return res.statusText
        }

    },

    
}