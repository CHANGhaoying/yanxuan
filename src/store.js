import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        list: [],
        detailData: [],
        size: [],
        
    },
    mutations: {
        
        list(state, load) {
            state.list = load;
           
        },
        detail(state,load) {
            state.detailData = load;
            
        },
        size(state,load){
            state.size = load;
        },
        
    },
});
export default store
