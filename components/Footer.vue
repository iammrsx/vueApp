<template>
<footer>
 
    <ul class="header-list">
        <li>
        <a href="https://github.com/"><img class="logo" :src="gitLogo" /><span>Github User Dashbord</span></a>
        </li>
            
    </ul>  
</footer>
</template>
<script>
import gitLogo from '../assets/gitLogo.png';
export default{
  name : 'Footer',
  data(){
    return {
      gitLogo:gitLogo,
    }
  }
}
</script>
<style scoped lang="scss">
footer {
    background: #03001c;
    min-height: 100px;
    color: #ffffff;
    position: absolute;
    width: 100%;
    bottom: 0;
}
</style>