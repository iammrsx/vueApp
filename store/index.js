import { createStore } from 'vuex'
// Import axios to make HTTP requests
import axios from "axios";
import state from './state';
import * as getters from './getter';
import * as mutations from './mutations';
import * as actions from './actions';
export default createStore({
    state,
    getters,
    mutations,
    actions
})