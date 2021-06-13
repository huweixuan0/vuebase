import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        userInfo:{},
        token:""
    },
    mutations:{
        set_token(state, token) {
            state.token = token
            sessionStorage.token = token 
        },
        del_token(state) {
            state.token = ''
            state.userInfo = {}
            sessionStorage.removeItem('token')
        },
        set_userInfo(state, userInfo) {
            state.userInfo = userInfo
        }
    }
})

export default store