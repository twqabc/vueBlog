<template>
    <div id="inf_body">
 <a  :href="git" target="_blank" >
   <img :src="gitimage"/>
 </a>
 
    </div>
    
</template>

<script>
export default {
    data() { //选项 / 数据
            return {
                git: 'sdfjkjl',
                gitimage: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp59835864.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625793514&t=306e0612c255bb5235a6f61f22ce8768'
            }         
              
}

    }
</script>

<style scoped>
#inf_body {
    position: absolute;
    float: left;
}
</style>