<template>
    <div class="top-users">
        <h1>Top User</h1>
        
        <ul :class="'users-list'">
        <li v-if="users.length" v-for="data in users">
        <router-link  :to="'/'+data.login" >
            <div class="user-details">
                <img :class="'img_avatar_url'" :src="data.avatar_url ? data.avatar_url : duckIcon">
               <div>
                <strong> {{data.login}}</strong>
               
               </div>
            </div>
        </router-link>
        <div class="user-linkgit"><a :href="data.html_url" ><img :src="linkIcon">github</a></div>
        </li>
        <li v-else class="userNotfound">
            <h2>{{searchFilterUser}} : User Not Found</h2>
        </li>
        </ul>
    </div>
</template>

<script>
import duckIcon from '@/assets/duck.png';
import linkIcon from '@/assets/link.png';
export default {
    name : 'Home',
    data(){
        return {
            duckIcon : duckIcon,
            linkIcon:linkIcon
        }
    },
    computed:{
        users(){
            return this.$store.state.users.filter((v)=>{
                if(v.login.indexOf(this.searchFilterUser) != -1) return v.login
            })
        },
        searchFilterUser(){
            console.log(this.$store.state.query)
            return this.$store.state.query
        }    
    },
    created(){    
        this.$store.dispatch('getUsers');
    },

}
</script>
<style lang="scss" scoped>
.user-linkgit {
	padding-top: 10px;
	a {
		color: slateblue !important;
	}
	img {
		height: 17px;
		width: 17px;
		vertical-align: middle;
	}
}
.top-users {
	text-align: center;
	h1 {
		font-size: 30px;
		padding: 20px;
		font-weight: 600;
	}
}
.img_avatar_url {
	height: 140px;
	width: 140px;
	border-radius: 50%;
}
.users-list {
	li {
		display: inline-block;
		padding: 20px;
		a {
			color: black;
			text-decoration: none;
		}
	}
}
.userNotfound {
	text-align: center;
	width: 100%;
	margin: auto;
	h2 {
		font-size: 24px;
		font-weight: 600;
		text-align: center;
		padding: 20px;
	}
}
.user-details {
	strong {
		font-size: 24px;
		font-weight: 600;
	}
}

</style>