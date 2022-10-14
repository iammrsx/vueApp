import axios from "axios";

axios.defaults.baseURL = 'https://api.github.com/'
const userCount = 8;

export const getUsers =({commit}) =>{
    commit('SET_LOADER',true);
   axios.get('users?per_page='+userCount).then(res=>{
     commit('SET_USERS',res.data);
     commit('SET_LOADER',false);
   })
}

export const getUser =({commit},currentUname) =>{
    commit('SET_LOADER',true);
    axios.get('users/'+ currentUname +'/repos').then(res=>{
      commit('SET_USER',res.data);
      commit('SET_LOADER',false);
    })
}