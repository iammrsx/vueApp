<template>
<div class="section">
    <div v-if="user.length" class="Users-main-section">
        <div class="main-user">
                <img :class="'userImg'" :src="avatarUrl"/>
                <div class="currentUsername">
                    <a :href="currentuserDetails.url">{{currentuserDetails.login}}</a>
                </div>
        </div>
           
    </div>
    <div v-if="user.length" class="Users-details-section">
        
        <div class="each-user" v-for="data in user" :key="data.full_name">
            <div class="repo-name"><a :href="data.html_url">{{data.full_name}}</a> </div>
            <div class="star-count"><img class="star_icons" :src="starIcon"> : <Strong>{{data.stargazers_count}}</Strong></div>
            <div class="watch-count"><img class="watch_icons" :src="watchIcon"> : <Strong>{{data.watchers_count}}</Strong></div>
            
        </div>
    </div>
    <div class ="userNotfound" v-else>
        <h2> User Details Not Found</h2>
    </div>
</div>
</template>

<script>
import {useRoute} from 'vue-router';
import starIcon from '@/assets/star.png';
import watchIcon from '@/assets/watch.png';
import duckIcon from '@/assets/duck.png';
export default {
    name : 'Users',
    data(){
        return {
            starIcon:starIcon,
            watchIcon:watchIcon,
            duckIcon:duckIcon     
        }
    },
    computed:{
        user(){
            return this.$store.state.user
        },
        currentuserDetails(){
            if(this.$store.state.user.length > 0){
                return this.$store.state.user[0].owner
            }else{
                return []
            }
        },
        avatarUrl(){
            if(this.currentuserDetails.avatar_url){
                return this.currentuserDetails.avatar_url
            }else{
                return this.duckIcon;
            }
        }
    },
    created(){
        const route = useRoute()
        this.currentUname = route.params.username;
        
        this.$store.dispatch('getUser',this.currentUname);
        
    }
}
</script>
<style scoped lang="scss">
.repo-name {
	display: inline-block;
	margin-right: 100px;
	text-align: left;
	width: 400px;
	a {
		text-decoration: none;
		color: black;
		&:hover {
			text-decoration: underline;
			color: skyblue;
		}
	}
}
.section {
	padding: 20px;
	min-height: 500px;
	text-align: center;
}
.currentUsername {
	a {
		font-size: 24px;
		line-height: 1.25;
		color: black;
		font-weight: 600;
		text-decoration: none;
	}
}
.userImg {
	height: 150px;
	width: 150px;
	border-radius: 50%;
}
.Users-details-section {
	max-height: 200px;
	overflow: scroll;
	overflow-x: hidden;
}
.Users-main-section {
	text-align: center;
}
.each-user {
	font-weight: 600;
	color: black;
}
.star_icons {
	height: 30px;
	width: 30px;
	vertical-align: middle;
	border-radius: 50%;
	strong {
		vertical-align: middle;
	}
}
.watch_icons {
	height: 30px;
	width: 30px;
	vertical-align: middle;
	border-radius: 50%;
	strong {
		vertical-align: middle;
	}
}
.star-count {
	padding-top: 5px;
	padding-bottom: 5px;
	width: 100px;
	text-align: left;
	display: inline-block;
}
.watch-count {
	padding-top: 5px;
	padding-bottom: 5px;
	width: 100px;
	text-align: left;
	display: inline-block;
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

</style>