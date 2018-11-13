import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        banner: [],
        list: [1,2]
    },
    mutations: {
        banner(state,load) {
            state.banner = load;
            
        },
        list(state, load) {
            state.list = load;
           
        },
    },
});
export default store
